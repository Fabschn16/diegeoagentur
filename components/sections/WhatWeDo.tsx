import { Button } from "@/components/ui/Button";
import { cta } from "@/lib/site";

const work = [
  { t: "Technik", d: "Ihre Seiten werden für KI-Crawler lesbar." },
  { t: "Inhalte", d: "Texte beantworten die Fragen Ihrer Kunden klar." },
  { t: "Markenprofil", d: "KI versteht eindeutig, wer Sie sind und was Sie anbieten." },
  { t: "Erwähnungen", d: "Andere Seiten bestätigen Ihre Expertise." },
];

function Arrow() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center py-1 lg:py-0">
      <svg viewBox="0 0 40 16" className="w-8 rotate-90 text-line-2 lg:w-10 lg:rotate-0">
        <path d="M0 8h36m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** „Was wir machen“ in einem Satz – direkt nach dem Hero, damit jeder sofort versteht, was wir tun. */
export function WhatWeDo() {
  return (
    <section aria-labelledby="was-wir-machen" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="max-w-4xl" data-reveal>
          <p className="eyebrow mb-6 text-muted">Kurz gesagt</p>
          <h2 id="was-wir-machen" className="text-h1 font-medium text-balance">
            Wir optimieren Ihre Website, <span className="em">damit KI Sie findet.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lead text-ink-2">
            Wenn jemand ChatGPT, Gemini oder Perplexity nach einem Anbieter fragt, soll Ihr Unternehmen in der Antwort vorkommen. Dafür bringen
            wir Ihre Website und Ihren Auftritt im Netz in eine Form, die KI-Systeme verstehen und gerne zitieren.
          </p>
        </div>

        <div className="mt-14 grid gap-3 lg:mt-20 lg:grid-cols-[1fr_auto_1.25fr_auto_1fr] lg:items-stretch lg:gap-4">
          {/* 1 – Heute */}
          <div className="flex flex-col rounded-[24px] border border-line bg-card p-6 sm:p-7" data-reveal>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">1 · Ihre Website heute</p>
            <div aria-hidden="true" className="mt-6 overflow-hidden rounded-xl border border-line bg-paper">
              <div className="flex gap-1 border-b border-line px-3 py-2">
                <span className="size-1.5 rounded-full bg-line-2" />
                <span className="size-1.5 rounded-full bg-line-2" />
                <span className="size-1.5 rounded-full bg-line-2" />
              </div>
              <div className="space-y-2 p-4">
                <span className="block h-2 w-2/3 rounded-full bg-line-2" />
                <span className="block h-1.5 w-full rounded-full bg-line" />
                <span className="block h-1.5 w-5/6 rounded-full bg-line" />
                <span className="block h-1.5 w-4/6 rounded-full bg-line opacity-50" />
              </div>
            </div>
            <p className="mt-6 text-[1.15rem] font-medium tracking-[-0.01em]">Für Menschen gebaut.</p>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">
              Für KI oft schwer zu lesen: Wichtige Infos fehlen, sind versteckt oder unklar formuliert.
            </p>
          </div>

          <Arrow />

          {/* 2 – Wir optimieren */}
          <div className="flex flex-col rounded-[24px] bg-ink p-6 text-paper sm:p-7" data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-fog">2 · Wir optimieren</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {work.map((w) => (
                <li key={w.t} className="rounded-xl border border-night-line bg-night-2 p-4">
                  <p className="flex items-center gap-2 text-[1rem] font-medium">
                    <span className="size-1.5 rounded-full bg-signal" />
                    {w.t}
                  </p>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-fog">{w.d}</p>
                </li>
              ))}
            </ul>
          </div>

          <Arrow />

          {/* 3 – Ergebnis */}
          <div className="flex flex-col rounded-[24px] border border-line bg-card p-6 sm:p-7" data-reveal style={{ ["--reveal-delay" as string]: "160ms" }}>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted">3 · KI findet Sie</p>
            <div aria-hidden="true" className="mt-6 space-y-2 rounded-xl border border-line bg-paper p-4">
              <p className="ml-auto w-fit rounded-xl rounded-br-sm bg-paper-2 px-3 py-1.5 text-[0.78rem] text-ink-2">Wen empfiehlst du?</p>
              <p className="flex items-center justify-between rounded-lg bg-ink px-3 py-2 text-[0.82rem] font-medium text-paper">
                Ihr Unternehmen
                <span className="rounded-[3px] bg-signal px-1.5 font-mono text-[0.62rem] leading-[1.5] text-white">1</span>
              </p>
            </div>
            <p className="mt-6 text-[1.15rem] font-medium tracking-[-0.01em]">Verstanden und genannt.</p>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-muted">
              Ihre Chancen steigen, bei passenden Fragen als Anbieter oder Quelle aufzutauchen – messbar über alle großen KI-Systeme.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center" data-reveal>
          <Button href={cta.primary.href} arrow>
            Kostenlos prüfen, ob KI Sie findet
          </Button>
          <p className="text-[0.88rem] text-muted">Wir zeigen Ihnen, was ChatGPT & Co. heute über Ihr Unternehmen sagen.</p>
        </div>
      </div>
    </section>
  );
}
