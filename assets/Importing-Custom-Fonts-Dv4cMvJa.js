const n=`# Importing Custom Fonts with CSS\r
\r
You can import fonts by including the following in your \`<head>\` of your HTML file:\r
\r
\`\`\`html\r
<link rel="preconnect" href="https://fonts.googleapis.com">\r
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\r
<link href="<font URL goes here>" rel="stylesheet">\r
\`\`\`\r
\r
Alternatively, if you want to import the font from a file, you can do so with this:\r
\r
\`\`\`css\r
@font-face {\r
    font-family: "Day Roman";\r
    src: url('/fonts/DayRoman.ttf') format('truetype');\r
}\r
\`\`\`\r
\r
Then, in your CSS class, you can use the fonts as you would normally:\r
\r
\`\`\`css\r
body {\r
    font-family: "Roboto", sans-serif;\r
}\r
\`\`\`\r
`;export{n as default};
