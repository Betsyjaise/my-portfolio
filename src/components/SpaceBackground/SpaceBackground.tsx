import StarLayer from "./StarLayer";
import ShootingStar from "./ShootingStar";

const SpaceBackground = () => {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                pointerEvents: "none",
                zIndex: 0,
                overflow: "hidden",
            }}
        >
            {/* Far stars (small + slow) */}
            <StarLayer count={15} size={2} speed={12} />

            {/* Mid stars */}
            <StarLayer count={20} size={3} speed={8} />

            {/* Near stars (big + fast) */}
            <StarLayer count={10} size={4} speed={5} />

            {/* occasional meteor */}
            <ShootingStar />
        </div>
    );
};

export default SpaceBackground;