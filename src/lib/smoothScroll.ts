import Lenis from "lenis";

let lenis: Lenis | null = null;

const HEADER_OFFSET = -72;

/**
 * Inertial wheel scrolling for mouse and trackpad. Touch devices keep native
 * scrolling (it already feels right there), and anyone who prefers reduced
 * motion gets plain browser scrolling.
 */
export function startSmoothScroll() {
  if (lenis || typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  lenis = new Lenis({
    autoRaf: true,
    lerp: 0.1,
    wheelMultiplier: 1,
    anchors: { offset: HEADER_OFFSET },
  });
}

export function stopSmoothScroll() {
  lenis?.destroy();
  lenis = null;
}

/** Pause or resume scrolling, e.g. while a full-screen menu is open. */
export function setScrollLocked(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.classList.toggle("is-locked", locked);
}

/** Scroll to an element or pixel offset, smoothly when Lenis is active. */
export function scrollToTarget(target: HTMLElement | number, immediate = false) {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === "number" ? 0 : HEADER_OFFSET, immediate });
    return;
  }
  const top =
    typeof target === "number" ? target : target.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET;
  window.scrollTo({ top, behavior: immediate ? "auto" : "smooth" });
}
