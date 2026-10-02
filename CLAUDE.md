# Die GEO Agentur – Website (diegeoagentur.de)

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. Statischer Export nach `out/`.

## Befehle
- `npm install` – Abhängigkeiten installieren (Node 22)
- `npm run dev` – lokale Vorschau auf http://localhost:3000
- `npm run build` – statischer Export nach `out/`
- `npx tsc --noEmit` – Typprüfung

## Deployment (Netlify, manuell)
1. `rm -rf out .next && npm run build`
2. Inhalt von `out/` zippen: `cd out && zip -qr ../diegeoagentur-website.zip . && cd ..`
3. Netlify → Projekt „diegeoagentur“ → Deploys (oder Projektübersicht „Already built it?“) → ZIP hineinziehen
4. Danach Sitemap `https://diegeoagentur.de/sitemap.xml` in Google Search Console und Bing Webmaster Tools neu einreichen

## Wo was liegt
- `lib/site.ts` – zentrale Unternehmensdaten, Team, **Preise** (`pricing`) – überall verwendet (Seiten, Schema, llms.txt)
- `lib/faq.ts` – Haupt-FAQ; `lib/services.ts` – Leistungen; `lib/platforms.ts` + `content/platformQa.ts` – Plattformseiten
- `content/articles.ts` + `content/articles-2.ts` – Ratgeber „GEO Wissen“ (Inline-Links: `[Text](/pfad)`)
- `content/pillar.ts` – GEO-Definition, Glossar, Pillar-Abschnitte
- `lib/schema.ts` – Schema.org-Graph mit festen @ids
- `app/llms.txt/route.ts`, `app/sitemap.ts`, `app/robots.ts`, `public/_redirects`, `public/_headers`
- Formulare: Netlify Forms (Formularname „anfrage“)

## Regeln für Inhalte
- Keine erfundenen Kunden, Bewertungen, Zahlen, Studien oder Garantien („garantiert Platz 1 bei ChatGPT“ o. ä.)
- Kein Keyword-Spam, keine Doorway- oder Stadtseiten
- Design und Layout nicht neu bauen, nur gezielt verbessern
- URLs mit Trailing Slash (`trailingSlash: true`)
