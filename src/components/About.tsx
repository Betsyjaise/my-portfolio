const About = () => {
    return (
        <section
            id="about"
            className="
        py-20 px-6 scroll-mt-20
        bg-gray-100 dark:bg-gray-900
        transition-colors duration-300
      "
        >
            <div
                className="
          max-w-5xl mx-auto
          backdrop-blur-md
          bg-white/70 dark:bg-gray-800/60
          border border-gray-200 dark:border-white/10
          rounded-xl shadow-lg
          p-10
        "
            >
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
                    About Me
                </h2>

                {/* Content */}
                <div className="mt-10 text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-6">
                    <p>
                        I'm a{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            Senior Angular Developer
                        </span>{" "}
                        with 6+ years of experience building scalable and high-performance
                        web applications. I specialize in Angular, TypeScript, and modern
                        frontend technologies to create clean, maintainable, and
                        user-friendly interfaces.
                    </p>

                    <p>
                        Currently, I work on full-stack JavaScript applications using
                        Angular, React, Node.js, and modern UI frameworks. I have experience
                        in enterprise applications, CMS platforms, streaming platforms, and
                        e-commerce systems.
                    </p>

                    <p>
                        I'm passionate about learning new technologies, improving frontend
                        architecture, and building products that solve real-world problems.
                        Currently, I'm expanding my expertise in React and looking for
                        opportunities that challenge me and help me grow professionally.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;