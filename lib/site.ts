/**
 * Zentrale Entitätsdaten. Überall auf der Website (Texte, Schema.org, llms.txt)
 * werden ausschließlich diese Werte verwendet – so bleibt die Markenentität konsistent.
 *
 * Optional vor Livegang: eigenes Postfach (email), bookingUrl.
 */
export const site = {
  name: "Die GEO Agentur",
  shortName: "GEO Agentur",
  url: "https://diegeoagentur.de",
  locale: "de_DE",
  description:
    "Die GEO Agentur ist eine spezialisierte Agentur für Generative Engine Optimization (GEO). Wir optimieren Unternehmen dafür, in ChatGPT, Gemini, Perplexity und Google AI Overviews sichtbar, verstanden und als relevante Quelle berücksichtigt zu werden.",
  tagline: "Spezialisten für Performance, Daten und die neue Generation der Suche.",
  // Bis ein eigenes Postfach für diegeoagentur.de eingerichtet ist
  email: "fabian@dailyrocket.de",
  phone: "+49 151 51910936",
  phoneDisplay: "0151 51910 936",
  // Optional: z. B. Calendly-Link. Leer = Verlinkung auf /kontakt
  bookingUrl: "",
  legalEntity: "Daily Rocket GmbH",
  legal: {
    managingDirectors: ["Fabian Schnabel", "Jan Hugo"],
    registerCourt: "Amtsgericht Passau",
    registerNumber: "HRB 12137",
    vatId: "DE361515954",
    contentResponsible: "Jan Hugo",
    hours: "Mo–Fr, 9:00–18:00 Uhr",
  },
  address: {
    street: "Lindental 32",
    postalCode: "94032",
    city: "Passau",
    region: "Bayern",
    country: "DE",
  },
  areaServed: "Deutschland",
  foundingDate: "2019",
  sister: {
    name: "Daily Rocket",
    url: "https://dailyrocket.de",
    description: "Performance-Marketing-Agentur für Google Ads, Tracking und KI",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/dailyrocket",
    instagram: "https://www.instagram.com/dailyrocket.de",
  },
} as const;

export const team = [
  {
    id: "jan",
    name: "Jan Hugo",
    firstName: "Jan",
    role: "Search, Tracking & KI",
    focus: "Technische Grundlagen, Datenmodelle, Tracking-Architektur und KI-gestützte Analyse.",
    image: "/images/team/jan.jpg",
    // Gesichtsmitte im Porträt – für runde Avatare
    face: "50% 27%",
    email: "jan@dailyrocket.de",
  },
  {
    id: "fabian",
    name: "Fabian Schnabel",
    firstName: "Fabian",
    role: "Strategie & Kundenbetreuung",
    focus: "Positionierung, Strategie und die direkte Zusammenarbeit mit Geschäftsführung und Marketing.",
    image: "/images/team/fabian.jpg",
    face: "50% 40%",
    email: "fabian@dailyrocket.de",
  },
] as const;

/**
 * Belegte Kennzahlen von dailyrocket.de (Stand: September 2026).
 * Nur Werte, die dort öffentlich angegeben sind.
 */
export const provenStats = [
  { value: "seit 2010", label: "Erfahrung im Performance Marketing" },
  { value: "100+", label: "betreute Kunden über Daily Rocket" },
  { value: "20+ Mio. €", label: "Ad Spend jährlich in Verantwortung" },
] as const;

/**
 * Kunden von Daily Rocket, die laut Fabian (Okt. 2026) auch im Bereich KI/GEO betreut werden.
 * Logos werden direkt von dailyrocket.de geladen. Die Dateinamen enthalten Build-Hashes:
 * nach einem Relaunch von dailyrocket.de die Pfade prüfen oder die Logos lokal unter public/ ablegen.
 */
export const clients = [
  { name: "Thomas Hoof Produktgesellschaft", logo: "https://dailyrocket.de/assets/thpg-Ciyzp-O4.svg" },
  { name: "TBR Safety Solutions", logo: "https://dailyrocket.de/assets/tbr-safety-CciYfUph.png" },
  { name: "MAX2H", logo: "https://dailyrocket.de/assets/max2h-BLo4s8CG.png" },
  { name: "Bogner Metall", logo: "https://dailyrocket.de/assets/bogner-metall-BWh-cqdE.png" },
  { name: "Venitec", logo: "https://dailyrocket.de/assets/venitec-DdER8rOQ.svg" },
  { name: "Elbmatch", logo: "https://dailyrocket.de/assets/elbmatch-GyO0MV6A.svg" },
  { name: "Movemates", logo: "https://dailyrocket.de/assets/movemates-BdWqdlmW.jpg" },
  { name: "Stealth Performance", logo: "https://dailyrocket.de/assets/stealth-performance-CwzKjlfw.png" },
  { name: "Pure Natural Choice", logo: "https://dailyrocket.de/assets/pure-natural-choice-BKmpemAs.png" },
  { name: "Zwoo", logo: "https://dailyrocket.de/assets/zwoo-B5En6F0K.png" },
  { name: "Essbare Landschaften", logo: "https://dailyrocket.de/assets/essbare-landschaften-DdN7Fj_g.svg" },
  { name: "Hof in der Au", logo: "https://dailyrocket.de/assets/hof-in-der-au-Co4qHlEm.svg" },
  { name: "Deutsche Entrümpelungskonzepte", logo: "https://dailyrocket.de/assets/deutsche-entruempelungskonzepte-BCZwJBah.webp" },
  { name: "Rhein Umzüge", logo: "https://dailyrocket.de/assets/rhein-umzuege-u7_JekXO.png" },
  { name: "Rohrreinigung Priller", logo: "https://dailyrocket.de/assets/rohrreinigung-priller-BoRGRBfu.png" },
  { name: "Pflegedienst Perle", logo: "https://dailyrocket.de/assets/pflegedienst-perle-B-0TlDTH.png" },
  { name: "Tierarztpraxis Steininger", logo: "https://dailyrocket.de/assets/tierarztpraxis-steininger-u0Krmy6B.png" },
  { name: "MTZ Taxi", logo: "https://dailyrocket.de/assets/mtz-taxi-C87ZOo6q.png" },
] as const;

export const cta = {
  primary: { label: "KI-Sichtbarkeit prüfen lassen", href: "/geo-audit#check" },
  primaryShort: { label: "KI-Sichtbarkeit prüfen", href: "/geo-audit#check" },
  secondary: { label: "Erstgespräch vereinbaren", href: "/kontakt" },
} as const;

export const bookingHref = site.bookingUrl || cta.secondary.href;

export const platforms = [
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Google AI Overviews",
  "Claude",
  "Copilot",
  "Meta AI",
] as const;

/** Einstiegspreise – zentral gepflegt, auf allen Seiten identisch. Alle Preise netto zzgl. MwSt. */
export const pricing = {
  check: "kostenlos",
  audit: "ab 1.249 €",
  optimization: "ab 949 € / Monat",
  workshop: "ab 949 €",
  note: "Alle Preise netto zzgl. MwSt.",
};
