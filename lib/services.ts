export type Service = {
  id: string;
  index: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  pointsLabel: string;
  href: string;
};

export const coreServices: Service[] = [
  {
    id: "audit",
    index: "01",
    title: "GEO Audit",
    short: "Wo Ihre Marke in KI-Antworten heute steht.",
    description:
      "Wir analysieren systematisch, ob und wie ChatGPT, Gemini, Perplexity und Google AI Overviews Ihre Marke heute darstellen – und warum.",
    pointsLabel: "Wir beantworten",
    points: [
      "Wo wird Ihre Marke bereits genannt?",
      "Bei welchen Fragen – und bei welchen nicht?",
      "Welche Wettbewerber werden stattdessen genannt?",
      "Welche Quellen verwendet die KI?",
      "Welche Themen fehlen in Ihrem Auftritt?",
    ],
    href: "/geo-audit",
  },
  {
    id: "monitoring",
    index: "02",
    title: "AI Visibility Monitoring",
    short: "Sichtbarkeit messen statt vermuten.",
    description:
      "Wir messen kontinuierlich, wie sich Ihre Präsenz in KI-Antworten entwickelt – über einen festen, für Ihr Geschäft relevanten Prompt-Katalog.",
    pointsLabel: "Auswertung nach",
    points: ["Plattform", "Thema", "Prompt", "Wettbewerber", "Citation & Quelle", "Entwicklung über Zeit"],
    href: "/ai-visibility",
  },
  {
    id: "content",
    index: "03",
    title: "Content für AI Search",
    short: "Inhalte, die Menschen überzeugen und Maschinen zitieren können.",
    description:
      "Wir entwickeln und überarbeiten Inhalte so, dass sie für Menschen verständlich und für KI-Systeme eindeutig, belegbar und zitierfähig sind.",
    pointsLabel: "Dazu gehören",
    points: [
      "Landingpages",
      "Ratgeber",
      "FAQ",
      "Vergleichsinhalte",
      "Definitionsseiten",
      "Experteninhalte",
      "Strukturierte Antworten",
    ],
    href: "/leistungen#content",
  },
  {
    id: "entitaeten",
    index: "04",
    title: "Entity Optimization",
    short: "Damit KI eindeutig versteht, wer Sie sind.",
    description:
      "Sprachmodelle denken in Entitäten, nicht in Keywords. Wir sorgen dafür, dass Ihr Unternehmen im gesamten Web konsistent und unmissverständlich beschrieben ist.",
    pointsLabel: "KI versteht eindeutig",
    points: [
      "Wer Ihr Unternehmen ist",
      "Was es anbietet",
      "Wo es tätig ist",
      "Wofür es Expertise besitzt",
      "Welche Personen und Marken dazugehören",
    ],
    href: "/leistungen#entitaeten",
  },
  {
    id: "technik",
    index: "05",
    title: "Technical GEO",
    short: "Eine Website, die Maschinen lesen können.",
    description:
      "Viele Websites sind für Menschen gebaut, aber für KI-Crawler schwer lesbar. Wir schaffen die technische Grundlage, auf der alles Weitere aufbaut.",
    pointsLabel: "Schwerpunkte",
    points: [
      "Strukturierte Daten & Schema.org",
      "Sauberes, serverseitig ausgeliefertes HTML",
      "Crawlability für KI-Bots",
      "Interne Verlinkung",
      "Informationsarchitektur",
      "llms.txt, wo sinnvoll",
      "Technische SEO-Grundlagen",
    ],
    href: "/leistungen#technik",
  },
  {
    id: "autoritaet",
    index: "06",
    title: "Digital Authority",
    short: "Was andere über Sie sagen, zählt mit.",
    description:
      "KI-Systeme verlassen sich nicht nur auf Aussagen auf Ihrer eigenen Website. Wir stärken die externen Signale, die Ihre Expertise belegen.",
    pointsLabel: "Wir betrachten",
    points: [
      "Relevante Erwähnungen",
      "Fachportale",
      "Unternehmensprofile",
      "Verzeichnisse",
      "Presse",
      "Expertenquellen",
      "Thematische Autorität",
    ],
    href: "/leistungen#autoritaet",
  },
];

export const platformServices = [
  {
    id: "chatgpt",
    title: "ChatGPT SEO",
    short: "Relevante Erwähnungen und Quellen in ChatGPT – inklusive ChatGPT-Suche.",
    href: "/chatgpt-seo",
  },
  {
    id: "gemini",
    title: "Gemini SEO",
    short: "Sichtbarkeit in Googles KI-Assistent und dessen Quellenlandschaft.",
    href: "/gemini-seo",
  },
  {
    id: "aio",
    title: "Google AI Overviews",
    short: "Präsenz in den KI-Zusammenfassungen direkt in der Google-Suche.",
    href: "/google-ai-overviews",
  },
  {
    id: "perplexity",
    title: "Perplexity SEO",
    short: "Als Quelle in einer Answer Engine mit sichtbaren Quellenangaben.",
    href: "/perplexity-seo",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Analyse",
    text: "Wir analysieren Marke, Website, Wettbewerb und Ihre aktuelle Sichtbarkeit in KI-Antworten.",
    output: "Ist-Analyse",
  },
  {
    index: "02",
    title: "Strategie",
    text: "Wir identifizieren die Fragen, Themen und Quellen, über die potenzielle Kunden nach Lösungen suchen.",
    output: "Priorisierte Roadmap",
  },
  {
    index: "03",
    title: "Umsetzung",
    text: "Wir optimieren technische Grundlagen, Content, Entitäten und externe Signale.",
    output: "Umgesetzte Maßnahmen",
  },
  {
    index: "04",
    title: "Monitoring",
    text: "Wir messen regelmäßig, wie sich Ihre Sichtbarkeit über Plattformen und Themen entwickelt.",
    output: "Monatliches Reporting",
  },
  {
    index: "05",
    title: "Optimierung",
    text: "Auf Basis realer Daten steuern wir kontinuierlich nach – dort, wo die Wirkung am größten ist.",
    output: "Laufende Nachsteuerung",
  },
] as const;
