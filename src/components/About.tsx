const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-white scroll-mt-20 py-20">
            <div className="max-w-5xl mx-auto">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    About Me
                </h2>

                {/* Content */}
                <div className="mt-10 text-gray-600 text-lg leading-relaxed space-y-6">

                    <p>
                        I'm a <span className="font-semibold text-gray-900">Senior Angular Developer</span> with
                        6+ years of experience building scalable and high-performance web applications.
                        I specialize in Angular, TypeScript, and modern frontend technologies to create
                        clean, maintainable, and user-friendly interfaces.
                    </p>

                    <p>
                        Currently, I work on full-stack JavaScript applications using Angular, React,
                        Node.js, and modern UI frameworks. I have experience in enterprise applications,
                        CMS platforms, streaming platforms, and e-commerce systems.
                    </p>

                    <p>
                        I'm passionate about learning new technologies, improving frontend architecture,
                        and building products that solve real-world problems. Currently, I'm expanding
                        my expertise in React and looking for opportunities that challenge me and help
                        me grow professionally.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default About;