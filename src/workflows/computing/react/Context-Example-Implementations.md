# React Context Components

Below is a simple implementation of a context. In this example, only the theme is being stored.

```typescript
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

To use this, you simply import the context over and wrap the containers you wish to be able to access the context values:

```typescript
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

## More complicated Example

In this example, the defaults and states are all managed by the context itself rather than having to handle them in the application.

```typescript
import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "py" | "java" | "js" | "c";

export const Titles = {
    py: "Python",
    java: "Java",
    js: "JavaScript/TypeScript",
    c: "C/C++",
} as const;

interface LanguageContextValue {
    language: Language;
    setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("py"); // default value

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguageContext must be used within a LanguageProvider");
    return context;
};

export default LanguageContext;
```

You can then use this as follows:

```typescript
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
```

Finally, you can access the specifics here:

```typescript
function App() {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div>{language}</div>
  )
}
```