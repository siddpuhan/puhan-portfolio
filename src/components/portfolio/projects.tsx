"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";
import { Reveal } from "./ui/reveal";
import { TextReveal } from "./ui/text-reveal";

interface Project {
  title: string;
  role: string;
  status: string;
  description: string;
  problem: string;
  impact: string;
  timeline: string;
  architecture: string[];
  stack: string[];
  featured?: boolean;
  color: string;
}

const projects: Project[] = [
  {
    title: "ThinkRoom AI",
    role: "Founding Engineer",
    status: "Flagship product",
    description:
      "An AI-powered collaborative workspace where teams brainstorm, document ideas, and ship faster with contextual AI assistance.",
    problem:
      "Teams lose ideas across scattered tools. Documentation becomes stale. Brainstorming lacks structure and follow-through.",
    impact:
      "Designed to reduce idea-to-document friction and give teams an always-on AI collaborator for product thinking.",
    timeline: "2024 — Present",
    architecture: [
      "Real-time collaborative canvas",
      "Context-aware AI assistant",
      "Hierarchical document engine",
      "Permissioned team workspaces",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AI APIs", "Auth"],
    featured: true,
    color: "from-fg-1/10 via-transparent to-transparent",
  },
  {
    title: "Agniveer Career Platform",
    role: "Product Engineer",
    status: "Impact build",
    description:
      "A career platform supporting ex-Agniveers with guidance, resume building, job matching, mentoring, and entrepreneurship resources.",
    problem:
      "Ex-Agniveers need structured career transition support after service, from resumes to mentorship and opportunities.",
    impact:
      "Builds a bridge between service experience and civilian career success through guidance and community.",
    timeline: "2024",
    architecture: [
      "Role-based user dashboards",
      "Resume builder & parser",
      "Opportunity feed engine",
      "Mentor matching system",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Prisma", "REST"],
    color: "from-fg-1/[0.07] via-transparent to-transparent",
  },
  {
    title: "Attendance Management System",
    role: "Full-stack Engineer",
    status: "Production system",
    description:
      "A full-stack attendance platform with authentication, dashboards, analytics, and export-ready reporting for institutions.",
    problem:
      "Manual attendance tracking creates errors, delayed reports, and no visibility into attendance patterns.",
    impact:
      "Replaces spreadsheets with a reliable system for admins, teachers, and students with analytics at a glance.",
    timeline: "2024",
    architecture: [
      "JWT-based authentication",
      "Admin & teacher dashboards",
      "Attendance analytics",
      "CSV/Excel exports",
    ],
    stack: ["Next.js", "Express", "PostgreSQL", "Tailwind"],
    color: "from-fg-1/[0.06] via-transparent to-transparent",
  },
  {
    title: "AI SaaS Platform",
    role: "Solo Builder",
    status: "Coming soon",
    description:
      "A billing-ready AI SaaS product with usage-based features, team workspaces, and a clean onboarding experience.",
    problem:
      "Generic AI wrappers lack differentiation. Real SaaS products need usage control, billing, and clear value hooks.",
    impact:
      "A template for repeatable AI product launches with auth, payments, and usage limits built in.",
    timeline: "2025",
    architecture: [
      "Usage tracking & limits",
      "Team workspaces",
      "Stripe-ready architecture",
      "AI workflow orchestration",
    ],
    stack: ["Next.js", "OpenAI", "PostgreSQL", "Stripe"],
    color: "from-fg-1/[0.05] via-transparent to-transparent",
  },
  {
    title: "Finance Dashboard",
    role: "Frontend Engineer",
    status: "Coming soon",
    description:
      "A data-rich personal finance dashboard for tracking spending, budgeting, and finding actionable money insights.",
    problem:
      "People struggle to understand where money goes and how to optimize spending without overwhelming tools.",
    impact:
      "Turns raw transactions into clear visual insights that support better financial decisions.",
    timeline: "2025",
    architecture: [
      "Data visualization layer",
      "Category-based budgeting",
      "Insight cards engine",
      "Secure data views",
    ],
    stack: ["React", "TypeScript", "PostgreSQL", "Charts"],
    color: "from-fg-1/[0.05] via-transparent to-transparent",
  },
  {
    title: "Quick Commerce Engine",
    role: "System Design Focus",
    status: "Coming soon",
    description:
      "A system-design-focused commerce project with catalog, cart, inventory thinking, and fast checkout flows.",
    problem:
      "Quick commerce requires low-latency catalog, inventory consistency, and reliable order lifecycle management.",
    impact:
      "A learning ground for distributed system concepts applied to real commerce patterns.",
    timeline: "2025",
    architecture: [
      "Catalog & search",
      "Cart & checkout flows",
      "Inventory state machine",
      "Order tracking pipeline",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    color: "from-fg-1/[0.05] via-transparent to-transparent",
  },
];

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-bg-2/80 p-5 shadow-2xl">
      <div className="mb-4 flex items-center justify-between border-b border-line pb-4">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-fg-8" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg-7" />
          <span className="h-2.5 w-2.5 rounded-full bg-fg-6" />
        </div>
        <span className="font-mono text-xs text-fg-7">{project.title.toLowerCase().replace(/\s+/g, "-")}/app</span>
      </div>
      <div className="space-y-3">
        <div className="h-3 w-3/4 rounded-full bg-fg-8/40" />
        <div className="h-3 w-1/2 rounded-full bg-fg-8/30" />
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-20 rounded-xl border border-line bg-surface" />
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <div className="h-10 flex-1 rounded-xl border border-line bg-surface" />
          <div className="h-10 w-24 rounded-xl bg-fg-1/10" />
        </div>
      </div>
      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60`} />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <Reveal delay={index * 0.08}>
      <motion.div
        ref={ref}
        className="group relative overflow-hidden rounded-[2.5rem] border border-line bg-bg-2/50 transition-all duration-700 hover:border-line-strong hover:bg-bg-3/60"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 transition duration-700 group-hover:opacity-100`} />
        <div className="relative grid gap-8 p-7 lg:grid-cols-2 lg:p-10">
          <div className="order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-fg-5">{project.status}</span>
              <span className="text-xs font-mono text-fg-7">{project.timeline}</span>
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-fg-1 sm:text-4xl">{project.title}</h3>
            <p className="mt-2 text-sm font-medium text-fg-6">{project.role}</p>
            <p className="mt-5 leading-relaxed text-fg-5">{project.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-fg-7">Problem</p>
                <p className="mt-2 text-sm leading-6 text-fg-5">{project.problem}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-fg-7">Impact</p>
                <p className="mt-2 text-sm leading-6 text-fg-5">{project.impact}</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-fg-7">Architecture</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.architecture.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-fg-4">
                    <CheckCircle2 className="h-4 w-4 text-fg-6" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-fg-4">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="https://github.com/siddharthpuhan" variant="secondary" target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight className="h-4 w-4 transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                View case study
              </MagneticButton>
            </div>
          </div>

          <motion.div style={{ y }} className="order-1 lg:order-2">
            <ProjectPreview project={project} />
          </motion.div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative px-5 py-32 sm:px-6 lg:px-8 lg:py-44">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-fg-1/[0.02] blur-[140px]" />

      <div className="mx-auto max-w-[1400px]">
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:items-end">
          <TextReveal
            as="h2"
            className="text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
          >
            Products, not projects.
          </TextReveal>
          <Reveal className="lg:justify-self-end">
            <p className="max-w-md text-lg leading-relaxed text-fg-6">
              Every build starts with a real problem, ends with user impact, and is shaped by
              thoughtful architecture and clean execution.
            </p>
          </Reveal>
        </div>

        <div className="mb-6">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-line-strong bg-bg-2/60 transition-all duration-700 hover:bg-bg-3/70">
              <div className={`absolute inset-0 bg-gradient-to-br ${featured.color} opacity-60`} />
              <div className="relative grid gap-10 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-fg-4">{featured.status}</span>
                    <span className="text-xs font-mono text-fg-7">{featured.timeline}</span>
                  </div>
                  <h3 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-fg-1 sm:text-6xl">{featured.title}</h3>
                  <p className="mt-3 text-lg font-medium text-fg-6">{featured.role}</p>
                  <p className="mt-6 max-w-xl text-xl leading-relaxed text-fg-4">{featured.description}</p>

                  <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-fg-7">Problem</p>
                      <p className="mt-3 leading-relaxed text-fg-5">{featured.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-fg-7">Impact</p>
                      <p className="mt-3 leading-relaxed text-fg-5">{featured.impact}</p>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    {featured.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-fg-3">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <MagneticButton href="https://github.com/siddharthpuhan" variant="primary" target="_blank" rel="noreferrer">
                      GitHub <ArrowUpRight className="h-4 w-4 transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                    </MagneticButton>
                    <MagneticButton href="#contact" variant="secondary">
                      View case study
                    </MagneticButton>
                  </div>
                </div>
                <div className="relative">
                  <ProjectPreview project={featured} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6">
          {others.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
