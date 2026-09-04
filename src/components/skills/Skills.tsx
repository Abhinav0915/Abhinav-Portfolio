import React, { useState } from "react";
import { SKILL_CATEGORIES } from "../../data/portfolioData";
import { SectionHeader } from "../common/SectionHeader";
import {
  ServerIcon,
  LayoutIcon,
  BrainCircuitIcon,
  ShieldCheckIcon,
  CloudIcon,
  DatabaseIcon,
} from "../common/Icons";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Server: <ServerIcon size={18} />,
  Layout: <LayoutIcon size={18} />,
  BrainCircuit: <BrainCircuitIcon size={18} />,
  ShieldCheck: <ShieldCheckIcon size={18} />,
  Cloud: <CloudIcon size={18} />,
  Database: <DatabaseIcon size={18} />,
};

type SkillsProps = {
  onSelectSkill?: (skill: string) => void;
};

export const Skills: React.FC<SkillsProps> = ({ onSelectSkill }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getAccentColor = (id: string) => {
    switch (id) {
      case "backend":
        return "#38BDF8";
      case "frontend":
        return "#00E5FF";
      case "aiml":
        return "#A855F7";
      case "security":
        return "#10B981";
      case "cloud":
        return "#F59E0B";
      case "databases":
        return "#EC4899";
      default:
        return "#38BDF8";
    }
  };

  return (
    <section
      id="skills"
      style={{
        padding: "110px 24px",
        background: "rgba(10, 13, 20, 0.7)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          index="02"
          eyebrow="TECHNICAL ARCHITECTURE"
          title="Engineered technical stack, categorized."
          subtitle="Battle-tested tools and frameworks utilized across production systems, cryptographic pipelines, and AI research."
        />

        {/* Skill Matrix Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="skills-grid-layout"
        >
          {SKILL_CATEGORIES.map((category) => {
            const accent = getAccentColor(category.id);
            return (
              <div
                key={category.id}
                className="cyber-panel cyber-panel-glow"
                style={{
                  padding: "26px",
                  background: "rgba(14, 18, 26, 0.75)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Header of category card */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "8px",
                          background: `${accent}18`,
                          border: `1px solid ${accent}40`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: accent,
                        }}
                      >
                        {CATEGORY_ICONS[category.iconName] || (
                          <ServerIcon size={18} />
                        )}
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: 600,
                            color: "#FFFFFF",
                            margin: 0,
                          }}
                        >
                          {category.category}
                        </h3>
                        <span
                          className="font-mono"
                          style={{
                            fontSize: "0.72rem",
                            color: "var(--text-tertiary)",
                            textTransform: "uppercase",
                          }}
                        >
                          DOMAIN // 0{category.id}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.83rem",
                      lineHeight: 1.5,
                      color: "var(--text-secondary)",
                      margin: "0 0 20px 0",
                    }}
                  >
                    {category.tagline}
                  </p>
                </div>

                {/* Skill Chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {category.items.map((skill) => {
                    const isHovered = hoveredSkill === skill;
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => onSelectSkill?.(skill)}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.76rem",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          border: `1px solid ${isHovered ? accent : "rgba(255, 255, 255, 0.08)"}`,
                          background: isHovered
                            ? `${accent}18`
                            : "rgba(255, 255, 255, 0.03)",
                          color: isHovered
                            ? "#FFFFFF"
                            : "var(--text-secondary)",
                          cursor: "pointer",
                          transition: "all 0.18s ease",
                          boxShadow: isHovered
                            ? `0 0 12px ${accent}33`
                            : "none",
                          userSelect: "none",
                        }}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid-layout { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 680px) {
          .skills-grid-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
