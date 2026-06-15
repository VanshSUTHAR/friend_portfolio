"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { resume } from "@/lib/data";
import { Trophy, Star, Cpu, Users } from "lucide-react";

function AnimCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const dur = 1600;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target * 10) / 10);
      if (p < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const ACHIEVEMENTS = [
  {
    Icon: Trophy,
    title: "Government Dashboard",
    desc: "Delivered an interactive Power BI dashboard presented to government stakeholders, achieving decision-oriented reporting at scale.",
    color: "#f59e0b",
  },
  {
    Icon: Cpu,
    title: "AI Voice Assistant",
    desc: "Built J.A.R.V.I.S — a fully functional Python AI assistant with real-time speech recognition and automation logic.",
    color: "var(--accent)",
  },
  {
    Icon: Star,
    title: "6 Global Certifications",
    desc: "Earned certifications from IBM, University of Michigan, and Johns Hopkins University across AI, ML, SQL, and Web Development.",
    color: "#10b981",
  },
  {
    Icon: Users,
    title: "Industry Internship",
    desc: "Completed a professional data analytics internship at Anatabiz Pvt Ltd, contributing to real-world BI dashboards and pipelines.",
    color: "#8b5cf6",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <div className="section-kicker">Highlights</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em" }}>
            Key <span className="text-gradient">Achievements.</span>
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { value: 4, suffix: "+", label: "Projects Delivered" },
            { value: 6, suffix: "", label: "Certifications Earned" },
            { value: 7.25, suffix: "", label: "CGPA at LJ University" },
            { value: 3, suffix: "+", label: "BI Tools Mastered" },
            { value: 500, suffix: "+", label: "SQL Queries Written" },
          ].map((s, i) => (
            <div
              key={i}
              className="glass"
              style={{
                borderRadius: 16,
                padding: "1.5rem 1.25rem",
                textAlign: "center",
              }}
            >
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "2.2rem",
                lineHeight: 1,
                color: "var(--accent)",
                marginBottom: "0.35rem",
              }}>
                <AnimCounter target={s.value} suffix={s.suffix} />
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Achievement cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -5 }}
              className="glass"
              style={{ borderRadius: 20, padding: "1.75rem", position: "relative", overflow: "hidden" }}
            >
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 100, height: 100,
                borderRadius: "50%",
                background: `${a.color}20`,
                filter: "blur(25px)",
                pointerEvents: "none",
              }} />

              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: `${a.color}18`,
                border: `1px solid ${a.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1rem",
              }}>
                <a.Icon size={22} color={a.color} />
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.6rem" }}>
                {a.title}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.68 }}>
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
