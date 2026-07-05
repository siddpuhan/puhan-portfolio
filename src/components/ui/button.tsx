import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-[-0.01em] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-slate-950 shadow-[0_20px_60px_rgba(255,255,255,0.16)] hover:-translate-y-0.5 hover:bg-slate-100 dark:bg-white dark:text-slate-950",
        secondary:
          "border border-white/12 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.1] light:border-slate-900/10 light:bg-slate-950/[0.04] light:text-slate-950 light:hover:bg-slate-950/[0.07]",
        ghost:
          "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground light:hover:bg-slate-950/[0.05]",
        accent:
          "border border-sky-300/30 bg-sky-400/10 text-sky-100 shadow-[0_18px_50px_rgba(56,189,248,0.12)] hover:-translate-y-0.5 hover:bg-sky-400/15 light:text-sky-700",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: false;
  };

type ButtonAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    asChild: true;
  };

export function Button(props: ButtonProps | ButtonAnchorProps) {
  const { className, variant, size, asChild, ...rest } = props;

  if (asChild) {
    return <a className={cn(buttonVariants({ variant, size }), className)} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={cn(buttonVariants({ variant, size }), className)} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
