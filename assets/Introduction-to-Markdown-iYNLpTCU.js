const n=`\r
# Markdown Guide for This Site\r
Markdown is a simple way to format text using plain text syntax. This guide will help you write and format articles for the site. Please note that all information on this is general to all Markdown files **except for equation rendering**, that is only for this site.\r
\r
---\r
\r
## Headings\r
Use \`#\` to create **headings**:\r
\`\`\`md\r
# This is a H1 heading\r
## This is a H2 heading\r
### This is a H3 heading\r
\`\`\`\r
 **Example Output:**\r
# This is a H1 heading  \r
## This is a H2 heading  \r
### This is a H3 heading  \r
\r
---\r
\r
## Bold, Italics, and Strikethrough\r
\`\`\`md\r
**Bold text**\r
*Italic text*\r
~~Strikethrough~~\r
\`\`\`\r
 **Example Output:**  \r
**Bold text**  \r
*Italic text*  \r
~~Strikethrough~~  \r
\r
Funnily enough, Markdown does not have underlined text for some reason.\r
\r
---\r
\r
## Lists\r
### **Unordered Lists (Bullets)**\r
\`\`\`md\r
- Item 1\r
- Item 2\r
  - Sub-item 1\r
  - Sub-item 2\r
\`\`\`\r
 **Example Output:**  \r
- Item 1  \r
- Item 2  \r
  - Sub-item 1  \r
  - Sub-item 2  \r
\r
### **Ordered Lists (Numbered)**\r
\`\`\`md\r
1. First item\r
2. Second item\r
3. Third item\r
\`\`\`\r
 **Example Output:**  \r
1. First item  \r
2. Second item  \r
3. Third item  \r
\r
---\r
\r
## Code Blocks\r
Use **backticks** (\`) for inline and block code.\r
\r
### **Inline Code**\r
\`\`\`md\r
Use \`print("Hello, world!")\` in Python.\r
\`\`\`\r
 **Example Output:**  \r
Use \`print("Hello, world!")\` in Python.\r
\r
### **Multi-line Code Blocks**\r
Use triple backticks for multi-line code:\r
\`\`\`md\r
\`\`\`python\r
def hello():\r
    print("Hello, world!")\r
\`\`\`\r
\`\`\`\r
 **Example Output:**\r
\`\`\`python\r
def hello():\r
    print("Hello, world!")\r
\`\`\`\r
\r
---\r
\r
## Links\r
Create links using this format:\r
\`\`\`md\r
[Link Text](https://example.com)\r
\`\`\`\r
 **Example Output:**  \r
[Visit Example](https://www.apple.com/)\r
\r
---\r
\r
## Blockquotes\r
Use \`>\` to create a **blockquote**:\r
\`\`\`md\r
> This is a blockquote.\r
\`\`\`\r
 **Example Output:**\r
> This is a blockquote.\r
\r
---\r
\r
## Tables\r
Use pipes (\`|\`) to create **tables**:\r
\r
\`\`\`md\r
| Name  | Age | Country |\r
|-------|-----|---------|\r
| Alice | 25  | USA     |\r
| Bob   | 30  | Canada  |\r
\`\`\`\r
\r
 **Example Output:**\r
\r
| Name  | Age | Country |\r
|-------|-----|---------|\r
| Alice | 25  | USA     |\r
| Bob   | 30  | Canada  |\r
\r
---\r
\r
## Images\r
\r
If you intend on including any, send through the image(s) you have as files, and include it \r
\r
\`\`\`md\r
![Image Alt](path/to/image.png)\r
\`\`\`\r
\r
For example, I have uploaded a simple [GIF](https://www.tumblr.com/unstickyhunter/770228651213078528) to demonstrate. The file is already loaded into the media for the site as:\r
\r
\`\`\`md\r
![Spinning Burger](./example.webp)\r
\`\`\`\r
\r
 **Example Output:**\r
![Spinning Burger](./example.webp)\r
\r
I will mostly handle this, just make sure to name the file something unique and consistent with the image you send/reference in your file.\r
\r
\r
---\r
\r
## Special Equation Formatting for This Site\r
**This site uses a custom equation format!**\r
\r
MathJax is a bit strange, and requires two backslashes to could as a single one. So, for a new line, you'd do \`\\\\\\\\\` instead of \`\\\\\`. You will not be able to use \`$\` or \`$$\`.\r
**Inline equations** use **\`\\\\(\` and \`\\\\)\`** like this:\r
  \`\`\`md\r
  The equation \\\\(E = mc^2\\\\) describes mass-energy equivalence.\r
  \`\`\`\r
   **Example Output:**  \r
  The equation \\\\(E = mc^2\\\\) describes mass-energy equivalence.\r
\r
**Block equations** use **\`\\\\[\` and \`\\\\]\`**, with a blank line before and after:\r
  \`\`\`md\r
  \\\\[  \r
      f(x) = x^2  \r
  \\\\]\r
  \`\`\`\r
   **Example Output:**\r
  \\\\[\r
  f(x) = x^2\r
  \\\\]\r
\r
`;export{n as default};
