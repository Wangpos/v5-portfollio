"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import Contact from "@/components/contact";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
