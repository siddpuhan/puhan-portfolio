"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <button
        className={cn("relative flex items-center justify-center p-1.5 rounded-full text-fg-secondary hover:text-fg-primary hover:bg-surface transition-colors duration-200", className)}
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5" aria-hidden="true" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn("relative flex items-center justify-center p-1.5 rounded-full text-fg-secondary hover:text-fg-primary hover:bg-surface transition-colors duration-200", className)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: [1, 0.8, 1] }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="h-5 w-5" aria-hidden="true" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : -180, scale: [1, 0.8, 1] }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="h-5 w-5" aria-hidden="true" />
      </motion.div>
    </button>
  );
}