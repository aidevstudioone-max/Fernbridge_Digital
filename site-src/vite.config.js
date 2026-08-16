import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Builds straight into the repo root so GitHub Pages (serving main/root,
// no build step) can pick up index.html + assets/ directly. Source lives
// here in site-src/ and is never itself deployed.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    outDir: path.resolve(__dirname, '..'),
    emptyOutDir: false,
    assetsDir: 'assets',
  },
})
