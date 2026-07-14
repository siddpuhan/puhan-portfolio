"use client";

import { motion } from "framer-motion";

const items = [
  "Data Structures & Algorithms",
  "MERN Stack",
  "Machine Learning",
];

export function Focus() {
  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-subheading">Current Focus</span>
          <h2 className="mt-2 section-heading">Currently Learning</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {items.map((item, index) => (
            <motion.span
              key={item}
              whileHover={{ scale: 1.03, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="rounded-lg border border-border px-4 py-2 text-sm text-fg-primary transition-colors hover:border-border-hover"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}