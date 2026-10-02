import { LeadForm } from "@/components/ui/LeadForm";
import { Check } from "@/components/ui/Icons";
import { TeamAvatars } from "@/components/ui/TeamAvatars";
import { team } from "@/lib/site";

const checks = [
  "Wird Ihre Marke genannt?",
  "Werden Wettbewerber häufiger genannt?",
  "Für welche Themen erkennt die KI Ihre Expertise?",
  "Welche Quellen beeinflussen die Antworten?",
  "Wo besteht das größte Potenzial?",
];

export function AuditSection({
  index,
  headingLevel = "h2",
  title,
}: {
  index?: string;
  headingLevel?: "h1" | "h2";
  title?: React.ReactNode;
}) {
  const H = headingLevel;
  return (
    <section id="check" aria-labelledby="check-title" className="scroll-mt-20 bg-night text-paper">
      <div className="container-x py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <p className="eyebrow mb-6 flex items-center gap-3 text-fog">
              {index && <span className="text-paper">{index}</span>}
              {index && <span className="h-px w-8 bg-night-line" />}
              Kostenloser GEO Sichtbarkeits-Check
            </p>
            <H id="check-title" className="text-h2 font-medium text-balance">
              {title ?? (
                <>
                  Wissen Sie, was ChatGPT über Ihr Unternehmen <span className="em text-fog">sagt?</span>
                </>
              )}
            </H>
            <p className="mt-6 text-lead text-fog">
              Wir stellen ChatGPT, Gemini, Perplexity und Google AI Overviews die Fragen, die Ihre Kunden stellen – und zeigen Ihnen, was
              dabei herauskommt.
            </p>
            <p className="eyebrow mt-10 mb-4 text-fog">Wir prüfen beispielhaft</p>
            <ul className="space-y-3">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[1rem]">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
                    <Check className="size-3" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-night-line pt-6 text-[0.82rem]">
              {[
                ["Kosten", "Kostenlos"],
                ["Aufwand", "2 Minuten"],
                ["Ergebnis", "Persönlich besprochen"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-fog">{k}</dt>
                  <dd className="mt-1.5 text-paper">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex items-start gap-4 rounded-2xl border border-night-line bg-night-2 p-5">
              <TeamAvatars size={48} tone="dark" />
              <div className="text-[0.9rem] leading-relaxed">
                <p className="text-paper">Den Check machen wir persönlich.</p>
                <p className="mt-1 text-fog">Lieber direkt schreiben?</p>
                <ul className="mt-2 space-y-1">
                  {team.map((p) => (
                    <li key={p.id}>
                      <a href={`mailto:${p.email}`} className="break-all text-paper underline decoration-night-line underline-offset-4 hover:decoration-paper">
                        {p.email}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <div className="rounded-[24px] bg-paper p-5 text-ink sm:p-8 lg:p-10">
              <div className="mb-7 flex items-center justify-between gap-4 border-b border-line pb-6">
                <p className="text-[1.15rem] font-medium tracking-[-0.01em]">KI-Sichtbarkeit prüfen lassen</p>
                <p className="hidden font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted sm:block">Unverbindlich</p>
              </div>
              <LeadForm variant="audit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
