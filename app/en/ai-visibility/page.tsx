import { PageHero } from "@/components/ui/PageHero";
import { AtAGlance } from "@/components/ui/AtAGlance";
import { AnswerBox } from "@/components/ui/AnswerBox";
import { JsonLd } from "@/components/ui/JsonLd";
import { QASection, type QA } from "@/components/ui/QASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { Process } from "@/components/sections/Process";
import { AuditSection } from "@/components/sections/AuditSection";
import { abs, breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { l10n } from "@/lib/l10n";

const path = "/en/ai-visibility";
const title = "AI Visibility: Measure & Improve Your AI Visibility (Monitoring)";
const description =
  "AI Visibility Monitoring by Die GEO Agentur: we measure how often and in what context your brand is mentioned in ChatGPT, Gemini, Perplexity and Google AI Overviews, with share of voice, citations and competitor benchmarking.";

export const metadata = pageMeta({ title, description, path });

const answer =
  "AI Visibility describes how often and in what context a brand is mentioned or cited as a source in the answers of AI systems such as ChatGPT, Gemini, Perplexity and Google AI Overviews. It is measured against a fixed catalogue of business-relevant questions that are queried regularly and evaluated in comparison with competitors.";

const metrics = [
  { k: "Mention rate", d: "The share of relevant questions where your brand appears in the answer." },
  { k: "Share of voice", d: "How often your brand is mentioned relative to competitors." },
  { k: "Citations", d: "How often your website is linked as a source, and with which pages." },
  { k: "Context & tone", d: "Whether your brand is recommended, merely mentioned or portrayed critically." },
  { k: "Accuracy", d: "Whether services, locations and positioning are represented correctly." },
  { k: "Source landscape", d: "Which third-party pages shape the answers on your topics." },
  { k: "AI traffic", d: "Visits from ChatGPT, Perplexity, Gemini and Copilot in your web analytics." },
];

const sections: QA[] = [
  {
    q: "What is AI Visibility?",
    a: [
      "AI Visibility is the measure of how visible a brand is in AI-generated answers. It is the counterpart to organic visibility in traditional search, with one difference: it is not about positions in a list, but about mentions and citations in a written answer.",
    ],
  },
  {
    q: "How do you measure AI Visibility?",
    a: [
      "You measure AI Visibility by regularly and repeatedly running a fixed catalogue of questions that potential customers ask through the relevant AI systems, and analysing the answers in a structured way. What matters is repetition, competitor comparison and a transparent methodology.",
      "The methodology in detail is described in the article [Measuring AI visibility: prompts, mentions, sources](/en/insights/measure-ai-visibility).",
    ],
  },
  {
    q: "Why is a single test in ChatGPT not enough?",
    a: [
      "A single test is not enough because AI answers vary depending on wording, conversation history, location and timing. Only frequencies across many queries and trends over several weeks are meaningful.",
    ],
  },
  {
    q: "Which data sources feed into the measurement?",
    a: [
      "We combine structured querying of a prompt catalogue with data from your web analytics (visits from AI systems), Google Search Console and Bing Webmaster Tools, which offers a dedicated report on AI answers called “AI Performance”.",
    ],
  },
  {
    q: "How do you improve AI Visibility?",
    a: [
      "You improve AI Visibility by strengthening the foundations AI systems rely on: technical readability ([Technical GEO](/en/services#technik)), content with clear answers ([Content for AI Search](/en/services#content)), a clearly defined brand entity ([Entity Optimization](/en/services#entitaeten)) and a presence on relevant sources ([Digital Authority](/en/services#autoritaet)).",
      "Monitoring shows which of these measures are working and where adjustments are needed. Specific levers for ChatGPT are described in the article [Getting visible in ChatGPT](/en/insights/get-visible-in-chatgpt).",
    ],
  },
  {
    q: "How often should AI Visibility be measured?",
    a: [
      "For most companies, monthly measurement makes sense. An additional measurement is worthwhile after major changes to your website or content, or when providers release new model versions.",
    ],
  },
  {
    q: "What does AI Visibility reporting include?",
    a: [
      "The monthly report includes mention rate and share of voice per platform and topic, the trend over time, the most frequently cited sources, notable misrepresentations and concrete recommendations for the following month. We disclose the prompt catalogue.",
    ],
  },
];

export default function AiVisibilityPageEn() {
  const { pricing } = l10n("en");
  const crumbs = [
    { name: "Services", path: "/en/services" },
    { name: "AI Visibility", path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, title, description, mainEntity: `${abs(path)}#service`, about: ["AI Visibility", "AI visibility measurement", "GEO Monitoring"] }),
          serviceSchema({
            name: "AI Visibility Monitoring",
            alternateName: ["GEO Monitoring", "AI visibility measurement"],
            serviceType: "AI Visibility Monitoring",
            description: answer,
            path,
            minPrice: 949,
            monthly: true,
          }),
          faqSchema(sections, path),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        locale="en"
        crumbs={crumbs}
        eyebrow="AI Visibility Monitoring"
        title={
          <>
            AI Visibility: measure and <span className="em">improve your presence.</span>
          </>
        }
        lead="We measure how often and in what context your brand is mentioned in ChatGPT, Gemini, Perplexity and Google AI Overviews, and translate the results into concrete actions."
        aside={
          <AtAGlance
            locale="en"
            rows={[
              { k: "Service", v: "AI Visibility Monitoring (GEO Monitoring)" },
              { k: "Platforms", v: "ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot, Meta AI" },
              { k: "Basis", v: "Transparent prompt catalogue built from real customer questions" },
              { k: "Frequency", v: "Monthly, plus after major changes" },
              { k: "Outcome", v: "Report with trends, sources and recommendations" },
              { k: "Price", v: `GEO optimisation incl. monitoring ${pricing.optimization} (net)` },
            ]}
          />
        }
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <AnswerBox locale="en" label="In short">
              {answer}
            </AnswerBox>
          </div>
          <div className="lg:col-span-6 lg:col-start-7" data-reveal>
            <h2 className="text-h2 font-medium text-balance">
              Seven metrics for <span className="em">AI visibility.</span>
            </h2>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {metrics.map((m) => (
                <div key={m.k} className="grid gap-1 py-3.5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <dt className="font-medium">{m.k}</dt>
                  <dd className="text-[0.95rem] leading-relaxed text-muted">{m.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <QASection
        locale="en"
        id="fragen"
        eyebrow="AI Visibility explained"
        title={
          <>
            Questions about measuring <span className="em">AI visibility.</span>
          </>
        }
        items={sections}
        tone="tint"
      />
      <Process index="" locale="en" />
      <AuditSection locale="en" />
      <RelatedLinks
        locale="en"
        title="More on this topic"
        links={[
          { label: "Get a GEO Audit", href: "/en/geo-audit", note: "The starting point for any monitoring" },
          { label: "Our methodology", href: "/en/insights/methodology-prompt-catalogue", note: "How we measure with the prompt catalogue" },
          { label: "Measuring AI visibility", href: "/en/insights/measure-ai-visibility", note: "The fundamentals of measurement" },
          { label: "ChatGPT SEO", href: "/en/chatgpt-seo", note: "Visibility in ChatGPT" },
          { label: "Perplexity SEO", href: "/en/perplexity-seo", note: "Citations in Perplexity" },
          { label: "What is Generative Engine Optimization?", href: "/en/generative-engine-optimization", note: "Fundamentals and glossary" },
          { label: "What does a GEO agency do?", href: "/en/geo-agency", note: "Services and costs" },
        ]}
      />
    </>
  );
}
