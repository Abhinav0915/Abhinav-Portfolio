import React, { useState } from "react";
import { ArrowUpRightIcon } from "./Icons";

type GlowButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  className?: string;
  icon?: React.ReactNode;
  showArrow?: boolean;
  style?: React.CSSProperties;
};

export const GlowButton: React.FC<GlowButtonProps> = ({
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
  icon,
  showArrow = false,
  style,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeStyles = {
    sm: { padding: "8px 14px", fontSize: "0.8rem", borderRadius: "8px" },
    md: { padding: "12px 22px", fontSize: "0.88rem", borderRadius: "10px" },
    lg: { padding: "14px 28px", fontSize: "0.96rem", borderRadius: "12px" },
  }[size];

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          background: isHovered
            ? "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)"
            : "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
          color: "#FFFFFF",
          border: "1px solid rgba(56, 189, 248, 0.5)",
          boxShadow: isHovered
            ? "0 0 20px rgba(14, 165, 233, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
            : "0 0 12px rgba(14, 165, 233, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
        };
      case "cyan":
        return {
          background: isHovered
            ? "rgba(0, 229, 255, 0.15)"
            : "rgba(0, 229, 255, 0.08)",
          color: "#00E5FF",
          border: "1px solid rgba(0, 229, 255, 0.4)",
          boxShadow: isHovered ? "0 0 20px rgba(0, 229, 255, 0.25)" : "none",
        };
      case "ghost":
        return {
          background: isHovered ? "rgba(255, 255, 255, 0.06)" : "transparent",
          color: isHovered ? "#FFFFFF" : "var(--text-secondary)",
          border: `1px solid ${isHovered ? "var(--border-medium)" : "var(--border-subtle)"}`,
          boxShadow: "none",
        };
      case "secondary":
      default:
        return {
          background: isHovered ? "var(--bg-card-hover)" : "var(--bg-card)",
          color: "#FFFFFF",
          border: `1px solid ${isHovered ? "var(--border-accent)" : "var(--border-subtle)"}`,
          boxShadow: isHovered ? "0 4px 15px rgba(0, 0, 0, 0.3)" : "none",
        };
    }
  };

  const combinedStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontWeight: 600,
    fontFamily: "var(--font-sans)",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.22s cubic-bezier(0.16, 1, 0.3, 1)",
    position: "relative",
    overflow: "hidden",
    userSelect: "none",
    whiteSpace: "nowrap",
    ...sizeStyles,
    ...getVariantStyles(),
    ...style,
  };

  const content = (
    <>
      {icon && (
        <span style={{ display: "inline-flex", flexShrink: 0 }}>{icon}</span>
      )}
      <span>{children}</span>
      {showArrow && (
        <span
          style={{
            display: "inline-flex",
            transform: isHovered ? "translate(2px, -2px)" : "translate(0, 0)",
            transition: "transform 0.2s ease",
          }}
        >
          <ArrowUpRightIcon size={15} />
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
        download={
          download
            ? typeof download === "string"
              ? download
              : true
            : undefined
        }
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
