"use client";

import { motion } from "framer-motion";
import { Reveal } from "./ui/reveal";
import { TextReveal } from "./ui/text-reveal";

const experiences = [
  {
    period: "2024 — Present",
    title: "Independent Product Builder",
    company: "Self-directed",
    description:
      "Designing and shipping AI-powered full-stack products. Focusing on architecture, user experience, and real-world problem solving.",
    achievements: [
      "Built ThinkRoom AI workspace concept",
      "Integrated Gemini & OpenAI APIs",
      "Implemented auth, databases, and dashboards",
    ],
  },
  {
    period: "2023 — 2024",
    title: "Full-stack Developer",
    company: "Learning phase",
    description:
      "Mastered modern web fundamentals through product-like builds. Moved from tutorials to end-to-end applications.",
    achievements: [
      "Built attendance system with analytics",
      "Created REST APIs with Node.js",
      "Learned React, Next.js, and PostgreSQL deeply",
    ],
  },
  {
    period: "2022 — 2023",
    title: "Foundations",
    company: "Academic + self-study",
    description:
      "Started the engineering journey with programming basics, Git, data structures, and the discipline to learn independently.",
    achievements: [
      "Learned DSA fundamentals",
      "Built first web pages and scripts",
      "Developed consistent learning habits",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-5 py-32 sm:px-6 lg:px-8 lg:py-44">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 lg:mb-32">
          <TextReveal
            as="h2"
            className="text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
          >
            Experience & trajectory
          </TextReveal>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-line via-line-strong to-line lg:left-8 lg:block" />

          <div className="grid gap-10">
            {experiences.map((exp, index) => (
              <Reveal key={exp.title} delay={index * 0.1}>
                <div className="group relative grid gap-6 pl-0 lg:grid-cols-[200px_1fr] lg:pl-20">
                  <div>
                    <span className="inline-block rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-fg-6">
                      {exp.period}
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-7 transition-all duration-500 hover:border-line-strong hover:bg-surface-hover lg:p-10">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fg-1/[0.03] blur-3xl transition group-hover:bg-fg-1/[0.06]" />
                    <div className="relative">
                      <p className="text-sm font-medium text-fg-7">{exp.company}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-fg-2">{exp.title}</h3>
                      <p className="mt-4 max-w-2xl leading-relaxed text-fg-6">{exp.description}</p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {exp.achievements.map((achievement) => (
                          <div key={achievement} className="rounded-2xl border border-line bg-bg-2/50 p-4">
                            <p className="text-sm leading-snug text-fg-4">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <motion.span
                    className="absolute left-0 top-6 hidden h-3 w-3 rounded-full border border-line bg-bg-2 lg:left-8 lg:block lg:-translate-x-1/2"
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
    </section>
  );
}
