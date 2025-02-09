# React Context: From Basics to Advanced

This guide provides an overview of React Context, going from a simple application scenario to more advanced features and best practices.

## 1. Introduction to React Context

React Context provides a way to share data throughout the component tree without having to pass props manually at every level. 

### When to Use Context
- When multiple components need the **same data**.
- When **prop drilling** becomes unwieldy (i.e., passing data through many nested levels).
- For global data like user authentication, theming, language settings, etc.

### Key API Components
1. **`React.createContext(defaultValue)`** – Creates a context object.
2. **`Context.Provider`** – Allows consuming components to subscribe to context changes.
3. **`Context.Consumer`** – A React component that subscribes to context changes (primarily a legacy pattern; the modern approach is the `useContext` hook).
4. **`useContext(Context)`** – Hook that returns the current context value.

---

## 2. Creating and Using a Simple Context

In this example, we’ll create a basic theme context to manage whether the UI is in light or dark mode.

```js
// ThemeContext.js
import React from 'react';

// 1. Create the context with a default value
const ThemeContext = React.createContext('light');

export default ThemeContext;
```

Then use the context in your application:

```js
// App.js
import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ThemedButton from './ThemedButton';

function App() {
  // 2. Manage the current theme with a state
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // 3. Provide the theme value to descendants
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```

```js
// ThemedButton.js
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton() {
  // 4. Consume the theme value
  const theme = useContext(ThemeContext);

  return (
    <button style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff'
    }}>
      I am a {theme} themed button
    </button>
  );
}

export default ThemedButton;
```

**Key Points**:
- Wrap the **entire** part of the component tree that requires the context with `Provider`.
- Inside any child component, call `useContext(ThemeContext)` to access the value.

---

## 3. Multiple Contexts

You can nest multiple `Provider`s if your application needs more than one context (e.g., theme and user info).

```jsx
<UserContext.Provider value={user}>
  <ThemeContext.Provider value={theme}>
    <App />
  </ThemeContext.Provider>
</UserContext.Provider>
```

Or, you can combine multiple contexts into a single parent component. However, be mindful that putting too many disparate values into a single context can lead to larger re-renders.

---

## 4. Advanced Usage and Patterns

### 4.1 Context in a Custom Hook

For complex or repeated usage patterns, encapsulate context usage in a custom hook:

```js
// useTheme.js
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function useTheme() {
  return useContext(ThemeContext);
}
```

Then import and call `useTheme()` anywhere you need the theme.

### 4.2 Avoiding Unnecessary Re-renders

**Problem**: When the context value changes, **all** components consuming it re-render.

**Solution**:
1. **Split contexts** – Use multiple contexts to isolate data that changes frequently.
2. **Memoize context values** – Memoize complex objects passed as value using `useMemo`.
3. **Selector patterns** – Use specialized libraries or patterns (like Redux’s useSelector) to subscribe to slices of context.

Example of memoizing context value:
```js
const App = () => {
  const [theme, setTheme] = useState('light');
  // If you pass an object, useMemo to prevent frequent re-renders
  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <Child />
    </ThemeContext.Provider>
  );
};
```

### 4.3 Dynamic Context Updates

If you want consumers to update context, pass **both** the value and setter function into the context:
```js
const CounterContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const contextValue = useMemo(
    () => ({ count, setCount }),
    [count]
  );

  return (
    <CounterContext.Provider value={contextValue}>
      <Counter />
    </CounterContext.Provider>
  );
}

function Counter() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

### 4.4 Use with TypeScript

1. **Create an interface** for your context value.
2. **Supply a default** context value that aligns with that interface.
3. **Use a custom hook** to ensure type safety.

```ts
// ThemeContext.ts
import { createContext, useContext } from 'react';

interface ThemeContextValue {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
export default ThemeContext;
```

### 4.5 Using React DevTools Profiler

- React DevTools can help inspect your context usage and see where re-renders occur.
- Look for frequent updates and ensure you aren’t causing unnecessary re-renders.

### 4.6 Context and Server-Side Rendering

- React Context works well with SSR frameworks (Next.js, Remix).
- Keep in mind that each request should generate its own context value for data that is not globally shared to avoid data leaking across requests.
