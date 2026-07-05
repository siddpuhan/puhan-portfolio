import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://siddharth-puhan.dev"),
  title: {
    default: "Siddharth Puhan — AI Software Engineer",
    template: "%s | Siddharth Puhan",
  },
  description:
    "Premium software engineering portfolio of Siddharth Puhan, an AI-focused full-stack engineer building startup-grade products with Next.js, TypeScript, and modern infrastructure.",
  keywords: [
    "Siddharth Puhan",
    "AI Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "AI Engineer",
    "Startup Engineer",
    "Product Engineer",
  ],
  authors: [{ name: "Siddharth Puhan" }],
  creator: "Siddharth Puhan",
  openGraph: {
    title: "Siddharth Puhan — AI Software Engineer",
    description: "Building AI-powered software that feels like a product, not a project.",
    url: "https://siddharth-puhan.dev",
    siteName: "Siddharth Puhan",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Puhan — AI Software Engineer",
    description: "Startup-grade AI software engineering portfolio.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} cursor-none font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
