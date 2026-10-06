import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageHero } from "@/components/ui/PageHero";
import { AtAGlance } from "@/components/ui/AtAGlance";
import { AnswerBox } from "@/components/ui/AnswerBox";
import { JsonLd } from "@/components/ui/JsonLd";
import { FaqSection } from "@/components/sections/FaqSection";
import { LeadForm } from "@/components/ui/LeadForm";
import type { Faq } from "@/lib/faq";
import { breadcrumbSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { l10n } from "@/lib/l10n";

const { pricing } = l10n("en");

const path = "/en/geo-consulting";
const title = "GEO Consulting: Strategy, Workshops & Sparring for AI Visibility";
const description =
  "GEO consulting for marketing and SEO teams: strategy, workshops, roadmaps and ongoing sparring for visibility in ChatGPT, Gemini, Perplexity and Google AI Overviews.";

export const metadata = pageMeta({ title, description, path });

const formats = [
  {
    t: "Strategy workshop",
    d: "A focused workshop with management, marketing and SEO: where do we stand, what is realistic, what has priority?",
    for: "Management · CMO · Head of Marketing",
  },
  {
    t: "GEO roadmap",
    d: "Based on an analysis, we create a prioritised action plan that your team can implement itself, with clear responsibilities.",
    for: "Marketing and SEO teams",
  },
  {
    t: "Team enablement",
    d: "We teach your team how AI search works, how to write content that gets cited and how to measure visibility.",
    for: "Content, SEO, editorial",
  },
  {
    t: "Ongoing sparring",
    d: "Regular sessions for questions, reviews of content and technical changes, and context on new developments.",
    for: "In-house teams that implement themselves",
  },
];

const faq: Faq[] = [
  {
    q: "When does GEO consulting make more sense than having the agency implement?",
    a: [
      "When you have your own marketing, SEO or content team that can take on implementation. We then provide strategy, priorities and know-how, and your team implements. Many companies combine both.",
    ],
  },
  {
    q: "Do you also work with our existing SEO agency?",
    a: [
      "Yes. GEO builds on SEO. We are happy to coordinate with your existing agency so that measures complement each other rather than overlap.",
    ],
  },
  {
    q: "How does a consulting engagement start?",
    a: [
      "With a no-obligation initial call. In it, we clarify your starting position, goals and team set-up and suggest a suitable format.",
    ],
  },
];

export default function GeoConsultingPage() {
  const crumbs = [
    { name: "Services", path: "/en/services" },
    { name: "GEO Consulting", path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, title, description }),
          serviceSchema({ name: "GEO Consulting", description, path, serviceType: "Consulting for Generative Engine Optimization", minPrice: 949 }),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        locale="en"
        crumbs={crumbs}
        eyebrow="GEO Consulting"
        title={
          <>
            GEO consulting: strategy for the <span className="em">new search.</span>
          </>
        }
        lead="For companies with their own marketing or SEO team: we provide direction, priorities and the know-how your team needs to implement GEO effectively itself."
        primary={{ label: "Request consulting", href: "#anfrage" }}
        aside={
          <AtAGlance
            locale="en"
            rows={[
              { k: "Who it's for", v: "Management, CMO, Head of Marketing, SEO and content teams" },
              { k: "Formats", v: "Workshop, roadmap, team enablement, ongoing sparring" },
              { k: "Price", v: `Strategy workshop ${pricing.workshop} (net)` },
              { k: "Implementation", v: "By your team – with our support if you wish" },
            ]}
          />
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <AnswerBox locale="en">
              GEO consulting helps in-house teams to build their company&apos;s visibility in AI search systems strategically. It covers analysis,
              prioritisation, knowledge transfer and ongoing support, while implementation stays within the company.
            </AnswerBox>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {formats.map((f, i) => (
              <li key={f.t} className="flex flex-col bg-paper p-7" data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                <h2 className="text-[1.3rem] font-medium tracking-[-0.015em]">{f.t}</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{f.d}</p>
                <p className="mt-auto pt-6 font-mono text-[0.66rem] uppercase tracking-[0.1em] text-ink-2">{f.for}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="anfrage" aria-labelledby="anfrage-t" className="scroll-mt-20 border-t border-line bg-paper-2/50 py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4" data-reveal>
            <p className="eyebrow mb-6 text-muted">Request consulting</p>
            <h2 id="anfrage-t" className="text-h2 font-medium">
              Tell us about <span className="em">your team.</span>
            </h2>
            <p className="mt-6 text-[1rem] leading-relaxed text-muted">
              We will get back to you personally and suggest a format that suits your starting position.
            </p>
          </div>
          <div className="lg:col-span-8" data-reveal>
            <LeadForm locale="en" variant="beratung" submitLabel="Request consulting" tone="card" />
          </div>
        </div>
      </section>

      <FaqSection
        locale="en"
        items={faq}
        path={path}
        title={
          <>
            Questions about <span className="em">GEO consulting.</span>
          </>
        }
      />
      <RelatedLinks
        locale="en"
        title="Further reading"
        links={[
          { label: "GEO agency: implementation, not just consulting", href: "/en/geo-agency", note: "If you want us to handle implementation" },
          { label: "Developing a GEO strategy", href: "/en/insights/geo-strategy", note: "Guide" },
          { label: "What is Generative Engine Optimization?", href: "/en/generative-engine-optimization", note: "The basics for your team" },
        ]}
      />
    </>
  );
}
