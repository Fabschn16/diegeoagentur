import { PageHero } from "@/components/ui/PageHero";
import { AtAGlance } from "@/components/ui/AtAGlance";
import { AnswerBox } from "@/components/ui/AnswerBox";
import { JsonLd } from "@/components/ui/JsonLd";
import { QASection, type QA } from "@/components/ui/QASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { Services } from "@/components/sections/Services";
import { AuditSection } from "@/components/sections/AuditSection";
import { breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema, abs } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { site, pricing } from "@/lib/site";

const path = "/geo-agentur";
const title = "GEO Agentur: Leistungen, Ablauf, Kosten & Auswahlkriterien";
const description =
  "Was macht eine GEO Agentur, was kostet sie und woran erkennen Sie eine gute? Die GEO Agentur aus Passau erklärt Leistungen, Zusammenarbeit und Erfolgsmessung bei Generative Engine Optimization – für Unternehmen in ganz Deutschland.";

export const metadata = pageMeta({ title, description, path });

const answer =
  "Eine GEO Agentur unterstützt Unternehmen dabei, in KI-gestützten Such- und Antwortsystemen wie ChatGPT, Gemini, Perplexity und Google AI Overviews verstanden und als Quelle oder Empfehlung berücksichtigt zu werden. Sie analysiert die aktuelle KI-Sichtbarkeit, optimiert Website, Inhalte, Markenentität und externe Signale und misst die Entwicklung. Die GEO Agentur ist eine darauf spezialisierte Agentur mit Sitz in Passau, die Unternehmen in ganz Deutschland betreut.";

