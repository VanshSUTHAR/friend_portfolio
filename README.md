# 📊 Heeya Dadhalwala — Data Analytics & Engineering Portfolio

Welcome to the repository for **Heeya Dadhalwala's Portfolio Website**—a premium, state-of-the-art developer and data analytics showcase built to capture the essence of modern product design.

This portfolio is custom-engineered to highlight a dual background in **Computer Science Engineering** and **Data Analytics / Business Intelligence (BI)**.

---

## 🚀 Key Features & Implementation

### 1. 🎛️ Dynamic Theme Engine (11 Premium Themes)
The site includes a custom React context-powered Theme System (`lib/themes.ts`) featuring **11 curated themes** (each with tailored backgrounds, custom canvas particles, specific text/border contrast ratios, and glow presets):
* ⚡ **Midnight Cyber** (Default - Sleek Cyan)
* 🌊 **Ocean Blue**
* 🌿 **Emerald Green**
* 🌅 **Sunset Orange**
* 👑 **Royal Purple**
* ☀️ **Pure Light** (Fully optimized light mode)
* 🖤 **AMOLED Black** (Infinite contrast)
* 🌸 **Rose Gold** (Chic Magenta)
* 🧊 **Arctic Ice** (Crisp Cyan-Blue)
* 🟢 **Neon Lime** (High energy green)
* 🔴 **Deep Crimson** (Premium red)

*Features a floating Theme Swatch panel, custom active indicators, and a **Command Palette (`Ctrl/Cmd + K`)** to switch themes instantly via keyboard.*

---

### 2. 🧩 High-Fidelity Bento Grid & Interactive Sections

* **⚡ Hero Section**: Displays bold typography paired with an **Interactive SQL & BI Data Visualizer** mockup instead of a static image. It renders animated SVG yield curves, live query metrics (Query Perf: 12.4ms, Accuracy: 99.85%), and pulsing data-stream node points.
* **🗺️ Bento About Grid**: Displays domain statistics, locations, and a **live-scanning Sonar radar map** tracking Ahmedabad, India.
* **📈 Segmented LED Skills**: Showcases capabilities (Python, SQL, Power BI, Django, Qlik Sense) paired with glowing LED strength bars.
* **🕒 Live IST Clock**: An active ticking clock in the footer representing Heeya's local timezone (IST, Asia/Kolkata) to synchronize recruiters globally.
* **📜 Scroll-Linked Experience**: A custom vertical timeline detailing the Data Analysis Internship at *Anatabiz Private Limited*. The timeline path dynamically fills with neon light as the user scrolls.
* **📂 Visual Project Showcases**: Features category filters for Web Dev, BI & Analytics, and Python & AI. Includes custom dynamic charts, interactive schema designs, and mock terminal prompt displays.
* **📥 PDF Resume Download**: Resume buttons are bound to download `Heeya_Dadhalwala.pdf` directly from the static public directory with custom filename definitions.

---

## 🛠️ Technology Stack

* **Core**: Next.js 16 (App Router), React 19
* **Styling**: Tailwind CSS v4, Vanilla CSS Design Tokens
* **Animations**: Framer Motion v12 (hardware-accelerated page transitions, magnet cursors, scrolling paths)
* **Icons**: Lucide React
* **Backgrounds**: Custom lightweight canvas particle engine

---

## 💻 Getting Started

### 1. Clone the repository and install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Build for production
```bash
npm run build
```
This compile process builds a optimized static application under `out/` or `.next/` with zero TypeScript or hydration mismatches.
