export default {
    darkMode: "class",
    theme: {
        extend: {
            keyframes: {
                falling: {
                    "0%": { transform: "translateY(-10vh)", opacity: "1" },
                    "100%": { transform: "translateY(110vh)", opacity: "0" },
                },
            },
            animation: {
                falling: "falling linear infinite",
            },
        },
    },
};