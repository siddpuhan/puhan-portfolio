"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const mobileSections = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Focus", href: "#focus" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.querySelector(s.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [mounted]);

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  if (!mounted) return null;

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <AnimatePresence mode="wait">
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        ) : null}
      </AnimatePresence>

      <motion.nav
        animate={{
          paddingLeft: scrolled ? "16px" : "20px",
          paddingRight: scrolled ? "16px" : "20px",
          paddingTop: scrolled ? "8px" : "8px",
          paddingBottom: scrolled ? "8px" : "8px",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex items-center gap-6 rounded-[999px] border border-border/60 bg-white/80 backdrop-blur-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.03)]"
        style={{ height: scrolled ? "48px" : "56px" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          onClick={scrollTo("#hero")}
          className="text-sm font-semibold tracking-tight text-fg-primary flex-shrink-0"
          aria-label="Siddharth Puhan - Home"
        >
          SP
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {sections.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={scrollTo(item.href)}
              className={`relative px-3 py-1.5 text-sm transition-colors duration-200 ${
                active === item.href
                  ? "text-fg-primary font-medium"
                  : "text-fg-secondary hover:text-fg-primary"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
              {active === item.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-fg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <button
          className="lg:hidden flex items-center justify-center p-1.5 rounded-full text-fg-secondary hover:text-fg-primary hover:bg-surface transition-colors duration-200"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <Menu className="h-5 w-5" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 z-50 px-4 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-sm rounded-2xl border border-border bg-white/95 backdrop-blur-xl shadow-lg p-4"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold tracking-tight text-fg-primary">SP</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-full text-fg-secondary hover:text-fg-primary hover:bg-surface transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {mobileSections.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={scrollTo(item.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    className="px-3 py-2.5 text-sm rounded-xl text-fg-secondary hover:text-fg-primary hover:bg-surface transition-colors duration-200"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}