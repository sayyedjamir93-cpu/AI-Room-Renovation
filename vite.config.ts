import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const replicatePlugin = (): Plugin => ({
  name: 'roomrevamp-replicate',
  configureServer(server) {
    server.middlewares.use('/api/renovate', async (request, response, next) => {
      if (request.method !== 'POST') {
        next()
        return
      }

      const token = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.REPLICATE_API_TOKEN
      if (!token) {
        response.statusCode = 503
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify({ error: 'REPLICATE_API_TOKEN is not configured.' }))
        return
      }

      try {
        const chunks: Uint8Array[] = []
        for await (const chunk of request) chunks.push(chunk)
        const body = JSON.parse(Buffer.concat(chunks).toString('utf8')) as {
          image: string
          prompt: string
        }
        const predictionResponse = await fetch('https://api.replicate.com/v1/models/black-forest-labs/flux-kontext-pro/predictions', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            input: {
              input_image: body.image,
              prompt: body.prompt,
              aspect_ratio: 'match_input_image',
              output_format: 'jpg',
              safety_tolerance: 2
            }
          })
        })
        const prediction = await predictionResponse.json() as { id?: string; status?: string; output?: string | string[]; urls?: { get?: string }; error?: string }
        if (!predictionResponse.ok || !prediction.id) throw new Error(prediction.error || 'Replicate did not accept the renovation request.')

        let result = prediction
        for (let attempt = 0; attempt < 45 && !['succeeded', 'failed', 'canceled'].includes(result.status || ''); attempt += 1) {
          await new Promise(resolve => setTimeout(resolve, 2000))
          const pollResponse = await fetch(prediction.urls?.get || `https://api.replicate.com/v1/predictions/${prediction.id}`, { headers: { Authorization: `Bearer ${token}` } })
          result = await pollResponse.json() as typeof result
        }

        const imageUrl = Array.isArray(result.output) ? result.output[0] : result.output
        if (result.status !== 'succeeded' || !imageUrl) throw new Error('Replicate could not create a renovation preview.')
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify({ imageUrl }))
      } catch (error) {
        response.statusCode = 502
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify({ error: error instanceof Error ? error.message : 'Renovation generation failed.' }))
      }
    })
  }
})

export default defineConfig({
  plugins: [react(), replicatePlugin()],
  server: {
    port: 5173,
    host: true,
  },
})
