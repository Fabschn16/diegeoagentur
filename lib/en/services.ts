import type { Service } from "@/lib/services";

/** Englische Fassung von lib/services.ts – gleiche Struktur, Links unter /en/. */
export const coreServicesEn: Service[] = [
  {
    id: "audit",
    index: "01",
    title: "GEO Audit",
    short: "Where your brand stands in AI answers today.",
    description:
      "We systematically analyse whether and how ChatGPT, Gemini, Perplexity and Google AI Overviews present your brand today, and why.",
    pointsLabel: "We answer",
    points: [
      "Where is your brand already mentioned?",
      "For which questions, and for which not?",
      "Which competitors are named instead?",
      "Which sources does the AI rely on?",
      "Which topics are missing from your presence?",
    ],
    href: "/en/geo-audit",
  },
  {
    id: "monitoring",
    index: "02",
    title: "AI Visibility Monitoring",
    short: "Measure visibility instead of guessing.",
    description:
      "We continuously measure how your presence in AI answers develops, using a fixed prompt catalogue that is relevant to your business.",
    pointsLabel: "Reported by",
    points: ["Platform", "Topic", "Prompt", "Competitor", "Citation & source", "Development over time"],
    href: "/en/ai-visibility",
  },
  {
    id: "content",
    index: "03",
    title: "Content for AI Search",
    short: "Content that convinces people and that machines can cite.",
    description:
      "We create and revise content so that it is clear to people and unambiguous, verifiable and citable for AI systems.",
    pointsLabel: "This includes",
    points: [
      "Landing pages",
      "Guides",
      "FAQs",
      "Comparison content",
      "Definition pages",
      "Expert content",
      "Structured answers",
    ],
    href: "/en/services#content",
  },
  {
    id: "entitaeten",
    index: "04",
    title: "Entity Optimization",
    short: "So AI understands exactly who you are.",
    description:
      "Language models think in entities, not keywords. We make sure your company is described consistently and unmistakably across the web.",
    pointsLabel: "AI clearly understands",
    points: [
      "Who your company is",
      "What it offers",
      "Where it operates",
      "Where its expertise lies",
      "Which people and brands belong to it",
    ],
    href: "/en/services#entitaeten",
  },
  {
    id: "technik",
    index: "05",
    title: "Technical GEO",
    short: "A website that machines can read.",
    description:
      "Many websites are built for people but hard for AI crawlers to read. We create the technical foundation that everything else builds on.",
    pointsLabel: "Focus areas",
    points: [
      "Structured data & Schema.org",
      "Clean, server-rendered HTML",
      "Crawlability for AI bots",
      "Internal linking",
      "Information architecture",
      "llms.txt where it makes sense",
      "Technical SEO fundamentals",
    ],
    href: "/en/services#technik",
  },
  {
    id: "autoritaet",
    index: "06",
    title: "Digital Authority",
    short: "What others say about you counts too.",
    description:
      "AI systems do not rely only on what your own website says. We strengthen the external signals that prove your expertise.",
    pointsLabel: "We look at",
    points: [
      "Relevant mentions",
      "Industry portals",
      "Company profiles",
      "Directories",
      "Press",
      "Expert sources",
      "Topical authority",
    ],
    href: "/en/services#autoritaet",
  },
];

export const platformServicesEn = [
  {
    id: "chatgpt",
    title: "ChatGPT SEO",
    short: "Relevant mentions and sources in ChatGPT, including ChatGPT search.",
    href: "/en/chatgpt-seo",
  },
  {
    id: "gemini",
    title: "Gemini SEO",
    short: "Visibility in Google's AI assistant and the sources behind it.",
    href: "/en/gemini-seo",
  },
  {
    id: "aio",
    title: "Google AI Overviews",
    short: "Presence in the AI summaries directly in Google Search.",
    href: "/en/google-ai-overviews",
  },
  {
    id: "perplexity",
    title: "Perplexity SEO",
    short: "Become a source in an answer engine with visible citations.",
    href: "/en/perplexity-seo",
  },
] as const;

export const processStepsEn = [
  {
    index: "01",
    title: "Analysis",
    text: "We analyse your brand, website, competitors and your current visibility in AI answers.",
    output: "Baseline analysis",
  },
  {
    index: "02",
    title: "Strategy",
    text: "We identify the questions, topics and sources potential customers use when looking for solutions.",
    output: "Prioritised roadmap",
  },
  {
    index: "03",
    title: "Implementation",
    text: "We optimise technical foundations, content, entities and external signals.",
    output: "Measures implemented",
  },
  {
    index: "04",
    title: "Monitoring",
    text: "We regularly measure how your visibility develops across platforms and topics.",
    output: "Monthly reporting",
  },
  {
    index: "05",
    title: "Optimisation",
    text: "Based on real data, we keep adjusting where the impact is greatest.",
    output: "Ongoing fine-tuning",
  },
] as const;
