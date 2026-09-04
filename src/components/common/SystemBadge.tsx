import React from "react";

type SystemBadgeProps = {
  label: string;
  variant?: "cyan" | "emerald" | "purple" | "neutral";
  dotPulse?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

export const SystemBadge: React.FC<SystemBadgeProps> = ({
  label,
  variant = "cyan",
  dotPulse = false,
  className = "",
  icon,
}) => {
  const variantStyles = {
    cyan: {
      border: "rgba(0, 229, 255, 0.25)",
      bg: "rgba(0, 229, 255, 0.05)",
      text: "#00E5FF",
      dot: "#00E5FF",
    },
    emerald: {
      border: "rgba(16, 185, 129, 0.25)",
      bg: "rgba(16, 185, 129, 0.05)",
      text: "#10B981",
      dot: "#10B981",
    },
    purple: {
      border: "rgba(168, 85, 247, 0.25)",
      bg: "rgba(168, 85, 247, 0.05)",
      text: "#C084FC",
      dot: "#A855F7",
    },
    neutral: {
      border: "rgba(255, 255, 255, 0.12)",
      bg: "rgba(255, 255, 255, 0.03)",
      text: "#94A3B8",
      dot: "#94A3B8",
    },
  }[variant];

  return (
    <div
      className={`font-mono inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs tracking-wider uppercase select-none ${className}`}
      style={{
        border: `1px solid ${variantStyles.border}`,
        backgroundColor: variantStyles.bg,
        color: variantStyles.text,
        fontSize: "0.72rem",
        letterSpacing: "0.08em",
        fontWeight: 500,
      }}
    >
      {dotPulse && (
        <span
          className="inline-block rounded-full status-dot-pulse"
          style={{
            width: 6,
            height: 6,
            backgroundColor: variantStyles.dot,
            boxShadow: `0 0 8px ${variantStyles.dot}`,
            flexShrink: 0,
          }}
        />
      )}
      {icon && (
        <span style={{ display: "inline-flex", flexShrink: 0 }}>{icon}</span>
      )}
      <span>{label}</span>
    </div>
  );
};
