import Link from "next/link";
import { ArrowRight } from "./Icons";
import { ui, type Locale } from "@/lib/i18n";

/** Thematisch verwandte Seiten mit beschreibenden Ankertexten – Teil des internen Content-Clusters. */
export function RelatedLinks({ title, links, locale = "de" }: { title?: string; links: { label: string; href: string; note?: string }[]; locale?: Locale }) {
  title ??= ui[locale].related;
  return (
    <section aria-label={title} className="border-t border-line py-16">
      <div className="container-x">
        <p className="eyebrow mb-6 text-muted">{title}</p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-line px-5 py-4 transition-colors hover:border-ink">
                <span>
                  <span className="block font-medium">{l.label}</span>
                  {l.note && <span className="mt-1 block text-[0.86rem] leading-snug text-muted">{l.note}</span>}
                </span>
                <ArrowRight className="mt-1 size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
