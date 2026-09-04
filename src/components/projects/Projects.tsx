import React, { useState, useMemo } from "react";
import { PROJECTS } from "../../data/portfolioData";
import type { ProjectItem } from "../../types/portfolio";
import { SectionHeader } from "../common/SectionHeader";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectModal } from "./ProjectModal";
import {
  ExternalLinkIcon,
  GithubIcon,
  ArrowUpRightIcon,
} from "../common/Icons";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] =
    useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "AI & ML",
    "Full Stack",
    "Systems & Security",
    "Tools",
  ];

  const featuredProject = useMemo(() => {
    return PROJECTS.find((p) => p.featured) || PROJECTS[0];
  }, []);

  const filteredProjects = useMemo(() => {
    // Filter out the featured project so it doesn't duplicate
    const nonFeatured = PROJECTS.filter((p) => p.id !== featuredProject.id);
    if (selectedCategory === "All") return nonFeatured;
    return nonFeatured.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, featuredProject]);

  return (
    <section
      id="projects"
      style={{
        padding: "110px 24px",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          index="03"
          eyebrow="PRODUCTION SYSTEMS"
          title="Engineered platforms & research implementations."
          subtitle="Real-world architectures spanning explainable machine learning, AST code transforms, secure payments, and cloud infrastructure."
        />

        {/* Featured Project Showcase: GlassBox */}
        <FeaturedProject
          project={featuredProject}
          onOpenDetails={(p) => setActiveModalProject(p)}
        />

        {/* Category Filter Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "14px",
            marginBottom: "32px",
            marginTop: "48px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    padding: "7px 16px",
                    borderRadius: "8px",
                    border: `1px solid ${isActive ? "var(--accent-cyan)" : "rgba(255, 255, 255, 0.08)"}`,
                    backgroundColor: isActive
                      ? "rgba(0, 229, 255, 0.1)"
                      : "rgba(255, 255, 255, 0.02)",
                    color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                    cursor: "pointer",
                    transition: "all 0.18s ease",
                  }}
                >
                  {cat === "All" ? "All Systems" : cat}
                </button>
              );
            })}
          </div>

          <div className="font-mono text-xs text-tertiary">
            SHOWING {filteredProjects.length + 1} OF {PROJECTS.length} SHIPPED
            SYSTEMS
          </div>
        </div>

        {/* Bento Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "24px",
          }}
          className="projects-bento-grid"
        >
          {filteredProjects.map((project, idx) => {
            return (
              <div
                key={project.id}
                className="cyber-panel cyber-panel-glow"
                style={{
                  padding: "26px",
                  background: "rgba(14, 18, 26, 0.75)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "all 0.22s ease",
                }}
                onClick={() => setActiveModalProject(project)}
              >
                <div>
                  {/* Card Top Metadata */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--accent-cyan)",
                        letterSpacing: "0.08em",
                        fontWeight: 600,
                      }}
                    >
                      SYS // 0{idx + 2}
                    </span>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="Open live system"
                          style={{
                            color: "var(--text-tertiary)",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--accent-cyan)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                              "var(--text-tertiary)")
                          }
                        >
                          <ExternalLinkIcon size={16} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="View source code"
                          style={{
                            color: "var(--text-tertiary)",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#FFFFFF")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                              "var(--text-tertiary)")
                          }
                        >
                          <GithubIcon size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h4
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      margin: "0 0 6px 0",
                    }}
                  >
                    {project.name}
                  </h4>

                  {project.subtitle && (
                    <div
                      className="font-mono text-xs"
                      style={{
                        color: "var(--accent-blue)",
                        marginBottom: "14px",
                      }}
                    >
                      {project.subtitle}
                    </div>
                  )}

                  <p
                    style={{
                      fontSize: "0.88rem",
                      lineHeight: 1.65,
                      color: "var(--text-secondary)",
                      margin: "0 0 20px 0",
                    }}
                  >
                    {project.summary}
                  </p>
                </div>

                {/* Card Bottom: Tags & Inspect Action */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      marginBottom: "18px",
                    }}
                  >
                    {project.tags.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="font-mono"
                        style={{
                          fontSize: "0.72rem",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.07)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span
                        className="font-mono"
                        style={{
                          fontSize: "0.72rem",
                          padding: "3px 8px",
                          color: "var(--text-tertiary)",
                        }}
                      >
                        +{project.tags.length - 5}
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "12px",
                      borderTop: "1px solid var(--border-subtle)",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-cyan)",
                    }}
                  >
                    <span>INSPECT_SYSTEM</span>
                    <ArrowUpRightIcon size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      <style>{`
        @media (max-width: 768px) {
          .projects-bento-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
