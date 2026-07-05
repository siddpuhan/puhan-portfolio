"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  download?: boolean;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  className = "",
  variant = "primary",
  href,
  onClick,
  download,
  target,
  rel,
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });
  const background = useMotionTemplate`radial-gradient(circle at ${springX}px ${springY}px, rgba(255,255,255,0.12) 0%, transparent 50%)`;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) * 0.25);
    y.set((event.clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-tight outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-fg-5 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-0 disabled:opacity-50";

  const variants = {
    primary:
      "bg-fg-1 text-bg-0 shadow-[0_1px_1px_rgba(255,255,255,0.12)_inset,0_12px_40px_rgba(255,255,255,0.08)] hover:shadow-[0_1px_1px_rgba(255,255,255,0.16)_inset,0_18px_60px_rgba(255,255,255,0.14)]",
    secondary:
      "border border-line-strong bg-surface text-fg-2 shadow-[0_1px_1px_rgba(255,255,255,0.04)_inset] hover:border-fg-8 hover:bg-surface-hover hover:text-fg-1",
    ghost: "text-fg-5 hover:text-fg-2",
  };

  const content = (
    <>
      <motion.span
        style={{ x: springX, y: springY }}
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span
          className="absolute inset-0"
          style={{ background: reduced ? undefined : background.get() }}
        />
      </motion.span>
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
    </>
  );

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={reduced ? {} : { scale: 1.02 }}
        whileTap={reduced ? {} : { scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={classes}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={reduced ? {} : { scale: 1.02 }}
      whileTap={reduced ? {} : { scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
