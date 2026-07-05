"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Nav } from "./nav";
import { Hero } from "./hero";
import { About } from "./about";
import { Skills } from "./skills";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { CustomCursor } from "./ui/custom-cursor";

export function PortfolioPage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 22, mass: 0.25 });

  useEffect(() => {
    const storedTheme = localStorage.getItem("siddharth-theme") as "dark" | "light" | null;
    const initialTheme = storedTheme ?? "dark";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("light", initialTheme === "light");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("light", next === "light");
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("siddharth-theme", next);
      return next;
    });
  };

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-fg-1"
        style={{ scaleX }}
      />
      <div className="noise" />
      <div className="grid-lines" />
      <div className="radial-glow" />
      <CustomCursor />
      {mounted ? <Nav theme={theme} onToggleTheme={toggleTheme} /> : null}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
