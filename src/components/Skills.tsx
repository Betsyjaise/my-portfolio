const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                "Angular",
                "React",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Bootstrap",
                "Angular Material",
                "RxJS",
                "NgRx",
            ],
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js"],
        },
        {
            title: "Database",
            skills: ["MongoDB", "MySQL"],
        },
        {
            title: "Tools & Practices",
            skills: [
                "Git",
                "GitHub",
                "GitLab",
                "Jira",
                "Agile/Scrum",
                "REST API",
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="
        py-20 px-6 scroll-mt-20
        bg-gray-100 dark:bg-gray-900
        transition-colors duration-300
      "
        >
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
                    Skills
                </h2>

                {/* Grid */}
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="
                backdrop-blur-md
                bg-white/70 dark:bg-gray-800/60
                border border-gray-200 dark:border-white/10
                rounded-xl shadow-lg
                p-6
                transition-all duration-300
                hover:scale-105
              "
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="
                      px-3 py-1 rounded-md text-sm
                      bg-blue-100 text-blue-700
                      dark:bg-blue-500/20 dark:text-blue-300
                    "
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;