/**
 * Englische Fassungen der zentralen Texte aus lib/site.ts.
 * Fakten (Name, Adresse, Kontakt, Logos) kommen weiterhin ausschließlich aus lib/site.ts.
 * Zielgruppe: Unternehmen in ganz Europa; Preise bleiben netto in Euro.
 */
export const siteEn = {
  locale: "en_GB",
  description:
    "Die GEO Agentur is a specialised agency for Generative Engine Optimization (GEO). We optimise companies to be visible, understood and cited as a relevant source in ChatGPT, Gemini, Perplexity and Google AI Overviews.",
  tagline: "Specialists in performance, data and the new generation of search.",
  areaServed: "Europe",
  hours: "Mon–Fri, 9:00–18:00 CET",
};

export const teamRolesEn: Record<string, { role: string; focus: string }> = {
  jan: {
    role: "Search, Tracking & AI",
    focus: "Technical foundations, data models, tracking architecture and AI-assisted analysis.",
  },
  fabian: {
    role: "Strategy & Client Services",
    focus: "Positioning, strategy and working directly with management and marketing teams.",
  },
};

export const provenStatsEn = [
  { value: "since 2010", label: "Experience in performance marketing" },
  { value: "100+", label: "Clients served through Daily Rocket" },
  { value: "€20M+", label: "Annual ad spend under management" },
] as const;

export const ctaEn = {
  primary: { label: "Check my AI visibility", href: "/en/geo-audit#check" },
  primaryShort: { label: "Check AI visibility", href: "/en/geo-audit#check" },
  secondary: { label: "Book an intro call", href: "/en/contact" },
} as const;

/** Einstiegspreise auf Englisch – Werte identisch mit `pricing` in lib/site.ts. */
export const pricingEn = {
  check: "free",
  audit: "from €1,249",
  optimization: "from €949 / month",
  workshop: "from €949",
  note: "All prices net, excluding VAT.",
};
