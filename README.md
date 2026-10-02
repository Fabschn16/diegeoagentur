# Die GEO Agentur – diegeoagentur.de

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · keine weiteren Runtime-Dependencies.

## Start

```bash
npm install
npm run dev            # http://localhost:3000
npm run build          # erzeugt den statischen Export in out/
```

Die Team- und Arbeitsfotos liegen in `public/images/team/`.

## Vor dem Livegang prüfen

| Datei | Was |
|---|---|
| `lib/site.ts` | Optional eigenes Postfach für diegeoagentur.de (aktuell fabian@dailyrocket.de) und `bookingUrl` (z. B. Calendly) |
| `app/datenschutz/page.tsx` | Übernommen von dailyrocket.de – genannte Dienste (Hosting, Cookie-Banner, Analyse, Formular) mit dem tatsächlichen Setup abgleichen |
| Netlify Forms | Formulare laufen über Netlify Forms (Formularname `anfrage`). In Netlify „Form detection“ aktivieren und eine E-Mail-Benachrichtigung einrichten. |
| `lib/cases.ts` | Echte, freigegebene Fallstudien eintragen – die Sektion schaltet dann automatisch um |

Die Team- und Arbeitsfotos liegen bereits in `public/images/team`.

## Struktur

- `lib/site.ts` – zentrale Entitätsdaten (Name, Kontakt, Team, belegte Kennzahlen, CTAs). Alles andere liest hieraus.
- `lib/services.ts`, `lib/platforms.ts`, `lib/faq.ts` – Inhalte der Leistungen, Plattformseiten und FAQ
- `content/articles.ts` – Ratgeber-Artikel (GEO Wissen). Neuer Artikel = neuer Eintrag; Sitemap, llms.txt, Hub und Schema aktualisieren sich automatisch.
- `lib/schema.ts` – Schema.org-Graph (Organization/ProfessionalService, WebSite, Person, Service, FAQPage, BreadcrumbList, Article)
- `app/sitemap.ts`, `app/robots.ts`, `app/llms.txt/route.ts`, `app/opengraph-image.tsx`

## Designsystem

Papier (`#f4f2ed`), Tinte (`#10110f`) und ein einziges Signal (`#e0451f`) – die Quellenmarke **[1]**, mit der KI-Antworten ihre Quellen belegen. Sie ist Logo-Element, Markierung und Leitmotiv. Typografie: Geist (Text), Instrument Serif Italic (Betonung), Geist Mono (Labels). Fonts liegen lokal in `app/fonts` (SIL OFL).

## Deployment (Netlify)

`npm run build` erzeugt `out/`. Diesen Ordner (oder ein ZIP seines Inhalts) per Drag & Drop in Netlify hochladen – oder das Repository mit Netlify verbinden (`netlify.toml` ist vorbereitet).
