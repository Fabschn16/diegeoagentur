import { RelatedLinks } from "@/components/ui/RelatedLinks";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArrowRight } from "@/components/ui/Icons";
import { TextLink } from "@/components/ui/Button";
import { l10n } from "@/lib/l10n";
import { breadcrumbSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

const { coreServices, platformServices } = l10n("en");

const title = "GEO Services: Audit, AI SEO, Content, Technical GEO & Monitoring";
const description =
  "All services from Die GEO Agentur: GEO Audit, AI Visibility Monitoring, Content for AI Search, Entity Optimization, Technical GEO and Digital Authority, for ChatGPT, Gemini, Perplexity and AI Overviews.";

export const metadata = pageMeta({ title, description, path: "/en/services" });

const deliverables: Record<string, string> = {
  audit: "Audit report covering your current position, competitor comparison, source analysis and a prioritised roadmap.",
  monitoring: "Monthly reporting on mention rate, share of voice, citations and development per platform.",
  content: "New and revised content, agreed with you, edited and marked up with structured data.",
  entitaeten: "An entity profile with consistent core data and cleaned-up company information across the web.",
  technik: "A technical action plan and, depending on your system, direct implementation or handover to your developers.",
  autoritaet: "A source map of your industry and a prioritised plan for relevant external mentions.",
};

export default function ServicesPage() {
  const crumbs = [{ name: "Services", path: "/en/services" }];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/en/services", title, description, type: "CollectionPage" }),
          breadcrumbSchema(crumbs),
          ...coreServices.map((s) =>
            serviceSchema({ name: s.title, description: s.description, path: s.id === "audit" ? "/en/geo-audit" : `/en/services#${s.id}` }),
          ),
        )}
      />
      <PageHero
        locale="en"
        crumbs={crumbs}
        eyebrow="Services"
        title={
          <>
            GEO services for your visibility in <span className="em">AI search.</span>
          </>
        }
        lead="Six disciplines that work hand in hand: from the initial analysis through technology, content and entities to ongoing measurement. You only book what your starting position really requires."
        aside={
          <nav aria-label="Services on this page" className="rounded-[20px] border border-line bg-card p-6 sm:p-8">
            <p className="eyebrow mb-4 text-muted">On this page</p>
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
                  <span className="mr-2 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted">Deliverable</span>
                  {deliverables[s.id]}
                </p>
              </div>
              {s.id === "audit" && (
                <TextLink href="/en/geo-audit" className="mt-6">
                  More about the GEO Audit
                </TextLink>
              )}
            </div>
          </section>
        ))}
      </div>

      <section aria-labelledby="plattformen-t" className="py-20 lg:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow mb-6 text-muted">By platform</p>
            <h2 id="plattformen-t" className="text-h2 font-medium">
              Every system has <span className="em">its own rules.</span>
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {[
              ...platformServices,
              { id: "beratung", title: "GEO Consulting", short: "Strategy, workshops and sparring for in-house marketing and SEO teams.", href: "/en/geo-consulting" },
            ].map((p) => (
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

      <Process index="" locale="en" />
      <RelatedLinks
        locale="en"
        title="Further reading"
        links={[
          { label: "What does a GEO agency do?", href: "/en/geo-agency", note: "Services, process, costs and selection criteria" },
          { label: "AI Visibility Monitoring", href: "/en/ai-visibility", note: "Measure and improve your AI visibility" },
          { label: "What is Generative Engine Optimization?", href: "/en/generative-engine-optimization", note: "Definition, factors and glossary" },
        ]}
      />
      <CtaBand locale="en" />
    </>
  );
}
