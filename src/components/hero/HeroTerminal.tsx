import React, { useState } from "react";
import {
  TerminalIcon,
  CopyIcon,
  CheckCircleIcon,
  CpuIcon,
  CodeIcon,
} from "../common/Icons";

export const HeroTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"cli" | "telemetry" | "specs">(
    "cli",
  );
  const [copied, setCopied] = useState(false);
  const [commandOutput, setCommandOutput] = useState<string>("default");

  const handleCopy = () => {
    const textToCopy = `// Abhinav Saxena — Developer Profile
const engineer = {
  name: "Abhinav Saxena",
  education: "Master of Computer Science (Advanced Entry) @ USyd",
  roles: ["Founding Full-Stack Engineer", "AI/ML Researcher"],
  coreStack: ["React", "TypeScript", "Python", "Django", "PyTorch", "AWS"],
  security: "AES+RSA Hybrid Cryptographic Encryption",
  status: "Available for Software Engineering & Research roles",
  location: "Sydney, Australia"
};`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="cyber-panel corner-brackets scanline-subtle"
      style={{
        boxShadow:
          "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(56, 189, 248, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        overflow: "hidden",
        width: "100%",
        maxWidth: "520px",
        margin: "0 auto",
      }}
    >
      {/* Terminal Window Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          background: "rgba(14, 18, 26, 0.95)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          userSelect: "none",
        }}
      >
        {/* Window controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#EF4444",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#F59E0B",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: "#10B981",
              display: "inline-block",
            }}
          />
          <span
            className="font-mono"
            style={{
              fontSize: "0.72rem",
              color: "var(--text-tertiary)",
              marginLeft: "6px",
            }}
          >
            bash — 80x24
          </span>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: "flex", gap: "4px" }}>
          <button
            onClick={() => setActiveTab("cli")}
            style={{
              background:
                activeTab === "cli"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "transparent",
              border: "none",
              borderRadius: "4px",
              padding: "3px 8px",
              fontSize: "0.72rem",
              color:
                activeTab === "cli"
                  ? "var(--accent-cyan)"
                  : "var(--text-tertiary)",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <TerminalIcon size={12} /> profile.sh
          </button>
          <button
            onClick={() => setActiveTab("telemetry")}
            style={{
              background:
                activeTab === "telemetry"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "transparent",
              border: "none",
              borderRadius: "4px",
              padding: "3px 8px",
              fontSize: "0.72rem",
              color:
                activeTab === "telemetry"
                  ? "var(--accent-cyan)"
                  : "var(--text-tertiary)",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <CpuIcon size={12} /> telemetry.log
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            style={{
              background:
                activeTab === "specs"
                  ? "rgba(255, 255, 255, 0.1)"
                  : "transparent",
              border: "none",
              borderRadius: "4px",
              padding: "3px 8px",
              fontSize: "0.72rem",
              color:
                activeTab === "specs"
                  ? "var(--accent-cyan)"
                  : "var(--text-tertiary)",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <CodeIcon size={12} /> specs.ts
          </button>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          title="Copy profile config"
          style={{
            background: "none",
            border: "none",
            color: copied ? "var(--accent-emerald)" : "var(--text-tertiary)",
            cursor: "pointer",
            padding: "2px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {copied ? <CheckCircleIcon size={14} /> : <CopyIcon size={14} />}
        </button>
      </div>

      {/* Terminal Content Body */}
      <div
        className="font-mono"
        style={{
          padding: "18px 20px",
          backgroundColor: "#0A0D14",
          fontSize: "0.82rem",
          lineHeight: 1.7,
          minHeight: "260px",
        }}
      >
        {activeTab === "cli" && (
          <div>
            <div style={{ color: "var(--text-tertiary)", marginBottom: "8px" }}>
              # Session initialized. Type or select quick commands:
            </div>

            {/* Quick interactive buttons */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                marginBottom: "14px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => setCommandOutput("whoami")}
                style={{
                  background:
                    commandOutput === "whoami"
                      ? "rgba(0, 229, 255, 0.15)"
                      : "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  color:
                    commandOutput === "whoami"
                      ? "var(--accent-cyan)"
                      : "var(--text-secondary)",
                  fontSize: "0.72rem",
                  padding: "2px 8px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                $ whoami
              </button>
              <button
                onClick={() => setCommandOutput("stack")}
                style={{
                  background:
                    commandOutput === "stack"
                      ? "rgba(0, 229, 255, 0.15)"
                      : "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  color:
                    commandOutput === "stack"
                      ? "var(--accent-cyan)"
                      : "var(--text-secondary)",
                  fontSize: "0.72rem",
                  padding: "2px 8px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                $ cat stack.json
              </button>
              <button
                onClick={() => setCommandOutput("status")}
                style={{
                  background:
                    commandOutput === "status"
                      ? "rgba(0, 229, 255, 0.15)"
                      : "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  color:
                    commandOutput === "status"
                      ? "var(--accent-cyan)"
                      : "var(--text-secondary)",
                  fontSize: "0.72rem",
                  padding: "2px 8px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                $ sys.status
              </button>
              <button
                onClick={() => setCommandOutput("default")}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "4px",
                  color: "var(--text-tertiary)",
                  fontSize: "0.72rem",
                  padding: "2px 8px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                reset
              </button>
            </div>

            {/* Terminal Feed */}
            <div style={{ color: "var(--text-secondary)" }}>
              <div>
                <span style={{ color: "var(--accent-cyan)" }}>user@sydney</span>
                :<span style={{ color: "var(--accent-purple)" }}>~</span>$
                whoami
              </div>
              <div
                style={{
                  color: "#FFFFFF",
                  paddingLeft: "12px",
                  marginBottom: "8px",
                }}
              >
                → Abhinav Saxena (Founding Engineer & Master's Student @ USyd)
              </div>

              <div>
                <span style={{ color: "var(--accent-cyan)" }}>user@sydney</span>
                :<span style={{ color: "var(--accent-purple)" }}>~</span>$
                current_focus
              </div>
              <div
                style={{
                  color: "#94A3B8",
                  paddingLeft: "12px",
                  marginBottom: "8px",
                }}
              >
                → Full-Stack Architecture, Explainable AI (SHAP), Cryptography
                (AES+RSA)
              </div>

              {commandOutput === "stack" && (
                <div>
                  <div style={{ color: "var(--accent-cyan)" }}>
                    user@sydney:
                    <span style={{ color: "var(--accent-purple)" }}>~</span>$
                    cat stack.json
                  </div>
                  <div
                    style={{
                      color: "var(--accent-emerald)",
                      paddingLeft: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    {`{\n  "frontend": ["React", "Next.js", "TypeScript", "Tailwind"],\n  "backend": ["Python", "Django REST", "Spring Boot"],\n  "cloud": ["AWS EC2", "Docker", "PostgreSQL", "Firebase"],\n  "ai": ["PyTorch", "SHAP", "Scikit-Learn"]\n}`}
                  </div>
                </div>
              )}

              {commandOutput === "status" && (
                <div>
                  <div style={{ color: "var(--accent-cyan)" }}>
                    user@sydney:
                    <span style={{ color: "var(--accent-purple)" }}>~</span>$
                    sys.status
                  </div>
                  <div
                    style={{
                      color: "var(--accent-emerald)",
                      paddingLeft: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    ● AVAILABLE FOR OPPORTUNITIES (Sydney / Remote / Global)
                  </div>
                </div>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginTop: "10px",
                }}
              >
                <span style={{ color: "var(--accent-cyan)" }}>user@sydney</span>
                :<span style={{ color: "var(--accent-purple)" }}>~</span>$
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "14px",
                    backgroundColor: "var(--accent-cyan)",
                    animation: "statusPulse 1s infinite",
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "telemetry" && (
          <div style={{ color: "var(--text-secondary)" }}>
            <div style={{ color: "var(--text-tertiary)", marginBottom: "8px" }}>
              [SYSTEM MONITOR // KERNEL v2026.09-PROD]
            </div>
            <div>
              [00:00:01]{" "}
              <span style={{ color: "var(--accent-emerald)" }}>AUTH:</span>{" "}
              Hybrid AES-256 + RSA-2048 layer initialized
            </div>
            <div>
              [00:00:02]{" "}
              <span style={{ color: "var(--accent-cyan)" }}>API_GATEWAY:</span>{" "}
              65+ Django endpoints mapped & healthy
            </div>
            <div>
              [00:00:03]{" "}
              <span style={{ color: "var(--accent-emerald)" }}>HOSTING:</span>{" "}
              AWS EC2 + Docker container cluster OK (99.9% uptime)
            </div>
            <div>
              [00:00:04]{" "}
              <span style={{ color: "var(--accent-purple)" }}>ML_ENGINE:</span>{" "}
              Isolation Forest (200 trees) + PyTorch AE loaded
            </div>
            <div>
              [00:00:05]{" "}
              <span style={{ color: "var(--accent-cyan)" }}>
                EXPLAINABILITY:
              </span>{" "}
              SHAP TreeExplainer ready for live flows
            </div>
            <div>
              [00:00:06]{" "}
              <span style={{ color: "var(--accent-emerald)" }}>LOCATION:</span>{" "}
              Sydney, Australia [UTC+10]
            </div>
            <div style={{ marginTop: "12px", color: "var(--accent-emerald)" }}>
              &gt; ALL SYSTEMS OPERATIONAL — NO FAULTS DETECTED
            </div>
          </div>
        )}

        {activeTab === "specs" && (
          <div>
            <div style={{ color: "var(--text-tertiary)", marginBottom: "4px" }}>
              // portfolio-engineer.d.ts
            </div>
            <pre
              style={{
                margin: 0,
                color: "var(--text-secondary)",
                fontFamily: "inherit",
              }}
            >
              <span style={{ color: "var(--accent-purple)" }}>interface</span>{" "}
              <span style={{ color: "var(--accent-cyan)" }}>
                SoftwareEngineer
              </span>{" "}
              {"{\n"}
              {"  "}name:{" "}
              <span style={{ color: "#38BDF8" }}>"Abhinav Saxena"</span>;{"\n"}
              {"  "}degree:{" "}
              <span style={{ color: "#38BDF8" }}>
                "Master of Computer Science @ USyd"
              </span>
              ;{"\n"}
              {"  "}experience:{" "}
              <span style={{ color: "#F59E0B" }}>
                "Lead Full Stack Dev @ Esprit Analytique"
              </span>
              ;{"\n"}
              {"  "}apisEngineered:{" "}
              <span style={{ color: "var(--accent-cyan)" }}>65</span>;{"\n"}
              {"  "}research:{" "}
              <span style={{ color: "#38BDF8" }}>
                "Explainable AI & Deep Learning"
              </span>
              ;{"\n"}
              {"  "}isAvailable:{" "}
              <span style={{ color: "var(--accent-emerald)" }}>true</span>;
              {"\n"}
              {"}"}
            </pre>
          </div>
        )}
      </div>

      {/* Terminal Footer Status Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6px 14px",
          background: "rgba(14, 18, 26, 0.95)",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          fontSize: "0.68rem",
          color: "var(--text-tertiary)",
          fontFamily: "var(--font-mono)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "var(--accent-emerald)",
            }}
          />
          LATENCY: 18ms
        </span>
        <span>ENCODING: UTF-8</span>
        <span>STATUS: ONLINE</span>
      </div>
    </div>
  );
};
