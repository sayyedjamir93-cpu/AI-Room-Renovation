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

The current experience uses concept preview images and does not call an image generation API yet. Connect an image generation service in `app.js` to produce custom transformations from uploaded photos.

## License

This project is private and intended for the RoomRevamp AI application.
