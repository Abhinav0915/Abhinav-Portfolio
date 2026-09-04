import { useState, useEffect } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { TechBackground } from "./components/background/TechBackground";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Experience } from "./components/experience/Experience";
import { Academics } from "./components/academics/Academics";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { ArrowUpIcon } from "./components/common/Icons";

const SECTIONS = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "academics",
  "contact",
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const scrollPosition = window.scrollY + 200;
      for (const sectionId of SECTIONS) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--bg-base)",
        color: "var(--text-primary)",
      }}
    >
      {/* High-performance background canvas & grid */}
      <TechBackground />

      {/* Floating navigation bar */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero onNavigate={scrollToSection} />
        <About />
        <Skills onSelectSkill={() => scrollToSection("projects")} />
        <Projects />
        <Experience />
        <Academics />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onScrollToTop={scrollToTop} />

      {/* Floating Back-to-Top Action */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 90,
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "rgba(14, 18, 26, 0.9)",
            border: "1px solid var(--border-accent)",
            color: "var(--accent-cyan)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 0 20px rgba(0, 229, 255, 0.25)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.background = "var(--accent-cyan)";
            e.currentTarget.style.color = "#000000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "rgba(14, 18, 26, 0.9)";
            e.currentTarget.style.color = "var(--accent-cyan)";
          }}
        >
          <ArrowUpIcon size={18} />
        </button>
      )}
    </div>
  );
}
