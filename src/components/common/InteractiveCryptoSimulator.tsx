import React, { useState } from "react";
import { playMechanicalClick } from "../../utils/audio";

export const InteractiveCryptoSimulator: React.FC = () => {
  const [payloadText, setPayloadText] = useState(
    '{"tx_id": "TX_8402_AU", "amount": 8450.00, "currency": "AUD", "status": "APPROVED"}'
  );
  const [aesKeyHex, setAesKeyHex] = useState("d4a179e8c3b015f92e88a45bc0731fca6914ed0b28e5743a1998f4cd17a02c91");
  const [ivHex, setIvHex] = useState("9a8b7c6d5e4f3a2b1c0d9e8f");
  const [ciphertextHex, setCiphertextHex] = useState("4b8e1f0a2c9d7e3f6a8b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f");
  const [authTagHex, setAuthTagHex] = useState("e4f901ab8c32d5e718bc9901452a1b9f");
  const [viewMode, setViewMode] = useState<"lab" | "code">("lab");
  const [copied, setCopied] = useState(false);

  const generateNewEnvelope = () => {
    playMechanicalClick("confirm");
    // Generate pseudo-random realistic hex streams for the demo
    const hex = (len: number) =>
      Array.from({ length: len }, () => Math.floor(Math.random() * 16).toString(16)).join("");

    setAesKeyHex(hex(64)); // 256 bits = 64 hex chars
    setIvHex(hex(24));     // 96 bits = 24 hex chars
    setCiphertextHex(hex(Math.max(48, payloadText.length * 2)));
    setAuthTagHex(hex(32)); // 128 bits = 32 hex chars
  };

  const copyEnvelope = () => {
    const envelope = JSON.stringify(
      {
        protocol: "AES-256-GCM + RSA-2048",
        encrypted_session_key: aesKeyHex.slice(0, 32) + "...[RSA-2048-ENCRYPTED]",
        iv_nonce: ivHex,
        ciphertext: ciphertextHex,
        auth_tag: authTagHex,
        integrity_status: "HMAC_VERIFIED",
      },
      null,
      2
    );
    navigator.clipboard.writeText(envelope);
    playMechanicalClick("tap");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        border: "1px solid var(--rule-hairline)",
        backgroundColor: "var(--bg-secondary)",
        padding: "20px",
        marginTop: "24px",
      }}
      className="crypto-sim-box"
    >
      {/* Header Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
          borderBottom: "1px solid var(--rule-hairline)",
          paddingBottom: "12px",
          marginBottom: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#10B981",
              boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
            }}
          />
          <span className="font-mono text-xs uppercase" style={{ color: "var(--ink-primary)", fontWeight: 700 }}>
            PRODIGIDESK // HYBRID AES-256-GCM + RSA-2048 CRYPTOGRAPHIC LAB
          </span>
        </div>

        <button
          type="button"
          onClick={() => {
            playMechanicalClick("toggle");
            setViewMode(viewMode === "lab" ? "code" : "lab");
          }}
          className="font-mono text-xs uppercase"
          style={{
            background: "none",
            border: "1px solid var(--rule-hairline)",
            padding: "3px 8px",
            color: "var(--accent-vermilion)",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          {viewMode === "lab" ? "VIEW PYTHON CRYPTO SPECS [</>]" : "VIEW SIMULATOR [LAB]"}
        </button>
      </div>

      {viewMode === "code" ? (
        <div
          className="font-mono"
          style={{
            fontSize: "0.78rem",
            backgroundColor: "var(--bg-surface)",
            padding: "16px",
            border: "1px solid var(--rule-hairline)",
            color: "var(--ink-primary)",
            lineHeight: 1.6,
            overflowX: "auto",
          }}
        >
          <div style={{ color: "var(--ink-tertiary)", marginBottom: "8px" }}>
            # Esprit Analytique & ProdigiDesk: Hybrid Cryptographic Envelope Engine
          </div>
          <div><span style={{ color: "var(--accent-vermilion)" }}>from</span> cryptography.hazmat.primitives.ciphers.aead <span style={{ color: "var(--accent-vermilion)" }}>import</span> AESGCM</div>
          <div><span style={{ color: "var(--accent-vermilion)" }}>from</span> cryptography.hazmat.primitives.asymmetric <span style={{ color: "var(--accent-vermilion)" }}>import</span> padding</div>
          <div><span style={{ color: "var(--accent-vermilion)" }}>import</span> os, json</div>
          <br />
          <div><span style={{ color: "var(--accent-vermilion)" }}>def</span> <span style={{ fontWeight: 700 }}>encrypt_transaction_envelope</span>(payload_dict, rsa_public_key):</div>
          <div style={{ paddingLeft: "16px", color: "var(--ink-secondary)" }}># 1. Ephemeral 256-bit AES symmetric key + 96-bit IV nonce</div>
          <div style={{ paddingLeft: "16px" }}>aes_key = AESGCM.generate_key(bit_length=256)</div>
          <div style={{ paddingLeft: "16px" }}>iv_nonce = os.urandom(12)</div>
          <br />
          <div style={{ paddingLeft: "16px", color: "var(--ink-secondary)" }}># 2. AES-256-GCM encryption with built-in authenticated tag</div>
          <div style={{ paddingLeft: "16px" }}>aesgcm = AESGCM(aes_key)</div>
          <div style={{ paddingLeft: "16px" }}>ciphertext = aesgcm.encrypt(iv_nonce, json.dumps(payload_dict).encode(), None)</div>
          <br />
          <div style={{ paddingLeft: "16px", color: "var(--ink-secondary)" }}># 3. RSA-2048 OAEP asymmetric key encapsulation</div>
          <div style={{ paddingLeft: "16px" }}>wrapped_key = rsa_public_key.encrypt(aes_key, padding.OAEP(mgf=padding.MGF1(hashes.SHA256()), algorithm=hashes.SHA256(), label=None))</div>
          <div style={{ paddingLeft: "16px" }}>return {"{"}&quot;wrapped_key&quot;: wrapped_key.hex(), &quot;iv&quot;: iv_nonce.hex(), &quot;ciphertext&quot;: ciphertext.hex(){"}"}</div>
        </div>
      ) : (
        <div>
          {/* Payload Input */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
              <span className="font-mono text-xs" style={{ color: "var(--ink-secondary)" }}>
                TRANSACTION_PLAINTEXT_PAYLOAD:
              </span>
              <span className="font-mono text-xs" style={{ color: "var(--ink-tertiary)" }}>
                {payloadText.length} BYTES
              </span>
            </div>
            <textarea
              value={payloadText}
              onChange={(e) => setPayloadText(e.target.value)}
              rows={2}
              style={{
                width: "100%",
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--rule-hairline)",
                color: "var(--ink-primary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                padding: "8px 12px",
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "10px", marginBottom: "18px" }}>
            <button
              type="button"
              onClick={generateNewEnvelope}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                backgroundColor: "var(--accent-vermilion)",
                color: "#FFFFFF",
                border: "none",
                padding: "6px 14px",
                cursor: "pointer",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>⚡</span>
              <span>GENERATE NEW ENVELOPE</span>
            </button>

            <button
              type="button"
              onClick={copyEnvelope}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                backgroundColor: "transparent",
                color: "var(--ink-primary)",
                border: "1px solid var(--rule-hairline)",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              {copied ? "[ COPIED JSON ]" : "[ COPY ENVELOPE JSON ]"}
            </button>
          </div>

          {/* Cryptographic Pipeline Output Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
            }}
            className="crypto-grid"
          >
            <div style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--rule-hairline)", padding: "10px" }}>
              <div style={{ color: "var(--accent-vermilion)", marginBottom: "4px", fontWeight: 700 }}>
                1. AES-256 SESSION KEY (256-BIT)
              </div>
              <div style={{ color: "var(--ink-secondary)", wordBreak: "break-all" }}>
                {aesKeyHex}
              </div>
            </div>

            <div style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--rule-hairline)", padding: "10px" }}>
              <div style={{ color: "var(--accent-vermilion)", marginBottom: "4px", fontWeight: 700 }}>
                2. GCM IV NONCE (96-BIT)
              </div>
              <div style={{ color: "var(--ink-secondary)", wordBreak: "break-all" }}>
                {ivHex}
              </div>
            </div>

            <div style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--rule-hairline)", padding: "10px" }}>
              <div style={{ color: "var(--accent-vermilion)", marginBottom: "4px", fontWeight: 700 }}>
                3. CIPHERTEXT HEX STREAM
              </div>
              <div style={{ color: "var(--ink-secondary)", wordBreak: "break-all" }}>
                {ciphertextHex.slice(0, 56)}...
              </div>
            </div>

            <div style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--rule-hairline)", padding: "10px" }}>
              <div style={{ color: "#10B981", marginBottom: "4px", fontWeight: 700 }}>
                4. GCM AUTH TAG // INTEGRITY
              </div>
              <div style={{ color: "var(--ink-secondary)", wordBreak: "break-all" }}>
                {authTagHex} [MAC_PASS]
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .crypto-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
