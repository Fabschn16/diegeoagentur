import Link from "next/link";

/**
 * Wortmarke: „Die GEO Agentur“ mit der Quellenmarke [1] –
 * das Zeichen, mit dem KI-Antworten ihre Quellen belegen.
 */
export function Logo({ className = "", tone = "ink" }: { className?: string; tone?: "ink" | "paper" }) {
  return (
    <Link
      href="/"
      aria-label="Die GEO Agentur – Startseite"
      className={`group inline-flex items-start gap-[0.2em] text-[1.06rem] leading-none tracking-[-0.02em] ${
        tone === "paper" ? "text-paper" : "text-ink"
      } ${className}`}
    >
      <span className="font-normal">Die</span>
      <span className="font-semibold">GEO</span>
      <span className="font-normal">Agentur</span>
      <span
        aria-hidden="true"
        className="ml-[0.1em] -mt-[0.28em] rounded-[3px] bg-signal px-[0.28em] py-[0.1em] font-mono text-[0.55em] font-medium leading-[1.2] text-white transition-transform duration-500 ease-out-soft group-hover:-translate-y-0.5"
      >
        1
      </span>
    </Link>
  );
}
