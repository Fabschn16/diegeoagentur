import type { QA } from "@/components/ui/QASection";

type PlatformExtra = {
  metaTitle: string;
  metaDescription: string;
  qaTitle: [string, string];
  qa: QA[];
  related: { label: string; href: string; note?: string }[];
};

/**
 * English version of content/platformQa.ts: answer-first sections and internal links per platform page.
 * Ratgeber links point to the English articles under /en/insights/.
 */
export const platformExtrasEn: Record<string, PlatformExtra> = {
  "chatgpt-seo": {
    metaTitle: "ChatGPT SEO: Get Visible in ChatGPT & Cited as a Source",
    metaDescription:
      "What is ChatGPT SEO and how does ChatGPT search work? How ChatGPT selects sources, which factors matter and how Die GEO Agentur makes companies visible in ChatGPT.",
    qaTitle: ["ChatGPT SEO", "in detail."],
    qa: [
      {
        id: "was-ist-chatgpt-seo",
        q: "What is ChatGPT SEO?",
        a: [
          "ChatGPT SEO is the optimisation of a company so that ChatGPT describes it correctly, mentions it for relevant questions and links to it as a source. The term borrows from classic search engine optimisation, but it is not about ranking in a list of results. It is about being present in a written answer.",
          "ChatGPT SEO is one part of [Generative Engine Optimization (GEO)](/en/generative-engine-optimization), which covers all AI search systems.",
        ],
      },
      {
        id: "chatgpt-search",
        q: "How does ChatGPT search work?",
        a: [
          "For questions that need current or specific information, ChatGPT searches the web, reads relevant pages and summarises them into an answer with source links. To discover and fetch pages for search, OpenAI uses the OAI-SearchBot crawler; when a user opens a page directly via ChatGPT, the ChatGPT-User user agent appears.",
          "Without web search, ChatGPT answers from the knowledge the model learned in training. For this knowledge, what counts is how consistently and how often a company has been described on the web over time.",
        ],
      },
      {
        id: "quellenauswahl",
        q: "How does ChatGPT select sources?",
        a: [
          "OpenAI does not disclose the exact weighting. What can be observed is that ChatGPT prefers to cite pages that are accessible, answer the specific question directly, appear up to date and are credible on their topic. For questions about providers, ChatGPT often draws on comparison articles, specialist portals, directories and review platforms, not just on vendors' own websites.",
          "Why this often leads to competitors being mentioned is explained in the article [Why does ChatGPT recommend my competitors?](/en/insights/chatgpt-recommends-competitors).",
        ],
      },
      {
        id: "faktoren",
        q: "Which factors influence visibility in ChatGPT?",
        a: [
          "Five factors are decisive: technical access for the OpenAI crawlers, content that is readable server-side, pages with clear and well-supported answers, an unambiguous brand entity and mentions in the third-party sources of your industry.",
          "None of these factors works on its own. A technically perfect website without external confirmation stays just as invisible as a well-known brand whose website is blocked for crawlers.",
        ],
      },
      {
        id: "externe-quellen",
        q: "What role do external sources play for ChatGPT?",
        a: [
          "External sources play a major role, because ChatGPT often assembles statements about providers from several independent pages. If you are missing from industry comparisons, trade articles or directories, you will be considered less often for recommendation questions, even with an excellent website of your own.",
          "Building this presence is part of our [Digital Authority](/en/services#autoritaet) service and relies exclusively on genuine, editorially relevant mentions.",
        ],
      },
      {
        id: "messen",
        q: "How do you measure visibility in ChatGPT?",
        a: [
          "You measure it with a fixed catalogue of typical customer questions that are asked regularly and repeatedly. The analysis covers mention rate, citations of your own website, the context of the mention and the comparison with competitors. Visits from ChatGPT can also be analysed in your web analytics.",
          "How we do this on an ongoing basis is shown in [AI Visibility Monitoring](/en/ai-visibility).",
        ],
      },
      {
        id: "agentur",
        q: "How does a GEO agency support ChatGPT SEO?",
        a: [
          "A GEO agency first analyses what ChatGPT currently says about a company and its competitors, and derives measures from this: technical fixes, new or revised content, entity maintenance and building external sources. It then measures whether the way you are presented changes.",
          "With us, the starting point is a [GEO Audit](/en/geo-audit). What a GEO agency does overall and what it costs is described on the page [GEO Agency](/en/geo-agency).",
        ],
      },
    ],
    related: [
      { label: "Getting visible in ChatGPT", href: "/en/insights/get-visible-in-chatgpt", note: "Practical guide" },
      { label: "Why ChatGPT recommends competitors", href: "/en/insights/chatgpt-recommends-competitors", note: "Causes and countermeasures" },
      { label: "ChatGPT Shopping and ChatGPT ads", href: "/en/insights/chatgpt-shopping-and-ads", note: "Organic recommendation vs. ads" },
      { label: "Measuring AI visibility", href: "/en/ai-visibility", note: "Monitoring and metrics" },
      { label: "What is Generative Engine Optimization?", href: "/en/generative-engine-optimization", note: "Fundamentals and glossary" },
    ],
  },

  "gemini-seo": {
    metaTitle: "Gemini SEO: Improve Your Visibility in Google Gemini",
    metaDescription:
      "Gemini SEO explained: how Google Gemini finds information, what role Google Search plays and how companies are presented correctly in Gemini answers. By Die GEO Agentur.",
    qaTitle: ["Gemini SEO", "in detail."],
    qa: [
      {
        id: "was-ist-gemini-seo",
        q: "What is Gemini SEO?",
        a: [
          "Gemini SEO is the optimisation that ensures Google's AI assistant Gemini describes a company correctly and considers it for relevant questions. Because Gemini is closely linked to Google Search, Gemini SEO overlaps heavily with classic search engine optimisation and with optimisation for [Google AI Overviews](/en/google-ai-overviews).",
        ],
      },
      {
        id: "funktionsweise",
        q: "How does Gemini find information about companies?",
        a: [
          "Alongside the knowledge in its trained model, Gemini uses Google Search to support answers with current information. This makes the same fundamentals relevant as for Google: indexable pages, clear content, structured data and a well-maintained business profile.",
          "For the use of content to train and ground Gemini models, Google provides a separate control token, Google-Extended, in robots.txt. According to Google, it does not affect ranking in regular Google Search.",
        ],
      },
      {
        id: "faktoren",
        q: "Which factors influence visibility in Gemini?",
        a: [
          "What matters is good organic visibility in Google, unambiguous information about your company, services and locations, a complete Google Business Profile for local providers, structured data and mentions in sources that Google considers trustworthy.",
        ],
      },
      {
        id: "unterschied-chatgpt",
        q: "How does Gemini SEO differ from ChatGPT SEO?",
        a: [
          "The most important difference is the data basis: Gemini relies on Google's index and Google's knowledge of entities, ChatGPT on its own crawlers and its own search partners. If you are well positioned in Google, you usually have a better starting point in Gemini, but that is no guarantee of being mentioned.",
          "More about ChatGPT on the page [ChatGPT SEO](/en/chatgpt-seo).",
        ],
      },
      {
        id: "messen",
        q: "How do you measure visibility in Gemini?",
        a: [
          "As with other AI systems, using a fixed prompt catalogue that is queried and analysed regularly. Gemini answers can vary by account, location and conversation history, so what counts is the trend across many queries. Methodology: [Measuring AI visibility](/en/insights/measure-ai-visibility).",
        ],
      },
    ],
    related: [
      { label: "Google AI Overviews optimisation", href: "/en/google-ai-overviews", note: "AI answers in Google Search" },
      { label: "Entity Optimization", href: "/en/insights/entity-optimization", note: "Your brand as an unambiguous entity" },
      { label: "Measuring AI visibility", href: "/en/ai-visibility", note: "Monitoring and metrics" },
      { label: "What is AI search?", href: "/en/insights/what-is-ai-search", note: "How AI search works" },
    ],
  },

  "perplexity-seo": {
    metaTitle: "Perplexity SEO: Get Cited as a Source in Perplexity",
    metaDescription:
      "Perplexity SEO explained: how Perplexity searches for and cites sources, which content it prefers and how your website becomes a cited source. By Die GEO Agentur.",
    qaTitle: ["Perplexity SEO", "in detail."],
    qa: [
      {
        id: "was-ist-perplexity-seo",
        q: "What is Perplexity SEO?",
        a: [
          "Perplexity SEO is the optimisation that ensures Perplexity draws on a website as a source and cites it. Because Perplexity shows visible sources for almost every answer, the link between website content and AI answer is particularly direct here.",
        ],
      },
      {
        id: "funktionsweise",
        q: "How does Perplexity work?",
        a: [
          "Perplexity is an answer engine: for each question it searches the web in real time, reads several pages and summarises them into an answer with numbered source references. For crawling, Perplexity uses PerplexityBot; fetches triggered directly by users run via Perplexity-User.",
        ],
      },
      {
        id: "quellenauswahl",
        q: "Which content does Perplexity prefer to cite?",
        a: [
          "Perplexity does not disclose its selection criteria in detail. In practice, it often cites pages that answer a question precisely and early, are well structured, include current data and provide evidence. Long promotional copy without concrete statements is rarely cited.",
          "How to build this kind of content is described in the article [Answer Engine Optimization](/en/insights/answer-engine-optimization).",
        ],
      },
      {
        id: "faktoren",
        q: "Which factors influence visibility in Perplexity?",
        a: [
          "The key factors are access for PerplexityBot, fast-loading pages that are readable without JavaScript, answer-first content, freshness with a visible date and presence in the sources Perplexity already cites frequently on your topic.",
        ],
      },
      {
        id: "messen",
        q: "How do you measure visibility in Perplexity?",
        a: [
          "With a fixed prompt catalogue in which the cited sources are recorded for every answer. This shows whether and with which pages your website is cited, and which third-party sources shape the answers. Visits from Perplexity can also be analysed in your web analytics. More on this: [AI Visibility Monitoring](/en/ai-visibility).",
        ],
      },
    ],
    related: [
      { label: "Answer Engine Optimization", href: "/en/insights/answer-engine-optimization", note: "Building content as answers" },
      { label: "Measuring AI visibility", href: "/en/insights/measure-ai-visibility", note: "Methodology in detail" },
      { label: "ChatGPT SEO", href: "/en/chatgpt-seo", note: "Visibility in ChatGPT" },
      { label: "GEO Audit", href: "/en/geo-audit", note: "Your current status in AI search" },
    ],
  },

  "google-ai-overviews": {
    metaTitle: "Google AI Overviews Optimisation: Appear in AI Overviews",
    metaDescription:
      "Google AI Overviews optimisation: what AI Overviews and AI Mode are, how Google selects sources and how your content gets linked in AI Overviews. By Die GEO Agentur.",
    qaTitle: ["Google AI Overviews", "in detail."],
    qa: [
      {
        id: "was-sind-ai-overviews",
        q: "What are Google AI Overviews?",
        a: [
          "Google AI Overviews (called “Übersicht mit KI” in German) are AI-generated summaries that Google displays above the classic results for many search queries. They answer the question directly and link to the pages the summary is based on. In addition, Google offers AI Mode, a conversational AI search.",
        ],
      },
      {
        id: "quellenauswahl",
        q: "How does Google select sources for AI Overviews?",
        a: [
          "AI Overviews rely on Google's search index. Google states that the same fundamentals apply to AI Overviews as to regular search: pages must be indexed and eligible for a snippet; there is no special annotation or dedicated markup.",
          "In practice, pages that answer a sub-question particularly clearly are often linked, even if they are not at the very top of the classic results.",
        ],
      },
      {
        id: "faktoren",
        q: "Which factors influence visibility in AI Overviews?",
        a: [
          "What matters is indexing and technical quality, content that answers specific questions in clear sections, verifiable expertise with identifiable authors, up-to-date information and good baseline organic visibility on the topic.",
          "How classic SEO differs from optimising for AI answers is explained in the article [SEO vs. GEO](/en/insights/geo-vs-seo).",
        ],
      },
      {
        id: "klicks",
        q: "Do websites lose clicks because of AI Overviews?",
        a: [
          "That depends heavily on the type of search query. For simple informational questions, the overview often answers the question completely, so fewer users click. Pages that are linked as a source, on the other hand, stay visible and reach users who want to dig deeper. That is why it pays to work specifically towards being linked in AI Overviews.",
        ],
      },
      {
        id: "messen",
        q: "How do you measure visibility in AI Overviews?",
        a: [
          "Google Search Console does not currently report impressions and clicks from AI Overviews separately. Measurement is therefore based on regularly checking relevant search terms and recording whether an overview appears and which pages are linked. More on this in the article [Google AI Overviews for businesses](/en/insights/google-ai-overviews-for-businesses).",
        ],
      },
    ],
    related: [
      { label: "Google AI Overviews for businesses", href: "/en/insights/google-ai-overviews-for-businesses", note: "Guide" },
      { label: "Google AI Mode", href: "/en/insights/google-ai-mode", note: "Google Search's AI mode" },
      { label: "Gemini SEO", href: "/en/gemini-seo", note: "Visibility in Google Gemini" },
      { label: "SEO vs. GEO", href: "/en/insights/geo-vs-seo", note: "Differences and common ground" },
      { label: "What is Generative Engine Optimization?", href: "/en/generative-engine-optimization", note: "Fundamentals and glossary" },
    ],
  },
};
