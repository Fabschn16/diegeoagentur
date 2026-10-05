import { AnswerPanel } from "@/components/visuals/AnswerPanel";
import { Button } from "@/components/ui/Button";
import { TeamAvatars } from "@/components/ui/TeamAvatars";
import { l10n } from "@/lib/l10n";
import type { Locale } from "@/lib/i18n";

const copy = {
  de: {
    eyebrow: "GEO Agentur für Generative Engine Optimization",
    founders: "Gründer · Ihre persönlichen Ansprechpartner",
    leadA: "Immer mehr Menschen fragen ChatGPT, Gemini oder Perplexity nach Empfehlungen.",
    leadStrong: "Wir optimieren Ihre Website, damit KI Ihr Unternehmen findet, versteht und bei passenden Fragen nennt",
    leadB: "– auch in Google AI Overviews.",
    note: "Unverbindlich · 30 Minuten · direkt mit den Gründern",
  },
  en: {
    eyebrow: "GEO agency for Generative Engine Optimization",
    founders: "Founders · your personal contacts",
    leadA: "More and more people ask ChatGPT, Gemini or Perplexity for recommendations.",
    leadStrong: "We optimise your website so that AI finds your company, understands it and mentions it for the right questions",
    leadB: "– in Google AI Overviews, too.",
    note: "No obligation · 30 minutes · directly with the founders",
  },
};

export function Hero({ locale = "de" }: { locale?: Locale }) {
  const t = copy[locale];
  const { cta, bookingHref } = l10n(locale);
  return (
    <section className="relative overflow-hidden">
      {/* feines Raster als Hintergrund */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(16,17,15,0.045)_1px,transparent_1px)] [background-size:calc(100%/12)_100%] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="container-x relative grid gap-14 pb-20 pt-10 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-7 lg:pt-6">
          <h1>
            <span className="eyebrow mb-8 flex items-center gap-3 text-muted" data-reveal>
              <span aria-hidden="true" className="rounded-[3px] bg-signal px-1.5 leading-[1.5] text-white before:content-['1']" />
              {t.eyebrow}
            </span>{" "}
            <span className="block text-display font-medium text-balance" data-reveal style={{ ["--reveal-delay" as string]: "60ms" }}>
              {locale === "en" ? (
                <>
                  Get found in <span className="em whitespace-nowrap">ChatGPT & Co.</span>
                </>
              ) : (
                <>
                  Werden Sie in <span className="whitespace-nowrap">ChatGPT & Co.</span> <span className="em">gefunden.</span>
                </>
              )}
            </span>
          </h1>
          <div className="mt-8 flex items-center gap-4" data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
            <TeamAvatars size={64} locale={locale} />
            <p className="text-[0.95rem] leading-snug text-muted">
              <span className="font-medium text-ink">Fabian Schnabel & Jan Hugo</span>
              <br />
              {t.founders}
            </p>
          </div>
          <p
            className="mt-7 max-w-[36rem] text-lead text-pretty text-ink-2"
            data-reveal
            style={{ ["--reveal-delay" as string]: "140ms" }}
          >
            {t.leadA}{" "}
            <strong className="font-medium text-ink">
              {t.leadStrong}
            </strong>{" "}
            {t.leadB}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" data-reveal style={{ ["--reveal-delay" as string]: "220ms" }}>
            <Button href={cta.primary.href} size="lg" arrow>
              {cta.primary.label}
            </Button>
            <Button href={bookingHref} size="lg" variant="secondary">
              {cta.secondary.label}
            </Button>
          </div>
          <p className="mt-5 text-[0.88rem] leading-snug text-muted" data-reveal style={{ ["--reveal-delay" as string]: "280ms" }}>
            {t.note}
          </p>
        </div>

        <div className="lg:col-span-5 lg:pt-4" data-reveal style={{ ["--reveal-delay" as string]: "200ms" }}>
          <AnswerPanel locale={locale} />
        </div>
      </div>
    </section>
  );
}
