const ShootingStar = () => {
    return (
        <div
            className="absolute top-10 left-0 w-24 h-[2px]"
            style={{
                background:
                    "linear-gradient(90deg, white, rgba(255,255,255,0))",
                transform: "rotate(25deg)",
                animation: "shoot 6s linear infinite",
            }}
        />
    );
};

export default ShootingStar;