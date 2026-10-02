import { useEffect, useRef, useState } from "react";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/hero/Hero";
import { Work } from "./components/work/Work";
import { About } from "./components/about/About";
import { Experience } from "./components/experience/Experience";
import { Toolbox } from "./components/toolbox/Toolbox";
import { Contact } from "./components/contact/Contact";
import { useActiveSection, useScrollEffects } from "./hooks/useScrollEffects";
import { usePointerEffects } from "./hooks/usePointerEffects";
import { startSmoothScroll, stopSmoothScroll } from "./lib/smoothScroll";
import { CONTACT, NAV } from "./data/portfolioData";

const SECTION_IDS = NAV.map((n) => n.id);

export default function App() {
  const [active, setActive] = useState("");
  const cursorRef = useRef<HTMLDivElement>(null);

  useScrollEffects();
  useActiveSection(SECTION_IDS, setActive);
  usePointerEffects(cursorRef);

  useEffect(() => {
    startSmoothScroll();
    console.info(
      `%cReading the source?%c\nThis site is React + Vite with no UI framework. Say hi: ${CONTACT.email}`,
      "font: 600 13px Georgia, serif",
      "font: 12px ui-monospace, monospace",
    );
    return stopSmoothScroll;
  }, []);

  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <Header active={active} />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Toolbox />
        <Contact />
      </main>
      <div ref={cursorRef} className="cursor" aria-hidden />
    </>
  );
}
