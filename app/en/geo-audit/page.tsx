import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { QASection, type QA } from "@/components/ui/QASection";
import { PageHero } from "@/components/ui/PageHero";
import { AtAGlance } from "@/components/ui/AtAGlance";
import { JsonLd } from "@/components/ui/JsonLd";
import { AuditSection } from "@/components/sections/AuditSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Check } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import type { Faq } from "@/lib/faq";
import { mainFaq } from "@/lib/en/faq";
import { breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { l10n } from "@/lib/l10n";

const { bookingHref, pricing } = l10n("en");

const path = "/en/geo-audit";
const title = "GEO Audit: Check Your Visibility in ChatGPT, Gemini & Co.";
const description =
  "GEO Audit by Die GEO Agentur: we analyse whether and how ChatGPT, Gemini, Perplexity and Google AI Overviews mention your brand, which competitors appear and which sources shape the answers. Free to get started.";

export const metadata = pageMeta({ title, description, path });

const formats = [
  {
    name: "Visibility Check",
    tag: "Free",
    text: "A quick assessment of where you stand: a sample of typical customer questions across the most important AI systems, discussed with you personally.",
    items: [
      "Selected questions from your market",
      "ChatGPT, Gemini, Perplexity, AI Overviews",
      "Mentions of your brand and your competitors",
      "First indications of sources and gaps",
      "30-minute results call",
    ],
    cta: { label: "Request a check", href: "#check" },
    dark: false,
  },
  {
    name: "GEO Audit",
    tag: "Full analysis",
    text: "The solid foundation for your GEO strategy: systematic, structured by topic and buying stage, and with a concrete roadmap.",
    items: [
      "Prompt catalogue by topic and buying stage",
      "Competitor comparison and share of voice",
      "Source analysis: which pages shape the answers?",
      "Technical review: crawlers, HTML, structured data",
      "Entity check: how is your brand described?",
      "Prioritised roadmap and results presentation",
    ],
    cta: { label: "Discuss an audit", href: bookingHref },
    dark: true,
  },
];

const steps = [
  { t: "Request", d: "You give us your company, website and, if you like, competitors and topics." },
  { t: "Analysis", d: "We ask the AI systems your customers' questions and evaluate mentions, context and sources." },
  { t: "Call", d: "We discuss the results with you personally and show where the biggest levers are." },
  { t: "Decision", d: "You decide in your own time whether and how you want to continue. No obligation." },
];

const auditFaq: Faq[] = [
  {
    q: "What do you need from us for the visibility check?",
    a: [
      "Just your company name, your website and a way to contact you. Helpful but optional: two or three competitors and the topics you want to be found for.",
    ],
  },
  {
    q: "What is the difference between the visibility check and the GEO Audit?",
    a: [
      "The free visibility check is a sample that shows where you stand. The GEO Audit is a systematic analysis with an extensive prompt catalogue, source and technical review, and a prioritised roadmap as the basis for implementation.",
    ],
  },
  ...mainFaq.filter((f) =>
    ["How do you measure AI visibility?", "How much does a GEO agency cost?", "Can anyone guarantee that I'll be mentioned by ChatGPT?"].includes(f.q),
  ),
];

const auditQa: QA[] = [
  {
    id: "was-ist-ein-geo-audit",
    q: "What is a GEO Audit?",
    a: [
      "A GEO Audit is a systematic analysis of how AI systems such as ChatGPT, Gemini, Perplexity and Google AI Overviews present a company today, and why. It combines querying a fixed catalogue of real customer questions with a review of technology, content, brand entity and external sources, and ends with a prioritised roadmap.",
    ],
  },
  {
    id: "ai-visibility-audit",
    q: "What is an AI Visibility Audit?",
    a: [
      "AI Visibility Audit is another name for the same approach, with the emphasis on measurement: how often is a brand mentioned, how often is it cited as a source, in what context and compared with which competitors? This measurement is part of our GEO Audit and forms the baseline for ongoing [AI Visibility Monitoring](/en/ai-visibility).",
    ],
  },
  {
    id: "chatgpt-audit",
    q: "Can I have just ChatGPT checked?",
    a: [
      "Yes. A ChatGPT audit focuses on how you are presented in ChatGPT and ChatGPT search. Because customers usually use several systems and the causes are often the same, we generally recommend looking at all relevant platforms. You will find background on ChatGPT on our [ChatGPT SEO](/en/chatgpt-seo) page.",
    ],
  },
  {
    id: "ergebnis",
    q: "What do I receive as the result of the GEO Audit?",
    a: [
      `The full GEO Audit costs ${pricing.audit} (${pricing.note.replace("All prices ", "").replace(/\.$/, "")}); the free visibility check remains a no-obligation way to get started. You receive an evaluation of your mentions and citations per platform, a competitor comparison, the most important sources behind the answers, a list of technical and content weaknesses, and a prioritised roadmap of actions. We disclose the prompt catalogue we use.`,
    ],
  },
  {
    id: "ablauf",
    q: "How does a GEO Audit work?",
    a: [
      "After a short initial call, we agree on topics, competitors and the question catalogue together, run the queries and reviews, and present the results to you in a meeting.",
    ],
  },
];

export default function GeoAuditPage() {
  const crumbs = [
    { name: "Services", path: "/en/services" },
    { name: "GEO Audit", path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, title, description }),
          serviceSchema({ name: "GEO Audit", alternateName: ["AI Visibility Audit", "AI visibility analysis"], description, path, serviceType: "GEO Audit / AI visibility analysis", minPrice: 1249 }),
          faqSchema([...auditQa, ...auditFaq], path),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        locale="en"
        crumbs={crumbs}
        eyebrow="GEO Audit"
        title={
          <>
            GEO Audit: What does AI say about <span className="em">your company?</span>
          </>
        }
        lead="The GEO Audit shows whether and how ChatGPT, Gemini, Perplexity and Google AI Overviews mention your brand today, who is named instead and which sources the answers are based on."
        primary={{ label: "Start your free check", href: "#check" }}
        aside={
          <AtAGlance
            locale="en"
            rows={[
              { k: "Goal", v: "Where you currently stand in AI answers" },
              { k: "Platforms", v: "ChatGPT, Gemini, Perplexity, Google AI Overviews – others such as Copilot or Meta AI as needed" },
              { k: "Getting started", v: "Free visibility check with a personal results call" },
              { k: "In depth", v: `Full GEO Audit with a prioritised roadmap – ${pricing.audit} (net)` },
            ]}
          />
        }
      />

      <section aria-labelledby="formate" className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow mb-6 text-muted">Two formats</p>
            <h2 id="formate" className="text-h2 font-medium text-balance">
              Clarity first, <span className="em">then strategy.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {formats.map((f, i) => (
              <article
                key={f.name}
                className={`flex flex-col rounded-[24px] p-7 sm:p-10 ${f.dark ? "bg-ink text-paper" : "border border-line bg-card"}`}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[1.6rem] font-medium tracking-[-0.02em]">{f.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.1em] ${
                      f.dark ? "bg-paper/10 text-paper" : "bg-ink text-paper"
                    }`}
                  >
                    {f.tag}
                  </span>
                </div>
                <p className={`mt-4 text-[1rem] leading-relaxed ${f.dark ? "text-fog" : "text-muted"}`}>{f.text}</p>
                <ul className="mt-8 space-y-3">
                  {f.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[0.98rem]">
                      <span
                        className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full ${
                          f.dark ? "bg-paper text-ink" : "bg-ink text-paper"
                        }`}
                      >
                        <Check className="size-3" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <Button href={f.cta.href} variant={f.dark ? "light" : "primary"} arrow>
                    {f.cta.label}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="ablauf" className="border-t border-line bg-paper-2/50 py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow mb-6 text-muted">Process</p>
            <h2 id="ablauf" className="text-h2 font-medium">
              How the <span className="em">check works.</span>
            </h2>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="bg-paper p-7" data-reveal style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}>
                <span className="flex size-8 items-center justify-center rounded-full border border-line-2 font-mono text-[0.66rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-[1.25rem] font-medium tracking-[-0.015em]">{s.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <AuditSection locale="en" />
      <QASection
        id="wissen"
        eyebrow="GEO Audit explained"
        title={
          <>
            GEO Audit, AI Visibility Audit, <span className="em">ChatGPT audit.</span>
          </>
        }
        items={auditQa}
        tone="tint"
      />
      <FaqSection
        locale="en"
        items={auditFaq}
        withSchema={false}
        title={
          <>
            Questions about the <span className="em">GEO Audit.</span>
          </>
        }
      />
      <RelatedLinks
        locale="en"
        title="Further reading"
        links={[
          { label: "AI Visibility Monitoring", href: "/en/ai-visibility", note: "After the audit: ongoing measurement" },
          { label: "Facts about Die GEO Agentur", href: "/en/facts", note: "Key data, team and how we measure" },
          { label: "What does a GEO agency do?", href: "/en/geo-agency", note: "Services and costs" },
        ]}
      />
    </>
  );
}
