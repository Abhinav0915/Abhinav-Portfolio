import React, { useState } from "react";
import {
  EDUCATION,
  CERTIFICATIONS,
  ACHIEVEMENTS,
} from "../../data/portfolioData";
import { SectionHeader } from "../common/SectionHeader";
import { SystemBadge } from "../common/SystemBadge";
import {
  GraduationCapIcon,
  AwardIcon,
  SparklesIcon,
  ChevronDownIcon,
} from "../common/Icons";

export const Academics: React.FC = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const displayedCerts = showAllCerts
    ? CERTIFICATIONS
    : CERTIFICATIONS.slice(0, 6);

  return (
    <section
      id="academics"
      style={{
        padding: "110px 24px",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          index="05"
          eyebrow="ACADEMICS & RIGOR"
          title="Education, peer research & verified credentials."
          subtitle="Theoretical computer science foundation paired with rigorous empirical study and continuous technical mastery."
        />

        {/* Education Degree Grid */}
        <div style={{ marginBottom: "56px" }}>
          <div
            className="font-mono text-xs uppercase"
            style={{
              color: "var(--accent-cyan)",
              letterSpacing: "0.1em",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <GraduationCapIcon size={16} color="var(--accent-cyan)" />
            <span>DEGREES & ACADEMIC INSTITUTIONS</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
            className="education-grid"
          >
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree + edu.school}
                className="cyber-panel corner-brackets"
                style={{
                  padding: "26px 28px",
                  background: "rgba(14, 18, 26, 0.75)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {edu.period} • {edu.location}
                  </span>
                  {edu.badge && (
                    <SystemBadge label={edu.badge} variant="cyan" />
                  )}
                </div>

                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    margin: "0 0 6px 0",
                  }}
                >
                  {edu.school}
                </h3>

                <div
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--accent-blue)",
                    fontWeight: 500,
                    marginBottom: "10px",
                  }}
                >
                  {edu.degree}
                </div>

                {edu.honors && (
                  <p
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1.55,
                      color: "var(--text-secondary)",
                      margin: 0,
                    }}
                  >
                    {edu.honors}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Honors & Achievements */}
        <div style={{ marginBottom: "56px" }}>
          <div
            className="font-mono text-xs uppercase"
            style={{
              color: "var(--accent-emerald)",
              letterSpacing: "0.1em",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <SparklesIcon size={16} color="var(--accent-emerald)" />
            <span>NOTABLE HONORS & RECOGNITION</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
            className="achievements-grid"
          >
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.title}
                className="cyber-panel cyber-panel-glow"
                style={{
                  padding: "24px",
                  background: "rgba(14, 18, 26, 0.75)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ marginBottom: "14px" }}>
                    <SystemBadge label={ach.badge} variant="emerald" />
                  </div>

                  <h4
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: "0 0 8px 0",
                      lineHeight: 1.4,
                    }}
                  >
                    {ach.title}
                  </h4>

                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--accent-emerald)",
                      marginBottom: "12px",
                    }}
                  >
                    {ach.organization}
                  </div>

                  <p
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                      margin: 0,
                    }}
                  >
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Matrix */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div
              className="font-mono text-xs uppercase"
              style={{
                color: "var(--accent-purple)",
                letterSpacing: "0.1em",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <AwardIcon size={16} color="var(--accent-purple)" />
              <span>SPECIALIZED CERTIFICATIONS ({CERTIFICATIONS.length})</span>
            </div>

            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              style={{
                background: "none",
                border: "none",
                color: "var(--accent-cyan)",
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span>
                {showAllCerts
                  ? "Show Less"
                  : `View All (${CERTIFICATIONS.length})`}
              </span>
              <span
                style={{
                  transform: showAllCerts ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}
              >
                <ChevronDownIcon size={14} />
              </span>
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "14px",
            }}
          >
            {displayedCerts.map((cert) => (
              <div
                key={cert.name}
                className="cyber-panel"
                style={{
                  padding: "16px 18px",
                  background: "rgba(14, 18, 26, 0.6)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    color: "var(--accent-purple)",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  <AwardIcon size={16} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      lineHeight: 1.4,
                      marginBottom: "4px",
                    }}
                  >
                    {cert.name}
                  </div>
                  <div
                    className="font-mono"
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-tertiary)",
                    }}
                  >
                    {cert.issuer} • {cert.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .education-grid { grid-template-columns: 1fr !important; }
          .achievements-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
