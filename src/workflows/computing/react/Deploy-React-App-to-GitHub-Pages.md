# Deploying a React App to GitHub Pages

## 1. Install `gh-pages`
Run inside your project directory:

```sh
npm install gh-pages --save-dev
```

## 2. Configure `package.json`
Add the **homepage** field at the top:

```json
"homepage": "http://<username>.github.io/<repository>"
```

Then, inside `"scripts"`, add:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

- **For Vite projects**, use `"deploy": "gh-pages -d dist"` instead.

## 3. Deploy to GitHub Pages
Push all changes, then run:

```sh
npm run deploy
```

## 4. Enable GitHub Pages
- Go to **Settings > Pages**.
- Set the branch to `gh-pages`.

## 5. (Vite Only) Update `vite.config.ts`
If the site doesn’t load, update `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
export default defineConfig({
  base: '/repository/', // Use your repo name
  build: { outDir: 'dist' }
});
```

If issues persist, ensure React is included:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/repository/',
  build: { outDir: 'dist' },
  plugins: [react()],
});
```
