import type { Locale } from "@/lib/i18n";

const reasonsDe = [
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

const reasonsEn = [
  {
    t: "No black box.",
    d: "We explain what we do and why. You see every measure, every measurement and every assumption a recommendation is based on.",
  },
  {
    t: "Data, not gut feeling.",
    d: "We measure AI visibility continuously against a fixed prompt catalogue, and assess trends rather than individual screenshots.",
  },
  {
    t: "Specialised, not full service.",
    d: "Our focus is search, data and AI visibility. No social media, no wasted effort, no topics we only handle on the side.",
  },
  {
    t: "Direct contacts.",
    d: "No endless layers of account managers. You talk to the people who develop your strategy and are accountable for it.",
  },
  {
    t: "GEO and classic search from one source.",
    d: "We don't treat Google and AI search separately, but as one connected search journey, from the first prompt to the enquiry.",
  },
];

const copy = {
  de: {
    reasons: reasonsDe,
    eyebrow: "Warum wir",
    title: (
      <>
        Vertrauen entsteht durch <span className="em">Klarheit.</span>
      </>
    ),
    lead: "Im GEO-Markt gibt es viele große Versprechen. Wir versprechen keine Platzierungen – sondern saubere Arbeit, ehrliche Messung und nachvollziehbare Fortschritte.",
  },
  en: {
    reasons: reasonsEn,
    eyebrow: "Why us",
    title: (
      <>
        Trust comes from <span className="em">clarity.</span>
      </>
    ),
    lead: "The GEO market is full of big promises. We don't promise rankings. We promise solid work, honest measurement and progress you can follow.",
  },
};

export function WhyUs({ index = "07", locale = "de" }: { index?: string; locale?: Locale }) {
  const t = copy[locale];
  return (
    <section aria-labelledby="warum-wir" className="border-t border-line bg-paper-2/50 py-24 lg:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32" data-reveal>
            <p className="eyebrow mb-6 flex items-center gap-3 text-muted">
              {index && <span className="text-ink">{index}</span>}
              {index && <span className="h-px w-8 bg-line-2" />}
              {t.eyebrow}
            </p>
            <h2 id="warum-wir" className="text-h2 font-medium text-balance">
              {t.title}
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-muted">{t.lead}</p>
          </div>
        </div>
        <ol className="border-t border-ink lg:col-span-8">
          {t.reasons.map((r, i) => (
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
