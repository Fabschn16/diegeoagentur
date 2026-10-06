/**
 * Zweisprachigkeit: Deutsch unter /, Englisch unter /en/.
 * `routes` ordnet jeder deutschen Seite ihr englisches Gegenstück zu – für den Sprachumschalter und hreflang.
 * Seiten ohne Gegenstück (z. B. Impressum, Datenschutz) fehlen hier bewusst.
 */
import { articleSlugs } from "./en/articleSlugs";

export type Locale = "de" | "en";

export const routes: [de: string, en: string][] = [
  ["/", "/en"],
  ["/leistungen", "/en/services"],
  ["/geo-agentur", "/en/geo-agency"],
  ["/generative-engine-optimization", "/en/generative-engine-optimization"],
  ["/geo-audit", "/en/geo-audit"],
  ["/geo-beratung", "/en/geo-consulting"],
  ["/ai-visibility", "/en/ai-visibility"],
  ["/chatgpt-seo", "/en/chatgpt-seo"],
  ["/gemini-seo", "/en/gemini-seo"],
  ["/perplexity-seo", "/en/perplexity-seo"],
  ["/google-ai-overviews", "/en/google-ai-overviews"],
  ["/ueber-uns", "/en/about"],
  ["/fakten", "/en/facts"],
  ["/kontakt", "/en/contact"],
  ["/ratgeber", "/en/insights"],
  ...Object.entries(articleSlugs).map(([de, en]) => [`/ratgeber/${de}`, `/en/insights/${en}`] as [string, string]),
];

const strip = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

export const localeOf = (path: string): Locale => (strip(path) === "/en" || path.startsWith("/en/") ? "en" : "de");

/** Gegenstück einer Seite in der anderen Sprache, sonst die Startseite der Zielsprache. Anker (#…) bleiben erhalten. */
export function switchPath(path: string, to: Locale): string {
  const [p, hash] = path.split("#");
  const clean = strip(p);
  const from = localeOf(clean);
  if (from === to) return path;
  const hit = routes.find(([de, en]) => (from === "de" ? de : en) === clean);
  const target = hit ? (to === "de" ? hit[0] : hit[1]) : to === "de" ? "/" : "/en";
  return hash ? `${target}#${hash}` : target;
}

/** hreflang-Alternativen für eine Seite (leer, wenn es kein Gegenstück gibt). */
export function languageAlternates(path: string): Record<string, string> | undefined {
  const clean = strip(path.split("#")[0]);
  const hit = routes.find(([de, en]) => de === clean || en === clean);
  if (!hit) return undefined;
  return { de: hit[0], en: hit[1], "x-default": hit[0] };
}

/** Kurze UI-Texte, die in gemeinsamen Komponenten vorkommen. */
export const ui = {
  de: {
    skip: "Zum Inhalt springen",
    home: "Start",
    breadcrumbs: "Brotkrumen",
    services: "Leistungen",
    byPlatform: "Nach Plattform",
    allServices: "Alle Leistungen im Überblick",
    whatIsAgency: "Was macht eine GEO Agentur?",
    focus: "Schwerpunkte",
    mainNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    language: "Sprache",
    atAGlance: "Auf einen Blick",
    shortAnswer: "Kurz erklärt",
    logoLabel: "Die GEO Agentur – Startseite",
    consulting: "GEO Beratung",
    agency: "GEO Agentur",
    audit: "GEO Audit",
    platformsCol: "Plattformen",
    agencyCol: "Agentur",
    about: "Über uns",
    facts: "Fakten zur Agentur",
    whatIsGeo: "Was ist GEO?",
    knowledge: "GEO Wissen",
    visibilityCheck: "Sichtbarkeits-Check",
    contact: "Kontakt",
    imprint: "Impressum",
    privacy: "Datenschutz",
    footerBlurb:
      "Spezialisierte Agentur für Generative Engine Optimization. Wir sorgen dafür, dass Unternehmen in KI-Antworten sichtbar, verstanden und als relevante Quelle genannt werden.",
    footerSlogan: ["Werden Sie zur", "Quelle."],
    offeredBy: "Ein Angebot der",
    optimisedFor: "Optimiert für",
    related: "Verwandte Themen",
    source: "Quelle",
    personal: "Fabian & Jan antworten persönlich",
    emailTo: "E-Mail an",
  },
  en: {
    skip: "Skip to content",
    home: "Home",
    breadcrumbs: "Breadcrumbs",
    services: "Services",
    byPlatform: "By platform",
    allServices: "All services at a glance",
    whatIsAgency: "What does a GEO agency do?",
    focus: "Focus areas",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
    atAGlance: "At a glance",
    shortAnswer: "In short",
    logoLabel: "Die GEO Agentur – Home",
    consulting: "GEO Consulting",
    agency: "GEO Agency",
    audit: "GEO Audit",
    platformsCol: "Platforms",
    agencyCol: "Agency",
    about: "About us",
    facts: "Agency facts",
    whatIsGeo: "What is GEO?",
    knowledge: "GEO Insights",
    visibilityCheck: "Visibility check",
    contact: "Contact",
    imprint: "Legal notice (German)",
    privacy: "Privacy policy (German)",
    footerBlurb:
      "A specialised agency for Generative Engine Optimization. We make sure companies are visible, understood and cited as a relevant source in AI answers.",
    footerSlogan: ["Become the", "source."],
    offeredBy: "A service of",
    optimisedFor: "Optimised for",
    related: "Related topics",
    source: "Source",
    personal: "Fabian & Jan reply personally",
    emailTo: "Email",
  },
} as const;
