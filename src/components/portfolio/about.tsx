"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Code, Download, Rocket, Sparkles, Target, Code2 } from "lucide-react";

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
    subtitle: "Track Winner - Best Use of Auth0",
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

const highlights = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: Rocket, label: "AI Products" },
  { icon: Target, label: "Problem Solving" },
];

export function About() {
  return (
    <section id="about" className="relative">
      <div className="relative z-10 px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
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
              I build intelligent full-stack applications with modern web technologies and practical AI - focused on real-world impact.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid lg:grid-cols-2 gap-[80px] items-start"
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

                {/* Highlight Items */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="pt-6 flex flex-wrap items-center gap-6 sm:gap-8"
                >
                  {highlights.map((item, index) => (
                    <motion.span
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="inline-flex items-center gap-2 text-sm text-fg-secondary"
                    >
                      <item.icon className="h-4 w-4 text-fg-muted" aria-hidden="true" />
                      <span className="font-medium text-fg-primary">{item.label}</span>
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Premium Cards Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex items-start justify-center"
              >
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-white opacity-60 rounded-3xl" aria-hidden="true" />
                  <div className="relative rounded-3xl bg-[rgba(248,250,252,0.75)] backdrop-blur-md p-4 border border-[rgba(226,232,240,0.8)] shadow-xl">
                  <div className="grid gap-4">
                    {/* Card 1: Building AI Products */}
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
                      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                      className="group relative rounded-3xl border border-border bg-white p-4 text-center transition-all duration-300 hover:shadow-xl"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative mb-3"
                      >
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                        <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                          <Rocket className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </motion.div>
                      <h3 className="font-semibold text-xl text-fg-primary">Building AI Products</h3>
                      <p className="mt-1.5 font-medium text-base text-fg-secondary">ThinkRoom AI • PhishGuard • Kropify</p>
                      <p className="mt-1 text-sm text-fg-muted">End-to-end full-stack applications powered by modern AI.</p>
                    </motion.article>

                    {/* Card 2: Modern Tech Stack */}
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                      className="group relative rounded-3xl border border-border bg-white p-4 text-center transition-all duration-300 hover:shadow-xl"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative mb-3"
                      >
                        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                        <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                          <Code2 className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </motion.div>
                      <h3 className="font-semibold text-xl text-fg-primary">Modern Tech Stack</h3>
                      <p className="mt-1.5 font-medium text-base text-fg-secondary">React • Next.js • Node.js • TypeScript</p>
                      <p className="mt-1 text-sm text-fg-muted">Scalable frontend, backend and real-time applications.</p>
                    </motion.article>

                    {/* Card 3: Currently Learning */}
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
                      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                      className="group relative rounded-3xl border border-border bg-white p-4 text-center transition-all duration-300 hover:shadow-xl"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative mb-3"
                      >
                        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                        <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
                          <Target className="h-6 w-6" aria-hidden="true" />
                        </div>
                      </motion.div>
                      <h3 className="font-semibold text-xl text-fg-primary">Currently Learning</h3>
                      <p className="mt-1.5 font-medium text-base text-fg-secondary">DSA • MERN • Machine Learning</p>
                      <p className="mt-1 text-sm text-fg-muted">Continuously improving problem solving and AI engineering.</p>
                    </motion.article>
                  </div>
                </div>
              </div>
            </motion.div>
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
          </div>
        </div>
      </div>
    </section>
  );
}