import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const styles = {
    primary:
      "bg-rausch text-white hover:bg-rausch-dark shadow-[0_0_0_0_rgba(255,90,95,0)] hover:shadow-[0_12px_40px_var(--rausch-glow)]",
    secondary: "bg-ink text-void hover:bg-white",
    ghost: "bg-transparent text-ink hover:bg-white/5",
    outline: "bg-transparent text-ink border border-line-strong hover:border-ink/50 hover:bg-white/5",
  }[variant];

  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition duration-300 ease-[var(--ease-apple)]",
    styles,
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
