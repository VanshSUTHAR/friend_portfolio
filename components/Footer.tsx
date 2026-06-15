"use client";
import { useEffect, useState } from "react";
import { resume } from "@/lib/data";
import { Mail, Clock, Heart, FileText } from "lucide-react";

const GithubIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: true,
      }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: "var(--surface)",
      backdropFilter: "blur(12px)",
      marginTop: "4rem",
    }}>
      <div className="container-main" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2rem", marginBottom: "3rem" }} className="footer-grid">
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
              <div style={{
                width: 32, height: 32, borderRadius: 9,
                background: "linear-gradient(135deg, var(--accent), var(--accent-glow))",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "0.7rem", color: "var(--bg)" }}>HD</span>
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", color: "var(--text)" }}>
                Heeya<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </a>
            <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 220 }}>
              Computer Science undergraduate passionate about data analytics and BI development.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {[
                { Icon: Mail, href: `mailto:${resume.email}`, label: "Email" },
                { Icon: LinkedinIcon, href: resume.linkedin, label: "LinkedIn" },
                { Icon: GithubIcon, href: "https://github.com", label: "GitHub" },
                { Icon: FileText, href: "/Heeya_Dadhalwala.pdf", label: "Resume", download: "Heeya_Dadhalwala_Resume.pdf" },
              ].map(({ Icon, href, label, download }) => (
                <a
                  key={label}
                  href={href}
                  download={download}
                  target={href.startsWith("http") || download ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  data-cursor-hover
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    border: "1px solid var(--border)",
                    background: "var(--card)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--text-muted)",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--accent)";
                    el.style.color = "var(--accent)";
                    el.style.background = "var(--accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-muted)";
                    el.style.background = "var(--card)";
                  }}
                >
                  <Icon width={15} height={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--text-muted)", marginBottom: "1rem" }}>
              Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-cursor-hover
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Live clock + contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="glass" style={{ borderRadius: 14, padding: "1rem 1.25rem", display: "inline-flex", flexDirection: "column", gap: "0.35rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Clock size={12} color="var(--accent)" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)" }}>
                  Local Time (IST)
                </span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.2rem", fontWeight: 600, color: "var(--text)", letterSpacing: "0.04em" }}>
                {time || "—"}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--text-muted)" }}>
                Ahmedabad, India · UTC+5:30
              </span>
            </div>

            <a
              href={`mailto:${resume.email}`}
              className="btn-outline"
              data-cursor-hover
              style={{ fontSize: "0.72rem", justifyContent: "center", padding: "0.65rem 1rem" }}
            >
              <Mail size={13} /> {resume.email}
            </a>
          </div>
        </div>

        {/* Bottom divider */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Heeya Dadhalwala. All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.3rem" }}>
            Built with <Heart size={12} color="var(--accent)" fill="var(--accent)" /> Next.js &amp; Framer Motion
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
