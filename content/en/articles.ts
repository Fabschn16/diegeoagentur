/**
 * GEO Insights – englische Fassung des Ratgebers „GEO Wissen“ (/en/insights/).
 * Gleiche Struktur wie content/articles.ts; `category` bleibt der interne deutsche Schlüssel und wird über `categoriesEn` beschriftet.
 */
import type { Article, Cluster } from "@/content/articles";
import { articleSlugs } from "@/lib/en/articleSlugs";
import { articlesEnA } from "./articles-a";
import { articlesEnB } from "./articles-b";
import { articlesEnC } from "./articles-c";

export const categoriesEn: { slug: string; key: Cluster; name: string; description: string }[] = [
  { slug: "basics", key: "Grundlagen", name: "Basics", description: "Terms and concepts: GEO, AI search, AEO and LLM optimisation." },
  { slug: "platforms", key: "Plattformen", name: "Platforms", description: "How ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot and Claude choose their sources." },
  { slug: "practice", key: "Praxis", name: "Practice", description: "Measuring visibility, running audits and solving concrete problems." },
  { slug: "strategy", key: "Strategie", name: "Strategy", description: "Combining GEO and SEO, strengthening entities and building a GEO strategy." },
];

export const categoryNameEn = (key: Cluster) => categoriesEn.find((c) => c.key === key)?.name ?? key;

/** Gleiche Reihenfolge wie die deutschen Artikel. */
const order = Object.values(articleSlugs);
export const articlesEn: Article[] = [...articlesEnA, ...articlesEnB, ...articlesEnC].sort(
  (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug),
);

export const getArticleEn = (slug: string) => articlesEn.find((a) => a.slug === slug);
