import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/repository/', // Use your GitHub repository name here
  build: {
    outDir: 'dist', // Optional: Ensure output goes to the 'dist' folder
  },
})
