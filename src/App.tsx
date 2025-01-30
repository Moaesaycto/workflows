import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WorkflowPage from './pages/WorkflowPage';
import themes from './styles/themes';
import './index.css';
import { getDirectChildFolders } from './utils/file';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(themes.default);
  const [category, setCategory] = useState("");
  const [navItems, setNavItems] = useState<{ name: string; path: string }[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const { subcategories } = getDirectChildFolders("workflows");

    const NAV_ITEMS = subcategories.map(category => ({
      name: category.charAt(0).toUpperCase() + category.slice(1),
      path: `/${category}`
    }));

    setNavItems(NAV_ITEMS);
  }, []);

  useEffect(() => {
    const matchedCategory = Object.keys(themes).find(category =>
      location.pathname.startsWith(`/${category}`)
    );

    if (matchedCategory) {
      setTheme(themes[matchedCategory as keyof typeof themes]);
      setCategory(matchedCategory);
    } else {
      setTheme(themes.default);
      setCategory("");
    }

    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }, [location.pathname, theme]);

  useEffect(() => {
    setTitle(category);
  }, [category])

  return (
    <ThemeContext.Provider value={{ category, theme, setTheme, navItems, title, setTitle }}>
      <div className="app-container min-h-screen flex flex-col w-full">
        <Header navItems={navItems} />
        <main className="flex-1 w-full max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<WorkflowPage />} />
            <Route path="/:category/:subcategory/:article" element={<ArticlePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

const ThemeContext = createContext<{
  category: string;
  theme: typeof themes.computing;
  setTheme: React.Dispatch<React.SetStateAction<typeof themes.computing>>;
  navItems: { name: string; path: string }[];
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}>({
  category: "",
  theme: themes.default,
  setTheme: () => { },
  navItems: [],
  title: "",
  setTitle: () => {}
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function Main() {
  return (
    <Router>
      <App />
    </Router>
  );
}
