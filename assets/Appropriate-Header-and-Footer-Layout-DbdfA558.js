const n=`# Appropriate Header and Footer Layout\r
\r
## Plain React and CSS\r
\r
First, create your header and footer components. This means that the footer will:\r
\r
- stick to the window bottom when the page is short and the screen is not filled, and\r
- stay at the document end and move down as normal when there is more than a screenful of content (instead of overlapping the content).\r
\r
In this example, we will use very minimal examples. Next, we will use the following CSS\r
\r
\`\`\`css\r
html, body, #root {\r
  height: 100%;\r
  margin: 0;\r
}\r
\r
.app-container {\r
  display: flex;\r
  flex-direction: column;\r
  min-height: 100vh; /* Ensure full height */\r
}\r
\r
main {\r
  flex: 1; /* Pushes footer down when content is short */\r
}\r
\`\`\`\r
\r
Finally, create your App with the style above.\r
\r
\`\`\`jsx\r
import './App.css'\r
\r
function App() {\r
\r
  return (\r
    <div className="app-container">\r
      <header>Header</header>\r
      <main>\r
        <p>Page content goes here...</p>\r
      </main>\r
      <footer>Footer</footer>\r
    </div>\r
  )\r
}\r
\r
export default App\r
\`\`\`\r
\r
## Using Tailwind\r
\r
If you're using [Tailwind](https://tailwindcss.com/), you can simplify the structure with the following:\r
\r
\`\`\`jsx\r
function App() {\r
  return (\r
    <div className="flex flex-col min-h-screen">\r
      <header>Header</header>\r
      <main className="flex-1">\r
        <p>Page content goes here...</p>\r
      </main>\r
      <footer>Footer</footer>\r
    </div>\r
  );\r
}\r
\r
export default App;\r
\`\`\``;export{n as default};
