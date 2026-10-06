export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/content/articles";
import { routes } from "@/lib/i18n";
import { articlesEn } from "@/content/en/articles";

const url = (p: string) => `${site.url}${p === "/" ? "/" : `${p}/`}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-01");
  const pages: [string, number][] = [
    ["/", 1],
    ["/geo-agentur", 0.9],
    ["/generative-engine-optimization", 0.9],
    ["/leistungen", 0.9],
    ["/geo-audit", 0.9],
    ["/ai-visibility", 0.8],
    ["/chatgpt-seo", 0.8],
    ["/gemini-seo", 0.8],
    ["/perplexity-seo", 0.8],
    ["/google-ai-overviews", 0.8],
    ["/geo-beratung", 0.7],
    ["/ratgeber", 0.7],
    ["/ueber-uns", 0.6],
    ["/fakten", 0.6],
    ["/kontakt", 0.6],
    ["/impressum", 0.2],
    ["/datenschutz", 0.2],
  ];
  // hreflang-Paare Deutsch ↔ Englisch
  const alternatesFor = (p: string) => {
    const hit = routes.find(([de, en]) => de === p || en === p);
    return hit ? { alternates: { languages: { de: url(hit[0]), en: url(hit[1]), "x-default": url(hit[0]) } } } : {};
  };
  const enPages = pages.flatMap(([p, priority]) => {
    const hit = routes.find(([de]) => de === p);
    return hit ? [[hit[1], priority] as [string, number]] : [];
  });
  return [
    ...[...pages, ...enPages].map(([p, priority]) => ({ url: url(p), lastModified, priority, ...alternatesFor(p) })),
    ...articles.map((a) => ({ url: url(`/ratgeber/${a.slug}`), lastModified: new Date(a.updated), priority: 0.6, ...alternatesFor(`/ratgeber/${a.slug}`) })),
    ...articlesEn.map((a) => ({ url: url(`/en/insights/${a.slug}`), lastModified: new Date(a.updated), priority: 0.6, ...alternatesFor(`/en/insights/${a.slug}`) })),
  ];
}