const sections: QA[] = [
  {
    q: "Was ist eine GEO Agentur?",
    a: [
      "Eine GEO Agentur ist ein Dienstleister für Generative Engine Optimization, also für die Sichtbarkeit von Unternehmen in KI-Antworten. Im Unterschied zu einer klassischen SEO-Agentur steht nicht die Position in einer Ergebnisliste im Vordergrund, sondern die Frage, ob und wie eine KI ein Unternehmen nennt, beschreibt und als Quelle verwendet.",
      "Was GEO genau ist, erklärt unser Leitfaden [Was ist Generative Engine Optimization?](/generative-engine-optimization).",
    ],
  },
  {
    q: "Was macht eine GEO Agentur konkret?",
    a: [
      "Eine GEO Agentur übernimmt typischerweise sechs Aufgaben: [GEO Audit](/geo-audit), [AI Visibility Monitoring](/ai-visibility), [Content für AI Search](/leistungen#content), [Entity Optimization](/leistungen#entitaeten), [Technical GEO](/leistungen#technik) und [Digital Authority](/leistungen#autoritaet).",
      "Dazu kommt strategische [GEO Beratung](/geo-beratung): Welche Fragen stellen Ihre Kunden der KI, welche Themen haben Priorität, und wie greifen SEO, Content und Markenkommunikation ineinander? Eine GEO Agentur optimiert also nicht nur Technik, sondern berät, wie eine Marke in der neuen Suchlandschaft sichtbar wird.",
    ],
  },
  {
    q: "Warum brauchen Unternehmen GEO?",
    a: [
      "Unternehmen brauchen GEO, weil Kunden zunehmend KI-Systeme nach Empfehlungen fragen und diese Systeme oft nur wenige Anbieter konkret nennen. Wer in diesen Antworten fehlt, wird in der Recherchephase nicht berücksichtigt – auch wenn die eigene Website bei Google gut platziert ist.",
      "Hinzu kommt die Korrektheit: Sprachmodelle können veraltete oder falsche Angaben über ein Unternehmen wiedergeben. GEO sorgt dafür, dass zutreffende Informationen leicht auffindbar und eindeutig sind.",
    ],
  },
  {
    q: "Wie läuft die Zusammenarbeit mit einer GEO Agentur ab?",
    a: [
      "Die Zusammenarbeit beginnt mit einer Analyse, gefolgt von Strategie, Umsetzung und laufendem Monitoring. Bei uns sieht das so aus: kostenloser Sichtbarkeits-Check als Einstieg, vollständiges [GEO Audit](/geo-audit) mit priorisierter Roadmap, Umsetzung durch uns oder Ihr Team und monatliche Messung mit Nachsteuerung.",
      "Sie sprechen dabei immer direkt mit den Gründern Fabian Schnabel und Jan Hugo – ohne wechselnde Account-Manager.",
    ],
  },
  {
    q: "Wie misst eine GEO Agentur den Erfolg?",
    a: [
      "Eine GEO Agentur misst Erfolg über einen festen Katalog geschäftsrelevanter Fragen, der regelmäßig in mehreren KI-Systemen abgefragt wird. Kennzahlen sind Nennungsrate, Share of Voice gegenüber Wettbewerbern, Zitierungen der eigenen Website und die Korrektheit der Darstellung.",
      "Ergänzend wird der Traffic aus KI-Systemen ausgewertet. Details unter [AI Visibility messen](/ai-visibility).",
    ],
  },
  {
    q: "Welche KI-Suchmaschinen werden berücksichtigt?",
    a: [
      "Wir berücksichtigen [ChatGPT](/chatgpt-seo), [Google Gemini](/gemini-seo), [Google AI Overviews](/google-ai-overviews) und den AI Mode, [Perplexity](/perplexity-seo) sowie [Microsoft Copilot und Claude](/ratgeber/copilot-und-claude) und [Meta AI](/ratgeber/meta-ai).",
      "Welche Systeme Priorität haben, hängt davon ab, wo Ihre Zielgruppe recherchiert – das klären wir im Audit.",
    ],
  },
  {
    q: "Für welche Unternehmen eignet sich eine GEO Agentur?",
    a: [
      "Eine GEO Agentur lohnt sich vor allem für Unternehmen mit recherchierenden Kunden: B2B-Anbieter, SaaS, Beratungen, Kanzleien, Dienstleister mit erklärungsbedürftigen Leistungen, E-Commerce-Marken und regionale Anbieter mit großem Einzugsgebiet.",
      "Unternehmen mit eigenem Marketing- oder SEO-Team nutzen oft eine Kombination aus Audit und [GEO Beratung](/geo-beratung) und setzen selbst um.",
    ],
  },
  {
    id: "kosten",
    q: "Was kostet eine GEO Agentur?",
    a: [
      "Die Kosten einer GEO Agentur hängen vor allem von fünf Faktoren ab: der Anzahl der Themen und Märkte, dem Umfang des Prompt-Katalogs, der Menge an Inhalten, die erstellt oder überarbeitet werden, der Frage, ob die Agentur oder Ihr Team umsetzt, und der Häufigkeit des Monitorings.",
      "Üblich ist ein einmaliges Audit als Einstieg und anschließend eine laufende Betreuung mit monatlichem Monitoring; Beratung und Workshops werden oft separat abgerechnet.",
      `Bei uns gelten folgende Einstiegspreise: Der KI-Sichtbarkeits-Check ist kostenlos. Das vollständige [GEO Audit](/geo-audit) kostet ${pricing.audit}, die laufende GEO-Optimierung mit [AI Visibility Monitoring](/ai-visibility) ${pricing.optimization} und ein Strategie-Workshop im Rahmen der [GEO Beratung](/geo-beratung) ${pricing.workshop}. ${pricing.note} Der genaue Preis hängt vom Umfang ab und steht vor Beginn verbindlich im Angebot.`,
    ],
  },
  {
    id: "auswahl",
    q: "Woran erkennt man eine gute GEO Agentur?",
    a: [
      "Eine gute GEO Agentur erkennt man an transparenter Methodik, solider Search-Erfahrung und realistischen Versprechen. Konkret: Sie legt offen, mit welchem Prompt-Katalog und über welchen Zeitraum sie misst; sie versteht klassische SEO und Technik; sie zeigt Ergebnisse nur mit nachvollziehbarer Methodik; und sie garantiert keine Platzierungen in KI-Antworten. Wie wir selbst messen, legen wir in unserer [Methodik](/ratgeber/methodik-prompt-katalog) offen.",
      "Vorsicht ist geboten bei Versprechen wie „garantiert Platz 1 bei ChatGPT“, bei Rankings ohne Methodik und bei Maßnahmen, die auf Manipulation statt auf echte Inhalte und Erwähnungen setzen.",
    ],
  },
  {
    q: "GEO Agentur oder SEO Agentur – was brauche ich?",
    a: [
      "Die meisten Unternehmen brauchen beides, weil GEO auf SEO aufbaut. Eine gute GEO Agentur prüft deshalb immer auch die SEO-Grundlagen und arbeitet auf Wunsch mit Ihrer bestehenden SEO-Agentur zusammen.",
      "Die Unterschiede im Detail: [SEO vs. GEO](/ratgeber/geo-vs-seo).",
    ],
  },
  {
    q: "Was unterscheidet Die GEO Agentur?",
    a: [
      `Die GEO Agentur ist ein Angebot der ${site.legalEntity} aus Passau, die mit der Performance-Marketing-Agentur Daily Rocket seit ${site.foundingDate} für über 100 Kunden arbeitet und jährlich mehr als 20 Millionen Euro Werbebudget verantwortet. Diese Erfahrung mit Suchdaten, Tracking und Messung fließt in die GEO-Arbeit ein.`,
      "Wir sind auf Search, Daten und KI-Sichtbarkeit spezialisiert, arbeiten transparent und ohne Platzierungsgarantien und betreuen Unternehmen in ganz Deutschland. Mehr [über uns](/ueber-uns).",
    ],
  },
];

