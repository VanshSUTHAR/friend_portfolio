export type ThemeId =
  | "midnight-cyber"
  | "ocean-blue"
  | "emerald-green"
  | "sunset-orange"
  | "royal-purple"
  | "pure-light"
  | "amoled-black"
  | "rose-gold"
  | "arctic-ice"
  | "neon-lime"
  | "deep-crimson";

export interface Theme {
  id: ThemeId;
  name: string;
  emoji: string;
  accent: string;
  accentGlow: string;
  accentDim: string;
  bg: string;
  surface: string;
  card: string;
  border: string;
  text: string;
  textDim: string;
  textMuted: string;
  particleColor: string;
  isLight?: boolean;
}

export const themes: Theme[] = [
  {
    id: "midnight-cyber",
    name: "Midnight Cyber",
    emoji: "⚡",
    accent: "#06b6d4",
    accentGlow: "rgba(6,182,212,0.18)",
    accentDim: "rgba(6,182,212,0.08)",
    bg: "#030305",
    surface: "#07070d",
    card: "rgba(10,10,18,0.55)",
    border: "rgba(6,182,212,0.08)",
    text: "#f1f5f9",
    textDim: "#94a3b8",
    textMuted: "#475569",
    particleColor: "6,182,212",
  },
  {
    id: "ocean-blue",
    name: "Ocean Blue",
    emoji: "🌊",
    accent: "#3b82f6",
    accentGlow: "rgba(59,130,246,0.18)",
    accentDim: "rgba(59,130,246,0.08)",
    bg: "#020409",
    surface: "#060b14",
    card: "rgba(8,12,24,0.55)",
    border: "rgba(59,130,246,0.08)",
    text: "#f1f5f9",
    textDim: "#93c5fd",
    textMuted: "#475569",
    particleColor: "59,130,246",
  },
  {
    id: "emerald-green",
    name: "Emerald Green",
    emoji: "🌿",
    accent: "#10b981",
    accentGlow: "rgba(16,185,129,0.18)",
    accentDim: "rgba(16,185,129,0.08)",
    bg: "#020805",
    surface: "#040f08",
    card: "rgba(6,15,10,0.55)",
    border: "rgba(16,185,129,0.08)",
    text: "#f1f5f9",
    textDim: "#6ee7b7",
    textMuted: "#475569",
    particleColor: "16,185,129",
  },
  {
    id: "sunset-orange",
    name: "Sunset Orange",
    emoji: "🌅",
    accent: "#f97316",
    accentGlow: "rgba(249,115,22,0.18)",
    accentDim: "rgba(249,115,22,0.08)",
    bg: "#060301",
    surface: "#0d0502",
    card: "rgba(15,7,2,0.55)",
    border: "rgba(249,115,22,0.08)",
    text: "#f1f5f9",
    textDim: "#fed7aa",
    textMuted: "#78350f",
    particleColor: "249,115,22",
  },
  {
    id: "royal-purple",
    name: "Royal Purple",
    emoji: "👑",
    accent: "#8b5cf6",
    accentGlow: "rgba(139,92,246,0.18)",
    accentDim: "rgba(139,92,246,0.08)",
    bg: "#04020a",
    surface: "#080414",
    card: "rgba(10,5,20,0.55)",
    border: "rgba(139,92,246,0.08)",
    text: "#f1f5f9",
    textDim: "#c4b5fd",
    textMuted: "#475569",
    particleColor: "139,92,246",
  },
  {
    id: "pure-light",
    name: "Pure Light",
    emoji: "☀️",
    accent: "#0f172a",
    accentGlow: "rgba(15,23,42,0.12)",
    accentDim: "rgba(15,23,42,0.06)",
    bg: "#f8fafc",
    surface: "#f1f5f9",
    card: "rgba(255,255,255,0.75)",
    border: "rgba(15,23,42,0.08)",
    text: "#0f172a",
    textDim: "#475569",
    textMuted: "#94a3b8",
    particleColor: "15,23,42",
    isLight: true,
  },
  {
    id: "amoled-black",
    name: "AMOLED Black",
    emoji: "🖤",
    accent: "#ffffff",
    accentGlow: "rgba(255,255,255,0.12)",
    accentDim: "rgba(255,255,255,0.05)",
    bg: "#000000",
    surface: "#040404",
    card: "rgba(8,8,8,0.80)",
    border: "rgba(255,255,255,0.06)",
    text: "#ffffff",
    textDim: "#a1a1aa",
    textMuted: "#52525b",
    particleColor: "255,255,255",
  },

  // ── 4 New Themes ──────────────────────────────
  {
    id: "rose-gold",
    name: "Rose Gold",
    emoji: "🌸",
    accent: "#f43f8a",
    accentGlow: "rgba(244,63,138,0.18)",
    accentDim: "rgba(244,63,138,0.08)",
    bg: "#08020a",
    surface: "#100510",
    card: "rgba(18,4,18,0.55)",
    border: "rgba(244,63,138,0.08)",
    text: "#fdf2f8",
    textDim: "#f9a8d4",
    textMuted: "#9d174d",
    particleColor: "244,63,138",
  },
  {
    id: "arctic-ice",
    name: "Arctic Ice",
    emoji: "🧊",
    accent: "#67e8f9",
    accentGlow: "rgba(103,232,249,0.15)",
    accentDim: "rgba(103,232,249,0.07)",
    bg: "#010810",
    surface: "#030f18",
    card: "rgba(3,16,28,0.58)",
    border: "rgba(103,232,249,0.07)",
    text: "#e0f7ff",
    textDim: "#a5f3fc",
    textMuted: "#164e63",
    particleColor: "103,232,249",
  },
  {
    id: "neon-lime",
    name: "Neon Lime",
    emoji: "🟢",
    accent: "#a3e635",
    accentGlow: "rgba(163,230,53,0.16)",
    accentDim: "rgba(163,230,53,0.07)",
    bg: "#020501",
    surface: "#060a02",
    card: "rgba(8,14,2,0.58)",
    border: "rgba(163,230,53,0.07)",
    text: "#f7fee7",
    textDim: "#d9f99d",
    textMuted: "#3f6212",
    particleColor: "163,230,53",
  },
  {
    id: "deep-crimson",
    name: "Deep Crimson",
    emoji: "🔴",
    accent: "#ef4444",
    accentGlow: "rgba(239,68,68,0.18)",
    accentDim: "rgba(239,68,68,0.08)",
    bg: "#080101",
    surface: "#110202",
    card: "rgba(18,3,3,0.58)",
    border: "rgba(239,68,68,0.08)",
    text: "#fff1f2",
    textDim: "#fca5a5",
    textMuted: "#7f1d1d",
    particleColor: "239,68,68",
  },
];

export const defaultTheme = themes[0];

