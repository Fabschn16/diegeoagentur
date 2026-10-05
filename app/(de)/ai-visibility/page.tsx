import { PageHero } from "@/components/ui/PageHero";
import { AtAGlance } from "@/components/ui/AtAGlance";
import { AnswerBox } from "@/components/ui/AnswerBox";
import { JsonLd } from "@/components/ui/JsonLd";
import { QASection, type QA } from "@/components/ui/QASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { Process } from "@/components/sections/Process";
import { AuditSection } from "@/components/sections/AuditSection";
import { abs, breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { pricing } from "@/lib/site";

const path = "/ai-visibility";
const title = "AI Visibility: KI-Sichtbarkeit messen & verbessern (Monitoring)";
const description =
  "AI Visibility Monitoring von Die GEO Agentur: Wir messen, wie oft und in welchem Kontext Ihre Marke in ChatGPT, Gemini, Perplexity und Google AI Overviews genannt wird – mit Share of Voice, Zitierungen und Wettbewerbsvergleich.";

export const metadata = pageMeta({ title, description, path });

const answer =
  "AI Visibility (KI-Sichtbarkeit) beschreibt, wie häufig und in welchem Kontext eine Marke in den Antworten von KI-Systemen wie ChatGPT, Gemini, Perplexity und Google AI Overviews genannt oder als Quelle zitiert wird. Gemessen wird sie über einen festen Katalog geschäftsrelevanter Fragen, der regelmäßig abgefragt und im Vergleich zu Wettbewerbern ausgewertet wird.";

const metrics = [
  { k: "Nennungsrate", d: "Anteil der relevanten Fragen, bei denen Ihre Marke in der Antwort vorkommt." },
  { k: "Share of Voice", d: "Wie oft Ihre Marke im Verhältnis zu Wettbewerbern genannt wird." },
  { k: "Zitierungen", d: "Wie oft Ihre Website als Quelle verlinkt wird – und mit welchen Seiten." },
  { k: "Kontext & Tonalität", d: "Ob Ihre Marke empfohlen, nur erwähnt oder kritisch dargestellt wird." },
  { k: "Korrektheit", d: "Ob Leistungen, Standorte und Positionierung richtig wiedergegeben werden." },
  { k: "Quellenlandschaft", d: "Welche fremden Seiten die Antworten zu Ihren Themen prägen." },
  { k: "KI-Traffic", d: "Besuche aus ChatGPT, Perplexity, Gemini und Copilot in Ihrer Webanalyse." },
];

const sections: QA[] = [
  {
    q: "Was ist AI Visibility?",
    a: [
      "AI Visibility ist das Maß dafür, wie sichtbar eine Marke in KI-generierten Antworten ist. Sie ist das Gegenstück zur organischen Sichtbarkeit in der klassischen Suche – mit dem Unterschied, dass es nicht um Positionen in einer Liste geht, sondern um Nennungen und Zitierungen in einer formulierten Antwort.",
    ],
  },
  {
    q: "Wie misst man AI Visibility?",
    a: [
      "Man misst AI Visibility, indem man einen festen Katalog von Fragen, die potenzielle Kunden stellen, regelmäßig und mehrfach in den relevanten KI-Systemen abfragt und die Antworten strukturiert auswertet. Entscheidend sind Wiederholung, Wettbewerbsvergleich und offengelegte Methodik.",
      "Die Methodik im Detail beschreibt der Beitrag [KI-Sichtbarkeit messen: Prompts, Nennungen, Quellen](/ratgeber/ki-sichtbarkeit-messen).",
    ],
  },
  {
    q: "Warum reicht ein einzelner Test in ChatGPT nicht?",
    a: [
      "Ein einzelner Test reicht nicht, weil KI-Antworten variieren – je nach Formulierung, Gesprächsverlauf, Standort und Zeitpunkt. Aussagekräftig sind erst Häufigkeiten über viele Abfragen und Entwicklungen über mehrere Wochen.",
    ],
  },
  {
    q: "Welche Datenquellen fließen in die Messung ein?",
    a: [
      "Wir kombinieren die strukturierte Abfrage eines Prompt-Katalogs mit Daten aus Ihrer Webanalyse (Besuche aus KI-Systemen), der Google Search Console und den Bing Webmaster Tools, die mit „AI Performance“ einen eigenen Bericht zu KI-Antworten anbieten.",
    ],
  },
  {
    q: "Wie verbessert man die AI Visibility?",
    a: [
      "Man verbessert AI Visibility, indem man die Grundlagen stärkt, auf die sich KI-Systeme stützen: technische Lesbarkeit ([Technical GEO](/leistungen#technik)), Inhalte mit klaren Antworten ([Content für AI Search](/leistungen#content)), eine eindeutige Markenentität ([Entity Optimization](/leistungen#entitaeten)) und Präsenz auf relevanten Quellen ([Digital Authority](/leistungen#autoritaet)).",
      "Das Monitoring zeigt, welche dieser Maßnahmen wirken und wo nachgesteuert werden muss. Konkrete Hebel für ChatGPT beschreibt der Beitrag [In ChatGPT sichtbar werden](/ratgeber/in-chatgpt-sichtbar-werden).",
    ],
  },
  {
    q: "Wie oft sollte AI Visibility gemessen werden?",
    a: [
      "Für die meisten Unternehmen ist eine monatliche Messung sinnvoll. Nach größeren Änderungen an Website oder Inhalten oder bei neuen Modellversionen der Anbieter lohnt sich eine zusätzliche Messung.",
    ],
  },
  {
    q: "Was enthält das AI-Visibility-Reporting?",
    a: [
      "Das monatliche Reporting enthält Nennungsrate und Share of Voice je Plattform und Thema, die Entwicklung im Zeitverlauf, die wichtigsten zitierten Quellen, auffällige Fehldarstellungen und konkrete Empfehlungen für den nächsten Monat. Den Prompt-Katalog legen wir offen.",
    ],
  },
];

export default function AiVisibilityPage() {
  const crumbs = [
    { name: "Leistungen", path: "/leistungen" },
    { name: "AI Visibility", path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, title, description, mainEntity: `${abs(path)}#service`, about: ["AI Visibility", "KI-Sichtbarkeit", "GEO Monitoring"] }),
          serviceSchema({
            name: "AI Visibility Monitoring",
            alternateName: ["GEO Monitoring", "KI-Sichtbarkeitsmessung"],
            serviceType: "AI Visibility Monitoring",
            description: answer,
            path,
            minPrice: 949,
            monthly: true,
          }),
          faqSchema(sections, path),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="AI Visibility Monitoring"
        title={
          <>
            AI Visibility: KI-Sichtbarkeit <span className="em">messen und verbessern.</span>
          </>
        }
        lead="Wir messen, wie oft und in welchem Zusammenhang Ihre Marke in ChatGPT, Gemini, Perplexity und Google AI Overviews genannt wird – und übersetzen die Ergebnisse in konkrete Maßnahmen."
        aside={
          <AtAGlance
            rows={[
              { k: "Leistung", v: "AI Visibility Monitoring (GEO Monitoring)" },
              { k: "Plattformen", v: "ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot, Meta AI" },
              { k: "Grundlage", v: "Offengelegter Prompt-Katalog aus echten Kundenfragen" },
              { k: "Rhythmus", v: "Monatlich, zusätzlich nach größeren Änderungen" },
              { k: "Ergebnis", v: "Reporting mit Entwicklung, Quellen und Empfehlungen" },
              { k: "Preis", v: `GEO-Optimierung inkl. Monitoring ${pricing.optimization} (netto)` },
            ]}
          />
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <AnswerBox label="Kurz erklärt">{answer}</AnswerBox>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            <h2 className="text-h2 font-medium text-balance">
              Sieben Kennzahlen für <span className="em">KI-Sichtbarkeit.</span>
            </h2>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {metrics.map((m) => (
                <div key={m.k} className="grid gap-1 py-3.5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <dt className="font-medium">{m.k}</dt>
                  <dd className="text-[0.95rem] leading-relaxed text-muted">{m.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <QASection
        id="fragen"
        eyebrow="AI Visibility erklärt"
        title={
          <>
            Fragen zur Messung von <span className="em">KI-Sichtbarkeit.</span>
          </>
        }
        items={sections}
        tone="tint"
      />
      <Process index="" />
      <AuditSection />
      <RelatedLinks
        title="Weiter im Themencluster"
        links={[
          { label: "GEO Audit durchführen lassen", href: "/geo-audit", note: "Der Startpunkt für jedes Monitoring" },
          { label: "Unsere Methodik", href: "/ratgeber/methodik-prompt-katalog", note: "So messen wir mit dem Prompt-Katalog" },
          { label: "KI-Sichtbarkeit messen", href: "/ratgeber/ki-sichtbarkeit-messen", note: "Grundlagen der Messung" },
          { label: "ChatGPT SEO", href: "/chatgpt-seo", note: "Sichtbarkeit in ChatGPT" },
          { label: "Perplexity SEO", href: "/perplexity-seo", note: "Zitierungen in Perplexity" },
          { label: "Was ist Generative Engine Optimization?", href: "/generative-engine-optimization", note: "Grundlagen und Glossar" },
          { label: "Was macht eine GEO Agentur?", href: "/geo-agentur", note: "Leistungen und Kosten" },
        ]}
      />
    </>
  );
}
