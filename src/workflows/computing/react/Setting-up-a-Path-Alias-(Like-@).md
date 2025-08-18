# Setting up a Path Alias (Like @)

I am assuming you set up a React/TS/Vite site. I'll add more information for other cases when they arise.

It `tsconfig.app.json`, add the following in the `compilerOptions` (keep everything else):

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```


Go to `vite.config.ts`, and add the following in:

```ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Add this import too 

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Add the whole resolve objects
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

If you are getting an import error for `path`, then just run this:

```bash
npm install --save-dev @types/node
```