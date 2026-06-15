"use client";
import { motion } from "framer-motion";
import { GitFork, Star, Activity, Code } from "lucide-react";

const GithubIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Simulated GitHub contribution grid
function ContributionGrid() {
  // 52 weeks × 7 days
  const weeks = Array.from({ length: 52 }, (_, wi) =>
    Array.from({ length: 7 }, (_, di) => {
      const seed = (wi * 7 + di) * 17 + 3;
      const rand = ((seed * 9301 + 49297) % 233280) / 233280;
      if (rand > 0.65) return 4;
      if (rand > 0.45) return 3;
      if (rand > 0.3) return 2;
      if (rand > 0.15) return 1;
      return 0;
    })
  );

  const getColor = (level: number) => {
    if (level === 0) return "var(--border)";
    const opacity = level * 0.22 + 0.12;
    return `rgba(var(--particle-color),${opacity})`;
  };

  return (
    <div style={{ display: "flex", gap: 3, overflowX: "auto", paddingBottom: 4 }}>
      {weeks.map((week, wi) => (
        <div key={wi} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {week.map((level, di) => (
            <div
              key={di}
              style={{
                width: 11,
                height: 11,
                borderRadius: 3,
                background: getColor(level),
                border: level > 0 ? "1px solid rgba(var(--particle-color),0.15)" : "1px solid var(--border)",
                flexShrink: 0,
                boxShadow: level === 4 ? "0 0 4px var(--accent-glow)" : "none",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

const LANGS = [
  { name: "Python", pct: 42, color: "#3572a5" },
  { name: "SQL", pct: 28, color: "#e38c00" },
  { name: "JavaScript", pct: 14, color: "#f1e05a" },
  { name: "HTML/CSS", pct: 10, color: "#e34c26" },
  { name: "Other", pct: 6, color: "var(--text-muted)" },
];

export default function GitHubSection() {
  return (
    <section id="github" className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <div className="section-kicker">
            <GithubIcon width={14} height={14} />
            GitHub Activity
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em" }}>
            Coding <span className="text-gradient">footprint.</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="github-grid">
          {/* Contribution graph */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ gridColumn: "span 2", borderRadius: 20, padding: "2rem" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem" }}>Contribution Activity</h3>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>Last 12 months</span>
            </div>
            <ContributionGrid />
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.75rem", justifyContent: "flex-end" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--text-muted)" }}>Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <div key={l} style={{
                  width: 11, height: 11, borderRadius: 3,
                  background: l === 0 ? "var(--border)" : `rgba(var(--particle-color),${l * 0.22 + 0.12})`,
                }} />
              ))}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--text-muted)" }}>More</span>
            </div>
          </motion.div>

          {/* Stats */}
          {[
            { Icon: Activity, label: "Total Commits", value: "340+", color: "var(--accent)" },
            { Icon: Code, label: "Repositories", value: "12+", color: "#10b981" },
            { Icon: GitFork, label: "Pull Requests", value: "28+", color: "#8b5cf6" },
            { Icon: Star, label: "Stars Earned", value: "15+", color: "#f59e0b" },
          ].map(({ Icon, label, value, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass"
              style={{ borderRadius: 16, padding: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}
              whileHover={{ y: -3 }}
            >
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: `${color}18`, border: `1px solid ${color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Icon size={18} color={color} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "1.6rem", color, lineHeight: 1 }}>{value}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", marginTop: 3 }}>{label}</div>
              </div>
            </motion.div>
          ))}

          {/* Language bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass"
            style={{ gridColumn: "span 2", borderRadius: 20, padding: "2rem" }}
          >
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", marginBottom: "1.25rem" }}>Most Used Languages</h3>
            <div style={{ display: "flex", height: 12, borderRadius: 99, overflow: "hidden", marginBottom: "1rem", gap: 2 }}>
              {LANGS.map((l) => (
                <motion.div
                  key={l.name}
                  initial={{ flex: 0 }}
                  whileInView={{ flex: l.pct }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ background: l.color, borderRadius: 99 }}
                />
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
              {LANGS.map((l) => (
                <div key={l.name} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.color }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
                    {l.name} <span style={{ color: "var(--text-dim)" }}>{l.pct}%</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .github-grid { grid-template-columns: 1fr !important; }
          .github-grid > * { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
