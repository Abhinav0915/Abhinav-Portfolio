import { CV_URL } from "../../data/portfolioData";
import { SectionHead } from "../common/SectionHead";
import { ArrowUpRight } from "../common/Icons";
import { stagger } from "../../utils/style";

const FACTS = [
  { k: "Based in", v: "Sydney, since February 2026" },
  { k: "Studying", v: "Master of Computer Science, University of Sydney" },
  { k: "Previously", v: "Founding engineer, then lead, at Esprit Analytique" },
  { k: "Before that", v: "Internships at NEC India and Wormos" },
  { k: "Undergrad", v: "B.Tech CSE, Bennett University, GPA 8.99" },
];

const HABITS = [
  {
    title: "Show the reasoning",
    body: "GlassBox stores a SHAP explanation with every alert, so a flagged flow arrives with the features that caused it.",
    href: "#project-glassbox",
    ref: "GlassBox",
  },
  {
    title: "Review before writing",
    body: "Localeora won't touch a source file until someone has read the diff, and it rejects an edit if the file changed in the meantime.",
    href: "#project-localeora",
    ref: "Localeora",
  },
  {
    title: "Protect the unglamorous paths",
    body: "At ProdigiDesk every sensitive request between browser and server is sealed in an AES + RSA envelope, not just the payment flow.",
    href: "#project-prodigidesk",
    ref: "ProdigiDesk",
  },
];

export function About() {
  return (
    <section id="about" className="about" data-tone="light">
      <div className="wrap">
        <SectionHead index="02" label="About" title="The short version" italic={["short"]} />

        <div className="about__grid">
          <aside className="about__facts" aria-label="Quick facts">
            <dl>
              {FACTS.map((f, i) => (
                <div key={f.k} data-reveal style={stagger(i, 60)}>
                  <dt className="meta">{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
            <a className="link meta about__cv" href={CV_URL} target="_blank" rel="noreferrer" data-reveal>
              Full academic CV <ArrowUpRight size={12} />
            </a>
          </aside>

          <div className="about__body">
            <div className="about__bio">
              <p data-reveal>
                I studied computer science at Bennett University, where I ran the technical side of the
                Ciphers Club, placed 4th nationally at the Smart India Hackathon, and published a paper on
                detecting COVID-19 in chest X-rays with VGG-16.
              </p>
              <p data-reveal>
                After internships building Flutter apps at Wormos and Spring Boot services at NEC, I joined
                Esprit Analytique as its first engineer. The internship turned into a full-time job after 17
                days, and within a year I was leading development. Most of what I know about running software
                in production comes from those eighteen months.
              </p>
              <p data-reveal>
                Now I'm in Sydney doing a Master of Computer Science at USyd, with a focus on distributed
                systems and machine learning.
              </p>
            </div>

            <div className="habits">
              <h3 className="meta habits__title" data-reveal>
                Three habits that keep showing up in my work
              </h3>
              <ol>
                {HABITS.map((h, i) => (
                  <li key={h.title} data-reveal style={stagger(i, 90)}>
                    <span className="habits__no">{i + 1}</span>
                    <div>
                      <h4>{h.title}</h4>
                      <p>{h.body}</p>
                      <a className="link meta" href={h.href}>
                        See {h.ref}
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
