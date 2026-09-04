import React, { useEffect, useRef, useState } from "react";
import { playMechanicalClick } from "../../utils/audio";

type GeometryMode = "hypercube" | "icosahedron" | "torus";

export const Interactive3DObject: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<GeometryMode>("hypercube");
  const [speed, setSpeed] = useState<number>(1.0);
  const [isHovered, setIsHovered] = useState(false);
  const speedRef = useRef(speed);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

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

    // Rotation angles
    let angleX = 0.4;
    let angleY = 0.6;
    let angleZ = 0.2;
    let angleW = 0.0; // 4th dimension for hypercube

    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let velX = 0.006;
    let velY = 0.009;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      playMechanicalClick("tap");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const dx = e.clientX - prevMouseX;
        const dy = e.clientY - prevMouseY;
        angleY += dx * 0.01;
        angleX += dy * 0.01;
        velX = dy * 0.003;
        velY = dx * 0.003;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const canvasEl = canvas;
    canvasEl.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Generate Vertices and Edges based on mode
    const getGeometry = () => {
      if (mode === "hypercube") {
        // 4D Tesseract vertices: 16 vertices (x, y, z, w) where each is ±1
        const vertices4D: number[][] = [];
        for (let i = 0; i < 16; i++) {
          vertices4D.push([
            (i & 1 ? 1 : -1) * 75,
            (i & 2 ? 1 : -1) * 75,
            (i & 4 ? 1 : -1) * 75,
            (i & 8 ? 1 : -1) * 75,
          ]);
        }
        // 32 edges connecting vertices differing by 1 bit
        const edges: [number, number][] = [];
        for (let i = 0; i < 16; i++) {
          for (let bit = 1; bit < 16; bit <<= 1) {
            if ((i & bit) === 0) {
              edges.push([i, i | bit]);
            }
          }
        }
        return { type: "4d" as const, vertices4D, edges };
      } else if (mode === "icosahedron") {
        // 3D Icosahedron
        const phi = (1 + Math.sqrt(5)) / 2;
        const scale = 58;
        const rawVertices = [
          [-1, phi, 0],
          [1, phi, 0],
          [-1, -phi, 0],
          [1, -phi, 0],
          [0, -1, phi],
          [0, 1, phi],
          [0, -1, -phi],
          [0, 1, -phi],
          [phi, 0, -1],
          [phi, 0, 1],
          [-phi, 0, -1],
          [-phi, 0, 1],
        ].map(([x, y, z]) => [x * scale, y * scale, z * scale]);

        const edges: [number, number][] = [
          [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
          [1, 5], [5, 11], [11, 10], [10, 7], [7, 1],
          [3, 9], [3, 4], [3, 2], [3, 6], [3, 8],
          [4, 9], [9, 8], [8, 6], [6, 2], [2, 4],
          [4, 5], [5, 9], [9, 1], [1, 8], [8, 7],
          [7, 6], [6, 10], [10, 2], [2, 11], [11, 4],
        ];
        return { type: "3d" as const, vertices3D: rawVertices, edges };
      } else {
        // 3D Torus Knot (p=2, q=3)
        const numPoints = 84;
        const p = 2;
        const q = 3;
        const r1 = 65;
        const r2 = 28;
        const vertices3D: number[][] = [];
        const edges: [number, number][] = [];

        for (let i = 0; i < numPoints; i++) {
          const t = (i / numPoints) * Math.PI * 2;
          const r = r1 + r2 * Math.cos(q * t);
          const x = r * Math.cos(p * t);
          const y = r * Math.sin(p * t);
          const z = -r2 * Math.sin(q * t);
          vertices3D.push([x, y, z]);
          edges.push([i, (i + 1) % numPoints]);
        }
        return { type: "3d" as const, vertices3D, edges };
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const currentSpeed = speedRef.current;
      if (!isDragging) {
        angleX += velX * currentSpeed;
        angleY += velY * currentSpeed;
        angleZ += 0.002 * currentSpeed;
        angleW += 0.012 * currentSpeed;
      }

      const geom = getGeometry();
      const centerX = width / 2;
      const centerY = height / 2;

      // Project vertices to 2D
      const projected: { x: number; y: number; z: number }[] = [];

      if (geom.type === "4d") {
        for (const [x, y, z, w] of geom.vertices4D) {
          // 4D Rotation in XW and ZW planes
          const cosW = Math.cos(angleW);
          const sinW = Math.sin(angleW);
          const rotX = x * cosW - w * sinW;
          const rotW = x * sinW + w * cosW;

          // Stereographic 4D to 3D projection
          const distance4D = 180;
          const wProj = distance4D / (distance4D - rotW * 0.7);
          const p3x = rotX * wProj;
          const p3y = y * wProj;
          const p3z = z * wProj;

          // Standard 3D Rotation (Y and X axes)
          const cosY = Math.cos(angleY);
          const sinY = Math.sin(angleY);
          const x1 = p3x * cosY + p3z * sinY;
          const z1 = -p3x * sinY + p3z * cosY;

          const cosX = Math.cos(angleX);
          const sinX = Math.sin(angleX);
          const y2 = p3y * cosX - z1 * sinX;
          const z2 = p3y * sinX + z1 * cosX;

          // 3D to 2D Perspective Projection
          const fov = 320;
          const scale = fov / (fov + z2);
          projected.push({
            x: centerX + x1 * scale,
            y: centerY + y2 * scale,
            z: z2,
          });
        }
      } else {
        for (const [x, y, z] of geom.vertices3D) {
          // Standard 3D Rotation
          const cosY = Math.cos(angleY);
          const sinY = Math.sin(angleY);
          const x1 = x * cosY + z * sinY;
          const z1 = -x * sinY + z * cosY;

          const cosX = Math.cos(angleX);
          const sinX = Math.sin(angleX);
          const y2 = y * cosX - z1 * sinX;
          const z2 = y * sinX + z1 * cosX;

          const cosZ = Math.cos(angleZ);
          const sinZ = Math.sin(angleZ);
          const x3 = x1 * cosZ - y2 * sinZ;
          const y3 = x1 * sinZ + y2 * cosZ;

          const fov = 300;
          const scale = fov / (fov + z2);
          projected.push({
            x: centerX + x3 * scale,
            y: centerY + y3 * scale,
            z: z2,
          });
        }
      }

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const edgeColor = isDark ? "rgba(245, 244, 240, 0.28)" : "rgba(17, 17, 17, 0.25)";
      const vermilionColor = "#FF3B00";

      // Draw subtle corner crosshairs on canvas
      ctx.font = "10px JetBrains Mono, monospace";
      ctx.fillStyle = isDark ? "rgba(245, 244, 240, 0.2)" : "rgba(17, 17, 17, 0.2)";
      ctx.textAlign = "left";
      ctx.fillText("+", 8, 14);
      ctx.fillText("+", 8, height - 8);
      ctx.textAlign = "right";
      ctx.fillText("+", width - 8, 14);
      ctx.fillText("+", width - 8, height - 8);

      // Draw live telemetry readouts
      ctx.fillStyle = isDark ? "rgba(245, 244, 240, 0.45)" : "rgba(17, 17, 17, 0.45)";
      ctx.textAlign = "left";
      ctx.fillText(`ROT // θx:${angleX.toFixed(2)} θy:${angleY.toFixed(2)}`, 22, height - 12);
      ctx.textAlign = "right";
      ctx.fillText(`60FPS // ${mode === "hypercube" ? "4D→3D" : "3D_EULER"}`, width - 22, height - 12);
      ctx.textAlign = "left";

      // Draw wireframe edges
      ctx.lineWidth = 1;
      for (const [i, j] of geom.edges) {
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1 || !p2) continue;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = edgeColor;
        ctx.stroke();
      }

      // Draw vertex nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        if (i < 4) {
          ctx.fillStyle = vermilionColor;
        } else {
          ctx.fillStyle = isDark ? "rgba(245, 244, 240, 0.6)" : "rgba(17, 17, 17, 0.5)";
        }
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvasEl.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [mode]);

  return (
    <div
      className={`hairline-box ${className}`}
      style={{
        position: "relative",
        backgroundColor: "var(--bg-secondary)",
        padding: "16px",
        overflow: "hidden",
        cursor: "grab",
        userSelect: "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Header Annotation */}
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
        <span className="font-mono text-xs uppercase" style={{ color: "var(--accent-vermilion)", fontWeight: 600 }}>
          3D GEOMETRY // {mode.toUpperCase()}
        </span>
        <span className="font-mono text-xs text-secondary" style={{ color: "var(--ink-tertiary)" }}>
          {isHovered ? "DRAG TO ROTATE ↺" : "INTERACTIVE 3D"}
        </span>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "230px",
          display: "block",
        }}
      />

      {/* Control Bar: Geometry Mode & Speed */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "8px",
          borderTop: "1px solid var(--rule-hairline)",
          paddingTop: "8px",
        }}
      >
        {/* Geometry Mode Selectors */}
        <div style={{ display: "flex", gap: "6px" }}>
          {(["hypercube", "icosahedron", "torus"] as GeometryMode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => {
                playMechanicalClick("tap");
                setMode(m);
              }}
              className="font-mono text-xs uppercase"
              style={{
                background: mode === m ? "var(--ink-primary)" : "transparent",
                color: mode === m ? "var(--bg-primary)" : "var(--ink-secondary)",
                border: "1px solid var(--rule-hairline)",
                padding: "3px 7px",
                cursor: "pointer",
                borderRadius: "0px",
                fontWeight: mode === m ? 600 : 400,
              }}
            >
              {m === "hypercube" ? "4D Tesseract" : m === "icosahedron" ? "Geodesic" : "Torus Knot"}
            </button>
          ))}
        </div>

        {/* Speed Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <span className="font-mono text-xs" style={{ color: "var(--ink-tertiary)", fontSize: "0.68rem" }}>
            VEL:
          </span>
          {[0.5, 1.0, 2.0, 0].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {
                playMechanicalClick("tap");
                setSpeed(s);
              }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                padding: "2px 5px",
                background: speed === s ? "var(--accent-vermilion)" : "transparent",
                color: speed === s ? "#FFFFFF" : "var(--ink-tertiary)",
                border: "1px solid var(--rule-hairline)",
                cursor: "pointer",
              }}
            >
              {s === 0 ? "PAUSE" : `${s}X`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
