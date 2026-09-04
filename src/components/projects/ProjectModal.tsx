import React, { useEffect } from "react";
import type { ProjectItem } from "../../types/portfolio";
import { CloseIcon, ExternalLinkIcon, GithubIcon } from "../common/Icons";
import { GlowButton } from "../common/GlowButton";
import { SystemBadge } from "../common/SystemBadge";

type ProjectModalProps = {
  project: ProjectItem | null;
  onClose: () => void;
};

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      onClick={onClose}
    >
      <div
        className="cyber-panel corner-brackets scanline-subtle"
        style={{
          width: "100%",
          maxWidth: "840px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "#0C1017",
          border: "1px solid rgba(56, 189, 248, 0.35)",
          borderRadius: "16px",
          boxShadow:
            "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(56, 189, 248, 0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Window Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 20px",
            background: "rgba(14, 18, 26, 0.98)",
            borderBottom: "1px solid var(--border-subtle)",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#EF4444",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#F59E0B",
              }}
            />
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "#10B981",
              }}
            />
            <span
              className="font-mono text-xs"
              style={{ color: "var(--text-tertiary)", marginLeft: "8px" }}
            >
              ~/projects/{project.id} — architecture.md
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: "none",
              border: "none",
              color: "var(--text-secondary)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
              borderRadius: "6px",
            }}
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "28px 32px" }}>
          {/* Title & Metadata */}
          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <SystemBadge label={project.category} variant="cyan" />
              <span
                className="font-mono text-xs"
                style={{ color: "var(--text-tertiary)" }}
              >
                {project.period}
              </span>
            </div>

            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#FFFFFF",
                margin: "0 0 6px 0",
              }}
            >
              {project.name}
            </h2>

            {project.subtitle && (
              <div
                className="font-mono text-sm"
                style={{ color: "var(--accent-cyan)" }}
              >
                {project.subtitle}
              </div>
            )}
          </div>

          {/* Overview */}
          <div style={{ marginBottom: "24px" }}>
            <div
              className="font-mono text-xs uppercase"
              style={{
                color: "var(--text-tertiary)",
                letterSpacing: "0.1em",
                marginBottom: "8px",
              }}
            >
              &gt; ARCHITECTURAL_OVERVIEW
            </div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {project.summary}
            </p>
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: "28px" }}>
            <div
              className="font-mono text-xs uppercase"
              style={{
                color: "var(--text-tertiary)",
                letterSpacing: "0.1em",
                marginBottom: "10px",
              }}
            >
              &gt; TECHNOLOGIES_UTILIZED
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono"
                  style={{
                    fontSize: "0.78rem",
                    padding: "5px 12px",
                    borderRadius: "6px",
                    background: "rgba(168, 85, 247, 0.08)",
                    border: "1px solid rgba(168, 85, 247, 0.25)",
                    color: "#C084FC",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Implementation Details */}
          <div style={{ marginBottom: "32px" }}>
            <div
              className="font-mono text-xs uppercase"
              style={{
                color: "var(--text-tertiary)",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              &gt; SYSTEM_IMPLEMENTATION_SPECS
            </div>

            <div
              style={{
                background: "rgba(14, 18, 26, 0.8)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {project.details.map((detail, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      color: "var(--accent-cyan)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.65,
                      color: "var(--text-secondary)",
                    }}
                  >
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              paddingTop: "16px",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              {project.link && (
                <GlowButton
                  variant="primary"
                  size="md"
                  as="a"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  icon={<ExternalLinkIcon size={16} />}
                >
                  Launch Live Demo
                </GlowButton>
              )}

              {project.github && (
                <GlowButton
                  variant="secondary"
                  size="md"
                  as="a"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  icon={<GithubIcon size={16} />}
                >
                  GitHub Repository
                </GlowButton>
              )}
            </div>

            <GlowButton variant="ghost" size="md" onClick={onClose}>
              Close Inspector
            </GlowButton>
          </div>
        </div>
      </div>
    </div>
  );
};
