import { useState } from "react";
import { ACHIEVEMENTS, CERTIFICATIONS, EDUCATION, EXPERIENCE, LEADERSHIP } from "../../data/portfolioData";
import { SectionHead } from "../common/SectionHead";
import { ArrowUpRight } from "../common/Icons";
import { stagger } from "../../utils/style";

const CERTS_SHOWN = 4;

export function Experience() {
  const [allCerts, setAllCerts] = useState(false);
  const certs = allCerts ? CERTIFICATIONS : CERTIFICATIONS.slice(0, CERTS_SHOWN);

  return (
    <section id="experience" className="experience" data-tone="light">
      <div className="wrap">
        <SectionHead index="03" label="Experience" title="Where I've worked" italic={["worked"]} />

        <ol className="roles">
          {EXPERIENCE.map((job) => (
            <li key={job.company} className="role" data-scroll>
              <p className="role__years" aria-hidden data-reveal>
                {job.years}
              </p>
              <div className="role__head" data-reveal>
                <h3>{job.role}</h3>
                <p className="role__org">{job.company}</p>
                <p className="meta role__when">
                  {job.period} <span>/</span> {job.location}
                </p>
              </div>
              <div className="role__body">
                <ul>
                  {job.description.map((d, i) => (
                    <li key={i} data-reveal style={stagger(i, 50)}>
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="meta role__tech" data-reveal>
                  {job.technologies.join(" / ")}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="record">
          <div className="record__col">
            <h3 className="meta record__title" data-reveal>
              Education
            </h3>
            <ul>
              {EDUCATION.map((e, i) => (
                <li key={e.school} data-reveal style={stagger(i, 70)}>
                  <span className="meta record__when">{e.period}</span>
                  <div>
                    <strong>{e.school}</strong>
                    <span>{e.degree}</span>
                    {e.honors && <span className="record__note">{e.honors}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="record__col">
            <h3 className="meta record__title" data-reveal>
              Recognition
            </h3>
            <ul>
              {ACHIEVEMENTS.map((a, i) => (
                <li key={a.title} data-reveal style={stagger(i, 70)}>
                  <span className="meta record__when">{a.organization}</span>
                  <div>
                    <strong>{a.title}</strong>
                    <span>{a.description}</span>
                  </div>
                </li>
              ))}
              {LEADERSHIP.map((l, i) => (
                <li key={l.role} data-reveal style={stagger(ACHIEVEMENTS.length + i, 70)}>
                  <span className="meta record__when">{l.period}</span>
                  <div>
                    <strong>
                      {l.role}, {l.organization}
                    </strong>
                    <span>{l.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="certs">
          <h3 className="meta record__title" data-reveal>
            Certifications <span>({CERTIFICATIONS.length})</span>
          </h3>
          <ul>
            {certs.map((c, i) => (
              <li key={c.name} data-reveal style={stagger(i % CERTS_SHOWN, 40)}>
                <a href={c.url} target="_blank" rel="noreferrer" data-cursor="Verify">
                  <span className="certs__name">{c.name}</span>
                  <span className="meta">{c.issuer}</span>
                  <span className="meta">{c.date}</span>
                  <ArrowUpRight size={13} />
                </a>
              </li>
            ))}
          </ul>
          {CERTIFICATIONS.length > CERTS_SHOWN && (
            <button
              type="button"
              className="btn btn--small"
              aria-expanded={allCerts}
              onClick={() => setAllCerts((v) => !v)}
            >
              {allCerts ? "Show fewer" : `Show all ${CERTIFICATIONS.length}`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
