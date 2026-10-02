import { useState } from "react";
import { PROJECTS } from "../../data/portfolioData";
import { useSydneyTime } from "../../hooks/useSydneyTime";
import { vars } from "../../utils/style";

const NOTES = [
  "Django and Spring Boot on the server, React on the client, Docker and AWS underneath.",
  "GlassBox attaches a reason to every alert. Localeora shows every code change as a diff before it is written.",
];

function Marker({ n, lit, onLight }: { n: number; lit: boolean; onLight: (n: number | null) => void }) {
  return (
    <sup className={`fn-mark${lit ? " is-lit" : ""}`}>
      <a
        href={`#note-${n}`}
        aria-label={`Note ${n}`}
        onPointerEnter={() => onLight(n)}
        onPointerLeave={() => onLight(null)}
        onFocus={() => onLight(n)}
        onBlur={() => onLight(null)}
      >
        {n}
      </a>
    </sup>
  );
}

export function Hero() {
  const time = useSydneyTime();
  const [lit, setLit] = useState<number | null>(null);
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section id="top" className="hero" data-tone="light">
      <div className="hero__inner">
        <dl className="hero__meta meta">
          <div className="enter" style={vars({ "--d": "100ms" })}>
            <dt>Abhinav Saxena</dt>
            <dd>Full-stack software engineer</dd>
          </div>
          <div className="enter" style={vars({ "--d": "160ms" })}>
            <dt>Sydney, Australia</dt>
            <dd>{time} local time</dd>
          </div>
          <div className="enter hero__status" style={vars({ "--d": "220ms" })}>
            <dt>Status</dt>
            <dd>
              <i aria-hidden /> Open to software engineering roles
            </dd>
          </div>
        </dl>

        <h1 className="hero__title">
          <span className="hero__line hero__line--1">
            <span className="mask">
              <span style={vars({ "--d": "250ms" })}>
                Software
                <Marker n={1} lit={lit === 1} onLight={setLit} /> that
              </span>
            </span>
          </span>
          <span className="hero__line hero__line--2">
            <span className="mask">
              <span style={vars({ "--d": "380ms" })}>
                shows its <em>work.</em>
                <Marker n={2} lit={lit === 2} onLight={setLit} />
              </span>
            </span>
          </span>
        </h1>

        <div className="hero__foot">
          <p className="hero__intro enter" style={vars({ "--d": "650ms" })}>
            I'm Abhinav, a software engineer who builds the whole stack. I was the founding engineer at Esprit
            Analytique, where I took ProdigiDesk from the first commit to production. Now I'm doing a Master
            of Computer Science at the University of Sydney and building ML tools that explain themselves.
          </p>

          <ol className="hero__notes">
            {NOTES.map((note, i) => (
              <li
                key={i}
                id={`note-${i + 1}`}
                className={`enter${lit === i + 1 ? " is-lit" : ""}`}
                style={vars({ "--d": `${750 + i * 80}ms` })}
                onPointerEnter={() => setLit(i + 1)}
                onPointerLeave={() => setLit(null)}
              >
                <span className="meta">{i + 1}</span>
                {note}
              </li>
            ))}
          </ol>

          <nav className="hero__index" aria-label="Case studies">
            <p className="meta enter" style={vars({ "--d": "800ms" })}>
              Case studies
            </p>
            <ol>
              {featured.map((p, i) => (
                <li key={p.id} className="enter" style={vars({ "--d": `${860 + i * 70}ms` })}>
                  <a href={`#project-${p.id}`} data-cursor="Read">
                    <span className="meta">{String(i + 1).padStart(2, "0")}</span>
                    <span className="hero__index-name">{p.name}</span>
                    <span className="meta">{p.period}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
