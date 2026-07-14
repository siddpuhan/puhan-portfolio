"use client";

import { useEffect, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursorInner() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 250, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 250, damping: 18 });

  const ringScale = useSpring(1, { stiffness: 300, damping: 15 });

  useEffect(() => {
    const hasTouch = navigator.maxTouchPoints > 0;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (hasTouch || coarsePointer) return;

    document.body.style.cursor = "none";

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(centerX);
    mouseY.set(centerY);

    const onMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("button, [role='button'], a[href]")) {
        ringScale.set(1.6);
      } else if (t.closest("img, figure, article")) {
        ringScale.set(2);
      }
    };

    const onLeave = () => ringScale.set(1);

    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-fg-primary bg-transparent"
        style={{
          left: springX,
          top: springY,
          scale: ringScale,
          width: 28,
          height: 28,
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fg-primary"
        style={{
          left: mouseX,
          top: mouseY,
          width: 6,
          height: 6,
        }}
      />
    </>
  );
}

export function CustomCursor() {
  if (typeof window === "undefined") return null;
  return <CustomCursorInner />;
}