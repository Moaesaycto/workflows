const e=`# React Context Components\r
\r
Below is a simple implementation of a context. In this example, only the theme is being stored.\r
\r
\`\`\`typescript\r
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
To use this, you simply import the context over and wrap the containers you wish to be able to access the context values:\r
\r
\`\`\`typescript\r
const App = () => {\r
  const [theme, setTheme] = useState('light');\r
\r
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
## More complicated Example\r
\r
In this example, the defaults and states are all managed by the context itself rather than having to handle them in the application.\r
\r
\`\`\`typescript\r
import { createContext, useContext, useState, type ReactNode } from "react";\r
\r
type Language = "py" | "java" | "js" | "c";\r
\r
export const Titles = {\r
    py: "Python",\r
    java: "Java",\r
    js: "JavaScript/TypeScript",\r
    c: "C/C++",\r
} as const;\r
\r
interface LanguageContextValue {\r
    language: Language;\r
    setLanguage: (language: Language) => void;\r
}\r
\r
const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);\r
\r
export const LanguageProvider = ({ children }: { children: ReactNode }) => {\r
    const [language, setLanguage] = useState<Language>("py"); // default value\r
\r
    return (\r
        <LanguageContext.Provider value={{ language, setLanguage }}>\r
            {children}\r
        </LanguageContext.Provider>\r
    );\r
};\r
\r
export const useLanguageContext = () => {\r
    const context = useContext(LanguageContext);\r
    if (!context) throw new Error("useLanguageContext must be used within a LanguageProvider");\r
    return context;\r
};\r
\r
export default LanguageContext;\r
\`\`\`\r
\r
You can then use this as follows:\r
\r
\`\`\`typescript\r
createRoot(document.getElementById('root')!).render(\r
  <StrictMode>\r
    <LanguageProvider>\r
      <App />\r
    </LanguageProvider>\r
  </StrictMode>,\r
)\r
\`\`\`\r
\r
Finally, you can access the specifics here:\r
\r
\`\`\`typescript\r
function App() {\r
  const { language, setLanguage } = useLanguageContext();\r
\r
  return (\r
    <div>{language}</div>\r
  )\r
}\r
\`\`\``;export{e as default};
