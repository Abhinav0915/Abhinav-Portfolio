import React from "react";
import { SKILL_CATEGORIES } from "../../data/portfolioData";
import { EditorialSectionHeading } from "../common/EditorialSectionHeading";

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      style={{
        paddingTop: "90px",
        paddingBottom: "90px",
        borderBottom: "1px solid var(--rule-hairline)",
      }}
    >
      <div className="editorial-container">
        <EditorialSectionHeading
          number="03"
          category="TECHNICAL SPECIFICATION"
          title="Engineered stack index &amp; technical catalog."
          meta="CATALOGUE // 6 DOMAINS"
        />

        {/* Technical Reference Table */}
        <div
          style={{
            borderTop: "1px solid var(--rule-hairline)",
          }}
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1.2fr 2fr",
                gap: "32px",
                padding: "26px 0",
                borderBottom: "1px solid var(--rule-hairline)",
                alignItems: "start",
              }}
              className={`skill-index-row scroll-reveal delay-${(idx % 3) + 1}`}
            >
              {/* Column 1: Index Number & Domain */}
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "10px" }}
              >
                <span
                  className="font-mono text-sm"
                  style={{ color: "var(--accent-vermilion)", fontWeight: 700 }}
                >
                  0{idx + 1}
                </span>
                <span
                  className="font-display font-bold uppercase"
                  style={{ fontSize: "1.05rem", color: "var(--ink-primary)" }}
                >
                  {cat.category}
                </span>
              </div>

              {/* Column 2: Architectural Scope Description */}
              <div
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.55,
                  color: "var(--ink-secondary)",
                }}
              >
                {cat.tagline}
              </div>

              {/* Column 3: Plain Text Technologies List with hairline separators */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px 14px",
                  alignItems: "center",
                }}
              >
                {cat.items.map((item, itemIdx) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.85rem",
                      color: "var(--ink-primary)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    <span>{item}</span>
                    {itemIdx < cat.items.length - 1 && (
                      <span
                        style={{
                          color: "var(--ink-muted)",
                          userSelect: "none",
                        }}
                      >
                        /
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skill-index-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
            padding: 20px 0 !important;
          }
        }
      `}</style>
    </section>
  );
};
