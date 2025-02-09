const e=`# React Context: From Basics to Advanced\r
\r
This guide provides an overview of React Context, going from a simple application scenario to more advanced features and best practices.\r
\r
## 1. Introduction to React Context\r
\r
React Context provides a way to share data throughout the component tree without having to pass props manually at every level. \r
\r
### When to Use Context\r
- When multiple components need the **same data**.\r
- When **prop drilling** becomes unwieldy (i.e., passing data through many nested levels).\r
- For global data like user authentication, theming, language settings, etc.\r
\r
### Key API Components\r
1. **\`React.createContext(defaultValue)\`** – Creates a context object.\r
2. **\`Context.Provider\`** – Allows consuming components to subscribe to context changes.\r
3. **\`Context.Consumer\`** – A React component that subscribes to context changes (primarily a legacy pattern; the modern approach is the \`useContext\` hook).\r
4. **\`useContext(Context)\`** – Hook that returns the current context value.\r
\r
---\r
\r
## 2. Creating and Using a Simple Context\r
\r
In this example, we’ll create a basic theme context to manage whether the UI is in light or dark mode.\r
\r
\`\`\`js\r
// ThemeContext.js\r
import React from 'react';\r
\r
// 1. Create the context with a default value\r
const ThemeContext = React.createContext('light');\r
\r
export default ThemeContext;\r
\`\`\`\r
\r
Then use the context in your application:\r
\r
\`\`\`js\r
// App.js\r
import React, { useState } from 'react';\r
import ThemeContext from './ThemeContext';\r
import ThemedButton from './ThemedButton';\r
\r
function App() {\r
  // 2. Manage the current theme with a state\r
  const [theme, setTheme] = useState('light');\r
\r
  const toggleTheme = () => {\r
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));\r
  };\r
\r
  return (\r
    // 3. Provide the theme value to descendants\r
    <ThemeContext.Provider value={theme}>\r
      <div>\r
        <button onClick={toggleTheme}>Toggle Theme</button>\r
        <ThemedButton />\r
      </div>\r
    </ThemeContext.Provider>\r
  );\r
}\r
\r
export default App;\r
\`\`\`\r
\r
\`\`\`js\r
// ThemedButton.js\r
import React, { useContext } from 'react';\r
import ThemeContext from './ThemeContext';\r
\r
function ThemedButton() {\r
  // 4. Consume the theme value\r
  const theme = useContext(ThemeContext);\r
\r
  return (\r
    <button style={{\r
      backgroundColor: theme === 'light' ? '#fff' : '#333',\r
      color: theme === 'light' ? '#000' : '#fff'\r
    }}>\r
      I am a {theme} themed button\r
    </button>\r
  );\r
}\r
\r
export default ThemedButton;\r
\`\`\`\r
\r
**Key Points**:\r
- Wrap the **entire** part of the component tree that requires the context with \`Provider\`.\r
- Inside any child component, call \`useContext(ThemeContext)\` to access the value.\r
\r
---\r
\r
## 3. Multiple Contexts\r
\r
You can nest multiple \`Provider\`s if your application needs more than one context (e.g., theme and user info).\r
\r
\`\`\`jsx\r
<UserContext.Provider value={user}>\r
  <ThemeContext.Provider value={theme}>\r
    <App />\r
  </ThemeContext.Provider>\r
</UserContext.Provider>\r
\`\`\`\r
\r
Or, you can combine multiple contexts into a single parent component. However, be mindful that putting too many disparate values into a single context can lead to larger re-renders.\r
\r
---\r
\r
## 4. Advanced Usage and Patterns\r
\r
### 4.1 Context in a Custom Hook\r
\r
For complex or repeated usage patterns, encapsulate context usage in a custom hook:\r
\r
\`\`\`js\r
// useTheme.js\r
import { useContext } from 'react';\r
import ThemeContext from './ThemeContext';\r
\r
export default function useTheme() {\r
  return useContext(ThemeContext);\r
}\r
\`\`\`\r
\r
Then import and call \`useTheme()\` anywhere you need the theme.\r
\r
### 4.2 Avoiding Unnecessary Re-renders\r
\r
**Problem**: When the context value changes, **all** components consuming it re-render.\r
\r
**Solution**:\r
1. **Split contexts** – Use multiple contexts to isolate data that changes frequently.\r
2. **Memoize context values** – Memoize complex objects passed as value using \`useMemo\`.\r
3. **Selector patterns** – Use specialized libraries or patterns (like Redux’s useSelector) to subscribe to slices of context.\r
\r
Example of memoizing context value:\r
\`\`\`js\r
const App = () => {\r
  const [theme, setTheme] = useState('light');\r
  // If you pass an object, useMemo to prevent frequent re-renders\r
  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);\r
\r
  return (\r
    <ThemeContext.Provider value={themeValue}>\r
      <Child />\r
    </ThemeContext.Provider>\r
  );\r
};\r
\`\`\`\r
\r
### 4.3 Dynamic Context Updates\r
\r
If you want consumers to update context, pass **both** the value and setter function into the context:\r
\`\`\`js\r
const CounterContext = createContext();\r
\r
function App() {\r
  const [count, setCount] = useState(0);\r
\r
  const contextValue = useMemo(\r
    () => ({ count, setCount }),\r
    [count]\r
  );\r
\r
  return (\r
    <CounterContext.Provider value={contextValue}>\r
      <Counter />\r
    </CounterContext.Provider>\r
  );\r
}\r
\r
function Counter() {\r
  const { count, setCount } = useContext(CounterContext);\r
  return (\r
    <div>\r
      <p>Count: {count}</p>\r
      <button onClick={() => setCount(count + 1)}>Increment</button>\r
    </div>\r
  );\r
}\r
\`\`\`\r
\r
### 4.4 Use with TypeScript\r
\r
1. **Create an interface** for your context value.\r
2. **Supply a default** context value that aligns with that interface.\r
3. **Use a custom hook** to ensure type safety.\r
\r
\`\`\`ts\r
// ThemeContext.ts\r
import { createContext, useContext } from 'react';\r
\r
interface ThemeContextValue {\r
  theme: string;\r
  toggleTheme: () => void;\r
}\r
\r
const ThemeContext = createContext<ThemeContextValue>({\r
  theme: 'light',\r
  toggleTheme: () => {},\r
});\r
\r
export const useThemeContext = () => useContext(ThemeContext);\r
export default ThemeContext;\r
\`\`\`\r
\r
### 4.5 Using React DevTools Profiler\r
\r
- React DevTools can help inspect your context usage and see where re-renders occur.\r
- Look for frequent updates and ensure you aren’t causing unnecessary re-renders.\r
\r
### 4.6 Context and Server-Side Rendering\r
\r
- React Context works well with SSR frameworks (Next.js, Remix).\r
- Keep in mind that each request should generate its own context value for data that is not globally shared to avoid data leaking across requests.\r
`;export{e as default};
