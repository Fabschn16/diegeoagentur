import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/services";

export function Process({ index = "04" }: { index?: string }) {
  return (
    <section aria-labelledby="prozess" className="py-24 lg:py-36">
      <div className="container-x">
        <SectionHeader
          index={index}
          eyebrow="Prozess"
          title={
            <span id="prozess">
              Fünf Schritte. <span className="em">Ein wiederholbares System.</span>
            </span>
          }
          align="split"
          lead="GEO ist kein einmaliges Projekt. Wir arbeiten in einem klaren Zyklus aus Analyse, Umsetzung und Messung – und steuern auf Basis echter Daten nach."
        />

        <ol className="relative mt-16 grid gap-0 lg:mt-24 lg:grid-cols-5">
          {/* Linie */}
          <span aria-hidden="true" className="absolute left-[15px] top-2 bottom-2 w-px bg-line lg:left-0 lg:right-0 lg:top-[15px] lg:bottom-auto lg:h-px lg:w-auto" />
          {processSteps.map((s, i) => (
            <li
              key={s.index}
              className="relative pb-12 pl-14 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-8"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            >
              <span
                className={`absolute left-0 top-0 flex size-[31px] items-center justify-center rounded-full border font-mono text-[0.66rem] lg:relative ${
                  i === 0 ? "border-ink bg-ink text-paper" : "border-line-2 bg-paper text-ink"
                }`}
              >
                {s.index}
              </span>
              <h3 className="text-[1.35rem] font-medium tracking-[-0.02em] lg:mt-8">{s.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{s.text}</p>
              <p className="mt-5 inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-2">
                <span className="h-px w-4 bg-ink-2" />
                {s.output}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex items-center gap-4 rounded-full border border-line px-5 py-3 lg:ml-[40%] lg:mt-16 lg:w-fit" data-reveal>
          <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-signal" aria-hidden="true">
            <path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-[0.9rem] text-ink-2">
            Monitoring und Optimierung laufen als Zyklus weiter – weil sich KI-Systeme und Ihr Wettbewerb laufend verändern.
          </p>
        </div>
      </div>
    </section>
  );
}
