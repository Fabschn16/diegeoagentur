import type { Faq } from "@/lib/faq";
import { ArrowRight, Plus } from "./Icons";
import { RichText } from "./RichText";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";

/** Native <details> – ohne JavaScript bedienbar und vollständig crawlbar. */
/** `locale` nur zur Einheitlichkeit: Fragen und Antworten kommen sprachspezifisch über `items`. */
export function FaqList({ items, tone = "ink" }: { items: Faq[]; tone?: "ink" | "paper"; locale?: Locale }) {
  const line = tone === "paper" ? "border-night-line" : "border-line";
  const muted = tone === "paper" ? "text-fog" : "text-muted";
  return (
    <div className={`border-t ${line}`}>
      {items.map((f, i) => (
        <details key={f.q} className={`group border-b ${line}`} data-reveal style={{ ["--reveal-delay" as string]: `${Math.min(i, 6) * 40}ms` }}>
          <summary className="flex cursor-pointer list-none items-start gap-5 py-6 sm:gap-8 sm:py-7">
            <span className={`mt-1.5 hidden w-8 shrink-0 font-mono text-[0.7rem] sm:block ${muted}`}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className="flex-1 text-[1.12rem] font-medium leading-snug tracking-[-0.01em] sm:text-[1.3rem]">{f.q}</h3>
            <span
              className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border ${line} transition-transform duration-300 group-open:rotate-45`}
            >
              <Plus className="size-3.5" />
            </span>
          </summary>
          <div className={`pb-8 sm:pl-16 sm:pr-16 ${muted}`}>
            {f.a.map((p, n) => (
              <p key={n} className={`max-w-3xl text-[1rem] leading-[1.7] ${n === 0 ? (tone === "paper" ? "text-paper" : "text-ink") : ""} ${n > 0 ? "mt-4" : ""}`}>
                <RichText text={p} />
              </p>
            ))}
            {f.link && (
              <Link href={f.link.href} className="mt-5 inline-flex items-center gap-2 text-[0.92rem] font-medium text-ink hover:underline hover:underline-offset-4">
                {f.link.label} <ArrowRight className="size-3.5" />
              </Link>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
