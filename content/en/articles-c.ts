import type { Article } from "@/content/articles";

/**
 * English translation of content/articles-2.ts (GEO Insights, October 2026):
 * industry guides, new platform topics (AI Mode, ChatGPT Shopping & Ads) and our published methodology.
 */
const OKT_2026 = "2026-10-01";

export const articlesEnC: Article[] = [
  /* ───────────────────────────── PLATFORMS ───────────────────────────── */
  {
    slug: "meta-ai",
    title: "Meta AI: What Businesses Should Know About the AI Assistant in WhatsApp, Instagram and Facebook",
    metaTitle: "Meta AI for Businesses: Visibility in Meta's AI Assistant",
    description:
      "Meta AI is built into WhatsApp, Instagram, Facebook and Messenger. How the AI assistant uses information from the web, which Meta crawlers matter and what businesses can do to be visible.",
    category: "Plattformen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 5,
    author: "jan",
    topics: ["Meta AI", "WhatsApp", "Instagram", "AI crawlers", "AI Visibility"],
    answer:
      "Meta AI is Meta's AI assistant, built directly into WhatsApp, Instagram, Facebook and Messenger. In Germany it has been available since March 2025. Meta AI can draw on information from the internet; for this, Meta operates its own crawlers, which website owners can control in their robots.txt. For businesses, the same fundamentals apply as with other AI assistants: accessible pages, clear answers and an unambiguous brand entity.",
    body: [
      { type: "h2", text: "What is Meta AI?" },
      {
        type: "p",
        text: "Meta AI is a chat assistant that users open via a round blue icon in WhatsApp, Instagram, Facebook and Messenger. In WhatsApp it can also be addressed in group chats with “@Meta AI”. When it launched in Europe in March 2025, Meta AI was available as a text-only assistant; features such as image and voice recognition that exist in the US were initially missing.",
      },
      {
        type: "p",
        text: "The difference from ChatGPT or Perplexity: users don't need to open a separate app. Meta AI is available where many people already communicate every day. As a result, questions about recommendations, providers or products now also end up in messaging apps.",
      },
      { type: "h2", text: "Which Meta crawlers matter" },
      {
        type: "p",
        text: "Meta documents several crawlers with different purposes. Each can be controlled separately in robots.txt:",
      },
      {
        type: "table",
        head: ["Crawler", "Purpose according to Meta"],
        rows: [
          ["Meta-WebIndexer", "Improves the quality and relevance of search results in Meta AI"],
          ["Meta-ExternalFetcher", "Fetches individual links when users request it"],
          ["Meta-ExternalAgent", "Training AI models and indexing content for products"],
          ["facebookexternalhit", "Generates link previews when content is shared in Meta apps"],
        ],
      },
      {
        type: "p",
        text: "If you want Meta AI to take your current information into account, don't block Meta-WebIndexer and Meta-ExternalFetcher. Whether you additionally allow your content to be used for training via Meta-ExternalAgent is, as with GPTBot, a strategic decision that we discuss with clients in the [GEO Audit](/en/geo-audit).",
      },
      { type: "h2", text: "What businesses can do" },
      {
        type: "ol",
        items: [
          "Check robots.txt, firewall and CDN rules so that the Meta crawlers can reach your pages.",
          "Content that answers specific questions in the first sentence – see [Answer Engine Optimization](/en/insights/answer-engine-optimization).",
          "A clear, consistent description of your brand across website, profiles and directories – see [Entity Optimization](/en/insights/entity-optimization).",
          "Well-maintained company presences on Facebook and Instagram with the same details as on your website.",
          "Regular measurement using a fixed prompt catalogue that includes Meta AI – see [AI Visibility](/en/ai-visibility).",
        ],
      },
      { type: "h2", text: "What can't be said (yet)" },
      {
        type: "p",
        text: "Meta does not disclose in detail how Meta AI selects and weights sources for an answer. So far there is no reliable evidence on whether, for example, an active Instagram presence directly influences mentions in Meta AI. We therefore treat Meta AI like any other platform: measure what actually appears in the answers and derive actions from that. Nobody can guarantee a mention.",
      },
    ],
    related: [
      { label: "Microsoft Copilot and Claude", href: "/en/insights/copilot-and-claude" },
      { label: "ChatGPT SEO", href: "/en/chatgpt-seo" },
      { label: "Measuring AI Visibility", href: "/en/ai-visibility" },
    ],
    sources: [
      { label: "Meta for Developers: Meta Web Crawlers", href: "https://developers.facebook.com/docs/sharing/webmasters/web-crawlers" },
      { label: "heise online: Meta AI launches in the EU (in German)", href: "https://heise.de/-10322059" },
      { label: "BASIC thinking: Meta AI launches in Germany (20 March 2025, in German)", href: "https://www.basicthinking.de/blog/2025/03/20/meta-ai-deutschlandstart" },
    ],
  },
  {
    slug: "google-ai-mode",
    title: "Google AI Mode: What Businesses Need to Know Now",
    metaTitle: "Google AI Mode: What Businesses Need to Know",
    description:
      "Google AI Mode explained: how the AI mode of Google Search builds answers, how it differs from AI Overviews and how businesses become visible there as a source.",
    category: "Plattformen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["Google AI Mode", "AI Mode", "Google AI Overviews", "Query fan-out", "Generative Engine Optimization"],
    answer:
      "Google AI Mode is a conversational AI search within Google Search. Instead of a list of results, it delivers a detailed AI-generated answer with links to its sources and allows follow-up questions. In Germany, AI Mode has been available in German since October 2025 (where it is called “KI-Modus”). For businesses, the same fundamentals apply as for Google Search: indexable pages, clear answers and an unambiguous brand entity.",
    body: [
      { type: "h2", text: "What is Google AI Mode?" },
      {
        type: "p",
        text: "AI Mode is a separate area of Google Search, accessible via a tab or an icon next to the search box. Users ask longer, more complex questions there, including by voice or image, and can follow up in a dialogue. The answer is based on a customised Gemini model and on Google's search index.",
      },
      { type: "h2", text: "AI Mode vs. AI Overviews: the difference" },
      {
        type: "table",
        head: ["", "AI Overviews", "AI Mode"],
        rows: [
          ["Where", "Above the regular search results", "Separate area of Google Search"],
          ["Trigger", "Google decides per query", "User deliberately chooses the mode"],
          ["Answer", "Short summary", "Detailed answer with follow-up questions"],
          ["Classic results", "Directly below", "Not in the foreground"],
        ],
      },
      {
        type: "p",
        text: "According to Google, the same applies to both formats: there are no additional technical requirements and no special markup. A page must be indexed and eligible to be shown with a snippet. More on the overviews on our page [Google AI Overviews optimisation](/en/google-ai-overviews).",
      },
      { type: "h2", text: "How AI Mode builds answers" },
      {
        type: "p",
        text: "For AI Mode, Google describes a technique in which a question is broken down into several sub-questions that are searched in parallel (“query fan-out”). The results are then combined into one answer. For businesses, this means that not only the main question counts, but also the sub-questions behind it – for example about costs, process, alternatives or requirements.",
      },
      { type: "h2", text: "How businesses become visible in AI Mode" },
      {
        type: "ol",
        items: [
          "Ensure indexing: important pages must show as indexed in Google Search Console.",
          "Answer the sub-questions: structure pages so that costs, process, differences and requirements are each answered in their own clearly headed sections.",
          "Answer first: every section starts with the direct answer – the principle is described in the article [Answer Engine Optimization](/en/insights/answer-engine-optimization).",
          "Strengthen your entity: the same details about company, services and location on your website, Google Business Profile and directories – see [Entity Optimization](/en/insights/entity-optimization).",
          "External confirmation: mentions in expert sources that Google draws on for your topic.",
        ],
      },
      { type: "h2", text: "How do you measure visibility in AI Mode?" },
      {
        type: "p",
        text: "Google Search Console combines data from the AI features with regular web search; there is no separate report just for AI Mode. A more reliable approach is to regularly query a fixed catalogue of questions and record whether, and with which page, your company is linked. That is how we work in [AI Visibility Monitoring](/en/ai-visibility).",
      },
    ],
    related: [
      { label: "Google AI Overviews optimisation", href: "/en/google-ai-overviews" },
      { label: "Gemini SEO", href: "/en/gemini-seo" },
      { label: "Google AI Overviews: what businesses should know", href: "/en/insights/google-ai-overviews-for-businesses" },
    ],
    sources: [
      { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      { label: "onlinemarketing.de: Using Google AI Mode in Germany now (14 October 2025, in German)", href: "https://onlinemarketing.de/seo/google-ai-mode-jetzt-in-deutschland-nutzen" },
    ],
  },
  {
    slug: "chatgpt-shopping-and-ads",
    title: "ChatGPT Shopping and ChatGPT Ads: What Businesses Should Know",
    metaTitle: "ChatGPT Shopping & ChatGPT Ads: Organic vs. Paid",
    description:
      "How ChatGPT recommends products, what product feeds have to do with it and how the ChatGPT ads launched in Germany in August 2026 work – and what that means for GEO.",
    category: "Plattformen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 7,
    author: "fabian",
    topics: ["ChatGPT Shopping", "ChatGPT Ads", "ChatGPT advertising", "Product feeds", "Agentic commerce", "E-commerce GEO"],
    answer:
      "There are two ways for a provider to appear in front of users in ChatGPT: organically, when ChatGPT recommends a product or company in its answer, and paid, through ads that OpenAI has also been serving in Germany since the end of August 2026. According to OpenAI, ads do not influence the answers and are labelled as “Sponsored”. Organic recommendations therefore remain a separate task – and that is exactly where GEO comes in.",
    body: [
      { type: "h2", text: "How ChatGPT recommends products" },
      {
        type: "p",
        text: "For purchase questions, ChatGPT searches the web, compares offers and shows products with images, prices and links to retailers. This is based on web pages, reviews, comparisons and – for participating merchants – structured product data. OpenAI stresses that these results are not ads and are not influenced by partnerships.",
      },
      { type: "h2", text: "Product feeds: what changed in 2026" },
      {
        type: "p",
        text: "In September 2025, OpenAI launched “Instant Checkout”, which allowed purchases to be completed directly in ChatGPT. In March 2026, OpenAI shifted the focus to product discovery: merchants supply structured product feeds with title, description, images, price and availability, and the purchase is completed in their own shop. Which merchant features are available in Germany keeps changing – check the current status directly with OpenAI.",
      },
      { type: "h2", text: "ChatGPT ads in Germany" },
      {
        type: "ul",
        items: [
          "Launch: end of August 2026 in Germany and other European markets.",
          "Who sees ads: users on the Free and Go plans. Plus, Pro, Business, Enterprise and Edu remain ad-free.",
          "Placement: below the answer, labelled as “Sponsored”.",
          "Targeting in the EU: based on conversation context, approximate location and device; personalised advertising only with explicit consent.",
          "Buying: prices, minimum volumes and billing models were not public at launch.",
        ],
      },
      { type: "h2", text: "Organic or paid: which matters more?" },
      {
        type: "table",
        head: ["", "Organic recommendation (GEO)", "ChatGPT ad"],
        rows: [
          ["Position", "In the answer itself", "Below the answer, marked as an ad"],
          ["Who sees it", "All users", "Only Free and Go users"],
          ["Cost", "Building content, entity and sources", "Media budget per impression or click"],
          ["Effect", "Credibility of a recommendation", "Immediate presence for as long as the budget runs"],
        ],
      },
      {
        type: "p",
        text: "The two are not mutually exclusive. Ads buy presence, but not a recommendation. If you want to be named in the answer itself, you need the fundamentals from [ChatGPT SEO](/en/chatgpt-seo): accessible pages, clear product and service information, an unambiguous brand and mentions in comparisons and reviews.",
      },
      { type: "h2", text: "Checklist for retailers and brands" },
      {
        type: "ol",
        items: [
          "Allow OAI-SearchBot in robots.txt so that product pages can be reached by ChatGPT search.",
          "Maintain complete, structured product data (Schema.org Product, Offer, price, availability).",
          "Create buying-guide content: comparisons, use cases, size and selection guides.",
          "Be present in the reviews and comparison sites that ChatGPT cites for your category.",
          "Measure visibility – more on this in the guide [GEO for e-commerce](/en/insights/geo-for-ecommerce).",
        ],
      },
    ],
    related: [
      { label: "ChatGPT SEO", href: "/en/chatgpt-seo" },
      { label: "GEO for e-commerce", href: "/en/insights/geo-for-ecommerce" },
      { label: "How to get visible in ChatGPT", href: "/en/insights/get-visible-in-chatgpt" },
    ],
    sources: [
      { label: "techinformed: OpenAI refocuses ChatGPT shopping on discovery (2026)", href: "https://techinformed.com/openai-refocuses-chatgpt-shopping-on-discovery/" },
      { label: "onlinemarketing.de: OpenAI launches ChatGPT ads in Germany (in German)", href: "https://onlinemarketing.de/technologie/openai-startet-chatgpt-werbung-in-deutschland-eu-datenschutz" },
      { label: "W&V: How ChatGPT Ads work at launch in Germany (in German)", href: "https://www.wuv.de/themen/ki-tech/so-funktionieren-chatgpt-ads-zum-start-in-deutschland" },
      { label: "OpenAI Help Center: Improved shopping results in ChatGPT search", href: "https://help.openai.com/en/articles/11128490-improved-shopping-results-in-chatgpt-search" },
    ],
  },

  /* ───────────────────────────── PRACTICE ───────────────────────────── */
  {
    slug: "methodology-prompt-catalogue",
    title: "Our Methodology: How We Measure AI Visibility with a Prompt Catalogue",
    metaTitle: "Methodology: Measuring AI Visibility with a Prompt Catalogue",
    description:
      "The published measurement methodology of Die GEO Agentur: how we select questions, query AI systems, analyse answers and deal with fluctuations.",
    category: "Praxis",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 7,
    author: "jan",
    topics: ["Prompt catalogue", "AI Visibility", "Measuring AI visibility", "Methodology", "Share of voice"],
    answer:
      "We measure AI visibility using a fixed catalogue of questions that real customers ask. Each question is asked several times in the agreed AI systems under documented conditions; each answer is analysed against fixed criteria: mention, position, context, citation and accuracy. We disclose the catalogue and the rules to our clients in full, so that every result can be traced.",
    body: [
      {
        type: "p",
        text: "This article describes exactly how we proceed. The general principles of measurement are explained in the article [Measuring AI visibility](/en/insights/measure-ai-visibility).",
      },
      { type: "h2", text: "1. Selecting questions" },
      {
        type: "p",
        text: "The catalogue is built together with the client from sources that reflect real demand: sales and support conversations, search queries from Search Console, questions from forums and reviews. We organise it by intent:",
      },
      {
        type: "table",
        head: ["Type", "Example", "What it shows"],
        rows: [
          ["Category question", "Which providers are there for …?", "Is the brand mentioned at all?"],
          ["Comparison question", "X or Y – which is better for …?", "How is the brand positioned against competitors?"],
          ["Problem question", "How do I solve …?", "Is the brand recognised as a solution?"],
          ["Brand question", "What does [brand] do? Is [brand] trustworthy?", "Is the brand portrayed correctly?"],
          ["Regional question", "… in [region]", "Is the location assigned correctly?"],
        ],
      },
      {
        type: "p",
        text: "The number of questions depends on topics, markets and products and is set out in the proposal. Once defined, the core of the catalogue stays stable so that developments remain comparable over months; new questions are added on top.",
      },
      { type: "h2", text: "2. Querying under documented conditions" },
      {
        type: "ul",
        items: [
          "Systems: the agreed platforms, e.g. ChatGPT, Gemini, Perplexity and Google AI Overviews.",
          "Repetition: every question is asked several times, because answers vary.",
          "Neutral state: new sessions without conversation history and without personalised context.",
          "Log: date, system, mode (e.g. with or without web search) and location are recorded for each query.",
        ],
      },
      { type: "h2", text: "3. Analysing answers" },
      {
        type: "table",
        head: ["Criterion", "What we record"],
        rows: [
          ["Mention", "Does the brand appear in the answer – yes or no?"],
          ["Position", "Is it named first, in the middle or at the end?"],
          ["Context", "Recommendation, neutral mention or critical portrayal?"],
          ["Citation", "Is the brand's own website linked as a source – with which page?"],
          ["Accuracy", "Are services, location, prices and positioning correct?"],
          ["Competitors", "Which other providers are named?"],
          ["Third-party sources", "Which websites shape the answer?"],
        ],
      },
      { type: "h2", text: "4. Building metrics" },
      {
        type: "p",
        text: "From the individual analyses we calculate the mention rate (share of answers with a mention), share of voice (the brand's mentions relative to all providers named) and citation rate. We report metrics per platform and per question type, not just as an overall figure – otherwise a good score for brand questions hides weak visibility for category questions.",
      },
      { type: "h2", text: "5. Dealing with fluctuations" },
      {
        type: "p",
        text: "AI answers are not deterministic, and providers change their models continuously. That is why we assess trends across several measurements rather than individual outliers, and note known model changes in the reporting. For us, a single test question has no evidential value.",
      },
      { type: "h2", text: "What we deliberately don't do" },
      {
        type: "ul",
        items: [
          "No guarantees of mentions or positions – AI answers cannot be guaranteed.",
          "No manipulation through hidden text, fake reviews or artificial mass mentions.",
          "No metrics without disclosed questions: every figure can be traced back to the underlying answers.",
        ],
      },
      {
        type: "p",
        text: "This methodology is the basis for our [GEO Audit](/en/geo-audit) and ongoing [AI Visibility Monitoring](/en/ai-visibility).",
      },
    ],
    related: [
      { label: "AI Visibility Monitoring", href: "/en/ai-visibility" },
      { label: "Measuring AI visibility: the basics", href: "/en/insights/measure-ai-visibility" },
      { label: "GEO Audit: process and contents", href: "/en/insights/geo-audit-process" },
    ],
  },

  /* ───────────────────────────── STRATEGY (industries) ───────────────────────────── */
  {
    slug: "geo-for-saas",
    title: "GEO for SaaS: How Software Vendors Get Recommended in AI Answers",
    metaTitle: "GEO for SaaS Companies: Get Recommended in ChatGPT & Co.",
    description:
      "Generative Engine Optimization for SaaS: which questions software buyers ask ChatGPT, why comparison sites are decisive and which content AI systems cite.",
    category: "Strategie",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "fabian",
    topics: ["GEO for SaaS", "ChatGPT software recommendations", "B2B SaaS marketing", "Comparison sites", "Generative Engine Optimization"],
    answer:
      "GEO is particularly relevant for SaaS companies because software buyers increasingly start their research in AI systems with questions like “Which tool is suitable for …?”. Whether a vendor is named depends mainly on three things: clearly described use cases on its own website, up-to-date feature and pricing information, and presence on comparison sites, review platforms and in expert articles.",
    body: [
      { type: "h2", text: "Which questions software buyers ask" },
      {
        type: "ul",
        items: [
          "Category questions: “Which CRM software is suitable for small agencies?”",
          "Comparison questions: “Tool A or Tool B – which is better for …?”",
          "Requirement questions: “Which software is GDPR-compliant and has servers in Germany?”",
          "Integration questions: “Which tools can be connected to …?”",
          "Alternative questions: “What are the alternatives to …?”",
        ],
      },
      { type: "h2", text: "What AI systems draw on for SaaS recommendations" },
      {
        type: "p",
        text: "For software questions, AI answers often rely on review platforms, comparison articles, lists such as “The best tools for …”, documentation and vendor websites. A strong website of your own is therefore rarely enough: external confirmation often decides whether a tool makes it onto the answer's shortlist.",
      },
      { type: "h2", text: "The most important levers for SaaS" },
      {
        type: "ol",
        items: [
          "Use-case pages: one page per target group or purpose that describes specifically who the tool is for and which problem it solves.",
          "Honest comparison pages: your own side-by-side comparisons with competitors, factual and verifiable – without disparaging claims.",
          "Up-to-date facts: prices, features, integrations, hosting location and certifications in one place, machine-readable and dated.",
          "Keep documentation publicly accessible: help centres and API documentation are frequently cited sources.",
          "Reviews and comparisons: genuine customer reviews on relevant platforms and presence in editorial tool comparisons.",
          "Maintain your entity: consistent product name, category and vendor details everywhere – see [Entity Optimization](/en/insights/entity-optimization).",
        ],
      },
      { type: "h2", text: "Common mistakes" },
      {
        type: "ul",
        items: [
          "Prices and features only behind a login or in PDFs – invisible to crawlers.",
          "Homepages full of slogans but without a clear statement of what the product is.",
          "Outdated feature information on comparison sites that AI systems keep citing.",
        ],
      },
      {
        type: "p",
        text: "A [GEO Audit](/en/geo-audit) shows where your tool stands today in ChatGPT, Gemini and Perplexity. How to track category and comparison questions regularly is described in [AI Visibility Monitoring](/en/ai-visibility).",
      },
    ],
    related: [
      { label: "Why ChatGPT recommends your competitors", href: "/en/insights/chatgpt-recommends-competitors" },
      { label: "Developing a GEO strategy", href: "/en/insights/geo-strategy" },
      { label: "What does a GEO agency do?", href: "/en/geo-agency" },
    ],
  },
  {
    slug: "geo-for-ecommerce",
    title: "GEO for E-Commerce: How Online Shops Appear in AI Shopping Advice",
    metaTitle: "GEO for E-Commerce: Make Products Visible in ChatGPT & Co.",
    description:
      "Generative Engine Optimization for online shops: how AI systems recommend products, what role product data, reviews and buying guides play, and what shops can do in practice.",
    category: "Strategie",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["GEO for e-commerce", "ChatGPT Shopping", "Product data", "Buying guides", "Google AI Mode"],
    answer:
      "For online shops, GEO determines whether products appear in AI-assisted shopping advice – in ChatGPT, Google AI Mode, AI Overviews or Perplexity. What matters is complete, structured product data, content that answers real purchase questions, and mentions in the reviews and comparisons that AI systems rely on for recommendations.",
    body: [
      { type: "h2", text: "How AI systems recommend products" },
      {
        type: "p",
        text: "For a question like “Which running shoes are good for beginners?”, AI systems look for buying guides, reviews, product pages and ratings and combine them into a recommendation. Retailers and brands whose products are well described and frequently mentioned in these sources are more likely to end up in the answer.",
      },
      { type: "h2", text: "The most important levers for shops" },
      {
        type: "ol",
        items: [
          "Maintain complete product data: title, attributes, dimensions, material, price and availability – in the HTML and as structured data (Schema.org Product and Offer).",
          "Buying guides, not just category pages: guides that answer selection questions (“Who is … suitable for?”, “What is the difference between …?”).",
          "Answer product questions directly: FAQs on product pages with real customer questions from customer service and reviews.",
          "Collect genuine reviews and make them visible – never bought or fabricated ones.",
          "Build presence in the reviews and comparison sites for your category.",
          "Check crawler access: shop systems sometimes block AI crawlers via firewall or bot rules.",
        ],
      },
      { type: "h2", text: "ChatGPT Shopping and ads" },
      {
        type: "p",
        text: "For purchase questions, ChatGPT shows product cards with prices and retailer links, and since August 2026 ads have also been running in ChatGPT in Germany. What this means for shops is explained in the article [ChatGPT Shopping and ChatGPT Ads](/en/insights/chatgpt-shopping-and-ads).",
      },
      { type: "h2", text: "What shops should measure" },
      {
        type: "ul",
        items: [
          "Mentions for category and selection questions (“best … for …”).",
          "Which products are named – and whether prices and attributes are correct.",
          "Which reviews and portals shape the answers.",
          "Visits and revenue from AI systems in web analytics.",
        ],
      },
      {
        type: "p",
        text: "Our [GEO Audit](/en/geo-audit) shows for which purchase questions your shop is named today and who is recommended instead.",
      },
    ],
    related: [
      { label: "ChatGPT Shopping and ChatGPT Ads", href: "/en/insights/chatgpt-shopping-and-ads" },
      { label: "Google AI Mode", href: "/en/insights/google-ai-mode" },
      { label: "Perplexity SEO", href: "/en/perplexity-seo" },
    ],
  },
  {
    slug: "geo-for-law-and-tax-firms",
    title: "GEO for Law Firms and Tax Advisers: Visible in AI Answers – Factual and Compliant with Professional Rules",
    metaTitle: "GEO for Law Firms & Tax Advisers: Visible in ChatGPT",
    description:
      "How law firms and tax advisory practices become visible in ChatGPT, Gemini and Google AI Overviews – with factual content that fits the advertising rules of their profession, using Germany as the example.",
    category: "Strategie",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "fabian",
    topics: ["GEO for law firms", "GEO for tax advisers", "Lawyer ChatGPT", "Find a tax adviser with AI", "Local AI visibility"],
    answer:
      "Law firms and tax advisory practices are named in AI answers mainly when their areas of law or specialism, locations and contacts are clearly described and independent sources – directories, professional chamber listings, expert articles, reviews – confirm these details. GEO fits well with professional advertising rules such as those in Germany: it relies on factual, verifiable information rather than promotional promises.",
    body: [
      { type: "h2", text: "How clients search today" },
      {
        type: "p",
        text: "Many legal and tax questions now start as a question to an AI system: “What do I need to consider when I've been dismissed from my job?” or “Which tax adviser in Passau specialises in solar panels?”. The AI answers the first question with explanations and the second with specific names. For firms, both count: being cited as an expert source and being named as a provider.",
      },
      { type: "h2", text: "The professional rules framework" },
      {
        type: "p",
        text: "In Germany, lawyers may only advertise under Section 43b of the Federal Lawyers' Act (BRAO) to the extent that they provide factual information about their professional activities; for tax advisers, Section 57a of the Tax Advisers Act (StBerG) contains a corresponding rule. Other countries have their own professional rules, which this article does not cover. GEO content fits this framework well because it relies on factual information: clear details on areas of practice, understandable expert articles, verifiable facts. Promotional superlatives or promises of success, on the other hand, are neither advisable under professional rules nor helpful for AI systems. This article does not replace a case-by-case review under professional law.",
      },
      { type: "h2", text: "The most important levers" },
      {
        type: "ol",
        items: [
          "Areas of practice as separate pages: one page per area of law or specialism that explains what the firm helps with and for whom.",
          "Expert articles with the answer first: clear explanations of typical client questions, with author, date and sources (statutes, court rulings).",
          "Make people visible: professionals with qualifications such as, in Germany, the titles “Fachanwalt” (certified specialist lawyer) or “Fachberater” (certified specialist adviser), each with their own profile.",
          "Keep location data consistent: website, Google Business Profile, chamber and lawyer directories.",
          "Genuine client reviews – respecting professional confidentiality, never commissioned or fake.",
          "External expert presence: guest articles, talks, quotes in the regional press.",
        ],
      },
      { type: "h2", text: "What firms should measure" },
      {
        type: "p",
        text: "A question catalogue in two parts makes sense: expert questions where the firm should be cited as a source, and provider questions with location and area of law where it should be named. How we build such catalogues is described in our [methodology](/en/insights/methodology-prompt-catalogue).",
      },
    ],
    related: [
      { label: "Entity Optimization", href: "/en/insights/entity-optimization" },
      { label: "Answer Engine Optimization", href: "/en/insights/answer-engine-optimization" },
      { label: "GEO Audit", href: "/en/geo-audit" },
    ],
    sources: [
      { label: "Section 43b BRAO, German Federal Lawyers' Act (gesetze-im-internet.de, in German)", href: "https://www.gesetze-im-internet.de/brao/__43b.html" },
      { label: "Section 57a StBerG, German Tax Advisers Act (gesetze-im-internet.de, in German)", href: "https://www.gesetze-im-internet.de/stberg/__57a.html" },
    ],
  },
];
