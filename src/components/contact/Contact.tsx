import React, { useState } from "react";
import { CONTACT } from "../../data/portfolioData";
import { SectionHeader } from "../common/SectionHeader";
import { GlowButton } from "../common/GlowButton";
import {
  MailIcon,
  PhoneIcon,
  LinkedinIcon,
  GithubIcon,
  SendIcon,
  CheckCircleIcon,
  CloseIcon,
  CopyIcon,
} from "../common/Icons";

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(
        "Please complete all fields (name, email, message) before sending.",
      );
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT.email)}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
            _subject: `Portfolio Inquiry from ${form.name.trim()}`,
            _replyto: form.email.trim(),
            _template: "table",
          }).toString(),
        },
      );

      if (!response.ok) {
        throw new Error("Form submission returned an error status.");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    } catch {
      setError(
        "Unable to transmit message at this time. Please reach out directly to abhinavv1509@gmail.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "110px 24px",
        background: "rgba(10, 13, 20, 0.8)",
        borderTop: "1px solid var(--border-subtle)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeader
          index="06"
          eyebrow="COMMUNICATION PROTOCOL"
          title="Let's build something serious."
          subtitle="Whether discussing distributed backend systems, AI inference architectures, or full-stack software opportunities, my inbox is always open."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "48px",
            alignItems: "start",
          }}
          className="contact-grid-layout"
        >
          {/* Left Column: Direct Connection Channels & Terminal Badge */}
          <div>
            {/* Terminal Init Snippet */}
            <div
              className="cyber-panel corner-brackets scanline-subtle"
              style={{
                padding: "20px 22px",
                background: "rgba(14, 18, 26, 0.85)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "12px",
                marginBottom: "24px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                lineHeight: 1.65,
              }}
            >
              <div style={{ color: "var(--accent-cyan)", marginBottom: "4px" }}>
                &gt; initialize_connection()
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                [STATUS]:{" "}
                <span style={{ color: "var(--accent-emerald)" }}>
                  READY_FOR_COMMUNICATION
                </span>
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                [LOCATION]: Sydney, Australia [UTC+10]
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                [LATENCY]: &lt; 24h typical response
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {/* Email Card with 1-click Copy */}
              <div
                className="cyber-panel"
                style={{
                  padding: "16px 20px",
                  background: "rgba(14, 18, 26, 0.7)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <a
                  href={`mailto:${CONTACT.email}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "8px",
                      background: "rgba(56, 189, 248, 0.12)",
                      border: "1px solid rgba(56, 189, 248, 0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-blue)",
                    }}
                  >
                    <MailIcon size={17} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-tertiary">
                      PRIMARY_EMAIL
                    </div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "0.92rem",
                        color: "#FFFFFF",
                      }}
                    >
                      {CONTACT.email}
                    </div>
                  </div>
                </a>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "6px",
                    color: copiedEmail
                      ? "var(--accent-emerald)"
                      : "var(--text-secondary)",
                    cursor: "pointer",
                    padding: "6px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                  }}
                >
                  {copiedEmail ? (
                    <CheckCircleIcon size={14} />
                  ) : (
                    <CopyIcon size={14} />
                  )}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone Card */}
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="cyber-panel"
                style={{
                  padding: "16px 20px",
                  background: "rgba(14, 18, 26, 0.7)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "8px",
                    background: "rgba(168, 85, 247, 0.12)",
                    border: "1px solid rgba(168, 85, 247, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-purple)",
                  }}
                >
                  <PhoneIcon size={17} />
                </div>
                <div>
                  <div className="font-mono text-xs text-tertiary">
                    DIRECT_PHONE
                  </div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      color: "#FFFFFF",
                    }}
                  >
                    {CONTACT.phone}
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="cyber-panel"
                style={{
                  padding: "16px 20px",
                  background: "rgba(14, 18, 26, 0.7)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "8px",
                    background: "rgba(0, 229, 255, 0.12)",
                    border: "1px solid rgba(0, 229, 255, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-cyan)",
                  }}
                >
                  <LinkedinIcon size={17} />
                </div>
                <div>
                  <div className="font-mono text-xs text-tertiary">
                    PROFESSIONAL_NETWORK
                  </div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      color: "#FFFFFF",
                    }}
                  >
                    linkedin.com/in/abhinav1506
                  </div>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="cyber-panel"
                style={{
                  padding: "16px 20px",
                  background: "rgba(14, 18, 26, 0.7)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  <GithubIcon size={17} />
                </div>
                <div>
                  <div className="font-mono text-xs text-tertiary">
                    CODE_REPOSITORIES
                  </div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.92rem",
                      color: "#FFFFFF",
                    }}
                  >
                    github.com/Abhinav0915
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: High-Grade Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="cyber-panel corner-brackets"
              style={{
                padding: "32px 34px",
                background: "rgba(14, 18, 26, 0.85)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "14px",
              }}
            >
              <div
                className="font-mono text-xs uppercase"
                style={{
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.1em",
                  marginBottom: "20px",
                }}
              >
                // TRANSMIT_MESSAGE
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
                className="contact-form-grid"
              >
                <div>
                  <label
                    htmlFor="name-input"
                    className="font-mono text-xs"
                    style={{
                      display: "block",
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                    }}
                  >
                    IDENTIFIER / NAME *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe / Acme Corp"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "rgba(8, 9, 12, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent-cyan)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--border-subtle)")
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email-input"
                    className="font-mono text-xs"
                    style={{
                      display: "block",
                      color: "var(--text-secondary)",
                      marginBottom: "6px",
                    }}
                  >
                    RETURN_EMAIL *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="jane@company.com"
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      background: "rgba(8, 9, 12, 0.8)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent-cyan)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--border-subtle)")
                    }
                  />
                </div>
              </div>

              <div style={{ marginBottom: "22px" }}>
                <label
                  htmlFor="message-input"
                  className="font-mono text-xs"
                  style={{
                    display: "block",
                    color: "var(--text-secondary)",
                    marginBottom: "6px",
                  }}
                >
                  PROJECT_DETAILS / MESSAGE *
                </label>
                <textarea
                  id="message-input"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Outline your engineering project, role specifications, or technical query..."
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    background: "rgba(8, 9, 12, 0.8)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.92rem",
                    resize: "vertical",
                    outline: "none",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent-cyan)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-subtle)")
                  }
                />
              </div>

              <GlowButton
                variant="primary"
                size="lg"
                onClick={() => {}}
                icon={isSubmitting ? undefined : <SendIcon size={16} />}
                style={{ width: "100%" }}
              >
                {isSubmitting ? "Transmitting Packet..." : "Dispatch Message"}
              </GlowButton>

              {/* Feedback Toasts */}
              {sent && (
                <div
                  style={{
                    marginTop: "16px",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    background: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    color: "var(--accent-emerald)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.88rem",
                  }}
                >
                  <CheckCircleIcon size={16} />
                  <span>
                    Message delivered successfully. I will follow up via email
                    promptly.
                  </span>
                </div>
              )}

              {error && (
                <div
                  style={{
                    marginTop: "16px",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    color: "#EF4444",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.88rem",
                  }}
                >
                  <CloseIcon size={16} />
                  <span>{error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
