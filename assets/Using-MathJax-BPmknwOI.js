const n=`\r
\r
# Setting Up MathJax in a React Project\r
\r
## Install Dependencies\r
\r
Run the following command:\r
\`\`\`sh\r
npm install better-react-mathjax\r
\`\`\`\r
or\r
\`\`\`sh\r
yarn add better-react-mathjax\r
\`\`\`\r
\r
---\r
\r
## Basic Usage\r
Wrap your app (or a component) with \`<MathJaxContext>\` and use \`<MathJax>\` inside it:\r
\`\`\`tsx\r
import { MathJax, MathJaxContext } from "better-react-mathjax";\r
\r
const MathComponent = () => (\r
  <MathJaxContext>\r
    <MathJax>{"\\\\(E = mc^2\\\\)"}</MathJax>\r
  </MathJaxContext>\r
);\r
\r
export default MathComponent;\r
\`\`\`\r
Supports both inline (\`\\( ... \\)\`) and block (\`\\[ ... \\]\`) math.\r
\r
---\r
\r
## Configuring MathJax\r
To enable additional LaTeX features (e.g., \`\\boldsymbol\`, \`\\align\`), pass a custom config:\r
\`\`\`tsx\r
const mathJaxConfig = {\r
  tex: {\r
    packages: { "[+]": ["base", "autoload", "mathtools"] }, // Loads extra math features\r
  },\r
};\r
\r
<MathJaxContext config={mathJaxConfig}>\r
  <MathJax>{"\\\\boldsymbol{x} = 5"}</MathJax>\r
</MathJaxContext>;\r
\`\`\`\r
\r
You may experience trouble with this, unfortunately. When a good solution is found, this page will be updated.\r
\r
---\r
\r
## Handling Markdown with MathJax\r
If using **ReactMarkdown**, integrate MathJax like this:\r
\`\`\`tsx\r
<MathJaxContext config={mathJaxConfig}>\r
  <ReactMarkdown\r
    remarkPlugins={[remarkMath]}\r
    components={{\r
      p: ({ children }) => <MathJax dynamic>{children}</MathJax>,\r
    }}\r
  >\r
    {markdownContent}\r
  </ReactMarkdown>\r
</MathJaxContext>;\r
\`\`\`\r
\r
---\r
\r
More will be added to this article in the future.`;export{n as default};
