import { useMemo } from "react";

const FallingStars = () => {
    const stars = useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: 3 + Math.random() * 5,
            delay: Math.random() * 5,
            size: 3,
        }));
    }, []);

    return (
        <>
            {/* KEYFRAMES DEFINED HERE → always works */}
            <style>
                {`
          @keyframes falling {
            from {
              transform: translateY(-10vh);
              opacity: 1;
            }
            to {
              transform: translateY(110vh);
              opacity: 0;
            }
          }
        `}
            </style>

            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    pointerEvents: "none",
                    zIndex: 999,
                    overflow: "hidden",
                    animation: "fadeIn 0.6s ease",
                }}
            >
                {stars.map((star) => (
                    <div
                        key={star.id}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: `${star.left}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            borderRadius: "50%",
                            background: "white",
                            animation: `falling ${star.duration}s linear infinite`,
                            animationDelay: `${star.delay}s`,
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default FallingStars;