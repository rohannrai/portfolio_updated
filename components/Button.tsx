"use client";

import { cn } from "@/lib/utils";
import { MagneticButton } from "./MagneticButton";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  magnetic?: boolean;
}

const variants = {
  primary:
    "bg-accent text-bg hover:bg-accent/90 shadow-lg shadow-accent/10",
  secondary:
    "bg-card text-text border border-white/[0.08] hover:border-accent/30 hover:bg-white/[0.03]",
  ghost: "text-text-secondary hover:text-text hover:bg-white/[0.05]",
  outline:
    "border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent/60",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled,
  className,
  magnetic = true,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const inner = <span className={classes}>{children}</span>;

  if (magnetic) {
    return (
      <MagneticButton href={href} onClick={onClick} type={type} disabled={disabled}>
        {inner}
      </MagneticButton>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
