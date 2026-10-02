import { vars } from "../../utils/style";

type Props = {
  text: string;
  /** Words to set in italic, matched exactly. */
  italic?: string[];
  /** Delay before the first word, in ms. */
  delay?: number;
  step?: number;
};

/**
 * Splits a line into words that each rise from behind a mask, staggered.
 * Screen readers get the sentence once, as plain hidden text.
 */
export function Words({ text, italic = [], delay = 0, step = 45 }: Props) {
  const words = text.split(" ");
  return (
    <span className="words" data-reveal="words">
      <span className="sr-only">{text}</span>
      {words.map((w, i) => (
        <span key={i} className="mask" aria-hidden>
          <span style={vars({ "--d": `${delay + i * step}ms` })}>
            {italic.includes(w) ? <em>{w}</em> : w}
          </span>
        </span>
      ))}
    </span>
  );
}
