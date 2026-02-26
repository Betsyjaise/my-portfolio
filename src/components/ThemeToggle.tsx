interface ThemeToggleProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className={`
        relative w-16 h-8 flex items-center rounded-full
        transition-all duration-300
        border
        ${isDark
                    ? "bg-slate-900 border-slate-600 shadow-inner"
                    : "bg-slate-200 border-slate-400 shadow-sm"}
      `}
        >
            {/* Moon */}
            <span
                className={`
          absolute left-2 text-sm transition-opacity duration-300
          ${isDark ? "opacity-100 text-yellow-400" : "opacity-0"}
        `}
            >
                🌙
            </span>

            {/* Sun */}
            <span
                className={`
          absolute right-2 text-sm transition-opacity duration-300
          ${!isDark ? "opacity-100 text-yellow-500" : "opacity-0"}
        `}
            >
                ☀️
            </span>

            {/* Sliding Knob */}
            <span
                className={`
          absolute top-1 left-1 w-6 h-6 rounded-full 
          bg-white shadow-md
          transform transition-transform duration-300
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
            />
        </button>
    );
};

export default ThemeToggle;