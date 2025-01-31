const r=`# Custom Scrollbars\r
\r
There are certain things you need to do for both vertical and horizontal scrollbars. Below is the CSS used for this site. You can add shadows and other things, but personally, I keep it simple. First, define your variables:\r
\r
\`\`\`css\r
:root {\r
    --scrollbar-bg: #18181B;\r
    --scrollbar-thumb-bg: #515153;\r
    --scrollbar-thumb-bg-horizontal: #555;\r
    --scrollbar-border: #18181B;\r
}\r
\`\`\`\r
\r
## Vertical Scrollbar\r
\r
The vertical scroll bar for the main site uses the \`body\` tag, but you can change it to your own class if you'd like to. See the horizontal scrollbar if you are unsure how to do that.\r
\r
\`\`\`css\r
body::-webkit-scrollbar {\r
    background-color: var(--scrollbar-bg);\r
    width: 16px;\r
}\r
\r
body::-webkit-scrollbar-track {\r
    background-color: var(--scrollbar-bg);\r
}\r
\r
body::-webkit-scrollbar-thumb {\r
    background-color: var(--scrollbar-thumb-bg);\r
    border-radius: 16px;\r
    border: 3px solid var(--scrollbar-border);\r
}\r
\r
body::-webkit-scrollbar-button {\r
    display: none;\r
}\r
\`\`\`\r
\r
## Horizontal Scrollbar\r
\r
Horizontal Scrollbars are a bit more annoying. In the example below, we use the class \`horizontal-scroll\` to identify which one requires the styling. This can be applied as above if needed.\r
\r
\`\`\`css\r
.horizontal-scroll::-webkit-scrollbar {\r
    width: 10px;\r
    height: 10px;\r
    background-color: var(--scrollbar-bg);\r
}\r
\r
.horizontal-scroll::-webkit-scrollbar-track {\r
    border-radius: 10px;\r
    background-color: var(--scrollbar-bg);\r
}\r
\r
.horizontal-scroll::-webkit-scrollbar-thumb {\r
    border-radius: 10px;\r
    background-color: var(--scrollbar-thumb-bg-horizontal);\r
}\r
\`\`\`\r
\r
## References\r
 - [Extensive vertical scrollbar examples](https://codepen.io/devstreak/pen/dMYgeO)\r
 - [Useful example of horizontal scrollbars](https://codepen.io/Avelin-SAMA/pen/YzqEYjo)\r
\r
\r
`;export{r as default};
