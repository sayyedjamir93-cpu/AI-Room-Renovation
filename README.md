# RoomRevamp AI

RoomRevamp AI is a polished room renovation concept tool. Upload a room photo, choose an interior style, and explore an AI-inspired redesign preview.

## Features

- Upload JPG, PNG, or WEBP room photos
- Drag-and-drop photo support
- Living room, bedroom, and kitchen sample rooms
- Interior style selection, including Scandinavian, Japandi, Modern luxury, Minimalist, Industrial, and Bohemian
- Before-and-after comparison slider
- Alternative design direction previews
- Save and share actions
- Responsive layout for desktop and mobile

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Configure real AI renovations

Copy `.env.example` to `.env` and add a Replicate API token:

```bash
REPLICATE_API_TOKEN=your_token_here
```

The token is used only by the Vite server and is never sent to the browser. The app uses Replicate's image-to-image model to preserve the uploaded room's layout while applying the selected room, style, budget, and personal notes.

### Run locally

```bash
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173/`.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

- `index.html` - application markup
- `styles.css` - page styling and responsive layout
- `app.js` - upload, style selection, comparison, and interaction logic
- `public/assets/rooms/` - local room assets
- `src/index.css` - Tailwind/PostCSS source styles

## Image Generation

With `REPLICATE_API_TOKEN` configured, the Generate button sends the uploaded room photo and renovation brief to Replicate. Without a token, the app keeps its preview mode and displays a setup message instead of presenting a stock image as a real transformation.

## License

This project is private and intended for the RoomRevamp AI application.
