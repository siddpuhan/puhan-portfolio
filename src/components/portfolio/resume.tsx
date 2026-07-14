"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="section-subheading">Experience</span>
          <h2 className="mt-2 section-heading">Resume</h2>
          <p className="mt-4 text-base leading-[1.8] text-fg-secondary max-w-2xl">
            A detailed overview of my education, projects, technical skills, and achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <a
            href="/siddharth_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}