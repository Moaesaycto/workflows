const e=`# Creating a Basic Search in React (with Typescript)\r
\r
Let's suppose we have an object of the form:\r
\r
\`\`\`typescript\r
type SearchObject = {\r
    title: string, // We will be sorting by this attribute\r
    meta: {...}\r
}\r
\`\`\`\r
\r
Begin by getting the main list of these objects:\r
\r
\`\`\`tsx\r
const allSearchObjects: SearchObject[] = {...} // Your original list here\r
\`\`\`\r
\r
We need to define a \`useState\` to keep track of both the objects we want to show as well as the text that is used to filter them.\r
\r
\`\`\`tsx\r
    const [searchObjects, setSearchObjects] = useState<SearchObject[]>(() => {\r
        const sorted = [...(allSearchObjects)];\r
        sorted.sort((a, b) => a.title.localeCompare(b.title));\r
        return sorted;\r
    });\r
\r
    const [searchText, setSearchText] = useState<string>();\r
\`\`\`\r
\r
Now, we need to handle a \`useEffect\` hook to update our list when relevant.\r
\r
\`\`\`tsx\r
useEffect(() => {\r
    if (!searchText) {\r
        setSearchObjects(allSearchObjects);\r
    } else {\r
        setSearchObjects(\r
            searchObjects.filter((e) =>\r
                e.title.toLowerCase().includes(searchText?.toLowerCase() || "") // This is to sort it\r
            )\r
        )\r
    }\r
}, [searchText]);\r
\`\`\`\r
\r
To actually use this, we need an input:\r
\r
\`\`\`tsx\r
<input type="text" onChange={e => setSearchText(e.target.value)} />\r
\`\`\`\r
\r
Finally, this will be:\r
\r
\`\`\`tsx\r
<ul>\r
    { articles.map((e, idx) => (<li key={idx}>{e.title}</li>)); }\r
</ul>\r
\`\`\``;export{e as default};
