import React from "react";
import { CONTACT } from "../../data/portfolioData";

type FooterProps = {
  onScrollToTop: () => void;
};

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--rule-hairline)",
        padding: "60px 0 40px 0",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <div className="editorial-container">
        {/* Main Footer Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "36px",
            marginBottom: "48px",
          }}
        >
          <div>
            <div
              className="font-display font-bold uppercase"
              style={{
                fontSize: "1.4rem",
                letterSpacing: "-0.03em",
                color: "var(--ink-primary)",
                marginBottom: "4px",
              }}
            >
              Abhinav Saxena
            </div>
            <div className="font-mono text-xs uppercase" style={{ color: "var(--ink-secondary)" }}>
              Full-Stack Software Engineer • Systems &amp; Applied AI
            </div>
          </div>

          <div
            className="font-mono text-xs"
            style={{
              display: "flex",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="editorial-link"
            >
              GITHUB ↗
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="editorial-link"
            >
              LINKEDIN ↗
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="editorial-link"
            >
              EMAIL ↗
            </a>
            <a
              href="/CV-Resume.zip"
              download="Abhinav_Saxena_CV_Resume.zip"
              className="editorial-link"
            >
              CV ARCHIVE ↗
            </a>
          </div>
        </div>

        {/* Hairline Colophon Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            paddingTop: "24px",
            borderTop: "1px solid var(--rule-hairline)",
            color: "var(--ink-tertiary)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
          }}
        >
          <div>
            © 2026 ABHINAV SAXENA. SET IN SPACE GROTESK, INTER &amp; JETBRAINS MONO.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span>SYDNEY, NSW, AUSTRALIA</span>
            <button
              type="button"
              onClick={onScrollToTop}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                color: "var(--ink-primary)",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "inherit",
                textDecoration: "underline",
              }}
            >
              TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
