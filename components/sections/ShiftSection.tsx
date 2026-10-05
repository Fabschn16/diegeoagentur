import { SearchShift } from "@/components/visuals/SearchShift";
import type { Locale } from "@/lib/i18n";

const sources = {
  chatgpt: { n: 1, label: "Wikipedia: ChatGPT", href: "https://en.wikipedia.org/wiki/ChatGPT" },
  overviews: {
    n: 2,
    href: "https://techcrunch.com/2025/07/23/googles-ai-overviews-have-2b-monthly-users-ai-mode-100m-in-the-us-and-india/",
  },
};

const copy = {
  de: {
    eyebrow: "Warum jetzt",
    title: "Die Suche verändert sich. ",
    titleEm: "Ihre Sichtbarkeit muss sich mitverändern.",
    lead: "Google zeigt Links. KI gibt Antworten. Wer heute recherchiert, bekommt immer öfter eine fertige Empfehlung – noch bevor er eine Website besucht. Damit gewinnt digitale Autorität zusätzlich an Bedeutung.",
    position: "Bei Google konnte ein Unternehmen auf Position 5 trotzdem gefunden werden. In einer KI-Antwort gibt es oft keine Position 5.",
    source: "Quelle",
    facts: [
      { value: "900 Mio.", label: "wöchentlich aktive Nutzer von ChatGPT", note: "Stand Februar 2026", source: sources.chatgpt },
      {
        value: "2 Mrd.+",
        label: "monatliche Nutzer von Google AI Overviews",
        note: "laut Alphabet, Juli 2025",
        source: { ...sources.overviews, label: "TechCrunch, 23.07.2025" },
      },
    ],
  },
  en: {
    eyebrow: "Why now",
    title: "Search is changing. ",
    titleEm: "Your visibility has to change with it.",
    lead: "Google shows links. AI gives answers. People researching today increasingly get a ready-made recommendation – before they even visit a website. That makes digital authority matter even more.",
    position: "On Google, a company in position 5 could still be found. In an AI answer, there often is no position 5.",
    source: "Source",
    facts: [
      { value: "900M", label: "weekly active ChatGPT users", note: "as of February 2026", source: sources.chatgpt },
      {
        value: "2B+",
        label: "monthly users of Google AI Overviews",
        note: "according to Alphabet, July 2025",
        source: { ...sources.overviews, label: "TechCrunch, 23 July 2025" },
      },
    ],
  },
};

export function ShiftSection({ locale = "de" }: { locale?: Locale }) {
  const t = copy[locale];
  const facts = t.facts;
  return (
    <section aria-labelledby="suche-veraendert" className="relative bg-night text-paper">
      <div className="container-x py-24 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7" data-reveal>
            <p className="eyebrow mb-6 flex items-center gap-3 text-fog">
              <span className="text-paper">01</span>
              <span className="h-px w-8 bg-night-line" />
              {t.eyebrow}
            </p>
            <h2 id="suche-veraendert" className="text-h1 font-medium text-balance">
              {t.title}<span className="em text-fog">{t.titleEm}</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-3" data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
            <p className="text-lead text-pretty text-fog">
              {t.lead}
            </p>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <SearchShift locale={locale} />
        </div>

        <div className="mt-16 grid gap-10 border-t border-night-line pt-12 lg:grid-cols-12">
          <p className="max-w-md text-[1.05rem] leading-relaxed text-paper lg:col-span-5" data-reveal>
            {t.position}
          </p>
          <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            {facts.map((f, i) => (
              <div key={f.value} data-reveal style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}>
                <dt className="sr-only">{f.label}</dt>
                <dd className="flex items-start gap-1.5 text-[3rem] font-medium leading-none tracking-[-0.04em] sm:text-[3.6rem]">
                  {f.value}
                  <a
                    href={`#quelle-${f.source.n}`}
                    className="mt-1 rounded-[3px] bg-signal px-1.5 font-mono text-[0.7rem] font-medium leading-[1.5] tracking-normal text-white"
                    aria-label={`${t.source} ${f.source.n}`}
                  >
                    {f.source.n}
                  </a>
                </dd>
                <dd className="mt-3 text-[0.95rem] text-paper">{f.label}</dd>
                <dd className="mt-1 text-[0.82rem] text-fog">{f.note}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="mt-12 space-y-1 text-[0.75rem] text-fog/80">
          {facts.map((f) => (
            <li key={f.source.n} id={`quelle-${f.source.n}`} className="flex gap-2">
              <span className="font-mono">[{f.source.n}]</span>
              <a href={f.source.href} target="_blank" rel="noopener nofollow" className="underline decoration-night-line underline-offset-2 hover:text-paper">
                {f.source.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
