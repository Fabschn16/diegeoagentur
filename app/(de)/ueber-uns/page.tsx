import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { Team } from "@/components/sections/Team";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaBand } from "@/components/sections/CtaBand";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { ArrowUpRight } from "@/components/ui/Icons";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { provenStats, site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const title = "Über Die GEO Agentur: Team, Hintergrund & Daily Rocket";
const description =
  "Die GEO Agentur verbindet Erfahrung aus Performance Marketing, Tracking, SEO und Datenanalyse mit Generative Engine Optimization. Lernen Sie Fabian Schnabel und Jan Hugo kennen.";

export const metadata = pageMeta({ title, description, path: "/ueber-uns" });

export default function UeberUnsPage() {
  const crumbs = [{ name: "Über uns", path: "/ueber-uns" }];
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: "/ueber-uns", title, description, type: "AboutPage" }), breadcrumbSchema(crumbs))} />
      <PageHero
        crumbs={crumbs}
        eyebrow="Über uns"
        title={
          <>
            Die GEO Agentur: Wir kommen aus der Suche. <span className="em">Und wir wissen, wohin sie sich bewegt.</span>
          </>
        }
        lead="Die GEO Agentur ist aus der täglichen Arbeit mit Suchdaten entstanden. Wer seit Jahren Kampagnen, Tracking und Suchverhalten analysiert, sieht früh, wenn sich etwas grundlegend verschiebt."
        showCtas={false}
      />

      <section className="pt-10 lg:pt-14">
        <div className="container-x">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-paper-2 sm:aspect-[21/9]" data-reveal>
            <Image
              src="/images/team/team-wide.jpg"
              alt="Fabian Schnabel und Jan Hugo, das Team hinter Die GEO Agentur"
              fill
              priority
              sizes="(min-width: 1320px) 1224px, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section aria-labelledby="warum" className="py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <p className="eyebrow mb-6 text-muted">Warum es uns gibt</p>
            <h2 id="warum" className="text-h2 font-medium text-balance">
              Sichtbarkeit war nie nur <span className="em">eine Position.</span>
            </h2>
          </div>
          <div className="space-y-6 text-[1.08rem] leading-[1.75] text-ink-2 lg:col-span-6 lg:col-start-7" data-reveal>
            <p>
              Mit unserer Performance-Marketing-Agentur{" "}
              <a href={site.sister.url} target="_blank" rel="noopener" className="underline decoration-line-2 underline-offset-4 hover:decoration-ink">
                Daily Rocket
              </a>{" "}
              arbeiten wir seit {site.foundingDate} täglich mit Suchanfragen, Conversion-Daten und den Algorithmen, die entscheiden, wer gesehen wird.
            </p>
            <p>
              Mit ChatGPT, Gemini, Perplexity und den AI Overviews hat sich die Frage verschoben: Nicht mehr nur „Auf welcher Position stehen
              wir?“, sondern „Werden wir in der Antwort überhaupt genannt?“. Die GEO Agentur ist unsere Antwort darauf – eine eigenständige,
              spezialisierte Marke für genau diese Frage.
            </p>
            <p>
              Wir verbinden, was in den meisten Agenturen getrennt ist: Performance Marketing, Tracking, SEO, Datenanalyse und KI. Denn
              KI-Sichtbarkeit entsteht nicht durch einen einzelnen Trick, sondern durch das Zusammenspiel von Technik, Inhalten, Marke und
              Messung.
            </p>
          </div>
        </div>

        <div className="container-x mt-16 lg:mt-20">
          <dl className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-card p-7">
              <dt className="text-[0.88rem] text-muted">Daily Rocket gegründet</dt>
              <dd className="mt-3 text-[2.4rem] font-medium leading-none tracking-[-0.03em]">{site.foundingDate}</dd>
            </div>
            {provenStats.map((s) => (
              <div key={s.label} className="bg-card p-7">
                <dt className="text-[0.88rem] text-muted">{s.label}</dt>
                <dd className="mt-3 text-[2.4rem] font-medium leading-none tracking-[-0.03em]">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[0.78rem] text-muted">Kennzahlen der Daily Rocket GmbH, Stand September 2026.</p>
        </div>
      </section>

      <Team index="" showLink={false} />

      <WhyUs index="" />

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <a
            href={site.sister.url}
            target="_blank"
            rel="noopener"
            className="group flex flex-col gap-6 rounded-[24px] border border-line p-7 transition-colors hover:border-ink sm:flex-row sm:items-center sm:justify-between sm:p-10"
            data-reveal
          >
            <div>
              <p className="eyebrow text-muted">Unsere Schwesteragentur</p>
              <p className="mt-3 text-[1.5rem] font-medium tracking-[-0.02em]">Daily Rocket</p>
              <p className="mt-1 text-[0.98rem] text-muted">{site.sister.description}</p>
            </div>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>
      </section>

      <RelatedLinks
        title="Mehr über uns"
        links={[
          { label: "Die GEO Agentur in Fakten", href: "/fakten", note: "Alle Kerndaten, Leistungen und Preise auf einer Seite" },
          { label: "Unsere Methodik", href: "/ratgeber/methodik-prompt-katalog", note: "So messen wir KI-Sichtbarkeit" },
          { label: "Was macht eine GEO Agentur?", href: "/geo-agentur", note: "Leistungen, Ablauf und Kosten" },
        ]}
      />
      <CtaBand />
    </>
  );
}
