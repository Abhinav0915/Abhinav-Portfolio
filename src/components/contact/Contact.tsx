import React, { useState } from "react";
import { CONTACT } from "../../data/portfolioData";
import { EditorialButton } from "../common/EditorialButton";

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
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
        throw new Error("Transmission error.");
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    } catch {
      setError(
        "Transmission failed. Please reach out directly to abhinavv1509@gmail.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="editorial-container">
        {/* Editorial Closing Header */}
        <div style={{ marginBottom: "56px" }} className="scroll-reveal">
          <div
            className="font-mono text-xs uppercase"
            style={{
              color: "var(--accent-vermilion)",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            // 06 // INITIATE DIALOGUE
          </div>

          <h2
            className="font-display font-bold uppercase"
            style={{
              fontSize: "clamp(2.8rem, 7.5vw, 6.2rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "var(--ink-primary)",
              margin: "0 0 16px 0",
            }}
          >
            Have a project
            <br />
            worth building?
          </h2>

          <div
            className="font-display font-bold uppercase"
            style={{
              fontSize: "clamp(2.2rem, 5.5vw, 4.8rem)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "var(--accent-vermilion)",
              margin: 0,
            }}
          >
            Let's talk.
          </div>
        </div>

        {/* 2-Column Asymmetric Grid: Direct Details + Dispatch Form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "56px",
            alignItems: "start",
            borderTop: "1px solid var(--rule-hairline)",
            paddingTop: "40px",
          }}
          className="contact-editorial-layout"
        >
          {/* Left Column: Direct Inquiries */}
          <div className="scroll-reveal delay-1">
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--ink-secondary)",
                margin: "0 0 32px 0",
                maxWidth: "480px",
              }}
            >
              Whether you are discussing engineering opportunities, distributed
              backend architecture, explainable AI research, or consulting
              inquiries—my communication channel is open.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                style={{
                  borderBottom: "1px solid var(--rule-hairline)",
                  paddingBottom: "14px",
                }}
              >
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  PRIMARY_EMAIL
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "4px",
                  }}
                >
                  <a
                    href={`mailto:${CONTACT.email}`}
                    style={{
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      color: "var(--ink-primary)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--accent-vermilion)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--ink-primary)")
                    }
                  >
                    {CONTACT.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="font-mono text-xs"
                    style={{
                      background: "none",
                      border: "1px solid var(--rule-hairline)",
                      padding: "2px 8px",
                      cursor: "pointer",
                      color: copied
                        ? "var(--accent-vermilion)"
                        : "var(--ink-secondary)",
                    }}
                  >
                    {copied ? "[COPIED]" : "[COPY]"}
                  </button>
                </div>
              </div>

              <div
                style={{
                  borderBottom: "1px solid var(--rule-hairline)",
                  paddingBottom: "14px",
                }}
              >
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  TELEPHONE
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    color: "var(--ink-primary)",
                    marginTop: "4px",
                  }}
                >
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div
                style={{
                  borderBottom: "1px solid var(--rule-hairline)",
                  paddingBottom: "14px",
                }}
              >
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  GEOGRAPHIC_LOCATION
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    color: "var(--ink-primary)",
                    marginTop: "4px",
                  }}
                >
                  {CONTACT.location} [UTC+10]
                </div>
              </div>

              <div>
                <div
                  className="font-mono text-xs text-secondary"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  NETWORKS
                </div>
                <div
                  className="font-mono text-sm"
                  style={{ display: "flex", gap: "16px", marginTop: "6px" }}
                >
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noreferrer"
                    className="editorial-link"
                  >
                    GITHUB ↗
                  </a>
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="editorial-link"
                  >
                    LINKEDIN ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Live Transmission Telemetry Module */}
            <div
              className="crosshair-box"
              style={{
                marginTop: "28px",
                padding: "20px",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--rule-hairline)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                  paddingBottom: "10px",
                  borderBottom: "1px solid var(--rule-hairline)",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "10px",
                      height: "10px",
                    }}
                  >
                    <div className="radar-ping" />
                    <div
                      style={{
                        position: "absolute",
                        inset: "2px",
                        borderRadius: "50%",
                        backgroundColor: "var(--accent-vermilion)",
                      }}
                    />
                  </div>
                  <span
                    className="font-mono text-xs uppercase"
                    style={{
                      color: "var(--accent-vermilion)",
                      fontWeight: 700,
                    }}
                  >
                    TRANSMISSION NODE ONLINE
                  </span>
                </div>
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--ink-tertiary)" }}
                >
                  RTT ~14ms
                </span>
              </div>

              <div
                className="font-mono text-xs"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "7px",
                  color: "var(--ink-secondary)",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "var(--ink-muted)" }}>
                    NODE_ROUTING:
                  </span>
                  <span style={{ color: "var(--ink-primary)" }}>
                    SYD_AP_SOUTHEAST_2
                  </span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "var(--ink-muted)" }}>ENCRYPTION:</span>
                  <span style={{ color: "var(--ink-primary)" }}>
                    AES-256-GCM / SHA-256
                  </span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "var(--ink-muted)" }}>PROTOCOL:</span>
                  <span style={{ color: "var(--ink-primary)" }}>
                    HTTPS / TLSv1.3 PERSISTENT
                  </span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <span style={{ color: "var(--ink-muted)" }}>
                    RESPONSE_SLA:
                  </span>
                  <span
                    style={{
                      color: "var(--accent-vermilion)",
                      fontWeight: 600,
                    }}
                  >
                    &lt; 24 HOURS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sharp Publication Contact Form */}
          <div
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--rule-hairline)",
              padding: "36px",
            }}
            className="contact-form-box scroll-reveal-scale delay-2"
          >
            <div
              className="font-mono text-xs uppercase"
              style={{
                color: "var(--accent-vermilion)",
                fontWeight: 600,
                marginBottom: "20px",
              }}
            >
              // DISPATCH_TRANSMISSION
            </div>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-mono text-xs uppercase"
                  style={{
                    display: "block",
                    color: "var(--ink-secondary)",
                    marginBottom: "6px",
                  }}
                >
                  YOUR NAME / AFFILIATION *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Jane Doe, Principal Engineer"
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--rule-hairline)",
                    borderRadius: "0px",
                    color: "var(--ink-primary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--ink-primary)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--rule-hairline)")
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="font-mono text-xs uppercase"
                  style={{
                    display: "block",
                    color: "var(--ink-secondary)",
                    marginBottom: "6px",
                  }}
                >
                  YOUR EMAIL ADDRESS *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. jane@organization.com"
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--rule-hairline)",
                    borderRadius: "0px",
                    color: "var(--ink-primary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--ink-primary)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--rule-hairline)")
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="font-mono text-xs uppercase"
                  style={{
                    display: "block",
                    color: "var(--ink-secondary)",
                    marginBottom: "6px",
                  }}
                >
                  TRANSMISSION MESSAGE *
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Detail your engineering specifications, role proposal, or research query..."
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--rule-hairline)",
                    borderRadius: "0px",
                    color: "var(--ink-primary)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "vertical",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--ink-primary)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--rule-hairline)")
                  }
                />
              </div>

              <EditorialButton
                variant="vermilion"
                size="md"
                arrow="right"
                type="submit"
                style={{ width: "100%" }}
              >
                {isSubmitting ? "DISPATCHING PACKET..." : "TRANSMIT MESSAGE"}
              </EditorialButton>

              {sent && (
                <div
                  className="font-mono text-xs"
                  style={{
                    padding: "10px",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--accent-vermilion)",
                    color: "var(--accent-vermilion)",
                  }}
                >
                  ✓ MESSAGE RECEIVED. I WILL REPLY PROMPTLY.
                </div>
              )}

              {error && (
                <div
                  className="font-mono text-xs"
                  style={{
                    padding: "10px",
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid #DC2626",
                    color: "#DC2626",
                  }}
                >
                  ✕ {error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-editorial-layout { grid-template-columns: 1fr !important; gap: 36px !important; }
          .contact-form-box { padding: 24px !important; }
        }
      `}</style>
    </section>
  );
};
