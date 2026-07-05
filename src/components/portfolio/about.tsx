"use client";

import { motion } from "framer-motion";
import { Reveal } from "./ui/reveal";
import { TextReveal } from "./ui/text-reveal";

const highlights = [
  { label: "Background", value: "Tier-3 college, Tier-1 discipline" },
  { label: "Approach", value: "Build products, not tutorials" },
  { label: "Focus", value: "AI-native full-stack engineering" },
  { label: "Standard", value: "Startup-grade execution" },
];

const timeline = [
  {
    year: "2022",
    title: "Started the journey",
    description: "Programming fundamentals, web basics, Git, and discipline beyond coursework.",
  },
  {
    year: "2023",
    title: "Full-stack foundation",
    description: "React, Node.js, databases, REST APIs, authentication, and end-to-end apps.",
  },
  {
    year: "2024",
    title: "Product engineering",
    description: "Next.js, TypeScript, PostgreSQL, AI APIs, system design, and DSA.",
  },
  {
    year: "2025",
    title: "Shipping at scale",
    description: "Startup-grade products, real users, measurable impact, and high-growth roles.",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-5 py-32 sm:px-6 lg:px-8 lg:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 lg:mb-32">
          <TextReveal
            as="h2"
            className="text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
          >
            The college is context.
            <br />
            <span className="text-fg-6">The work is the signal.</span>
          </TextReveal>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-all duration-500 hover:border-line-strong hover:bg-surface-hover">
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-fg-1/[0.03] blur-2xl transition group-hover:bg-fg-1/[0.06]" />
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-fg-7">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold leading-snug tracking-tight text-fg-2">
                    {item.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div>
            <Reveal>
              <p className="text-balance text-2xl font-medium leading-relaxed tracking-tight text-fg-3 sm:text-3xl">
                I am a B.Tech Computer Science student entering my 3rd year. I believe
                exceptional engineers are built through discipline, shipped work, and
                relentless curiosity.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-fg-6">
                My goal is to build AI-powered software that solves real problems, earns
                user trust, and competes with the products built by the world&apos;s best
                engineering teams.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-32">
          <Reveal>
            <p className="mb-12 text-xs font-medium uppercase tracking-[0.25em] text-fg-7">Journey</p>
          </Reveal>
          <div className="relative">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-line lg:left-1/2 lg:block" />
            <div className="grid gap-8 lg:gap-16">
              {timeline.map((item, index) => (
                <Reveal key={item.year} delay={index * 0.1}>
                  <div
                    className={`relative grid items-center gap-6 lg:grid-cols-2 lg:gap-16 ${
                      index % 2 === 0 ? "" : "lg:[&>div]:col-start-2"
                    }`}
                  >
                    <div
                      className={`${
                        index % 2 === 0 ? "lg:text-right" : "lg:order-2 lg:text-left"
                      }`}
                    >
                      <span className="inline-block rounded-full border border-line bg-surface px-3 py-1 text-xs font-mono text-fg-5">
                        {item.year}
                      </span>
                    </div>
                    <div className="rounded-3xl border border-line bg-surface p-6 transition-all duration-500 hover:border-line-strong hover:bg-surface-hover lg:p-8">
                      <h3 className="text-xl font-semibold tracking-tight text-fg-2">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-fg-6">{item.description}</p>
                    </div>
                    <motion.span
                      className="absolute left-[-5px] top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-fg-4 lg:left-1/2 lg:block lg:-translate-x-1/2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
