import React, { useState, useEffect } from "react";
import { CONTACT } from "../../data/portfolioData";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ArrowUpIcon,
  TerminalIcon,
} from "../common/Icons";

type FooterProps = {
  onScrollToTop: () => void;
};

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const [sydneyTime, setSydneyTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-AU", {
          timeZone: "Australia/Sydney",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setSydneyTime(formatter.format(now));
      } catch {
        setSydneyTime("UTC+10");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "#06080B",
        padding: "48px 24px 36px 24px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Top telemetry bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            paddingBottom: "28px",
            borderBottom: "1px solid var(--border-subtle)",
            marginBottom: "32px",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: "6px",
                background: "rgba(0, 229, 255, 0.15)",
                border: "1px solid rgba(0, 229, 255, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-cyan)",
              }}
            >
              <TerminalIcon size={14} />
            </div>
            <span
              className="font-mono font-bold text-sm"
              style={{ color: "#FFFFFF" }}
            >
              abhinav<span style={{ color: "var(--accent-cyan)" }}>.dev</span>
            </span>
          </div>

          {/* Telemetry metadata: status & Sydney clock */}
          <div
            className="font-mono text-xs"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              color: "var(--text-tertiary)",
              flexWrap: "wrap",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-emerald)",
                  boxShadow: "0 0 6px var(--accent-emerald)",
                }}
              />
              SYSTEM: OPERATIONAL
            </span>

            <span>SYDNEY [UTC+10]: {sydneyTime || "12:00:00"}</span>
            <span>STACK: REACT 19 • TS • VITE</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={onScrollToTop}
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "8px",
              padding: "6px 14px",
              color: "var(--text-secondary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.borderColor = "var(--border-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.borderColor = "var(--border-subtle)";
            }}
          >
            <span>TOP</span>
            <ArrowUpIcon size={13} />
          </button>
        </div>

        {/* Bottom copyright & social bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ color: "var(--text-tertiary)", fontSize: "0.82rem" }}>
            © 2026 {CONTACT.name}. Architected with production discipline.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{
                color: "var(--text-tertiary)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-tertiary)")
              }
            >
              <GithubIcon size={17} />
            </a>

            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{
                color: "var(--text-tertiary)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-tertiary)")
              }
            >
              <LinkedinIcon size={17} />
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Email"
              style={{
                color: "var(--text-tertiary)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-tertiary)")
              }
            >
              <MailIcon size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
