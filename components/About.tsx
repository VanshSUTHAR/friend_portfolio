"use client";
import type { Transition } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { resume } from "@/lib/data";
import { MapPin, Code, BarChart3, Database } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target * 10) / 10);
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const fadeUpTransition = (i: number): Transition => ({
  delay: i * 0.1,
  duration: 0.55,
  ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: fadeUpTransition(i),
  }),
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}
        >
          <div className="section-kicker">About Me</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.2rem)", letterSpacing: "-0.02em" }}>
            Analytical <span className="text-gradient">by design.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "1.25rem",
        }}
          className="about-grid"
        >

          {/* Story card — 7 cols */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="glass"
            style={{ gridColumn: "span 7", borderRadius: 20, padding: "2rem", position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: "var(--accent-glow)", filter: "blur(40px)", pointerEvents: "none" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>My Story</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.25rem", marginTop: "0.5rem", marginBottom: "1rem" }}>
              Bridging CS &amp; Data Intelligence
            </h3>
            <div style={{ color: "var(--text-muted)", fontSize: "0.93rem", lineHeight: 1.78, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <p>I&apos;m a Computer Science undergraduate at <strong style={{ color: "var(--text)" }}>LJ University, Ahmedabad</strong>, passionate about extracting meaning from complex datasets and building tools that drive real decisions.</p>
              <p>My experience spans BI dashboards for government stakeholders, pharmaceutical supply chain analytics, AI-powered voice assistants, and full-stack data platforms — giving me a versatile, end-to-end perspective on the analytics lifecycle.</p>
              <p>I believe that good data storytelling changes outcomes — and I&apos;m here to build those stories.</p>
            </div>
          </motion.div>

          {/* Stats grid — 5 cols */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ gridColumn: "span 5", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
          >
            {[
              { num: 4, suffix: "+", label: "Projects Delivered" },
              { num: 6, suffix: "", label: "Certifications" },
              { num: 7.25, suffix: "", label: "CGPA" },
              { num: 3, suffix: "+", label: "BI Tools" },
            ].map((s, i) => (
              <div key={i} className="glass" style={{ borderRadius: 16, padding: "1.4rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "2rem", color: "var(--accent)", lineHeight: 1 }}>
                  <Counter target={s.num} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Location card */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="glass"
            style={{ gridColumn: "span 4", borderRadius: 20, padding: "1.75rem", position: "relative", overflow: "hidden" }}
          >
            {/* Radar rings */}
            {[1, 2, 3].map((r) => (
              <div key={r} style={{
                position: "absolute",
                top: "50%", left: "50%",
                width: r * 60, height: r * 60,
                borderRadius: "50%",
                border: "1px solid rgba(var(--particle-color),0.12)",
                transform: "translate(-50%,-50%)",
                pointerEvents: "none",
              }} />
            ))}
            <div style={{ position: "relative", zIndex: 1 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>Location</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.75rem" }}>
                <MapPin size={16} color="var(--accent)" />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem" }}>Ahmedabad, India</span>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: "0.5rem", lineHeight: 1.6 }}>
                Open to remote roles &amp; hybrid opportunities in Gujarat.
              </p>
            </div>
            <div style={{ marginTop: "1.25rem", display: "flex", justifyContent: "center", alignItems: "center", height: 50 }}>
              <div style={{ position: "relative", width: 14, height: 14 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--accent)", animation: "pulse-glow 2s infinite" }} />
                <span style={{ position: "absolute", inset: 2, borderRadius: "50%", background: "var(--accent)" }} />
              </div>
            </div>
          </motion.div>

          {/* Focus areas card */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="glass"
            style={{ gridColumn: "span 8", borderRadius: 20, padding: "1.75rem" }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>Focus Areas</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", marginTop: "0.5rem", marginBottom: "1.25rem" }}>
              Data · Systems · Intelligence
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.85rem" }}>
              {[
                { Icon: Database, label: "SQL & Databases", desc: "PostgreSQL, Oracle, complex queries" },
                { Icon: BarChart3, label: "BI & Analytics", desc: "Power BI, Qlik Sense, DAX" },
                { Icon: Code, label: "Python & Dev", desc: "Automation, Django, REST APIs" },
              ].map(({ Icon, label, desc }) => (
                <div key={label} style={{
                  background: "rgba(var(--particle-color),0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "1rem",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--accent)";
                    el.style.background = "var(--accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.background = "rgba(var(--particle-color),0.04)";
                  }}
                >
                  <Icon size={20} color="var(--accent)" style={{ marginBottom: "0.5rem" }} />
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem", marginBottom: "0.25rem" }}>{label}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)" }}>{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > * { grid-column: span 1 !important; }
          .about-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .about-focus-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .about-stats-grid { grid-template-columns: 1fr 1fr !important; gap: 0.6rem !important; }
          .about-focus-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
