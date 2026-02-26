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
        <section id="skills" className="py-20 px-6 bg-gray-50 scroll-mt-20 py-20">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
                    Skills
                </h2>

                {/* Grid */}
                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-white shadow rounded-xl p-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm"
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