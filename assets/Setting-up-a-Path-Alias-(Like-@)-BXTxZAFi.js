const n=`# Setting up a Path Alias (Like @)\r
\r
I am assuming you set up a React/TS/Vite site. I'll add more information for other cases when they arise.\r
\r
It \`tsconfig.app.json\`, add the following in the \`compilerOptions\` (keep everything else):\r
\r
\`\`\`json\r
{\r
  "compilerOptions": {\r
    "baseUrl": ".",\r
    "paths": {\r
      "@/*": ["src/*"]\r
    }\r
  }\r
}\r
\`\`\`\r
\r
\r
Go to \`vite.config.ts\`, and add the following in:\r
\r
\`\`\`ts\r
import { defineConfig } from 'vite'\r
import tailwindcss from '@tailwindcss/vite'\r
import react from '@vitejs/plugin-react'\r
import path from 'path' // Add this import too \r
\r
// https://vite.dev/config/\r
export default defineConfig({\r
  plugins: [\r
    react(),\r
    tailwindcss(),\r
  ],\r
\r
  // Add the whole resolve objects\r
  resolve: {\r
    alias: {\r
      '@': path.resolve(__dirname, 'src'),\r
    },\r
  },\r
})\r
\`\`\`\r
\r
If you are getting an import error for \`path\`, then just run this:\r
\r
\`\`\`bash\r
npm install --save-dev @types/node\r
\`\`\``;export{n as default};
