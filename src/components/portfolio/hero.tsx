"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { HeroVisualization } from "./hero-visualization";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/siddpuhan" },
  { icon: TwitterIcon, label: "X / Twitter", href: "https://x.com/SPuhan80780" },
  { icon: Mail, label: "Email", href: "mailto:puhansiddharth@gmail.com" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16"
      style={{ paddingTop: "8rem", paddingBottom: "6rem" }}
    >
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-[580px]"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-fg-muted"
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <motion.span
                className="absolute inset-0 rounded-full bg-accent-hover"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative rounded-full bg-accent-hover" />
            </span>
            Available for Internships
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-5 font-display text-[clamp(2.8rem,7vw,5rem)] font-bold leading-[1.02] tracking-[-0.04em] text-fg-primary"
          >
            Siddharth
            <br />
            Puhan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 max-w-[480px] text-base leading-[1.8] text-fg-secondary sm:text-lg"
          >
            I build intelligent full-stack applications with modern web technologies and practical AI — focused on real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-fg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-hover hover:shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
            </a>
            <a
              href="/Siddharth-Puhan-Resume.txt"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-fg-primary transition-all duration-200 hover:border-border-hover hover:bg-surface hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex items-center gap-7"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-fg-secondary transition-colors duration-200 hover:text-accent-hover"
              >
                <link.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative aspect-square w-full max-w-[520px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-white opacity-60" aria-hidden="true" />
            <HeroVisualization />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
          className="flex items-center gap-2 text-xs text-fg-muted"
        >
          <ArrowDown className="h-3 w-3" />
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}