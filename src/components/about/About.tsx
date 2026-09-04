import React from "react";
import { STATS } from "../../data/portfolioData";
import { EditorialSectionHeading } from "../common/EditorialSectionHeading";
import { Interactive3DTopology } from "../common/Interactive3DTopology";
import { KineticMetric } from "./KineticMetric";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        borderBottom: "1px solid var(--rule-hairline)",
      }}
    >
      <div className="editorial-container">
        <EditorialSectionHeading
          number="01"
          category="PROFILE &amp; MANIFESTO"
          title="Architecting systems at the boundary of web engineering &amp; intelligence."
          meta="BIO // PERSPECTIVE"
        />

        {/* Asymmetrical Editorial Profile Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 0.75fr",
            gap: "56px",
            alignItems: "start",
            marginBottom: "72px",
          }}
          className="about-editorial-layout"
        >
          {/* Main Narrative Column */}
          <div>
            <div
              className="font-display"
              style={{
                fontSize: "clamp(1.25rem, 2.4vw, 1.7rem)",
                lineHeight: 1.45,
                color: "var(--ink-primary)",
                fontWeight: 600,
                marginBottom: "28px",
                letterSpacing: "-0.02em",
              }}
            >
              "Most software fails not because of the algorithm, but because of
              poor boundary discipline—unhandled state, unmeasured latency, and
              opaque failure modes."
            </div>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--ink-secondary)",
                margin: "0 0 20px 0",
              }}
            >
              I am a software engineer and computer science graduate student
              with a technical focus on high-throughput backend services,
              explainable machine learning systems, and cryptographic security
              layers.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--ink-secondary)",
                margin: "0 0 20px 0",
              }}
            >
              As a ex-founding engineer at <strong>Esprit Analytique</strong>, I
              converted from a 3-month internship to a permanent full-time
              position in just 17 days, subsequently promoted to{" "}
              <strong>Lead Full Stack Developer</strong> within a year. I took
              the product from an empty Git repository to a production-ready
              public deployment: architecting 65+ RESTful APIs in Django with
              multithreading (yielding a 30% latency reduction), integrating
              Razorpay with zero transaction errors, and engineering a custom
              hybrid <strong>AES + RSA</strong> cryptographic envelope layer
              securing every client-server exchange.
            </p>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--ink-secondary)",
                margin: 0,
              }}
            >
              My academic foundation includes a{" "}
              <strong>B.Tech in Computer Science &amp; Engineering</strong> with
              Honors (GPA 8.99/10.0), a national 4th place finish at the{" "}
              <strong>Smart India Hackathon</strong>, and submitted deep
              learning research on chest diagnostic imaging using VGG-16. I am
              currently pursuing a{" "}
              <strong>Master of Computer Science (Advanced Entry)</strong> at{" "}
              <strong>The University of Sydney</strong>, applying empirical
              research to scalable, observable software systems.
            </p>
          </div>

          {/* Right Annotation Dossier */}
          <div
            style={{
              border: "1px solid var(--rule-hairline)",
              padding: "28px",
              backgroundColor: "var(--bg-secondary)",
            }}
          >
            <div
              className="font-mono text-xs uppercase"
              style={{
                color: "var(--accent-vermilion)",
                letterSpacing: "0.1em",
                fontWeight: 600,
                marginBottom: "20px",
                paddingBottom: "10px",
                borderBottom: "1px solid var(--rule-hairline)",
              }}
            >
              // DOSSIER INDEX
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              <div>
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  LOCATION
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--ink-primary)",
                    fontSize: "0.92rem",
                    marginTop: "2px",
                  }}
                >
                  Sydney, Australia [UTC+10]
                </div>
              </div>

              <div>
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  POSTGRADUATE STUDY
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--ink-primary)",
                    fontSize: "0.92rem",
                    marginTop: "2px",
                  }}
                >
                  The University of Sydney
                </div>
                <div
                  style={{ fontSize: "0.82rem", color: "var(--ink-secondary)" }}
                >
                  Master of Computer Science (Adv. Entry)
                </div>
              </div>

              <div>
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  UNDERGRADUATE DEGREE
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--ink-primary)",
                    fontSize: "0.92rem",
                    marginTop: "2px",
                  }}
                >
                  Bennett University
                </div>
                <div
                  style={{ fontSize: "0.82rem", color: "var(--ink-secondary)" }}
                >
                  B.Tech, CSE — Honors (GPA 8.99/10.0)
                </div>
              </div>

              <div>
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  RESEARCH DOMAINS
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "var(--ink-primary)",
                    fontSize: "0.92rem",
                    marginTop: "2px",
                  }}
                >
                  Explainable AI (SHAP), Latent Autoencoders, Cryptography
                  (AES+RSA)
                </div>
              </div>

              <div>
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  STATUS
                </div>
                <div
                  className="font-mono text-xs"
                  style={{
                    color: "var(--accent-vermilion)",
                    marginTop: "2px",
                    fontWeight: 600,
                  }}
                >
                  AVAILABLE FOR OPPORTUNITIES
                </div>
              </div>
            </div>

            {/* 3D Distributed Cloud Topology Lattice */}
            <div style={{ marginTop: "24px" }}>
              <Interactive3DTopology className="crosshair-box" />
            </div>
          </div>
        </div>

        {/* Editorial Benchmarks Row */}
        <div>
          <div
            className="font-mono text-xs uppercase"
            style={{
              color: "var(--ink-tertiary)",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}
          >
            // VERIFIED PRODUCTION METRICS
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              borderTop: "1px solid var(--rule-hairline)",
              borderBottom: "1px solid var(--rule-hairline)",
            }}
            className="about-metrics-grid"
          >
            {STATS.map((s, idx) => (
              <div
                key={idx}
                style={{
                  padding: "24px 20px",
                  borderRight:
                    idx === STATS.length - 1
                      ? "none"
                      : "1px solid var(--rule-hairline)",
                }}
                className="metric-cell"
              >
                <KineticMetric
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  description={s.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-editorial-layout { grid-template-columns: 1fr !important; gap: 36px !important; }
          .about-metrics-grid { grid-template-columns: 1fr 1fr !important; }
          .metric-cell:nth-child(2) { border-right: none !important; }
          .metric-cell:nth-child(1), .metric-cell:nth-child(2) { border-bottom: 1px solid var(--rule-hairline) !important; }
        }
        @media (max-width: 540px) {
          .about-metrics-grid { grid-template-columns: 1fr !important; }
          .metric-cell { border-right: none !important; border-bottom: 1px solid var(--rule-hairline) !important; }
          .metric-cell:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
};
