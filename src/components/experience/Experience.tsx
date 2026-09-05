import React from "react";
import { EXPERIENCE, LEADERSHIP } from "../../data/portfolioData";
import { EditorialSectionHeading } from "../common/EditorialSectionHeading";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        borderBottom: "1px solid var(--rule-hairline)",
      }}
    >
      <div className="editorial-container">
        <EditorialSectionHeading
          number="04"
          category="CHRONOLOGY &amp; TENURE"
          title="Newspaper chronology &amp; production history."
          meta="HISTORY // 2021 — 2026"
        />

        {/* Chronological Newspaper List */}
        <div style={{ borderTop: "1px solid var(--rule-hairline)" }}>
          {EXPERIENCE.map((item, idx) => (
            <div
              key={item.company}
              style={{
                display: "grid",
                gridTemplateColumns: "240px 1fr",
                gap: "48px",
                padding: "44px 0",
                borderBottom: "1px solid var(--rule-hairline)",
                alignItems: "start",
              }}
              className={`chronology-row scroll-reveal delay-${(idx % 3) + 1}`}
            >
              {/* Left Column: Huge Year & Location */}
              <div>
                <div
                  className="font-display font-bold"
                  style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                    lineHeight: 1.05,
                    color: "var(--ink-primary)",
                    letterSpacing: "-0.03em",
                    marginBottom: "6px",
                  }}
                >
                  {item.period.split("–")[0].trim()}
                </div>
                <div
                  className="font-mono text-xs uppercase"
                  style={{
                    color: "var(--accent-vermilion)",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {item.period}
                </div>
                <div
                  className="font-mono text-xs uppercase"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  {item.location} • {item.badge || "ENGINEERING"}
                </div>
              </div>

              {/* Right Column: Role, Company & Bulleted Narrative */}
              <div>
                <h3
                  className="font-display font-bold uppercase"
                  style={{
                    fontSize: "clamp(1.4rem, 2.6vw, 2rem)",
                    color: "var(--ink-primary)",
                    margin: "0 0 4px 0",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.role}
                </h3>

                <div
                  className="font-mono text-sm uppercase"
                  style={{
                    color: "var(--ink-secondary)",
                    fontWeight: 600,
                    marginBottom: "20px",
                  }}
                >
                  {item.company}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "24px",
                  }}
                >
                  {item.description.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "0.95rem",
                        lineHeight: 1.65,
                        color: "var(--ink-secondary)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent-vermilion)",
                          flexShrink: 0,
                        }}
                      >
                        —
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech metadata */}
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "6px 12px" }}
                >
                  {item.technologies.map((t, tIdx) => (
                    <span
                      key={t}
                      className="font-mono text-xs"
                      style={{
                        color: "var(--ink-tertiary)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <span>{t}</span>
                      {tIdx < item.technologies.length - 1 && <span>/</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Leadership & Engineering Culture Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "240px 1fr",
              gap: "48px",
              padding: "44px 0",
              borderBottom: "1px solid var(--rule-hairline)",
              alignItems: "start",
            }}
            className="chronology-row scroll-reveal delay-3"
          >
            <div>
              <div
                className="font-display font-bold"
                style={{
                  fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                  lineHeight: 1.05,
                  color: "var(--ink-primary)",
                  letterSpacing: "-0.03em",
                  marginBottom: "6px",
                }}
              >
                2021 — 2025
              </div>
              <div
                className="font-mono text-xs uppercase"
                style={{ color: "var(--accent-vermilion)", fontWeight: 600 }}
              >
                LEADERSHIP &amp; CULTURE
              </div>
            </div>

            <div>
              <h3
                className="font-display font-bold uppercase"
                style={{
                  fontSize: "clamp(1.4rem, 2.6vw, 2rem)",
                  color: "var(--ink-primary)",
                  margin: "0 0 16px 0",
                  letterSpacing: "-0.02em",
                }}
              >
                Technical Leadership &amp; Community
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "28px",
                }}
                className="leadership-subgrid"
              >
                {LEADERSHIP.map((lead, lIdx) => (
                  <div
                    key={lead.organization}
                    style={{
                      border: "1px solid var(--rule-hairline)",
                      padding: "20px",
                    }}
                    className={`scroll-reveal-scale delay-${lIdx + 1}`}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "var(--ink-primary)",
                        marginBottom: "4px",
                      }}
                    >
                      {lead.role}
                    </div>
                    <div
                      className="font-mono text-xs"
                      style={{
                        color: "var(--accent-vermilion)",
                        marginBottom: "10px",
                      }}
                    >
                      {lead.organization} • {lead.period}
                    </div>
                    <div
                      style={{
                        fontSize: "0.88rem",
                        lineHeight: 1.6,
                        color: "var(--ink-secondary)",
                      }}
                    >
                      {lead.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .chronology-row { grid-template-columns: 1fr !important; gap: 20px !important; padding: 32px 0 !important; }
          .leadership-subgrid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
