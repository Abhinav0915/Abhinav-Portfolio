import { useMemo, useState } from "react";
import { PROJECTS, TOOLBOX } from "../../data/portfolioData";
import type { Tool } from "../../types/portfolio";
import { SectionHead } from "../common/SectionHead";
import { stagger } from "../../utils/style";

type Ref = { no: string; id: string; name: string };

/** Projects whose tags mention this tool (by name or alias). */
function projectsUsing(tool: Tool): Ref[] {
  const names = [tool.name, ...(tool.aliases ?? [])].map((n) => n.toLowerCase());
  return PROJECTS.flatMap((p, i) =>
    p.tags.some((t) => names.includes(t.toLowerCase()))
      ? [{ no: String(i + 1).padStart(2, "0"), id: p.id, name: p.name }]
      : [],
  );
}

export function Toolbox() {
  const groups = useMemo(
    () => TOOLBOX.map((g) => ({ ...g, tools: g.tools.map((t) => ({ ...t, refs: projectsUsing(t) })) })),
    [],
  );
  // Hovering a project number highlights every tool that project used.
  const [focus, setFocus] = useState<string | null>(null);

  return (
    <section id="toolbox" className="toolbox" data-tone="light">
      <div className="wrap">
        <SectionHead
          index="04"
          label="Toolbox"
          title="What I build with"
          italic={["with"]}
          aside={
            <p>
              Grouped by job, not ranked. The small numbers point to the projects above that used each tool;
              hover one to see that project's whole stack.
            </p>
          }
        />

        <div className={`tools${focus ? " has-focus" : ""}`}>
          {groups.map((g, gi) => (
            <div key={g.id} className="tools__row" data-reveal style={stagger(gi, 50)}>
              <h3 className="tools__label">
                {g.label}
                <span className="meta">{String(g.tools.length).padStart(2, "0")}</span>
              </h3>
              <ul className="tools__list">
                {g.tools.map((t) => (
                  <li
                    key={t.name}
                    className={focus && t.refs.some((r) => r.id === focus) ? "is-lit" : undefined}
                  >
                    {t.name}
                    {t.refs.length > 0 && (
                      <sup className="tools__refs">
                        {t.refs.map((r) => (
                          <a
                            key={r.id}
                            href={`#project-${r.id}`}
                            aria-label={`Used in ${r.name}`}
                            onPointerEnter={() => setFocus(r.id)}
                            onPointerLeave={() => setFocus(null)}
                            onFocus={() => setFocus(r.id)}
                            onBlur={() => setFocus(null)}
                          >
                            {r.no}
                          </a>
                        ))}
                      </sup>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
