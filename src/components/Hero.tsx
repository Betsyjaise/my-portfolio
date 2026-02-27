const Hero = () => {
    return (
        <section
            id="home"
            className="
       relative
  min-h-screen
  flex items-center justify-center
  px-6 py-20
  scroll-mt-20
  text-gray-900 dark:text-white
  bg-gradient-to-br
  from-gray-100 via-white to-gray-200
  dark:from-slate-950 dark:via-slate-900 dark:to-slate-800
    "
        >
            {/* subtle overlay glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl opacity-30 pointer-events-none" />

            <div className="relative text-center max-w-3xl">
                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        src="/profile.webp"
                        alt="Betsy Baby"
                        className="
              w-40 h-40
              rounded-full
              object-cover
              mb-8
              ring-4 ring-blue-500/30
              shadow-2xl
              hover:scale-105
              transition duration-300
            "
                    />
                </div>

                {/* Name */}
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Betsy Baby
                    </span>
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-xl md:text-2xl text-gray-300">
                    Senior Angular Developer • Building Scalable Enterprise Web Apps
                </h2>

                {/* Tech Stack */}
                <p className="mt-3 text-gray-400">
                    Angular • React • TypeScript • RxJS • Node.js
                </p>

                {/* Short intro */}
                <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl mx-auto">
                    Senior Angular Developer with 6+ years experience building scalable,
                    high-performance enterprise applications using Angular, React, and
                    modern frontend architecture.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    {/* Primary CTA */}
                    <a
                        href="/resume.pdf"
                        className="
              px-8 py-3 rounded-xl font-medium
              bg-gradient-to-r from-blue-500 to-purple-500
              shadow-lg shadow-blue-500/20
              hover:scale-105 hover:shadow-blue-500/40
              transition-all duration-300
            "
                    >
                        Download Resume
                    </a>

                    {/* Secondary buttons */}
                    <a
                        href="#projects"
                        className="
              px-8 py-3 rounded-xl font-medium
              border border-white/20
              bg-white/5 backdrop-blur-md
              hover:bg-white/10 hover:scale-105
              transition-all duration-300
            "
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="
              px-8 py-3 rounded-xl font-medium
              border border-white/20
              bg-white/5 backdrop-blur-md
              hover:bg-white/10 hover:scale-105
              transition-all duration-300
            "
                    >
                        Contact Me
                    </a>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex justify-center gap-6 text-gray-400">
                    <a
                        href="https://github.com/Betsyjaise"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/betsy-baby-ba12b6201"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;