"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cta } from "@/lib/site";

export const scenes = [
  {
    engine: "ChatGPT",
    prompt: "Welche Laufschuhe sind gut für Anfänger?",
    intro: "Für Einsteiger werden häufig diese Marken empfohlen:",
    sources: ["ihre-marke.de", "laufmagazin.de", "testbericht.de"],
  },
  {
    engine: "Gemini",
    prompt: "Welche Firma in München macht gute Badsanierungen?",
    intro: "Viel Erfahrung und gute Bewertungen haben zum Beispiel:",
    sources: ["ihre-marke.de", "bewertungsportal.de", "handwerkerverzeichnis.de"],
  },
  {
    engine: "Perplexity",
    prompt: "Welcher Steuerberater ist gut für Selbstständige?",
    intro: "Auf Selbstständige und Gründer spezialisiert sind unter anderem:",
    sources: ["ihre-marke.de", "branchenverzeichnis.de", "gruenderportal.de"],
  },
  {
    engine: "AI Overviews",
    prompt: "Was kostet eine Wärmepumpe im Altbau?",
    intro: "Die Kosten hängen vom Haus und der Leistung ab. Ausführliche Informationen bieten:",
    sources: ["ihre-marke.de", "energieportal.de", "verbraucher.de"],
  },
] as const;

const DURATION = 5200;

export function AnswerPanel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const t = setTimeout(() => setI((v) => (v + 1) % scenes.length), DURATION);
    return () => clearTimeout(t);
  }, [i, paused, reduced]);

  const s = scenes[i];

  return (
    <figure
      data-answer-panel
      className="relative mx-auto w-full max-w-[560px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Schematische Darstellung: Eine KI beantwortet eine Frage und nennt wenige Anbieter mit Quellenangabe."
    >
      {/* Hintergrund: die klassische Linkliste */}
      <div
        aria-hidden="true"
        className="absolute -left-6 -top-12 hidden w-[78%] rotate-[-3deg] rounded-2xl border border-line bg-card/70 p-5 opacity-70 sm:block lg:-left-14"
      >
        <p className="eyebrow mb-3 text-muted">Suchergebnisse</p>
        <ol className="space-y-2.5">
          {Array.from({ length: 7 }).map((_, n) => (
            <li key={n} className="flex items-center gap-3">
              <span className="w-4 font-mono text-[0.65rem] text-muted">{n + 1}</span>
              <span className="h-1.5 rounded-full bg-line" style={{ width: `${78 - ((n * 13) % 35)}%` }} />
            </li>
          ))}
        </ol>
      </div>

      <div className="relative mt-10 overflow-hidden rounded-[20px] border border-line bg-card shadow-[0_40px_90px_-40px_rgba(16,17,15,0.45),0_2px_6px_-2px_rgba(16,17,15,0.08)] sm:ml-10">
        {/* Tabs */}
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
          <div role="tablist" aria-label="KI-Systeme" className="flex gap-1 overflow-x-auto [scrollbar-width:none]">
            {scenes.map((sc, n) => (
              <button
                key={sc.engine}
                role="tab"
                aria-selected={n === i}
                onClick={() => setI(n)}
                className={`relative shrink-0 rounded-full px-3 py-1.5 font-mono text-[0.68rem] tracking-wide transition-colors ${
                  n === i ? "bg-ink text-paper" : "text-muted hover:text-ink"
                }`}
              >
                {sc.engine}
              </button>
            ))}
          </div>
          <span className="hidden shrink-0 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted sm:block">Schema</span>
        </div>

        <div key={i} data-ap-body className="px-5 pb-5 pt-5 sm:px-6">
          {/* Frage */}
          <div className="answer-line flex justify-end">
            <p data-ap-prompt className="max-w-[88%] rounded-2xl rounded-br-md bg-paper-2 px-4 py-2.5 text-[0.88rem] leading-snug text-ink-2">
              {s.prompt}
            </p>
          </div>

          {/* Antwort */}
          <div className="mt-5 flex gap-3">
            <span aria-hidden="true" className="answer-line mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border border-line-2">
              <span className="size-1.5 rounded-full bg-ink" />
            </span>
            <div className="min-w-0 flex-1">
              <p data-ap-intro className="answer-line text-[0.88rem] leading-relaxed text-ink-2" style={{ animationDelay: "120ms" }}>
                {s.intro}
              </p>
              <ul className="mt-3 space-y-2">
                <li className="answer-line" style={{ animationDelay: "260ms" }}>
                  <Link
                    href={cta.primary.href}
                    aria-label={`Ihre Marke – ${cta.primary.label}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-ink bg-ink px-3.5 py-2.5 text-paper transition-colors hover:bg-ink-2"
                  >
                    <span className="text-[0.9rem] font-medium">Ihre Marke</span>
                    <span className="flex items-center gap-2">
                      <span className="hidden font-mono text-[0.62rem] uppercase tracking-[0.1em] text-fog sm:inline">zitiert</span>
                      <span className="rounded-[3px] bg-signal px-1.5 font-mono text-[0.65rem] leading-[1.5] text-white">1</span>
                    </span>
                  </Link>
                </li>
                {["Anbieter B", "Anbieter C"].map((name, n) => (
                  <li
                    key={name}
                    className="answer-line flex items-center justify-between gap-3 rounded-xl border border-line px-3.5 py-2.5"
                    style={{ animationDelay: `${380 + n * 110}ms` }}
                  >
                    <span className="text-[0.9rem] text-ink-2">{name}</span>
                    <span className="rounded-[3px] border border-line-2 px-1.5 font-mono text-[0.65rem] leading-[1.5] text-muted">
                      {n + 2}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="answer-line mt-4 space-y-1.5" style={{ animationDelay: "620ms" }}>
                <span className="block h-1.5 w-[92%] rounded-full bg-paper-2" />
                <span className="block h-1.5 w-[64%] rounded-full bg-paper-2" />
              </div>

              {/* Quellen */}
              <div className="answer-line mt-5 border-t border-line pt-4" style={{ animationDelay: "760ms" }}>
                <p className="eyebrow mb-2.5 text-[0.62rem] text-muted">Quellen</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.sources.map((src, n) => (
                    <span
                      key={src}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.66rem] ${
                        n === 0 ? "border-signal/40 bg-signal-soft/50 text-ink" : "border-line text-muted"
                      }`}
                    >
                      <span className={n === 0 ? "text-signal" : ""}>{n + 1}</span>
                      <span data-ap-src>{src}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fortschritt */}
        <div className="h-px w-full bg-line">
          <div
            key={`p-${i}-${paused}`}
            data-ap-progress
            className="h-px bg-ink"
            style={{
              width: reduced || paused ? "0%" : "100%",
              transition: reduced || paused ? "none" : `width ${DURATION}ms linear`,
              transform: "scaleX(1)",
            }}
            ref={(el) => {
              if (el && !reduced && !paused) {
                el.style.width = "0%";
                requestAnimationFrame(() => requestAnimationFrame(() => (el.style.width = "100%")));
              }
            }}
          />
        </div>
      </div>

      <figcaption className="mt-4 text-right font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted sm:ml-10">
        Schematische Darstellung · Beispielfragen
      </figcaption>
    </figure>
  );
}
