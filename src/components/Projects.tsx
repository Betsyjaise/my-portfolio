const Projects = () => {
    const projects = [
        {
            title: "AI-Powered Recipe Learning Platform",
            description:
                "A platform that provides personalized recipe recommendations using AI-driven learning features and modern frontend architecture.",
            tech: ["Angular", "Node.js", "MongoDB"],
            github: "#",
            demo: "#",
        },
        {
            title: "React Task Tracker",
            description:
                "Task management application with authentication, CRUD operations, protected routes, and API integration using React and TypeScript.",
            tech: ["React", "TypeScript", "Tailwind"],
            github: "https://github.com/Betsyjaise",
            demo: "#",
        },
        {
            title: "Streaming Platform",
            description:
                "Enterprise-level content streaming platform with user management, search functionality, and scalable architecture.",
            tech: ["Angular", "Node.js", "MySQL"],
            github: "#",
            demo: "#",
        },
        {
            title: "E-commerce Storefront",
            description:
                "Full-featured storefront with product management, cart functionality, and responsive UI.",
            tech: ["Angular", "Express", "MongoDB"],
            github: "#",
            demo: "#",
        },
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-white scroll-mt-20 py-20">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    Projects
                </h2>

                {/* Grid */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">

                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="border rounded-xl p-6 shadow hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                {project.title}
                            </h3>

                            <p className="mt-3 text-gray-600">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="mt-6 flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub
                                </a>

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    Live Demo
                                </a>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Projects;