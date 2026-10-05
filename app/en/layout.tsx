import type { Metadata, Viewport } from "next";
import "../globals.css";
import { fontVars } from "../fonts";
import { site } from "@/lib/site";
import { siteEn } from "@/lib/en/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { JsonLd } from "@/components/ui/JsonLd";
import { graph, organizationSchema, parentOrganizationSchema, personSchemas, websiteSchema } from "@/lib/schema";

/** Englische Fassung unter /en/ – eigenes Root-Layout, damit <html lang="en"> stimmt. */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Die GEO Agentur – Visible in ChatGPT, Gemini & AI Overviews",
    template: "%s | Die GEO Agentur",
  },
  description: siteEn.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false },
  alternates: { canonical: "/en" },
  openGraph: { siteName: site.name, locale: siteEn.locale, type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ed",
  width: "device-width",
  initialScale: 1,
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars}>
      <body>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <JsonLd data={graph(organizationSchema(), parentOrganizationSchema(), websiteSchema(), ...personSchemas())} />
        <Header />
        <main id="content">{children}</main>
        <Footer locale="en" />
        <RevealObserver />
      </body>
    </html>
  );
}
