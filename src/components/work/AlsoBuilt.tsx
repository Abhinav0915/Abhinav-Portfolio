import { useEffect, useRef, useState, type FocusEvent } from "react";
import type { ProjectItem, Screenshot } from "../../types/portfolio";
import { ArrowUpRight, GitHub } from "../common/Icons";
import { scrollToTarget } from "../../lib/smoothScroll";
import { githubLabel } from "../../utils/links";
import { stagger } from "../../utils/style";

type Props = { projects: ProjectItem[]; offset: number };

/** Desktop screenshot, with the phone view tucked over its corner when there is one. */
function PanelShots({ shots }: { shots: Screenshot[] }) {
  const [desktop, mobile] = shots;
  return (
    <div className={`also__shots${mobile ? " has-mobile" : ""}`}>
      <img
        className="also__shot"
        src={desktop.src}
        alt={desktop.alt}
        width={desktop.width}
        height={desktop.height}
        loading="lazy"
        decoding="async"
      />
      {mobile && (
        <img
          className="also__shot also__shot--mobile"
          src={mobile.src}
          alt={mobile.alt}
          width={mobile.width}
          height={mobile.height}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}

const PIN_QUERY = "(min-width: 1000px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)";

/**
 * Smaller projects as a horizontal reel. On large screens the section pins
 * and vertical scroll moves the reel sideways; elsewhere it is a plain list.
 */
export function AlsoBuilt({ projects, offset }: Props) {
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const [pinned, setPinned] = useState(() => window.matchMedia(PIN_QUERY).matches);

  useEffect(() => {
    const mq = window.matchMedia(PIN_QUERY);
    const onChange = () => setPinned(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // The pinned section is exactly as tall as the sideways distance to travel.
  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    if (!pinned) {
      wrap.style.removeProperty("height");
      track.style.removeProperty("--dist");
      return;
    }
    const measure = () => {
      const dist = Math.max(0, track.scrollWidth - track.clientWidth);
      track.style.setProperty("--dist", `${dist}px`);
      wrap.style.height = `calc(100vh + ${dist}px)`;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [pinned]);

  // Keyboard users: bring a focused panel into view by scrolling the page.
  const onFocus = (e: FocusEvent<HTMLOListElement>) => {
    const wrap = wrapRef.current;
    const panel = (e.target as HTMLElement).closest<HTMLElement>(".also__panel");
    if (!pinned || !wrap || !panel || !trackRef.current) return;
    const dist = trackRef.current.scrollWidth - trackRef.current.clientWidth;
    const top = wrap.getBoundingClientRect().top + window.scrollY;
    scrollToTarget(top + Math.min(panel.offsetLeft, dist), true);
  };

  return (
    <section
      ref={wrapRef}
      className={`also${pinned ? " is-pinned" : ""}`}
      aria-labelledby="also-title"
      data-scroll
    >
      <div className="also__stage">
        <header className="also__head">
          <h3 id="also-title" className="also__title" data-reveal>
            Also built <span className="meta">{projects.length} projects</span>
          </h3>
          <p className="meta also__hint" aria-hidden>
            {pinned ? "Keep scrolling" : ""}
          </p>
        </header>

        <ol ref={trackRef} className="also__track" onFocus={onFocus}>
          {projects.map((p, i) => (
            <li key={p.id} id={`project-${p.id}`} className="also__panel" data-reveal style={stagger(i, 70)}>
              {p.screenshots?.length ? <PanelShots shots={p.screenshots} /> : null}
              <p className="meta also__meta">
                <span>{String(offset + i + 1).padStart(2, "0")}</span>
                <span>{p.category}</span>
                <span>{p.period}</span>
              </p>
              <h4 className="also__name">{p.name}</h4>
              <p className="also__sub">{p.subtitle}</p>
              <p className="also__summary">{p.summary}</p>
              <p className="meta also__stack">{p.tags.join(" / ")}</p>
              <div className="also__links">
                {p.link && (
                  <a className="link" href={p.link} target="_blank" rel="noreferrer" data-cursor="Visit">
                    Live site <ArrowUpRight size={13} />
                  </a>
                )}
                {p.github && (
                  <a className="link" href={p.github} target="_blank" rel="noreferrer">
                    <GitHub size={13} /> {githubLabel(p.github)}
                  </a>
                )}
                {!p.link && !p.github && <span className="meta also__private">Client work, not public</span>}
              </div>
            </li>
          ))}
        </ol>

        <span className="also__progress" aria-hidden />
      </div>
    </section>
  );
}
