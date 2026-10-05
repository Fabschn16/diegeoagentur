import Link from "next/link";
import { ui, type Locale } from "@/lib/i18n";

export function Breadcrumbs({ items, locale = "de" }: { items: { name: string; path: string }[]; locale?: Locale }) {
  return (
    <nav aria-label={ui[locale].breadcrumbs} className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href={locale === "en" ? "/en" : "/"} className="hover:text-ink">
            {ui[locale].home}
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-line-2">/</span>
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-ink">
                {it.name}
              </span>
            ) : (
              <Link href={it.path} className="hover:text-ink">
                {it.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
