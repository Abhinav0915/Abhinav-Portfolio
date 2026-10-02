import { useState } from "react";
import type { Screenshot } from "../../types/portfolio";

type Props = { shots: Screenshot[]; figNo: string; projectName: string };

/** Lead screenshot with thumbnails underneath that swap it in place. */
export function Screens({ shots, figNo, projectName }: Props) {
  const [active, setActive] = useState(0);
  const shot = shots[active];

  return (
    <figure className="screens">
      <div className="screens__stage">
        <a href={shot.src} target="_blank" rel="noreferrer" data-cursor="Full size">
          <img
            key={shot.src}
            className="screens__img"
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            loading="lazy"
            decoding="async"
          />
          <span className="sr-only"> (opens full size in a new tab)</span>
        </a>
      </div>

      {shots.length > 1 && (
        <div className="screens__thumbs" role="group" aria-label={`${projectName} screenshots`}>
          {shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className="screens__thumb"
              aria-pressed={i === active}
              aria-label={`Show screenshot ${i + 1}: ${s.caption}`}
              onClick={() => setActive(i)}
            >
              <img src={s.src} alt="" width={s.width} height={s.height} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}

      <figcaption className="meta" aria-live="polite">
        Fig. {figNo}
        {shots.length > 1 ? String.fromCharCode(97 + active) : ""}. {shot.caption}. Screenshot from my local
        build.
      </figcaption>
    </figure>
  );
}
