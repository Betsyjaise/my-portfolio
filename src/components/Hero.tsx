const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 px-6 scroll-mt-20 py-20">

            <div className="text-center max-w-3xl">

                {/* Profile Image */}
                <div className="flex justify-center w-full">
                    <img
                        src="/profile.png"
                        alt="Betsy Baby"
                        className="w-36 h-36 rounded-full object-cover mb-6 shadow-lg"
                    />
                </div>

                {/* Name */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                    Hi, I'm <span className="text-blue-600">Betsy Baby</span>
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl md:text-2xl text-gray-700">
                    Senior Angular Developer | Frontend Specialist
                </h2>

                {/* Short intro */}
                <p className="mt-6 text-gray-600 leading-relaxed">
                    Senior Angular Developer with 6+ years experience building scalable,
                    high-performance frontend applications using Angular, React, and modern web technologies.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex justify-center gap-4">

                    {/* Resume */}
                    <a
                        href="/resume.pdf"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Download Resume
                    </a>

                    {/* Contact */}
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition"
                    >
                        Contact Me
                    </a>

                </div>

                {/* Social links */}
                <div className="mt-6 flex justify-center gap-6 text-gray-600">

                    <a
                        href="https://github.com/Betsyjaise"
                        target="_blank"
                        className="hover:text-black"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/betsy-baby-ba12b6201"
                        target="_blank"
                        className="hover:text-blue-600"
                    >
                        LinkedIn
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Hero;