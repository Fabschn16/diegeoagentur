import type { Metadata } from "next";
import { site } from "./site";
import { siteEn } from "./en/site";
import { languageAlternates, localeOf } from "./i18n";

/** Seiten-Metadaten. Sprache, og:locale und hreflang-Alternativen ergeben sich aus dem Pfad (/en/… = Englisch). */
export function pageMeta(opts: { title: string; description: string; path: string; noindex?: boolean; type?: "website" | "article" }): Metadata {
  const en = localeOf(opts.path) === "en";
  const languages = languageAlternates(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path, ...(languages ? { languages } : {}) },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.path,
      siteName: site.name,
      locale: en ? siteEn.locale : site.locale,
      ...(languages ? { alternateLocale: en ? site.locale : siteEn.locale } : {}),
      type: opts.type ?? "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description, images: ["/opengraph-image"] },
    robots: opts.noindex ? { index: false, follow: true } : undefined,
  };
}
