import { LeadForm } from "@/components/ui/LeadForm";
import { Check } from "@/components/ui/Icons";
import { TeamAvatars } from "@/components/ui/TeamAvatars";
import { team } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

const copy = {
  de: {
    eyebrow: "Kostenloser GEO Sichtbarkeits-Check",
    title: (
      <>
        Wissen Sie, was ChatGPT über Ihr Unternehmen <span className="em text-fog">sagt?</span>
      </>
    ),
    lead: "Wir stellen ChatGPT, Gemini, Perplexity und Google AI Overviews die Fragen, die Ihre Kunden stellen – und zeigen Ihnen, was dabei herauskommt.",
    checksLabel: "Wir prüfen beispielhaft",
    checks: [
      "Wird Ihre Marke genannt?",
      "Werden Wettbewerber häufiger genannt?",
      "Für welche Themen erkennt die KI Ihre Expertise?",
      "Welche Quellen beeinflussen die Antworten?",
      "Wo besteht das größte Potenzial?",
    ],
    facts: [
      ["Kosten", "Kostenlos"],
      ["Aufwand", "2 Minuten"],
      ["Ergebnis", "Persönlich besprochen"],
    ],
    personal: "Den Check machen wir persönlich.",
    direct: "Lieber direkt schreiben?",
    formTitle: "KI-Sichtbarkeit prüfen lassen",
    noObligation: "Unverbindlich",
  },
  en: {
    eyebrow: "Free GEO visibility check",
    title: (
      <>
        Do you know what ChatGPT <span className="em text-fog">says about your company?</span>
      </>
    ),
    lead: "We ask ChatGPT, Gemini, Perplexity and Google AI Overviews the questions your customers ask, and show you what comes back.",
    checksLabel: "What we check, for example",
    checks: [
      "Is your brand mentioned?",
      "Are competitors mentioned more often?",
      "For which topics does AI recognise your expertise?",
      "Which sources shape the answers?",
      "Where is the biggest potential?",
    ],
    facts: [
      ["Cost", "Free"],
      ["Effort", "2 minutes"],
      ["Result", "Discussed in person"],
    ],
    personal: "We run the check personally.",
    direct: "Prefer to write directly?",
    formTitle: "Get your AI visibility checked",
    noObligation: "No obligation",
  },
};

export function AuditSection({
  index,
  headingLevel = "h2",
  title,
  locale = "de",
}: {
  index?: string;
  headingLevel?: "h1" | "h2";
  title?: React.ReactNode;
  locale?: Locale;
}) {
  const H = headingLevel;
  const t = copy[locale];
  return (
    <section id="check" aria-labelledby="check-title" className="scroll-mt-20 bg-night text-paper">
      <div className="container-x py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <p className="eyebrow mb-6 flex items-center gap-3 text-fog">
              {index && <span className="text-paper">{index}</span>}
              {index && <span className="h-px w-8 bg-night-line" />}
              {t.eyebrow}
            </p>
            <H id="check-title" className="text-h2 font-medium text-balance">
              {title ?? t.title}
            </H>
            <p className="mt-6 text-lead text-fog">{t.lead}</p>
            <p className="eyebrow mt-10 mb-4 text-fog">{t.checksLabel}</p>
            <ul className="space-y-3">
              {t.checks.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[1rem]">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
                    <Check className="size-3" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-night-line pt-6 text-[0.82rem]">
              {t.facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-fog">{k}</dt>
                  <dd className="mt-1.5 text-paper">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex items-start gap-4 rounded-2xl border border-night-line bg-night-2 p-5">
              <TeamAvatars size={48} tone="dark" locale={locale} />
              <div className="text-[0.9rem] leading-relaxed">
                <p className="text-paper">{t.personal}</p>
                <p className="mt-1 text-fog">{t.direct}</p>
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
                <p className="text-[1.15rem] font-medium tracking-[-0.01em]">{t.formTitle}</p>
                <p className="hidden font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted sm:block">{t.noObligation}</p>
              </div>
              <LeadForm variant="audit" locale={locale} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
