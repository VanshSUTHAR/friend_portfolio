"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="btt"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.88 }}
          transition={{ type: "spring", stiffness: 360, damping: 24 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-cursor-hover
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: "var(--accent)",
            border: "none",
            color: "var(--bg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 400,
            boxShadow: "0 8px 24px var(--accent-glow)",
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
