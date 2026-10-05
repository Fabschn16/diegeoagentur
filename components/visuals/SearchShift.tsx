import type { Locale } from "@/lib/i18n";

const copy = {
  de: {
    before: "Bisher",
    beforeTag: "Suche = Linkliste",
    beforeFlow: ["Nutzer", "Google", "10 Ergebnisse", "Website"],
    resultsLabel: "Zehn Suchergebnisse",
    yourSite: "Ihre Website",
    visible: "sichtbar · klickbar",
    beforeText: "Auch auf Position 5 wurde ein Unternehmen gefunden. Nutzer haben verglichen, geklickt und selbst entschieden.",
    now: "Zunehmend",
    nowTag: "Suche = Antwort",
    nowFlow: ["Nutzer", "KI-Assistent", "Antwort", "Wenige Empfehlungen"],
    recommended: "Empfohlene Anbieter",
    providers: ["Anbieter A", "Anbieter B", "Anbieter C"],
    brand: "Ihre Marke",
    notMentioned: "nicht genannt",
    nowText: "Eine KI nennt häufig nur wenige konkrete Anbieter. Wer nicht dabei ist, wird in diesem Moment nicht in Betracht gezogen.",
  },
  en: {
    before: "Until now",
    beforeTag: "Search = list of links",
    beforeFlow: ["User", "Google", "10 results", "Website"],
    resultsLabel: "Ten search results",
    yourSite: "Your website",
    visible: "visible · clickable",
    beforeText: "Even in position 5, a company still got found. Users compared, clicked and decided for themselves.",
    now: "Increasingly",
    nowTag: "Search = answer",
    nowFlow: ["User", "AI assistant", "Answer", "A few recommendations"],
    recommended: "Recommended providers",
    providers: ["Provider A", "Provider B", "Provider C"],
    brand: "Your brand",
    notMentioned: "not mentioned",
    nowText: "An AI often names only a handful of specific providers. If you are not among them, you are not considered at that moment.",
  },
};

function Flow({ steps, highlight }: { steps: string[]; highlight?: number }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2" aria-label={steps.join(" → ")}>
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span
            className={`rounded-full border px-3 py-1.5 font-mono text-[0.7rem] tracking-wide ${
              i === highlight ? "border-paper bg-paper text-ink" : "border-night-line text-fog"
            }`}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <svg viewBox="0 0 16 8" className="w-3.5 text-night-line" aria-hidden="true">
              <path d="M0 4h14m0 0-3-3m3 3-3 3" stroke="currentColor" fill="none" strokeWidth="1.2" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}

export function SearchShift({ locale = "de" }: { locale?: Locale }) {
  const t = copy[locale];
  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
      {/* Früher */}
      <div className="rounded-[20px] border border-night-line bg-night-2 p-6 sm:p-8" data-reveal>
        <div className="flex items-baseline justify-between">
          <p className="eyebrow text-fog">{t.before}</p>
          <p className="font-mono text-[0.7rem] text-fog">{t.beforeTag}</p>
        </div>
        <div className="mt-5">
          <Flow steps={t.beforeFlow} />
        </div>
        <ol className="mt-8 space-y-1.5" aria-label={t.resultsLabel}>
          {Array.from({ length: 10 }).map((_, n) => {
            const you = n === 4;
            return (
              <li
                key={n}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 ${you ? "bg-night-3 ring-1 ring-fog/40" : ""}`}
              >
                <span className={`w-5 font-mono text-[0.68rem] ${you ? "text-paper" : "text-fog/60"}`}>{String(n + 1).padStart(2, "0")}</span>
                {you ? (
                  <span className="flex flex-1 items-center justify-between gap-3 text-[0.85rem] text-paper">
                    {t.yourSite}
                    <span className="font-mono text-[0.66rem] text-fog">{t.visible}</span>
                  </span>
                ) : (
                  <span className="h-1.5 rounded-full bg-night-line" style={{ width: `${82 - ((n * 17) % 40)}%` }} />
                )}
              </li>
            );
          })}
        </ol>
        <p className="mt-6 border-t border-night-line pt-5 text-[0.92rem] leading-relaxed text-fog">
          {t.beforeText}
        </p>
      </div>

      {/* Heute */}
      <div className="rounded-[20px] border border-paper/20 bg-paper p-6 text-ink sm:p-8" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
        <div className="flex items-baseline justify-between">
          <p className="eyebrow text-muted">{t.now}</p>
          <p className="font-mono text-[0.7rem] text-muted">{t.nowTag}</p>
        </div>
        <div className="mt-5 [&_span.rounded-full]:border-line-2 [&_span.rounded-full]:text-muted">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-2" aria-label={locale === "en" ? t.nowFlow.join(" → ") : "Nutzer → KI-Assistent → Antwort → wenige Empfehlungen"}>
            {t.nowFlow.map((s, i, arr) => (
              <li key={s} className="flex items-center gap-2">
                <span
                  className={`rounded-full border px-3 py-1.5 font-mono text-[0.7rem] tracking-wide ${
                    i === 3 ? "!border-ink bg-ink !text-paper" : ""
                  }`}
                >
                  {s}
                </span>
                {i < arr.length - 1 && (
                  <svg viewBox="0 0 16 8" className="w-3.5 text-line-2" aria-hidden="true">
                    <path d="M0 4h14m0 0-3-3m3 3-3 3" stroke="currentColor" fill="none" strokeWidth="1.2" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-card p-5">
          <div className="space-y-1.5">
            <span className="block h-1.5 w-[94%] rounded-full bg-paper-2" />
            <span className="block h-1.5 w-[70%] rounded-full bg-paper-2" />
          </div>
          <ul className="mt-5 space-y-2" aria-label={t.recommended}>
            {t.providers.map((a, n) => (
              <li key={a} className="flex items-center justify-between rounded-xl border border-line px-3.5 py-2.5 text-[0.88rem]">
                {a}
                <span className="rounded-[3px] bg-ink px-1.5 font-mono text-[0.65rem] leading-[1.5] text-paper">{n + 1}</span>
              </li>
            ))}
            <li className="flex items-center justify-between rounded-xl border border-dashed border-signal/60 px-3.5 py-2.5 text-[0.88rem] text-muted">
              {t.brand}
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.08em] text-signal">{t.notMentioned}</span>
            </li>
          </ul>
        </div>
        <p className="mt-6 border-t border-line pt-5 text-[0.92rem] leading-relaxed text-muted">
          {t.nowText}
        </p>
      </div>
    </div>
  );
}
