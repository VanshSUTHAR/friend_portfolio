"use client";
import { motion } from "framer-motion";
import { resume } from "@/lib/data";
import { Terminal, BarChart3, Globe2, Database, Wrench, HeartHandshake } from "lucide-react";

const CATEGORY_META: Record<string, { Icon: React.ElementType; color: string; strength: number }> = {
  "Programming & Data": { Icon: Terminal, color: "var(--accent)", strength: 5 },
  "BI & Analytics":      { Icon: BarChart3, color: "#10b981", strength: 5 },
  "Web Technologies":    { Icon: Globe2, color: "#8b5cf6", strength: 4 },
  "Databases":           { Icon: Database, color: "var(--accent)", strength: 4 },
  "Tools":               { Icon: Wrench, color: "#f97316", strength: 4 },
  "Soft Skills":         { Icon: HeartHandshake, color: "#ec4899", strength: 5 },
};

const fallbackMeta = { Icon: Terminal, color: "var(--accent)", strength: 4 };

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <div className="section-kicker">Capabilities</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em" }}>
            What I bring <span className="text-gradient">to the table.</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {resume.skills.map((group, i) => {
            const meta = CATEGORY_META[group.category] ?? fallbackMeta;
            const { Icon, color, strength } = meta;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -5 }}
                className="glass"
                style={{
                  borderRadius: 20,
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  cursor: "default",
                }}
              >
                {/* Icon + title */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={20} color={color} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem" }}>
                    {group.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="chip"
                      style={{ fontSize: "0.72rem" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Strength indicator */}
                <div style={{ marginTop: "auto" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Proficiency</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color }}>
                      {strength}/5
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: "0.3rem" }}>
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <motion.div
                        key={lvl}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 + lvl * 0.05, duration: 0.4 }}
                        style={{
                          flex: 1,
                          height: 4,
                          borderRadius: 99,
                          background: lvl <= strength ? color : "var(--border)",
                          boxShadow: lvl <= strength ? `0 0 6px ${color}60` : "none",
                          transformOrigin: "left",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
