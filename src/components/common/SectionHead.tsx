import type { ReactNode } from "react";
import { Words } from "./Words";

type Props = {
  index: string;
  label: string;
  title: string;
  italic?: string[];
  aside?: ReactNode;
};

/** Section opener: running number and label in the margin, display title, optional aside. */
export function SectionHead({ index, label, title, italic, aside }: Props) {
  return (
    <header className="shead" data-scroll>
      <p className="shead__label meta" data-reveal>
        <span className="shead__index">{index}</span>
        <span className="shead__rule" aria-hidden />
        {label}
      </p>
      <h2 className="shead__title">
        <Words text={title} italic={italic} />
      </h2>
      {aside && (
        <div className="shead__aside" data-reveal>
          {aside}
        </div>
      )}
    </header>
  );
}
