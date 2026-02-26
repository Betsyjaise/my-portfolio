import { useEffect, useState } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    // Active section highlight
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

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const linkStyle = (section: string) =>
        activeSection === section
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
            : "text-gray-700 hover:text-blue-600";

    const handleClick = () => setMenuOpen(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow px-6 py-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-xl font-bold">Betsy Baby</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    <a href="#home" className={linkStyle("home")}>Home</a>
                    <a href="#about" className={linkStyle("about")}>About</a>
                    <a href="#skills" className={linkStyle("skills")}>Skills</a>
                    <a href="#projects" className={linkStyle("projects")}>Projects</a>
                    <a href="#contact" className={linkStyle("contact")}>Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4 px-6 pb-4 border-t">

                    <a href="#home" onClick={handleClick} className={linkStyle("home")}>
                        Home
                    </a>

                    <a href="#about" onClick={handleClick} className={linkStyle("about")}>
                        About
                    </a>

                    <a href="#skills" onClick={handleClick} className={linkStyle("skills")}>
                        Skills
                    </a>

                    <a href="#projects" onClick={handleClick} className={linkStyle("projects")}>
                        Projects
                    </a>

                    <a href="#contact" onClick={handleClick} className={linkStyle("contact")}>
                        Contact
                    </a>

                </div>
            )}
        </nav>
    );
};

export default Navbar;