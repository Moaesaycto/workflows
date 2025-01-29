import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../App";
import themes from "../styles/themes";
import "@fontsource/orbitron/700.css";
import { Menu, X } from "lucide-react";
import logo from "../assets/workflows-logo.svg";

interface NavItem {
    name: string;
    path: string;
}

interface HeaderProps {
    navItems: NavItem[];
}

function Header({ navItems }: HeaderProps) {
    const { theme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="text-white shadow-md w-full bg-zinc-900">
            <div className="pt-6 pb-3 px-6 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <div className="flex items-center space-x-4">
                    <Link to="/">
                        <img src={logo} alt="Workflows Logo" className="h-12 w-12" />
                    </Link>
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-wide" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                            Workflows
                        </h1>
                        <p className="text-lg text-gray-300">Organize and streamline your knowledge</p>
                    </div>
                </div>
                <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            <nav className={`mt-4 w-full relative ${isMobileMenuOpen ? "block" : "hidden"} md:flex md:justify-center`}>
                <div className="w-full max-w-7xl mx-auto">
                    <ul className={`px-5 flex flex-col md:flex-row md:space-x-6 bg-opacity-50 w-full md:justify-center ${isMobileMenuOpen ? "space-y-3 rounded-lg p-3" : "md:rounded-t-lg"}`}>
                        {navItems.map((item) => {
                            const themeKey = item.path.substring(1) as keyof typeof themes;
                            const itemTheme = themes[themeKey] || themes.default;
                            return (
                                <li key={item.path} className={`px-2 py-1 text-white text-center md:text-left ${isMobileMenuOpen ? "rounded-lg" : "md:rounded-t-md"}`} style={{ backgroundColor: itemTheme["--primary-color"] }}>
                                    <Link to={item.path} className="block transition duration-300 hover:opacity-80 p-2">
                                        <p className="text-white uppercase tracking-wide">
                                            {item.name}
                                        </p>
                                    </Link>
                                </li>
                            );
                        })}
                        <li key="home" className={`px-2 py-1 text-white md:ml-auto ${isMobileMenuOpen ? "rounded-lg" : "md:rounded-t-md"}`} style={{ backgroundColor: "#6F7072" }}>
                            <a href="https://moaesaycto.github.io/" target="_blank" rel="noopener noreferrer" className="block transition duration-300 hover:opacity-80 space-x-2 p-2">

                                <div className="flex items-center justify-center md:justify-start">
                                    <img src="/moae-logo.svg" alt="MOAE Logo" className="h-5 w-5 rounded-full self-center" />
                                    <span className="pl-2 text-white uppercase tracking-wide">MOAE</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="w-full h-2" style={{ backgroundColor: theme["--primary-color"] }} />
        </header>
    );
}

export default Header;
