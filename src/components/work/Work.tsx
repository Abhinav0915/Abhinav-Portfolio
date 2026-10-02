import { PROJECTS } from "../../data/portfolioData";
import { SectionHead } from "../common/SectionHead";
import { CaseStudy } from "./CaseStudy";
import { AlsoBuilt } from "./AlsoBuilt";

export function Work() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="work" data-tone="dark">
      <div className="wrap">
        <SectionHead
          index="01"
          label="Work"
          title="Three systems, in detail"
          italic={["detail"]}
          aside={
            <p>
              Each case study covers the problem, what I built, and what came of it. The figures are drawn
              illustrations of how each system works.
            </p>
          }
        />
        {featured.map((p, i) => (
          <CaseStudy key={p.id} project={p} index={i} />
        ))}
      </div>
      <AlsoBuilt projects={rest} offset={featured.length} />
    </section>
  );
}
