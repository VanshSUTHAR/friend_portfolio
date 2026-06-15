import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
