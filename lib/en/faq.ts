import type { Faq } from "../faq";
import { pricingEn } from "./site";

/**
 * Englische Fassung der Haupt-FAQ aus lib/faq.ts (gleiche Reihenfolge, gleiche Struktur).
 * Links zeigen auf englische Seiten; deutsche Ratgeber-Artikel werden nicht verlinkt.
 */
export const mainFaq: Faq[] = [
  {
    q: "What is GEO?",
    a: [
      "GEO stands for Generative Engine Optimization: optimising brands, websites and content for AI-powered search and answer systems such as ChatGPT, Gemini, Perplexity and Google AI Overviews. The goal is for these systems to understand a company better and to consider it as a source or relevant recommendation for the right questions.",
      "GEO covers your own website, content, structured data, the description of the brand as an entity, and external mentions that demonstrate a company's expertise. GEO is often also referred to as AI search engine optimisation.",
    ],
    link: { label: "Generative Engine Optimization explained in detail", href: "/en/generative-engine-optimization" },
  },
  {
    q: "What does a GEO agency do?",
    a: [
      "A GEO agency analyses how AI systems currently present a company and makes targeted improvements to the foundations these systems rely on: the technical readability of the website, citable content, a clearly defined brand entity and external sources. It then regularly measures how visibility in AI answers develops.",
      "Strategic consulting is part of the work too: which questions do customers ask AI, which topics have priority, and how do SEO and GEO fit together in your company?",
    ],
    link: { label: "What a GEO agency does, and what it costs", href: "/en/geo-agency" },
  },
  {
    q: "How does GEO work?",
    a: [
      "GEO works in three steps: understanding how AI systems build answers on a company's topics; improving the signals those answers are based on; and measuring the impact against a fixed catalogue of questions.",
      "In practice, this means content answers real customer questions clearly and with evidence, the website is readable for AI crawlers, the brand is described consistently across the web, and relevant specialist sources mention the company.",
    ],
    link: { label: "How we work: our GEO process", href: "/en/services" },
  },
  {
    q: "What is the difference between SEO and GEO?",
    a: [
      "SEO makes sure search engines find a website and rank it well in a list of results. GEO additionally makes sure AI systems understand a brand and include it in a written answer.",
      "In SEO, success is measured by rankings, clicks and organic traffic. In GEO, what counts are mentions, citations and how a brand is described in AI answers. Both share many foundations: technical quality, good content and authority.",
    ],
  },
  {
    q: "Do I still need SEO if I do GEO?",
    a: [
      "Yes. GEO does not replace SEO, it builds on it. Many AI systems draw on search indexes for their answers, so if you can't be found on Google or Bing, it is harder to appear in AI answers too.",
      "That's why we treat Google and AI search as one connected search journey: many users research in an AI assistant and then check the recommendation on Google, or the other way round.",
    ],
  },
  {
    q: "What is ChatGPT SEO?",
    a: [
      "ChatGPT SEO is the optimisation work that helps a company be represented correctly, mentioned and linked as a source in ChatGPT's answers. It is one part of GEO.",
      "ChatGPT answers questions partly from its trained knowledge and partly through a web search. For both, what counts is a clearly understandable website, a consistent brand description across the web and content that answers specific questions precisely. For web search, the website also needs to be accessible to OpenAI's search crawler (OAI-SearchBot).",
    ],
    link: { label: "ChatGPT SEO explained", href: "/en/chatgpt-seo" },
  },
  {
    q: "How does my company become visible in ChatGPT?",
    a: [
      "A company becomes more visible in ChatGPT when ChatGPT understands it clearly, finds up-to-date information about it, and trustworthy sources mention it in the right context. A mention cannot be guaranteed, but the conditions for it can be improved in a targeted way.",
      "The most important levers are: access for OpenAI's search crawler, pages that answer specific customer questions directly, a consistent description of services and location across the web, and mentions in comparisons, specialist portals and directories in your industry.",
    ],
    link: { label: "How we approach ChatGPT SEO", href: "/en/chatgpt-seo" },
  },
  {
    q: "Can you influence which companies ChatGPT recommends?",
    a: [
      "Yes, indirectly. You can't control ChatGPT directly, but you can improve the foundations the model relies on: your own website, the clarity of your content, structured data and the sources in which a company is mentioned.",
      "Serious GEO work does not manipulate models. It makes sure accurate information about a company is easy to find, unambiguous and credibly backed up.",
    ],
  },
  {
    q: "Why does ChatGPT recommend my competitors and not me?",
    a: [
      "Usually because there is more clear, easy-to-find information about your competitors: clearer service pages, more mentions in comparisons and specialist portals, or a more consistent brand profile across the web.",
      "A GEO Audit shows for which questions competitors are mentioned, which sources the answers rely on and where the gaps in your presence are.",
    ],
    link: { label: "What a GEO Audit covers", href: "/en/geo-audit" },
  },
  {
    q: "What role do external sources play in AI visibility?",
    a: [
      "External sources play a major role, because AI systems prefer to derive statements from several independent sources. What specialist portals, comparison articles, industry directories, the press and customers write about a company shapes how an AI classifies it.",
      "Your own website provides the facts, external sources confirm them. That's why building digital authority is part of every GEO strategy.",
    ],
    link: { label: "Digital Authority as a GEO service", href: "/en/services#autoritaet" },
  },
  {
    q: "What is AI Search Optimization, and what are AEO and LLMO?",
    a: [
      "AI Search Optimization is an umbrella term for optimising visibility in AI-powered search systems and is used largely as a synonym for GEO.",
      "Related terms set different priorities: AEO (Answer Engine Optimization) targets systems that deliver direct answers, such as featured snippets or voice assistants. LLMO (Large Language Model Optimization) emphasises visibility within the knowledge of language models. AIO refers to optimisation for Google AI Overviews.",
    ],
    link: { label: "Glossary: GEO, AEO, LLMO and AIO", href: "/en/generative-engine-optimization#begriffe" },
  },
  {
    q: "How do you measure AI visibility?",
    a: [
      "AI visibility is measured by regularly running a fixed catalogue of business-relevant questions across several AI systems. The analysis covers mention rate, share of voice compared with competitors, citations of your own website, the context of each mention and the sources cited.",
      "Because AI answers vary, we look at frequencies and trends across multiple queries and time periods, not individual screenshots. We also analyse visits from AI systems in your web analytics.",
    ],
    link: { label: "Measuring and improving AI visibility", href: "/en/ai-visibility" },
  },
  {
    q: "How quickly will I see results?",
    a: [
      "The first effects of technical improvements are often measurable within a few weeks, once crawlers have re-indexed the website. Systems with web search, such as Perplexity or ChatGPT search, react faster than a model's trained knowledge.",
      "Building authority and stable mentions is a process that takes several months. That's why a reputable agency does not promise fixed timeframes for specific placements.",
    ],
  },
  {
    q: "Which companies is GEO suitable for?",
    a: [
      "GEO is particularly suitable for companies whose customers research and compare before making a decision: B2B companies, SaaS providers, consultancies, service providers with services that need explaining, e-commerce brands and regional providers with a wider catchment area.",
      "The higher the order value and the longer the decision phase, the more important it is to appear accurately and prominently in AI answers.",
    ],
  },
  {
    q: "How much does a GEO agency cost?",
    a: [
      "The cost of a GEO agency depends on your starting point, the competition, the number of topics and markets, and the scope of implementation. A one-off audit as a starting point, followed by ongoing support with monthly monitoring, is common.",
      `With us, the first AI visibility check is free. The full GEO Audit costs ${pricingEn.audit}, ongoing GEO optimisation including monitoring ${pricingEn.optimization} and a strategy workshop ${pricingEn.workshop} (all prices net, excluding VAT). We agree the exact scope and price in a binding quote beforehand.`,
    ],
    link: { label: "What drives the cost of a GEO agency", href: "/en/geo-agency#kosten" },
  },
  {
    q: "Which AI search engines are relevant for companies?",
    a: [
      "The most important systems at the moment are ChatGPT (OpenAI), Google Gemini, Google AI Overviews and AI Mode in Google Search, Perplexity, Microsoft Copilot, Claude (Anthropic) and Meta AI, which is built into WhatsApp, Instagram and Facebook.",
      "Which of these matter most to a company depends on the target audience. In the GEO Audit, we prioritise the platforms where your customers actually do their research.",
    ],
  },
  {
    q: "What are Google AI Overviews?",
    a: [
      "Google AI Overviews are AI-generated summaries that Google shows above the classic search results for many queries. They answer the question directly and link to a few selected sources.",
      "Because AI Overviews are based on the Google search index, solid SEO foundations are a prerequisite. Beyond that, what counts is how clearly and verifiably a page answers the specific question.",
    ],
    link: { label: "Optimising for Google AI Overviews", href: "/en/google-ai-overviews" },
  },
  {
    q: "Can anyone guarantee that I'll be mentioned by ChatGPT?",
    a: [
      "No. Nobody can seriously guarantee that a company will be mentioned in ChatGPT or any other AI system. Answers are generated dynamically, differ depending on the question, context and user, and are constantly changed by the providers.",
      "What can be reliably improved are the conditions: clarity, citability and authority. And what can be reliably measured is how visibility develops. Be cautious with providers who guarantee placements.",
    ],
  },
  {
    q: "Who offers GEO consulting in Germany and across Europe?",
    a: [
      "Die GEO Agentur is an agency specialising in Generative Engine Optimization, based in Passau, Germany, that advises and supports companies across Europe in German and English. It is a service of Daily Rocket GmbH, which has delivered performance marketing for more than 100 clients since 2019.",
      "There are other providers too, often classic SEO agencies that also offer GEO. Clear criteria help when choosing: a disclosed measurement methodology, experience with search data and no guaranteed placements.",
    ],
    link: { label: "How to recognise a good GEO agency", href: "/en/geo-agency#auswahl" },
  },
];
