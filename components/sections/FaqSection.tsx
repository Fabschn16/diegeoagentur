import { FaqList } from "@/components/ui/FaqList";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema, graph } from "@/lib/schema";
import type { Faq } from "@/lib/faq";
import { TextLink } from "@/components/ui/Button";

export function FaqSection({
  items,
  index,
  title,
  lead,
  withSchema = true,
  path,
}: {
  items: Faq[];
  index?: string;
  title?: React.ReactNode;
  lead?: string;
  withSchema?: boolean;
  /** URL der Seite – verknüpft das FAQPage-Schema mit der WebPage */
  path?: string;
}) {
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
              {title ?? (
                <>
                  Häufige Fragen zu <span className="em">GEO.</span>
                </>
              )}
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-muted">
              {lead ?? "Kurze, klare Antworten – ohne Fachjargon. Ihre Frage ist nicht dabei? Sprechen Sie uns direkt an."}
            </p>
            <TextLink href="/kontakt" className="mt-6">
              Frage stellen
            </TextLink>
          </div>
        </div>
        <div className="lg:col-span-8">
          <FaqList items={items} />
        </div>
      </div>
    </section>
  );
}
