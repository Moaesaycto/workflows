import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mdPlugin from 'vite-plugin-md';
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mdPlugin(),
    visualizer({ open: true })
  ],
  base: '/workflows/', // Use your GitHub repository name here
  build: {
    minify: "terser",
    outDir: 'dist', // Optional: Ensure output goes to the 'dist' folder
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) return "vendor-react";
            if (id.includes("prismjs")) return "vendor-prism";
            return "vendor"; // Catch-all for remaining node_modules
          }
        },
      }
    }
  },
  assetsInclude: ['**/*.md'],
})
