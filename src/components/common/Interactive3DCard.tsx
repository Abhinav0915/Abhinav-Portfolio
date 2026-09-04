import React, { useRef, useState } from "react";

type Interactive3DCardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  onClick?: () => void;
};

export const Interactive3DCard: React.FC<Interactive3DCardProps> = ({
  children,
  className = "",
  style = {},
  maxTilt = 8,
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    const rotX = -normY * maxTilt;
    const rotY = normX * maxTilt;

    setTilt({ x: rotX, y: rotY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`card-3d-wrapper ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        position: "relative",
        ...style,
      }}
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateY(-4px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0px)",
          transition: isHovered
            ? "transform 0.08s ease-out, box-shadow 0.2s ease"
            : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
          boxShadow: isHovered
            ? "0 16px 32px rgba(0, 0, 0, 0.25)"
            : "none",
          position: "relative",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Children content */}
        {children}

        {/* Dynamic Specular Light Glare Sheen */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 60%)`,
            transition: isHovered ? "none" : "opacity 0.4s ease",
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
};
