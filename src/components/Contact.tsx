const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-20 py-20 py-20 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Contact Me
                </h2>

                <p className="mt-4 text-gray-600">
                    I'm open to new opportunities and collaborations. Feel free to reach out!
                </p>

                {/* Contact Info */}
                <div className="mt-10 space-y-4 text-lg text-gray-700">

                    <p>
                        📧 Email:
                        <a
                            href="mailto:betzybaby009@gmail.com"
                            className="ml-2 text-blue-600 hover:underline"
                        >
                            betzybaby009@gmail.com
                        </a>
                    </p>

                    <p>
                        🔗 LinkedIn:
                        <a
                            href="https://www.linkedin.com/in/betsy-baby-ba12b6201"
                            target="_blank"
                            className="ml-2 text-blue-600 hover:underline"
                        >
                            View Profile
                        </a>
                    </p>

                    <p>
                        💻 GitHub:
                        <a
                            href="https://github.com/Betsyjaise"
                            target="_blank"
                            className="ml-2 text-blue-600 hover:underline"
                        >
                            View Projects
                        </a>
                    </p>

                </div>

                {/* Google Form Button */}
                <div className="mt-10">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdrVzC9lM7fb63UfWgbDJjmyo8pEti8gaRv8onzwCDeczIdgg/viewform?usp=publish-editor"
                        target="_blank"
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Send Message
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Contact;