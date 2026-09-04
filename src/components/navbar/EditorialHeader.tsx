import React, { useState, useEffect } from "react";

type EditorialHeaderProps = {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
};

const SECTIONS = [
  { id: "about", num: "01", label: "Profile" },
  { id: "projects", num: "02", label: "Work" },
  { id: "skills", num: "03", label: "Index" },
  { id: "experience", num: "04", label: "Chronology" },
  { id: "academics", num: "05", label: "Academics" },
  { id: "contact", num: "06", label: "Contact" },
];

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({
  activeSection,
  onNavigate,
  isDark,
  onToggleTheme,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
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
        setSydneyTime("AEST");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--rule-hairline)",
        transition: "background-color 0.2s ease, border-color 0.2s ease",
      }}
    >
      <div className="editorial-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 0",
          }}
        >
          {/* Identity & Metadata */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
            <button
              type="button"
              onClick={() => handleNavClick("hero")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                textAlign: "left",
              }}
            >
              <span
                className="font-display font-bold uppercase tracking-tight"
                style={{
                  fontSize: "1.1rem",
                  color: "var(--ink-primary)",
                  display: "block",
                  letterSpacing: "-0.02em",
                }}
              >
                Abhinav Saxena
              </span>
            </button>

            <span
              className="font-mono text-xs meta-hide-mobile"
              style={{ color: "var(--ink-tertiary)" }}
            >
              SYDNEY, AU [{sydneyTime || "12:00:00"}]
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="editorial-desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "22px",
            }}
          >
            {SECTIONS.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleNavClick(sec.id)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: "4px 0",
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--accent-vermilion)" : "var(--ink-secondary)",
                    fontWeight: isActive ? 600 : 500,
                    borderBottom: isActive ? "2px solid var(--accent-vermilion)" : "2px solid transparent",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--ink-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--ink-secondary)";
                  }}
                >
                  <span style={{ color: "var(--ink-muted)", marginRight: "4px" }}>
                    {sec.num}
                  </span>
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions & Colophon Control */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="/CV-Resume.zip"
              download="Abhinav_Saxena_CV_Resume.zip"
              className="font-mono text-xs"
              style={{
                color: "var(--ink-primary)",
                textDecoration: "none",
                fontWeight: 600,
                letterSpacing: "0.04em",
                display: "inline-flex",
                alignItems: "center",
                gap: "3px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-vermilion)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-primary)")}
            >
              <span>CV / RESUME</span>
              <span>↗</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle theme mode"
              className="font-mono text-xs"
              style={{
                background: "none",
                border: "1px solid var(--rule-hairline)",
                padding: "4px 8px",
                color: "var(--ink-secondary)",
                cursor: "pointer",
                borderRadius: "0px",
              }}
            >
              {isDark ? "LIGHT" : "DARK"}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="editorial-mobile-toggle"
              aria-label="Toggle menu"
              style={{
                display: "none",
                background: "none",
                border: "none",
                padding: "4px",
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--ink-primary)",
                fontWeight: 600,
              }}
            >
              {menuOpen ? "CLOSE [×]" : "MENU [≡]"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Editorial Drawer */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--rule-hairline)",
            backgroundColor: "var(--bg-secondary)",
            padding: "20px 0",
          }}
        >
          <div className="editorial-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleNavClick(sec.id)}
                  style={{
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--rule-hairline)",
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.82rem",
                    color: activeSection === sec.id ? "var(--accent-vermilion)" : "var(--ink-primary)",
                  }}
                >
                  <span style={{ color: "var(--accent-vermilion)", marginRight: "6px" }}>
                    [{sec.num}]
                  </span>
                  <span>{sec.label}</span>
                </button>
              ))}
            </div>

            <div style={{ marginTop: "16px", paddingTop: "12px" }}>
              <span className="font-mono text-xs" style={{ color: "var(--ink-tertiary)" }}>
                LOCATION: SYDNEY, AUSTRALIA • 2026
              </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 920px) {
          .editorial-desktop-nav { display: none !important; }
          .editorial-mobile-toggle { display: block !important; }
          .meta-hide-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
};
