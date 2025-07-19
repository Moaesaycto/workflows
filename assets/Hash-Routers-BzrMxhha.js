const r=`# Using Hash Routers in React\r
\r
Begin by installing \`react-router-dom\` with the following command:\r
\r
\`\`\`bash\r
npm install react-router-dom\r
\`\`\`\r
\r
Import everything as you need and use it as your would with regular routes in react:\r
\r
\`\`\`javascript\r
import React from 'react';\r
import { HashRouter, Routes, Route } from 'react-router-dom';\r
import Home from './Home';\r
import About from './About';\r
\r
function App() {\r
  return (\r
    <HashRouter>\r
      <Routes>\r
        <Route path="/" element={<Home />} />\r
        <Route path="/about" element={<About />} />\r
        <Route path="*" element={<NotFound />} /> {/* This is good for 404s */}\r
      </Routes>\r
    </HashRouter>\r
  );\r
}\r
\r
export default App;\r
\`\`\`\r
\r
To go between the pages, use the \`Link\` object from \`react-router-dom\` as follows:\r
\r
\`\`\`javascript\r
<Link to="/">Home</Link>\r
<Link to="/about">About</Link>\r
\`\`\``;export{r as default};
