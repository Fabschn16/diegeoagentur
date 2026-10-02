import { cases } from "@/lib/cases";

const lenses = [
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

export function Insights({ index = "08" }: { index?: string }) {
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
              Ergebnisse zeigen wir, <span className="em">wenn sie belegbar sind.</span>
            </h2>
          </div>
          <p className="text-lead text-muted lg:col-span-5 lg:pb-2">
            Im GEO-Markt kursieren viele Prozentzahlen ohne Methodik. Wir veröffentlichen Fallstudien nur mit Freigabe unserer Kunden –
            und mit offengelegtem Prompt-Katalog, Zeitraum und Plattformen.
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
                <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted">Methodik: {c.method}</p>
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
                <p className="eyebrow text-muted">Fallstudien</p>
                <p className="mt-5 text-[1.35rem] font-medium leading-snug tracking-[-0.02em]">
                  Erste Fallstudien sind in Vorbereitung.
                </p>
              </div>
              <p className="mt-10 text-[0.9rem] leading-relaxed text-muted">
                Sie möchten vorab sehen, wie ein Report aussieht? Im Erstgespräch zeigen wir Ihnen unsere Auswertungsstruktur.
              </p>
            </div>
            <ol className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-3 lg:col-span-8">
              {lenses.map((l, i) => (
                <li key={l.q} className="flex flex-col bg-card p-7" data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                  <span className="font-mono text-[0.68rem] text-muted">Analysefrage {String(i + 1).padStart(2, "0")}</span>
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
