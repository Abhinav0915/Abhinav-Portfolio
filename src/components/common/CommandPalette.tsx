import React, { useState, useEffect, useRef } from "react";
import { CONTACT, PROJECTS, CERTIFICATIONS } from "../../data/portfolioData";
import { playMechanicalClick } from "../../utils/audio";

type CommandItem = {
  id: string;
  label: string;
  category: "SECTIONS" | "PROJECTS" | "ACTIONS" | "CERTIFICATIONS";
  shortcut?: string;
  meta?: string;
  action: () => void;
};

type CommandPaletteProps = {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
};

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigate,
  isDark,
  onToggleTheme,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedNotice, setCopiedNotice] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    playMechanicalClick("confirm");
    setCopiedNotice(`COPIED // ${label}`);
    setTimeout(() => setCopiedNotice(null), 2000);
  };

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-about",
      label: "Jump to Profile // Thesis & Dossier",
      category: "SECTIONS",
      shortcut: "01",
      meta: "ABOUT",
      action: () => {
        onNavigate("about");
        onClose();
      },
    },
    {
      id: "nav-projects",
      label: "Jump to Selected Works // 09 Systems",
      category: "SECTIONS",
      shortcut: "02",
      meta: "PROJECTS",
      action: () => {
        onNavigate("projects");
        onClose();
      },
    },
    {
      id: "nav-skills",
      label: "Jump to Technical Taxonomy // 6 Domains",
      category: "SECTIONS",
      shortcut: "03",
      meta: "SKILLS",
      action: () => {
        onNavigate("skills");
        onClose();
      },
    },
    {
      id: "nav-experience",
      label: "Jump to Production Chronology // Esprit & NEC",
      category: "SECTIONS",
      shortcut: "04",
      meta: "EXPERIENCE",
      action: () => {
        onNavigate("experience");
        onClose();
      },
    },
    {
      id: "nav-academics",
      label: "Jump to Academic Registry // USyd & Bennett",
      category: "SECTIONS",
      shortcut: "05",
      meta: "ACADEMICS",
      action: () => {
        onNavigate("academics");
        onClose();
      },
    },
    {
      id: "nav-contact",
      label: "Jump to Transmission // Contact Channels",
      category: "SECTIONS",
      shortcut: "06",
      meta: "CONTACT",
      action: () => {
        onNavigate("contact");
        onClose();
      },
    },

    // Projects
    ...PROJECTS.map((proj) => ({
      id: `proj-${proj.id}`,
      label: `${proj.name} // ${proj.subtitle || proj.category}`,
      category: "PROJECTS" as const,
      meta: proj.category.toUpperCase(),
      action: () => {
        onNavigate("projects");
        onClose();
      },
    })),

    // Verified Certifications
    ...CERTIFICATIONS.map((cert) => ({
      id: `cert-${cert.name}`,
      label: `Verify Credential: ${cert.name} // ${cert.issuer}`,
      category: "CERTIFICATIONS" as const,
      shortcut: "CERT",
      meta: "COURSERA",
      action: () => {
        if (cert.url) window.open(cert.url, "_blank");
        onClose();
      },
    })),

    // Quick Actions
    {
      id: "act-resume",
      label: "Download CV / Resume Archive (.zip)",
      category: "ACTIONS",
      shortcut: "DL",
      meta: "RESUME.ZIP",
      action: () => {
        const link = document.createElement("a");
        link.href = "/CV-Resume.zip";
        link.download = "Abhinav_Saxena_CV_Resume.zip";
        link.click();
        playMechanicalClick("confirm");
        onClose();
      },
    },
    {
      id: "act-copy-email",
      label: `Copy Email // ${CONTACT.email}`,
      category: "ACTIONS",
      shortcut: "CP",
      meta: "CLIPBOARD",
      action: () => {
        copyToClipboard(CONTACT.email, "EMAIL");
      },
    },
    {
      id: "act-copy-phone",
      label: `Copy Phone // ${CONTACT.phone}`,
      category: "ACTIONS",
      shortcut: "CP",
      meta: "CLIPBOARD",
      action: () => {
        copyToClipboard(CONTACT.phone, "PHONE");
      },
    },
    {
      id: "act-theme",
      label: `Toggle Color Mode // Currently [${isDark ? "DARK" : "LIGHT"}]`,
      category: "ACTIONS",
      shortcut: "THEME",
      meta: isDark ? "SWITCH_TO_LIGHT" : "SWITCH_TO_DARK",
      action: () => {
        playMechanicalClick("toggle");
        onToggleTheme();
      },
    },
    {
      id: "act-github",
      label: "Open GitHub Profile (Abhinav0915)",
      category: "ACTIONS",
      shortcut: "EXT",
      meta: "GITHUB.COM",
      action: () => {
        window.open(CONTACT.github, "_blank");
        onClose();
      },
    },
    {
      id: "act-linkedin",
      label: "Open LinkedIn Profile (abhinav1506)",
      category: "ACTIONS",
      shortcut: "EXT",
      meta: "LINKEDIN.COM",
      action: () => {
        window.open(CONTACT.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const filtered = commands.filter((cmd) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      cmd.label.toLowerCase().includes(q) ||
      cmd.category.toLowerCase().includes(q) ||
      (cmd.meta && cmd.meta.toLowerCase().includes(q))
    );
  });

  useEffect(() => {
    if (isOpen) {
      playMechanicalClick("tap");
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = React.useCallback(() => {
    setQuery("");
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        playMechanicalClick("tap");
        setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        playMechanicalClick("tap");
        setSelectedIndex(
          (prev) =>
            (prev - 1 + (filtered.length || 1)) % (filtered.length || 1),
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "clamp(40px, 12vh, 120px)",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
      onClick={handleClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "680px",
          backgroundColor: "var(--bg-surface)",
          border: "1px solid var(--rule-hairline)",
          boxShadow: "0 24px 48px rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          maxHeight: "75vh",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 16px",
            borderBottom: "1px solid var(--rule-hairline)",
            backgroundColor: "var(--bg-secondary)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-vermilion)",
                display: "inline-block",
              }}
            />
            <span
              className="font-mono text-xs uppercase"
              style={{ color: "var(--ink-primary)", fontWeight: 600 }}
            >
              COMMAND_PALETTE // REPO_DISPATCH
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {copiedNotice && (
              <span
                className="font-mono text-xs"
                style={{
                  color: "var(--accent-vermilion)",
                  fontWeight: 700,
                  animation: "fadeIn 0.2s ease",
                }}
              >
                {copiedNotice}
              </span>
            )}
            <span
              className="font-mono text-xs"
              style={{
                padding: "2px 6px",
                border: "1px solid var(--rule-hairline)",
                color: "var(--ink-tertiary)",
              }}
            >
              ESC TO CLOSE
            </span>
          </div>
        </div>

        {/* Input Field */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid var(--rule-hairline)",
            gap: "12px",
          }}
        >
          <span
            className="font-mono"
            style={{
              color: "var(--accent-vermilion)",
              fontSize: "1.2rem",
              fontWeight: 700,
            }}
          >
            &gt;
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search systems, jump to section, or trigger actions..."
            style={{
              width: "100%",
              background: "none",
              border: "none",
              outline: "none",
              color: "var(--ink-primary)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.95rem",
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="font-mono text-xs"
              style={{
                background: "none",
                border: "none",
                color: "var(--ink-tertiary)",
                cursor: "pointer",
              }}
            >
              CLEAR
            </button>
          )}
        </div>

        {/* Command List */}
        <div
          style={{
            overflowY: "auto",
            padding: "10px 0",
            flex: 1,
          }}
        >
          {filtered.length === 0 ? (
            <div
              style={{
                padding: "36px 20px",
                textAlign: "center",
                color: "var(--ink-tertiary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
              }}
            >
              // NO COMMAND MATCH FOUND FOR &quot;{query}&quot;
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 20px",
                    cursor: "pointer",
                    backgroundColor: isSelected
                      ? "var(--bg-secondary)"
                      : "transparent",
                    borderLeft: isSelected
                      ? "3px solid var(--accent-vermilion)"
                      : "3px solid transparent",
                    transition: "all 0.1s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      minWidth: 0,
                    }}
                  >
                    <span
                      className="font-mono text-xs"
                      style={{
                        color: isSelected
                          ? "var(--accent-vermilion)"
                          : "var(--ink-muted)",
                        minWidth: "22px",
                      }}
                    >
                      {cmd.shortcut || `0${(idx % 9) + 1}`}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9rem",
                        fontWeight: isSelected ? 600 : 400,
                        color: isSelected
                          ? "var(--ink-primary)"
                          : "var(--ink-secondary)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {cmd.label}
                    </span>
                  </div>

                  {cmd.meta && (
                    <span
                      className="font-mono text-xs"
                      style={{
                        color: isSelected
                          ? "var(--accent-vermilion)"
                          : "var(--ink-tertiary)",
                        padding: "2px 6px",
                        border: "1px solid var(--rule-hairline)",
                        fontSize: "0.72rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {cmd.meta}
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Legend */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 16px",
            borderTop: "1px solid var(--rule-hairline)",
            backgroundColor: "var(--bg-secondary)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--ink-tertiary)",
          }}
        >
          <div style={{ display: "flex", gap: "14px" }}>
            <span>↑↓ NAVIGATE</span>
            <span>↵ EXECUTE</span>
            <span>ESC DISMISS</span>
          </div>
          <div>
            <span>SYSTEM // ABHINAV_SAXENA</span>
          </div>
        </div>
      </div>
    </div>
  );
};
