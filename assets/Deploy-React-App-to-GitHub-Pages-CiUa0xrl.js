const n=`# Deploying a React App to GitHub Pages\r
\r
## 1. Install \`gh-pages\`\r
Run inside your project directory:\r
\r
\`\`\`sh\r
npm install gh-pages --save-dev\r
\`\`\`\r
\r
## 2. Configure \`package.json\`\r
Add the **homepage** field at the top:\r
\r
\`\`\`json\r
"homepage": "http://<username>.github.io/<repository>"\r
\`\`\`\r
\r
Then, inside \`"scripts"\`, add:\r
\r
\`\`\`json\r
"predeploy": "npm run build",\r
"deploy": "gh-pages -d build"\r
\`\`\`\r
\r
- **For Vite projects**, use \`"deploy": "gh-pages -d dist"\` instead.\r
\r
## 3. Deploy to GitHub Pages\r
Push all changes, then run:\r
\r
\`\`\`sh\r
npm run deploy\r
\`\`\`\r
\r
## 4. Enable GitHub Pages\r
- Go to **Settings > Pages**.\r
- Set the branch to \`gh-pages\`.\r
\r
## 5. (Vite Only) Update \`vite.config.ts\`\r
If the site doesn’t load, update \`vite.config.ts\`:\r
\r
\`\`\`ts\r
import { defineConfig } from 'vite';\r
export default defineConfig({\r
  base: '/repository/', // Use your repo name\r
  build: { outDir: 'dist' }\r
});\r
\`\`\`\r
\r
If issues persist, ensure React is included:\r
\r
\`\`\`ts\r
import { defineConfig } from 'vite'\r
import react from '@vitejs/plugin-react'\r
\r
export default defineConfig({\r
  base: '/repository/',\r
  build: { outDir: 'dist' },\r
  plugins: [react()],\r
});\r
\`\`\`\r
`;export{n as default};
