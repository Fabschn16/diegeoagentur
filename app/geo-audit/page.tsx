import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { QASection, type QA } from "@/components/ui/QASection";
import { PageHero } from "@/components/ui/PageHero";
import { AtAGlance } from "@/components/ui/AtAGlance";
import { JsonLd } from "@/components/ui/JsonLd";
import { AuditSection } from "@/components/sections/AuditSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Check } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { mainFaq, type Faq } from "@/lib/faq";
import { breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { bookingHref, pricing } from "@/lib/site";

const title = "GEO Audit: KI-Sichtbarkeit in ChatGPT, Gemini & Co. prüfen lassen";
const description =
  "GEO Audit der GEO Agentur: Wir analysieren, ob und wie ChatGPT, Gemini, Perplexity und Google AI Overviews Ihre Marke nennen, welche Wettbewerber auftauchen und welche Quellen die Antworten prägen. Kostenloser Einstieg.";

export const metadata = pageMeta({ title, description, path: "/geo-audit" });

const formats = [
  {
    name: "Sichtbarkeits-Check",
    tag: "Kostenlos",
    text: "Die schnelle Standortbestimmung: eine Stichprobe typischer Kundenfragen in den wichtigsten KI-Systemen – persönlich mit Ihnen besprochen.",
    items: [
      "Ausgewählte Fragen aus Ihrem Markt",
      "ChatGPT, Gemini, Perplexity, AI Overviews",
      "Nennungen Ihrer Marke und Ihrer Wettbewerber",
      "Erste Hinweise auf Quellen und Lücken",
      "30-minütiges Ergebnisgespräch",
    ],
    cta: { label: "Check anfragen", href: "#check" },
    dark: false,
  },
  {
    name: "GEO Audit",
    tag: "Vollständige Analyse",
    text: "Die fundierte Grundlage für Ihre GEO-Strategie: systematisch, nach Themen und Kaufphasen gegliedert und mit konkreter Roadmap.",
    items: [
      "Prompt-Katalog nach Themen und Kaufphasen",
      "Wettbewerbsvergleich und Share of Voice",
      "Quellenanalyse: Welche Seiten prägen die Antworten?",
      "Technische Prüfung: Crawler, HTML, strukturierte Daten",
      "Entitäts-Check: Wie wird Ihre Marke beschrieben?",
      "Priorisierte Roadmap und Ergebnispräsentation",
    ],
    cta: { label: "Audit besprechen", href: bookingHref },
    dark: true,
  },
];

const steps = [
  { t: "Anfrage", d: "Sie nennen uns Unternehmen, Website und – wenn Sie möchten – Wettbewerber und Themen." },
  { t: "Analyse", d: "Wir stellen den KI-Systemen die Fragen Ihrer Kunden und werten Nennungen, Kontext und Quellen aus." },
  { t: "Gespräch", d: "Wir besprechen die Ergebnisse persönlich und zeigen, wo die größten Hebel liegen." },
  { t: "Entscheidung", d: "Sie entscheiden in Ruhe, ob und wie Sie weitermachen möchten. Ohne Verpflichtung." },
];

const auditFaq: Faq[] = [
  {
    q: "Was brauchen Sie für den Sichtbarkeits-Check von uns?",
    a: [
      "Nur Ihren Unternehmensnamen, Ihre Website und eine Kontaktmöglichkeit. Hilfreich, aber optional: zwei bis drei Wettbewerber und die Themen, bei denen Sie gefunden werden möchten.",
    ],
  },
  {
    q: "Was ist der Unterschied zwischen Sichtbarkeits-Check und GEO Audit?",
    a: [
      "Der kostenlose Sichtbarkeits-Check ist eine Stichprobe, die zeigt, wo Sie stehen. Das GEO Audit ist eine systematische Analyse mit umfangreichem Prompt-Katalog, Quellen- und Technikprüfung und einer priorisierten Roadmap als Grundlage für die Umsetzung.",
    ],
  },
  ...mainFaq.filter((f) => ["Wie misst man AI Visibility?", "Was kostet eine GEO Agentur?", "Kann man garantieren, bei ChatGPT genannt zu werden?"].includes(f.q)),
];

const auditQa: QA[] = [
  {
    id: "was-ist-ein-geo-audit",
    q: "Was ist ein GEO Audit?",
    a: [
      "Ein GEO Audit ist eine systematische Analyse, wie KI-Systeme wie ChatGPT, Gemini, Perplexity und Google AI Overviews ein Unternehmen heute darstellen – und warum. Es verbindet die Abfrage eines festen Katalogs realer Kundenfragen mit einer Prüfung von Technik, Inhalten, Markenentität und externen Quellen und endet mit einer priorisierten Roadmap.",
    ],
  },
  {
    id: "ai-visibility-audit",
    q: "Was ist ein AI Visibility Audit?",
    a: [
      "AI Visibility Audit ist eine andere Bezeichnung für denselben Ansatz, mit Schwerpunkt auf der Messung: Wie oft wird eine Marke genannt, wie oft als Quelle zitiert, in welchem Kontext und im Vergleich zu welchen Wettbewerbern? Diese Messung ist Teil unseres GEO Audits und bildet die Ausgangsbasis für das laufende [AI Visibility Monitoring](/ai-visibility).",
    ],
  },
  {
    id: "chatgpt-audit",
    q: "Kann ich auch nur ChatGPT prüfen lassen?",
    a: [
      "Ja. Ein ChatGPT Audit konzentriert sich auf die Darstellung in ChatGPT und der ChatGPT-Suche. Weil Kunden meist mehrere Systeme nutzen und die Ursachen oft dieselben sind, empfehlen wir in der Regel den Blick auf alle relevanten Plattformen. Hintergründe zu ChatGPT finden Sie auf der Seite [ChatGPT SEO](/chatgpt-seo).",
    ],
  },
  {
    id: "ergebnis",
    q: "Was erhalte ich als Ergebnis des GEO Audits?",
    a: [
      `Das vollständige GEO Audit kostet ${pricing.audit} (${pricing.note.replace("Alle Preise ", "")}); der kostenlose Sichtbarkeits-Check bleibt als Einstieg unverbindlich. Sie erhalten eine Auswertung Ihrer Nennungen und Zitierungen je Plattform, einen Wettbewerbsvergleich, die wichtigsten Quellen hinter den Antworten, eine Liste technischer und inhaltlicher Schwachstellen sowie eine priorisierte Roadmap mit Maßnahmen. Den verwendeten Prompt-Katalog legen wir offen.`,
    ],
  },
  {
    id: "ablauf",
    q: "Wie läuft ein GEO Audit ab?",
    a: [
      "Nach einem kurzen Erstgespräch legen wir gemeinsam Themen, Wettbewerber und den Fragenkatalog fest, führen die Abfragen und Prüfungen durch und stellen die Ergebnisse in einem Termin vor. Den Ablauf im Detail beschreibt der Beitrag [GEO Audit: Ablauf und Inhalte](/ratgeber/geo-audit-ablauf).",
    ],
  },
];

export default function GeoAuditPage() {
  const crumbs = [
    { name: "Leistungen", path: "/leistungen" },
    { name: "GEO Audit", path: "/geo-audit" },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/geo-audit", title, description }),
          serviceSchema({ name: "GEO Audit", alternateName: ["AI Visibility Audit", "KI-Sichtbarkeitsanalyse"], description, path: "/geo-audit", serviceType: "GEO Audit / KI-Sichtbarkeitsanalyse", minPrice: 1249 }),
          faqSchema([...auditQa, ...auditFaq], "/geo-audit"),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="GEO Audit"
        title={
          <>
            GEO Audit: Was sagt die KI über <span className="em">Ihr Unternehmen?</span>
          </>
        }
        lead="Das GEO Audit zeigt, ob und wie ChatGPT, Gemini, Perplexity und Google AI Overviews Ihre Marke heute nennen, wer stattdessen genannt wird und auf welche Quellen sich die Antworten stützen."
        primary={{ label: "Kostenlosen Check starten", href: "#check" }}
        aside={
          <AtAGlance
            rows={[
              { k: "Ziel", v: "Ist-Stand Ihrer Sichtbarkeit in KI-Antworten" },
              { k: "Plattformen", v: "ChatGPT, Gemini, Perplexity, Google AI Overviews – weitere wie Copilot oder Meta AI nach Bedarf" },
              { k: "Einstieg", v: "Kostenloser Sichtbarkeits-Check mit persönlichem Ergebnisgespräch" },
              { k: "Vertiefung", v: `Vollständiges GEO Audit mit priorisierter Roadmap – ${pricing.audit} (netto)` },
            ]}
          />
        }
      />

      <section aria-labelledby="formate" className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow mb-6 text-muted">Zwei Formate</p>
            <h2 id="formate" className="text-h2 font-medium text-balance">
              Erst Klarheit, <span className="em">dann Strategie.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {formats.map((f, i) => (
              <article
                key={f.name}
                className={`flex flex-col rounded-[24px] p-7 sm:p-10 ${f.dark ? "bg-ink text-paper" : "border border-line bg-card"}`}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[1.6rem] font-medium tracking-[-0.02em]">{f.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.1em] ${
                      f.dark ? "bg-paper/10 text-paper" : "bg-ink text-paper"
                    }`}
                  >
                    {f.tag}
                  </span>
                </div>
                <p className={`mt-4 text-[1rem] leading-relaxed ${f.dark ? "text-fog" : "text-muted"}`}>{f.text}</p>
                <ul className="mt-8 space-y-3">
                  {f.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[0.98rem]">
                      <span
                        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                          f.dark ? "bg-paper text-ink" : "bg-ink text-paper"
                        }`}
                      >
                        <Check className="size-3" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <Button href={f.cta.href} variant={f.dark ? "light" : "primary"} arrow>
                    {f.cta.label}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="ablauf" className="border-t border-line bg-paper-2/50 py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow mb-6 text-muted">Ablauf</p>
            <h2 id="ablauf" className="text-h2 font-medium">
              So läuft der <span className="em">Check ab.</span>
            </h2>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="bg-paper p-7" data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                <span className="flex size-8 items-center justify-center rounded-full border border-line-2 font-mono text-[0.66rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-[1.25rem] font-medium tracking-[-0.015em]">{s.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <AuditSection />
      <QASection
        id="wissen"
        eyebrow="GEO Audit erklärt"
        title={
          <>
            GEO Audit, AI Visibility Audit, <span className="em">ChatGPT Audit.</span>
          </>
        }
        items={auditQa}
        tone="tint"
      />
      <FaqSection items={auditFaq} withSchema={false} title={<>Fragen zum <span className="em">GEO Audit.</span></>} />
      <RelatedLinks
        title="Weiterführend"
        links={[
          { label: "AI Visibility Monitoring", href: "/ai-visibility", note: "Nach dem Audit: laufend messen" },
          { label: "Unsere Methodik", href: "/ratgeber/methodik-prompt-katalog", note: "So messen wir mit dem Prompt-Katalog" },
          { label: "Was macht eine GEO Agentur?", href: "/geo-agentur", note: "Leistungen und Kosten" },
        ]}
      />
    </>
  );
}
