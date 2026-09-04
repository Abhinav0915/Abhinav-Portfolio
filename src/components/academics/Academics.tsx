import React, { useState } from "react";
import {
  EDUCATION,
  CERTIFICATIONS,
  ACHIEVEMENTS,
} from "../../data/portfolioData";
import { EditorialSectionHeading } from "../common/EditorialSectionHeading";

export const Academics: React.FC = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const displayedCerts = showAllCerts
    ? CERTIFICATIONS
    : CERTIFICATIONS.slice(0, 5);

  return (
    <section
      id="academics"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        borderBottom: "1px solid var(--rule-hairline)",
      }}
    >
      <div className="editorial-container">
        <EditorialSectionHeading
          number="05"
          category="ACADEMICS &amp; HONORS"
          title="Academic foundation, publications &amp; credentials."
          meta="SCHOLARSHIP // EMPIRICAL RIGOR"
        />

        {/* Degrees & Institutions */}
        <div style={{ marginBottom: "64px" }}>
          <div
            className="font-mono text-xs uppercase"
            style={{
              color: "var(--accent-vermilion)",
              letterSpacing: "0.1em",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            // INSTITUTIONAL DEGREES
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              borderTop: "1px solid var(--rule-hairline)",
              borderBottom: "1px solid var(--rule-hairline)",
            }}
            className="academics-degrees-grid"
          >
            {EDUCATION.slice(0, 2).map((edu, idx) => (
              <div
                key={edu.degree}
                style={{
                  padding: "28px 24px",
                  borderRight:
                    idx === 0 ? "1px solid var(--rule-hairline)" : "none",
                }}
                className="degree-cell"
              >
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)", marginBottom: "4px" }}
                >
                  {edu.period} • {edu.location}
                </div>
                <h3
                  className="font-display font-bold uppercase"
                  style={{
                    fontSize: "1.35rem",
                    color: "var(--ink-primary)",
                    margin: "0 0 6px 0",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {edu.school}
                </h3>
                <div
                  style={{
                    fontSize: "0.95rem",
                    color: "var(--ink-primary)",
                    fontWeight: 500,
                    marginBottom: "8px",
                  }}
                >
                  {edu.degree}
                </div>
                {edu.honors && (
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--ink-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {edu.honors}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Honors & Research Papers */}
        <div style={{ marginBottom: "64px" }}>
          <div
            className="font-mono text-xs uppercase"
            style={{
              color: "var(--accent-vermilion)",
              letterSpacing: "0.1em",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            // RECOGNITION &amp; PEER RESEARCH
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
            className="achievements-editorial-grid"
          >
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.title}
                style={{
                  padding: "24px",
                  border: "1px solid var(--rule-hairline)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                <div
                  className="font-mono text-xs uppercase"
                  style={{
                    color: "var(--accent-vermilion)",
                    fontWeight: 600,
                    marginBottom: "8px",
                  }}
                >
                  [{ach.badge}]
                </div>
                <h4
                  className="font-display font-bold uppercase"
                  style={{
                    fontSize: "1.05rem",
                    color: "var(--ink-primary)",
                    margin: "0 0 6px 0",
                    lineHeight: 1.3,
                  }}
                >
                  {ach.title}
                </h4>
                <div
                  className="font-mono text-xs"
                  style={{ color: "var(--ink-tertiary)", marginBottom: "12px" }}
                >
                  {ach.organization}
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                    color: "var(--ink-secondary)",
                    margin: 0,
                  }}
                >
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certified Specializations Index */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "16px",
            }}
          >
            <div
              className="font-mono text-xs uppercase"
              style={{
                color: "var(--accent-vermilion)",
                letterSpacing: "0.1em",
                fontWeight: 600,
              }}
            >
              // SPECIALIZED CURRICULUM &amp; CERTIFICATIONS (
              {CERTIFICATIONS.length})
            </div>

            <button
              type="button"
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="font-mono text-xs"
              style={{
                background: "none",
                border: "none",
                color: "var(--ink-primary)",
                cursor: "pointer",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              {showAllCerts
                ? "SHOW TOP 5 [−]"
                : `EXPAND ALL ${CERTIFICATIONS.length} [+]`}
            </button>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--rule-hairline)",
            }}
          >
            {displayedCerts.map((cert, idx) => (
              <div
                key={cert.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "50px 1.6fr 1fr 100px 90px",
                  gap: "16px",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--rule-hairline)",
                  alignItems: "center",
                  fontSize: "0.88rem",
                }}
                className="cert-row"
              >
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--accent-vermilion)" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span style={{ fontWeight: 600, color: "var(--ink-primary)" }}>
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="editorial-link"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {cert.name}
                    </a>
                  ) : (
                    cert.name
                  )}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--ink-secondary)" }}
                >
                  {cert.issuer}
                </span>
                <span
                  className="font-mono text-xs text-right"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  {cert.date}
                </span>
                <div style={{ textAlign: "right" }}>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs"
                      style={{
                        color: "var(--accent-vermilion)",
                        textDecoration: "none",
                        border: "1px solid var(--rule-hairline)",
                        padding: "3px 8px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "2px",
                      }}
                    >
                      <span>VERIFY</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .academics-degrees-grid { grid-template-columns: 1fr !important; }
          .degree-cell { border-right: none !important; border-bottom: 1px solid var(--rule-hairline) !important; }
          .degree-cell:last-child { border-bottom: none !important; }
          .achievements-editorial-grid { grid-template-columns: 1fr !important; }
          .cert-row { grid-template-columns: 36px 1fr 80px !important; }
          .cert-row > span:nth-child(3), .cert-row > span:nth-child(4) { display: none !important; }
        }
      `}</style>
    </section>
  );
};
