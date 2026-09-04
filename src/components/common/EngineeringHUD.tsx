import React, { useState, useEffect } from "react";
import {
  isSoundEnabled,
  setSoundEnabled,
  playMechanicalClick,
} from "../../utils/audio";

type EngineeringHUDProps = {
  onOpenCommandPalette: () => void;
};

export const EngineeringHUD: React.FC<EngineeringHUDProps> = ({
  onOpenCommandPalette,
}) => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [latency, setLatency] = useState(14);
  const [soundOn, setSoundOn] = useState(() => isSoundEnabled());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const percent = Math.min(
          100,
          Math.max(0, Math.round((scrollTop / docHeight) * 100)),
        );
        setScrollPercent(percent);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Subtle realistic latency jitter
    const latencyInterval = setInterval(() => {
      setLatency(12 + Math.floor(Math.random() * 6));
    }, 6000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(latencyInterval);
    };
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) {
      setTimeout(() => playMechanicalClick("confirm"), 50);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        height: "32px",
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--rule-hairline)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        color: "var(--ink-secondary)",
        userSelect: "none",
      }}
      className="engineering-hud"
    >
      {/* Left Telemetry Cluster */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#10B981",
              boxShadow: "0 0 6px rgba(16, 185, 129, 0.6)",
              display: "inline-block",
            }}
          />
          <span style={{ color: "var(--ink-primary)", fontWeight: 600 }}>
            SYS.ONLINE
          </span>
        </div>

        <span
          className="hud-metric-hide"
          style={{ color: "var(--rule-hairline)" }}
        >
          |
        </span>

        <div
          className="hud-metric-hide"
          style={{ display: "flex", alignItems: "center", gap: "4px" }}
        >
          <span style={{ color: "var(--ink-tertiary)" }}>PING:</span>
          <span style={{ color: "var(--accent-vermilion)", fontWeight: 600 }}>
            {latency}ms
          </span>
          <span style={{ color: "var(--ink-tertiary)" }}>[SYD-01]</span>
        </div>

        <span
          className="hud-metric-hide"
          style={{ color: "var(--rule-hairline)" }}
        >
          |
        </span>

        <div
          className="hud-metric-hide"
          style={{ color: "var(--ink-tertiary)" }}
        >
          LOC:{" "}
          <span style={{ color: "var(--ink-secondary)" }}>
            -33.8688° S, 151.2093° E
          </span>
        </div>
      </div>

      {/* Center Scroll Progress */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "var(--rule-hairline)",
            position: "relative",
            overflow: "hidden",
          }}
          className="hud-scroll-bar"
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: `${scrollPercent}%`,
              backgroundColor: "var(--accent-vermilion)",
              transition: "width 0.1s linear",
            }}
          />
        </div>
        <span
          style={{
            minWidth: "32px",
            textAlign: "right",
            color: "var(--ink-primary)",
            fontWeight: 600,
          }}
        >
          {scrollPercent}%
        </span>
      </div>

      {/* Right Action & Control Cluster */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span
          className="hud-metric-hide"
          style={{ color: "var(--ink-tertiary)" }}
        >
          BRANCH:{" "}
          <span style={{ color: "var(--ink-primary)" }}>main@7f2e4a</span>
        </span>

        <button
          type="button"
          onClick={toggleSound}
          title={
            soundOn
              ? "Mute mechanical sound effects"
              : "Enable tactile sound effects"
          }
          style={{
            background: "none",
            border: "1px solid var(--rule-hairline)",
            color: soundOn ? "var(--accent-vermilion)" : "var(--ink-tertiary)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            padding: "2px 6px",
            cursor: "pointer",
            fontWeight: soundOn ? 700 : 400,
          }}
        >
          AUDIO: {soundOn ? "ON" : "OFF"}
        </button>

        <button
          type="button"
          onClick={() => {
            playMechanicalClick("tap");
            onOpenCommandPalette();
          }}
          style={{
            background: "var(--accent-vermilion-subtle)",
            border: "1px solid var(--accent-vermilion)",
            color: "var(--accent-vermilion)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            padding: "2px 8px",
            cursor: "pointer",
            fontWeight: 700,
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span>⌘K</span>
          <span className="hud-cmd-label">COMMANDS</span>
        </button>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .hud-metric-hide { display: none !important; }
          .hud-cmd-label { display: none !important; }
        }
      `}</style>
    </div>
  );
};
