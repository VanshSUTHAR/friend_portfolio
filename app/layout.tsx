import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoadingScreen from "@/components/ui/LoadingScreen";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import CommandPalette from "@/components/ui/CommandPalette";
import BackToTop from "@/components/ui/BackToTop";
import Particles from "@/components/ui/Particles";

export const metadata: Metadata = {
  title: "Riya shah — Data Analyst & CS Undergraduate",
  description:
    "Portfolio of Riya shah — Computer Science undergraduate specializing in Data Analytics, Business Intelligence, Power BI, SQL, and Python. Open to analytics and BI roles.",
  keywords: ["data analyst", "power bi", "sql", "python", "business intelligence", "qlik sense", "portfolio", "Riya shah"],
  openGraph: {
    title: "Riya shah — Data Analyst Portfolio",
    description: "Premium portfolio showcasing data analytics projects, BI dashboards, and technical expertise.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <ThemeProvider>
          {/* Global UI layer */}
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <Particles />
          <ThemeSwitcher />
          <CommandPalette />
          <BackToTop />

          {/* Page content */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
