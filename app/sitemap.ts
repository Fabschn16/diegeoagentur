export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/content/articles";

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
  return [
    ...pages.map(([p, priority]) => ({ url: `${site.url}${p === "/" ? "/" : `${p}/`}`, lastModified, priority })),
    ...articles.map((a) => ({ url: `${site.url}/ratgeber/${a.slug}/`, lastModified: new Date(a.updated), priority: 0.6 })),
  ];
}
