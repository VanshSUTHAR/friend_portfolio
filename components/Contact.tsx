"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resume } from "@/lib/data";
import { Mail, Phone, MapPin, Copy, Check, Send, Loader2 } from "lucide-react";

const LinkedinIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

type Status = "idle" | "sending" | "success";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(resume.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 2000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1.1rem",
    background: "rgba(var(--particle-color),0.03)",
    border: "1px solid var(--border)",
    borderRadius: 12,
    color: "var(--text)",
    fontFamily: "var(--font-sans)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "0.65rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    color: "var(--text-muted)",
    display: "block",
    marginBottom: "0.45rem",
  };

  return (
    <section id="contact" className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <div className="section-kicker">Get in Touch</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em" }}>
            Let&apos;s build <span className="text-gradient">something great.</span>
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 520, lineHeight: 1.75, fontSize: "0.97rem" }}>
            I&apos;m currently open to internships, analytics projects, and full-time roles in data analytics and BI development. Drop me a message!
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "2rem", alignItems: "start" }} className="contact-grid">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Email card */}
            <div className="glass" style={{ borderRadius: 16, padding: "1.25rem 1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: "var(--accent-dim)", border: "1px solid rgba(var(--particle-color),0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Mail size={16} color="var(--accent)" />
                  </div>
                  <div>
                    <div style={{ ...labelStyle, marginBottom: 2 }}>Email</div>
                    <a href={`mailto:${resume.email}`} style={{ fontSize: "0.82rem", color: "var(--text)", textDecoration: "none" }}>
                      {resume.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  data-cursor-hover
                  title="Copy email"
                  style={{
                    width: 32, height: 32, borderRadius: 8,
                    border: "1px solid var(--border)",
                    background: "transparent",
                    color: copied ? "#10b981" : "var(--text-muted)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="glass" style={{ borderRadius: 16, padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Phone size={16} color="#10b981" />
              </div>
              <div>
                <div style={{ ...labelStyle, marginBottom: 2 }}>Phone</div>
                <a href={`tel:${resume.phone}`} style={{ fontSize: "0.82rem", color: "var(--text)", textDecoration: "none" }}>
                  {resume.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="glass" style={{ borderRadius: 16, padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <MapPin size={16} color="#8b5cf6" />
              </div>
              <div>
                <div style={{ ...labelStyle, marginBottom: 2 }}>Location</div>
                <span style={{ fontSize: "0.82rem", color: "var(--text)" }}>{resume.location}</span>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="glass"
              style={{
                borderRadius: 16, padding: "1.25rem 1.5rem",
                display: "flex", alignItems: "center", gap: "0.85rem",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <LinkedinIcon width={16} height={16} color="#3b82f6" />
              </div>
              <div>
                <div style={{ ...labelStyle, marginBottom: 2 }}>LinkedIn</div>
                <span style={{ fontSize: "0.82rem", color: "var(--text)" }}>View Profile →</span>
              </div>
            </a>

            {/* Availability badge */}
            <div style={{
              display: "flex", alignItems: "center", gap: "0.6rem",
              padding: "0.75rem 1.25rem",
              background: "rgba(16,185,129,0.06)",
              border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: 12,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", animation: "pulse-glow 2s infinite", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#10b981" }}>
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="glass"
            style={{ borderRadius: 24, padding: "2.25rem", position: "relative", overflow: "hidden" }}
          >
            <div style={{
              position: "absolute", top: -40, right: -40,
              width: 160, height: 160,
              borderRadius: "50%",
              background: "var(--accent-glow)",
              filter: "blur(50px)",
              pointerEvents: "none",
            }} />

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem", position: "relative", zIndex: 1 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input
                    required
                    style={inputStyle}
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.background = "var(--accent-dim)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.background = "rgba(var(--particle-color),0.03)";
                    }}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    required
                    type="email"
                    style={inputStyle}
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.background = "var(--accent-dim)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.background = "rgba(var(--particle-color),0.03)";
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  style={inputStyle}
                  placeholder="How can I help?"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.background = "var(--accent-dim)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "rgba(var(--particle-color),0.03)";
                  }}
                />
              </div>

              <div>
                <label style={labelStyle}>Message *</label>
                <textarea
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: "none" }}
                  placeholder="Tell me about the opportunity or project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.background = "var(--accent-dim)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "rgba(var(--particle-color),0.03)";
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                data-cursor-hover
                className="btn-accent"
                style={{ width: "100%", justifyContent: "center", opacity: status !== "idle" ? 0.8 : 1 }}
              >
                {status === "idle" && <><Send size={15} /> Send Message</>}
                {status === "sending" && <><Loader2 size={15} className="animate-spin" style={{ animation: "spin-slow 1s linear infinite" }} /> Sending...</>}
                {status === "success" && <>✓ Message Sent!</>}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      textAlign: "center",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "#10b981",
                      padding: "0.6rem",
                      background: "rgba(16,185,129,0.06)",
                      border: "1px solid rgba(16,185,129,0.2)",
                      borderRadius: 10,
                    }}
                  >
                    Thank you! I&apos;ll reply within 24 hours.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
