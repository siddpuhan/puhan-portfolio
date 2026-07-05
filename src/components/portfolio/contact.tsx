"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, GitBranch, Network, Send } from "lucide-react";
import { MagneticButton } from "./ui/magnetic-button";
import { Reveal } from "./ui/reveal";
import { TextReveal } from "./ui/text-reveal";
import { cn } from "@/lib/utils";

const links = [
  { icon: Mail, label: "Email", value: "siddharth.puhan@example.com", href: "mailto:siddharth.puhan@example.com" },
  { icon: GitBranch, label: "GitHub", value: "github.com/siddharthpuhan", href: "https://github.com/siddharthpuhan" },
  { icon: Network, label: "LinkedIn", value: "linkedin.com/in/siddharth-puhan", href: "https://www.linkedin.com/in/siddharth-puhan" },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
    });

    const result = (await response.json()) as { ok: boolean; error?: string };

    if (!response.ok || !result.ok) {
      setStatus("error");
      setMessage(result.error ?? "Something went wrong.");
      return;
    }

    form.reset();
    setStatus("success");
    setMessage("Message sent. I'll respond soon.");
  };

  return (
    <section id="contact" className="relative px-5 py-32 sm:px-6 lg:px-8 lg:py-44">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-fg-1/[0.02] blur-[160px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:items-end">
          <TextReveal
            as="h2"
            className="text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
          >
            Let&apos;s build
            <br />
            <span className="text-fg-6">something serious.</span>
          </TextReveal>
          <Reveal className="lg:justify-self-end">
            <p className="max-w-md text-lg leading-relaxed text-fg-6">
              Open to internships, product engineering roles, and collaborations with teams
              that care about craft.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-3xl border border-line bg-surface p-5 transition-all duration-500 hover:border-line-strong hover:bg-surface-hover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-bg-2 text-fg-4 transition group-hover:text-fg-2">
                  <link.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-fg-7">{link.label}</p>
                  <p className="mt-1 font-medium text-fg-2">{link.value}</p>
                </div>
                <ArrowUpRight className="ml-auto h-5 w-5 text-fg-7 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg-4" />
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-[2.5rem] border border-line bg-bg-2/60 p-8 backdrop-blur-sm lg:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              </div>
              <div className="mt-5">
                <Field label="Subject" name="subject" placeholder="Internship, project, collaboration" />
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium text-fg-4">Message</span>
                <textarea
                  name="message"
                  required
                  minLength={20}
                  placeholder="Tell me what you're building or hiring for."
                  className="min-h-36 w-full resize-none rounded-2xl border border-line bg-bg-1/80 px-5 py-4 text-sm text-fg-2 outline-none transition placeholder:text-fg-7 focus:border-line-strong focus:ring-4 focus:ring-fg-1/5"
                />
              </label>
              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <MagneticButton variant="primary">
                  {status === "loading" ? "Sending..." : "Send message"} <Send className="h-4 w-4" />
                </MagneticButton>
                {message ? (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn("text-sm", status === "error" ? "text-red-400" : "text-emerald-400")}
                  >
                    {message}
                  </motion.p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-fg-4">{label}</span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-line bg-bg-1/80 px-5 text-sm text-fg-2 outline-none transition placeholder:text-fg-7 focus:border-line-strong focus:ring-4 focus:ring-fg-1/5"
      />
    </label>
  );
}
