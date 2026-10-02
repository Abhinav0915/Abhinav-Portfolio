import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { CONTACT, NAV, RESUME_URL } from "../../data/portfolioData";
import { setScrollLocked } from "../../lib/smoothScroll";
import { useSydneyTime } from "../../hooks/useSydneyTime";
import { stagger } from "../../utils/style";

type Props = { active: string };
type Tone = "light" | "dark" | "accent";

const sectionNo = (i: number) => String(i + 1).padStart(2, "0");

/** Hide while reading downward, return the moment the reader scrolls up. */
function useHideOnScroll(disabled: boolean) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        if (Math.abs(y - last) > 6) {
          setHidden(y > last && y > 160);
          last = y;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return hidden && !disabled;
}

/** Colour scheme of whichever section is currently under the header. */
function useToneUnderHeader() {
  const [tone, setTone] = useState<Tone>("light");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setTone(((e.target as HTMLElement).dataset.tone as Tone) ?? "light");
        }
      },
      { rootMargin: "0px 0px -96% 0px" },
    );
    document.querySelectorAll("[data-tone]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return tone;
}

export function Header({ active }: Props) {
  const [open, setOpen] = useState(false);
  const hidden = useHideOnScroll(open);
  const tone = useToneUnderHeader();
  const time = useSydneyTime();

  const navRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstMenuLink = useRef<HTMLAnchorElement>(null);

  // Slide the underline to the active link.
  useLayoutEffect(() => {
    const nav = navRef.current;
    const bar = indicatorRef.current;
    if (!nav || !bar) return;
    const place = () => {
      const link = nav.querySelector<HTMLElement>(`[data-id="${active}"]`);
      if (!link) {
        bar.style.opacity = "0";
        return;
      }
      bar.style.opacity = "1";
      bar.style.transform = `translateX(${link.offsetLeft}px)`;
      bar.style.width = `${link.offsetWidth}px`;
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  useEffect(() => {
    setScrollLocked(open);
    if (!open) return;
    firstMenuLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`header header--${open ? "dark" : tone}${hidden ? " is-hidden" : ""}${open ? " is-open" : ""}`}
      >
        <div className="header__inner">
          <a href="#top" className="header__id" onClick={() => setOpen(false)}>
            <span className="header__name">Abhinav Saxena</span>
            <span className="meta header__role">Software engineer</span>
          </a>

          <nav ref={navRef} className="header__nav" aria-label="Sections">
            {NAV.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-id={item.id}
                aria-current={active === item.id ? "true" : undefined}
              >
                <span className="meta">{sectionNo(i)}</span>
                {item.label}
              </a>
            ))}
            <span ref={indicatorRef} className="header__indicator" aria-hidden />
          </nav>

          <div className="header__aside">
            <span className="meta header__time">Sydney {time}</span>
            <a className="header__cv" href={RESUME_URL} target="_blank" rel="noreferrer">
              Resume
            </a>
            <button
              ref={menuButton}
              type="button"
              className="header__menu"
              aria-expanded={open}
              aria-controls="site-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? "Close" : "Index"}
            </button>
          </div>
        </div>
        <span className="header__progress" aria-hidden />
      </header>

      <div id="site-menu" className={`menu${open ? " is-open" : ""}`} inert={!open} aria-hidden={!open}>
        <nav className="menu__nav" aria-label="Sections">
          <ol>
            {NAV.map((item, i) => (
              <li key={item.id} style={stagger(i, 50, 150)}>
                <a
                  ref={i === 0 ? firstMenuLink : undefined}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  <span className="meta">{sectionNo(i)}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="menu__foot meta">
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={RESUME_URL} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
