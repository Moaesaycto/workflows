import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mdPlugin from 'vite-plugin-md';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mdPlugin()
  ],
  base: '/workflows/', // Use your GitHub repository name here
  build: {
    outDir: 'dist', // Optional: Ensure output goes to the 'dist' folder
  },
})
