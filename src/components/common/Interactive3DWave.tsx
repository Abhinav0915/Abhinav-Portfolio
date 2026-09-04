import React, { useEffect, useRef, useState } from "react";
import { playMechanicalClick } from "../../utils/audio";

export const Interactive3DWave: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [waveMode, setWaveMode] = useState<"sine" | "pulse" | "topography">(
    "sine",
  );
  const [isHovered, setIsHovered] = useState(false);
  const waveModeRef = useRef(waveMode);

  useEffect(() => {
    waveModeRef.current = waveMode;
  }, [waveMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    let time = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", onMouseMove);

    // 3D Terrain Grid Configuration
    const cols = 28;
    const rows = 16;
    const spacingX = 26;
    const spacingZ = 22;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.025;
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      const edgeColor = isDark
        ? "rgba(245, 244, 240, 0.2)"
        : "rgba(17, 17, 17, 0.18)";
      const vermilionColor = "#FF3B00";

      const currentMode = waveModeRef.current;
      const originX = width / 2;
      const originY = height * 0.42;

      // 3D Perspective Projection matrix
      // Camera angles
      const pitch = 0.58; // tilt looking down
      const yaw = ((mouseX - width / 2) / width) * 0.35; // gentle mouse look

      const cosPitch = Math.cos(pitch);
      const sinPitch = Math.sin(pitch);
      const cosYaw = Math.cos(yaw);
      const sinYaw = Math.sin(yaw);

      // Store projected 2D coordinates
      const gridPoints: { x: number; y: number; elevation: number }[][] = [];

      for (let r = 0; r < rows; r++) {
        const rowPoints: { x: number; y: number; elevation: number }[] = [];
        for (let c = 0; c < cols; c++) {
          const worldX = (c - cols / 2) * spacingX;
          const worldZ = (r - rows / 2) * spacingZ;

          // Compute mathematical elevation based on mode
          let elevation: number;
          const distFromCenter = Math.sqrt(worldX * worldX + worldZ * worldZ);

          if (currentMode === "sine") {
            elevation =
              Math.sin(worldX * 0.04 + time * 1.5) * 16 +
              Math.cos(worldZ * 0.05 + time) * 14;
          } else if (currentMode === "pulse") {
            elevation =
              Math.sin(distFromCenter * 0.06 - time * 2.2) *
              22 *
              Math.exp(-distFromCenter * 0.003);
          } else {
            // Topography / Fourier ripple
            elevation =
              Math.sin(worldX * 0.03 + time) * 12 +
              Math.sin(worldZ * 0.04 - time * 0.8) * 12 +
              Math.cos((worldX + worldZ) * 0.02 + time * 1.2) * 10;
          }

          // Mouse interactive ripple
          const mouseDist = Math.hypot(
            worldX - (mouseX - originX) * 0.8,
            worldZ - (mouseY - originY) * 0.8,
          );
          if (mouseDist < 120) {
            elevation += Math.cos((mouseDist / 120) * Math.PI) * 18;
          }

          // 3D rotation: Yaw (around Y) then Pitch (around X)
          const rotX = worldX * cosYaw - worldZ * sinYaw;
          const rotZ = worldX * sinYaw + worldZ * cosYaw;

          const projY = -elevation * cosPitch - rotZ * sinPitch;
          const depth = -elevation * sinPitch + rotZ * cosPitch + 450;

          const fov = 380;
          const scale = fov / (fov + depth * 0.7);

          const screenX = originX + rotX * scale;
          const screenY = originY + projY * scale;

          rowPoints.push({ x: screenX, y: screenY, elevation });
        }
        gridPoints.push(rowPoints);
      }

      // Draw 3D Grid Lines along rows
      ctx.lineWidth = 1;
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const pt = gridPoints[r][c];
          if (c === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = edgeColor;
        ctx.stroke();
      }

      // Draw 3D Grid Lines along columns
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const pt = gridPoints[r][c];
          if (r === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = edgeColor;
        ctx.stroke();
      }

      // Highlight peak elevation nodes with Vermilion points
      for (let r = 0; r < rows; r += 2) {
        for (let c = 0; c < cols; c += 2) {
          const pt = gridPoints[r][c];
          if (pt.elevation > 12) {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = vermilionColor;
            ctx.fill();
          }
        }
      }

      // Draw telemetry overlay on canvas
      ctx.font = "9px JetBrains Mono, monospace";
      ctx.fillStyle = isDark
        ? "rgba(245, 244, 240, 0.35)"
        : "rgba(17, 17, 17, 0.35)";
      ctx.textAlign = "left";
      ctx.fillText(
        `3D_TERRAIN // ELEVATION_MATRIX // ${cols}x${rows} MESH`,
        12,
        height - 12,
      );
      ctx.textAlign = "right";
      ctx.fillText(
        `PITCH: ${pitch.toFixed(2)} rad • YAW: ${yaw.toFixed(2)} rad`,
        width - 12,
        height - 12,
      );
      ctx.textAlign = "left";

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      className={`hairline-box ${className}`}
      style={{
        position: "relative",
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--rule-hairline)",
        padding: "16px",
        overflow: "hidden",
        marginTop: "32px",
        userSelect: "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
          borderBottom: "1px solid var(--rule-hairline)",
          paddingBottom: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--accent-vermilion)",
              display: "inline-block",
            }}
          />
          <span
            className="font-mono text-xs uppercase"
            style={{ color: "var(--accent-vermilion)", fontWeight: 600 }}
          >
            3D DYNAMIC WAVEFORM // VECTOR SURFACE ELEVATION
          </span>
        </div>

        <div style={{ display: "flex", gap: "4px" }}>
          {(["sine", "pulse", "topography"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => {
                playMechanicalClick("tap");
                setWaveMode(mode);
              }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                padding: "2px 7px",
                background:
                  waveMode === mode ? "var(--accent-vermilion)" : "transparent",
                color: waveMode === mode ? "#FFFFFF" : "var(--ink-secondary)",
                border: "1px solid var(--rule-hairline)",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {mode === "sine"
                ? "SINE_HARMONIC"
                : mode === "pulse"
                  ? "RADIAL_PULSE"
                  : "FOURIER_MESH"}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Wave Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "170px",
          display: "block",
          cursor: "crosshair",
        }}
      />

      {/* Footer Annotation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "6px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.68rem",
          color: "var(--ink-tertiary)",
        }}
      >
        <span>MOVE CURSOR ACROSS GRID TO DISTORT 3D MESH</span>
        <span>{isHovered ? "INTERACTIVE CURVATURE ACTIVE ↺" : "STANDBY"}</span>
      </div>
    </div>
  );
};
