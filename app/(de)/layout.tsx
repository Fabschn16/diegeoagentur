import type { Metadata, Viewport } from "next";
import "../globals.css";
import { fontVars } from "../fonts";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";
import { JsonLd } from "@/components/ui/JsonLd";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { graph, organizationSchema, parentOrganizationSchema, personSchemas, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Die GEO Agentur – Sichtbar in ChatGPT, Gemini & AI Overviews",
    template: "%s | Die GEO Agentur",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { telephone: false },
  alternates: { canonical: "/" },
  openGraph: { siteName: site.name, locale: site.locale, type: "website" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={fontVars}>
      <body>
        {/* Google Consent Mode v2: alles abgelehnt, bis das Cookie-Banner eine Einwilligung meldet */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});",
          }}
        />
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Zum Inhalt springen
        </a>
        <JsonLd data={graph(organizationSchema(), parentOrganizationSchema(), websiteSchema(), ...personSchemas())} />
        <Header />
        <main id="inhalt">{children}</main>
        <Footer />
        <RevealObserver />
        <CookieBanner />
      </body>
    </html>
  );
}
