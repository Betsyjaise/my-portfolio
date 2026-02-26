import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    // Highlight active section on scroll
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    // Active link styles (FIXED)
    const linkStyle = (section: string) =>
        activeSection === section
            ? "font-semibold border-b-2 border-blue-500 pb-1 text-gray-900 dark:text-white"
            : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition";

    const handleClick = () => setMenuOpen(false);

    return (
        <nav
            className="
      sticky top-0 z-50
      bg-white/80 dark:bg-gray-950/90
      backdrop-blur-lg
      py-4 px-6
      border-b border-gray-200 dark:border-white/10
      shadow-lg
      transition-colors duration-300
    "
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    Betsy Baby
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a key={link.id} href={`#${link.id}`} className={linkStyle(link.id)}>
                            {link.label}
                        </a>
                    ))}

                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>

                {/* Mobile Menu Button (FIXED COLOR) */}
                <button
                    aria-label="Toggle Menu"
                    aria-expanded={menuOpen}
                    className="md:hidden text-2xl text-gray-900 dark:text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 mt-4" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col gap-4 px-6 pb-4 border-t border-gray-200 dark:border-white/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={handleClick}
                            className={linkStyle(link.id)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;