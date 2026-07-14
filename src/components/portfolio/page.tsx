"use client";

import { Nav } from "./nav";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { ResumeSection } from "./resume";
import { Contact } from "./contact";
import { Footer } from "./footer";
import { CustomCursor } from "./cursor";

export function PortfolioPage() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
