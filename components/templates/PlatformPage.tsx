import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { AtAGlance } from "@/components/ui/AtAGlance";
import { AnswerBox } from "@/components/ui/AnswerBox";
import { JsonLd } from "@/components/ui/JsonLd";
import { AuditSection } from "@/components/sections/AuditSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Process } from "@/components/sections/Process";
import { ArrowRight } from "@/components/ui/Icons";
import { QASection } from "@/components/ui/QASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { abs, breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { l10n } from "@/lib/l10n";
import type { Locale } from "@/lib/i18n";
import type { PlatformPageData } from "@/lib/platforms";

const copy = {
  de: {
    services: { name: "Leistungen", path: "/leistungen" },
    source: "Quelle:",
    leversEyebrow: "Worauf wir optimieren",
    leversTitle: "Sechs Hebel für mehr Sichtbarkeit in",
    explained: "erklärt",
    inDetail: "im Detail.",
    qaLead: "Jeder Abschnitt beginnt mit der kurzen Antwort, danach folgen die Details.",
    faqTitle: "Fragen zu",
    related: "Weiterführend",
    others: "Weitere Plattformen",
  },
  en: {
    services: { name: "Services", path: "/en/services" },
    source: "Source:",
    leversEyebrow: "What we optimise",
    leversTitle: "Six levers for more visibility in",
    explained: "explained",
    inDetail: "in detail.",
    qaLead: "Each section starts with the short answer, followed by the details.",
    faqTitle: "Questions about",
    related: "Further reading",
    others: "Other platforms",
  },
} as const;

export function PlatformPage({ data, locale = "de" }: { data: PlatformPageData; locale?: Locale }) {
  const t = copy[locale];
  const path = locale === "en" ? `/en/${data.slug}` : `/${data.slug}`;
  const crumbs = [
    t.services,
    { name: data.name, path },
  ];
  const others = l10n(locale).platformServices.filter((p) => p.href !== path);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, title: data.metaTitle, description: data.metaDescription, mainEntity: `${abs(path)}#service`, about: [data.name, "Generative Engine Optimization"] }),
          serviceSchema({ name: data.name, description: data.answer, path, serviceType: "Generative Engine Optimization" }),
          ...(data.qa ? [faqSchema([...data.qa, ...data.faq], path)] : []),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow={data.eyebrow}
        title={
          <>
            {data.h1[0]} <span className="em">{data.h1[1]}</span>
          </>
        }
        lead={data.lead}
        aside={<AtAGlance rows={data.glance} locale={locale} />}
        locale={locale}
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <AnswerBox locale={locale}>{data.answer}</AnswerBox>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            <h2 className="text-h2 font-medium text-balance">
              {data.howTitle[0]} <span className="em">{data.howTitle[1]}</span>
            </h2>
            {data.how.map((p, i) => (
              <p key={i} className="mt-6 text-[1.05rem] leading-[1.75] text-ink-2">
                {p}
              </p>
            ))}
            {data.sources && (
              <ul className="mt-8 space-y-1 border-t border-line pt-5 text-[0.8rem] text-muted">
                {data.sources.map((s) => (
                  <li key={s.href}>
                    {t.source}{" "}
                    <a href={s.href} target="_blank" rel="noopener nofollow" className="underline decoration-line-2 underline-offset-2 hover:text-ink">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="hebel" className="border-t border-line bg-paper-2/50 py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow mb-6 text-muted">{t.leversEyebrow}</p>
            <h2 id="hebel" className="text-h2 font-medium text-balance">
              {`${t.leversTitle} `}<span className="em">{data.name.replace(/ SEO$/, "")}.</span>
            </h2>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {data.levers.map((l, i) => (
              <li key={l.t} className="bg-paper p-7 sm:p-8" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 60}ms` }}>
                <span className="font-mono text-[0.68rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-[1.2rem] font-medium tracking-[-0.015em]">{l.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{l.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {data.qa && (
        <QASection
          id="wissen"
          eyebrow={`${data.name} ${t.explained}`}
          title={
            <>
              {data.qaTitle?.[0] ?? data.name} <span className="em">{data.qaTitle?.[1] ?? t.inDetail}</span>
            </>
          }
          lead={t.qaLead}
          items={data.qa}
          locale={locale}
        />
      )}

      <Process index="" locale={locale} />
      <AuditSection locale={locale} />
      <FaqSection
        items={data.faq}
        withSchema={!data.qa}
        path={path}
        title={
          <>
            {`${t.faqTitle} `}<span className="em">{data.name}.</span>
          </>
        }
        locale={locale}
      />

      {data.related && <RelatedLinks title={t.related} links={data.related} locale={locale} />}

      <section className="border-t border-line py-16">
        <div className="container-x">
          <p className="eyebrow mb-6 text-muted">{t.others}</p>
          <ul className="grid gap-3 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.href}>
                <Link
                  href={o.href}
                  className="group flex items-center justify-between rounded-2xl border border-line px-5 py-4 transition-colors hover:border-ink"
                >
                  <span className="font-medium">{o.title}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
