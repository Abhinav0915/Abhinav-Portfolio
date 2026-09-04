import React, { useState } from "react";

export const Isometric3DArchitecture: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [isExploded, setIsExploded] = useState(false);

  const layers = [
    {
      level: "05",
      title: "INCIDENT ALERT & FORENSICS",
      spec: "Gated attribution payload persisted per alert",
      color: "var(--accent-vermilion)",
    },
    {
      level: "04",
      title: "SHAP EXPLAINABILITY ENGINE",
      spec: "TreeExplainer (IsoForest) & KernelExplainer (Autoencoder)",
      color: "var(--ink-primary)",
    },
    {
      level: "03",
      title: "DUAL DETECTION ENSEMBLE",
      spec: "Isolation Forest (200 trees) + PyTorch Latent Autoencoder",
      color: "var(--ink-primary)",
    },
    {
      level: "02",
      title: "STREAMING PREPROCESSING",
      spec: "RobustScaler fit on 1M benign rows • 100k chunk blocks",
      color: "var(--ink-secondary)",
    },
    {
      level: "01",
      title: "PACKET CAPTURE INGESTION",
      spec: "scapy AsyncSniffer • 77 CICFlowMeter Network Features",
      color: "var(--ink-secondary)",
    },
  ];

  return (
    <div
      style={{
        border: "1px solid var(--rule-hairline)",
        padding: "24px",
        backgroundColor: "var(--bg-secondary)",
        position: "relative",
      }}
      className="isometric-container"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          borderBottom: "1px solid var(--rule-hairline)",
          paddingBottom: "10px",
        }}
      >
        <span className="font-mono text-xs uppercase" style={{ color: "var(--accent-vermilion)", fontWeight: 600 }}>
          3D LAYERED ARCHITECTURE // GLASSBOX PIPELINE
        </span>

        <button
          type="button"
          onClick={() => setIsExploded(!isExploded)}
          className="font-mono text-xs uppercase"
          style={{
            background: isExploded ? "var(--accent-vermilion)" : "transparent",
            color: isExploded ? "#FFFFFF" : "var(--ink-primary)",
            border: "1px solid var(--rule-hairline)",
            padding: "3px 8px",
            cursor: "pointer",
          }}
        >
          {isExploded ? "COLLAPSE [−]" : "3D EXPLODE VIEW [+]"}
        </button>
      </div>

      {/* 3D Isometric Viewport */}
      <div
        style={{
          perspective: "1200px",
          display: "flex",
          flexDirection: "column",
          gap: isExploded ? "20px" : "8px",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          padding: "10px 0",
        }}
      >
        {layers.map((layer, idx) => {
          const isSelected = activeLayer === idx;
          return (
            <div
              key={layer.level}
              onClick={() => setActiveLayer(isSelected ? null : idx)}
              style={{
                border: `1px solid ${isSelected ? "var(--accent-vermilion)" : "var(--rule-hairline)"}`,
                backgroundColor: isSelected ? "var(--bg-primary)" : "var(--bg-surface)",
                padding: "12px 18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                transform: isExploded
                  ? `translateY(${idx * 4}px) translateZ(${idx * 15}px)`
                  : "none",
                transition: "all 0.25s ease",
                boxShadow: isExploded
                  ? "0 8px 16px rgba(0, 0, 0, 0.06)"
                  : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
                <span className="font-mono text-xs" style={{ color: "var(--accent-vermilion)", fontWeight: 700 }}>
                  L{layer.level}
                </span>
                <span className="font-display font-bold text-sm uppercase" style={{ color: "var(--ink-primary)" }}>
                  {layer.title}
                </span>
              </div>

              <span className="font-mono text-xs meta-hide-mobile" style={{ color: "var(--ink-secondary)" }}>
                {layer.spec}
              </span>
            </div>
          );
        })}
      </div>

      {activeLayer !== null && (
        <div
          style={{
            marginTop: "16px",
            padding: "12px 16px",
            backgroundColor: "var(--bg-primary)",
            border: "1px solid var(--accent-vermilion)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--ink-primary)",
          }}
        >
          <span style={{ color: "var(--accent-vermilion)", fontWeight: 600 }}>&gt; LAYER SPECIFICATION: </span>
          <span>{layers[activeLayer].title} — {layers[activeLayer].spec}</span>
        </div>
      )}
    </div>
  );
};

