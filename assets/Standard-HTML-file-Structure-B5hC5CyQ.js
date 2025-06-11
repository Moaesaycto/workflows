const t=`# Setting up a HTML File Correctly\r
\r
I often forget how to set up a raw HTML file without looking it up. Here's the way to get started:\r
\r
\`\`\`html\r
<!DOCTYPE html>\r
<html lang="en">\r
<head>\r
    <meta charset="UTF-8">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r
    <title>Document</title>\r
</head>\r
<body>\r
\r
</body>\r
</html>\r
\`\`\`\r
\r
If you want to add a CSS file, then you simply do it by adding the file to the \`<head>\`:\r
\r
\`\`\`html\r
<head>\r
    <link rel="stylesheet" href="style.css">\r
    <!-- Other stuff -->\r
</head>\r
\`\`\``;export{t as default};
