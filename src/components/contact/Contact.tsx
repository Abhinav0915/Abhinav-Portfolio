import { useState, type FormEvent } from "react";
import { CONTACT, CV_URL, RESUME_URL } from "../../data/portfolioData";
import { Words } from "../common/Words";
import { ArrowRight, ArrowUp, ArrowUpRight, Check, Copy, GitHub, LinkedIn } from "../common/Icons";
import { stagger } from "../../utils/style";

type Status = "idle" | "sending" | "sent" | "error";

const builtOn = new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "short", year: "numeric" }).format(
  new Date(__BUILD_DATE__),
);

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the address is still visible to select.
    }
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT.email)}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          _subject: `Portfolio message from ${form.name.trim()}`,
          _replyto: form.email.trim(),
          _template: "table",
        }).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: { target: { value: string } }) => setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  return (
    <section id="contact" className="contact" data-tone="accent">
      <div className="wrap">
        <p className="shead__label meta" data-reveal>
          <span className="shead__index">05</span>
          <span className="shead__rule" aria-hidden />
          Contact
        </p>

        <h2 className="contact__lead">
          <Words text="I'm open to software engineering roles. Email is the quickest way to reach me." />
        </h2>

        <div className="contact__mail" data-reveal>
          <a href={`mailto:${CONTACT.email}`} className="contact__address" data-cursor="Write">
            {CONTACT.email}
          </a>
          <button type="button" className="btn btn--small btn--on-accent" onClick={copyEmail}>
            {copied ? <Check size={13} /> : <Copy size={13} />}
            <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
          </button>
        </div>

        <div className="contact__grid">
          <ul className="contact__channels">
            <li data-reveal style={stagger(0)}>
              <span className="meta">Phone</span>
              <span>{CONTACT.phone}</span>
            </li>
            <li data-reveal style={stagger(1)}>
              <span className="meta">GitHub</span>
              <a className="link" href={CONTACT.github} target="_blank" rel="noreferrer">
                <GitHub size={14} /> {CONTACT.handle}
              </a>
            </li>
            <li data-reveal style={stagger(2)}>
              <span className="meta">LinkedIn</span>
              <a className="link" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                <LinkedIn size={14} /> abhinav1506
              </a>
            </li>
            <li data-reveal style={stagger(3)}>
              <span className="meta">Documents</span>
              <span className="contact__docs">
                <a className="link" href={RESUME_URL} target="_blank" rel="noreferrer">
                  Resume <ArrowUpRight size={12} />
                </a>
                <a className="link" href={CV_URL} target="_blank" rel="noreferrer">
                  Academic CV <ArrowUpRight size={12} />
                </a>
              </span>
            </li>
          </ul>

          <form className="form" onSubmit={submit} data-reveal style={stagger(1)}>
            <p className="meta form__title">Or leave a message here</p>
            <label>
              <span className="meta">Name</span>
              <input required autoComplete="name" {...field("name")} />
            </label>
            <label>
              <span className="meta">Email</span>
              <input required type="email" autoComplete="email" {...field("email")} />
            </label>
            <label>
              <span className="meta">Message</span>
              <textarea required rows={4} {...field("message")} />
            </label>
            <div className="form__foot">
              <button className="btn btn--on-accent btn--solid" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending" : "Send message"} <ArrowRight size={14} />
              </button>
              <p className={`form__status form__status--${status}`} aria-live="polite">
                {status === "sent" && "Sent. I'll reply by email."}
                {status === "error" && `That didn't go through. Please email ${CONTACT.email} directly.`}
              </p>
            </div>
          </form>
        </div>

        <footer className="colophon meta">
          <p>
            {CONTACT.name}, {new Date().getFullYear()}
          </p>
          <p>Set in Newsreader, Schibsted Grotesk and DM Mono</p>
          <p>
            React + Vite, build {__BUILD_SHA__} on {builtOn}
          </p>
          <a className="link" href="#top">
            Back to top <ArrowUp size={12} />
          </a>
        </footer>
      </div>
    </section>
  );
}
