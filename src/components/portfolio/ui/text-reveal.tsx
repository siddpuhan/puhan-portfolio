"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({ children, className, delay = 0, as: Tag = "span" }: TextRevealProps) {
  const reduced = useReducedMotion();

  return (
    <Tag className={`inline-block overflow-hidden ${className ?? ""}`}>
      <motion.span
        initial={reduced ? {} : { y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </Tag>
  );
}
