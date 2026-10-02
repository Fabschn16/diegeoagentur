import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageHero } from "@/components/ui/PageHero";
import { AtAGlance } from "@/components/ui/AtAGlance";
import { AnswerBox } from "@/components/ui/AnswerBox";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/sections/FaqSection";
import { LeadForm } from "@/components/ui/LeadForm";
import type { Faq } from "@/lib/faq";
import { breadcrumbSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { pricing } from "@/lib/site";

const title = "GEO Beratung: Strategie, Workshops & Sparring für KI-Sichtbarkeit";
const description =
  "GEO Beratung für Marketing- und SEO-Teams: Strategie, Workshops, Roadmaps und laufendes Sparring zur Sichtbarkeit in ChatGPT, Gemini, Perplexity und Google AI Overviews.";

export const metadata = pageMeta({ title, description, path: "/geo-beratung" });

const formats = [
  {
    t: "Strategie-Workshop",
    d: "Ein konzentrierter Workshop mit Geschäftsführung, Marketing und SEO: Wo stehen wir, was ist realistisch, was hat Priorität?",
    for: "Geschäftsführung · CMO · Head of Marketing",
  },
  {
    t: "GEO-Roadmap",
    d: "Auf Basis einer Analyse entsteht ein priorisierter Maßnahmenplan, den Ihr Team selbst umsetzen kann – mit klaren Verantwortlichkeiten.",
    for: "Marketing- und SEO-Teams",
  },
  {
    t: "Team-Enablement",
    d: "Wir vermitteln Ihrem Team, wie KI-Suche funktioniert, wie man Inhalte zitierfähig schreibt und wie man Sichtbarkeit misst.",
    for: "Content, SEO, Redaktion",
  },
  {
    t: "Laufendes Sparring",
    d: "Regelmäßige Termine für Fragen, Reviews von Inhalten und technischen Änderungen sowie Einordnung neuer Entwicklungen.",
    for: "Inhouse-Teams mit eigener Umsetzung",
  },
];

const faq: Faq[] = [
  {
    q: "Wann ist GEO Beratung sinnvoller als eine Umsetzung durch die Agentur?",
    a: [
      "Wenn Sie ein eigenes Marketing-, SEO- oder Content-Team haben, das die Umsetzung übernehmen kann. Dann liefern wir Strategie, Prioritäten und Know-how – und Ihr Team setzt um. Viele Unternehmen kombinieren beides.",
    ],
  },
  {
    q: "Arbeiten Sie auch mit unserer bestehenden SEO-Agentur zusammen?",
    a: [
      "Ja. GEO baut auf SEO auf. Wir stimmen uns gern mit Ihrer bestehenden Agentur ab, damit Maßnahmen ineinandergreifen statt sich zu doppeln.",
    ],
  },
  {
    q: "Wie beginnt eine Beratung?",
    a: [
      "Mit einem unverbindlichen Erstgespräch. Darin klären wir Ausgangslage, Ziele und Team-Setup und schlagen ein passendes Format vor.",
    ],
  },
];

export default function GeoBeratungPage() {
  const crumbs = [
    { name: "Leistungen", path: "/leistungen" },
    { name: "GEO Beratung", path: "/geo-beratung" },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/geo-beratung", title, description }),
          serviceSchema({ name: "GEO Beratung", description, path: "/geo-beratung", serviceType: "Beratung für Generative Engine Optimization", minPrice: 949 }),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="GEO Beratung"
        title={
          <>
            GEO Beratung: Strategie für die <span className="em">neue Suche.</span>
          </>
        }
        lead="Für Unternehmen mit eigenem Marketing- oder SEO-Team: Wir liefern Orientierung, Prioritäten und das Wissen, damit Ihr Team GEO selbst wirksam umsetzen kann."
        primary={{ label: "Beratung anfragen", href: "#anfrage" }}
        aside={
          <AtAGlance
            rows={[
              { k: "Für wen", v: "Geschäftsführung, CMO, Head of Marketing, SEO- und Content-Teams" },
              { k: "Formate", v: "Workshop, Roadmap, Team-Enablement, laufendes Sparring" },
              { k: "Preis", v: `Strategie-Workshop ${pricing.workshop} (netto)` },
              { k: "Umsetzung", v: "Durch Ihr Team – auf Wunsch mit unserer Unterstützung" },
            ]}
          />
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <AnswerBox>
              GEO Beratung unterstützt interne Teams dabei, die Sichtbarkeit ihres Unternehmens in KI-Suchsystemen strategisch aufzubauen. Sie
              umfasst Analyse, Priorisierung, Wissensvermittlung und laufende Begleitung – die Umsetzung bleibt im Unternehmen.
            </AnswerBox>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {formats.map((f, i) => (
              <li key={f.t} className="flex flex-col bg-paper p-7" data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                <h2 className="text-[1.3rem] font-medium tracking-[-0.015em]">{f.t}</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{f.d}</p>
                <p className="mt-auto pt-6 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-ink-2">{f.for}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="anfrage" aria-labelledby="anfrage-t" className="scroll-mt-20 border-t border-line bg-paper-2/50 py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow mb-6 text-muted">Beratung anfragen</p>
            <h2 id="anfrage-t" className="text-h2 font-medium">
              Erzählen Sie uns von <span className="em">Ihrem Team.</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-muted">
              Wir melden uns persönlich und schlagen ein Format vor, das zu Ihrer Ausgangslage passt.
            </p>
          </div>
          <div className="lg:col-span-8" data-reveal>
            <LeadForm variant="beratung" submitLabel="Beratung anfragen" tone="card" />
          </div>
        </div>
      </section>

      <FaqSection items={faq} path="/geo-beratung" title={<>Fragen zur <span className="em">GEO Beratung.</span></>} />
      <RelatedLinks
        title="Weiterführend"
        links={[
          { label: "GEO Agentur: Umsetzung statt nur Beratung", href: "/geo-agentur", note: "Wenn wir die Umsetzung übernehmen sollen" },
          { label: "GEO-Strategie entwickeln", href: "/ratgeber/geo-strategie", note: "Leitfaden" },
          { label: "Was ist Generative Engine Optimization?", href: "/generative-engine-optimization", note: "Grundlagen für Ihr Team" },
        ]}
      />
    </>
  );
}
