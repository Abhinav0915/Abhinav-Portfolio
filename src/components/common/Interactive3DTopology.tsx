import React, { useEffect, useRef, useState } from "react";
import { playMechanicalClick } from "../../utils/audio";

type TopologyNode = {
  id: string;
  name: string;
  category: string;
  lat: number;
  lon: number;
  spec: string;
  metric: string;
};

const NODES: TopologyNode[] = [
  {
    id: "syd",
    name: "SYDNEY_GATEWAY",
    category: "USYD / CORE",
    lat: -0.58,
    lon: 2.63,
    spec: "Master of Computer Science (Adv. Entry)",
    metric: "14ms latency",
  },
  {
    id: "drf",
    name: "DJANGO_REST_CLUSTER",
    category: "BACKEND",
    lat: 0.45,
    lon: 0.8,
    spec: "65+ Production RESTful APIs with Multithreading",
    metric: "30% latency reduction",
  },
  {
    id: "crypto",
    name: "AES_RSA_ENCLAVE",
    category: "SECURITY",
    lat: -0.3,
    lon: -1.2,
    spec: "Hybrid AES-256-GCM + RSA-2048 Envelope Ciphers",
    metric: "100+ secure tx",
  },
  {
    id: "ml",
    name: "GLASSBOX_ML_CORE",
    category: "AI / ML",
    lat: 0.75,
    lon: -2.1,
    spec: "Dual Isolation Forest + PyTorch Autoencoder + SHAP",
    metric: "99.2% accuracy",
  },
  {
    id: "aws",
    name: "AWS_EC2_DOCKER",
    category: "CLOUD INFRA",
    lat: 0.2,
    lon: 2.1,
    spec: "Containerized deployment with continuous monitoring",
    metric: "99.9% uptime",
  },
  {
    id: "db",
    name: "POSTGRESQL_LAYER",
    category: "DATA STORE",
    lat: -0.7,
    lon: -0.4,
    spec: "High-integrity relational schema & query optimization",
    metric: "Zero data loss",
  },
  {
    id: "ast",
    name: "LOCALEORA_AST",
    category: "SYSTEM TOOLS",
    lat: 0.1,
    lon: -0.9,
    spec: "Babel Traverse + ts-morph Dry-Run Code Transformations",
    metric: "30+ locales",
  },
];

const EDGES: [number, number][] = [
  [0, 1], // Sydney -> Django
  [1, 2], // Django -> Crypto Enclave
  [1, 3], // Django -> GlassBox ML
  [1, 4], // Django -> AWS EC2
  [1, 5], // Django -> Postgres
  [0, 6], // Sydney -> Localeora
  [3, 5], // ML -> Postgres
  [2, 4], // Crypto -> AWS
];

