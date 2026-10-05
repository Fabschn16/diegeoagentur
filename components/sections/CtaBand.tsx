import { Button } from "@/components/ui/Button";
import { TeamAvatars } from "@/components/ui/TeamAvatars";
import { l10n } from "@/lib/l10n";
import type { Locale } from "@/lib/i18n";

export function CtaBand({
  title,
  text,
  primary,
  locale = "de",
}: {
  title?: React.ReactNode;
  text?: string;
  primary?: { label: string; href: string };
  locale?: Locale;
}) {
  const { cta, bookingHref, ui } = l10n(locale);
  primary ??= cta.primary;
  const en = locale === "en";
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-14 text-paper sm:px-12 sm:py-20 lg:px-20" data-reveal>
          <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay" />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="mb-8 flex items-center gap-3">
                <TeamAvatars size={44} tone="dark" locale={locale} />
                <span className="text-[0.88rem] text-fog">{ui.personal}</span>
              </div>
              <h2 className="text-h2 font-medium text-balance">
                {title ??
                  (en ? (
                    <>
                      If AI doesn&apos;t mention you, <span className="em text-fog">you don&apos;t exist.</span>
                    </>
                  ) : (
                    <>
                      Wer bei KI nicht genannt wird, <span className="em text-fog">findet nicht statt.</span>
                    </>
                  ))}
              </h2>
              <p className="mt-6 max-w-xl text-lead text-fog">
                {text ??
                  (en
                    ? "Find out how ChatGPT, Gemini and Perplexity see your company today, and what you can do about it."
                    : "Finden Sie heraus, wie ChatGPT, Gemini und Perplexity Ihr Unternehmen heute sehen – und was Sie dafür tun können.")}
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
              <Button href={primary.href} variant="light" size="lg" arrow className="w-full lg:w-auto">
                {primary.label}
              </Button>
              <Button href={bookingHref} variant="outline-light" size="lg" className="w-full lg:w-auto">
                {cta.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
