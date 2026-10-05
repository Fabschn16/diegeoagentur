export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** Bewusst offen für Such- und KI-Crawler – wir wollen verstanden und zitiert werden. */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "OAI-SearchBot",
    "ChatGPT-User",
    "GPTBot",
    "PerplexityBot",
    "Perplexity-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "Google-Extended",
    "Meta-WebIndexer",
    "Meta-ExternalFetcher",
    "Meta-ExternalAgent",
    "Googlebot",
    "Bingbot",
    "Applebot",
    "Applebot-Extended",
  ];
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiBots, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
