import Link from "next/link";
import { ArrowRight } from "./Icons";

type Variant = "primary" | "secondary" | "ghost" | "light" | "outline-light";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
  secondary: "border border-line-2 text-ink hover:border-ink bg-transparent",
  ghost: "text-ink px-0! h-auto! underline-offset-4",
  light: "bg-paper text-ink hover:bg-white",
  "outline-light": "border border-night-line text-paper hover:border-fog",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className = "",
  size = "md",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  size?: "md" | "lg";
}) {
  const external = href.startsWith("http");
  const sizing = size === "lg" ? "h-14 px-7 text-[0.98rem]" : "h-11 px-5 text-[0.9rem]";
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-[-0.005em] transition-[background-color,border-color,color,transform] duration-300 ease-out-soft active:scale-[0.98] ${sizing} ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      {arrow && <ArrowRight className="size-4 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5" />}
    </Link>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[0.92rem] font-medium text-current ${className}`}
    >
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-out-soft group-hover:bg-[length:100%_1px]">
        {children}
      </span>
      <ArrowRight className="size-3.5 transition-transform duration-300 ease-out-soft group-hover:translate-x-0.5" />
    </Link>
  );
}
