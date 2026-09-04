import React from "react";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  return (
    <div
      className={`mb-12 ${className}`}
      style={{
        textAlign: align,
        maxWidth: align === "center" ? "720px" : "800px",
        margin: align === "center" ? "0 auto 3rem auto" : "0 0 3rem 0",
      }}
    >
      <div
        className="font-mono inline-flex items-center gap-2 mb-3"
        style={{
          fontSize: "0.8rem",
          letterSpacing: "0.12em",
          color: "var(--accent-cyan)",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        <span style={{ opacity: 0.6 }}>// {index} //</span>
        <span>{eyebrow}</span>
      </div>

      <h2
        className="font-display font-bold tracking-tight"
        style={{
          fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
          lineHeight: 1.15,
          color: "var(--text-primary)",
          margin: "0 0 0.85rem 0",
          letterSpacing: "-0.025em",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
            lineHeight: 1.65,
            color: "var(--text-secondary)",
            margin: 0,
            maxWidth: "640px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
