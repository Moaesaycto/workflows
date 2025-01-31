# Appropriate Header and Footer Layout

## Plain React and CSS

First, create your header and footer components. This means that the footer will:

- stick to the window bottom when the page is short and the screen is not filled, and
- stay at the document end and move down as normal when there is more than a screenful of content (instead of overlapping the content).

In this example, we will use very minimal examples. Next, we will use the following CSS

```css
html, body, #root {
  height: 100%;
  margin: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure full height */
}

main {
  flex: 1; /* Pushes footer down when content is short */
}
```

Finally, create your App with the style above.

```jsx
import './App.css'

function App() {

  return (
    <div className="app-container">
      <header>Header</header>
      <main>
        <p>Page content goes here...</p>
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App
```

## Using Tailwind

If you're using [Tailwind](https://tailwindcss.com/), you can simplify the structure with the following:

```jsx
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>Header</header>
      <main className="flex-1">
        <p>Page content goes here...</p>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
```