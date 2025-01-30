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
          if (id.includes("node_modules")) {
              if (id.includes("react") || id.includes("react-dom")) {
                  return "vendor-react"; // React-related code
              }
              if (id.includes("lodash")) {
                  return "vendor-lodash"; // Lodash separate chunk
              }
              if (id.includes("prismjs")) {
                  return "vendor-prism"; // Syntax highlighting
              }
              return "vendor"; // General vendor chunk
          }
      },
      }
    }
  },
  assetsInclude: ['**/*.md'],
})
