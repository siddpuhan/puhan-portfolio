"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    items: ["C++", "C", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "AI",
    items: ["Groq API", "Google Gemini API", "Prompt Engineering"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Supabase"],
  },
  {
    title: "Deployment",
    items: ["Vercel", "Render"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-subheading">Tech Stack</span>
          <h2 className="mt-2 section-heading">Skills</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 space-y-6"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex flex-col gap-2 sm:flex-row sm:gap-4 group"
            >
              <span className="w-28 shrink-0 text-sm font-semibold text-fg-primary">
                {cat.title}
              </span>
              <p className="text-sm leading-[1.75] text-fg-secondary prose-sm">
                {cat.items.join("  ·  ")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}