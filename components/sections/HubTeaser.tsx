import Link from "next/link";
import { articles, categories } from "@/content/articles";
import { ArrowUpRight } from "@/components/ui/Icons";
import { TextLink } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";

type Card = { key: string; category: string; title: string; href: string; meta: string };
type Chip = { key: string; name: string; href: string };

/**
 * Deutsch: Ratgeber-Beiträge. Englisch: Es gibt (noch) keine englischen Ratgeber-Artikel,
 * daher verweisen Karten und Themen ausschließlich auf englische Erklär- und Leistungsseiten.
 */
const copy = {
  de: {
    eyebrow: "GEO Wissen",
    title: (
      <>
        Verstehen, wie <span className="em">KI-Suche</span> funktioniert.
      </>
    ),
    all: { label: "Alle Beiträge", href: "/ratgeber" },
    topics: "Themen",
    cards: articles.map<Card>((a) => ({
      key: a.slug,
      category: a.category,
      title: a.title,
      href: `/ratgeber/${a.slug}`,
      meta: `${a.readingMinutes} Min. Lesezeit`,
    })),
    chips: categories.map<Chip>((c) => ({ key: c.slug, name: c.name, href: `/ratgeber#${c.slug}` })),
  },
  en: {
    eyebrow: "GEO Insights",
    title: (
      <>
        Understand how <span className="em">AI search</span> works.
      </>
    ),
    all: { label: "All services", href: "/en/services" },
    topics: "Topics",
    cards: [
      {
        key: "geo",
        category: "Basics",
        title: "What is Generative Engine Optimization (GEO)?",
        href: "/en/generative-engine-optimization",
        meta: "Explainer",
      },
      {
        key: "agency",
        category: "Agency",
        title: "What a GEO agency does, and what it costs",
        href: "/en/geo-agency",
        meta: "Explainer",
      },
      {
        key: "visibility",
        category: "Measurement",
        title: "How to measure and improve AI visibility",
        href: "/en/ai-visibility",
        meta: "Explainer",
      },
      {
        key: "aio",
        category: "Platforms",
        title: "Optimising for Google AI Overviews",
        href: "/en/google-ai-overviews",
        meta: "Explainer",
      },
    ] as Card[],
    chips: [
      { key: "chatgpt", name: "ChatGPT SEO", href: "/en/chatgpt-seo" },
      { key: "gemini", name: "Gemini SEO", href: "/en/gemini-seo" },
      { key: "perplexity", name: "Perplexity SEO", href: "/en/perplexity-seo" },
      { key: "audit", name: "GEO Audit", href: "/en/geo-audit" },
      { key: "consulting", name: "GEO Consulting", href: "/en/geo-consulting" },
      { key: "facts", name: "Agency facts", href: "/en/facts" },
    ] as Chip[],
  },
};

export function HubTeaser({ index = "10", locale = "de" }: { index?: string; locale?: Locale }) {
  const t = copy[locale];
  return (
    <section aria-labelledby="geo-wissen" className="border-t border-line bg-paper-2/50 py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between" data-reveal>
          <div className="max-w-2xl">
            <p className="eyebrow mb-6 flex items-center gap-3 text-muted">
              <span className="text-ink">{index}</span>
              <span className="h-px w-8 bg-line-2" />
              {t.eyebrow}
            </p>
            <h2 id="geo-wissen" className="text-h2 font-medium text-balance">
              {t.title}
            </h2>
          </div>
          <TextLink href={t.all.href}>{t.all.label}</TextLink>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((a, i) => (
            <li key={a.key} data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
              <Link
                href={a.href}
                className="group flex h-full flex-col rounded-[20px] border border-line bg-paper p-6 transition-[border-color,background-color] duration-500 hover:border-line-2 hover:bg-card"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-muted">{a.category}</span>
                  <ArrowUpRight className="size-3.5 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </div>
                <h3 className="mt-10 text-[1.15rem] font-medium leading-snug tracking-[-0.015em]">{a.title}</h3>
                <p className="mt-auto pt-8 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-muted">{a.meta}</p>
              </Link>
            </li>
          ))}
        </ul>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label={t.topics}>
          {t.chips.map((c) => (
            <li key={c.key}>
              <Link
                href={c.href}
                className="inline-block rounded-full border border-line px-3.5 py-1.5 text-[0.82rem] text-ink-2 transition-colors hover:border-ink hover:text-ink"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
