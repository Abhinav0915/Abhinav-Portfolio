import { useState, useEffect } from "react";
import { EditorialHeader } from "./components/navbar/EditorialHeader";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { Skills } from "./components/skills/Skills";
import { Experience } from "./components/experience/Experience";
import { Academics } from "./components/academics/Academics";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { KineticMarquee } from "./components/common/KineticMarquee";
import { CommandPalette } from "./components/common/CommandPalette";
import { EngineeringHUD } from "./components/common/EngineeringHUD";

const SECTIONS = [
  "hero",
  "about",
  "projects",
  "skills",
  "experience",
  "academics",
  "contact",
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light") return false;
      return true; // default dark mode
    }
    return true;
  });

  // Sync theme attribute with html element and localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Global hotkeys for command palette (Cmd+K, Ctrl+K, or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      } else if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)
      ) {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
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
      const topOffset = 65; // height of sticky editorial header
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
      className="tech-blueprint-grid"
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
        color: "var(--ink-primary)",
        paddingBottom: "36px",
      }}
    >
      {/* Editorial Grid Navigation */}
      <EditorialHeader
        activeSection={activeSection}
        onNavigate={scrollToSection}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* Main Publication Sections */}
      <main>
        <Hero onNavigate={scrollToSection} />
        <KineticMarquee />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Academics />
        <Contact />
      </main>

      {/* Typographic Colophon Footer */}
      <Footer onScrollToTop={scrollToTop} />

      {/* Real-time Engineering Telemetry HUD Bar */}
      <EngineeringHUD
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Interactive Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={scrollToSection}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />
    </div>
  );
}
