"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resume } from "@/lib/data";
import { ExternalLink, BarChart3, Terminal, Database, Filter } from "lucide-react";

const GithubIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CATEGORIES = ["All", "Analytics & BI", "Python & AI", "Web Dev"];

function getCategory(tools: string[]): string {
  const t = tools.map((x) => x.toLowerCase());
  if (t.some((x) => ["power bi", "qlik sense", "dashboard design", "dax"].includes(x))) return "Analytics & BI";
  if (t.includes("django") || t.includes("react.js")) return "Web Dev";
  if (t.includes("python") || t.includes("speech recognition")) return "Python & AI";
  return "All";
}

function ProjectVisual({ cat, title }: { cat: string; title: string }) {
  if (cat === "Analytics & BI") {
    const bars = [0.6, 0.85, 0.5, 0.9, 0.7, 0.95, 0.65];
    return (
      <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 70, padding: "0 0.5rem" }}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
            style={{
              flex: 1,
              height: `${h * 100}%`,
              background: i === 3 || i === 5 ? "var(--accent)" : "rgba(var(--particle-color),0.2)",
              borderRadius: "4px 4px 0 0",
              transformOrigin: "bottom",
              boxShadow: (i === 3 || i === 5) ? "0 0 10px var(--accent-glow)" : "none",
            }}
          />
        ))}
      </div>
    );
  }
  if (cat === "Python & AI") {
    return (
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: "0.65rem", lineHeight: 1.8,
        color: "var(--accent)", padding: "0.5rem 0",
      }}>
        <div style={{ color: "var(--text-muted)" }}>$ python jarvis.py --listen</div>
        <div>{">"} Initializing voice engine...</div>
        <div>{">"} Speech module <span style={{ color: "#10b981" }}>READY</span></div>
        <div style={{ display: "flex", gap: 3 }}>
          {[40, 60, 30, 80, 50, 70].map((h, i) => (
            <div key={i} style={{
              width: 3, height: h * 0.7,
              background: "var(--accent)",
              borderRadius: 2,
              animation: `float ${0.6 + i * 0.15}s ease-in-out infinite alternate`,
            }} />
          ))}
        </div>
      </div>
    );
  }
  // Web Dev
  return (
    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", lineHeight: 1.7, color: "var(--text-muted)" }}>
      <div><span style={{ color: "#8b5cf6" }}>POST</span> /api/articles <span style={{ color: "#10b981" }}>201</span></div>
      <div><span style={{ color: "var(--accent)" }}>GET</span> /api/trends?category=tech <span style={{ color: "#10b981" }}>200</span></div>
      <div style={{ marginTop: 6, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
        <div style={{ border: "1px solid var(--border)", borderRadius: 4, padding: "0.3rem", fontSize: "0.6rem" }}>tbl_articles</div>
        <div style={{ border: "1px solid var(--border)", borderRadius: 4, padding: "0.3rem", fontSize: "0.6rem" }}>tbl_trends</div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = resume.projects.filter((p) => {
    if (filter === "All") return true;
    return getCategory(p.tools) === filter;
  });

  return (
    <section id="projects" className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <div className="section-kicker">Showcase</div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.25rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em" }}>
              Things I&apos;ve <span className="text-gradient">built.</span>
            </h2>

            {/* Filter tabs */}
            <div style={{
              display: "flex",
              gap: "0.3rem",
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 50,
              padding: "0.3rem",
              backdropFilter: "blur(12px)",
            }}>
              <Filter size={13} color="var(--text-muted)" style={{ margin: "auto 0.3rem" }} />
              {CATEGORIES.map((cat) => {
                const isActive = filter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    data-cursor-hover
                    style={{
                      position: "relative",
                      padding: "0.35rem 0.9rem",
                      borderRadius: 50,
                      border: "none",
                      background: isActive ? "var(--accent)" : "transparent",
                      color: isActive ? "var(--bg)" : "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => {
              const cat = getCategory(p.tools);
              return (
                <motion.div
                  key={p.num}
                  layout
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.35 }}
                  className="glass"
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Visual header */}
                  <div style={{
                    padding: "1.5rem 1.5rem 1rem",
                    borderBottom: "1px solid var(--border)",
                    background: "rgba(var(--particle-color),0.03)",
                    minHeight: 130,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)" }}>{p.num}</span>
                      <span style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--accent)",
                        background: "var(--accent-dim)",
                        padding: "0.2rem 0.6rem",
                        borderRadius: 99,
                        border: "1px solid rgba(var(--particle-color),0.15)",
                      }}>
                        {cat}
                      </span>
                    </div>
                    <ProjectVisual cat={cat} title={p.title} />
                  </div>

                  {/* Body */}
                  <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.85rem", flex: 1 }}>
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      lineHeight: 1.3,
                      transition: "color 0.2s",
                    }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                    >
                      {p.title}
                    </h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.68, flex: 1 }}>
                      {p.desc}
                    </p>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                      {p.tools.map((t) => (
                        <span key={t} className="chip" style={{ fontSize: "0.68rem" }}>{t}</span>
                      ))}
                    </div>

                    {/* Links */}
                    <div style={{ display: "flex", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
                      <a
                        href={p.github || resume.github || "https://github.com/heeya2704"}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-hover
                        style={{
                          display: "flex", alignItems: "center", gap: "0.35rem",
                          fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                          color: "var(--text-muted)", textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                      >
                        <GithubIcon width={14} height={14} /> Code
                      </a>
                      <a
                        href="#contact"
                        data-cursor-hover
                        style={{
                          display: "flex", alignItems: "center", gap: "0.35rem",
                          fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                          color: "var(--text-muted)", textDecoration: "none",
                          marginLeft: "auto",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                      >
                        Demo <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
