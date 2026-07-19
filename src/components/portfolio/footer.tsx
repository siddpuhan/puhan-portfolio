"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { AsciiArt } from "@/components/ui/ascii-flower";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:puhansiddharth@gmail.com", copyable: "puhansiddharth@gmail.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/siddpuhan" },
  { icon: ExternalLink, label: "X", href: "https://x.com/SPuhan80780" },
  { icon: MapPin, label: "LinkedIn", href: "#" },
];

const techStack = ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"];

function CopyToast({ visible }: { visible: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 4 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-surface px-2.5 py-1 text-[11px] text-fg-primary shadow-sm"
    >
      Copied!
    </motion.span>
  );
}

export function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

return (
    <footer className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 z-0">
        {/* PUHAN — behind the ASCII texture, darker & recognizable, no blur */}
        <div
          className="pointer-events-none absolute inset-0 select-none overflow-hidden font-display font-black leading-[0.8]"
          aria-hidden
          style={{
            color: "var(--fg-muted)",
            opacity: 0.14,
            letterSpacing: "0.12em",
            WebkitTextStroke: "1.5px var(--footer-watermark)",
            fontSize: "clamp(12rem, 22vw, 26rem)",
            WebkitMaskImage:
              "radial-gradient(120% 120% at 50% 100%, black 35%, transparent 80%)",
            maskImage:
              "radial-gradient(120% 120% at 50% 100%, black 35%, transparent 80%)",
          }}
        >
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap">
            PUHAN
          </span>
        </div>

        {/* ASCII animation — subtle texture above PUHAN, below content */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            filter: "brightness(0.55) contrast(0.9) blur(1.5px) saturate(0.8)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)",
          }}
        >
          <AsciiArt className="h-full w-full" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 px-6 pb-20 pt-24 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-[1200px] items-start gap-12 md:grid-cols-3 md:gap-20">
          {/* Left — Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight text-fg-primary">
              Siddharth Puhan
            </h3>
            <p className="mt-4 max-w-[340px] text-base leading-relaxed text-fg-secondary">
              Full Stack Developer focused on building AI-powered products with modern web technologies, scalable backend systems, and thoughtful user experiences.
            </p>
          </div>

          {/* Center — Navigation */}
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.15em] text-fg-muted">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline text-lg leading-relaxed text-fg-primary transition-colors duration-200 hover:text-accent-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact */}
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.15em] text-fg-muted">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li>
                <button
                  type="button"
                  onClick={() => handleCopy("puhansiddharth@gmail.com")}
                  className="group relative flex items-center gap-2.5 text-lg leading-relaxed text-fg-primary transition-colors duration-200 hover:text-accent-hover"
                >
                  <Mail className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  <span className="link-underline">puhansiddharth@gmail.com</span>
                  <CopyToast visible={copied} />
                </button>
              </li>
              {socialLinks.slice(1).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2.5 text-lg leading-relaxed text-fg-primary transition-colors duration-200 hover:text-accent-hover"
                  >
                    <link.icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto mt-20 max-w-[1200px] border-t border-border pt-8">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-fg-secondary sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-left">
            <p className="order-1">
              &copy; {new Date().getFullYear()} Siddharth Puhan
            </p>
            <p className="order-3 sm:order-2">
              Designed & Developed by Siddharth Puhan
            </p>
            <p className="order-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:order-3 sm:justify-end">
              <span>Built with</span>
              {techStack.map((tech, i) => (
                <span key={tech} className="inline-flex items-center">
                  <span className="text-fg-secondary">{tech}</span>
                  {i < techStack.length - 1 && <span className="ml-2">·</span>}
                </span>
              ))}
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
