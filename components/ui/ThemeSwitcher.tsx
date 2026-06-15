"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Palette, X, Zap, Minus, Circle } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme, allThemes, animationIntensity, setAnimationIntensity } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="theme-panel">
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-cursor-hover
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 44,
          height: 44,
          borderRadius: "12px 0 0 12px",
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRight: "none",
          color: "var(--accent)",
          cursor: "pointer",
          backdropFilter: "blur(16px)",
        }}
        aria-label="Open theme switcher"
      >
        {open ? <X size={18} /> : <Palette size={18} />}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            style={{
              position: "absolute",
              right: 44,
              top: "50%",
              transform: "translateY(-50%)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px 0 0 16px",
              padding: "1.1rem",
              width: 270,
              backdropFilter: "blur(24px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            {/* Header row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", margin: 0 }}>
                Theme
              </p>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", color: "var(--text-muted)", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 6, padding: "0.15rem 0.4rem" }}>
                {allThemes.length} themes
              </span>
            </div>

            {/* Scrollable 2-col theme grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem", maxHeight: 260, overflowY: "auto", marginBottom: "0.85rem" }}>
              {allThemes.map((t) => {
                const isActive = t.id === theme.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    data-cursor-hover
                    title={t.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      padding: "0.45rem 0.6rem",
                      borderRadius: 9,
                      border: `1px solid ${isActive ? t.accent : "var(--border)"}`,
                      background: isActive ? `${t.accent}18` : "transparent",
                      cursor: "pointer",
                      transition: "all 0.18s",
                      textAlign: "left",
                    }}
                  >
                    {/* Colour swatch */}
                    <span style={{ width: 10, height: 10, borderRadius: "50%", background: t.accent, flexShrink: 0, boxShadow: isActive ? `0 0 6px ${t.accent}` : "none" }} />
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: isActive ? t.accent : "var(--text-dim)", fontWeight: isActive ? 600 : 400, lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {t.emoji} {t.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.38rem 0.65rem", background: "var(--accent-dim)", border: "1px solid rgba(var(--particle-color),0.15)", borderRadius: 8, marginBottom: "0.85rem" }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--accent)", fontWeight: 600 }}>
                {theme.emoji} {theme.name}
              </span>
            </div>

            <div style={{ height: 1, background: "var(--border)", marginBottom: "0.85rem" }} />

            {/* Animation intensity */}
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
              Animations
            </p>
            <div style={{ display: "flex", gap: "0.4rem" }}>
              {(["full", "reduced", "none"] as const).map((level) => {
                const labels = { full: "Full", reduced: "Reduced", none: "Off" };
                const icons = { full: <Zap size={11} />, reduced: <Minus size={11} />, none: <Circle size={11} /> };
                const isActive = animationIntensity === level;
                return (
                  <button
                    key={level}
                    onClick={() => setAnimationIntensity(level)}
                    data-cursor-hover
                    style={{
                      flex: 1,
                      padding: "0.38rem 0.3rem",
                      borderRadius: 8,
                      border: `1px solid ${isActive ? "var(--accent)" : "var(--border)"}`,
                      background: isActive ? "var(--accent-dim)" : "transparent",
                      color: isActive ? "var(--accent)" : "var(--text-muted)",
                      cursor: "pointer",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.58rem",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.2rem",
                      transition: "all 0.2s",
                    }}
                  >
                    {icons[level]}
                    {labels[level]}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
