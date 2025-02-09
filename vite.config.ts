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
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Moves all dependencies into a separate chunk
          }
          if (id.includes("react-syntax-highlighter")) {
            return "syntax-highlighter";
          }
          // Put better-react-mathjax in its own chunk, etc.
          if (id.includes("better-react-mathjax")) {
            return "mathjax";
          }
          // You could add more chunk splits here as desired

          // If you also want all node_modules in a vendor chunk:
          if (id.includes("node_modules")) {
            return "vendor";
          }
        }
      }
    }
  },
  assetsInclude: ['**/*.md'],
})
