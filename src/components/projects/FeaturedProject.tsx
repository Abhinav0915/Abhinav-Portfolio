import React from "react";
import type { ProjectItem } from "../../types/portfolio";
import { GlowButton } from "../common/GlowButton";
import { SystemBadge } from "../common/SystemBadge";
import {
  BrainCircuitIcon,
  GithubIcon,
  ExternalLinkIcon,
} from "../common/Icons";

type FeaturedProjectProps = {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
};

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  onOpenDetails,
}) => {
  return (
    <div
      className="cyber-panel corner-brackets mb-12"
      style={{
        padding: "36px 32px",
        background:
          "linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(11, 15, 23, 0.95) 100%)",
        border: "1px solid rgba(56, 189, 248, 0.3)",
        borderRadius: "16px",
        boxShadow:
          "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        position: "relative",
      }}
    >
      {/* Top Telemetry Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "24px",
          paddingBottom: "16px",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <SystemBadge label="FEATURED ARCHITECTURE" variant="cyan" dotPulse />
          <span
            className="font-mono text-xs"
            style={{ color: "var(--text-tertiary)" }}
          >
            PERIOD: {project.period}
          </span>
        </div>

        <div
          className="font-mono text-xs"
          style={{ color: "var(--accent-emerald)" }}
        >
          ● EVALUATION_HONESTY: HELD-OUT_TEST_UNTOUCHED
        </div>
      </div>

      {/* Main Content Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
        className="featured-grid-layout"
      >
        {/* Left Column: Project Overview & Problem / Solution */}
        <div>
          <h3
            className="font-display font-bold"
            style={{
              fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
              color: "#FFFFFF",
              margin: "0 0 8px 0",
              letterSpacing: "-0.02em",
            }}
          >
            {project.name}
          </h3>

          <p
            className="font-mono text-sm"
            style={{
              color: "var(--accent-cyan)",
              marginBottom: "16px",
              fontWeight: 500,
            }}
          >
            {project.subtitle}
          </p>

          <p
            style={{
              fontSize: "0.98rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              margin: "0 0 24px 0",
            }}
          >
            {project.summary}
          </p>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "28px",
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono"
                style={{
                  fontSize: "0.75rem",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  color: "#38BDF8",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <GlowButton
              variant="primary"
              size="md"
              onClick={() => onOpenDetails(project)}
              showArrow
            >
              Inspect Architecture Details
            </GlowButton>

            {project.github && (
              <GlowButton
                variant="ghost"
                size="md"
                as="a"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                icon={<GithubIcon size={16} />}
              >
                Source Code
              </GlowButton>
            )}

            {project.link && (
              <GlowButton
                variant="ghost"
                size="md"
                as="a"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                icon={<ExternalLinkIcon size={16} />}
              >
                Live Demo
              </GlowButton>
            )}
          </div>
        </div>

        {/* Right Column: Visual Architecture Flow & Metrics */}
        <div
          style={{
            background: "rgba(10, 13, 20, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "14px",
            padding: "24px",
          }}
        >
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
            <BrainCircuitIcon size={16} color="var(--accent-purple)" />
            <span>INSPECTION_PIPELINE // DATA_FLOW</span>
          </div>

          {/* Pipeline flow nodes */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
              }}
            >
              <span style={{ color: "var(--accent-cyan)", fontWeight: 700 }}>
                01
              </span>
              <span style={{ color: "var(--text-primary)" }}>
                Packet Ingestion
              </span>
              <span
                style={{ color: "var(--text-tertiary)", marginLeft: "auto" }}
              >
                scapy AsyncSniffer
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
              }}
            >
              <span style={{ color: "var(--accent-cyan)", fontWeight: 700 }}>
                02
              </span>
              <span style={{ color: "var(--text-primary)" }}>
                Scaling & Preprocessing
              </span>
              <span
                style={{ color: "var(--text-tertiary)", marginLeft: "auto" }}
              >
                RobustScaler (100k chunk)
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "8px",
                background: "rgba(168, 85, 247, 0.08)",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
              }}
            >
              <span style={{ color: "var(--accent-purple)", fontWeight: 700 }}>
                03
              </span>
              <span style={{ color: "#FFFFFF" }}>Dual Ensembles</span>
              <span
                style={{ color: "var(--accent-purple)", marginLeft: "auto" }}
              >
                IsoForest + PyTorch AE
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "8px",
                background: "rgba(0, 229, 255, 0.08)",
                border: "1px solid rgba(0, 229, 255, 0.3)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
              }}
            >
              <span style={{ color: "var(--accent-cyan)", fontWeight: 700 }}>
                04
              </span>
              <span style={{ color: "#FFFFFF" }}>Explainability Gating</span>
              <span style={{ color: "var(--accent-cyan)", marginLeft: "auto" }}>
                SHAP TreeExplainer
              </span>
            </div>
          </div>

          {/* Metrics summary */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              paddingTop: "14px",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <div className="font-mono text-xs text-secondary">FEATURES</div>
              <div
                style={{
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontSize: "0.95rem",
                }}
              >
                77 Extracted
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-secondary">ACCURACY</div>
              <div
                style={{
                  fontWeight: 700,
                  color: "var(--accent-emerald)",
                  fontSize: "0.95rem",
                }}
              >
                99.2% Benign
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-secondary">LATENCY</div>
              <div
                style={{
                  fontWeight: 700,
                  color: "var(--accent-cyan)",
                  fontSize: "0.95rem",
                }}
              >
                &lt;100ms Inf.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .featured-grid-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </div>
  );
};
