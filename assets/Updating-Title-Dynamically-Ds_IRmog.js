const t=`# Updating the Title of a React Document Dynamically\r
\r
You know the name of the website that appears in the actual tab being shown on your browser? That's what we want to use. Now, you *could* use [helmet](https://www.npmjs.com/package/react-helmet) or the [async equivalent](https://www.npmjs.com/package/react-helmet-async), but for this, we'll make our own hook.\r
\r
Simply create the custom wrapper around the \`document.title\` property:\r
\r
\`\`\`javascript\r
import { useEffect } from "react";\r
\r
export function useTitle(title: string) {\r
    useEffect(() => {\r
        document.title = title;\r
    }, [title]);\r
}\r
\`\`\``;export{t as default};
