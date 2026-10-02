import { RichText } from "./RichText";

export type QA = { q: string; a: string[]; id?: string };

/**
 * Frage → Antwort-Abschnitte als offene H3-Blöcke (nicht eingeklappt):
 * gut scannbar für Menschen und eindeutig extrahierbar für Suchmaschinen und Sprachmodelle.
 */
export function QASection({
  id,
  eyebrow,
  title,
  lead,
  items,
  tone = "paper",
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  items: QA[];
  tone?: "paper" | "tint";
}) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className={`scroll-mt-24 py-20 lg:py-28 ${tone === "tint" ? "border-t border-line bg-paper-2/50" : "border-t border-line"}`}>
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32" data-reveal>
            <p className="eyebrow mb-6 text-muted">{eyebrow}</p>
            <h2 id={`${id}-t`} className="text-h2 font-medium text-balance">
              {title}
            </h2>
            {lead && <p className="mt-6 text-[1rem] leading-relaxed text-muted">{lead}</p>}
          </div>
        </div>
        <div className="space-y-12 lg:col-span-7 lg:col-start-6">
          {items.map((it) => (
            <div key={it.q} id={it.id} className="scroll-mt-28" data-reveal>
              <h3 className="text-[1.35rem] font-medium leading-snug tracking-[-0.015em]">{it.q}</h3>
              {it.a.map((p, i) => (
                <p key={i} className={`mt-4 text-[1.03rem] leading-[1.75] ${i === 0 ? "text-ink" : "text-ink-2"}`}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
