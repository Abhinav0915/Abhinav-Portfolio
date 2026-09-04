import React from "react";

export const KineticMarquee: React.FC = () => {
  const items = [
    "DISTRIBUTED SYSTEMS",
    "65+ PRODUCTION APIS",
    "EXPLAINABLE AI",
    "PYTORCH AUTOENCODERS",
    "SHAP ATTRIBUTION",
    "HYBRID AES+RSA CIPHER",
    "99.9% EC2 UPTIME",
    "USYD MASTER OF CS",
    "SYDNEY, AUSTRALIA",
    "AST CODE COMPILATION",
  ];

  const content = (
    <div style={{ display: "flex", gap: "32px", alignItems: "center", whiteSpace: "nowrap" }}>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <span
            className="font-mono text-xs uppercase"
            style={{
              color: idx % 2 === 0 ? "var(--ink-primary)" : "var(--accent-vermilion)",
              letterSpacing: "0.1em",
              fontWeight: 600,
            }}
          >
            {item}
          </span>
          <span style={{ color: "var(--ink-muted)", fontSize: "0.75rem" }}>■</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--rule-hairline)",
        borderBottom: "1px solid var(--rule-hairline)",
        backgroundColor: "var(--bg-secondary)",
        padding: "12px 0",
        position: "relative",
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          width: "max-content",
          gap: "32px",
        }}
      >
        {content}
        {content}
        {content}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .marquee-track {
          animation: marqueeScroll 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

