import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { LeadForm } from "@/components/ui/LeadForm";
import { Button } from "@/components/ui/Button";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { cta, site, team } from "@/lib/site";
import { TeamAvatars } from "@/components/ui/TeamAvatars";
import { pageMeta } from "@/lib/seo";

const title = "Kontakt: Erstgespräch & KI-Sichtbarkeits-Check anfragen";
const description =
  "Kontakt zur GEO Agentur: Vereinbaren Sie ein unverbindliches Erstgespräch zu Ihrer Sichtbarkeit in ChatGPT, Gemini, Perplexity und Google AI Overviews.";

export const metadata = pageMeta({ title, description, path: "/kontakt" });

const next = [
  { t: "Wir melden uns persönlich", d: "In der Regel innerhalb eines Werktags – direkt von den Menschen, die Ihr Projekt verantworten." },
  { t: "30 Minuten Erstgespräch", d: "Wir klären Ausgangslage, Ziele und Wettbewerb. Kein Pitch-Deck, keine Verpflichtung." },
  { t: "Klare Empfehlung", d: "Sie erhalten eine ehrliche Einschätzung, ob und wie GEO für Ihr Unternehmen sinnvoll ist." },
];

export default function KontaktPage() {
  const crumbs = [{ name: "Kontakt", path: "/kontakt" }];
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path: "/kontakt", title, description, type: "ContactPage" }), breadcrumbSchema(crumbs))} />
      <section className="border-b border-line">
        <div className="container-x pb-20 pt-8 sm:pt-12 lg:pb-28">
          <Breadcrumbs items={crumbs} />
          <div className="mt-12 grid gap-14 lg:mt-20 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6 flex items-center gap-3 text-muted" data-reveal>
                <span className="rounded-[3px] bg-signal px-1.5 leading-[1.5] text-white">1</span>
                Kontakt
              </p>
              <h1 className="text-h1 font-medium text-balance" data-reveal>
                Kontakt: Lassen Sie uns <span className="em">sprechen.</span>
              </h1>
              <p className="mt-7 text-lead text-ink-2" data-reveal>
                Unverbindlich · 30 Minuten · Direkt mit unseren Spezialisten.
              </p>
              <div className="mt-8 flex items-center gap-4" data-reveal>
                <TeamAvatars size={52} />
                <p className="text-[0.92rem] leading-snug">
                  <span className="font-medium">Fabian Schnabel & Jan Hugo</span>
                  <br />
                  <span className="text-muted">Klicken Sie auf ein Bild, um direkt zu schreiben.</span>
                </p>
              </div>

              <ol className="mt-12 space-y-6" data-reveal>
                {next.map((n, i) => (
                  <li key={n.t} className="flex gap-5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line-2 font-mono text-[0.66rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-medium">{n.t}</p>
                      <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">{n.d}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-12 grid gap-4 border-t border-line pt-8 text-[0.95rem] sm:grid-cols-2" data-reveal>
                <div>
                  <p className="eyebrow mb-2 text-muted">Telefon</p>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-medium hover:underline">
                    {site.phoneDisplay}
                  </a>
                </div>
                <div>
                  <p className="eyebrow mb-2 text-muted">E-Mail</p>
                  <ul className="space-y-1">
                    {team.map((p) => (
                      <li key={p.id}>
                        <a href={`mailto:${p.email}`} className="break-all font-medium hover:underline">
                          {p.email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sm:col-span-2">
                  <p className="eyebrow mb-2 text-muted">Adresse</p>
                  <address className="not-italic">
                    {site.name} · {site.address.street} · {site.address.postalCode} {site.address.city}
                  </address>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7" data-reveal>
              <div className="rounded-[24px] border border-line bg-paper-2/60 p-5 sm:p-8 lg:p-10">
                <p className="mb-7 border-b border-line pb-6 text-[1.15rem] font-medium">{cta.secondary.label}</p>
                <LeadForm variant="kontakt" submitLabel="Anfrage senden" />
              </div>
              {site.bookingUrl && (
                <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-line p-5">
                  <p className="text-[0.95rem]">Lieber direkt einen Termin wählen?</p>
                  <Button href={site.bookingUrl} variant="secondary" arrow>
                    Termin buchen
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
