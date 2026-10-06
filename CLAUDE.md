# Die GEO Agentur – Website (diegeoagentur.de)

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. Statischer Export nach `out/`.

## Befehle
- `npm install` – Abhängigkeiten installieren (Node 22)
- `npm run dev` – lokale Vorschau auf http://localhost:3000
- `npm run build` – statischer Export nach `out/`
- `npx tsc --noEmit` – Typprüfung

## Deployment (Netlify, automatisch)
- Netlify ist mit GitHub verbunden und deployt jeden Merge in `main` automatisch. Kein manuelles ZIP-Hochladen mehr.
- Änderungen immer als Pull Request auf `main` einreichen, nicht direkt auf `main` pushen.
- Vor dem PR lokal prüfen: `npx tsc --noEmit` und `npm run build`
- Nach dem Deploy bei neuen oder geänderten URLs die Sitemap `https://diegeoagentur.de/sitemap.xml` in Google Search Console und Bing Webmaster Tools neu einreichen

## Wo was liegt
- `lib/site.ts` – zentrale Unternehmensdaten, Team, **Preise** (`pricing`) – überall verwendet (Seiten, Schema, llms.txt)
- `lib/faq.ts` – Haupt-FAQ; `lib/services.ts` – Leistungen; `lib/platforms.ts` + `content/platformQa.ts` – Plattformseiten
- `content/articles.ts` + `content/articles-2.ts` – Ratgeber „GEO Wissen“ (Inline-Links: `[Text](/pfad)`)
- Englische Artikel („GEO Insights“, /en/insights/): `content/en/articles-*.ts`, Slug-Zuordnung DE→EN in `lib/en/articleSlugs.ts`. Neuer Artikel: beide Sprachen anlegen und Slug dort eintragen.
- `content/pillar.ts` – GEO-Definition, Glossar, Pillar-Abschnitte
- `lib/schema.ts` – Schema.org-Graph mit festen @ids
- `app/llms.txt/route.ts`, `app/sitemap.ts`, `app/robots.ts`, `public/_redirects`, `public/_headers`
- Formulare: Netlify Forms (Formularname „anfrage“)
- Zweisprachig: deutsche Seiten in `app/(de)/` (URLs ohne Präfix), englische in `app/en/` (eigenes Root-Layout, `lang="en"`). URL-Paare DE↔EN in `lib/i18n.ts` (`routes`) – steuern Sprachumschalter, hreflang und Sitemap. Neue Seite mit Gegenstück: dort eintragen.
- Sprachabhängige Daten über `l10n(locale)` (`lib/l10n.ts`); englische Daten in `lib/en/` und `content/en/`. Komponenten nehmen `locale` (Standard „de“). Preise in `lib/site.ts` und `lib/en/site.ts` gemeinsam ändern.

## Regeln für Inhalte
- Keine erfundenen Kunden, Bewertungen, Zahlen, Studien oder Garantien („garantiert Platz 1 bei ChatGPT“ o. ä.)
- Kein Keyword-Spam, keine Doorway- oder Stadtseiten
- Design und Layout nicht neu bauen, nur gezielt verbessern
- URLs mit Trailing Slash (`trailingSlash: true`)
