# Setting Up Vite Project with Tailwind

I do this often, so rather than jumping between sites on the web, I may as well just put all the useful information here.

---

## Setting up Vite

Begin with the following:

```shell
npm create vite@latest my-vue-app -- --template react-ts
```

You can change it out to different templates. There are *loads*, including `vanilla`, `vanilla-ts`, `vue`, `vue-ts`, `react`, `react-ts`, `react-swc`, `react-swc-ts`, `preact`, `preact-ts`, `lit`, `lit-ts`, `svelte`, `svelte-ts`, `solid`, `solid-ts`, `qwik`, `qwik-ts`.

Follow the instructions that come up and you've set up the project.

---

## Adding Tailwind

Begin by commanding:

```shell
npm install tailwindcss @tailwindcss/vite
```

In `vite.config.ts`, add the following lines:

```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' /* + This line */
export default defineConfig({
  plugins: [
    tailwindcss(), /* + This line */
  ],
})
```

Inside `index.css` or your main style sheet, add

```css
@import "tailwindcss";
```

## Finishing Touches

Finally, run:

```shell
npm run dev
```

## References
- [Getting Started - Vite](https://vite.dev/guide/)
- [create-vite GitHub](https://github.com/vitejs/vite/tree/main/packages/create-vite)