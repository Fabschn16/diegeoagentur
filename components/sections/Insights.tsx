import { cases } from "@/lib/cases";
import type { Locale } from "@/lib/i18n";

const lensesDe = [
  {
    q: "Wer wird bei Vergleichsfragen genannt?",
    d: "„Welcher Anbieter ist der beste für …?“ ist die Frage mit der höchsten Kaufnähe. Wir zeigen, wer dort auftaucht – und wer fehlt.",
  },
  {
    q: "Welche Quellen tauchen immer wieder auf?",
    d: "KI-Systeme stützen sich oft wiederkehrend auf dieselben Portale, Vergleiche und Fachartikel. Diese Quellen sind Ihr Hebel.",
  },
  {
    q: "Wie wird Ihre Marke beschrieben – und stimmt das?",
    d: "Veraltete Leistungen, falsche Standorte, unklare Positionierung: Wir prüfen, ob die KI Ihr Unternehmen korrekt wiedergibt.",
  },
];

const lensesEn = [
  {
    q: "Who is named in comparison questions?",
    d: "“Which provider is best for …?” is the question closest to a purchase. We show who appears there, and who is missing.",
  },
  {
    q: "Which sources keep coming up?",
    d: "AI systems often rely on the same portals, comparisons and specialist articles again and again. These sources are your lever.",
  },
  {
    q: "How is your brand described, and is it accurate?",
    d: "Outdated services, wrong locations, unclear positioning: we check whether the AI represents your company correctly.",
  },
];

const copy = {
  de: {
    lenses: lensesDe,
    title: ["Ergebnisse zeigen wir,", "wenn sie belegbar sind."],
    lead: "Im GEO-Markt kursieren viele Prozentzahlen ohne Methodik. Wir veröffentlichen Fallstudien nur mit Freigabe unserer Kunden – und mit offengelegtem Prompt-Katalog, Zeitraum und Plattformen.",
    method: "Methodik",
    cases: "Fallstudien",
    soon: "Erste Fallstudien sind in Vorbereitung.",
    preview: "Sie möchten vorab sehen, wie ein Report aussieht? Im Erstgespräch zeigen wir Ihnen unsere Auswertungsstruktur.",
    question: "Analysefrage",
  },
  en: {
    lenses: lensesEn,
    title: ["We show results", "when they can be proven."],
    lead: "The GEO market is full of percentages without a method behind them. We only publish case studies with our clients’ approval, and with the prompt catalogue, period and platforms disclosed.",
    method: "Method",
    cases: "Case studies",
    soon: "Our first case studies are in preparation.",
    preview: "Want to see what a report looks like first? In the intro call we show you how we structure our analysis.",
    question: "Analysis question",
  },
};

export function Insights({ index = "08", locale = "de" }: { index?: string; locale?: Locale }) {
  const t = copy[locale];
  const lenses = t.lenses;
  return (
    <section aria-labelledby="insights" className="py-24 lg:py-36">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6 flex items-center gap-3 text-muted">
              <span className="text-ink">{index}</span>
              <span className="h-px w-8 bg-line-2" />
              GEO Insights
            </p>
            <h2 id="insights" className="text-h2 font-medium text-balance">
              {t.title[0]} <span className="em">{t.title[1]}</span>
            </h2>
          </div>
          <p className="text-lead text-muted lg:col-span-5 lg:pb-2">
            {t.lead}
          </p>
        </div>

        {cases.length > 0 ? (
          <ul className="mt-16 grid gap-6 md:grid-cols-2">
            {cases.map((c) => (
              <li key={c.title} className="rounded-[24px] border border-line bg-card p-8" data-reveal>
                <p className="eyebrow text-muted">
                  {c.industry} · {c.client}
                </p>
                <h3 className="mt-4 text-h3 font-medium">{c.title}</h3>
                <p className="mt-3 text-muted">{c.summary}</p>
                <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[0.82rem] text-muted">{m.label}</dt>
                      <dd className="mt-1 text-[2rem] font-medium tracking-[-0.03em]">{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted">{t.method}: {c.method}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-16 grid gap-6 lg:grid-cols-12">
            <div
              className="relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-dashed border-line-2 p-8 lg:col-span-4"
              data-reveal
            >
              <div>
                <p className="eyebrow text-muted">{t.cases}</p>
                <p className="mt-5 text-[1.35rem] font-medium leading-snug tracking-[-0.02em]">
                  {t.soon}
                </p>
              </div>
              <p className="mt-10 text-[0.9rem] leading-relaxed text-muted">
                {t.preview}
              </p>
            </div>
            <ol className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-3 lg:col-span-8">
              {lenses.map((l, i) => (
                <li key={l.q} className="flex flex-col bg-card p-7" data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                  <span className="font-mono text-[0.68rem] text-muted">{t.question} {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 text-[1.15rem] font-medium leading-snug tracking-[-0.01em]">{l.q}</h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{l.d}</p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
