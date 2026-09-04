import React from "react";

type EditorialSectionHeadingProps = {
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  meta?: string;
};

export const EditorialSectionHeading: React.FC<EditorialSectionHeadingProps> = ({
  number,
  category,
  title,
  subtitle,
  meta,
}) => {
  return (
    <div
      style={{
        paddingBottom: "24px",
        marginBottom: "48px",
        borderBottom: "1px solid var(--rule-hairline)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        <div
          className="font-mono text-xs uppercase"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--accent-vermilion)",
            letterSpacing: "0.1em",
            fontWeight: 600,
          }}
        >
          <span>[{number}]</span>
          <span>{category}</span>
        </div>

        {meta && (
          <div
            className="font-mono text-xs uppercase"
            style={{ color: "var(--ink-tertiary)", letterSpacing: "0.08em" }}
          >
            {meta}
          </div>
        )}
      </div>

      <h2
        className="font-display font-bold uppercase tracking-tight"
        style={{
          fontSize: "clamp(2.2rem, 4.8vw, 3.6rem)",
          lineHeight: 1.02,
          letterSpacing: "-0.03em",
          color: "var(--ink-primary)",
          margin: "0 0 10px 0",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            lineHeight: 1.6,
            color: "var(--ink-secondary)",
            maxWidth: "740px",
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
