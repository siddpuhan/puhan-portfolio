"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🏆",
    title: "Smart India Hackathon",
    subtitle: "Regional Finalist",
  },
  {
    icon: "🏆",
    title: "AceHack 4.0 (MLH)",
    subtitle: "Track Winner — Best Use of Auth0",
  },
  {
    icon: "💼",
    title: "Technical Coordinator",
    subtitle: "Amity Coding Club",
    description: "Led a team of 20+ students while organizing technical events and contributing multiple development projects.",
  },
];

export function Achievements() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-subheading">Recognition</span>
          <h2 className="mt-2 section-heading">Achievements</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-border-hover hover:-translate-y-1"
            >
              <span className="text-2xl" aria-hidden="true">{item.icon}</span>
              <h3 className="mt-4 text-sm font-semibold text-fg-primary">{item.title}</h3>
              <p className="mt-1 text-sm text-fg-secondary">{item.subtitle}</p>
              {item.description && (
                <p className="mt-4 text-sm leading-relaxed text-fg-secondary">{item.description}</p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}