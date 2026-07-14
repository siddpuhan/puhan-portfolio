"use client";

import { motion } from "framer-motion";
import { ArrowDown, Award, BookOpen, Code, Download, Sparkles, Target } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    items: ["C++", "C", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    icon: Code,
    items: ["React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Code,
    items: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "AI & ML",
    icon: Sparkles,
    items: ["Groq API", "Google Gemini API", "Prompt Engineering"],
  },
  {
    title: "Databases",
    icon: Code,
    items: ["PostgreSQL", "Supabase"],
  },
  {
    title: "Deployment",
    icon: Code,
    items: ["Vercel", "Render"],
  },
  {
    title: "Tools",
    icon: Code,
    items: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
];

const achievements = [
  {
    icon: Award,
    title: "Smart India Hackathon",
    subtitle: "Regional Finalist",
    description: "Competed among top teams nationally with an innovative solution.",
  },
  {
    icon: Award,
    title: "AceHack 4.0 (MLH)",
    subtitle: "Track Winner — Best Use of Auth0",
    description: "Recognized for best implementation of authentication in a hackathon project.",
  },
  {
    icon: BookOpen,
    title: "Technical Coordinator",
    subtitle: "Amity Coding Club",
    description: "Led a team of 20+ students while organizing technical events and contributing multiple development projects.",
  },
];

const focusItems = [
  "Data Structures & Algorithms",
  "MERN Stack",
  "Machine Learning",
];

export function About() {
  return (
    <section id="about" className="relative">
      <div className="relative z-10 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="section-subheading inline-block">Introduction</span>
            <h2 className="mt-4 section-heading text-3xl sm:text-4xl lg:text-5xl">About Me</h2>
            <p className="mt-6 text-lg leading-[1.8] text-fg-secondary max-w-xl mx-auto">
              I build intelligent full-stack applications with modern web technologies and practical AI — focused on real-world impact.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              <div className="space-y-6">
                <div className="space-y-5 text-base leading-[1.8] text-fg-secondary">
                  <p>
                    I am a full-stack developer focused on building scalable web applications that combine intuitive user experiences with efficient backend systems. I enjoy solving real-world problems through thoughtful engineering, practical AI integration, and continuous learning.
                  </p>
                  <p>
                    I am currently expanding my skills in Data Structures & Algorithms, Machine Learning, and modern full-stack development while building projects that solve meaningful problems.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#projects"
                    className="btn-primary"
                  >
                    View Projects
                    <ArrowDown className="h-4 w-4" />
                  </a>
                  <a
                    href="/Siddharth-Puhan-Resume.txt"
                    download
                    className="btn-secondary"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative aspect-square max-w-md mx-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-white opacity-60 rounded-3xl" aria-hidden="true" />
                  <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 border border-border shadow-xl">
                    <div className="grid gap-4 text-center">
                      <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                        <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-fg-primary">Full-Stack Developer</p>
                        <p className="text-xs text-fg-muted">React, Next.js, Node.js, TypeScript</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                        <Sparkles className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-fg-primary">AI Integration</p>
                        <p className="text-xs text-fg-muted">Groq, Gemini, Prompt Engineering</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white border border-border shadow-sm">
                        <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-fg-primary">Problem Solving</p>
                        <p className="text-xs text-fg-muted">DSA, Algorithms, System Design</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="section-subheading">Tech Stack</span>
                <h3 className="mt-2 section-heading">Skills & Technologies</h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((cat, index) => (
                  <motion.article
                    key={cat.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="group relative rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-border-hover hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                        <cat.icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-semibold text-fg-primary">{cat.title}</h4>
                    </div>
                    <p className="text-sm leading-[1.75] text-fg-secondary prose-sm">
                      {cat.items.join("  ·  ")}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="section-subheading">Recognition</span>
                <h3 className="mt-2 section-heading">Achievements</h3>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {achievements.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group relative rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-border-hover hover:-translate-y-1"
                  >
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-600 inline-block">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h4 className="mt-4 text-sm font-semibold text-fg-primary">{item.title}</h4>
                    <p className="mt-1 text-sm text-fg-secondary">{item.subtitle}</p>
                    {item.description && (
                      <p className="mt-4 text-sm leading-relaxed text-fg-secondary">{item.description}</p>
                    )}
                  </motion.article>
                ))}
              </div>
            </motion.div>

            {/* Current Focus Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="section-subheading">Current Focus</span>
                <h3 className="mt-2 section-heading">Currently Learning</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {focusItems.map((item, index) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="rounded-lg border border-border px-4 py-2 text-sm text-fg-primary transition-colors hover:border-border-hover hover:bg-surface"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Resume Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-8 border-t border-border"
            >
              <div className="text-center max-w-2xl mx-auto">
                <span className="section-subheading">Experience</span>
                <h3 className="mt-2 section-heading">Resume</h3>
                <p className="mt-4 text-base leading-[1.8] text-fg-secondary">
                  Detailed overview of my education, experience, and projects.
                </p>
                <div className="mt-8">
                  <a
                    href="/Siddharth-Puhan-Resume.txt"
                    download
                    className="btn-primary inline-flex"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}