const Contact = () => {
    return (
        <section
            id="contact"
            className="
        scroll-mt-20
        py-24 px-6
        bg-gray-100 dark:bg-gray-900
        transition-colors duration-300
      "
        >
            <div
                className="
          max-w-3xl mx-auto text-center
          backdrop-blur-md
          bg-white/70 dark:bg-gray-800/60
          border border-gray-200 dark:border-white/10
          rounded-xl shadow-lg
          p-12
        "
            >
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Let's Work Together
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                    I'm open to frontend roles, collaborations, and exciting projects.
                </p>

                {/* CTA Button */}
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdrVzC9lM7fb63UfWgbDJjmyo8pEti8gaRv8onzwCDeczIdgg/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
            inline-block mt-8 px-8 py-3 rounded-lg
            font-medium text-white
            bg-gradient-to-r from-blue-500 to-purple-600
            shadow-lg shadow-blue-500/20
            hover:scale-105 hover:shadow-blue-500/40
            transition-all duration-300
          "
                >
                    Send Message
                </a>
            </div>
        </section>
    );
};

export default Contact;