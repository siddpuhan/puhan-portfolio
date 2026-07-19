import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Geist } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siddharth-puhan.dev"),
  title: "Siddharth Puhan | Full Stack Developer",
  description:
    "Portfolio showcasing AI-powered full-stack applications including ThinkRoom AI, PhishGuard AI, and Kropify.",
  keywords: [
    "Siddharth Puhan", "Full Stack Developer", "AI Product Builder",
    "Next.js", "React", "TypeScript", "ThinkRoom AI", "PhishGuard AI", "Kropify",
  ],
  authors: [{ name: "Siddharth Puhan" }],
  creator: "Siddharth Puhan",
  openGraph: {
    title: "Siddharth Puhan | Full Stack Developer",
    description: "Building intelligent full-stack applications with modern web technologies and practical AI.",
    url: "https://siddharth-puhan.dev",
    siteName: "Siddharth Puhan",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Puhan | Full Stack Developer",
    description: "AI-powered full-stack applications.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, spaceGrotesk.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