export const Interactive3DTopology: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNode, setActiveNode] = useState<TopologyNode | null>(NODES[0]);
  const [isDragging, setIsDragging] = useState(false);
  const activeNodeRef = useRef(activeNode);

  useEffect(() => {
    activeNodeRef.current = activeNode;
  }, [activeNode]);

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

    let rotX = 0.25;
    let rotY = 0.6;
    let velX = 0.003;
    let velY = 0.005;
    let dragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      dragging = true;
      setIsDragging(true);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      playMechanicalClick("tap");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (dragging) {
        const dx = e.clientX - prevMouseX;
        const dy = e.clientY - prevMouseY;
        rotY += dx * 0.008;
        rotX += dy * 0.008;
        velY = dx * 0.002;
        velX = dy * 0.002;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;
      }
    };

    const onMouseUp = () => {
      dragging = false;
      setIsDragging(false);
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Particle flow packets along edges
    const packets = EDGES.map((_, i) => ({
      edgeIndex: i,
      progress: (i * 0.2) % 1.0,
      speed: 0.008 + (i % 3) * 0.004,
    }));

    const radius = 100;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      if (!dragging) {
        rotX += velX;
        rotY += velY;
        velX *= 0.98;
        velY *= 0.98;
        if (Math.abs(velX) < 0.001) velX = 0.002;
        if (Math.abs(velY) < 0.001) velY = 0.004;
      }

      const centerX = width / 2;
      const centerY = height / 2;
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      const wireColor = isDark
        ? "rgba(245, 244, 240, 0.12)"
        : "rgba(17, 17, 17, 0.1)";
      const vermilionColor = "#FF3B00";

      // 3D Sphere Wireframe Rings (Latitude & Longitude)
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Function to project 3D point (x, y, z) to 2D
      const project = (x: number, y: number, z: number) => {
        // Rotate around Y
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        // Rotate around X
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const fov = 300;
        const scale = fov / (fov + z2);
        return {
          x: centerX + x1 * scale,
          y: centerY + y2 * scale,
          z: z2,
          scale,
        };
      };

      // Draw Sphere Longitudinal Rings
      ctx.lineWidth = 1;
      ctx.strokeStyle = wireColor;

      for (let ring = 0; ring < 4; ring++) {
        const ringAngle = (ring / 4) * Math.PI;
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.2) {
          const px = Math.sin(a) * Math.cos(ringAngle) * radius;
          const py = Math.cos(a) * radius;
          const pz = Math.sin(a) * Math.sin(ringAngle) * radius;
          const pt = project(px, py, pz);
          if (a === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }

      // Draw Equator & Tropics Rings
      for (const latAngle of [-0.6, 0, 0.6]) {
        const rLat = radius * Math.cos(latAngle);
        const yLat = radius * Math.sin(latAngle);
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.2) {
          const px = Math.cos(a) * rLat;
          const py = yLat;
          const pz = Math.sin(a) * rLat;
          const pt = project(px, py, pz);
          if (a === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }

      // Project Nodes
      const projectedNodes = NODES.map((node) => {
        const px = Math.cos(node.lat) * Math.sin(node.lon) * radius;
        const py = Math.sin(node.lat) * radius;
        const pz = Math.cos(node.lat) * Math.cos(node.lon) * radius;
        return { ...node, ...project(px, py, pz) };
      });

      // Draw Connection Edges
      for (let i = 0; i < EDGES.length; i++) {
        const [n1Idx, n2Idx] = EDGES[i];
        const n1 = projectedNodes[n1Idx];
        const n2 = projectedNodes[n2Idx];

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.strokeStyle = isDark
          ? "rgba(245, 244, 240, 0.24)"
          : "rgba(17, 17, 17, 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Update and Draw Packet Flow Particles
      for (const pkt of packets) {
        pkt.progress = (pkt.progress + pkt.speed) % 1.0;
        const [n1Idx, n2Idx] = EDGES[pkt.edgeIndex];
        const n1 = projectedNodes[n1Idx];
        const n2 = projectedNodes[n2Idx];

        const px = n1.x + (n2.x - n1.x) * pkt.progress;
        const py = n1.y + (n2.y - n1.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = vermilionColor;
        ctx.fill();
      }

      // Draw Nodes & Labels
      for (const node of projectedNodes) {
        const isActive = activeNodeRef.current?.id === node.id;
        const isFront = node.z < 20;

        ctx.beginPath();
        ctx.arc(node.x, node.y, isActive ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fillStyle = isActive
          ? vermilionColor
          : isDark
            ? "var(--ink-primary)"
            : "#111111";
        ctx.fill();

        if (isActive) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 9, 0, Math.PI * 2);
          ctx.strokeStyle = vermilionColor;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        if (isFront || isActive) {
          ctx.font = `${isActive ? "bold" : "normal"} 9px JetBrains Mono, monospace`;
          ctx.fillStyle = isActive
            ? vermilionColor
            : isDark
              ? "rgba(245, 244, 240, 0.75)"
              : "rgba(17, 17, 17, 0.75)";
          ctx.fillText(node.name, node.x + 8, node.y + 3);
        }
      }

      // Corner Crosshairs & Coordinates
      ctx.font = "9px JetBrains Mono, monospace";
      ctx.fillStyle = isDark
        ? "rgba(245, 244, 240, 0.3)"
        : "rgba(17, 17, 17, 0.3)";
      ctx.fillText("+", 10, 14);
      ctx.fillText("+", width - 14, 14);
      ctx.fillText(
        `3D_SPHERE_TOPOLOGY // ORBIT // ${NODES.length} ACTIVE NODES`,
        10,
        height - 10,
      );

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
        padding: "20px",
        position: "relative",
      }}
    >
      {/* Header Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          borderBottom: "1px solid var(--rule-hairline)",
          paddingBottom: "10px",
          marginBottom: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "var(--accent-vermilion)",
              display: "inline-block",
            }}
          />
          <span
            className="font-mono text-xs uppercase"
            style={{ color: "var(--accent-vermilion)", fontWeight: 700 }}
          >
            3D DISTRIBUTED CLOUD TOPOLOGY
          </span>
        </div>

        <span
          className="font-mono text-xs text-secondary"
          style={{ color: "var(--ink-tertiary)" }}
        >
          {isDragging ? "DRAGGING 3D LATTICE ↺" : "CLICK & DRAG TO SPIN SPHERE"}
        </span>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "230px",
          display: "block",
          cursor: "grab",
        }}
      />

      {/* Interactive Node Selector Pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginTop: "12px",
          borderTop: "1px solid var(--rule-hairline)",
          paddingTop: "12px",
        }}
      >
        {NODES.map((node) => {
          const isSel = activeNode?.id === node.id;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => {
                playMechanicalClick("tap");
                setActiveNode(node);
              }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                padding: "3px 7px",
                background: isSel ? "var(--accent-vermilion)" : "transparent",
                color: isSel ? "#FFFFFF" : "var(--ink-secondary)",
                border: "1px solid var(--rule-hairline)",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {node.name}
            </button>
          );
        })}
      </div>

      {/* Active Node Telemetry Panel */}
      {activeNode && (
        <div
          style={{
            marginTop: "12px",
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--rule-hairline)",
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div>
            <div
              className="font-mono text-xs"
              style={{ color: "var(--accent-vermilion)", fontWeight: 700 }}
            >
              [{activeNode.category}] // {activeNode.name}
            </div>
            <div
              style={{
                fontSize: "0.85rem",
                color: "var(--ink-primary)",
                marginTop: "2px",
              }}
            >
              {activeNode.spec}
            </div>
          </div>

          <div
            className="font-mono text-xs"
            style={{
              padding: "3px 8px",
              border: "1px solid rgba(255, 59, 0, 0.3)",
              backgroundColor: "var(--accent-vermilion-subtle)",
              color: "var(--accent-vermilion)",
              fontWeight: 600,
            }}
          >
            {activeNode.metric}
          </div>
        </div>
      )}
    </div>
  );
};
