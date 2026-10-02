import { PageHero } from "@/components/ui/PageHero";
import { AtAGlance } from "@/components/ui/AtAGlance";
import { AnswerBox } from "@/components/ui/AnswerBox";
import { JsonLd } from "@/components/ui/JsonLd";
import { QASection } from "@/components/ui/QASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CtaBand } from "@/components/sections/CtaBand";
import { geoSignals } from "@/components/sections/WhatIsGeo";
import { geoDefinition, glossary, pillarSections } from "@/content/pillar";
import { ORG_ID, abs, breadcrumbSchema, definedTermsSchema, faqSchema, graph, personId, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const path = "/generative-engine-optimization";
const title = "Generative Engine Optimization (GEO): Definition & Faktoren";
const description =
  "Was ist Generative Engine Optimization (GEO)? Definition, Funktionsweise, Einflussfaktoren, Abgrenzung zu SEO, AEO und LLMO sowie Messung – der Leitfaden zur KI-Suchmaschinenoptimierung.";

export const metadata = pageMeta({ title, description, path, type: "article" });

export default function GeoPillarPage() {
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
            about: ["Generative Engine Optimization", "KI-Suchmaschinenoptimierung", "AI Search Optimization"],
          }),
          {
            "@type": "Article",
            "@id": `${abs(path)}#article`,
            headline: "Was ist Generative Engine Optimization (GEO)?",
            description,
            url: abs(path),
            inLanguage: "de-DE",
            datePublished: "2026-09-24",
            dateModified: "2026-10-01",
            author: { "@id": personId("jan") },
            publisher: { "@id": ORG_ID },
            mainEntityOfPage: { "@id": `${abs(path)}#webpage` },
            about: [{ "@type": "Thing", name: "Generative Engine Optimization" }],
            image: abs("/opengraph-image"),
          },
          definedTermsSchema(path, glossary),
          faqSchema(
            pillarSections.map((s) => ({ q: s.q, a: s.a })),
            path,
          ),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Grundlagen · Leitfaden"
        title={
          <>
            Was ist Generative Engine Optimization <span className="em">(GEO)?</span>
          </>
        }
        lead="Der Leitfaden zur KI-Suchmaschinenoptimierung: Definition, Funktionsweise, die wichtigsten Einflussfaktoren und die Abgrenzung zu SEO, AEO und LLMO – verständlich erklärt von Die GEO Agentur."
        primary={{ label: "KI-Sichtbarkeit prüfen lassen", href: "/geo-audit#check" }}
        aside={
          <AtAGlance
            rows={[
              { k: "Begriff", v: "Generative Engine Optimization (GEO)" },
              { k: "Auch genannt", v: "KI-Suchmaschinenoptimierung, AI Search Optimization, KI-SEO" },
              { k: "Ziel", v: "Verstanden und als Quelle oder Empfehlung in KI-Antworten berücksichtigt werden" },
              { k: "Systeme", v: "ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot, Claude" },
              { k: "Geprägt", v: "2023 durch ein Forschungspapier (Princeton u. a.)" },
            ]}
          />
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <AnswerBox label="Definition">{geoDefinition}</AnswerBox>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            <h2 className="text-h2 font-medium text-balance">
              Acht Signale, die eine KI <span className="em">auswertet.</span>
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.75] text-ink-2">
              GEO betrachtet nicht nur die eigene Website, sondern alle Signale, aus denen sich ein Sprachmodell ein Bild von einer Marke macht:
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
        id="grundlagen"
        eyebrow="Generative Engine Optimization erklärt"
        title={
          <>
            Die wichtigsten Fragen <span className="em">zu GEO.</span>
          </>
        }
        lead="Jeder Abschnitt beginnt mit einer kurzen Antwort, danach folgen die Details."
        items={pillarSections}
        tone="tint"
      />

      <section id="begriffe" aria-labelledby="begriffe-t" className="scroll-mt-24 border-t border-line py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow mb-6 text-muted">Glossar</p>
            <h2 id="begriffe-t" className="text-h2 font-medium text-balance">
              GEO, AEO, LLMO, AIO – <span className="em">die Begriffe im Überblick.</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-muted">
              Die Begriffe überschneiden sich, bedeuten aber nicht exakt dasselbe. Wir verwenden GEO als Oberbegriff für alle generativen
              Suchsysteme.
            </p>
          </div>
          <dl className="divide-y divide-line border-y border-ink lg:col-span-7 lg:col-start-6">
            {glossary.map((g) => (
              <div key={g.term} id={g.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="grid scroll-mt-28 gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
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
            Quellen:{" "}
            <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener nofollow" className="underline decoration-line-2 underline-offset-2 hover:text-ink">
              Aggarwal et al., GEO: Generative Engine Optimization (arXiv:2311.09735)
            </a>{" "}
            ·{" "}
            <a href="https://en.wikipedia.org/wiki/ChatGPT" target="_blank" rel="noopener nofollow" className="underline decoration-line-2 underline-offset-2 hover:text-ink">
              Wikipedia: ChatGPT (Nutzerzahlen, Stand Februar 2026)
            </a>{" "}
            ·{" "}
            <a
              href="https://techcrunch.com/2025/07/23/googles-ai-overviews-have-2b-monthly-users-ai-mode-100m-in-the-us-and-india/"
              target="_blank"
              rel="noopener nofollow"
              className="underline decoration-line-2 underline-offset-2 hover:text-ink"
            >
              TechCrunch, 23.07.2025
            </a>
          </p>
        </div>
      </section>

      <RelatedLinks
        title="Weiter im Themencluster"
        links={[
          { label: "Was macht eine GEO Agentur?", href: "/geo-agentur", note: "Leistungen, Kosten und Auswahlkriterien" },
          { label: "GEO Audit durchführen lassen", href: "/geo-audit", note: "Ihre KI-Sichtbarkeit im Ist-Stand" },
          { label: "AI Visibility messen", href: "/ai-visibility", note: "Kennzahlen und Monitoring" },
          { label: "ChatGPT SEO erklärt", href: "/chatgpt-seo", note: "Sichtbarkeit in ChatGPT" },
          { label: "SEO vs. GEO", href: "/ratgeber/geo-vs-seo", note: "Unterschiede und Gemeinsamkeiten" },
          { label: "Was ist AI Search?", href: "/ratgeber/was-ist-ai-search", note: "Wie KI-Suche funktioniert" },
        ]}
      />
      <CtaBand />
    </>
  );
}
