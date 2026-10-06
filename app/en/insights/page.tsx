import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { AuditSection } from "@/components/sections/AuditSection";
import { ArrowUpRight } from "@/components/ui/Icons";
import { articlesEn, categoriesEn } from "@/content/en/articles";
import { abs, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { geoDefinition } from "@/content/en/pillar";
import { stripLinks } from "@/components/ui/RichText";

const title = "GEO Insights: Guides to Generative Engine Optimization & AI Search";
const description =
  "The knowledge base for Generative Engine Optimization: clear guides to GEO, AI search, ChatGPT SEO, Google AI Overviews, Perplexity, AEO, LLM optimisation and AI visibility.";

export const metadata = pageMeta({ title, description, path: "/en/insights" });

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "long", year: "numeric" });

export default function InsightsPage() {
  const crumbs = [{ name: "GEO Insights", path: "/en/insights" }];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/en/insights",
            title,
            description,
            type: "CollectionPage",
            about: ["Generative Engine Optimization", "AI Search", "AI search optimisation"],
          }),
          breadcrumbSchema(crumbs),
          {
            "@type": "ItemList",
            "@id": `${abs("/en/insights")}#articles`,
            itemListElement: [
              { "@type": "ListItem", position: 1, url: abs("/en/generative-engine-optimization"), name: "What is Generative Engine Optimization (GEO)?" },
              ...articlesEn.map((a, i) => ({ "@type": "ListItem", position: i + 2, url: abs(`/en/insights/${a.slug}`), name: a.title })),
            ],
          },
        )}
      />
      <PageHero
        locale="en"
        crumbs={crumbs}
        eyebrow="GEO Insights"
        title={
          <>
            GEO Insights: guides to Generative Engine Optimization <span className="em">and AI search.</span>
          </>
        }
        lead="In-depth articles on Generative Engine Optimization, the individual AI platforms and how to measure visibility, organised into basics, platforms, practice and strategy. No buzzwords, with sources."
        showCtas={false}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <nav aria-label="Topics" className="mb-12 flex flex-wrap gap-2">
            {categoriesEn.map((c) => {
              const count = articlesEn.filter((a) => a.category === c.key).length + (c.key === "Grundlagen" ? 1 : 0);
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
            href="/en/generative-engine-optimization"
            className="group grid gap-8 rounded-[24px] bg-ink p-7 text-paper sm:p-10 lg:grid-cols-12 lg:p-14"
            data-reveal
          >
            <div className="lg:col-span-8">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-fog">Start here · Basics</p>
              <h2 className="mt-6 text-h2 font-medium text-balance">What is Generative Engine Optimization (GEO)?</h2>
              <p className="mt-6 max-w-2xl text-lead text-fog">{stripLinks(geoDefinition)}</p>
            </div>
            <div className="flex items-end justify-between lg:col-span-4 lg:flex-col lg:items-end">
              <span className="flex size-12 items-center justify-center rounded-full border border-night-line transition-colors group-hover:bg-paper group-hover:text-ink">
                <ArrowUpRight className="size-4" />
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-fog">Guide & glossary</span>
            </div>
          </Link>

          <div className="mt-20 space-y-20">
            {categoriesEn.map((c) => {
              const list = articlesEn.filter((a) => a.category === c.key);
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
                          href={`/en/insights/${a.slug}`}
                          className="group flex h-full flex-col rounded-[24px] border border-line bg-card p-7 transition-colors hover:border-ink"
                        >
                          <h3 className="text-[1.25rem] font-medium leading-snug tracking-[-0.02em]">{a.title}</h3>
                          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{a.description}</p>
                          <p className="mt-auto flex items-center justify-between pt-8 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-muted">
                            <time dateTime={a.updated}>{dateFmt.format(new Date(a.updated))}</time>
                            <span>{a.readingMinutes} min</span>
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

      <AuditSection locale="en" />
    </>
  );
}
