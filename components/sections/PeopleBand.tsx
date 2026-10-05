import Image from "next/image";
import { Mail } from "@/components/ui/Icons";
import { l10n } from "@/lib/l10n";
import type { Locale } from "@/lib/i18n";

const copy = {
  de: {
    label: "Ihre Ansprechpartner",
    alt: "Fabian Schnabel und Jan Hugo, Gründer und Geschäftsführer von Die GEO Agentur",
    eyebrow: "Persönlich statt Account-Manager",
    title: "Sie sprechen direkt mit den Gründern – ",
    titleEm: "von der ersten Analyse bis zum Reporting.",
  },
  en: {
    label: "Your contacts",
    alt: "Fabian Schnabel and Jan Hugo, founders and managing directors of Die GEO Agentur",
    eyebrow: "Personal, not an account manager",
    title: "You talk directly to the founders – ",
    titleEm: "from the first analysis to the reporting.",
  },
};

/** Bildband mit Fabian und Jan – gibt der Startseite früh ein Gesicht. */
export function PeopleBand({ locale = "de" }: { locale?: Locale }) {
  const t = copy[locale];
  const { team } = l10n(locale);
  const ordered = ["fabian", "jan"].map((id) => team.find((t) => t.id === id)!);
  return (
    <section aria-label={t.label} className="pb-24 lg:pb-32">
      <div className="container-x">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="relative aspect-[3/2] overflow-hidden rounded-[28px] bg-paper-2 lg:col-span-7" data-reveal>
            <Image
              src="/images/team/team.jpg"
              alt={t.alt}
              fill
              sizes="(min-width: 1024px) 700px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5" data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
            <p className="eyebrow text-muted">{t.eyebrow}</p>
            <p className="mt-5 text-[1.6rem] font-medium leading-[1.2] tracking-[-0.02em] sm:text-[2rem]">
              {t.title}<span className="em">{t.titleEm}</span>
            </p>
            <ul className="mt-8 space-y-2.5">
              {ordered.map((p) => (
                <li key={p.id}>
                  <a
                    href={`mailto:${p.email}`}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-card p-3 pr-5 transition-colors hover:border-ink"
                  >
                    <span className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-paper-2">
                      <Image src={p.image} alt="" fill sizes="112px" className="object-cover" style={{ transform: "scale(2)", transformOrigin: p.face, objectPosition: p.face }} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.98rem] font-medium">{p.name}</span>
                      <span className="block break-all text-[0.84rem] text-muted">{p.email}</span>
                    </span>
                    <Mail className="size-4 shrink-0 text-muted transition-colors group-hover:text-ink" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
