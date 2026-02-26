const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-6">
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
                        className="hover:text-white transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/betsy-baby-ba12b6201"
                        target="_blank"
                        className="hover:text-white transition"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:betzybaby009@gmail.com"
                        className="hover:text-white transition"
                    >
                        Email
                    </a>

                </div>

            </div>
        </footer>
    );
};

export default Footer;