"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Command } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(`#${id}`);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cmd+K shortcut hint
  const openCmd = useCallback(() => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true, bubbles: true }));
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: "0.85rem 1.5rem",
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.65rem 1.25rem",
          borderRadius: 50,
          background: scrolled ? "var(--card)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          border: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.25)" : "none",
          transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          data-cursor-hover
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "linear-gradient(135deg, var(--accent), var(--accent-glow))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 14px var(--accent-glow)",
            }}
          >
            <Terminal size={16} color="var(--bg)" strokeWidth={2.5} />
          </div>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1rem",
              color: "var(--text)",
              letterSpacing: "0.05em",
            }}
          >
            HD<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            background: "rgba(var(--particle-color),0.03)",
            border: "1px solid var(--border)",
            borderRadius: 50,
            padding: "0.3rem",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                style={{
                  position: "relative",
                  padding: "0.4rem 1rem",
                  borderRadius: 50,
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--accent)" : "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  background: isActive ? "var(--accent-dim)" : "transparent",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: 50,
                      background: "var(--accent-dim)",
                      border: "1px solid rgba(var(--particle-color),0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right side: Cmd+K + Hire Me */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <button
            onClick={openCmd}
            data-cursor-hover
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.4rem 0.75rem",
              border: "1px solid var(--border)",
              borderRadius: 8,
              background: "transparent",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            title="Open Command Palette (Ctrl+K)"
          >
            <Command size={12} />
            <span>⌘K</span>
          </button>

          <a
            href="#contact"
            data-cursor-hover
            className="btn-accent"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.72rem" }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((o) => !o)}
          data-cursor-hover
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: 8,
            padding: "0.45rem",
            color: "var(--text)",
            cursor: "pointer",
          }}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            style={{
              maxWidth: 1100,
              margin: "0.5rem auto 0",
              borderRadius: 16,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              backdropFilter: "blur(24px)",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.9rem 1.5rem",
                  borderBottom: i < NAV_LINKS.length - 1 ? "1px solid var(--border)" : "none",
                  textDecoration: "none",
                  color: active === link.href ? "var(--accent)" : "var(--text-dim)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                  background: active === link.href ? "var(--accent-dim)" : "transparent",
                }}
              >
                {link.label}
                {active === link.href && (
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                )}
              </motion.a>
            ))}
            <div style={{ padding: "0.75rem 1.5rem" }}>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-accent"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
