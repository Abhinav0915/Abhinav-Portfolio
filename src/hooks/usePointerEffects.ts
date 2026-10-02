import { useEffect, type RefObject } from "react";

/**
 * Pointer-only niceties, skipped entirely on touch devices and for users who
 * prefer reduced motion:
 *
 * - `[data-magnetic]` elements lean toward the cursor while it's over them.
 * - `[data-cursor="Label"]` elements show that label in the follower dot.
 */
export function usePointerEffects(cursorRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cursor = cursorRef.current;
    if (!fine || calm || !cursor) return;

    let x = -100;
    let y = -100;
    let cx = x;
    let cy = y;
    let frame = 0;
    let magnet: HTMLElement | null = null;

    const tick = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      frame = Math.abs(x - cx) + Math.abs(y - cy) > 0.1 ? requestAnimationFrame(tick) : 0;
    };

    const release = () => {
      if (magnet) magnet.style.transform = "";
      magnet = null;
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(tick);

      const target = e.target as Element | null;
      const labelled = target?.closest<HTMLElement>("[data-cursor]");
      cursor.classList.toggle("is-label", !!labelled);
      cursor.dataset.label = labelled?.dataset.cursor ?? "";
      cursor.classList.toggle("is-hover", !labelled && !!target?.closest("a, button, [role='button']"));

      const next = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (next !== magnet) release();
      if (next) {
        magnet = next;
        const r = next.getBoundingClientRect();
        const dx = (x - (r.left + r.width / 2)) * 0.28;
        const dy = (y - (r.top + r.height / 2)) * 0.38;
        next.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    const onLeave = () => {
      release();
      cursor.classList.remove("is-label", "is-hover");
      cursor.classList.add("is-away");
    };
    const onEnter = () => cursor.classList.remove("is-away");

    document.documentElement.classList.add("has-cursor");
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.documentElement.addEventListener("pointerenter", onEnter);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.documentElement.removeEventListener("pointerenter", onEnter);
      if (frame) cancelAnimationFrame(frame);
      release();
    };
  }, [cursorRef]);
}
