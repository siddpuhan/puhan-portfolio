"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (reduced) return;

    const onMove = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, [data-cursor='pointer']")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden mix-blend-difference md:block"
      animate={{
        x: position.x - (hovering ? 22 : 10),
        y: position.y - (hovering ? 22 : 10),
        width: hovering ? 44 : 20,
        height: hovering ? 44 : 20,
        opacity: position.x < 0 ? 0 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.25 }}
      style={{ borderRadius: "999px", border: "1px solid rgba(255,255,255,0.85)" }}
    />
  );
}
