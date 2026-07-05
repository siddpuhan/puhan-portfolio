"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Server,
  BrainCircuit,
  Cloud,
  Wrench,
} from "lucide-react";
import { Reveal } from "./ui/reveal";
import { TextReveal } from "./ui/text-reveal";
import type { LucideIcon } from "lucide-react";

interface SkillCluster {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
}

const clusters: SkillCluster[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Layers,
    description: "Interfaces that feel instant, intentional, and polished.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    description: "Reliable APIs, auth, and product logic built to scale.",
    skills: ["Node.js", "Express", "REST APIs", "Authentication", "Webhooks"],
  },
  {
    id: "ai",
    title: "AI & ML",
    icon: BrainCircuit,
    description: "Practical AI features that improve workflows and decisions.",
    skills: ["Gemini API", "OpenAI API", "Prompt Engineering", "AI Integrations", "LangChain"],
  },
  {
    id: "cloud",
    title: "Cloud & Data",
    icon: Cloud,
    description: "Data modeling, persistence, and deployment foundations.",
    skills: ["PostgreSQL", "MySQL", "Prisma ORM", "Vercel", "Docker"],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    description: "Workflow tooling for fast iteration and clean collaboration.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "pnpm", "Figma"],
  },
];

export function Skills() {
  const [active, setActive] = useState<string>("frontend");
  const activeCluster = clusters.find((c) => c.id === active)!;

  return (
    <section id="skills" className="relative overflow-hidden px-5 py-32 sm:px-6 lg:px-8 lg:py-44">
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-fg-1/[0.02] blur-[140px]" />

      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:items-end">
          <TextReveal
            as="h2"
            className="text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
          >
            Technology clusters
          </TextReveal>
          <Reveal className="lg:justify-self-end">
            <p className="max-w-md text-lg leading-relaxed text-fg-6">
              Modern full-stack engineering combined with AI-native product thinking. Each
              cluster represents a real capability, not a keyword list.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:gap-10">
          <div className="flex flex-col gap-2">
            {clusters.map((cluster) => (
              <button
                key={cluster.id}
                type="button"
                onClick={() => setActive(cluster.id)}
                className={`group relative flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                  active === cluster.id
                    ? "border-line-strong bg-surface"
                    : "border-transparent bg-transparent hover:bg-surface"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                    active === cluster.id
                      ? "border-line-strong bg-fg-1/5 text-fg-1"
                      : "border-line bg-surface text-fg-6 group-hover:text-fg-3"
                  }`}
                >
                  <cluster.icon className="h-5 w-5" />
                </span>
                <span className="font-medium tracking-tight text-fg-2">{cluster.title}</span>
                {active === cluster.id ? (
                  <motion.div
                    layoutId="active-skill"
                    className="absolute inset-0 -z-10 rounded-2xl border border-line-strong bg-surface"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : null}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2.5rem] border border-line bg-bg-2/60 p-8 backdrop-blur-sm lg:p-12"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fg-1/[0.03] blur-3xl" />
              <div className="relative">
                <activeCluster.icon className="h-10 w-10 text-fg-4" />
                <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em] text-fg-2">
                  {activeCluster.title}
                </h3>
                <p className="mt-3 max-w-lg text-lg leading-relaxed text-fg-6">
                  {activeCluster.description}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  {activeCluster.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-fg-3 transition hover:border-line-strong hover:bg-surface-hover"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
