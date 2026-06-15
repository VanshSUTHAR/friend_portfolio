"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { themes, defaultTheme, type Theme, type ThemeId } from "@/lib/themes";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (id: ThemeId) => void;
  allThemes: Theme[];
  animationIntensity: "full" | "reduced" | "none";
  setAnimationIntensity: (v: "full" | "reduced" | "none") => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [animationIntensity, setAnimationIntensityState] = useState<
    "full" | "reduced" | "none"
  >("full");

  // Apply CSS variables to :root
  const applyCSSVars = useCallback((t: Theme) => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--accent-glow", t.accentGlow);
    root.style.setProperty("--accent-dim", t.accentDim);
    root.style.setProperty("--bg", t.bg);
    root.style.setProperty("--surface", t.surface);
    root.style.setProperty("--card", t.card);
    root.style.setProperty("--border", t.border);
    root.style.setProperty("--text", t.text);
    root.style.setProperty("--text-dim", t.textDim);
    root.style.setProperty("--text-muted", t.textMuted);
    root.style.setProperty("--particle-color", t.particleColor);
    root.setAttribute("data-theme", t.id);
    if (t.isLight) {
      root.setAttribute("data-light", "true");
    } else {
      root.removeAttribute("data-light");
    }
  }, []);

  useEffect(() => {
    const savedId = localStorage.getItem("portfolio-theme") as ThemeId | null;
    const savedAnim = localStorage.getItem("portfolio-anim") as
      | "full"
      | "reduced"
      | "none"
      | null;

    const found = savedId ? themes.find((t) => t.id === savedId) : null;
    const initial = found ?? defaultTheme;
    setThemeState(initial);
    applyCSSVars(initial);

    if (savedAnim) setAnimationIntensityState(savedAnim);
  }, [applyCSSVars]);

  const setTheme = useCallback(
    (id: ThemeId) => {
      const found = themes.find((t) => t.id === id);
      if (!found) return;
      setThemeState(found);
      applyCSSVars(found);
      localStorage.setItem("portfolio-theme", id);
    },
    [applyCSSVars]
  );

  const setAnimationIntensity = useCallback(
    (v: "full" | "reduced" | "none") => {
      setAnimationIntensityState(v);
      localStorage.setItem("portfolio-anim", v);
    },
    []
  );

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, allThemes: themes, animationIntensity, setAnimationIntensity }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
