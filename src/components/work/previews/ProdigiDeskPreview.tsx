import { useEffect, useRef, useState } from "react";

const PLAIN = '{"doc":"contract.docx","to":"hi"}';
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

// Deterministic pseudo-ciphertext, so the illustration doesn't change per render.
const CIPHER = Array.from(PLAIN, (_, i) => GLYPHS[(i * 37 + 11) % GLYPHS.length]).join("");

/** Payload scrambles into ciphertext once the figure scrolls into view. */
function useScramble(active: boolean) {
  const [text, setText] = useState(PLAIN);
  const calm = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  useEffect(() => {
    if (!active || calm) return;
    let step = 0;
    const id = setInterval(() => {
      step += 1;
      const done = Math.floor(step * 1.2);
      setText(
        Array.from(PLAIN, (ch, i) =>
          i < done ? CIPHER[i] : Math.random() < 0.5 ? GLYPHS[(Math.random() * GLYPHS.length) | 0] : ch,
        ).join(""),
      );
      if (done >= PLAIN.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, [active, calm]);
  return active && calm ? CIPHER : text;
}

export function ProdigiDeskPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const body = useScramble(active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          // Let the reveal land before scrambling.
          setTimeout(() => setActive(true), 700);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="pv pv--prodigi" ref={ref}>
      <div className="pv__bar mono">
        <span>prodigidesk / request envelope</span>
        <span>POST /api/translate</span>
      </div>
      <div className="pv__body pd">
        <div className="pd__row">
          <div className="pd__node mono">
            <span className="pd__node-k">Client</span>
            <span>React</span>
          </div>

          <div className="pd__envelope">
            <div className="pd__layer pd__layer--key">
              <p className="mono pv__label">
                <span className="pd__step">1</span> Fresh AES key, wrapped with server RSA public key
              </p>
              <code className="code pd__code">aes_key: ••••••••••••••••</code>
            </div>
            <div className="pd__layer pd__layer--body">
              <p className="mono pv__label">
                <span className="pd__step">2</span> Body encrypted with that AES key
              </p>
              <code className={`code pd__code${body === CIPHER ? " is-sealed" : ""}`}>{body}</code>
            </div>
          </div>

          <div className="pd__node mono">
            <span className="pd__node-k">Server</span>
            <span>Django</span>
          </div>
        </div>

        <p className="mono pd__note">
          <span className="pd__step">3</span> Server unwraps the key with its private key, then decrypts the
          body.
        </p>
      </div>
    </div>
  );
}
