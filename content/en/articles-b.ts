/**
 * GEO Insights (English) – part B: translations of the last six base articles of content/articles.ts.
 * Inline links in body text: [anchor text](/path).
 */
import type { Article } from "@/content/articles";

const SEP_2026 = "2026-09-24";
const OKT_2026 = "2026-10-01";

export const articlesEnB: Article[] = [
  {
    slug: "chatgpt-recommends-competitors",
    title: "ChatGPT recommends your competitors? Causes and what you can do",
    metaTitle: "Why does ChatGPT recommend my competitors? Causes & solutions",
    description:
      "Why does ChatGPT name other providers but not your company? The most common causes – and how to work out, step by step, what needs to be done.",
    category: "Praxis",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "fabian",
    topics: ["ChatGPT recommendations", "Competitors in ChatGPT", "AI Visibility", "GEO Audit"],
    answer:
      "When ChatGPT recommends your competitors, it is usually because more clear, easy-to-find information exists about them: sharper service pages, more frequent mentions in comparisons and specialist sources, or a more consistent brand profile. The cause can be narrowed down through a structured analysis of the answers and their sources.",
    body: [
      { type: "h2", text: "The most common causes" },
      {
        type: "ol",
        items: [
          "Your website does not answer the specific question – it describes your services in general terms, but not for the use case being asked about.",
          "Competitors appear in comparison articles, industry lists or specialist portals; you do not.",
          "Your company is described inconsistently across the web, for example with outdated services or locations.",
          "The AI providers' crawlers cannot reach your website or cannot read its content.",
          "Your brand is new or barely mentioned online, so the model's trained knowledge contains little about you.",
        ],
      },
      { type: "h2", text: "How to find the cause" },
      {
        type: "ol",
        items: [
          "Collect 20 to 50 questions your customers would actually ask.",
          "Ask these questions several times in ChatGPT, Perplexity and Gemini and document who gets named.",
          "Note which sources the systems link to – the same pages often come up again and again.",
          "Compare how your website and your competitors' websites answer these questions.",
          "Check whether you appear on those recurring sources at all.",
        ],
      },
      {
        type: "p",
        text: "This is exactly the analysis we carry out systematically in the [GEO Audit](/en/geo-audit) – including a competitor comparison and prioritised actions.",
      },
      { type: "h2", text: "What to do next" },
      {
        type: "ul",
        items: [
          "Fill in missing answers: pages for the specific questions and use cases of your customers – see [Content for AI Search](/en/services#content).",
          "Build a presence on the recurring sources – see [Digital Authority](/en/services#autoritaet).",
          "Make your core data consistent – see [Entity Optimization](/en/insights/entity-optimization).",
          "Remove technical barriers – see [Technical GEO](/en/services#technik).",
        ],
      },
      {
        type: "p",
        text: "Important: changes in AI answers take time, and no agency can guarantee a mention. Progress can be measured, however – see [AI Visibility](/en/ai-visibility).",
      },
    ],
    related: [
      { label: "Get visible in ChatGPT: 7 levers", href: "/en/insights/get-visible-in-chatgpt" },
      { label: "How does a GEO Audit work?", href: "/en/insights/geo-audit-process" },
      { label: "Request a free visibility check", href: "/en/geo-audit" },
    ],
  },
  {
    slug: "measure-ai-visibility",
    title: "Measuring AI visibility: prompts, mentions, sources",
    metaTitle: "How to measure AI visibility properly",
    description:
      "How to measure a brand's visibility in ChatGPT, Gemini, Perplexity and AI Overviews reliably – and which metrics are genuinely meaningful.",
    category: "Praxis",
    published: SEP_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["AI Visibility", "AI search visibility", "GEO monitoring", "Share of Voice"],
    answer:
      "AI visibility is measured by regularly running a fixed catalogue of business-relevant questions across several AI systems. The analysis covers mention rate, the context and tone of each mention, the competitors named and the sources cited – tracked as a trend over time, not as a single screenshot.",
    body: [
      { type: "h2", text: "Why a screenshot proves nothing" },
      {
        type: "p",
        text: "AI answers are not static. The same question can be answered differently depending on wording, conversation history, location and timing. A single screenshot showing a brand being named therefore says very little. Measurement only becomes meaningful through repetition and structure.",
      },
      { type: "h2", text: "Step 1: Define the prompt catalogue" },
      {
        type: "p",
        text: "The foundation is a catalogue of questions that potential customers actually ask. We typically divide it into four groups:",
      },
      {
        type: "ul",
        items: [
          "Category questions: “Which providers are there for …?”",
          "Comparison questions: “Which is better, A or B?” or “Which provider is suitable for …?”",
          "Problem questions: “How do I solve …?” – without naming a brand",
          "Brand questions: “What is [your brand]?”, “Is [your brand] reputable?”",
        ],
      },
      { type: "h2", text: "Step 2: The right metrics" },
      {
        type: "table",
        head: ["Metric", "What it tells you"],
        rows: [
          ["Mention rate", "In how many relevant answers the brand appears"],
          ["Share of Voice", "How often the brand is named relative to competitors"],
          ["Citations", "Whether and how often your own website is linked as a source"],
          ["Context", "Whether the brand is recommended, merely mentioned or portrayed critically"],
          ["Accuracy", "Whether services, locations and positioning are represented correctly"],
          ["Source landscape", "Which third-party pages shape the answers on your topic"],
        ],
      },
      { type: "h2", text: "Step 3: Analyse by platform and topic" },
      {
        type: "p",
        text: "ChatGPT, Gemini, Perplexity and Google AI Overviews draw on different sources. A brand can be strong in one system and barely visible in another. Visibility also often varies widely between topics. Breaking the analysis down by platform and topic shows where action will pay off most.",
      },
      { type: "h2", text: "Step 4: Connect with web analytics" },
      {
        type: "p",
        text: "Many AI systems link to their sources. Visits from ChatGPT, Perplexity or Gemini can therefore be analysed as a separate channel in web analytics. This shows whether mentions also lead to visits and enquiries. It is also worth looking at the “AI Performance” report (beta) in Bing Webmaster Tools.",
      },
      { type: "h2", text: "What reliable measurement looks like" },
      {
        type: "ul",
        items: [
          "A disclosed prompt catalogue and measurement period",
          "Several queries per prompt instead of one-off results",
          "Comparison with competitors instead of isolated figures",
          "No guaranteed placements",
        ],
      },
      {
        type: "p",
        text: "How we deliver this measurement as an ongoing service is described on the [AI Visibility Monitoring](/en/ai-visibility) page.",
      },
    ],
    related: [
      { label: "AI Visibility Monitoring", href: "/en/ai-visibility" },
      { label: "How does a GEO Audit work?", href: "/en/insights/geo-audit-process" },
      { label: "Developing a GEO strategy", href: "/en/insights/geo-strategy" },
    ],
  },
  {
    slug: "geo-audit-process",
    title: "How does a GEO Audit work?",
    metaTitle: "GEO Audit explained: process, scope and results",
    description:
      "What a GEO Audit (AI Visibility Audit) examines, how it works and what you get at the end – from the prompt catalogue and source analysis to a prioritised roadmap.",
    category: "Praxis",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["GEO Audit", "AI Visibility Audit", "AI visibility analysis", "ChatGPT audit"],
    answer:
      "A GEO Audit – also called an AI Visibility Audit or AI visibility analysis – systematically examines whether and how ChatGPT, Gemini, Perplexity and Google AI Overviews name a company today, which competitors appear instead, which sources the answers rely on and which technical and content gaps exist. The result is a prioritised roadmap.",
    body: [
      { type: "h2", text: "The five building blocks of a GEO Audit" },
      { type: "h3", text: "1. Prompt catalogue" },
      {
        type: "p",
        text: "Together we define the questions potential customers ask AI systems – organised by topic and buying stage, from the general problem question to the specific question about providers.",
      },
      { type: "h3", text: "2. Visibility analysis" },
      {
        type: "p",
        text: "Each question is asked several times in the relevant systems. We analyse mentions, position, context and accuracy of the portrayal – compared with your most important competitors.",
      },
      { type: "h3", text: "3. Source analysis" },
      {
        type: "p",
        text: "Which pages do the systems link to? Often a handful of portals, comparisons or specialist articles shape the answers for an entire industry. These sources are the most important lever for [Digital Authority](/en/services#autoritaet).",
      },
      { type: "h3", text: "4. Technical review" },
      {
        type: "p",
        text: "We check whether AI crawlers can reach the website, whether content is readable without JavaScript and whether structured data is present and correct – the foundations of [Technical GEO](/en/services#technik).",
      },
      { type: "h3", text: "5. Entity check" },
      {
        type: "p",
        text: "How is the company described across the web – and is it consistent? Discrepancies in names, services or locations weaken the picture a language model forms. More on this in [Entity Optimization](/en/insights/entity-optimization).",
      },
      { type: "h2", text: "The result" },
      {
        type: "ul",
        items: [
          "Current AI visibility by platform and topic",
          "Competitor comparison and Share of Voice",
          "List of the most important sources in your industry",
          "Technical and content gaps",
          "Prioritised roadmap with concrete actions",
        ],
      },
      { type: "h2", text: "GEO Audit or SEO audit?" },
      {
        type: "p",
        text: "An SEO audit mainly reviews rankings, technical set-up and content for traditional search. A GEO Audit adds the perspective of AI systems: what do they answer, whom do they name, and why? The two overlap but do not replace each other – see [SEO vs. GEO](/en/insights/geo-vs-seo).",
      },
      {
        type: "p",
        text: "Our [free AI visibility check](/en/geo-audit) gives you a first impression – a sample analysis that we discuss with you personally.",
      },
    ],
    related: [
      { label: "Request a GEO Audit", href: "/en/geo-audit" },
      { label: "Measuring AI visibility", href: "/en/insights/measure-ai-visibility" },
      { label: "What does a GEO agency do?", href: "/en/geo-agency" },
    ],
  },
  {
    slug: "geo-vs-seo",
    title: "SEO vs. GEO: what is the difference?",
    metaTitle: "SEO vs. GEO: the difference – and why you need both",
    description:
      "SEO vs. GEO: how Generative Engine Optimization differs from traditional search engine optimisation, where the two overlap and how companies can combine them effectively.",
    category: "Strategie",
    published: SEP_2026,
    updated: OKT_2026,
    readingMinutes: 8,
    author: "fabian",
    topics: ["SEO vs. GEO", "Generative Engine Optimization", "Search engine optimisation", "AI Search"],
    answer:
      "SEO optimises for a website to rank well in a search engine's results list. GEO additionally optimises for AI systems to understand a brand and name it in their generated answers. GEO does not replace SEO but builds on it: many AI systems rely on search indexes.",
    body: [
      { type: "h2", text: "The difference in one sentence" },
      {
        type: "p",
        text: "With SEO, you compete for a position in a list. With GEO, you compete for a place in an answer – and that answer often names only a few providers.",
      },
      {
        type: "table",
        head: ["", "Traditional SEO", "GEO"],
        rows: [
          ["Goal", "Ranking in the results list", "Mention and citation in the AI answer"],
          ["Result format", "Ten links to choose from", "One generated answer"],
          ["Key factors", "Relevance, technical set-up, backlinks", "Clarity, verifiability, entity, external mentions"],
          ["Measurement", "Rankings, clicks, traffic", "Mentions, context, cited sources, Share of Voice"],
          ["User behaviour", "Compare and click", "Read the answer, ask targeted follow-up questions"],
        ],
      },
      { type: "h2", text: "What stays the same" },
      {
        type: "p",
        text: "The fundamentals overlap considerably. A technically sound, fast website, content with real substance and a good reputation online benefit both. Google itself stresses that the same best practices apply to its AI features in Search as to traditional search.",
      },
      {
        type: "p",
        text: "On top of that, AI systems with web search draw on search indexes. If you cannot be found in Google or Bing, you will rarely be selected as a source in AI answers either.",
      },
      { type: "h2", text: "What changes" },
      { type: "h3", text: "1. From keywords to questions" },
      {
        type: "p",
        text: "In AI assistants, users phrase complete questions with context: budget, industry, region, requirements. Content therefore needs to answer specific questions rather than merely cover search terms – the principle behind [Answer Engine Optimization](/en/insights/answer-engine-optimization).",
      },
      { type: "h3", text: "2. From the page to the brand" },
      {
        type: "p",
        text: "An AI does not just assess a single page; it forms a picture of the company as a whole. Contradictory information about services, locations or positioning weakens that picture – see [Entity Optimization](/en/insights/entity-optimization).",
      },
      { type: "h3", text: "3. From backlinks to mentions" },
      {
        type: "p",
        text: "Links remain important. For AI systems, however, the context in which a brand is mentioned also counts – in specialist articles, comparisons, directories or industry lists, even without a link.",
      },
      { type: "h3", text: "4. From rankings to mentions" },
      {
        type: "p",
        text: "Rankings can be measured precisely. AI answers vary depending on wording, context and timing. GEO measurement therefore works with samples across many prompts and evaluates frequencies and trends – see [Measuring AI visibility](/en/insights/measure-ai-visibility).",
      },
      { type: "h2", text: "What a strong website needs today" },
      {
        type: "table",
        head: ["Building block", "Affects SEO", "Affects GEO"],
        rows: [
          ["Technical SEO (indexing, speed, clean HTML)", "Yes", "Yes – a prerequisite for AI crawlers"],
          ["Content with clear answers", "Yes", "Yes – the basis for citations"],
          ["Structured data", "Yes", "Yes – unambiguous facts for machines"],
          ["Entity and brand signals", "Partly", "Strongly – the basis for understanding the brand"],
          ["External mentions and authority", "Yes (backlinks)", "Strongly – including mentions without a link"],
          ["Measuring AI mentions", "No", "Yes – dedicated metrics"],
        ],
      },
      { type: "h2", text: "Combining SEO and GEO" },
      {
        type: "ol",
        items: [
          "Secure the SEO fundamentals: indexing, technical set-up, internal linking.",
          "Derive the prompt catalogue from real customer questions and align it with your keywords.",
          "Add direct answers, definitions and evidence to existing pages.",
          "Make the brand entity consistent and build external sources in a targeted way.",
          "Analyse rankings and AI mentions together.",
        ],
      },
      {
        type: "quote",
        text: "The useful question is not “SEO or GEO?” but: how is our brand found, understood and recommended across the whole of search?",
      },
    ],
    related: [
      { label: "What is Generative Engine Optimization?", href: "/en/generative-engine-optimization" },
      { label: "Developing a GEO strategy", href: "/en/insights/geo-strategy" },
      { label: "GEO consulting for SEO and marketing teams", href: "/en/geo-consulting" },
    ],
    sources: [
      { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
    ],
  },
  {
    slug: "entity-optimization",
    title: "Entity Optimization: how AI systems understand your brand",
    metaTitle: "Entity Optimization for AI Search: strengthen your brand as an entity",
    description:
      "Entity Optimization explained: what an entity is, why language models and search engines think in entities and how companies can describe their brand clearly and consistently.",
    category: "Strategie",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["Entity Optimization", "Entity", "Knowledge Graph", "Structured data", "Brand authority"],
    answer:
      "Entity Optimization means describing a company on the web as a distinct entity – a clearly defined “thing” with fixed attributes: who it is, what it offers, where it operates, which people belong to it and what it has expertise in. The more consistent this information is, the more reliably search engines and language models can classify the brand.",
    body: [
      { type: "h2", text: "What is an entity?" },
      {
        type: "p",
        text: "An entity is a uniquely identifiable object: a person, a company, a place, a product or a concept. Search engines map these entities and their relationships in knowledge bases – at Google, for example, in the Knowledge Graph. Language models learn similar relationships from text.",
      },
      { type: "h2", text: "Why entities matter so much for GEO" },
      {
        type: "p",
        text: "When a user asks “Which agency in Bavaria specialises in AI visibility?”, the system needs to know which companies are based in Bavaria and which ones work on this topic. If these connections are missing or sources contradict each other, a brand will not be named – or will be named incorrectly.",
      },
      { type: "h2", text: "The core data of a company entity" },
      {
        type: "table",
        head: ["Attribute", "Example"],
        rows: [
          ["Name and spellings", "Official name, short form, domain"],
          ["Category", "What kind of company – e.g. an agency for Generative Engine Optimization"],
          ["Services", "Clearly named offerings with their own pages"],
          ["Location and service area", "Address, region, countries"],
          ["People", "Founders, contacts, authors"],
          ["Relationships", "Parent company, partners, memberships"],
          ["Profiles", "Company profiles, directories, social networks"],
        ],
      },
      { type: "h2", text: "How to strengthen your entity" },
      {
        type: "ol",
        items: [
          "An “About us” page with unambiguous facts about the company, its people and its location.",
          "Structured data based on Schema.org: Organization, Person, Service – with unambiguous links between them.",
          "Identical information in company profiles, industry directories and social networks.",
          "Author details on specialist articles, so that expertise can be attributed to a person.",
          "Mentions in specialist sources that connect your brand with your topics – see [Digital Authority](/en/services#autoritaet).",
        ],
      },
      {
        type: "p",
        text: "How we put this into practice is described in our [Entity Optimization](/en/services#entitaeten) service. Whether your company is represented correctly today is shown by the [free AI visibility check](/en/geo-audit).",
      },
    ],
    related: [
      { label: "What is LLM Optimization?", href: "/en/insights/llm-optimization" },
      { label: "Get visible in ChatGPT", href: "/en/insights/get-visible-in-chatgpt" },
      { label: "Services overview", href: "/en/services" },
    ],
  },
  {
    slug: "geo-strategy",
    title: "Developing a GEO strategy: 6 steps to AI visibility",
    metaTitle: "Developing a GEO strategy: a 6-step guide",
    description:
      "How companies build a strategy for Generative Engine Optimization: goals, prompt catalogue, priorities, implementation, measurement and integration with SEO.",
    category: "Strategie",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 7,
    author: "fabian",
    topics: ["GEO strategy", "Generative Engine Optimization", "GEO for B2B", "GEO for ecommerce"],
    answer:
      "A GEO strategy defines which questions a company wants to appear for in AI answers, which actions take priority and how progress is measured. It is built in six steps: goals, prompt catalogue, current-state analysis, prioritisation, implementation and monitoring – closely integrated with existing SEO.",
    body: [
      { type: "h2", text: "Step 1: Set goals" },
      {
        type: "p",
        text: "Is the aim more enquiries, brand awareness in a new category or an accurate portrayal of the company? The goal determines which questions and platforms take priority.",
      },
      { type: "h2", text: "Step 2: Build the prompt catalogue" },
      {
        type: "p",
        text: "Collect the questions customers ask at the different stages of their decision – from sales conversations, support requests and keyword data. This catalogue is the basis for both content and measurement.",
      },
      { type: "h2", text: "Step 3: Assess the current state" },
      {
        type: "p",
        text: "Where are you named today, where are your competitors named, and which sources shape the answers? The methodology is described in the article [How does a GEO Audit work?](/en/insights/geo-audit-process).",
      },
      { type: "h2", text: "Step 4: Set priorities" },
      {
        type: "p",
        text: "Not all gaps are equally important. Assess actions by the business value of the question, effort and impact. Technical fixes and missing answer pages often deliver the fastest results.",
      },
      { type: "h2", text: "Step 5: Implement" },
      {
        type: "ul",
        items: [
          "[Technical GEO](/en/services#technik): crawlability, HTML, structured data",
          "[Content for AI Search](/en/services#content): answer pages, comparisons, definitions",
          "[Entity Optimization](/en/services#entitaeten): consistent core data",
          "[Digital Authority](/en/services#autoritaet): presence on relevant sources",
        ],
      },
      { type: "h2", text: "Step 6: Measure and adjust" },
      {
        type: "p",
        text: "Run the prompt catalogue regularly and analyse the trends – see [AI Visibility](/en/ai-visibility). AI systems and the competition are constantly changing, which is why GEO is a cycle, not a one-off project.",
      },
      { type: "h2", text: "Specifics by business model" },
      { type: "h3", text: "B2B and complex services" },
      {
        type: "p",
        text: "Decisions take a long time, and comparison questions are particularly valuable. Specialist articles, case examples and mentions in industry media carry a lot of weight.",
      },
      { type: "h3", text: "Ecommerce and brands" },
      {
        type: "p",
        text: "Product questions such as “Which … are suitable for …?” take centre stage. Precise product information, product reviews and rating platforms shape the answers.",
      },
      { type: "h3", text: "Regional providers" },
      {
        type: "p",
        text: "Questions often include a location. Consistent location data, well-maintained company profiles and local mentions are decisive.",
      },
      {
        type: "p",
        text: "If you would like to implement the strategy with your own team, we support you with [GEO consulting](/en/geo-consulting).",
      },
    ],
    related: [
      { label: "GEO consulting", href: "/en/geo-consulting" },
      { label: "SEO vs. GEO", href: "/en/insights/geo-vs-seo" },
      { label: "What does a GEO agency do?", href: "/en/geo-agency" },
    ],
  },
];
