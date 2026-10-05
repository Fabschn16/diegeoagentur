import Image from "next/image";
import { clients, platforms, site } from "@/lib/site";
import { l10n } from "@/lib/l10n";
import type { Locale } from "@/lib/i18n";

const copy = {
  de: {
    heading: "Wir optimieren für",
    builtOnA: "Die GEO Agentur baut auf der Search- und Datenpraxis von",
    builtOnB: "auf.",
    clients: "Unternehmen, die wir betreuen",
    footnote: "Kennzahlen: Daily Rocket, Stand September 2026.",
  },
  en: {
    heading: "We optimise for",
    builtOnA: "Die GEO Agentur builds on the search and data expertise of",
    builtOnB: ".",
    clients: "Companies we work with",
    footnote: "Figures: Daily Rocket, as of September 2026.",
  },
};

export function PlatformStrip({ locale = "de" }: { locale?: Locale }) {
  const t = copy[locale];
  const { provenStats } = l10n(locale);
  return (
    <section aria-labelledby="plattformen" className="border-y border-line bg-paper-2/60">
      <div className="container-x py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-3">
            <h2 id="plattformen" className="eyebrow text-muted">
              {t.heading}
            </h2>
          </div>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:col-span-9 lg:justify-between">
            {platforms.map((p) => (
              <li key={p} className="text-[1.2rem] font-medium tracking-[-0.02em] text-ink/80 sm:text-[1.4rem]">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-12">
          <p className="text-[0.92rem] leading-relaxed text-muted lg:col-span-3">
            {t.builtOnA}{" "}
            <a href={site.sister.url} target="_blank" rel="noopener" className="text-ink underline decoration-line-2 underline-offset-4 hover:decoration-ink">
              Daily Rocket
            </a>
            {locale === "en" ? t.builtOnB : <>{" "}{t.builtOnB}</>}
          </p>
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-9">
            {provenStats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-4 sm:block">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-[1.9rem] font-medium leading-none tracking-[-0.03em] sm:text-[2.4rem]">{s.value}</dd>
                <dd className="text-[0.88rem] text-muted sm:mt-2">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-10 border-t border-line pt-8">
          <h3 className="eyebrow text-muted">{t.clients}</h3>
          <ul className="mt-6 grid grid-cols-3 items-center gap-x-8 gap-y-6 sm:grid-cols-6">
            {clients.map((c) => (
              <li key={c.name} className="relative h-10">
                <Image src={c.logo} alt={c.name} fill sizes="160px" className="object-contain" />
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-[0.74rem] text-muted/80">
          {t.footnote}
        </p>
      </div>
    </section>
  );
}
