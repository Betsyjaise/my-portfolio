export const getInitialTheme = (): "light" | "dark" => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
};

export const applyTheme = (theme: "light" | "dark") => {
    const root = document.documentElement;

    root.classList.remove("dark");

    if (theme === "dark") {
        root.classList.add("dark");
    }

    localStorage.setItem("theme", theme);
};