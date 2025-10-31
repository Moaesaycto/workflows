# Custom Snippets for Stylised Code

This guide builds from the React/Vite/TS set up consistent with a lot of the Workflows on this site.

It is worth deciding on the theme you want. Official themes are available [here](https://github.com/PrismJS/prism-themes), but you can also look in `node_modules/prismjs/themes/` after you install the packages.

Begin by installing the following:

```bash
npm install prismjs @types/prismjs
npm install vite-plugin-prismjs
```

Inside of `vite.config.ts`, include the following plugin:

```typescript
import { defineConfig } from 'vite';
import prism from 'vite-plugin-prismjs';

export default defineConfig({
  plugins: [
    prism({
      languages: ['javascript', 'css', 'html', 'typescript'],
      plugins: ['line-numbers'],
      theme: 'tomorrow', // <= change this to your theme
      css: true,
    }),
  ],
});
```

The inside your `main.ts` file, include:

```typescript
import 'prismjs/themes/prism-tomorrow.css';  // <= change this to your theme
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs';
```

Then, when you want to make the code work:

```typescript
<pre>
    <code
        className="language-python"
    >
        def greet():
            print("Hello, world!")
    </code>
</pre>
```

## Dynamic Rerendering

If your code snippet has dynamic visibility, you will need to rerender it when it becomes visible. For example:

```typescript
import { highlightElement } from 'prismjs'; // <= You will need this

const ActionRender = () => {
  const [open, setOpen] = useState<boolean>(true); // <= Example toggle
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open && codeRef.current) {
      highlightElement(codeRef.current);
    }
  }, [open]);

  return (
      {open &&
        <pre>
          <code
            ref={codeRef as any}
            className="language-python"
          >
            {action[language]}
          </code>
        </pre>
      }
  );
}
```