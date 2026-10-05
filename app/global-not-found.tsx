import type { Metadata } from "next";
import "./globals.css";
import { fontVars } from "./fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { CookieBanner } from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  title: "Seite nicht gefunden | Die GEO Agentur",
  robots: { index: false, follow: true },
};

/** Greift für alle unbekannten URLs (DE und EN), da es zwei Root-Layouts gibt. */
export default function GlobalNotFound() {
  return (
    <html lang="de" className={fontVars}>
      <body>
        <Header />
        <main id="inhalt">
          <section className="py-28 lg:py-40">
            <div className="container-x max-w-3xl">
              <p className="eyebrow mb-6 text-muted">Fehler 404 · Error 404</p>
              <h1 className="text-h1 font-medium">
                Diese Seite gibt es nicht. <span className="em">Die Antwort schon.</span>
              </h1>
              <p className="mt-6 text-lead text-muted" lang="en">
                This page does not exist. Try the English homepage instead.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/" arrow>
                  Zur Startseite
                </Button>
                <Button href="/en" variant="secondary">
                  English homepage
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
