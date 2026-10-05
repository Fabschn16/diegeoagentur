import type { QA } from "@/components/ui/QASection";

/** English version of content/pillar.ts – same export names and shapes. */
export const geoDefinition =
  "Generative Engine Optimization (GEO) is the practice of optimising brands, websites and content for AI-powered search and answer systems such as ChatGPT, Gemini, Perplexity and Google AI Overviews. The aim is for these systems to understand a company better and to consider it as a source or relevant recommendation for the queries that matter.";

export const glossary = [
  {
    term: "GEO",
    name: "Generative Engine Optimization",
    description:
      "Optimising brands, websites and content for generative AI search systems so that they understand a company and can consider it as a source or recommendation in their answers. The umbrella term used on this website.",
  },
  {
    term: "AI SEO",
    name: "AI search engine optimisation",
    description: "A common name for GEO, especially among SEO practitioners. In German it is called KI-SEO or KI-Suchmaschinenoptimierung.",
  },
  {
    term: "AI Search Optimization",
    name: "AI Search Optimization",
    description: "A collective term for optimising visibility in AI-powered search systems; largely synonymous with GEO.",
  },
  {
    term: "GSO",
    name: "Generative Search Optimization",
    description: "A less common variant of GEO that focuses on generative results within search engines.",
  },
  {
    term: "AEO",
    name: "Answer Engine Optimization",
    description:
      "Optimisation for systems that deliver direct answers: featured snippets, voice assistants, answer engines. Overlaps with GEO but concentrates more on the form of individual pieces of content.",
  },
  {
    term: "LLMO",
    name: "Large Language Model Optimization",
    description: "Emphasises how a brand is represented in the knowledge and answers of large language models. Also called LLM SEO.",
  },
  {
    term: "AIO",
    name: "AI Overview Optimization",
    description: "Optimisation for Google AI Overviews and AI Mode in Google Search. Sometimes also called GAIO.",
  },
  {
    term: "AI Visibility",
    name: "AI Visibility",
    description: "A measure of how often and in what context a brand is mentioned or cited as a source in the answers of AI systems.",
  },
  {
    term: "Entity",
    name: "Entity",
    description:
      "A uniquely identifiable thing such as a company, a person or a place. Search engines and language models organise information around entities and the relationships between them.",
  },
];

export const pillarSections: QA[] = [
  {
    id: "funktionsweise",
    q: "How does Generative Engine Optimization work?",
    a: [
      "Generative Engine Optimization works by addressing the two routes through which an AI system learns about a company: the trained knowledge of the language model, and the web search that many systems use to retrieve current pages at the moment a question is asked.",
      "For trained knowledge, what counts is how consistently and how often a company is described across the web over time. For web search, what counts is findability, technical readability, freshness and how precisely a page answers the specific question. GEO improves both and measures the impact against a fixed catalogue of questions.",
    ],
  },
  {
    id: "faktoren",
    q: "Which factors influence visibility in AI answers?",
    a: [
      "Visibility in AI answers depends mainly on five factors: technical accessibility, clarity of content, verifiability, a clearly defined brand entity and external authority.",
      "Technically, AI crawlers must be able to reach the website and read its content without JavaScript ([Technical GEO](/en/services#technik)). In terms of content, pages should answer specific questions directly ([Content for AI Search](/en/services#content)). Verifiability comes from figures, examples, sources and identifiable authors. The brand entity must be described the same way everywhere ([Entity Optimization](/en/services#entitaeten)). And external sources such as industry portals, comparisons, directories and the press must confirm what a company stands for ([Digital Authority](/en/services#autoritaet)).",
    ],
  },
  {
    id: "relevanz",
    q: "Why does GEO matter right now?",
    a: [
      "GEO matters because a growing share of research happens in AI systems, and these systems often name only a handful of providers. In February 2026, ChatGPT reached around 900 million weekly active users; according to Alphabet, Google AI Overviews already had more than two billion monthly users in July 2025.",
      "On Google, a company could still be found in position five. In an AI answer, there is often no position five. If you do not appear there, you are not being considered at that moment.",
    ],
  },
  {
    id: "herkunft",
    q: "Where does the term Generative Engine Optimization come from?",
    a: [
      "The term Generative Engine Optimization was coined in 2023 in a research paper by scientists from Princeton University, the Georgia Institute of Technology, the Allen Institute for AI and IIT Delhi.",
      "The authors examined which properties of content influence whether generative search systems include it in their answers. In their tests, source citations, quotations and concrete figures, among other things, increased the visibility of content by up to 40 per cent.",
    ],
  },
  {
    id: "abgrenzung",
    q: "What is part of GEO, and what is not?",
    a: [
      "GEO covers analysis, technical optimisation, content, entity building, external authority and measurement. It does not include attempts to manipulate language models through hidden text, fake reviews or artificial mass mentions.",
      "Nor can serious GEO work guarantee placements: AI answers are generated dynamically and constantly changed by the providers. What can reliably be improved are the preconditions, and what can reliably be measured is the progress.",
    ],
  },
  {
    id: "seo",
    q: "Does GEO replace traditional search engine optimisation?",
    a: [
      "No. GEO builds on SEO and complements it. Many AI systems draw on search indexes, and technical quality, good content and authority benefit both. What is new is mainly the focus on questions instead of keywords, the importance of the brand entity, and measuring mentions instead of rankings.",
    ],
  },
  {
    id: "messung",
    q: "How do you measure the success of GEO?",
    a: [
      "The success of GEO is measured against a fixed catalogue of business-relevant questions that are asked regularly in several AI systems. The key metrics are mention rate, share of voice compared with competitors, citations of your own website, and the context and accuracy of how you are portrayed.",
      "In addition, traffic from AI systems is analysed in web analytics. How we deliver this as an ongoing service is shown on the [AI Visibility Monitoring](/en/ai-visibility) page.",
    ],
  },
  {
    id: "zielgruppen",
    q: "Which companies benefit from GEO?",
    a: [
      "GEO is particularly worthwhile for companies whose customers research before making a decision: B2B providers, SaaS companies, consultancies, law firms, service providers with complex offerings, e-commerce brands and regional providers with a wide catchment area.",
      "What the right strategy looks like depends on the business model; we work it out with you in [GEO Consulting](/en/geo-consulting).",
    ],
  },
];
