"use client";
import type { Transition } from "framer-motion";
import { motion } from "framer-motion";
import { resume } from "@/lib/data";
import { GraduationCap, BookOpen, Award, ShieldCheck } from "lucide-react";

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    delay: i * 0.09,
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  } as Transition,
});

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <div className="section-kicker">Credentials</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em" }}>
            Education &amp; <span className="text-gradient">Achievements.</span>
          </h2>
        </motion.div>

        {/* Degrees */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem", marginBottom: "3rem" }}>
          {resume.education.map((ed, i) => (
            <motion.div {...fadeUp(i)} key={ed.degree} className="glass" style={{ borderRadius: 20, padding: "2rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 100, height: 100, background: "var(--accent-glow)", filter: "blur(35px)", pointerEvents: "none" }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "var(--accent-dim)", border: "1px solid rgba(var(--particle-color),0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  <GraduationCap size={20} color="var(--accent)" />
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)" }}>Degree</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", marginTop: "0.3rem", marginBottom: "0.4rem", lineHeight: 1.35 }}>{ed.degree}</h3>
                <div style={{ color: "var(--accent)", fontSize: "0.88rem", fontWeight: 600, marginBottom: "0.75rem" }}>{ed.institution}</div>
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  background: "var(--card)", border: "1px solid var(--border)",
                  borderRadius: 8, padding: "0.4rem 0.75rem", width: "fit-content",
                }}>
                  {ed.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "1.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
        >
          <ShieldCheck size={18} color="var(--accent)" />
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem" }}>Global Certifications</h3>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.85rem", marginBottom: "3rem" }}>
          {resume.certificates.map((cert, i) => (
            <motion.div {...fadeUp(i)} key={cert.name} className="glass"
              style={{
                borderRadius: 14, padding: "1.1rem 1.25rem",
                display: "flex", gap: "0.85rem", alignItems: "flex-start",
                transition: "transform 0.2s",
              }}
              whileHover={{ y: -3 }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "var(--accent-dim)", border: "1px solid rgba(var(--particle-color),0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.1rem", flexShrink: 0,
              }}>
                <Award size={16} color="var(--accent)" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: "0.25rem" }}>{cert.issuer}</div>
                <div style={{ fontSize: "0.84rem", fontWeight: 600, lineHeight: 1.4, color: "var(--text)" }}>{cert.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "1.75rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
        >
          <BookOpen size={18} color="var(--accent)" />
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem" }}>Additional Experience</h3>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.85rem" }}>
          {resume.additionalExperience.map((item, i) => (
            <motion.div {...fadeUp(i)} key={item.name} className="glass"
              style={{ borderRadius: 14, padding: "1.1rem 1.25rem", display: "flex", gap: "0.85rem", alignItems: "flex-start" }}
              whileHover={{ y: -3 }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <BookOpen size={16} color="#8b5cf6" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: "0.25rem" }}>{item.issuer}</div>
                <div style={{ fontSize: "0.84rem", fontWeight: 600, lineHeight: 1.4 }}>{item.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
