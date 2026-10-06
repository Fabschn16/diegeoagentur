/**
 * Ratgeber-Artikel: deutscher Slug (/ratgeber/…) → englischer Slug (/en/insights/…).
 * Bewusst eine kleine eigene Datei, damit Sprachumschalter und hreflang nicht die ganzen Artikeltexte laden.
 */
export const articleSlugs: Record<string, string> = {
  "was-ist-ai-search": "what-is-ai-search",
  "answer-engine-optimization": "answer-engine-optimization",
  "llm-optimization": "llm-optimization",
  "google-ai-overviews-unternehmen": "google-ai-overviews-for-businesses",
  "copilot-und-claude": "copilot-and-claude",
  "in-chatgpt-sichtbar-werden": "get-visible-in-chatgpt",
  "chatgpt-empfiehlt-wettbewerber": "chatgpt-recommends-competitors",
  "ki-sichtbarkeit-messen": "measure-ai-visibility",
  "geo-audit-ablauf": "geo-audit-process",
  "geo-vs-seo": "geo-vs-seo",
  "entity-optimization": "entity-optimization",
  "geo-strategie": "geo-strategy",
  "meta-ai": "meta-ai",
  "google-ai-mode": "google-ai-mode",
  "chatgpt-shopping-und-werbung": "chatgpt-shopping-and-ads",
  "methodik-prompt-katalog": "methodology-prompt-catalogue",
  "geo-saas": "geo-for-saas",
  "geo-e-commerce": "geo-for-ecommerce",
  "geo-kanzleien-steuerberater": "geo-for-law-and-tax-firms",
};
