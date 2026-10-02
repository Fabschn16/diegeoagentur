const reasons = [
  {
    t: "Keine Blackbox.",
    d: "Wir erklären, was wir tun und warum. Sie sehen jede Maßnahme, jede Messung und jede Annahme, auf der eine Empfehlung beruht.",
  },
  {
    t: "Daten statt Bauchgefühl.",
    d: "Wir messen KI-Sichtbarkeit kontinuierlich über einen festen Prompt-Katalog – und bewerten Entwicklungen, nicht einzelne Screenshots.",
  },
  {
    t: "Spezialisiert statt Full Service.",
    d: "Unser Fokus liegt auf Search, Daten und KI-Sichtbarkeit. Kein Social Media, keine Streuverluste, keine Themen, die wir nur nebenbei machen.",
  },
  {
    t: "Direkte Ansprechpartner.",
    d: "Keine endlosen Account-Manager-Strukturen. Sie sprechen mit den Menschen, die Ihre Strategie entwickeln und verantworten.",
  },
  {
    t: "GEO und klassische Search aus einer Hand.",
    d: "Wir betrachten Google und KI-Suche nicht getrennt, sondern als zusammenhängende Search Journey – vom ersten Prompt bis zur Anfrage.",
  },
];

export function WhyUs({ index = "07" }: { index?: string }) {
  return (
    <section aria-labelledby="warum-wir" className="border-t border-line bg-paper-2/50 py-24 lg:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32" data-reveal>
            <p className="eyebrow mb-6 flex items-center gap-3 text-muted">
              {index && <span className="text-ink">{index}</span>}
              {index && <span className="h-px w-8 bg-line-2" />}
              Warum wir
            </p>
            <h2 id="warum-wir" className="text-h2 font-medium text-balance">
              Vertrauen entsteht durch <span className="em">Klarheit.</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-muted">
              Im GEO-Markt gibt es viele große Versprechen. Wir versprechen keine Platzierungen – sondern saubere Arbeit, ehrliche Messung
              und nachvollziehbare Fortschritte.
            </p>
          </div>
        </div>
        <ol className="border-t border-ink lg:col-span-8">
          {reasons.map((r, i) => (
            <li
              key={r.t}
              className="grid gap-3 border-b border-line py-8 sm:grid-cols-[64px_1fr_1.2fr] sm:gap-6 lg:py-10"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 50}ms` }}
            >
              <span className="font-mono text-[0.72rem] text-muted sm:pt-2">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[1.45rem] font-medium leading-tight tracking-[-0.02em]">{r.t}</h3>
              <p className="text-[0.98rem] leading-relaxed text-muted sm:pt-1">{r.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
