import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { AuditSection } from "@/components/sections/AuditSection";
import { ArrowUpRight } from "@/components/ui/Icons";
import { articles, categories } from "@/content/articles";
import { abs, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { geoDefinition } from "@/content/pillar";

const title = "GEO Wissen: Ratgeber zu Generative Engine Optimization & AI Search";
const description =
  "Die Knowledge Base zu Generative Engine Optimization: verständliche Ratgeber zu GEO, AI Search, ChatGPT SEO, Google AI Overviews, Perplexity, AEO, LLM Optimization und KI-Sichtbarkeit.";

export const metadata = pageMeta({ title, description, path: "/ratgeber" });

const dateFmt = new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric" });

export default function RatgeberPage() {
  const crumbs = [{ name: "GEO Wissen", path: "/ratgeber" }];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/ratgeber",
            title,
            description,
            type: "CollectionPage",
            about: ["Generative Engine Optimization", "AI Search", "KI-Suchmaschinenoptimierung"],
          }),
          breadcrumbSchema(crumbs),
          {
            "@type": "ItemList",
            "@id": `${abs("/ratgeber")}#artikel`,
            itemListElement: [
              { "@type": "ListItem", position: 1, url: abs("/generative-engine-optimization"), name: "Was ist Generative Engine Optimization (GEO)?" },
              ...articles.map((a, i) => ({ "@type": "ListItem", position: i + 2, url: abs(`/ratgeber/${a.slug}`), name: a.title })),
            ],
          },
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="GEO Wissen"
        title={
          <>
            GEO Wissen: Ratgeber zu Generative Engine Optimization <span className="em">und KI-Suche.</span>
          </>
        }
        lead="Fundierte Beiträge zu Generative Engine Optimization, den einzelnen KI-Plattformen und der Messung von Sichtbarkeit – gegliedert in Grundlagen, Plattformen, Praxis und Strategie. Ohne Buzzwords, mit Quellen."
        showCtas={false}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <nav aria-label="Themen" className="mb-12 flex flex-wrap gap-2">
            {categories.map((c) => {
              const count = articles.filter((a) => a.category === c.name).length + (c.name === "Grundlagen" ? 1 : 0);
              return (
                <a
                  key={c.slug}
                  href={`#${c.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-[0.85rem] text-ink-2 transition-colors hover:border-ink hover:text-ink"
                >
                  {c.name}
                  <span className="font-mono text-[0.66rem] text-muted">{count}</span>
                </a>
              );
            })}
          </nav>

          <Link
            href="/generative-engine-optimization"
            className="group grid gap-8 rounded-[24px] bg-ink p-7 text-paper sm:p-10 lg:grid-cols-12 lg:p-14"
            data-reveal
          >
            <div className="lg:col-span-8">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-fog">Start hier · Grundlagen</p>
              <h2 className="mt-6 text-h2 font-medium text-balance">Was ist Generative Engine Optimization (GEO)?</h2>
              <p className="mt-6 max-w-2xl text-lead text-fog">{geoDefinition}</p>
            </div>
            <div className="flex items-end justify-between lg:col-span-4 lg:flex-col lg:items-end">
              <span className="flex size-12 items-center justify-center rounded-full border border-night-line transition-colors group-hover:bg-paper group-hover:text-ink">
                <ArrowUpRight className="size-4" />
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-fog">Leitfaden & Glossar</span>
            </div>
          </Link>

          <div className="mt-20 space-y-20">
            {categories.map((c) => {
              const list = articles.filter((a) => a.category === c.name);
              return (
                <section key={c.slug} id={c.slug} aria-labelledby={`${c.slug}-t`} className="scroll-mt-24">
                  <div className="mb-8 flex flex-col gap-2 border-t border-ink pt-6 md:flex-row md:items-baseline md:justify-between">
                    <h2 id={`${c.slug}-t`} className="text-[1.6rem] font-medium tracking-[-0.02em]">
                      {c.name}
                    </h2>
                    <p className="max-w-xl text-[0.95rem] text-muted">{c.description}</p>
                  </div>
                  <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {list.map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/ratgeber/${a.slug}`}
                          className="group flex h-full flex-col rounded-[24px] border border-line bg-card p-7 transition-colors hover:border-ink"
                        >
                          <h3 className="text-[1.25rem] font-medium leading-snug tracking-[-0.02em]">{a.title}</h3>
                          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{a.description}</p>
                          <p className="mt-auto flex items-center justify-between pt-8 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-muted">
                            <time dateTime={a.updated}>{dateFmt.format(new Date(a.updated))}</time>
                            <span>{a.readingMinutes} Min.</span>
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <AuditSection />
    </>
  );
}
