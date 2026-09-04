import React, { useState } from "react";
import { playMechanicalClick } from "../../utils/audio";

export const InteractiveAnomalySimulator: React.FC = () => {
  const [packetRate, setPacketRate] = useState(1200);
  const [synRatio, setSynRatio] = useState(8);
  const [payloadEntropy, setPayloadEntropy] = useState(3.4);
  const [flowDuration, setFlowDuration] = useState(450);
  const [viewMode, setViewMode] = useState<"lab" | "code">("lab");

  const applyPreset = (preset: "normal" | "synflood" | "exfil" | "portscan") => {
    playMechanicalClick("tap");
    if (preset === "normal") {
      setPacketRate(1200);
      setSynRatio(8);
      setPayloadEntropy(3.4);
      setFlowDuration(450);
    } else if (preset === "synflood") {
      setPacketRate(18500);
      setSynRatio(94);
      setPayloadEntropy(1.8);
      setFlowDuration(35);
    } else if (preset === "exfil") {
      setPacketRate(3400);
      setSynRatio(12);
      setPayloadEntropy(7.6);
      setFlowDuration(18500);
    } else if (preset === "portscan") {
      setPacketRate(7800);
      setSynRatio(82);
      setPayloadEntropy(2.1);
      setFlowDuration(120);
    }
  };

  // Empirical scoring logic mirroring the Isolation Forest & PyTorch Latent Autoencoder
  const synRisk = (synRatio / 100) * 0.55;
  const rateRisk = (packetRate / 20000) * 0.35;
  const entropyRisk = (payloadEntropy > 6.5 ? 0.35 : 0.05);
  const anomalyProbability = Math.min(0.99, Math.max(0.02, synRisk + rateRisk + entropyRisk));

  const isAnomaly = anomalyProbability > 0.45;
  const isoForestScore = isAnomaly ? -(anomalyProbability * 0.5).toFixed(3) : (0.5 - anomalyProbability * 0.4).toFixed(3);
  const autoencoderMse = (0.015 + anomalyProbability * 0.38).toFixed(4);

  // Dynamic SHAP values
  const shapSyn = ((synRatio - 20) / 100 * 0.45).toFixed(3);
  const shapRate = ((packetRate - 2000) / 20000 * 0.35).toFixed(3);
  const shapEntropy = (payloadEntropy > 6.0 ? "+0.32" : "-0.08");

  return (
    <div
      style={{
        border: "1px solid var(--rule-hairline)",
        backgroundColor: "var(--bg-secondary)",
        padding: "20px",
        marginTop: "24px",
      }}
      className="anomaly-sim-box"
    >
      {/* Header bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          borderBottom: "1px solid var(--rule-hairline)",
          paddingBottom: "12px",
          marginBottom: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: isAnomaly ? "var(--accent-vermilion)" : "#10B981",
              boxShadow: isAnomaly ? "0 0 8px rgba(255, 59, 0, 0.7)" : "0 0 8px rgba(16, 185, 129, 0.6)",
            }}
          />
          <span className="font-mono text-xs uppercase" style={{ color: "var(--ink-primary)", fontWeight: 700 }}>
            GLASSBOX // LIVE INFERENCE & SHAP ATTRIBUTION LAB
          </span>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            type="button"
            onClick={() => {
              playMechanicalClick("toggle");
              setViewMode(viewMode === "lab" ? "code" : "lab");
            }}
            className="font-mono text-xs uppercase"
            style={{
              background: "none",
              border: "1px solid var(--rule-hairline)",
              padding: "3px 8px",
              color: "var(--accent-vermilion)",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {viewMode === "lab" ? "VIEW PYTHON PIPELINE [</>]" : "VIEW SIMULATOR [LAB]"}
          </button>
        </div>
      </div>

      {viewMode === "code" ? (
        <div
          className="font-mono"
          style={{
            fontSize: "0.78rem",
            backgroundColor: "var(--bg-surface)",
            padding: "16px",
            border: "1px solid var(--rule-hairline)",
            color: "var(--ink-primary)",
            lineHeight: 1.6,
            overflowX: "auto",
          }}
        >
          <div style={{ color: "var(--ink-tertiary)", marginBottom: "8px" }}>
            # GlassBox: Thread-Safe Singleton Registry with Gated SHAP Explainer
          </div>
          <div><span style={{ color: "var(--accent-vermilion)" }}>class</span> <span style={{ fontWeight: 700 }}>DualModelRegistry</span>:</div>
          <div style={{ paddingLeft: "16px" }}>def <span style={{ color: "var(--ink-primary)", fontWeight: 600 }}>predict_flow</span>(self, flow_vector):</div>
          <div style={{ paddingLeft: "32px", color: "var(--ink-secondary)" }}># 1. Isolation Forest Decision Path</div>
          <div style={{ paddingLeft: "32px" }}>iso_score = self.iso_forest.decision_function(flow_vector)[0]</div>
          <div style={{ paddingLeft: "32px", color: "var(--ink-secondary)" }}># 2. PyTorch Latent Autoencoder Reconstruction MSE</div>
          <div style={{ paddingLeft: "32px" }}>latent = self.encoder(flow_vector)</div>
          <div style={{ paddingLeft: "32px" }}>recon = self.decoder(latent)</div>
          <div style={{ paddingLeft: "32px" }}>mse_loss = torch.mean((flow_vector - recon) ** 2).item()</div>
          <div style={{ paddingLeft: "32px", color: "var(--ink-secondary)" }}># 3. Conditional SHAP TreeExplainer Gating</div>
          <div style={{ paddingLeft: "32px" }}>if iso_score &lt; 0.0 or mse_loss &gt; self.threshold:</div>
          <div style={{ paddingLeft: "48px" }}>shap_values = self.tree_explainer.shap_values(flow_vector)</div>
          <div style={{ paddingLeft: "48px" }}>return AlertPayload(is_anomaly=True, attribution=shap_values)</div>
          <div style={{ paddingLeft: "32px" }}>return AlertPayload(is_anomaly=False)</div>
        </div>
      ) : (
        <div>
          {/* Preset Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginBottom: "18px" }}>
            <span className="font-mono text-xs" style={{ color: "var(--ink-tertiary)", marginRight: "4px" }}>
              TEST PRESETS:
            </span>
            <button
              type="button"
              onClick={() => applyPreset("normal")}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                padding: "2px 6px",
                background: synRatio < 20 ? "var(--accent-vermilion)" : "var(--bg-surface)",
                color: synRatio < 20 ? "#FFFFFF" : "var(--ink-primary)",
                border: "1px solid var(--rule-hairline)",
                cursor: "pointer",
              }}
            >
              [NORMAL_TRAFFIC]
            </button>
            <button
              type="button"
              onClick={() => applyPreset("synflood")}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                padding: "2px 6px",
                background: synRatio > 90 ? "var(--accent-vermilion)" : "var(--bg-surface)",
                color: synRatio > 90 ? "#FFFFFF" : "var(--ink-primary)",
                border: "1px solid var(--rule-hairline)",
                cursor: "pointer",
              }}
            >
              [SYN_FLOOD_ATTACK]
            </button>
            <button
              type="button"
              onClick={() => applyPreset("exfil")}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                padding: "2px 6px",
                background: payloadEntropy > 7 ? "var(--accent-vermilion)" : "var(--bg-surface)",
                color: payloadEntropy > 7 ? "#FFFFFF" : "var(--ink-primary)",
                border: "1px solid var(--rule-hairline)",
                cursor: "pointer",
              }}
            >
              [DATA_EXFILTRATION]
            </button>
            <button
              type="button"
              onClick={() => applyPreset("portscan")}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                padding: "2px 6px",
                background: (packetRate > 7000 && synRatio > 70 && synRatio < 90) ? "var(--accent-vermilion)" : "var(--bg-surface)",
                color: (packetRate > 7000 && synRatio > 70 && synRatio < 90) ? "#FFFFFF" : "var(--ink-primary)",
                border: "1px solid var(--rule-hairline)",
                cursor: "pointer",
              }}
            >
              [PORT_SCAN_BURST]
            </button>
          </div>

          {/* Interactive Sliders Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "20px",
            }}
            className="sim-sliders-grid"
          >
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span className="font-mono text-xs" style={{ color: "var(--ink-secondary)" }}>
                  PACKET_ARRIVAL_RATE
                </span>
                <span className="font-mono text-xs" style={{ color: "var(--ink-primary)", fontWeight: 600 }}>
                  {packetRate.toLocaleString()} pkts/s
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="20000"
                step="200"
                value={packetRate}
                onChange={(e) => setPacketRate(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--accent-vermilion)" }}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span className="font-mono text-xs" style={{ color: "var(--ink-secondary)" }}>
                  SYN_FLAG_RATIO
                </span>
                <span className="font-mono text-xs" style={{ color: "var(--ink-primary)", fontWeight: 600 }}>
                  {synRatio}%
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={synRatio}
                onChange={(e) => setSynRatio(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--accent-vermilion)" }}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span className="font-mono text-xs" style={{ color: "var(--ink-secondary)" }}>
                  PAYLOAD_ENTROPY
                </span>
                <span className="font-mono text-xs" style={{ color: "var(--ink-primary)", fontWeight: 600 }}>
                  {payloadEntropy} bits
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.1"
                value={payloadEntropy}
                onChange={(e) => setPayloadEntropy(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--accent-vermilion)" }}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span className="font-mono text-xs" style={{ color: "var(--ink-secondary)" }}>
                  FLOW_DURATION
                </span>
                <span className="font-mono text-xs" style={{ color: "var(--ink-primary)", fontWeight: 600 }}>
                  {flowDuration} ms
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="25000"
                step="50"
                value={flowDuration}
                onChange={(e) => setFlowDuration(Number(e.target.value))}
                style={{ width: "100%", accentColor: "var(--accent-vermilion)" }}
              />
            </div>
          </div>

          {/* Model Evaluation & SHAP Attribution Output */}
          <div
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--rule-hairline)",
              padding: "16px",
            }}
          >
            {/* Status & Scores */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
                borderBottom: "1px solid var(--rule-hairline)",
                paddingBottom: "12px",
                marginBottom: "12px",
              }}
            >
              <div>
                <span className="font-mono text-xs text-secondary" style={{ color: "var(--ink-tertiary)" }}>
                  ENSEMBLE_VERDICT:
                </span>
                <div
                  className="font-mono text-sm uppercase"
                  style={{
                    color: isAnomaly ? "var(--accent-vermilion)" : "#10B981",
                    fontWeight: 700,
                    marginTop: "2px",
                  }}
                >
                  {isAnomaly ? "ALERT // ANOMALY INTRUSION DETECTED" : "NOMINAL // BENIGN NETWORK FLOW"}
                </div>
              </div>

              <div className="font-mono text-xs" style={{ display: "flex", gap: "16px" }}>
                <div>
                  <span style={{ color: "var(--ink-tertiary)" }}>ISOFOREST_SCORE:</span>{" "}
                  <span style={{ color: "var(--ink-primary)", fontWeight: 600 }}>{isoForestScore}</span>
                </div>
                <div>
                  <span style={{ color: "var(--ink-tertiary)" }}>AUTOENCODER_MSE:</span>{" "}
                  <span style={{ color: "var(--ink-primary)", fontWeight: 600 }}>{autoencoderMse}</span>
                </div>
              </div>
            </div>

            {/* SHAP Feature Contribution Bars */}
            <div>
              <div className="font-mono text-xs uppercase" style={{ color: "var(--ink-tertiary)", marginBottom: "8px" }}>
                SHAP EXPLAINABILITY DECOMPOSITION // TOP ATTRIBUTIONS:
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
                    <span style={{ color: "var(--ink-secondary)" }}>syn_flag_ratio</span>
                    <span style={{ color: Number(shapSyn) > 0 ? "var(--accent-vermilion)" : "#10B981" }}>
                      {Number(shapSyn) > 0 ? `+${shapSyn}` : shapSyn}
                    </span>
                  </div>
                  <div style={{ height: "4px", backgroundColor: "var(--bg-secondary)", marginTop: "2px" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${Math.min(100, Math.abs(Number(shapSyn)) * 200)}%`,
                        backgroundColor: Number(shapSyn) > 0 ? "var(--accent-vermilion)" : "#10B981",
                        transition: "width 0.2s ease",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
                    <span style={{ color: "var(--ink-secondary)" }}>packet_arrival_rate</span>
                    <span style={{ color: Number(shapRate) > 0 ? "var(--accent-vermilion)" : "#10B981" }}>
                      {Number(shapRate) > 0 ? `+${shapRate}` : shapRate}
                    </span>
                  </div>
                  <div style={{ height: "4px", backgroundColor: "var(--bg-secondary)", marginTop: "2px" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${Math.min(100, Math.abs(Number(shapRate)) * 200)}%`,
                        backgroundColor: Number(shapRate) > 0 ? "var(--accent-vermilion)" : "#10B981",
                        transition: "width 0.2s ease",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
                    <span style={{ color: "var(--ink-secondary)" }}>payload_entropy</span>
                    <span style={{ color: shapEntropy.startsWith("+") ? "var(--accent-vermilion)" : "#10B981" }}>
                      {shapEntropy}
                    </span>
                  </div>
                  <div style={{ height: "4px", backgroundColor: "var(--bg-secondary)", marginTop: "2px" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${shapEntropy.startsWith("+") ? 64 : 16}%`,
                        backgroundColor: shapEntropy.startsWith("+") ? "var(--accent-vermilion)" : "#10B981",
                        transition: "width 0.2s ease",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          .sim-sliders-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
