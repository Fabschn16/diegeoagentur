import type { Metadata } from "next";
import { site } from "./site";

export function pageMeta(opts: { title: string; description: string; path: string; noindex?: boolean; type?: "website" | "article" }): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.path,
      siteName: site.name,
      locale: site.locale,
      type: opts.type ?? "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description, images: ["/opengraph-image"] },
    robots: opts.noindex ? { index: false, follow: true } : undefined,
  };
}
