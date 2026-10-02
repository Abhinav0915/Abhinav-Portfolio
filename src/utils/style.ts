import type { CSSProperties } from "react";

/** Inline custom properties, e.g. `vars({ "--d": "120ms" })`. */
export const vars = (v: Record<`--${string}`, string | number>) => v as CSSProperties;

/** Reveal delay for the n-th item of a staggered list. */
export const stagger = (i: number, step = 70, offset = 0) => vars({ "--d": `${offset + i * step}ms` });
