import type { PlatformPageData } from "@/lib/platforms";
import { platformExtrasEn } from "@/content/en/platformQa";

/** English version of lib/platforms.ts (same shape, EN paths). */
const basePagesEn: Record<string, PlatformPageData> = {
  "chatgpt-seo": {
    slug: "chatgpt-seo",
    name: "ChatGPT SEO",
    eyebrow: "ChatGPT SEO",
    metaTitle: "ChatGPT SEO – get mentioned in ChatGPT answers",
    metaDescription:
      "ChatGPT SEO by Die GEO Agentur: we optimise your company to be presented correctly, mentioned and linked as a source in ChatGPT and ChatGPT search.",
    h1: ["ChatGPT SEO:", "Become part of the answer."],
    lead: "For many people, ChatGPT is the first place they ask about providers, products and solutions. We make sure your company is understood correctly there and considered for relevant questions.",
    answer:
      "ChatGPT SEO is the optimisation that ensures a company is presented correctly, mentioned and linked as a source in ChatGPT's answers. It combines solid technical foundations with clear, citable content, an unambiguous brand entity and mentions in the sources ChatGPT relies on.",
    glance: [
      { k: "Platform", v: "ChatGPT by OpenAI, including ChatGPT search" },
      { k: "Relevant crawlers", v: "OAI-SearchBot (search), GPTBot (training), ChatGPT-User (user requests)" },
      { k: "Key levers", v: "Crawlability, citable content, entity, third-party sources" },
      { k: "Measurement", v: "Mention rate, citations, context via a fixed prompt catalogue" },
    ],
    howTitle: ["How ChatGPT", "forms its answers."],
    how: [
      "ChatGPT answers questions in two ways. First, from the knowledge the model learned in training. Second, via ChatGPT search: ChatGPT searches the web in real time, summarises relevant pages and links to them as sources.",
      "For trained knowledge, what counts is how consistently and how often your company is described on the web. For search, what counts is whether your pages are accessible to OpenAI's search crawler and answer the specific question more precisely than other sources.",
    ],
    levers: [
      { t: "Access for OpenAI crawlers", d: "We check robots.txt, firewall and CDN rules so that OAI-SearchBot can reach your content." },
      { t: "Server-side readable content", d: "Important content sits directly in the HTML, not only after JavaScript rendering." },
      { t: "Answers, not ad copy", d: "Pages that answer specific customer questions in the first paragraph and back them up with facts." },
      { t: "Unambiguous brand entity", d: "The same description of services, locations and people on your website, profiles and directories." },
      { t: "Presence in third-party sources", d: "Comparison articles, specialist portals and industry lists that ChatGPT draws on for your topics." },
      { t: "Continuous monitoring", d: "Regular queries of a fixed prompt catalogue, including a competitor comparison." },
    ],
    faq: [
      {
        q: "How do I find out what ChatGPT says about my company?",
        a: [
          "The most reliable way is a structured query of many relevant questions, not a single test question. That is exactly what our free visibility check does: we ask ChatGPT and other systems the way your customers ask, and show you the results.",
        ],
      },
      {
        q: "Can ChatGPT give out incorrect information about my company?",
        a: [
          "Yes. Language models can repeat outdated or incorrect details, for example about services, prices or locations. The most effective countermeasure is clear, current and consistent information on your own website and in the sources the model draws on.",
        ],
      },
      {
        q: "Do I have to allow GPTBot in robots.txt?",
        a: [
          "Not necessarily. GPTBot collects content for training models, OAI-SearchBot for ChatGPT search. Both can be controlled separately. If you want to appear as a source in ChatGPT search, you should allow OAI-SearchBot. Whether to allow GPTBot is a strategic decision we make together with you.",
        ],
      },
      {
        q: "Do you guarantee a mention in ChatGPT?",
        a: [
          "No. ChatGPT answers are generated dynamically and cannot be guaranteed. We improve the conditions for a mention and measure transparently how your visibility develops.",
        ],
      },
    ],
    sources: [{ label: "OpenAI: Overview of OpenAI Crawlers", href: "https://platform.openai.com/docs/bots" }],
  },

  "gemini-seo": {
    slug: "gemini-seo",
    name: "Gemini SEO",
    eyebrow: "Gemini SEO",
    metaTitle: "Gemini SEO – visible in Google Gemini",
    metaDescription:
      "Gemini SEO by Die GEO Agentur: we optimise companies to be visible and presented correctly in Google Gemini answers, based on the Google index, entities and structured data.",
    h1: ["Gemini SEO:", "Visible in Google's AI assistant."],
    lead: "Gemini is built into Android, Google Workspace and the Google app. If you are well set up in the Google ecosystem, you have the best starting point, but not an automatic mention.",
    answer:
      "Gemini SEO is the optimisation that ensures a company is visible and presented correctly in Google Gemini's answers. The foundation is a strong presence in the Google ecosystem: indexable content, structured data, a well-maintained business profile and clear entity signals.",
    glance: [
      { k: "Platform", v: "Google Gemini (app, web, Android, Workspace)" },
      { k: "Data basis", v: "Trained model knowledge and Google Search as grounding" },
      { k: "Control", v: "Google-Extended in robots.txt" },
      { k: "Key levers", v: "Google index, entity, structured data, authority" },
    ],
    howTitle: ["How Gemini", "forms its answers."],
    how: [
      "Gemini combines the knowledge of the language model with current information from Google Search. Companies that are well indexed in Google, clearly structured and clearly recognisable as an entity benefit from this.",
      "One special feature is Google-Extended: with this entry in robots.txt, website owners control whether Google may use their content for Gemini models and for grounding in Gemini. Appearance in Google Search and in AI Overviews is not affected.",
    ],
    levers: [
      { t: "Technical SEO foundation", d: "Indexing, page quality and snippet eligibility as a prerequisite for any Google AI." },
      { t: "Entity in the Knowledge Graph", d: "Unambiguous organisation, people and service data that Google can attribute to a brand." },
      { t: "Structured data", d: "Schema.org for organisation, services, people, articles and FAQ." },
      { t: "Google Business Profile", d: "For regionally active companies: complete, up to date and consistent with the website." },
      { t: "Clear answer structure", d: "Content with clear definitions, comparisons and step-by-step explanations." },
      { t: "Deliberate crawler decision", d: "Do not block Google-Extended by accident, or block it deliberately and for good reason." },
    ],
    faq: [
      {
        q: "Is Gemini SEO the same as SEO for Google?",
        a: [
          "Not quite. The fundamentals overlap heavily because Gemini draws on Google Search. But Gemini writes its own answers and names only a few providers. So what also matters is how clearly your brand is recognisable as an entity and how citable your content is.",
        ],
      },
      {
        q: "What happens if I block Google-Extended?",
        a: [
          "Then your content may not be used for Gemini models or for grounding in Gemini. Your visibility in classic Google Search and in AI Overviews remains unaffected. For most companies that want to be visible in Gemini, blocking it makes no sense.",
        ],
      },
      {
        q: "How do Gemini and AI Overviews differ?",
        a: [
          "AI Overviews are AI summaries within Google Search. Gemini is Google's standalone AI assistant. Both use Google's infrastructure but are separate products with their own presentation, which is why we look at them separately.",
        ],
      },
    ],
    sources: [
      { label: "Google: Overview of Google crawlers (Google-Extended)", href: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers" },
    ],
  },

  "perplexity-seo": {
    slug: "perplexity-seo",
    name: "Perplexity SEO",
    eyebrow: "Perplexity SEO",
    metaTitle: "Perplexity SEO – get cited as a source in Perplexity",
    metaDescription:
      "Perplexity SEO by Die GEO Agentur: we optimise your website to be selected and cited as a source in Perplexity, with a technical foundation, precise content and monitoring.",
    h1: ["Perplexity SEO:", "Get cited as a source."],
    lead: "Perplexity shows numbered sources with every answer. That makes the platform particularly transparent, and particularly relevant for companies whose customers research thoroughly.",
    answer:
      "Perplexity SEO is the optimisation that ensures a website is selected and cited as a source in Perplexity. Perplexity searches the web in real time for almost every query and shows its sources. Improvements to content and technology therefore often take effect faster there than with purely model-based answers.",
    glance: [
      { k: "Platform", v: "Perplexity, an answer engine with real-time web search" },
      { k: "Relevant crawler", v: "PerplexityBot" },
      { k: "Special feature", v: "Numbered, visible sources with every answer" },
      { k: "Key levers", v: "Crawlability, precision, freshness, source landscape" },
    ],
    howTitle: ["How Perplexity", "selects sources."],
    how: [
      "Perplexity sees itself as an answer engine: for a question, it searches for relevant web pages, reads them and summarises them into an answer with source references. Users see exactly where a statement comes from and click on sources specifically to dig deeper.",
      "It selects pages that answer a question precisely, with current information and good evidence. Besides your own website, specialist portals, comparisons and forums that Perplexity draws on for your topic play a major role.",
    ],
    levers: [
      { t: "Crawlability for PerplexityBot", d: "Access in robots.txt, CDN and firewall, plus fast and stable delivery." },
      { t: "Precise paragraphs", d: "Each section answers one question completely and can be cited on its own." },
      { t: "Make freshness visible", d: "Maintained content with dates, current figures and clear version status." },
      { t: "Evidence and figures", d: "Concrete facts, sources and examples instead of general statements." },
      { t: "Source landscape", d: "Presence on the portals and comparison sites Perplexity cites in your industry." },
      { t: "Measuring citations", d: "How often your domain appears as a source, and for which questions." },
    ],
    faq: [
      {
        q: "Why is Perplexity interesting for B2B companies?",
        a: [
          "Perplexity is often used for thorough research, for example to compare providers or to get to grips with a specialist topic. Because sources are visibly linked, a citation often turns into a qualified visit.",
        ],
      },
      {
        q: "How quickly do optimisations take effect in Perplexity?",
        a: [
          "Because Perplexity searches in real time, improvements to content and technology can take effect comparatively quickly, as soon as the pages have been recrawled. We only make reliable statements based on repeated measurements.",
        ],
      },
      {
        q: "Do I need separate content for Perplexity?",
        a: [
          "Usually not. Good content works across platforms. We do, however, prioritise questions for which Perplexity is used particularly often in your industry, and adapt structure and evidence accordingly.",
        ],
      },
    ],
    sources: [{ label: "Perplexity: Perplexity Crawlers", href: "https://docs.perplexity.ai/guides/bots" }],
  },

  "google-ai-overviews": {
    slug: "google-ai-overviews",
    name: "Google AI Overviews",
    eyebrow: "Google AI Overviews",
    metaTitle: "Google AI Overviews Optimisation – appear in AI Overviews",
    metaDescription:
      "Optimisation for Google AI Overviews: we make sure your content is considered as a source in the AI summaries of Google Search, based on solid SEO and a clear answer structure.",
    h1: ["Google AI Overviews:", "Right at the top – in the answer."],
    lead: "For many search queries, an AI summary now sits above the classic results. If you are linked there as a source, you are seen before the first organic result even begins.",
    answer:
      "Google AI Overviews are AI-generated summaries above the classic search results. They are based on the Google search index and link to selected sources. The prerequisite is indexable pages with solid SEO fundamentals; what then matters is how clearly and verifiably a page answers the specific question.",
    glance: [
      { k: "Platform", v: "Google Search – AI Overviews and AI Mode" },
      { k: "In Germany", v: "As “Übersicht mit KI” since spring 2025" },
      { k: "Reach", v: "Over 2 billion monthly users worldwide (Alphabet, July 2025)" },
      { k: "Prerequisite", v: "Indexed, snippet-eligible pages – no additional technology needed" },
    ],
    howTitle: ["How AI Overviews", "select sources."],
    how: [
      "AI Overviews draw on the regular Google index. According to Google, there are no additional technical requirements: a page must be indexed and eligible for a snippet. Which pages are linked depends on how well they answer individual aspects of the question.",
      "This changes the logic of visibility. It is not only the page in position 1 that can be linked, but the page that explains a particular aspect most clearly. At the same time, classic results are pushed further down.",
    ],
    levers: [
      { t: "SEO foundation", d: "Indexing, page quality, internal linking and Core Web Vitals." },
      { t: "Snippet eligibility", d: "No accidental nosnippet or max-snippet restrictions." },
      { t: "Question-and-answer structure", d: "Key statement in the first paragraph, clear subheadings, lists and tables." },
      { t: "Demonstrate expertise", d: "Authors, evidence, practical experience and traceable sources." },
      { t: "Structured data", d: "Machine-readable facts about your organisation, services and content." },
      { t: "Measurement", d: "Which search queries trigger an AI Overview, and whether your page is linked in it." },
    ],
    faq: [
      {
        q: "Do AI Overviews cost traffic?",
        a: [
          "For some informational questions, users click less often because the answer is already at the top. At the same time, the sources linked in the AI Overview get particularly prominent visibility. What matters is being represented as a source for the questions that are relevant to your business.",
        ],
      },
      {
        q: "Do I need special markup for AI Overviews?",
        a: [
          "No. Google does not name any additional requirements beyond the usual SEO best practices. Structured data helps make content unambiguous, but it is not a prerequisite for inclusion.",
        ],
      },
      {
        q: "What is AI Mode?",
        a: [
          "AI Mode is a separate, conversational search mode from Google in which users can ask more complex questions and follow-up questions. It uses the same basis as AI Overviews but goes into more depth. The same basic principles apply to both.",
        ],
      },
    ],
    sources: [
      { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      {
        label: "TechCrunch: Google's AI Overviews have 2B monthly users (23 July 2025)",
        href: "https://techcrunch.com/2025/07/23/googles-ai-overviews-have-2b-monthly-users-ai-mode-100m-in-the-us-and-india/",
      },
    ],
  },
};

/** Base data plus answer-first Q&A, meta data and internal links from content/en/platformQa.ts */
export const platformPagesEn: Record<string, PlatformPageData> = Object.fromEntries(
  Object.entries(basePagesEn).map(([k, v]) => [k, { ...v, ...(platformExtrasEn[k] ?? {}) }]),
);
