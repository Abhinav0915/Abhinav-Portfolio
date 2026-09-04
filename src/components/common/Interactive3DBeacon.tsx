import React, { useEffect, useRef, useState } from "react";
import { playMechanicalClick } from "../../utils/audio";

export const Interactive3DBeacon: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const boostRef = useRef(1.0);

  const triggerBoost = () => {
    boostRef.current = 3.5;
    playMechanicalClick("confirm");
  };

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

    let angle1 = 0;
    let angle2 = 0;
    let angle3 = 0;
    let pulseRadius = 0;

    let dragging = false;
    let prevX = 0;
    let prevY = 0;
    let dragVelocity = 0;

    const onMouseDown = (e: MouseEvent) => {
      dragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
      playMechanicalClick("tap");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (dragging) {
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        angle1 += dx * 0.02;
        angle2 += dy * 0.02;
        dragVelocity = Math.hypot(dx, dy) * 0.005;
        prevX = e.clientX;
        prevY = e.clientY;
      }
    };

    const onMouseUp = () => {
      dragging = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Inertia decay for boost
      if (boostRef.current > 1.0) {
        boostRef.current = Math.max(1.0, boostRef.current - 0.04);
      }

      const speed = boostRef.current + dragVelocity;
      dragVelocity *= 0.94;

      if (!dragging) {
        angle1 += 0.015 * speed;
        angle2 += 0.022 * speed;
        angle3 += 0.018 * speed;
      }

      pulseRadius = (pulseRadius + 0.8 * speed) % 55;

      const centerX = width / 2;
      const centerY = height / 2;
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const ringColor = isDark ? "rgba(245, 244, 240, 0.28)" : "rgba(17, 17, 17, 0.25)";
      const vermilionColor = "#FF3B00";

      // Function to draw 3D rotated ellipse
      const draw3DRing = (rX: number, rY: number, rotAngle: number, strokeStyle: string, lineWidth = 1) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotAngle);
        ctx.beginPath();
        ctx.ellipse(0, 0, rX, rY * Math.abs(Math.cos(rotAngle * 1.5)), 0, 0, Math.PI * 2);
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
        ctx.restore();
      };

      // Outer Gimbal Ring (Radius: 72)
      draw3DRing(72, 72, angle1, ringColor, 1);

      // Middle Pitch Gimbal Ring (Radius: 56)
      draw3DRing(56, 56, angle2, ringColor, 1);

      // Inner Roll Gimbal Ring (Radius: 42)
      draw3DRing(42, 42, angle3, isDark ? "rgba(245, 244, 240, 0.45)" : "rgba(17, 17, 17, 0.4)", 1.2);

      // Pulsing Radar Ring from Core
      ctx.beginPath();
      ctx.arc(centerX, centerY, pulseRadius + 6, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 59, 0, ${(1 - pulseRadius / 55) * 0.6})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Core Quantum / Cryptographic Node
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fillStyle = vermilionColor;
      ctx.fill();

      // Satellite Nodes on outer ring
      const satX = centerX + Math.cos(angle1) * 72;
      const satY = centerY + Math.sin(angle1) * 72 * Math.abs(Math.cos(angle1 * 1.5));
      ctx.beginPath();
      ctx.arc(satX, satY, 3, 0, Math.PI * 2);
      ctx.fillStyle = vermilionColor;
      ctx.fill();

      // Satellite Nodes on middle ring
      const sat2X = centerX + Math.cos(angle2 + Math.PI) * 56;
      const sat2Y = centerY + Math.sin(angle2 + Math.PI) * 56 * Math.abs(Math.cos(angle2 * 1.5));
      ctx.beginPath();
      ctx.arc(sat2X, sat2Y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? "#FFFFFF" : "#111111";
      ctx.fill();

      // Canvas Annotations
      ctx.font = "9px JetBrains Mono, monospace";
      ctx.fillStyle = isDark ? "rgba(245, 244, 240, 0.35)" : "rgba(17, 17, 17, 0.35)";
      ctx.textAlign = "left";
      ctx.fillText("+", 10, 14);
      ctx.fillText("+", 10, height - 10);
      ctx.textAlign = "right";
      ctx.fillText("+", width - 10, 14);
      ctx.fillText("+", width - 10, height - 10);
      ctx.textAlign = "center";
      ctx.fillText(`TRANSMISSION_BEACON // 3D_GYROSCOPE`, centerX, height - 10);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div
      className={`hairline-box ${className}`}
      style={{
        backgroundColor: "var(--bg-secondary)",
        border: "1px solid var(--rule-hairline)",
        padding: "16px",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid var(--rule-hairline)",
          paddingBottom: "8px",
          marginBottom: "10px",
        }}
      >
        <span className="font-mono text-xs uppercase" style={{ color: "var(--accent-vermilion)", fontWeight: 600 }}>
          3D QUANTUM BEACON // LIVE
        </span>
        <button
          type="button"
          onClick={triggerBoost}
          className="font-mono text-xs"
          style={{
            background: "none",
            border: "1px solid var(--rule-hairline)",
            color: "var(--accent-vermilion)",
            padding: "2px 6px",
            cursor: "pointer",
          }}
        >
          [IMPULSE_BOOST ⚡]
        </button>
      </div>

      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "190px",
          display: "block",
          cursor: "grab",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "8px",
          borderTop: "1px solid var(--rule-hairline)",
          paddingTop: "6px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.68rem",
          color: "var(--ink-tertiary)",
        }}
      >
        <span>STATUS: ACTIVE FREQUENCY</span>
        <span>{isHovered ? "INTERACTIVE GYRO ↺" : "STANDBY"}</span>
      </div>
    </div>
  );
};
