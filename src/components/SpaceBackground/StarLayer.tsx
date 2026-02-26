import { useMemo } from "react";

interface Props {
    count: number;
    size: number;
    speed: number;
}

const StarLayer = ({ count, size, speed }: Props) => {
    const stars = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            duration: speed + Math.random() * 5,
            delay: Math.random() * 2,
        }));
    }, [count, speed]);

    return (
        <div className="absolute inset-0 animate-fadeIn">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white animate-twinkle"
                    style={{
                        top: "-10vh",
                        left: `${star.left}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        boxShadow: "0 0 8px rgba(255,255,255,0.8)",
                        animation: `
              falling ${star.duration}s linear infinite,
              twinkle 2s ease-in-out infinite
            `,
                        animationDelay: `${star.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default StarLayer;