import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema, graph } from "@/lib/schema";
import type { Faq } from "@/lib/faq";
import { TextLink } from "@/components/ui/Button";
import type { Locale } from "@/lib/i18n";

const copy = {
  de: {
    title: (
      <>
        Häufige Fragen zu <span className="em">GEO.</span>
      </>
    ),
    lead: "Kurze, klare Antworten – ohne Fachjargon. Ihre Frage ist nicht dabei? Sprechen Sie uns direkt an.",
    ask: "Frage stellen",
    contactHref: "/kontakt",
  },
  en: {
    title: (
      <>
        Frequently asked questions about <span className="em">GEO.</span>
      </>
    ),
    lead: "Short, clear answers without the jargon. Your question isn't here? Get in touch with us directly.",
    ask: "Ask a question",
    contactHref: "/en/contact",
  },
};

export function FaqSection({
  items,
  index,
  title,
  lead,
  withSchema = true,
  path,
  locale = "de",
}: {
  items: Faq[];
  index?: string;
  title?: React.ReactNode;
  lead?: string;
  withSchema?: boolean;
  /** URL der Seite – verknüpft das FAQPage-Schema mit der WebPage */
  path?: string;
  locale?: Locale;
}) {
  const t = copy[locale];
  return (
    <section aria-labelledby="faq" className="border-t border-line py-24 lg:py-36">
      {withSchema && <JsonLd data={graph(faqSchema(items, path))} />}
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32" data-reveal>
            <p className="eyebrow mb-6 flex items-center gap-3 text-muted">
              {index && <span className="text-ink">{index}</span>}
              {index && <span className="h-px w-8 bg-line-2" />}
              FAQ
            </p>
            <h2 id="faq" className="text-h2 font-medium text-balance">
              {title ?? t.title}
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-muted">
              {lead ?? t.lead}
            </p>
            <TextLink href={t.contactHref} className="mt-6">
              {t.ask}
            </TextLink>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqList items={items} locale={locale} />
        </div>
      </div>
    </section>
  );
}
