/**
 * GEO Insights (English) – articles 1–6, translated from content/articles.ts.
 * Inline links in body text: [anchor text](/path).
 */
import type { Article } from "@/content/articles";

const SEP_2026 = "2026-09-24";
const OKT_2026 = "2026-10-01";

export const articlesEnA: Article[] = [
  /* ───────────────────────────── FUNDAMENTALS ───────────────────────────── */
  {
    slug: "what-is-ai-search",
    title: "What is AI Search? AI-powered search explained simply",
    description:
      "AI Search explained: how AI search engines such as ChatGPT, Perplexity and Google AI Overviews generate answers, how they differ from traditional search and what this means for businesses.",
    category: "Grundlagen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["AI Search", "AI-powered search", "Generative Search", "Retrieval Augmented Generation"],
    answer:
      "AI Search refers to search systems that do not return a list of links in response to a question, but use a language model to formulate their own answer, combining information from the web with their trained knowledge. Well-known examples are ChatGPT with web search, Perplexity, Microsoft Copilot and Google AI Overviews.",
    body: [
      { type: "h2", text: "How AI Search works" },
      {
        type: "p",
        text: "Most AI search systems follow a similar principle, known technically as Retrieval Augmented Generation (RAG): first the system searches for suitable documents (retrieval), then a language model formulates an answer on that basis (generation), often referring to the sources it used.",
      },
      {
        type: "ol",
        items: [
          "The user asks a question, often a detailed one with context.",
          "The system breaks the question down into sub-questions and searches a search index or the web.",
          "Suitable pages are read and assessed for relevance and trustworthiness.",
          "The language model summarises the information into an answer and cites selected sources.",
        ],
      },
      { type: "h2", text: "How AI Search differs from traditional search" },
      {
        type: "table",
        head: ["", "Traditional search", "AI Search"],
        rows: [
          ["Result", "List of links", "Formulated answer with a few sources"],
          ["Query", "Short keywords", "Full questions with context"],
          ["Decision", "User compares for themselves", "System summarises and recommends"],
          ["Visibility", "Position in the rankings", "Mention and citation in the answer"],
        ],
      },
      { type: "h2", text: "Which systems count as AI Search" },
      {
        type: "ul",
        items: [
          "[ChatGPT](/en/chatgpt-seo) with integrated web search",
          "[Perplexity](/en/perplexity-seo) as an answer engine with numbered sources",
          "[Google AI Overviews](/en/google-ai-overviews) and AI Mode in Google Search",
          "[Google Gemini](/en/gemini-seo) as a standalone assistant",
          "[Microsoft Copilot and Claude](/en/insights/copilot-and-claude)",
        ],
      },
      { type: "h2", text: "What AI Search means for businesses" },
      {
        type: "p",
        text: "An AI answer often names only a handful of providers specifically. If you are not among them, you are not being considered at that moment – even if your website ranks on page one of Google. The discipline concerned with this kind of visibility is called [Generative Engine Optimization (GEO)](/en/generative-engine-optimization).",
      },
      {
        type: "p",
        text: "At the same time, traditional search remains important: many AI systems draw on search indexes. A solid SEO foundation is therefore a prerequisite for visibility in AI search. More on this in the article [SEO vs. GEO](/en/insights/geo-vs-seo).",
      },
    ],
    related: [
      { label: "What is Generative Engine Optimization?", href: "/en/generative-engine-optimization" },
      { label: "What is Answer Engine Optimization?", href: "/en/insights/answer-engine-optimization" },
      { label: "How to measure AI visibility", href: "/en/insights/measure-ai-visibility" },
    ],
  },
  {
    slug: "answer-engine-optimization",
    title: "What is Answer Engine Optimization (AEO)?",
    metaTitle: "Answer Engine Optimization (AEO): Definition & how it differs from GEO",
    description:
      "Answer Engine Optimization (AEO) explained simply: definition, origins, how it differs from SEO and GEO, and how to structure content for answer engines.",
    category: "Grundlagen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 5,
    author: "jan",
    topics: ["Answer Engine Optimization", "AEO", "Featured Snippets", "Generative Engine Optimization"],
    answer:
      "Answer Engine Optimization (AEO) is the optimisation of content for systems that answer a question directly instead of displaying a list of links – such as featured snippets, voice assistants or AI search engines. The aim is for your own page to be selected as the source of the answer.",
    body: [
      { type: "h2", text: "Where the term comes from" },
      {
        type: "p",
        text: "The term AEO emerged before generative AI search became widespread: with highlighted answer boxes in Google Search and voice assistants, it became important to write content in a way that allows a single, precise answer to be extracted. With ChatGPT, Perplexity and Google AI Overviews, the topic has taken on a new dimension.",
      },
      { type: "h2", text: "AEO, GEO and SEO compared" },
      {
        type: "table",
        head: ["Term", "Focus"],
        rows: [
          ["SEO", "Ranking a website in the search engine results list"],
          ["AEO", "Selection as the direct answer – snippets, voice assistants, answer engines"],
          ["GEO", "Mention and citation in the answers of generative AI systems; includes brand, entity and external sources"],
        ],
      },
      {
        type: "p",
        text: "The terms overlap but are not identical. AEO focuses heavily on the form of individual pieces of content. [Generative Engine Optimization](/en/generative-engine-optimization) additionally considers how a language model understands a brand as a whole – beyond its own website.",
      },
      { type: "h2", text: "How to write content for answer engines" },
      {
        type: "ul",
        items: [
          "Phrase the question as a subheading, the way users ask it.",
          "Give the complete answer in the first sentence – details follow afterwards.",
          "Use definitions, lists and tables for comparisons and processes.",
          "Back up statements with concrete figures, examples and sources.",
          "Use structured data so that facts are machine-readable.",
        ],
      },
      {
        type: "p",
        text: "We apply these principles on every page of this website – each page begins with a short answer. How we implement this for clients is described in our service [Content for AI Search](/en/services#content).",
      },
    ],
    related: [
      { label: "What is LLM Optimization?", href: "/en/insights/llm-optimization" },
      { label: "What is AI Search?", href: "/en/insights/what-is-ai-search" },
      { label: "Optimisation for Google AI Overviews", href: "/en/google-ai-overviews" },
    ],
  },
  {
    slug: "llm-optimization",
    title: "What is LLM Optimization (LLMO)?",
    metaTitle: "LLM Optimization (LLMO): What it is and how it works",
    description:
      "LLM Optimization (Large Language Model Optimization) explained: how brands are represented correctly in the knowledge of language models such as ChatGPT, Gemini and Claude – and how LLMO differs from GEO.",
    category: "Grundlagen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 5,
    author: "jan",
    topics: ["LLM Optimization", "LLMO", "Large Language Model Optimization", "LLM SEO"],
    answer:
      "LLM Optimization (LLMO, Large Language Model Optimization) refers to measures that ensure a company is represented accurately, and as often as possible, in the knowledge and answers of large language models such as ChatGPT, Gemini or Claude. The term is often used synonymously with GEO, but places more emphasis on the model's knowledge itself.",
    body: [
      { type: "h2", text: "Two ways a language model knows your brand" },
      {
        type: "ul",
        items: [
          "Trained knowledge: information the model learned from publicly available texts during training. This knowledge has a cut-off date and only changes with new model versions.",
          "Retrieved knowledge: information the system retrieves via a web search at the time of the question. It is up to date, but depends on which pages are found and selected.",
        ],
      },
      {
        type: "p",
        text: "LLMO addresses both. For trained knowledge, what counts is how consistently and how often a company is described on the web over a longer period. For retrieved knowledge, what counts is discoverability, freshness and citability – the classic strengths of [Generative Engine Optimization](/en/generative-engine-optimization).",
      },
      { type: "h2", text: "What LLMO involves in practice" },
      {
        type: "ol",
        items: [
          "Consistent core data: describe name, services, location and people the same way everywhere – see [Entity Optimization](/en/insights/entity-optimization).",
          "Clear, fact-based content that answers questions unambiguously.",
          "Presence on sources that are widely read and cited in your industry.",
          "Access for the AI providers' crawlers, if desired.",
          "Regular checks on how models describe the brand – including errors.",
        ],
      },
      { type: "h2", text: "LLMO, LLM SEO and GEO" },
      {
        type: "p",
        text: "In practice, LLMO, LLM SEO and GEO are often used interchangeably. We use GEO as the umbrella term because it covers all generative search systems – including Google AI Overviews, which are based on the traditional search index. An overview of all terms can be found in the [glossary](/en/generative-engine-optimization#begriffe).",
      },
    ],
    related: [
      { label: "What is Answer Engine Optimization?", href: "/en/insights/answer-engine-optimization" },
      { label: "Entity Optimization explained", href: "/en/insights/entity-optimization" },
      { label: "ChatGPT SEO", href: "/en/chatgpt-seo" },
    ],
  },

  /* ───────────────────────────── PLATFORMS ───────────────────────────── */
  {
    slug: "google-ai-overviews-for-businesses",
    title: "Google AI Overviews: What businesses need to know now",
    description:
      "What Google AI Overviews are, how sources are selected and what businesses can do to be included in the AI summaries in Google Search.",
    category: "Plattformen",
    published: SEP_2026,
    updated: OKT_2026,
    readingMinutes: 5,
    author: "jan",
    topics: ["Google AI Overviews", "AI Overviews SEO", "Google AI Mode", "Google AI Search"],
    answer:
      "Google AI Overviews (labelled “Übersicht mit KI” in German) are AI-generated summaries shown above the traditional search results. They are based on the Google search index and link to selected sources. The prerequisite for being included is indexable pages with solid SEO fundamentals; what then matters is how clearly and verifiably a page answers the specific question.",
    body: [
      { type: "h2", text: "What AI Overviews are" },
      {
        type: "p",
        text: "For many search queries, Google shows an AI-written summary at the very top – in Germany labelled “Übersicht mit KI” and available there since spring 2025. It answers the question directly and refers to several sources that users can open for details.",
      },
      {
        type: "p",
        text: "According to Alphabet, AI Overviews were already reaching more than two billion users per month in July 2025. For businesses, this means that for many questions the most prominent spot in Google Search is no longer a traditional ranking position, but an answer.",
      },
      { type: "h2", text: "How sources are selected" },
      {
        type: "p",
        text: "AI Overviews use the regular Google search index. According to Google, there are no additional technical requirements: a page must be indexed and eligible to be shown with a snippet. Which pages are linked depends on how well they answer the particular aspect of the question.",
      },
      { type: "h2", text: "What businesses can do in practice" },
      {
        type: "ol",
        items: [
          "Secure the technical fundamentals: indexability, clean snippets, no accidental nosnippet directives.",
          "Answer questions directly: the key statement in the first paragraph, details afterwards – the principle of [Answer Engine Optimization](/en/insights/answer-engine-optimization).",
          "Create structure: clear subheadings, lists, tables and unambiguous definitions.",
          "Increase verifiability: concrete figures, sources, authors with demonstrable expertise.",
          "Use structured data so that organisation, services and content are machine-readable.",
        ],
      },
      { type: "h2", text: "AI Overviews and Gemini: the difference" },
      {
        type: "p",
        text: "AI Overviews are part of Google Search. [Gemini](/en/gemini-seo) is Google's standalone AI assistant. Both use Google's infrastructure, but they are different products. Important for website owners: the “Google-Extended” control in robots.txt governs the use of content for Gemini models, not how pages appear in Google Search and its AI features.",
      },
      { type: "h2", text: "How to measure success" },
      {
        type: "p",
        text: "Traditional tools such as Search Console show only to a limited extent whether, and in what context, a page appears in AI Overviews. We therefore also measure, using a defined catalogue of relevant search queries, whether an AI Overview appears, which sources it cites and whether your own page is among them – details in [How to measure AI visibility](/en/insights/measure-ai-visibility).",
      },
    ],
    related: [
      { label: "Optimisation for Google AI Overviews", href: "/en/google-ai-overviews" },
      { label: "Gemini SEO", href: "/en/gemini-seo" },
      { label: "SEO vs. GEO", href: "/en/insights/geo-vs-seo" },
    ],
    sources: [
      { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      {
        label: "TechCrunch: Google's AI Overviews have 2B monthly users (23 July 2025)",
        href: "https://techcrunch.com/2025/07/23/googles-ai-overviews-have-2b-monthly-users-ai-mode-100m-in-the-us-and-india/",
      },
      { label: "t3n: AI Overviews launch in Germany (in German)", href: "https://t3n.de/news/google-neue-such-funktion-ai-overviews-deutschland-1679953/" },
    ],
  },
  {
    slug: "copilot-and-claude",
    title: "Microsoft Copilot and Claude: What businesses should know about these AI assistants",
    metaTitle: "Copilot & Claude: Visibility in Microsoft Copilot and Claude",
    description:
      "How Microsoft Copilot and Claude by Anthropic use information from the web, which crawlers are relevant and what businesses can do to be visible in these AI assistants.",
    category: "Plattformen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 5,
    author: "jan",
    topics: ["Microsoft Copilot", "Claude", "Bing", "AI crawlers", "AI Visibility"],
    answer:
      "Microsoft Copilot relies on the Bing search index for up-to-date information, so visibility in Bing is the most important prerequisite. Claude by Anthropic can also search the web and uses its own crawlers to do so. The same applies to both: if you are easy to find, clearly described and mentioned by trustworthy sources, you have a better chance of being included in answers.",
    body: [
      { type: "h2", text: "Microsoft Copilot" },
      {
        type: "p",
        text: "Copilot is integrated into Windows, the Edge browser, Microsoft 365 and Bing Search, and therefore reaches many users in a professional context. For up-to-date information, Copilot draws on the Bing index.",
      },
      {
        type: "ul",
        items: [
          "Register your website in Bing Webmaster Tools and submit your sitemap – the easiest way is to import it from Google Search Console.",
          "Keep an eye on the “AI Performance” report (beta) in Bing Webmaster Tools, which provides data on visibility in Microsoft's AI answers.",
          "Use IndexNow so that Bing picks up changes faster.",
          "Do not block Bingbot, and make sure content is clean and rendered server-side.",
        ],
      },
      { type: "h2", text: "Claude by Anthropic" },
      {
        type: "p",
        text: "Claude is increasingly used for research and within companies, and can retrieve information via a web search. Anthropic distinguishes between crawlers for model training, for search and for fetches triggered directly by users. Website owners can control these separately in robots.txt.",
      },
      {
        type: "p",
        text: "If you want to appear as a source in Claude's answers, you should allow the search crawler. Whether content is additionally made available for training is a strategic decision that we discuss with clients in the [GEO Audit](/en/geo-audit).",
      },
      { type: "h2", text: "What applies to all AI assistants" },
      {
        type: "ol",
        items: [
          "Content that answers specific questions in the first sentence.",
          "A clear, consistent description of the brand across the web – see [Entity Optimization](/en/insights/entity-optimization).",
          "Mentions in specialist portals, comparisons and directories in your own industry.",
          "Regular measurement using a fixed prompt catalogue – see [AI Visibility](/en/ai-visibility).",
        ],
      },
    ],
    related: [
      { label: "ChatGPT SEO", href: "/en/chatgpt-seo" },
      { label: "Perplexity SEO", href: "/en/perplexity-seo" },
      { label: "What is AI Search?", href: "/en/insights/what-is-ai-search" },
    ],
    sources: [
      { label: "Bing Webmaster Tools", href: "https://www.bing.com/webmasters" },
      { label: "IndexNow", href: "https://www.indexnow.org/" },
    ],
  },

  /* ───────────────────────────── PRACTICE ───────────────────────────── */
  {
    slug: "get-visible-in-chatgpt",
    title: "Getting visible in ChatGPT: 7 levers for businesses",
    metaTitle: "How to get visible in ChatGPT: 7 levers for businesses (guide)",
    description:
      "How does my company become visible in ChatGPT? Seven concrete levers – from crawlability, content and entity to external sources and monitoring.",
    category: "Praxis",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 7,
    author: "fabian",
    topics: ["ChatGPT SEO", "ChatGPT optimisation", "get visible in ChatGPT", "get recommended by ChatGPT"],
    answer:
      "A company becomes more visible in ChatGPT when ChatGPT understands it unambiguously, finds up-to-date information about it and trustworthy sources mention it in the right context. The most important levers are crawlability, content with clear answers, a consistent brand entity, external mentions and regular measurement. Nobody can guarantee a mention.",
    body: [
      { type: "h2", text: "Lever 1: Access for OpenAI's crawlers" },
      {
        type: "p",
        text: "For web search in ChatGPT, OpenAI uses the OAI-SearchBot crawler. If it is blocked via robots.txt, a firewall or a CDN rule, ChatGPT cannot use your pages as a source. Check these settings first.",
      },
      { type: "h2", text: "Lever 2: Content that is readable without JavaScript" },
      {
        type: "p",
        text: "Important content should be present directly in the delivered HTML. Pages whose text is only loaded in the browser via JavaScript are difficult or impossible for many crawlers to read.",
      },
      { type: "h2", text: "Lever 3: Answer specific questions" },
      {
        type: "p",
        text: "Users don't ask ChatGPT “tax adviser Munich”, but “Which tax adviser in Munich is good for self-employed people?”. Pages that answer such questions directly in the first paragraph and back them up with facts are more likely to be selected as a source.",
      },
      { type: "h2", text: "Lever 4: An unambiguous brand entity" },
      {
        type: "p",
        text: "Name, services, locations and people should be described identically on the website, in company profiles and in directories. Contradictions lead a model to classify a brand vaguely or incorrectly. More on this in [Entity Optimization](/en/insights/entity-optimization).",
      },
      { type: "h2", text: "Lever 5: Presence in the right third-party sources" },
      {
        type: "p",
        text: "For comparison questions, ChatGPT often relies on comparison articles, specialist portals, review platforms and industry directories. Which sources are relevant in your industry is shown by a source analysis in the [GEO Audit](/en/geo-audit).",
      },
      { type: "h2", text: "Lever 6: Don't forget Bing" },
      {
        type: "p",
        text: "Clean indexing in Bing is a sensible foundation for AI visibility overall – not least because [Microsoft Copilot](/en/insights/copilot-and-claude) builds on it. Register your website in Bing Webmaster Tools.",
      },
      { type: "h2", text: "Lever 7: Measure instead of guessing" },
      {
        type: "p",
        text: "A single test in ChatGPT tells you little, because answers vary. What makes sense is a fixed catalogue of questions that is queried and evaluated regularly – see [Measuring AI Visibility](/en/ai-visibility).",
      },
      {
        type: "quote",
        text: "Serious GEO work does not manipulate models. It ensures that accurate information about a company is easy to find, unambiguous and credibly substantiated.",
      },
    ],
    related: [
      { label: "ChatGPT SEO: service and approach", href: "/en/chatgpt-seo" },
      { label: "ChatGPT recommends your competitors?", href: "/en/insights/chatgpt-recommends-competitors" },
      { label: "Request a free AI visibility check", href: "/en/geo-audit" },
    ],
    sources: [{ label: "OpenAI: Overview of OpenAI Crawlers", href: "https://platform.openai.com/docs/bots" }],
  },
];
