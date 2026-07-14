"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal, GitCommit, Music, Code, BookOpen, Beaker, AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

const asciiArt = `
    ██╗     █████╗ ██████╗
    ██║    ██╔══██╗██╔══██╗
    ██║    ███████║██████╔╝
    ██║    ██╔══██║██╔══██╗
    ███████╗██║  ██║██████╔╝
    ╚══════╝╚═╝  ╚═╝╚═════╝
`;

const activities = [
  { icon: GitCommit, label: "Latest Commit", value: "fix: resolve websocket reconnection issue" },
  { icon: Music, label: "Now Playing", value: "Blade Runner 2049 — Soundtrack" },
  { icon: Code, label: "LeetCode", value: "Solved 47 problems this week" },
  { icon: BookOpen, label: "Currently Reading", value: "Designing Data-Intensive Applications" },
];

const experiments = [
  { name: "AI Playground", status: "Active", description: "Testing LLM streaming and agent architectures" },
  { name: "CLI Portfolio", status: "In Progress", description: "Terminal-based portfolio in Rust" },
  { name: "WebGL Sandbox", status: "Paused", description: "Three.js experiments with shader effects" },
];

export default function LabPage() {
  const router = useRouter();
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    "Welcome to /lab — Siddharth's experimental space.",
    "Type 'help' to see available commands.",
    "---",
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    const output: string[] = [];

    switch (cmd) {
      case "help":
        output.push("Available commands:");
        output.push("  about     — Who am I?");
        output.push("  skills    — Technical capabilities");
        output.push("  projects  — What I've built");
        output.push("  status    — Current focus");
        output.push("  clear     — Clear terminal");
        output.push("  easter    — 🥚");
        break;
      case "about":
        output.push("Siddharth Puhan — Full Stack Developer & AI Product Builder.");
        output.push("Building products that combine intuitive UX with scalable systems.");
        break;
      case "skills":
        output.push("TypeScript, React, Next.js, Node.js, PostgreSQL, AI APIs,");
        output.push("Socket.IO, Docker, Git, and the discipline to learn anything.");
        break;
      case "projects":
        output.push("ThinkRoom AI  — AI-powered collaborative workspace");
        output.push("PhishGuard AI — AI cybersecurity platform");
        output.push("Kropify       — AI agriculture platform");
        break;
      case "status":
        output.push("Currently: Building, learning, shipping.");
        output.push("Focus: Data Structures, Advanced React, System Design, ML, AI Engineering.");
        break;
      case "clear":
        setTerminalOutput([]);
        setTerminalInput("");
        return;
      case "easter":
        output.push("You found it. 🥚");
        output.push("There are more secrets hidden in this page...");
        break;
      case "sudo":
        output.push("Nice try. 😄");
        break;
      default:
        if (cmd) output.push(`Command not found: ${cmd}. Type 'help' for available commands.`);
    }

    setTerminalOutput((prev) => [...prev, `$ ${terminalInput}`, ...output]);
    setTerminalInput("");
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <motion.button
          type="button"
          onClick={() => router.push("/")}
          className="mb-8 flex items-center gap-2 text-sm text-fg-tertiary transition-colors hover:text-accent"
          whileHover={{ x: -4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </motion.button>

        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 font-mono text-[8px] leading-[1.2] text-accent/60 sm:text-[10px] md:text-xs"
        >
          {asciiArt}
        </motion.pre>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-line bg-bg-surface/20 p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <Terminal className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-fg-primary">Terminal</span>
              </div>
              <div className="mb-4 max-h-48 overflow-y-auto font-mono text-xs leading-relaxed text-fg-tertiary">
                {terminalOutput.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2">
                <span className="font-mono text-xs text-accent">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="flex-1 bg-transparent font-mono text-xs text-fg-primary outline-none"
                  placeholder="Type a command..."
                  autoFocus
                />
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-line bg-bg-surface/20 p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <Activity className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-fg-primary">Activity</span>
              </div>
              <div className="space-y-4">
                {activities.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 h-3.5 w-3.5 text-accent/60" />
                    <div>
                      <p className="text-xs text-fg-muted">{item.label}</p>
                      <p className="text-sm text-fg-secondary">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-line bg-bg-surface/20 p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <Beaker className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-fg-primary">Failed Experiments</span>
              </div>
              <div className="space-y-4">
                {experiments.map((exp) => (
                  <div key={exp.name} className="border-b border-line pb-4 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-fg-secondary">{exp.name}</p>
                      <span className="rounded-full border border-line px-2 py-0.5 text-[10px] text-fg-muted">
                        {exp.status}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-fg-tertiary">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="rounded-2xl border border-line bg-bg-surface/20 p-6"
            >
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-fg-primary">Learning Log</span>
              </div>
              <div className="space-y-3 font-mono text-xs text-fg-tertiary">
                <p className="text-fg-muted">{'// Daily commits keep the impostor away'}</p>
                <p><span className="text-accent/70">const</span> <span className="text-fg-secondary">streak</span> = <span className="text-accent/70">45</span>;</p>
                <p><span className="text-accent/70">const</span> <span className="text-fg-secondary">goal</span> = <span className="text-accent/70">&quot;100 days of shipping&quot;</span>;</p>
                <p className="mt-2 text-fg-muted">{'// Console fun'}</p>
                <p><span className="text-fg-muted">console.</span><span className="text-accent/70">log</span>(<span className="text-accent/70">&quot;You found the secret lab. Nice.&quot;</span>);</p>
                <p className="mt-2 text-fg-muted">{'// Try the Konami Code ↑↑↓↓←→←→BA on the main page'}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Activity(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
