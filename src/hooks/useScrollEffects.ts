import { useEffect } from "react";

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/**
 * Drives every scroll effect on the page from one rAF-throttled listener and
 * one IntersectionObserver. Effects are written as CSS custom properties so
 * all motion stays in CSS and only touches transform/opacity:
 *
 * - `[data-reveal]` gets `.is-in` the first time it enters the viewport.
 * - `[data-scroll]` gets
 *     `--p` 0→1 as it travels from the bottom of the viewport to the top,
 *     `--c` how much of it has passed 60% down the viewport,
 *     `--s` progress through a pinned (sticky) section: 0 when its top hits
 *           the top of the viewport, 1 when its bottom reaches the bottom.
 * - `<html>` gets `--page` (whole-page progress) and `--sy` (scroll in
 *   viewport heights), used by the header and the hero exit.
 */
export function useScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;

    const revealer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    let tracked: HTMLElement[] = [];
    const scan = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)")
        .forEach((el) => revealer.observe(el));
      tracked = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll]"));
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const y = window.scrollY;
      const max = root.scrollHeight - vh;
      root.style.setProperty("--page", (max > 0 ? y / max : 0).toFixed(4));
      root.style.setProperty("--sy", (y / vh).toFixed(4));

      for (const el of tracked) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -vh || rect.top > vh * 2) continue;
        el.style.setProperty("--p", clamp01((vh - rect.top) / (vh + rect.height)).toFixed(4));
        el.style.setProperty("--c", clamp01((vh * 0.6 - rect.top) / rect.height).toFixed(4));
        const pinRange = rect.height - vh;
        el.style.setProperty("--s", (pinRange > 0 ? clamp01(-rect.top / pinRange) : 0).toFixed(4));
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    scan();
    update();

    // Lists that expand after mount (certifications, etc.) add new targets.
    const mutations = new MutationObserver(() => {
      scan();
      schedule();
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      revealer.disconnect();
      mutations.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

/** Tracks which section id is currently crossing the middle of the viewport. */
export function useActiveSection(ids: string[], setActive: (id: string) => void) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids, setActive]);
}
