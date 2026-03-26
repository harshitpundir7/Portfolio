import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingSkills from "@/components/FloatingSkills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-orange-500/30 dark:selection:bg-orange-900/30">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-small-black/20 dark:bg-grid-small-white/20 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20" />
      </div>

      {/* Floating Skill Icons — absolute so they span the full scrollable page */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingSkills />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <GithubStats />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
