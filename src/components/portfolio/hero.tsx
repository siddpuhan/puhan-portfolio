"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";
import { TextReveal } from "./ui/text-reveal";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 160]);
  const y2 = useTransform(scrollY, [0, 800], [0, -80]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end px-5 pb-20 pt-32 sm:px-6 lg:items-center lg:pb-0 lg:pt-0"
    >
      <motion.div
        style={{ y: y1, opacity }}
        className="pointer-events-none absolute right-[-10%] top-[-10%] h-[60vh] w-[60vh] rounded-full bg-gradient-to-br from-fg-1/5 to-transparent blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="pointer-events-none absolute bottom-[10%] left-[-10%] h-[40vh] w-[40vh] rounded-full bg-gradient-to-tr from-fg-1/[0.03] to-transparent blur-[100px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-surface px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm font-medium text-fg-4">Available for internships & product roles</span>
          </motion.div>

          <h1 className="text-balance text-[clamp(3rem,10vw,8.5rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
            <TextReveal delay={0.3}>AI Software</TextReveal>
            <br />
            <TextReveal delay={0.42} className="text-fg-5">
              Engineer
            </TextReveal>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-fg-5 sm:text-xl"
          >
            Siddharth Puhan. Building startup-grade AI products with modern full-stack
            engineering. From a Tier-3 college in India, shipping with Tier-1 discipline.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Let&apos;s talk
            </MagneticButton>
            <MagneticButton href="/Siddharth-Puhan-Resume.txt" variant="ghost" download>
              Download Resume
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: y2 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-fg-1/5 via-transparent to-fg-1/[0.02] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-line bg-bg-2/80 p-6 shadow-[0_40px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-fg-8" />
                <span className="h-3 w-3 rounded-full bg-fg-7" />
                <span className="h-3 w-3 rounded-full bg-fg-6" />
              </div>
              <span className="font-mono text-xs text-fg-7">~/mission.ts</span>
            </div>
            <div className="space-y-4 font-mono text-sm leading-7">
              <div className="flex gap-2">
                <span className="text-fg-7">1</span>
                <span>
                  <span className="text-fg-6">const</span>{" "}
                  <span className="text-fg-2">engineer</span> = {"{"}
                </span>
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-fg-7">2</span>
                <span>
                  name: <span className="text-fg-4">&quot;Siddharth Puhan&quot;</span>,
                </span>
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-fg-7">3</span>
                <span>
                  focus: <span className="text-fg-4">&quot;AI-powered products&quot;</span>,
                </span>
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-fg-7">4</span>
                <span>
                  stack: [<span className="text-fg-4">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-fg-4">&quot;TypeScript&quot;</span>,{" "}
                  <span className="text-fg-4">&quot;AI APIs&quot;</span>],
                </span>
              </div>
              <div className="flex gap-2 pl-4">
                <span className="text-fg-7">5</span>
                <span>
                  goal: <span className="text-fg-4">&quot;Build products that earn trust&quot;</span>,
                </span>
              </div>
              <div className="flex gap-2">
                <span className="text-fg-7">6</span>
                <span>{"}"};</span>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { label: "Learning", value: "Daily" },
                { label: "Standard", value: "High" },
                { label: "Output", value: "Shipped" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-line bg-surface p-4"
                >
                  <p className="text-xs text-fg-7">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold text-fg-2">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-14 w-[1px] bg-gradient-to-b from-fg-7 to-transparent"
        />
      </motion.div>
    </section>
  );
}