export default function GeoAgenturPage() {
  const crumbs = [{ name: "GEO Agentur", path }];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, title, description, mainEntity: `${abs(path)}#service`, about: ["GEO Agentur", "Generative Engine Optimization"] }),
          serviceSchema({
            name: "GEO Agentur – Generative Engine Optimization",
            alternateName: ["KI-Suchmaschinenoptimierung", "AI Search Optimization", "GEO Beratung"],
            serviceType: "Generative Engine Optimization",
            description: answer,
            path,
          }),
          faqSchema(sections, path),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="GEO Agentur"
        title={
          <>
            GEO Agentur: Leistungen, Ablauf <span className="em">und Kosten.</span>
          </>
        }
        lead="Was eine GEO Agentur leistet, wie die Zusammenarbeit abläuft, was sie kostet und woran Sie eine gute erkennen – erklärt von einer Agentur, die sich auf Generative Engine Optimization spezialisiert hat."
        aside={
          <AtAGlance
            title="Die GEO Agentur auf einen Blick"
            rows={[
              { k: "Spezialisierung", v: "Generative Engine Optimization / KI-Suchmaschinenoptimierung" },
              { k: "Sitz", v: `${site.address.city}, ${site.address.region} – tätig in ganz Deutschland` },
              { k: "Gründer", v: "Fabian Schnabel, Jan Hugo" },
              { k: "Unternehmen", v: `Ein Angebot der ${site.legalEntity} (Daily Rocket)` },
              { k: "Plattformen", v: "ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot, Claude, Meta AI" },
              { k: "Einstieg", v: "Kostenloser KI-Sichtbarkeits-Check" },
              { k: "Preise", v: `GEO Audit ${pricing.audit} · Optimierung ${pricing.optimization} · Workshop ${pricing.workshop} (netto)` },
            ]}
          />
        }
      />

      <section className="py-20 lg:py-24">
        <div className="container-x max-w-4xl">
          <AnswerBox label="Kurz erklärt">{answer}</AnswerBox>
        </div>
      </section>

      <QASection
        id="fragen"
        eyebrow="GEO Agentur erklärt"
        title={
          <>
            Was Sie über eine GEO Agentur <span className="em">wissen sollten.</span>
          </>
        }
        lead="Von den Leistungen über die Kosten bis zu den Auswahlkriterien – jeweils mit einer kurzen Antwort vorab."
        items={sections}
        tone="tint"
      />

      <Services index="" />
      <AuditSection />
      <RelatedLinks
        title="Weiter im Themencluster"
        links={[
          { label: "Was ist Generative Engine Optimization?", href: "/generative-engine-optimization", note: "Definition, Faktoren und Glossar" },
          { label: "GEO Audit durchführen lassen", href: "/geo-audit", note: "Ihr Ist-Stand in KI-Antworten" },
          { label: "GEO Beratung für interne Teams", href: "/geo-beratung", note: "Strategie, Workshops, Sparring" },
          { label: "AI Visibility messen", href: "/ai-visibility", note: "Kennzahlen und Monitoring" },
          { label: "GEO-Strategie entwickeln", href: "/ratgeber/geo-strategie", note: "Leitfaden in sechs Schritten" },
          { label: "Über Die GEO Agentur", href: "/ueber-uns", note: "Team und Arbeitsweise" },
        ]}
      />
    </>
  );
}
