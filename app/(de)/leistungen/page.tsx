import { RelatedLinks } from "@/components/ui/RelatedLinks";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArrowRight } from "@/components/ui/Icons";
import { TextLink } from "@/components/ui/Button";
import { coreServices, platformServices } from "@/lib/services";
import { breadcrumbSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const title = "GEO Leistungen: Audit, KI-SEO, Content, Technical GEO & Monitoring";
const description =
  "Alle Leistungen der GEO Agentur: GEO Audit, AI Visibility Monitoring, Content für AI Search, Entity Optimization, Technical GEO und Digital Authority – für ChatGPT, Gemini, Perplexity und AI Overviews.";

export const metadata = pageMeta({ title, description, path: "/leistungen" });

const deliverables: Record<string, string> = {
  audit: "Audit-Report mit Ist-Stand, Wettbewerbsvergleich, Quellenanalyse und priorisierter Roadmap.",
  monitoring: "Monatliches Reporting mit Nennungsrate, Share of Voice, Zitierungen und Entwicklung je Plattform.",
  content: "Neue und überarbeitete Inhalte – abgestimmt, redigiert und strukturiert ausgezeichnet.",
  entitaeten: "Entitäten-Profil mit einheitlichen Kerndaten und bereinigten Unternehmensangaben im Web.",
  technik: "Technischer Maßnahmenplan und – je nach System – direkte Umsetzung oder Übergabe an Ihre Entwicklung.",
  autoritaet: "Quellenkarte Ihrer Branche und ein priorisierter Plan für relevante externe Erwähnungen.",
};

export default function LeistungenPage() {
  const crumbs = [{ name: "Leistungen", path: "/leistungen" }];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/leistungen", title, description, type: "CollectionPage" }),
          breadcrumbSchema(crumbs),
          ...coreServices.map((s) =>
            serviceSchema({ name: s.title, description: s.description, path: s.id === "audit" ? "/geo-audit" : `/leistungen#${s.id}` }),
          ),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Leistungen"
        title={
          <>
            GEO-Leistungen für Ihre Sichtbarkeit in der <span className="em">KI-Suche.</span>
          </>
        }
        lead="Sechs Disziplinen, die ineinandergreifen: von der ersten Analyse über Technik, Inhalte und Entitäten bis zur laufenden Messung. Sie buchen nur, was Ihre Ausgangslage wirklich erfordert."
        aside={
          <nav aria-label="Leistungen auf dieser Seite" className="rounded-[20px] border border-line bg-card p-6 sm:p-8">
            <p className="eyebrow mb-4 text-muted">Auf dieser Seite</p>
            <ol className="divide-y divide-line">
              {coreServices.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="group flex items-center justify-between py-3 text-[0.98rem]">
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.68rem] text-muted">{s.index}</span>
                      {s.title}
                    </span>
                    <ArrowRight className="size-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        }
      />

      <div className="container-x">
        {coreServices.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-t`} className="grid scroll-mt-24 gap-10 border-b border-line py-16 lg:grid-cols-12 lg:py-24">
            <div className="lg:col-span-5" data-reveal>
              <p className="font-mono text-[0.72rem] text-muted">{s.index}</p>
              <h2 id={`${s.id}-t`} className="mt-4 text-h2 font-medium">
                {s.title}
              </h2>
              <p className="mt-4 text-[1.1rem] text-ink-2">{s.short}</p>
            </div>
            <div className="lg:col-span-7" data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
              <p className="text-[1.1rem] leading-[1.7] text-ink-2">{s.description}</p>
              <p className="eyebrow mt-10 mb-4 text-muted">{s.pointsLabel}</p>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 border-b border-line py-3 text-[0.98rem]">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-card p-5 ring-1 ring-line sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[0.92rem] text-ink-2">
                  <span className="mr-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted">Ergebnis</span>
                  {deliverables[s.id]}
                </p>
              </div>
              {s.id === "audit" && (
                <TextLink href="/geo-audit" className="mt-6">
                  Mehr zum GEO Audit
                </TextLink>
              )}
            </div>
          </section>
        ))}
      </div>

      <section aria-labelledby="plattformen-t" className="py-20 lg:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow mb-6 text-muted">Nach Plattform</p>
            <h2 id="plattformen-t" className="text-h2 font-medium">
              Jedes System hat <span className="em">eigene Regeln.</span>
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {[...platformServices, { id: "beratung", title: "GEO Beratung", short: "Strategie, Workshops und Sparring für interne Marketing- und SEO-Teams.", href: "/geo-beratung" }].map((p) => (
              <li key={p.id} data-reveal>
                <Link href={p.href} className="group flex h-full flex-col rounded-[20px] border border-line p-6 transition-colors hover:border-ink hover:bg-card">
                  <span className="flex items-center justify-between text-[1.15rem] font-medium">
                    {p.title}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="mt-2 text-[0.92rem] leading-relaxed text-muted">{p.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process index="" />
      <RelatedLinks
        title="Weiterführend"
        links={[
          { label: "Was macht eine GEO Agentur?", href: "/geo-agentur", note: "Leistungen, Ablauf, Kosten und Auswahlkriterien" },
          { label: "AI Visibility Monitoring", href: "/ai-visibility", note: "KI-Sichtbarkeit messen und verbessern" },
          { label: "Was ist Generative Engine Optimization?", href: "/generative-engine-optimization", note: "Definition, Faktoren und Glossar" },
        ]}
      />
      <CtaBand />
    </>
  );
}
