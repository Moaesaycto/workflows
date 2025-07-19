# Using Hash Routers in React

Begin by installing `react-router-dom` with the following command:

```bash
npm install react-router-dom
```

Import everything as you need and use it as your would with regular routes in react:

```javascript
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* This is good for 404s */}
      </Routes>
    </HashRouter>
  );
}

export default App;
```

To go between the pages, use the `Link` object from `react-router-dom` as follows:

```javascript
<Link to="/">Home</Link>
<Link to="/about">About</Link>
```