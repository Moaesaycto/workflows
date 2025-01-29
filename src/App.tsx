import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import themes from './styles/themes';
import './index.css';

const NAV_ITEMS = [
  { name: "Computing", path: "/computing" },
  { name: "Cooking", path: "/cooking" },
  { name: "Music", path: "/music" },
];

const ThemeContext = createContext<{
  category: string;
  theme: typeof themes.computing;
  setTheme: React.Dispatch<React.SetStateAction<typeof themes.computing>>;
  navItems: typeof NAV_ITEMS
}>(
  {
    category: "",
    theme: themes.default,
    setTheme: () => { },
    navItems: NAV_ITEMS,
  }
);

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(themes.default);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const matchedCategory = Object.keys(themes).find(category => location.pathname.startsWith(`/${category}`));
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

  return (
    <ThemeContext.Provider value={{ category, theme, setTheme, navItems: NAV_ITEMS }}>
      <div className="app-container min-h-screen flex flex-col w-full">
        <Header navItems={NAV_ITEMS} />
        <main className="flex-1 w-full max-w-7xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<h2>Welcome to Workflows</h2>} />
            <Route path="/computing/*" element={<h2>Computing Workflows</h2>} />
            <Route path="/cooking/*" element={<h2>Cooking Workflows</h2>} />
            <Route path="/music/*" element={<h2>Music Workflows</h2>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

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
