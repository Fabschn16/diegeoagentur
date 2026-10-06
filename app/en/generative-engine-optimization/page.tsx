import { PageHero } from "@/components/ui/PageHero";
import { AtAGlance } from "@/components/ui/AtAGlance";
import { AnswerBox } from "@/components/ui/AnswerBox";
import { JsonLd } from "@/components/ui/JsonLd";
import { QASection } from "@/components/ui/QASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CtaBand } from "@/components/sections/CtaBand";
import { geoSignalsEn as geoSignals } from "@/components/sections/WhatIsGeo";
import { geoDefinition, glossary, pillarSections } from "@/content/en/pillar";
import { ORG_ID, abs, breadcrumbSchema, faqSchema, graph, personId, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { l10n } from "@/lib/l10n";

const path = "/en/generative-engine-optimization";
const title = "Generative Engine Optimization (GEO): Definition & Factors";
const description =
  "What is Generative Engine Optimization (GEO)? Definition, how it works, influencing factors, how it differs from SEO, AEO and LLMO, and how to measure it: the guide to AI search optimisation.";

export const metadata = pageMeta({ title, description, path, type: "article" });

const termId = (term: string) => term.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function GeoPillarPageEn() {
  const { cta } = l10n("en");
  const crumbs = [{ name: "Generative Engine Optimization", path }];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path,
            title,
            description,
            mainEntity: `${abs(path)}#article`,
            about: ["Generative Engine Optimization", "AI search optimisation", "AI Search Optimization"],
          }),
          {
            "@type": "Article",
            "@id": `${abs(path)}#article`,
            headline: "What is Generative Engine Optimization (GEO)?",
            description,
            url: abs(path),
            inLanguage: "en",
            datePublished: "2026-10-05",
            dateModified: "2026-10-05",
            author: { "@id": personId("jan") },
            publisher: { "@id": ORG_ID },
            mainEntityOfPage: { "@id": `${abs(path)}#webpage` },
            about: [{ "@type": "Thing", name: "Generative Engine Optimization" }],
            image: abs("/opengraph-image"),
          },
          {
            "@type": "DefinedTermSet",
            "@id": `${abs(path)}#glossar`,
            name: "Glossary: terms related to Generative Engine Optimization",
            inLanguage: "en",
            hasDefinedTerm: glossary.map((t) => ({
              "@type": "DefinedTerm",
              "@id": `${abs(path)}#${termId(t.term)}`,
              termCode: t.term,
              name: t.name,
              description: t.description,
              inDefinedTermSet: { "@id": `${abs(path)}#glossar` },
            })),
          },
          faqSchema(
            pillarSections.map((s) => ({ q: s.q, a: s.a })),
            path,
          ),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        locale="en"
        crumbs={crumbs}
        eyebrow="Fundamentals · Guide"
        title={
          <>
            What is Generative Engine Optimization <span className="em">(GEO)?</span>
          </>
        }
        lead="The guide to AI search optimisation: definition, how it works, the key influencing factors and how it differs from SEO, AEO and LLMO, clearly explained by Die GEO Agentur."
        primary={{ label: cta.primary.label, href: cta.primary.href }}
        aside={
          <AtAGlance
            locale="en"
            rows={[
              { k: "Term", v: "Generative Engine Optimization (GEO)" },
              { k: "Also known as", v: "AI search optimisation, AI Search Optimization, AI SEO" },
              { k: "Goal", v: "To be understood and considered as a source or recommendation in AI answers" },
              { k: "Systems", v: "ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot, Claude" },
              { k: "Coined", v: "2023 in a research paper (Princeton and others)" },
            ]}
          />
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <AnswerBox locale="en" label="Definition">
              {geoDefinition}
            </AnswerBox>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            <h2 className="text-h2 font-medium text-balance">
              Eight signals an AI <span className="em">evaluates.</span>
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.75] text-ink-2">
              GEO looks beyond your own website to every signal a language model uses to form a picture of a brand:
            </p>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {geoSignals.map((s) => (
                <div key={s.t} className="grid gap-1 py-3.5 sm:grid-cols-[200px_1fr] sm:gap-6">
                  <dt className="font-medium">{s.t}</dt>
                  <dd className="text-[0.95rem] leading-relaxed text-muted">{s.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <QASection
        locale="en"
        id="grundlagen"
        eyebrow="Generative Engine Optimization explained"
        title={
          <>
            The key questions <span className="em">about GEO.</span>
          </>
        }
        lead="Each section starts with a short answer, followed by the details."
        items={pillarSections}
        tone="tint"
      />

      <section id="begriffe" aria-labelledby="begriffe-t" className="scroll-mt-24 border-t border-line py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow mb-6 text-muted">Glossary</p>
            <h2 id="begriffe-t" className="text-h2 font-medium text-balance">
              GEO, AEO, LLMO, AIO: <span className="em">the terms at a glance.</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-muted">
              The terms overlap but do not mean exactly the same thing. We use GEO as the umbrella term for all generative search
              systems.
            </p>
          </div>
          <dl className="divide-y divide-line border-y border-ink lg:col-span-7 lg:col-start-6">
            {glossary.map((g) => (
              <div key={g.term} id={termId(g.term)} className="grid scroll-mt-28 gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt>
                  <span className="block font-medium">{g.term}</span>
                  {g.term !== g.name && <span className="block text-[0.85rem] text-muted">{g.name}</span>}
                </dt>
                <dd className="text-[0.98rem] leading-relaxed text-ink-2">{g.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-line py-12">
        <div className="container-x">
          <p className="text-[0.8rem] text-muted">
            Sources:{" "}
            <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener nofollow" className="underline decoration-line-2 underline-offset-2 hover:text-ink">
              Aggarwal et al., GEO: Generative Engine Optimization (arXiv:2311.09735)
            </a>{" "}
            ·{" "}
            <a href="https://en.wikipedia.org/wiki/ChatGPT" target="_blank" rel="noopener nofollow" className="underline decoration-line-2 underline-offset-2 hover:text-ink">
              Wikipedia: ChatGPT (user numbers, as of February 2026)
            </a>{" "}
            ·{" "}
            <a
              href="https://techcrunch.com/2025/07/23/googles-ai-overviews-have-2b-monthly-users-ai-mode-100m-in-the-us-and-india/"
              target="_blank"
              rel="noopener nofollow"
              className="underline decoration-line-2 underline-offset-2 hover:text-ink"
            >
              TechCrunch, 23 July 2025
            </a>
          </p>
        </div>
      </section>

      <RelatedLinks
        locale="en"
        title="More on this topic"
        links={[
          { label: "What does a GEO agency do?", href: "/en/geo-agency", note: "Services, costs and selection criteria" },
          { label: "Get a GEO Audit", href: "/en/geo-audit", note: "Where your AI visibility stands today" },
          { label: "Measure AI visibility", href: "/en/ai-visibility", note: "Metrics and monitoring" },
          { label: "ChatGPT SEO explained", href: "/en/chatgpt-seo", note: "Visibility in ChatGPT" },
          { label: "SEO vs. GEO", href: "/en/insights/geo-vs-seo", note: "Differences and common ground" },
          { label: "What is AI search?", href: "/en/insights/what-is-ai-search", note: "How AI search works" },
        ]}
      />
      <CtaBand locale="en" />
    </>
  );
}
