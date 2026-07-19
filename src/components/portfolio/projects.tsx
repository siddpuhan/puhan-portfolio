"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    id: "thinkroom",
    title: "ThinkRoom AI",
    description: "An AI-powered collaborative workspace that transforms conversations into structured knowledge by automatically extracting tasks, summaries, and key decisions in real time.",
    category: "AI Productivity",
    github: "https://github.com/siddpuhan/thinkroom-AI",
    demo: "https://jointhinkroom.vercel.app/",
    image: "/projects/thinkroom.png",
  },
  {
    id: "phishguard",
    title: "PhishGuard AI",
    description: "An AI-powered phishing detection platform that analyzes suspicious URLs using LLMs and provides explainable threat analysis instead of simple safe/unsafe results.",
    category: "AI Security",
    github: "https://github.com/siddpuhan/PhishGUARD",
    demo: "https://phish-guard-bay.vercel.app/",
    image: "/projects/phishguard.png",
  },
  {
    id: "kropify",
    title: "Kropify",
    description: "An AI-powered crop yield prediction platform that leverages Google Gemini to generate intelligent agricultural insights from user-provided farming data.",
    category: "AI Agriculture",
    github: "https://github.com/siddpuhan/Kropify",
    demo: "https://kropify.vercel.app/",
    image: "/projects/kropify.png",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group"
    >
      <div className={`grid gap-10 lg:grid-cols-2 lg:gap-14 ${isEven ? "" : "lg:[grid-template-areas:_'content_media']"}`}>
        <div className="flex flex-col justify-center lg:pe-8" style={{ gridArea: isEven ? undefined : "content" }}>
          <motion.span
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17, duration: 0.2 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card-bg px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-fg-primary"
          >
            <span className="relative h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
            {project.category}
          </motion.span>

          <motion.h3
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="mt-5 font-display text-2xl font-bold tracking-tight text-fg-primary sm:text-3xl"
          >
            {project.title}
          </motion.h3>

          <motion.p
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
            className="mt-4 max-w-[55ch] text-base leading-[1.8] text-fg-secondary"
          >
            {project.description}
          </motion.p>

          <div className="mt-8 flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition-colors duration-200 hover:text-accent-hover group/link"
            >
              <GithubIcon className="h-4 w-4 transition-transform duration-200 group-hover/link:scale-110" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition-colors duration-200 hover:text-accent-hover group/link"
            >
              <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/link:scale-110" />
              <span>Live Demo</span>
            </motion.a>
          </div>
        </div>

        <div className="relative aspect-[4/3] group" style={{ gridArea: isEven ? undefined : "media" }}>
          <motion.div
            className="project-card-browser"
            whileHover={{
              borderColor: "var(--card-border-hover)",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              y: -3,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center gap-1.5 px-3 py-2.5 bg-card-bg border-b border-card-border">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="relative w-full h-[calc(100%-36px)] bg-mockup-bg p-5 overflow-hidden flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-all duration-500 ease-[0.25,0.46,0.45,0.94] group-hover:scale-103 group-hover:-translate-y-2 group-hover:brightness-105"
                priority={index < 2}
                style={{ objectFit: "contain", backgroundColor: "var(--mockup-bg)" }}
              />
            </div>
          </motion.div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 pointer-events-none">
            <div className="rounded-lg bg-card-bg/90 backdrop-blur-sm px-3 py-1.5 text-[11px] font-medium text-fg-secondary">
              {project.category}
            </div>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-card-bg/90 backdrop-blur-sm p-2 text-fg-secondary transition-colors hover:text-accent-hover"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-subheading">Featured Work</span>
          <h2 className="mt-2 section-heading">Selected Projects</h2>
        </motion.div>

        <div className="mt-14 space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}