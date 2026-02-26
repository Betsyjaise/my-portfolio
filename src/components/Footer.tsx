const Footer = () => {
    return (
        <footer
            className="
        py-8 px-6
        bg-gray-100 dark:bg-gray-950
        text-gray-700 dark:text-gray-400
        border-t border-gray-200 dark:border-white/10
        transition-colors duration-300
      "
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left */}
                <p className="text-sm">
                    © {new Date().getFullYear()} Betsy Baby. All rights reserved.
                </p>

                {/* Right - Social Links */}
                <div className="flex gap-6 text-sm">

                    <a
                        href="https://github.com/Betsyjaise"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/betsy-baby-ba12b6201"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:betzybaby009@gmail.com"
                        className="hover:text-gray-900 dark:hover:text-white transition"
                    >
                        Email
                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;