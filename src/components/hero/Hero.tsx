import React from "react";
import { CONTACT } from "../../data/portfolioData";
import { EditorialButton } from "../common/EditorialButton";
import { Interactive3DObject } from "../common/Interactive3DObject";
import { TypewriterRole } from "./TypewriterRole";

type HeroProps = {
  onNavigate: (sectionId: string) => void;
};

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero"
      style={{
        paddingTop: "48px",
        paddingBottom: "80px",
        borderBottom: "1px solid var(--rule-hairline)",
      }}
    >
      <div className="editorial-container">
        {/* Masthead Annotation Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            paddingBottom: "18px",
            marginBottom: "36px",
            borderBottom: "1px solid var(--rule-hairline)",
          }}
          className="scroll-reveal"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              className="font-mono text-xs uppercase"
              style={{ color: "var(--accent-vermilion)", fontWeight: 600 }}
            >
              VOL. 2026 // MONOGRAPH
            </div>
            <span className="tech-badge">
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-vermilion)",
                }}
              />
              <span>33.8688° S, 151.2093° E</span>
            </span>
          </div>
          <div
            className="font-mono text-xs uppercase"
            style={{ color: "var(--ink-secondary)" }}
          >
            FULL-STACK SYSTEMS • EXPLAINABLE ML • CRYPTOGRAPHY
          </div>
          <div
            className="font-mono text-xs uppercase"
            style={{ color: "var(--ink-tertiary)" }}
          >
            USYD_COMP_SCI // SYS.NOMINAL
          </div>
        </div>

        {/* Oversized Publication Title */}
        <div style={{ marginBottom: "44px" }} className="scroll-reveal delay-1">
          <h1
            className="font-display font-bold uppercase"
            style={{
              fontSize: "clamp(2.8rem, 8.2vw, 6.8rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--ink-primary)",
              margin: "0 0 12px 0",
              wordBreak: "break-word",
            }}
          >
            Abhinav Saxena
          </h1>
          <TypewriterRole />
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "56px",
            alignItems: "start",
          }}
          className="hero-editorial-layout"
        >
          {/* Left Column: Thesis Statement & Action Triggers */}
          <div className="scroll-reveal delay-2">
            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                lineHeight: 1.55,
                color: "var(--ink-primary)",
                fontWeight: 400,
                margin: "0 0 28px 0",
                maxWidth: "680px",
              }}
            >
              Building software across the boundaries of high-concurrency
              backend services, explainable machine learning architectures, and
              cryptographic security layers.
            </p>

            <p
              style={{
                fontSize: "0.98rem",
                lineHeight: 1.7,
                color: "var(--ink-secondary)",
                margin: "0 0 36px 0",
                maxWidth: "620px",
              }}
            >
              Ex-Founding engineer at <strong>Esprit Analytique</strong> (scaled
              from zero to production public deployment with 65+ Django APIs and
              AES+RSA protection) and currently pursuing a{" "}
              <strong>Master of Computer Science (Advanced Entry)</strong> at{" "}
              <strong>The University of Sydney</strong>.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <EditorialButton
                variant="primary"
                size="md"
                onClick={() => onNavigate("projects")}
                arrow="right"
              >
                Selected Work
              </EditorialButton>

              <EditorialButton
                variant="secondary"
                size="md"
                onClick={() => onNavigate("contact")}
                arrow="up-right"
              >
                Initiate Contact
              </EditorialButton>

              <EditorialButton
                variant="secondary"
                size="md"
                as="a"
                href="/CV-Resume.zip"
                download="Abhinav_Saxena_CV_Resume.zip"
                arrow="up-right"
              >
                CV / Resume
              </EditorialButton>
            </div>
          </div>

          {/* Right Column: Specification & Benchmark Table */}
          <div
            style={{
              borderLeft: "1px solid var(--rule-hairline)",
              paddingLeft: "36px",
            }}
            className="hero-spec-col scroll-reveal-scale delay-3"
          >
            {/* Interactive 3D Geometry */}
            <div className="crosshair-box" style={{ marginBottom: "24px" }}>
              <Interactive3DObject />
            </div>

            <div
              className="font-mono text-xs uppercase"
              style={{
                color: "var(--accent-vermilion)",
                letterSpacing: "0.1em",
                fontWeight: 600,
                marginBottom: "16px",
              }}
            >
              // SPECIFICATION SHEET
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              <div
                style={{
                  paddingBottom: "12px",
                  borderBottom: "1px solid var(--rule-hairline)",
                }}
              >
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  CURRENT_AFFILIATION
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--ink-primary)",
                    marginTop: "2px",
                  }}
                >
                  The University of Sydney
                </div>
                <div
                  style={{ fontSize: "0.82rem", color: "var(--ink-secondary)" }}
                >
                  Master of Computer Science (Advanced Entry)
                </div>
              </div>

              <div
                style={{
                  paddingBottom: "12px",
                  borderBottom: "1px solid var(--rule-hairline)",
                }}
              >
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  PRODUCTION_BENCHMARKS
                </div>
                <div
                  className="font-mono text-xs"
                  style={{
                    marginTop: "4px",
                    color: "var(--ink-primary)",
                    lineHeight: 1.6,
                  }}
                >
                  <div>• 65+ REST APIs Engineered in Production</div>
                  <div>• 100+ Hybrid AES/RSA Secure Transactions</div>
                  <div>• 99.9% Uptime under AWS EC2 Docker load</div>
                </div>
              </div>

              <div>
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  DIRECT_CHANNELS
                </div>
                <div
                  className="font-mono text-xs"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    marginTop: "6px",
                  }}
                >
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noreferrer"
                    className="editorial-link"
                  >
                    GITHUB: Abhinav0915 ↗
                  </a>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="editorial-link"
                  >
                    LINKEDIN: in/abhinav1506 ↗
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="editorial-link"
                  >
                    EMAIL: {CONTACT.email} ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .hero-editorial-layout { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-spec-col { border-left: none !important; padding-left: 0 !important; border-top: 1px solid var(--rule-hairline) !important; padding-top: 24px !important; }
        }
      `}</style>
    </section>
  );
};
