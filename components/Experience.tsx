"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { resume } from "@/lib/data";
import { Briefcase, MapPin, Calendar, ChevronRight } from "lucide-react";

const EXTRA_TIMELINE = [
  {
    role: "SQL Concepts Training",
    company: "Oracle Database",
    type: "Certification",
    duration: "Sathish Yellanki",
    points: [
      "Deep-dived into relational schema models and query optimization workflows",
      "Mastered complex JOIN structures, nested subqueries, and aggregate metrics",
      "Implemented database constraints, indexes, and trigger operations",
    ],
  },
  {
    role: "Smart Bridge IoT Project",
    company: "Academic Project",
    type: "Project",
    duration: "Sensor-based Crowd Control System",
    points: [
      "Collaborated on designing a sensor-based crowd control hardware-software interface",
      "Configured real-time sensor node data feeds and alert systems",
      "Applied data filtering models to optimize dashboard triggers",
    ],
  },
];

const ALL_EXPERIENCE = [
  ...resume.experience,
  ...EXTRA_TIMELINE,
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <div className="section-kicker">Timeline</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em" }}>
            Where I&apos;ve <span className="text-gradient">focused &amp; worked.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} style={{ position: "relative", paddingLeft: "2.5rem" }}>
          {/* Static track */}
          <div style={{
            position: "absolute",
            left: 8,
            top: 6,
            bottom: 6,
            width: 2,
            background: "var(--border)",
            borderRadius: 99,
          }} />

          {/* Animated fill */}
          <motion.div
            style={{
              position: "absolute",
              left: 8,
              top: 6,
              width: 2,
              background: "linear-gradient(to bottom, var(--accent), rgba(var(--particle-color),0.3))",
              borderRadius: 99,
              scaleY,
              transformOrigin: "top",
              bottom: 6,
              boxShadow: "0 0 8px var(--accent-glow)",
            }}
          />

          {/* Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {ALL_EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                style={{ position: "relative" }}
              >
                {/* Node */}
                <div style={{
                  position: "absolute",
                  left: -30,
                  top: 20,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "var(--bg)",
                  border: `2px solid ${i === 0 ? "var(--accent)" : "var(--border)"}`,
                  zIndex: 2,
                  boxShadow: i === 0 ? "0 0 10px var(--accent-glow)" : "none",
                }}>
                  {i === 0 && (
                    <div style={{
                      position: "absolute",
                      inset: 2,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      animation: "pulse-glow 2s infinite",
                    }} />
                  )}
                </div>

                {/* Card */}
                <div
                  className="glass"
                  style={{
                    borderRadius: 20,
                    padding: "2rem",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateX(4px)";
                    el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = "translateX(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Left accent bar */}
                  {i === 0 && (
                    <div style={{
                      position: "absolute",
                      left: 0, top: 0, bottom: 0, width: 3,
                      background: "linear-gradient(to bottom, var(--accent), transparent)",
                      borderRadius: "20px 0 0 20px",
                    }} />
                  )}

                  {/* Header row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.25rem" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.2rem" }}>
                        <Briefcase size={14} color="var(--accent)" />
                        <span style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.65rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "var(--accent)",
                          background: "var(--accent-dim)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: 99,
                          border: "1px solid rgba(var(--particle-color),0.15)",
                        }}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.15rem", marginBottom: "0.15rem" }}>
                        {exp.role}
                      </h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-dim)", fontSize: "0.85rem" }}>
                        <MapPin size={12} color="var(--text-muted)" />
                        {exp.company}
                      </div>
                    </div>

                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.4rem 0.9rem",
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      borderRadius: 99,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      whiteSpace: "nowrap",
                    }}>
                      <Calendar size={12} />
                      {exp.duration}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                        <ChevronRight size={14} color="var(--accent)" style={{ flexShrink: 0, marginTop: 3 }} />
                        <span style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
