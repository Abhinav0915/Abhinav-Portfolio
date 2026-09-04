import React from "react";
import { STATS } from "../../data/portfolioData";
import { SectionHeader } from "../common/SectionHeader";
import { MetricCounter } from "./MetricCounter";
import {
  ServerIcon,
  BrainCircuitIcon,
  ShieldCheckIcon,
  GraduationCapIcon,
} from "../common/Icons";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        padding: "110px 24px",
        position: "relative",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          index="01"
          eyebrow="ENGINEERING PROFILE"
          title="Architecting software that stays secure, scalable, and quietly reliable."
          subtitle="A blend of production engineering discipline and academic research in intelligent systems."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "48px",
            alignItems: "start",
            marginBottom: "50px",
          }}
          className="about-split-layout"
        >
          {/* Left Column: Narrative & Philosophy */}
          <div>
            <div
              className="cyber-panel"
              style={{
                padding: "28px 30px",
                border: "1px solid var(--border-medium)",
                borderRadius: "14px",
                background: "rgba(14, 18, 26, 0.7)",
              }}
            >
              <div
                className="font-mono text-xs uppercase"
                style={{
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.1em",
                  marginBottom: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>&gt;</span>
                <span>ENGINEERING_THESIS</span>
              </div>

              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "var(--text-primary)",
                  margin: "0 0 16px 0",
                  fontWeight: 400,
                }}
              >
                I'm a full-stack engineer and computer science graduate student
                with a focus on high-throughput backend services, explainable
                machine learning systems, and cryptographic security layers.
              </p>

              <p
                style={{
                  fontSize: "0.98rem",
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                  margin: "0 0 16px 0",
                }}
              >
                As a founding engineer at <strong>Esprit Analytique</strong>, I
                transitioned from an intern to permanent hire in 17 days and
                grew to <strong>Lead Full Stack Developer</strong> within a
                year. I spearheaded end-to-end architecture from an empty
                repository to a production platform—deploying 65+ multithreaded
                Django APIs, securing over 100 financial transactions with a
                custom hybrid <strong>AES + RSA</strong> cryptographic envelope,
                and containerizing on AWS EC2 with 99.9% uptime.
              </p>

              <p
                style={{
                  fontSize: "0.98rem",
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                Currently pursuing a{" "}
                <strong>Master of Computer Science (Advanced Entry)</strong> at{" "}
                <strong>The University of Sydney</strong>, I combine rigorous
                scientific principles with hard-earned production instincts:
                encrypt first, benchmark under peak load, and build systems that
                fail gracefully.
              </p>
            </div>
          </div>

          {/* Right Column: Bento Technical Metadata Matrix */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
            className="about-bento-grid"
          >
            {/* Focus 1 */}
            <div
              className="cyber-panel cyber-panel-glow"
              style={{
                padding: "20px",
                background: "rgba(19, 24, 35, 0.7)",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "8px",
                  background: "rgba(56, 189, 248, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-blue)",
                  marginBottom: "12px",
                }}
              >
                <ServerIcon size={17} />
              </div>
              <div
                className="font-mono text-xs uppercase"
                style={{ color: "var(--accent-blue)", marginBottom: "4px" }}
              >
                CORE_FOCUS
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#FFFFFF",
                  marginBottom: "6px",
                }}
              >
                Full-Stack Systems
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                Scalable Django REST & Spring Boot APIs with React & Next.js
                interfaces.
              </div>
            </div>

            {/* Focus 2 */}
            <div
              className="cyber-panel cyber-panel-glow"
              style={{
                padding: "20px",
                background: "rgba(19, 24, 35, 0.7)",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "8px",
                  background: "rgba(168, 85, 247, 0.12)",
                  border: "1px solid rgba(168, 85, 247, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-purple)",
                  marginBottom: "12px",
                }}
              >
                <BrainCircuitIcon size={17} />
              </div>
              <div
                className="font-mono text-xs uppercase"
                style={{ color: "var(--accent-purple)", marginBottom: "4px" }}
              >
                APPLIED_AI
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#FFFFFF",
                  marginBottom: "6px",
                }}
              >
                Explainable ML
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                SHAP interpretability, PyTorch deep autoencoders & Isolation
                Forest intrusion detection.
              </div>
            </div>

            {/* Focus 3 */}
            <div
              className="cyber-panel cyber-panel-glow"
              style={{
                padding: "20px",
                background: "rgba(19, 24, 35, 0.7)",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "8px",
                  background: "rgba(0, 229, 255, 0.12)",
                  border: "1px solid rgba(0, 229, 255, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-cyan)",
                  marginBottom: "12px",
                }}
              >
                <ShieldCheckIcon size={17} />
              </div>
              <div
                className="font-mono text-xs uppercase"
                style={{ color: "var(--accent-cyan)", marginBottom: "4px" }}
              >
                SECURITY
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#FFFFFF",
                  marginBottom: "6px",
                }}
              >
                Hybrid Cryptography
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                AES-256 payload encryption with RSA asymmetric handshake & JWT
                protection.
              </div>
            </div>

            {/* Focus 4 */}
            <div
              className="cyber-panel cyber-panel-glow"
              style={{
                padding: "20px",
                background: "rgba(19, 24, 35, 0.7)",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "8px",
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-emerald)",
                  marginBottom: "12px",
                }}
              >
                <GraduationCapIcon size={17} />
              </div>
              <div
                className="font-mono text-xs uppercase"
                style={{ color: "var(--accent-emerald)", marginBottom: "4px" }}
              >
                EDUCATION
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#FFFFFF",
                  marginBottom: "6px",
                }}
              >
                USyd Master's
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.5,
                }}
              >
                Master of Computer Science (Advanced Entry) at The University of
                Sydney.
              </div>
            </div>
          </div>
        </div>

        {/* Real Production Metrics Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18px",
          }}
          className="about-stats-grid"
        >
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="cyber-panel"
              style={{
                padding: "22px 20px",
                background: "rgba(14, 18, 26, 0.8)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 2.5rem)",
                  color: ["#00E5FF", "#A855F7", "#38BDF8", "#10B981"][idx % 4],
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                <MetricCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-tertiary)",
                  lineHeight: 1.45,
                }}
              >
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .about-split-layout { grid-template-columns: 1fr !important; }
          .about-stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .about-bento-grid { grid-template-columns: 1fr !important; }
          .about-stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
