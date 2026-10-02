import type { ProjectItem } from "../../types/portfolio";
import { Words } from "../common/Words";
import { ArrowUpRight, GitHub } from "../common/Icons";
import { stagger, vars } from "../../utils/style";
import { githubLabel } from "../../utils/links";
import { Screens } from "./Screens";
import { ProdigiDeskPreview } from "./previews/ProdigiDeskPreview";

const PREVIEWS = {
  prodigidesk: ProdigiDeskPreview,
};

/** Each case study gets its own composition so the three don't read as one template. */
const VARIANTS = ["wide", "split", "statement"] as const;

type Props = { project: ProjectItem; index: number };

export function CaseStudy({ project, index }: Props) {
  const Preview = project.preview ? PREVIEWS[project.preview] : null;
  const variant = VARIANTS[index % VARIANTS.length];
  const no = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`case case--${variant}`}
      id={`project-${project.id}`}
      aria-labelledby={`project-${project.id}-title`}
      data-scroll
    >
      <header className="case__head">
        <p className="case__kicker meta" data-reveal>
          <span className="case__no">{no}</span>
          <span>Case study</span>
          <span>{project.category}</span>
          <span>{project.period}</span>
        </p>
        <h3 className="case__name" id={`project-${project.id}-title`}>
          <Words text={project.name} step={0} />
        </h3>
        <p className="case__subtitle" data-reveal style={vars({ "--d": "120ms" })}>
          {project.subtitle}
        </p>
      </header>

      {project.screenshots?.length ? (
        <div className="case__figure" data-reveal="figure">
          <div className="case__figure-inner">
            <Screens shots={project.screenshots} figNo={no} projectName={project.name} />
          </div>
        </div>
      ) : (
        Preview && (
          <figure className="case__figure" data-reveal="figure">
            <div className="case__figure-inner">
              <Preview />
            </div>
            <figcaption className="meta">
              Fig. {no}. How {project.name} works, drawn as an illustration. Not live output.
            </figcaption>
          </figure>
        )
      )}

      <p className="case__summary" data-reveal>
        {project.summary}
      </p>

      <dl className="case__spec">
        {project.problem && (
          <div data-reveal style={stagger(0, 90)}>
            <dt className="meta">Problem</dt>
            <dd>{project.problem}</dd>
          </div>
        )}
        {project.role && (
          <div data-reveal style={stagger(1, 90)}>
            <dt className="meta">What I built</dt>
            <dd>{project.role}</dd>
          </div>
        )}
        {project.outcomes && (
          <div data-reveal style={stagger(2, 90)}>
            <dt className="meta">Result</dt>
            <dd>
              <ul className="case__outcomes">
                {project.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>

      {project.pipeline && (
        <ol
          className="process"
          data-scroll
          aria-label={`${project.name} pipeline`}
          style={vars({ "--n": project.pipeline.length })}
        >
          {project.pipeline.map((step, i) => (
            <li key={step.label} style={vars({ "--i": i })}>
              <span className="meta process__no">{String(i + 1).padStart(2, "0")}</span>
              <span className="process__label">{step.label}</span>
              <span className="process__note">{step.note}</span>
            </li>
          ))}
        </ol>
      )}

      <div className="case__notes">
        <h4 className="meta" data-reveal>
          Engineering notes
        </h4>
        <ol>
          {project.details.map((d, i) => (
            <li key={i} data-reveal style={stagger(i, 60)}>
              <span className="meta">{String(i + 1).padStart(2, "0")}</span>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>

      <footer className="case__foot" data-reveal>
        <p className="meta case__stack">{project.tags.join(" / ")}</p>
        <div className="case__links">
          {project.link && (
            <a className="btn btn--fill" href={project.link} target="_blank" rel="noreferrer">
              Visit live site <ArrowUpRight size={14} />
            </a>
          )}
          {project.github && (
            <a className="btn" href={project.github} target="_blank" rel="noreferrer">
              <GitHub size={14} /> {githubLabel(project.github)}
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}
