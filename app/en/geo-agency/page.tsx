import { PageHero } from "@/components/ui/PageHero";
import { AtAGlance } from "@/components/ui/AtAGlance";
import { AnswerBox } from "@/components/ui/AnswerBox";
import { JsonLd } from "@/components/ui/JsonLd";
import { QASection, type QA } from "@/components/ui/QASection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { Services } from "@/components/sections/Services";
import { AuditSection } from "@/components/sections/AuditSection";
import { breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema, abs } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { l10n } from "@/lib/l10n";

const { pricing } = l10n("en");

const path = "/en/geo-agency";
const title = "GEO Agency: Services, Process, Costs & Selection Criteria";
const description =
  "What does a GEO agency do, what does it cost and how do you recognise a good one? Die GEO Agentur from Passau explains the services, collaboration and success measurement in Generative Engine Optimization, for companies across Europe.";

export const metadata = pageMeta({ title, description, path });

const answer =
  "A GEO agency helps companies to be understood by AI-powered search and answer systems such as ChatGPT, Gemini, Perplexity and Google AI Overviews, and to be included as a source or recommendation. It analyses current AI visibility, optimises the website, content, brand entity and external signals, and measures progress. Die GEO Agentur is an agency specialising in exactly this, based in Passau, Germany, and working with companies across Europe.";

const sections: QA[] = [
  {
    q: "What is a GEO agency?",
    a: [
      "A GEO agency is a service provider for Generative Engine Optimization, in other words for the visibility of companies in AI answers. Unlike a traditional SEO agency, the focus is not on the position in a list of results, but on whether and how an AI names a company, describes it and uses it as a source.",
      "Our guide [What is Generative Engine Optimization?](/en/generative-engine-optimization) explains exactly what GEO is.",
    ],
  },
  {
    q: "What exactly does a GEO agency do?",
    a: [
      "A GEO agency typically covers six areas: [GEO Audit](/en/geo-audit), [AI Visibility Monitoring](/en/ai-visibility), [Content for AI Search](/en/services#content), [Entity Optimization](/en/services#entitaeten), [Technical GEO](/en/services#technik) and [Digital Authority](/en/services#autoritaet).",
      "On top of that comes strategic [GEO consulting](/en/geo-consulting): which questions do your customers ask AI, which topics have priority, and how do SEO, content and brand communication fit together? So a GEO agency does not just optimise technology, it also advises on how a brand becomes visible in the new search landscape.",
    ],
  },
  {
    q: "Why do companies need GEO?",
    a: [
      "Companies need GEO because customers increasingly ask AI systems for recommendations, and these systems often name only a handful of providers. If you are missing from these answers, you are not considered during the research phase, even if your website ranks well on Google.",
      "Accuracy matters too: language models can reproduce outdated or incorrect information about a company. GEO ensures that correct information is easy to find and unambiguous.",
    ],
  },
  {
    q: "How does working with a GEO agency work?",
    a: [
      "The collaboration starts with an analysis, followed by strategy, implementation and ongoing monitoring. With us, it looks like this: a free visibility check to get started, a full [GEO Audit](/en/geo-audit) with a prioritised roadmap, implementation by us or your team, and monthly measurement with continuous adjustment.",
      "You always deal directly with the founders, Fabian Schnabel and Jan Hugo, with no rotating account managers.",
    ],
  },
  {
    q: "How does a GEO agency measure success?",
    a: [
      "A GEO agency measures success using a fixed catalogue of business-relevant questions that is regularly queried across several AI systems. The key metrics are mention rate, share of voice against competitors, citations of your own website and the accuracy of how you are presented.",
      "Traffic from AI systems is analysed as well. Details under [Measuring AI visibility](/en/ai-visibility).",
    ],
  },
  {
    q: "Which AI search engines are covered?",
    a: [
      "We cover [ChatGPT](/en/chatgpt-seo), [Google Gemini](/en/gemini-seo), [Google AI Overviews](/en/google-ai-overviews) and AI Mode, [Perplexity](/en/perplexity-seo), as well as [Microsoft Copilot and Claude](/en/insights/copilot-and-claude) and [Meta AI](/en/insights/meta-ai).",
      "Which systems take priority depends on where your target audience does its research; we clarify this in the audit.",
    ],
  },
  {
    q: "Which companies is a GEO agency suitable for?",
    a: [
      "A GEO agency is particularly worthwhile for companies whose customers research before they buy: B2B providers, SaaS, consultancies, law firms, service providers with services that need explaining, e-commerce brands and regional providers with a large catchment area.",
      "Companies with their own marketing or SEO team often combine an audit with [GEO consulting](/en/geo-consulting) and handle implementation themselves.",
    ],
  },
  {
    id: "kosten",
    q: "How much does a GEO agency cost?",
    a: [
      "The cost of a GEO agency depends mainly on five factors: the number of topics and markets, the size of the prompt catalogue, the amount of content to be created or revised, whether the agency or your team handles implementation, and how often monitoring takes place.",
      "The usual approach is a one-off audit to start with, followed by ongoing support with monthly monitoring; consulting and workshops are often billed separately.",
      `Our entry prices are as follows: the AI visibility check is free. The full [GEO Audit](/en/geo-audit) costs ${pricing.audit}, ongoing GEO optimisation with [AI Visibility Monitoring](/en/ai-visibility) ${pricing.optimization} and a strategy workshop as part of [GEO consulting](/en/geo-consulting) ${pricing.workshop}. ${pricing.note} The exact price depends on the scope and is set out bindingly in the quote before we start.`,
    ],
  },
  {
    id: "auswahl",
    q: "How do you recognise a good GEO agency?",
    a: [
      "You can recognise a good GEO agency by its transparent methodology, solid search experience and realistic promises. Specifically: it discloses which prompt catalogue it uses and over what period it measures; it understands traditional SEO and technology; it only shows results backed by a traceable methodology; and it does not guarantee placements in AI answers. We disclose how we measure ourselves in our [methodology](/en/insights/methodology-prompt-catalogue).",
      "Be wary of promises such as “guaranteed #1 on ChatGPT”, of rankings without a methodology and of tactics that rely on manipulation rather than genuine content and mentions.",
    ],
  },
  {
    q: "GEO agency or SEO agency: which do I need?",
    a: [
      "Most companies need both, because GEO builds on SEO. A good GEO agency therefore always checks the SEO fundamentals as well and, if you wish, works together with your existing SEO agency.",
      "The differences in detail: [SEO vs. GEO](/en/insights/geo-vs-seo).",
    ],
  },
  {
    q: "What sets Die GEO Agentur apart?",
    a: [
      `Die GEO Agentur is a service of ${site.legalEntity} from Passau, which through its performance marketing agency Daily Rocket has worked for more than 100 clients since ${site.foundingDate} and manages over €20 million in advertising budget every year. This experience with search data, tracking and measurement feeds into our GEO work.`,
      "We specialise in search, data and AI visibility, work transparently and without placement guarantees, and support companies across Europe. More [about us](/en/about).",
    ],
  },
];

