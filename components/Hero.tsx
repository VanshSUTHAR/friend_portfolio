"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { resume } from "@/lib/data";
import { ArrowRight, Download, MapPin, ChevronDown } from "lucide-react";

const GithubIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

// Animated typewriter words
const ROLES = ["Data Analyst", "BI Developer", "SQL Specialist", "Python Developer", "CS Undergraduate"];

function TypeWriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    } else {
      timeout = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 50 : 90
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <span style={{ color: "var(--accent)" }}>
      {text}
      <span className="animate-blink" style={{ borderRight: "2px solid var(--accent)", marginLeft: 2 }} />
    </span>
  );
}

// Floating analytics widget on the right side
function AnalyticsWidget() {
  const bars = [0.72, 0.55, 0.88, 0.63, 0.91, 0.74, 0.82];
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="animate-float"
      style={{
        width: "100%",
        maxWidth: 420,
        background: "var(--card)",
        backdropFilter: "blur(24px)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        padding: "1.5rem",
        boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* top glow */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: 150, height: 150,
        borderRadius: "50%",
        background: "var(--accent-glow)",
        filter: "blur(50px)",
        pointerEvents: "none",
      }} />

      {/* Window dots */}
      <div style={{ display: "flex", gap: 6, marginBottom: "1rem" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)" }}>analytics_dashboard.py</span>
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
        {[
          { label: "Dashboards", value: "12+", color: "var(--accent)" },
          { label: "SQL Queries", value: "500+", color: "#10b981" },
          { label: "Accuracy", value: "99.8%", color: "#f97316" },
        ].map((s) => (
          <div key={s.label} style={{
            background: "rgba(var(--particle-color),0.04)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: "0.6rem",
            textAlign: "center",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: s.color }}>{s.value}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--text-muted)", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div style={{ marginBottom: "0.5rem" }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 60 }}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.8 + i * 0.07, duration: 0.5, ease: "easeOut" }}
              style={{
                flex: 1,
                height: `${h * 100}%`,
                borderRadius: "4px 4px 0 0",
                background: i === 4
                  ? "var(--accent)"
                  : `rgba(var(--particle-color),0.25)`,
                transformOrigin: "bottom",
                boxShadow: i === 4 ? "0 0 12px var(--accent-glow)" : "none",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
          {labels.map((l) => (
            <div key={l} style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "var(--text-muted)" }}>{l}</div>
          ))}
        </div>
      </div>

      {/* Status row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0.75rem",
        background: "rgba(16,185,129,0.06)",
        border: "1px solid rgba(16,185,129,0.15)",
        borderRadius: 8,
        marginTop: "0.75rem",
      }}>
        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", flexShrink: 0, animation: "pulse-glow 2s infinite" }} />
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#10b981" }}>Pipeline active — 0 errors detected</span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } as object },
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "7rem 0 4rem",
      }}
    >
      {/* Background grid */}
      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />

      {/* Ambient orbs */}
      <div className="orb" style={{ top: "-10%", left: "-8%", width: 600, height: 600, background: "var(--accent-glow)", opacity: 0.3 }} />
      <div className="orb" style={{ bottom: "-10%", right: "-5%", width: 450, height: 450, background: "var(--accent-dim)", opacity: 0.4 }} />

      <div className="container-main" style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
          className="hero-grid"
        >
          {/* Left column — text */}
          {mounted && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <div className="section-kicker">
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "pulse-glow 2s infinite" }} />
                  Open to Opportunities
                </div>
              </motion.div>

              {/* Name */}
              <motion.div variants={itemVariants}>
                <h1
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    lineHeight: 1.02,
                    letterSpacing: "-0.03em",
                    color: "var(--text)",
                  }}
                >
                  {resume.name.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      style={{ display: "block" }}
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {i === 1 ? (
                        <span className="text-gradient">{word}</span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>

              {/* Typewriter role */}
              <motion.div variants={itemVariants}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                    color: "var(--text-dim)",
                  }}
                >
                  I&apos;m a{" "}
                  {mounted && <TypeWriter />}
                </p>
              </motion.div>

              {/* Summary */}
              <motion.p
                variants={itemVariants}
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  fontSize: "0.97rem",
                  maxWidth: 500,
                }}
              >
                {resume.overview}
              </motion.p>

              {/* Location */}
              <motion.div variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <MapPin size={14} color="var(--accent)" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  {resume.location}
                </span>
              </motion.div>

              {/* CTA buttons */}
              <motion.div variants={itemVariants} className="hero-cta-row">
                <a href="#projects" className="btn-accent" data-cursor-hover>
                  View Projects <ArrowRight size={15} />
                </a>
                <a href="#contact" className="btn-outline" data-cursor-hover>
                  Get in Touch
                </a>
                <a
                  href="/Heeya_Dadhalwala.pdf"
                  download="Heeya_Dadhalwala_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  data-cursor-hover
                  style={{ gap: "0.4rem" }}
                >
                  <Download size={14} /> Resume
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Connect
                </span>
                <div style={{ width: 28, height: 1, background: "var(--border)" }} />
                {[
                  { Icon: LinkedinIcon, href: resume.linkedin, label: "LinkedIn" },
                  { Icon: GithubIcon, href: "https://github.com", label: "GitHub" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    data-cursor-hover
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      border: "1px solid var(--border)",
                      background: "var(--card)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-dim)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                      (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "var(--text-dim)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.background = "var(--card)";
                    }}
                  >
                    <Icon width={16} height={16} />
                  </a>
                ))}
              </motion.div>

              {/* Tech chips */}
              <motion.div variants={itemVariants} style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {resume.heroChips.map((chip) => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* Right column — widget */}
          <div style={{ display: "flex", justifyContent: "center" }} className="hero-widget">
            <AnalyticsWidget />
          </div>
          {/* Mobile-only widget (shown below text on small screens) */}
          <div className="hero-widget-mobile" style={{ display: "none", justifyContent: "center" }}>
            <AnalyticsWidget />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            position: "absolute",
            bottom: "-3rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase" }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} color="var(--accent)" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .hero-cta-row {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-widget { display: none !important; }
          .hero-widget-mobile { display: flex !important; }
        }
        @media (max-width: 480px) {
          .hero-cta-row { flex-direction: column; gap: 0.6rem; }
          .hero-cta-row .btn-accent,
          .hero-cta-row .btn-outline { width: 100%; justify-content: center; text-align: center; }
        }
      `}</style>
    </section>
  );
}
