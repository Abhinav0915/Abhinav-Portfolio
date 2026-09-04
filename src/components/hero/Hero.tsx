import React, { useState, useEffect } from "react";
import { ROLES, CONTACT } from "../../data/portfolioData";
import { GlowButton } from "../common/GlowButton";
import { SystemBadge } from "../common/SystemBadge";
import { HeroTerminal } from "./HeroTerminal";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  DownloadIcon,
  ArrowDownIcon,
  MapPinIcon,
} from "../common/Icons";

type HeroProps = {
  onNavigate: (sectionId: string) => void;
};

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth typewriter effect for roles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: number;

    if (!isDeleting) {
      if (typedRole.length < currentRole.length) {
        timer = window.setTimeout(() => {
          setTypedRole(currentRole.slice(0, typedRole.length + 1));
        }, 70);
      } else {
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (typedRole.length > 0) {
        timer = window.setTimeout(() => {
          setTypedRole(currentRole.slice(0, typedRole.length - 1));
        }, 35);
      } else {
        timer = window.setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 200);
      }
    }

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "130px 24px 80px 24px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}
        className="hero-grid-layout"
      >
        {/* Left Column: Developer Identity & Headline */}
        <div>
          {/* Small Technical Label */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <SystemBadge
              label="SOFTWARE ENGINEER • FULL STACK • AI"
              variant="cyan"
            />
            <div
              className="font-mono flex items-center gap-1 text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              <MapPinIcon size={13} color="var(--accent-cyan)" />
              <span>Sydney, Australia [USyd]</span>
            </div>
          </div>

          {/* Large Headline */}
          <h1
            className="font-display font-bold tracking-tight"
            style={{
              fontSize: "clamp(2.4rem, 5.2vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              margin: "0 0 16px 0",
            }}
          >
            Building software at the intersection of{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00E5FF 0%, #38BDF8 60%, #A855F7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              engineering, AI & systems.
            </span>
          </h1>

          {/* Typewriter Subtitle */}
          <div
            className="font-mono"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
              fontWeight: 500,
              color: "var(--text-secondary)",
              minHeight: "34px",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "var(--accent-cyan)" }}>&gt;</span>
            <span style={{ color: "#FFFFFF" }}>{typedRole}</span>
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1.1em",
                backgroundColor: "var(--accent-cyan)",
                animation: "statusPulse 0.9s infinite",
              }}
            />
          </div>

          {/* Concise Technical Summary */}
          <p
            style={{
              fontSize: "clamp(0.98rem, 1.6vw, 1.1rem)",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              maxWidth: "580px",
              margin: "0 0 32px 0",
            }}
          >
            Computer Science graduate student at{" "}
            <strong>The University of Sydney</strong> and founding engineer at{" "}
            <strong>Esprit Analytique</strong>. I architect scalable full-stack
            platforms, high-throughput APIs in Django and Spring Boot, and
            verifiable machine learning pipelines with PyTorch and SHAP.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              alignItems: "center",
              marginBottom: "36px",
            }}
          >
            <GlowButton
              variant="primary"
              size="lg"
              onClick={() => onNavigate("projects")}
              showArrow
            >
              View Projects
            </GlowButton>

            <GlowButton
              variant="secondary"
              size="lg"
              onClick={() => onNavigate("contact")}
            >
              Let's Connect
            </GlowButton>

            <GlowButton
              variant="ghost"
              size="lg"
              as="a"
              href="/CV-Resume.zip"
              download="Abhinav_Saxena_CV_Resume.zip"
              icon={<DownloadIcon size={16} />}
            >
              Resume / CV
            </GlowButton>
          </div>

          {/* Social Links & Trust Badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <span
              className="font-mono text-xs uppercase"
              style={{ color: "var(--text-tertiary)", letterSpacing: "0.08em" }}
            >
              Direct channels:
            </span>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = "var(--border-accent)";
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.04)";
                }}
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = "var(--border-accent)";
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.04)";
                }}
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${CONTACT.email}`}
                aria-label="Send direct email"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = "var(--border-accent)";
                  e.currentTarget.style.background = "rgba(56, 189, 248, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.04)";
                }}
              >
                <MailIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Developer Terminal */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <HeroTerminal />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => onNavigate("about")}
        aria-label="Scroll to About section"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          color: "var(--text-tertiary)",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = "var(--accent-cyan)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "var(--text-tertiary)")
        }
      >
        <span>DISCOVER</span>
        <ArrowDownIcon size={16} />
      </button>

      {/* Responsive layout styles */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
