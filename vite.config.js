import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Multi-page build: the marketing site plus the standalone
// "Know Our Team" / "About Me" pages that open in their own tab.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        team: 'team.html',
        about: 'about.html',
      },
    },
  },
})
