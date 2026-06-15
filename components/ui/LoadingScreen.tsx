"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--bg)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {/* Rotating ring */}
          <div style={{ position: "relative", width: 72, height: 72 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTopColor: "var(--accent)",
                borderRightColor: "var(--accent-glow)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "14px",
                borderRadius: "50%",
                background: "var(--accent-dim)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "var(--accent)",
                }}
              >
                HD
              </span>
            </div>
          </div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Initializing portfolio
          </motion.div>

          {/* Dots row */}
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