export default function GeoAgencyPage() {
  const crumbs = [{ name: "GEO Agency", path }];
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, title, description, mainEntity: `${abs(path)}#service`, about: ["GEO agency", "Generative Engine Optimization"] }),
          serviceSchema({
            name: "GEO Agency – Generative Engine Optimization",
            alternateName: ["AI search engine optimisation", "AI Search Optimization", "GEO consulting"],
            serviceType: "Generative Engine Optimization",
            description: answer,
            path,
          }),
          faqSchema(sections, path),
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        locale="en"
        crumbs={crumbs}
        eyebrow="GEO Agency"
        title={
          <>
            GEO agency: services, process <span className="em">and costs.</span>
          </>
        }
        lead="What a GEO agency does, how working together works, what it costs and how to recognise a good one, explained by an agency that specialises in Generative Engine Optimization."
        aside={
          <AtAGlance
            locale="en"
            title="Die GEO Agentur at a glance"
            rows={[
              { k: "Specialisation", v: "Generative Engine Optimization / AI search engine optimisation" },
              { k: "Based in", v: `${site.address.city}, Germany – working across Europe` },
              { k: "Founders", v: "Fabian Schnabel, Jan Hugo" },
              { k: "Company", v: `A service of ${site.legalEntity} (Daily Rocket)` },
              { k: "Platforms", v: "ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot, Claude, Meta AI" },
              { k: "Getting started", v: "Free AI visibility check" },
              { k: "Prices", v: `GEO Audit ${pricing.audit} · Optimisation ${pricing.optimization} · Workshop ${pricing.workshop} (net)` },
            ]}
          />
        }
      />

      <section className="py-20 lg:py-24">
        <div className="container-x max-w-4xl">
          <AnswerBox locale="en" label="In brief">
            {answer}
          </AnswerBox>
        </div>
      </section>

      <QASection
        id="fragen"
        eyebrow="GEO agency explained"
        title={
          <>
            What you should know about <span className="em">a GEO agency.</span>
          </>
        }
        lead="From services and costs to selection criteria, each with a short answer up front."
        items={sections}
        tone="tint"
      />

      <Services index="" locale="en" />
      <AuditSection locale="en" />
      <RelatedLinks
        locale="en"
        title="More on this topic"
        links={[
          { label: "What is Generative Engine Optimization?", href: "/en/generative-engine-optimization", note: "Definition, factors and glossary" },
          { label: "Get a GEO Audit", href: "/en/geo-audit", note: "Where you stand in AI answers" },
          { label: "GEO consulting for in-house teams", href: "/en/geo-consulting", note: "Strategy, workshops, sparring" },
          { label: "Measure AI visibility", href: "/en/ai-visibility", note: "Metrics and monitoring" },
          { label: "Developing a GEO strategy", href: "/en/insights/geo-strategy", note: "A six-step guide" },
          { label: "About Die GEO Agentur", href: "/en/about", note: "Team and way of working" },
        ]}
      />
    </>
  );
}
