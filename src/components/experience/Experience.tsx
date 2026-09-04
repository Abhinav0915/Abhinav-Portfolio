import React from "react";
import { EXPERIENCE, LEADERSHIP } from "../../data/portfolioData";
import { SectionHeader } from "../common/SectionHeader";
import { SystemBadge } from "../common/SystemBadge";
import { MapPinIcon, UsersIcon } from "../common/Icons";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      style={{
        padding: "110px 24px",
        background: "rgba(10, 13, 20, 0.7)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionHeader
          index="04"
          eyebrow="CAREER TIMELINE"
          title="Engineering journey & production milestones."
          subtitle="A track record of taking software from blank repositories to enterprise deployments and high-volume transactions."
        />

        {/* Vertical Circuit Trace Timeline */}
        <div
          style={{
            position: "relative",
            paddingLeft: "32px",
            marginBottom: "64px",
          }}
        >
          {/* Vertical Glowing Circuit Line */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              bottom: "20px",
              left: "9px",
              width: "2px",
              background:
                "linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-purple) 60%, rgba(56, 189, 248, 0.2) 100%)",
              boxShadow: "0 0 10px rgba(0, 229, 255, 0.3)",
            }}
          />

          {EXPERIENCE.map((item, idx) => (
            <div
              key={item.company}
              style={{
                position: "relative",
                marginBottom: idx === EXPERIENCE.length - 1 ? 0 : "44px",
              }}
            >
              {/* Circuit Node Indicator */}
              <div
                style={{
                  position: "absolute",
                  left: "-32px",
                  top: "6px",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#08090C",
                  border: "2px solid var(--accent-cyan)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 10px rgba(0, 229, 255, 0.5)",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-cyan)",
                  }}
                />
              </div>

              {/* Experience Card */}
              <div
                className="cyber-panel corner-brackets"
                style={{
                  padding: "28px 30px",
                  background: "rgba(14, 18, 26, 0.8)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                }}
              >
                {/* Header: Role, Company, Period */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          margin: 0,
                        }}
                      >
                        {item.role}
                      </h3>
                      {item.badge && (
                        <SystemBadge label={item.badge} variant="cyan" />
                      )}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginTop: "6px",
                        color: "var(--accent-blue)",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                      }}
                    >
                      <span>{item.company}</span>
                      <span style={{ color: "var(--text-tertiary)" }}>•</span>
                      <span
                        style={{
                          color: "var(--text-secondary)",
                          fontWeight: 400,
                          fontSize: "0.85rem",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <MapPinIcon size={12} /> {item.location}
                      </span>
                    </div>
                  </div>

                  <span
                    className="font-mono"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-tertiary)",
                      background: "rgba(255, 255, 255, 0.04)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul
                  style={{
                    margin: "0 0 20px 0",
                    paddingLeft: "18px",
                    color: "var(--text-secondary)",
                    fontSize: "0.92rem",
                    lineHeight: 1.75,
                  }}
                >
                  {item.description.map((point, pIdx) => (
                    <li key={pIdx} style={{ marginBottom: "8px" }}>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono"
                      style={{
                        fontSize: "0.72rem",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        background: "rgba(56, 189, 248, 0.06)",
                        border: "1px solid rgba(56, 189, 248, 0.18)",
                        color: "#38BDF8",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Engineering Community */}
        <div>
          <div
            className="font-mono text-xs uppercase"
            style={{
              color: "var(--accent-purple)",
              letterSpacing: "0.1em",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <UsersIcon size={16} color="var(--accent-purple)" />
            <span>LEADERSHIP & ENGINEERING CULTURE</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
            className="leadership-grid"
          >
            {LEADERSHIP.map((lead) => (
              <div
                key={lead.organization}
                className="cyber-panel"
                style={{
                  padding: "22px 24px",
                  background: "rgba(14, 18, 26, 0.75)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#FFFFFF",
                    marginBottom: "4px",
                  }}
                >
                  {lead.role}
                </div>
                <div
                  className="font-mono"
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--accent-purple)",
                    marginBottom: "12px",
                  }}
                >
                  {lead.organization} • {lead.period}
                </div>
                <div
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                    color: "var(--text-secondary)",
                  }}
                >
                  {lead.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .leadership-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
