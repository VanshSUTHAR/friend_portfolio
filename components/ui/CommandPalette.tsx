"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

const COMMANDS = [
  { id: "home", label: "Go to Home", href: "#hero", shortcut: "H" },
  { id: "about", label: "About Me", href: "#about", shortcut: "A" },
  { id: "skills", label: "Skills & Tech", href: "#skills", shortcut: "S" },
  { id: "experience", label: "Experience", href: "#experience", shortcut: "E" },
  { id: "projects", label: "Projects", href: "#projects", shortcut: "P" },
  { id: "education", label: "Education", href: "#education", shortcut: "U" },
  { id: "achievements", label: "Achievements", href: "#achievements", shortcut: "V" },
  { id: "contact", label: "Contact Me", href: "#contact", shortcut: "C" },
  { id: "github", label: "GitHub Stats", href: "#github", shortcut: "G" },
  { id: "email", label: "Send Email", href: "mailto:heeyadadhalwala@gmail.com", shortcut: "M" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelected(0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowDown") setSelected((s) => Math.min(s + 1, filtered.length - 1));
      if (e.key === "ArrowUp") setSelected((s) => Math.max(s - 1, 0));
      if (e.key === "Enter" && filtered[selected]) {
        window.location.href = filtered[selected].href;
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, filtered, selected]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cmd-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 340, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 540,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(var(--particle-color),0.1)",
            }}
          >
            {/* Search input */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 1.25rem",
              borderBottom: "1px solid var(--border)",
            }}>
              <Search size={16} color="var(--text-muted)" />
              <input
                autoFocus
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                placeholder="Search sections, actions..."
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.92rem",
                  color: "var(--text)",
                }}
              />
              <button
                onClick={close}
                data-cursor-hover
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}
              >
                <X size={14} />
              </button>
            </div>

            {/* Results */}
            <div style={{ maxHeight: 320, overflowY: "auto" }}>
              {filtered.length === 0 ? (
                <p style={{
                  padding: "2rem",
                  textAlign: "center",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                }}>
                  No results
                </p>
              ) : (
                filtered.map((cmd, idx) => (
                  <a
                    key={cmd.id}
                    href={cmd.href}
                    onClick={close}
                    data-cursor-hover
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.75rem 1.25rem",
                      background: idx === selected ? "var(--accent-dim)" : "transparent",
                      borderBottom: "1px solid var(--border)",
                      textDecoration: "none",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={() => setSelected(idx)}
                  >
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.88rem",
                      color: idx === selected ? "var(--accent)" : "var(--text)",
                    }}>
                      {cmd.label}
                    </span>
                    <kbd style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      padding: "0.2rem 0.45rem",
                      borderRadius: 5,
                      border: "1px solid var(--border)",
                      color: "var(--text-muted)",
                      background: "var(--card)",
                    }}>
                      {cmd.shortcut}
                    </kbd>
                  </a>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div style={{
              padding: "0.6rem 1.25rem",
              borderTop: "1px solid var(--border)",
              display: "flex",
              gap: "1rem",
            }}>
              {[["↑↓", "Navigate"], ["↵", "Go"], ["Esc", "Close"]].map(([key, hint]) => (
                <span key={key} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem",
                  color: "var(--text-muted)",
                }}>
                  <kbd style={{
                    padding: "0.15rem 0.35rem",
                    borderRadius: 4,
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                  }}>{key}</kbd>
                  {hint}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
