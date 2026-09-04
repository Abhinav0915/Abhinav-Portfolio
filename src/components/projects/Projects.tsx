import React, { useState } from "react";
import { PROJECTS } from "../../data/portfolioData";
import { EditorialSectionHeading } from "../common/EditorialSectionHeading";
import { EditorialButton } from "../common/EditorialButton";
import { Isometric3DArchitecture } from "../common/Isometric3DArchitecture";
import { InteractiveAnomalySimulator } from "../common/InteractiveAnomalySimulator";
import { InteractiveCryptoSimulator } from "../common/InteractiveCryptoSimulator";
import { playMechanicalClick } from "../../utils/audio";

export const Projects: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    null,
  );
  const [localeoraTab, setLocaleoraTab] = useState<
    "spec" | "tsx" | "ast" | "diff"
  >("spec");

  const glassbox = PROJECTS.find((p) => p.id === "glassbox")!;
  const localeora = PROJECTS.find((p) => p.id === "localeora")!;
  const prodigidesk = PROJECTS.find((p) => p.id === "prodigidesk")!;
  const archiveProjects = PROJECTS.filter(
    (p) =>
      p.id !== "glassbox" && p.id !== "localeora" && p.id !== "prodigidesk",
  );

  return (
    <section
      id="projects"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        borderBottom: "1px solid var(--rule-hairline)",
      }}
    >
      <div className="editorial-container">
        <EditorialSectionHeading
          number="02"
          category="SELECTED WORKS &amp; INVESTIGATIONS"
          title="Engineered software, architectures &amp; publications."
          meta="ARCHIVE // 09 SYSTEMS SHIPPED"
        />

        {/* ========================================================================= */}
        {/* INVESTIGATION 01: GLASSBOX (Large Editorial Investigation)               */}
        {/* ========================================================================= */}
        <article
          style={{
            paddingBottom: "64px",
            marginBottom: "64px",
            borderBottom: "1px solid var(--rule-hairline)",
          }}
        >
          {/* Header Row: Giant Number + Title */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "32px",
              alignItems: "baseline",
              marginBottom: "24px",
            }}
            className="proj-header-grid"
          >
            <div
              className="num-oversized"
              style={{
                fontSize: "clamp(3.5rem, 6.5vw, 5.5rem)",
                color: "var(--accent-vermilion)",
              }}
            >
              01
            </div>

            <div>
              <div
                className="font-mono text-xs uppercase"
                style={{
                  color: "var(--ink-tertiary)",
                  letterSpacing: "0.1em",
                  marginBottom: "4px",
                }}
              >
                RESEARCH INVESTIGATION // {glassbox.period} •{" "}
                {glassbox.category}
              </div>
              <h3
                className="font-display font-bold uppercase"
                style={{
                  fontSize: "clamp(2rem, 4.4vw, 3.4rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--ink-primary)",
                  margin: "0 0 6px 0",
                }}
              >
                {glassbox.name}
              </h3>
              <div
                className="font-mono text-sm"
                style={{ color: "var(--ink-secondary)", fontWeight: 500 }}
              >
                {glassbox.subtitle}
              </div>
            </div>
          </div>

          {/* Abstract Paragraph */}
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "var(--ink-primary)",
              maxWidth: "840px",
              margin: "0 0 36px 0",
              fontWeight: 400,
            }}
          >
            {glassbox.summary}
          </p>

          {/* 4-Part Architectural Storytelling Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "28px",
              padding: "32px",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--rule-hairline)",
              marginBottom: "32px",
            }}
            className="glassbox-story-grid"
          >
            <div>
              <div
                className="font-mono text-xs uppercase"
                style={{
                  color: "var(--accent-vermilion)",
                  fontWeight: 600,
                  marginBottom: "8px",
                  letterSpacing: "0.08em",
                }}
              >
                [01] THE PROBLEM: BLACK-BOX ALERT FATIGUE
              </div>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "var(--ink-secondary)",
                  margin: 0,
                }}
              >
                Traditional network intrusion detectors output opaque anomaly
                scores. Without interpretability, security operations teams
                cannot discern whether a flagged flow is a zero-day exfiltration
                attempt or an innocuous misconfigured client.
              </p>
            </div>

            <div>
              <div
                className="font-mono text-xs uppercase"
                style={{
                  color: "var(--accent-vermilion)",
                  fontWeight: 600,
                  marginBottom: "8px",
                  letterSpacing: "0.08em",
                }}
              >
                [02] THE DUAL-ENGINE ENSEMBLE
              </div>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "var(--ink-secondary)",
                  margin: 0,
                }}
              >
                Decoupled ML inference from serving: trained an Isolation Forest
                (200 trees, ~77 features) alongside a PyTorch deep autoencoder
                (64 → 32 → 16-dim latent bottleneck) on benign CIC-IDS2018
                traffic. Serialized via a thread-safe singleton ModelRegistry
                loaded once at startup.
              </p>
            </div>

            <div>
              <div
                className="font-mono text-xs uppercase"
                style={{
                  color: "var(--accent-vermilion)",
                  fontWeight: 600,
                  marginBottom: "8px",
                  letterSpacing: "0.08em",
                }}
              >
                [03] EXPLAINABILITY GATING VIA SHAP
              </div>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "var(--ink-secondary)",
                  margin: 0,
                }}
              >
                Wired SHAP TreeExplainer and KernelExplainer directly into the
                live alert path—gated to execute conditionally only on flagged
                flows to minimize overhead. Every alert stores exact feature
                attributions for forensic re-analysis.
              </p>
            </div>

            <div>
              <div
                className="font-mono text-xs uppercase"
                style={{
                  color: "var(--accent-vermilion)",
                  fontWeight: 600,
                  marginBottom: "8px",
                  letterSpacing: "0.08em",
                }}
              >
                [04] RIGOROUS EMPIRICAL EVALUATION
              </div>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.65,
                  color: "var(--ink-secondary)",
                  margin: 0,
                }}
              >
                Decision thresholds were tuned strictly on a validation split
                with the held-out test split touched exactly once. Autoencoder
                checkpoints were selected via validation PR-AUC rather than loss
                to avoid attack reconstruction bias.
              </p>
            </div>
          </div>

          {/* 3D Interactive Layered Pipeline */}
          <div style={{ marginBottom: "32px" }}>
            <Isometric3DArchitecture />
          </div>

          {/* Specs & Link Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "18px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {glassbox.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono"
                  style={{
                    fontSize: "0.75rem",
                    padding: "3px 8px",
                    border: "1px solid var(--rule-hairline)",
                    color: "var(--ink-primary)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              {glassbox.github && (
                <EditorialButton
                  variant="secondary"
                  size="sm"
                  as="a"
                  href={glassbox.github}
                  target="_blank"
                  rel="noreferrer"
                  arrow="up-right"
                >
                  GitHub Source
                </EditorialButton>
              )}
            </div>
          </div>

          {/* Interactive ML & SHAP Simulator */}
          <InteractiveAnomalySimulator />
        </article>

        {/* ========================================================================= */}
        {/* INVESTIGATION 02: LOCALEORA (AST Code Transformation)                    */}
        {/* ========================================================================= */}
        <article
          style={{
            paddingBottom: "64px",
            marginBottom: "64px",
            borderBottom: "1px solid var(--rule-hairline)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "32px",
              alignItems: "baseline",
              marginBottom: "24px",
            }}
            className="proj-header-grid"
          >
            <div
              className="num-oversized"
              style={{
                fontSize: "clamp(3.5rem, 6.5vw, 5.5rem)",
                color: "var(--ink-muted)",
              }}
            >
              02
            </div>

            <div>
              <div
                className="font-mono text-xs uppercase"
                style={{
                  color: "var(--ink-tertiary)",
                  letterSpacing: "0.1em",
                  marginBottom: "4px",
                }}
              >
                COMPILER TOOLING // {localeora.period} • {localeora.category}
              </div>
              <h3
                className="font-display font-bold uppercase"
                style={{
                  fontSize: "clamp(2rem, 4.4vw, 3.4rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--ink-primary)",
                  margin: "0 0 6px 0",
                }}
              >
                {localeora.name}
              </h3>
              <div
                className="font-mono text-sm"
                style={{ color: "var(--ink-secondary)", fontWeight: 500 }}
              >
                {localeora.subtitle}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "48px",
              alignItems: "start",
            }}
            className="localeora-layout"
          >
            <div>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  color: "var(--ink-primary)",
                  margin: "0 0 20px 0",
                }}
              >
                {localeora.summary}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "28px",
                }}
              >
                {localeora.details.map((point, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      className="font-mono text-xs"
                      style={{
                        color: "var(--accent-vermilion)",
                        marginTop: "3px",
                      }}
                    >
                      0{idx + 1}.
                    </span>
                    <span
                      style={{
                        fontSize: "0.92rem",
                        lineHeight: 1.6,
                        color: "var(--ink-secondary)",
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {localeora.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono"
                    style={{
                      fontSize: "0.75rem",
                      padding: "3px 8px",
                      border: "1px solid var(--rule-hairline)",
                      color: "var(--ink-primary)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Dry-Run Diff Spec & Code Box */}
            <div
              style={{
                border: "1px solid var(--rule-hairline)",
                backgroundColor: "var(--bg-secondary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                lineHeight: 1.7,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                  padding: "10px 14px",
                  borderBottom: "1px solid var(--rule-hairline)",
                  backgroundColor: "var(--bg-surface)",
                }}
              >
                <div
                  style={{
                    color: "var(--accent-vermilion)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                  }}
                >
                  LOCALEORA // AST TRANSFORMATION LAB
                </div>

                <div style={{ display: "flex", gap: "4px" }}>
                  {(["spec", "tsx", "ast", "diff"] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => {
                        playMechanicalClick("tap");
                        setLocaleoraTab(tab);
                      }}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        padding: "2px 6px",
                        background:
                          localeoraTab === tab
                            ? "var(--accent-vermilion)"
                            : "transparent",
                        color:
                          localeoraTab === tab
                            ? "#FFFFFF"
                            : "var(--ink-secondary)",
                        border: "1px solid var(--rule-hairline)",
                        cursor: "pointer",
                        textTransform: "uppercase",
                      }}
                    >
                      {tab === "spec"
                        ? "SPECS"
                        : tab === "tsx"
                          ? "INPUT.TSX"
                          : tab === "ast"
                            ? "BABEL_AST"
                            : "DIFF_PREVIEW"}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ padding: "16px", color: "var(--ink-primary)" }}>
                {localeoraTab === "spec" && (
                  <div>
                    <div>PARSE_TARGET: React / TypeScript / TSX / HTML</div>
                    <div>PARSERS: Babel Traverse + ts-morph AST</div>
                    <div>
                      INTEGRITY: Cryptographic source file content-hash check
                    </div>
                    <div>VERIFICATION: Mandatory dry-run diff approval</div>
                    <div>
                      PROVIDERS: Google Cloud Translation + Azure AI Translator
                    </div>
                    <div>CONCURRENCY: Python asyncio bounded semaphores</div>
                  </div>
                )}

                {localeoraTab === "tsx" && (
                  <div
                    style={{
                      color: "var(--ink-secondary)",
                      fontSize: "0.75rem",
                    }}
                  >
                    <div style={{ color: "var(--ink-tertiary)" }}>
                      // Source: src/components/Dashboard.tsx
                    </div>
                    <div>
                      export const Dashboard = ({`{ user }`}) =&gt; &#123;
                    </div>
                    <div style={{ paddingLeft: "16px" }}>return (</div>
                    <div style={{ paddingLeft: "32px" }}>
                      &lt;header className=&quot;dash-header&quot;&gt;
                    </div>
                    <div
                      style={{
                        paddingLeft: "48px",
                        color: "var(--accent-vermilion)",
                      }}
                    >
                      &lt;h1&gt;Welcome back, &#123;user.name&#125;&lt;/h1&gt;
                    </div>
                    <div
                      style={{
                        paddingLeft: "48px",
                        color: "var(--accent-vermilion)",
                      }}
                    >
                      &lt;p&gt;Your subscription is active.&lt;/p&gt;
                    </div>
                    <div style={{ paddingLeft: "32px" }}>&lt;/header&gt;</div>
                    <div style={{ paddingLeft: "16px" }}>);</div>
                    <div>&#125;;</div>
                  </div>
                )}

                {localeoraTab === "ast" && (
                  <div
                    style={{
                      color: "var(--ink-secondary)",
                      fontSize: "0.75rem",
                    }}
                  >
                    <div style={{ color: "var(--ink-tertiary)" }}>
                      // Babel AST Visitor: String Extraction &amp; Injection
                    </div>
                    <div>traverse(ast, &#123;</div>
                    <div style={{ paddingLeft: "16px" }}>
                      JSXText(path) &#123;
                    </div>
                    <div style={{ paddingLeft: "32px" }}>
                      const text = path.node.value.trim();
                    </div>
                    <div style={{ paddingLeft: "32px" }}>
                      if (!text) return;
                    </div>
                    <div
                      style={{
                        paddingLeft: "32px",
                        color: "var(--accent-vermilion)",
                      }}
                    >
                      const key = generateHash(text, sourceFileHash);
                    </div>
                    <div style={{ paddingLeft: "32px" }}>
                      path.replaceWith(t.jsxExpressionContainer(
                    </div>
                    <div style={{ paddingLeft: "48px" }}>
                      t.callExpression(t.identifier(&apos;t&apos;),
                      [t.stringLiteral(key)])
                    </div>
                    <div style={{ paddingLeft: "32px" }}>));</div>
                    <div style={{ paddingLeft: "16px" }}>&#125;</div>
                    <div>&#125;);</div>
                  </div>
                )}

                {localeoraTab === "diff" && (
                  <div style={{ fontSize: "0.75rem" }}>
                    <div style={{ color: "var(--ink-tertiary)" }}>
                      --- a/src/components/Dashboard.tsx
                    </div>
                    <div style={{ color: "var(--ink-tertiary)" }}>
                      +++ b/src/components/Dashboard.tsx
                    </div>
                    <div style={{ color: "#EF4444" }}>
                      - &lt;h1&gt;Welcome back, &#123;user.name&#125;&lt;/h1&gt;
                    </div>
                    <div style={{ color: "#EF4444" }}>
                      - &lt;p&gt;Your subscription is active.&lt;/p&gt;
                    </div>
                    <div style={{ color: "#10B981" }}>
                      + &lt;h1&gt;&#123;t(&apos;dash.welcome&apos;, &#123; name:
                      user.name &#125;)&#125;&lt;/h1&gt;
                    </div>
                    <div style={{ color: "#10B981" }}>
                      +
                      &lt;p&gt;&#123;t(&apos;dash.sub_active&apos;)&#125;&lt;/p&gt;
                    </div>
                  </div>
                )}
              </div>

              <div
                style={{
                  padding: "8px 16px",
                  borderTop: "1px solid var(--rule-hairline)",
                  color: "var(--accent-vermilion)",
                  fontSize: "0.72rem",
                  backgroundColor: "var(--bg-surface)",
                }}
              >
                &gt; ZERO SILENT CODEBASE CORRUPTIONS GUARANTEED • HASH-VERIFIED
              </div>
            </div>
          </div>
        </article>

        {/* ========================================================================= */}
        {/* INVESTIGATION 03: PRODIGIDESK (Industrial Band Layout)                   */}
        {/* ========================================================================= */}
        <article
          style={{
            paddingBottom: "64px",
            marginBottom: "64px",
            borderBottom: "1px solid var(--rule-hairline)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr",
              gap: "32px",
              alignItems: "baseline",
              marginBottom: "24px",
            }}
            className="proj-header-grid"
          >
            <div
              className="num-oversized"
              style={{
                fontSize: "clamp(3.5rem, 6.5vw, 5.5rem)",
                color: "var(--ink-muted)",
              }}
            >
              03
            </div>

            <div>
              <div
                className="font-mono text-xs uppercase"
                style={{
                  color: "var(--ink-tertiary)",
                  letterSpacing: "0.1em",
                  marginBottom: "4px",
                }}
              >
                ENTERPRISE SECURITY // {prodigidesk.period} •{" "}
                {prodigidesk.category}
              </div>
              <h3
                className="font-display font-bold uppercase"
                style={{
                  fontSize: "clamp(2rem, 4.4vw, 3.4rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "var(--ink-primary)",
                  margin: "0 0 6px 0",
                }}
              >
                {prodigidesk.name}
              </h3>
              <div
                className="font-mono text-sm"
                style={{ color: "var(--ink-secondary)", fontWeight: 500 }}
              >
                {prodigidesk.subtitle}
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--ink-primary)",
              maxWidth: "840px",
              margin: "0 0 28px 0",
            }}
          >
            {prodigidesk.summary}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              marginBottom: "28px",
            }}
            className="prodigi-metrics-grid"
          >
            {prodigidesk.details.map((detail, idx) => (
              <div
                key={idx}
                style={{
                  padding: "18px 20px",
                  border: "1px solid var(--rule-hairline)",
                  backgroundColor: "var(--bg-secondary)",
                }}
              >
                <div
                  className="font-mono text-xs"
                  style={{
                    color: "var(--accent-vermilion)",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  SYSTEM_PILLAR 0{idx + 1}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--ink-secondary)",
                  }}
                >
                  {detail}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {prodigidesk.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono"
                  style={{
                    fontSize: "0.75rem",
                    padding: "3px 8px",
                    border: "1px solid var(--rule-hairline)",
                    color: "var(--ink-primary)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {prodigidesk.link && (
              <EditorialButton
                variant="primary"
                size="sm"
                as="a"
                href={prodigidesk.link}
                target="_blank"
                rel="noreferrer"
                arrow="up-right"
              >
                Launch prodigidesk.ai
              </EditorialButton>
            )}
          </div>

          {/* Interactive Cryptographic Envelope Simulator */}
          <InteractiveCryptoSimulator />
        </article>

        {/* ========================================================================= */}
        {/* EDITORIAL CATALOG TABLE: ADDITIONAL PRODUCTION WORKS (04 to 09)          */}
        {/* ========================================================================= */}
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
              // PRODUCTION CATALOGUE ARCHIVE (INDEX 04 — 09)
            </div>
            <div
              className="font-mono text-xs text-secondary"
              style={{ color: "var(--ink-tertiary)" }}
            >
              CLICK ROW FOR ARCHITECTURAL NOTES
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--rule-hairline)",
              borderBottom: "1px solid var(--rule-hairline)",
            }}
          >
            {archiveProjects.map((proj, idx) => {
              const isExpanded = expandedProjectId === proj.id;
              return (
                <div
                  key={proj.id}
                  style={{
                    borderBottom:
                      idx === archiveProjects.length - 1
                        ? "none"
                        : "1px solid var(--rule-hairline)",
                    backgroundColor: isExpanded
                      ? "var(--bg-secondary)"
                      : "transparent",
                    transition: "background-color 0.15s ease",
                  }}
                >
                  {/* Table Row Header */}
                  <div
                    onClick={() =>
                      setExpandedProjectId(isExpanded ? null : proj.id)
                    }
                    style={{
                      display: "grid",
                      gridTemplateColumns: "60px 1.5fr 1fr 120px 80px",
                      gap: "16px",
                      alignItems: "center",
                      padding: "18px 12px",
                      cursor: "pointer",
                    }}
                    className="archive-table-row"
                  >
                    <span
                      className="font-mono text-xs"
                      style={{
                        color: "var(--accent-vermilion)",
                        fontWeight: 600,
                      }}
                    >
                      0{idx + 4}
                    </span>

                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "var(--ink-primary)",
                        }}
                      >
                        {proj.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--ink-secondary)",
                        }}
                      >
                        {proj.subtitle || proj.summary.slice(0, 70) + "..."}
                      </div>
                    </div>

                    <div
                      className="font-mono text-xs text-secondary"
                      style={{ color: "var(--ink-tertiary)" }}
                    >
                      {proj.tags.slice(0, 3).join(" • ")}
                    </div>

                    <div
                      className="font-mono text-xs text-secondary"
                      style={{ color: "var(--ink-tertiary)" }}
                    >
                      {proj.period}
                    </div>

                    <div
                      style={{
                        textAlign: "right",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        color: "var(--ink-primary)",
                      }}
                    >
                      {isExpanded ? "[ − ]" : "[ + ]"}
                    </div>
                  </div>

                  {/* Expanded Detail Panel */}
                  {isExpanded && (
                    <div
                      style={{
                        padding: "16px 20px 24px 76px",
                        borderTop: "1px solid var(--rule-hairline)",
                      }}
                      className="archive-expanded-panel"
                    >
                      <p
                        style={{
                          fontSize: "0.95rem",
                          lineHeight: 1.7,
                          color: "var(--ink-primary)",
                          margin: "0 0 16px 0",
                          maxWidth: "800px",
                        }}
                      >
                        {proj.summary}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                          marginBottom: "20px",
                        }}
                      >
                        {proj.details.map((d, dIdx) => (
                          <div
                            key={dIdx}
                            style={{
                              display: "flex",
                              gap: "8px",
                              fontSize: "0.88rem",
                              color: "var(--ink-secondary)",
                            }}
                          >
                            <span style={{ color: "var(--accent-vermilion)" }}>
                              —
                            </span>
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "6px",
                          }}
                        >
                          {proj.tags.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-xs"
                              style={{
                                padding: "2px 6px",
                                border: "1px solid var(--rule-hairline)",
                                color: "var(--ink-secondary)",
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div style={{ display: "flex", gap: "10px" }}>
                          {proj.link && (
                            <EditorialButton
                              variant="primary"
                              size="sm"
                              as="a"
                              href={proj.link}
                              target="_blank"
                              rel="noreferrer"
                              arrow="up-right"
                            >
                              Live System
                            </EditorialButton>
                          )}
                          {proj.github && (
                            <EditorialButton
                              variant="secondary"
                              size="sm"
                              as="a"
                              href={proj.github}
                              target="_blank"
                              rel="noreferrer"
                              arrow="up-right"
                            >
                              Repository
                            </EditorialButton>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-header-grid { grid-template-columns: 60px 1fr !important; gap: 16px !important; }
          .glassbox-story-grid { grid-template-columns: 1fr !important; padding: 20px !important; }
          .localeora-layout { grid-template-columns: 1fr !important; }
          .prodigi-metrics-grid { grid-template-columns: 1fr !important; }
          .archive-table-row { grid-template-columns: 40px 1fr 60px !important; }
          .archive-table-row > div:nth-child(3), .archive-table-row > div:nth-child(4) { display: none !important; }
          .archive-expanded-panel { padding-left: 20px !important; }
        }
      `}</style>
    </section>
  );
};
