"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useScrollDirection } from "./hooks/use-scroll-direction";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav({ theme, onToggleTheme }: { theme: "dark" | "light"; onToggleTheme: () => void }) {
  const direction = useScrollDirection();
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: direction === "down" ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-line bg-glass/80 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 px-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface text-xs font-semibold tracking-tight">
              SP
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              Siddharth Puhan
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full bg-surface/50 p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "group relative px-4 py-2 text-sm font-medium transition-colors",
                  active === item.href ? "text-fg-1" : "text-fg-6 hover:text-fg-3"
                )}
              >
                {active === item.href ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-line bg-surface"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-fg-5 transition hover:text-fg-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-fg-5 transition hover:text-fg-2 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-24 z-50 rounded-3xl border border-line bg-glass/95 p-2 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-sm font-medium transition",
                  active === item.href
                    ? "bg-surface text-fg-1"
                    : "text-fg-6 hover:bg-surface hover:text-fg-3"
                )}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
