import React, { useState, useEffect } from "react";
import {
  TerminalIcon,
  MenuIcon,
  CloseIcon,
  DownloadIcon,
} from "../common/Icons";
import { SystemBadge } from "../common/SystemBadge";
import { GlowButton } from "../common/GlowButton";

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "academics", label: "Academics" },
  { id: "contact", label: "Contact" },
];

type NavbarProps = {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
};

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 16px" : "18px 24px",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          borderRadius: "14px",
          background: scrolled
            ? "rgba(11, 15, 23, 0.82)"
            : "rgba(11, 15, 23, 0.6)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: `1px solid ${scrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)"}`,
          boxShadow: scrolled
            ? "0 10px 30px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.1)"
            : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => handleItemClick("hero")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "4px 8px",
            color: "#FFFFFF",
            fontFamily: "var(--font-mono)",
            fontSize: "0.95rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "8px",
              background:
                "linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)",
              border: "1px solid rgba(0, 229, 255, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-cyan)",
            }}
          >
            <TerminalIcon size={16} />
          </div>
          <span style={{ display: "flex", alignItems: "center" }}>
            abhinav<span style={{ color: "var(--accent-cyan)" }}>.dev</span>
          </span>
        </button>

        {/* Desktop Nav Items */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                style={{
                  background: isActive
                    ? "rgba(255, 255, 255, 0.07)"
                    : "transparent",
                  border: `1px solid ${isActive ? "rgba(255, 255, 255, 0.1)" : "transparent"}`,
                  borderRadius: "8px",
                  padding: "7px 14px",
                  color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                  fontSize: "0.85rem",
                  fontWeight: isActive ? 600 : 500,
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  transition: "all 0.18s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.background =
                      "rgba(255, 255, 255, 0.03)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "12px",
                      height: "2px",
                      backgroundColor: "var(--accent-cyan)",
                      borderRadius: "2px",
                      boxShadow: "0 0 6px var(--accent-cyan)",
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right action & telemetry */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="telemetry-badge-container">
            <SystemBadge label="SYS.ONLINE" variant="emerald" dotPulse />
          </div>

          <GlowButton
            variant="ghost"
            size="sm"
            as="a"
            href="/CV-Resume.zip"
            download="Abhinav_Saxena_CV_Resume.zip"
            icon={<DownloadIcon size={14} />}
            className="resume-nav-btn"
          >
            CV
          </GlowButton>

          <GlowButton
            variant="primary"
            size="sm"
            onClick={() => handleItemClick("contact")}
            className="contact-nav-btn"
          >
            Let's Talk
          </GlowButton>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="mobile-menu-toggle"
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 36,
              height: 36,
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border-subtle)",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          >
            {mobileMenuOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            maxWidth: "1200px",
            margin: "8px auto 0 auto",
            background: "rgba(14, 18, 26, 0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "14px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "16px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "8px",
              borderBottom: "1px solid var(--border-subtle)",
              marginBottom: "6px",
            }}
          >
            <SystemBadge
              label="SYS.ONLINE // SYDNEY"
              variant="emerald"
              dotPulse
            />
            <span
              className="font-mono"
              style={{ fontSize: "0.72rem", color: "var(--text-tertiary)" }}
            >
              UTC+10
            </span>
          </div>

          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              style={{
                textAlign: "left",
                background:
                  activeSection === item.id
                    ? "rgba(56, 189, 248, 0.1)"
                    : "transparent",
                border: "none",
                borderRadius: "8px",
                padding: "12px 14px",
                color:
                  activeSection === item.id
                    ? "var(--accent-cyan)"
                    : "var(--text-primary)",
                fontSize: "0.95rem",
                fontWeight: 500,
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span
                  className="font-mono"
                  style={{ fontSize: "0.75rem", color: "var(--accent-cyan)" }}
                >
                  [ACTIVE]
                </span>
              )}
            </button>
          ))}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginTop: "8px",
              paddingTop: "10px",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <GlowButton
              variant="ghost"
              size="md"
              as="a"
              href="/CV-Resume.zip"
              download="Abhinav_Saxena_CV_Resume.zip"
              icon={<DownloadIcon size={16} />}
              style={{ width: "100%" }}
            >
              Resume
            </GlowButton>
            <GlowButton
              variant="primary"
              size="md"
              onClick={() => handleItemClick("contact")}
              style={{ width: "100%" }}
            >
              Let's Talk
            </GlowButton>
          </div>
        </div>
      )}

      {/* Media query styling */}
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-toggle { display: flex !important; }
          .telemetry-badge-container { display: none !important; }
          .resume-nav-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
};
