import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-darkbg/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-primary text-lg">
          Amruth Swamy C P-DevOps/DevSecOps Engineer
        </Link>

        <div className="flex items-center gap-8 text-sm">
          <Link to="/case-studies" className="hover:text-primary transition">
            Case Studies
          </Link>
          <Link to="/blog" className="hover:text-primary transition">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-primary transition">
            Contact
          </Link>

          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}