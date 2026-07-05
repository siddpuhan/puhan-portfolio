"use client";

import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-line px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-xs font-semibold">
            SP
          </span>
          <span className="text-sm font-medium text-fg-4">Siddharth Puhan</span>
        </div>
        <p className="text-center text-sm text-fg-7">
          © {new Date().getFullYear()} — Built with Next.js, TypeScript, Tailwind, and intent.
        </p>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2 text-sm font-medium text-fg-5 transition hover:text-fg-2"
        >
          Back to top <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </footer>
  );
}
