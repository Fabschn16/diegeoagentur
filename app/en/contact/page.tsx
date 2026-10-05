import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { LeadForm } from "@/components/ui/LeadForm";
import { Button } from "@/components/ui/Button";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { siteEn } from "@/lib/en/site";
import { l10n } from "@/lib/l10n";
import { TeamAvatars } from "@/components/ui/TeamAvatars";
import { pageMeta } from "@/lib/seo";

const path = "/en/contact";
const title = "Contact: Book an Intro Call or AI Visibility Check";
const description =
  "Contact Die GEO Agentur: book a no-obligation intro call about your visibility in ChatGPT, Gemini, Perplexity and Google AI Overviews. We work in German and English.";

export const metadata = pageMeta({ title, description, path });

const next = [
  { t: "We get back to you personally", d: "Usually within one working day, directly from the people responsible for your project." },
  { t: "30-minute intro call", d: "We discuss your starting point, goals and competitors. No pitch deck, no obligation." },
  { t: "A clear recommendation", d: "You get an honest assessment of whether and how GEO makes sense for your company." },
];

export default function ContactPageEn() {
  const { cta, team } = l10n("en");
  const crumbs = [{ name: "Contact", path }];
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path, title, description, type: "ContactPage" }), breadcrumbSchema(crumbs))} />
      <section className="border-b border-line">
        <div className="container-x pb-20 pt-8 sm:pt-12 lg:pb-28">
          <Breadcrumbs items={crumbs} locale="en" />
          <div className="mt-12 grid gap-14 lg:mt-20 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6 flex items-center gap-3 text-muted" data-reveal>
                <span className="rounded-[3px] bg-signal px-1.5 leading-[1.5] text-white">1</span>
                Contact
              </p>
              <h1 className="text-h1 font-medium text-balance" data-reveal>
                Contact: Let&rsquo;s <span className="em">talk.</span>
              </h1>
              <p className="mt-7 text-lead text-ink-2" data-reveal>
                No obligation · 30 minutes · Directly with our specialists · In German or English.
              </p>
              <div className="mt-8 flex items-center gap-4" data-reveal>
                <TeamAvatars size={52} locale="en" />
                <p className="text-[0.92rem] leading-snug">
                  <span className="font-medium">Fabian Schnabel & Jan Hugo</span>
                  <br />
                  <span className="text-muted">Click a photo to email us directly.</span>
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
                  <p className="eyebrow mb-2 text-muted">Phone</p>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-medium hover:underline">
                    {site.phone}
                  </a>
                  <p className="mt-1 text-[0.85rem] text-muted">{siteEn.hours}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2 text-muted">Email</p>
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
                  <p className="eyebrow mb-2 text-muted">Address</p>
                  <address className="not-italic">
                    {site.name} · {site.address.street} · {site.address.postalCode} {site.address.city} · Germany
                  </address>
                </div>
                <div className="sm:col-span-2">
                  <p className="eyebrow mb-2 text-muted">Languages</p>
                  <p>We work in German and English, with companies across Europe.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7" data-reveal>
              <div className="rounded-[24px] border border-line bg-paper-2/60 p-5 sm:p-8 lg:p-10">
                <p className="mb-7 border-b border-line pb-6 text-[1.15rem] font-medium">{cta.secondary.label}</p>
                <LeadForm variant="kontakt" submitLabel="Send enquiry" locale="en" />
              </div>
              {site.bookingUrl && (
                <div className="mt-6 flex items-center justify-between gap-4 rounded-2xl border border-line p-5">
                  <p className="text-[0.95rem]">Prefer to pick a time directly?</p>
                  <Button href={site.bookingUrl} variant="secondary" arrow>
                    Book a call
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
