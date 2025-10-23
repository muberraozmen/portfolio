# Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- Vite
- TypeScript
- React
- shadcn/ui (Radix UI based components)
- Tailwind CSS

## Local Development

1. Ensure you have Node.js and npm installed 
2. Install dependencies:
```sh
npm install
```
3. Start the dev server:
```sh
npm run dev
```
4. Open http://localhost:8080 in your browser

## Build

```sh
npm run build
npm run preview
```

## Deploying to GitHub Pages

1. If deploying to `https://<username>.github.io/<repo>/`, set the base path in `vite.config.ts`:
```js
base: '/<repo>/'
```
2. Build the project:
```sh
npm run build
```
3. Enable GitHub Pages in your repository:
   - Settings → Pages → Source: GitHub Actions (or `gh-pages` branch if using a different flow)

For a custom domain, keep `base: '/'` and configure DNS per GitHub Pages docs.

## Project Structure

- `src/main.tsx`: App bootstrap
- `src/App.tsx`: Providers and routes
- `src/pages/`: Pages (including landing page)
- `src/components/`: UI sections and shadcn components
- `tailwind.config.ts`: Tailwind theme and tokens
