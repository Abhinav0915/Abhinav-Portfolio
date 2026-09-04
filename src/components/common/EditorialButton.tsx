import React from "react";

type EditorialButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "vermilion" | "text";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  className?: string;
  arrow?: "right" | "up-right" | "none";
  style?: React.CSSProperties;
};

export const EditorialButton: React.FC<EditorialButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  target,
  rel,
  download,
  className = "",
  arrow = "none",
  style,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const sizeStyles = {
    sm: { padding: "6px 14px", fontSize: "0.8rem" },
    md: { padding: "10px 20px", fontSize: "0.88rem" },
    lg: { padding: "14px 28px", fontSize: "0.95rem" },
  }[size];

  const getVariantStyles = () => {
    switch (variant) {
      case "vermilion":
        return {
          backgroundColor: isHovered ? "#E03400" : "var(--accent-vermilion)",
          color: "#FFFFFF",
          border: "1px solid var(--accent-vermilion)",
        };
      case "secondary":
        return {
          backgroundColor: isHovered ? "var(--bg-secondary)" : "transparent",
          color: "var(--ink-primary)",
          border: "1px solid var(--rule-hairline)",
        };
      case "text":
        return {
          backgroundColor: "transparent",
          color: isHovered ? "var(--accent-vermilion)" : "var(--ink-primary)",
          border: "none",
          padding: "4px 0",
        };
      case "primary":
      default:
        return {
          backgroundColor: isHovered ? "var(--accent-vermilion)" : "var(--ink-primary)",
          color: isHovered ? "#FFFFFF" : "var(--bg-primary)",
          border: `1px solid ${isHovered ? "var(--accent-vermilion)" : "var(--ink-primary)"}`,
        };
    }
  };

  const combinedStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "0px",
    cursor: "pointer",
    transition: "all 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
    userSelect: "none",
    whiteSpace: "nowrap",
    ...sizeStyles,
    ...getVariantStyles(),
    ...style,
  };

  const arrowChar = arrow === "right" ? "→" : arrow === "up-right" ? "↗" : "";

  const content = (
    <>
      <span>{children}</span>
      {arrowChar && (
        <span
          style={{
            display: "inline-block",
            transform: isHovered && arrow === "up-right" ? "translate(2px, -2px)" : isHovered && arrow === "right" ? "translate(3px, 0)" : "none",
            transition: "transform 0.18s ease",
          }}
        >
          {arrowChar}
        </span>
      )}
    </>
  );

  if (as === "a") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download ? (typeof download === "string" ? download : true) : undefined}
        style={combinedStyle}
        className={className}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      style={combinedStyle}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
};
