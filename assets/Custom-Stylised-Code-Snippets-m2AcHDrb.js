const n=`# Custom Snippets for Stylised Code\r
\r
This guide builds from the React/Vite/TS set up consistent with a lot of the Workflows on this site.\r
\r
It is worth deciding on the theme you want. Official themes are available [here](https://github.com/PrismJS/prism-themes), but you can also look in \`node_modules/prismjs/themes/\` after you install the packages.\r
\r
Begin by installing the following:\r
\r
\`\`\`bash\r
npm install prismjs @types/prismjs\r
npm install vite-plugin-prismjs\r
\`\`\`\r
\r
Inside of \`vite.config.ts\`, include the following plugin:\r
\r
\`\`\`typescript\r
import { defineConfig } from 'vite';\r
import prism from 'vite-plugin-prismjs';\r
\r
export default defineConfig({\r
  plugins: [\r
    prism({\r
      languages: ['javascript', 'css', 'html', 'typescript'],\r
      plugins: ['line-numbers'],\r
      theme: 'tomorrow', // <= change this to your theme\r
      css: true,\r
    }),\r
  ],\r
});\r
\`\`\`\r
\r
The inside your \`main.ts\` file, include:\r
\r
\`\`\`typescript\r
import 'prismjs/themes/prism-tomorrow.css';  // <= change this to your theme\r
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';\r
import 'prismjs';\r
\`\`\`\r
\r
Then, when you want to make the code work:\r
\r
\`\`\`typescript\r
<pre>\r
    <code\r
        className="language-python"\r
    >\r
        def greet():\r
            print("Hello, world!")\r
    </code>\r
</pre>\r
\`\`\`\r
\r
## Dynamic Rerendering\r
\r
If your code snippet has dynamic visibility, you will need to rerender it when it becomes visible. For example:\r
\r
\`\`\`typescript\r
import { highlightElement } from 'prismjs'; // <= You will need this\r
\r
const ActionRender = () => {\r
  const [open, setOpen] = useState<boolean>(true); // <= Example toggle\r
  const codeRef = useRef<HTMLElement | null>(null);\r
\r
  useEffect(() => {\r
    if (open && codeRef.current) {\r
      highlightElement(codeRef.current);\r
    }\r
  }, [open]);\r
\r
  return (\r
      {open &&\r
        <pre>\r
          <code\r
            ref={codeRef as any}\r
            className="language-python"\r
          >\r
            {action[language]}\r
          </code>\r
        </pre>\r
      }\r
  );\r
}\r
\`\`\``;export{n as default};
