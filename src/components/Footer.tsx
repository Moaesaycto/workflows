import { useTheme } from "../App";

function Footer() {
    const { theme } = useTheme();

    return (
        <footer className="text-white mt-auto text-center">
            <div className="w-full h-2" style={{ backgroundColor: theme["--primary-color"] }} />
            <div className="bg-zinc-900 p-3 rounded-lg">
                <p className="italic text-lg">
                    Like what I do? Consider checking me out <a href="https://moaesaycto.github.io/" target="_blank" rel="noopener noreferrer" className="underline">here</a>.
                </p>
                <p className="text-sm italic">
                    &copy; {new Date().getFullYear()} MOAE. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
