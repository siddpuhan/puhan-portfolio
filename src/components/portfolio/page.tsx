"use client";

import { Nav } from "./nav";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
