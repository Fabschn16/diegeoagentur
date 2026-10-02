import type { Article } from "./articles";

/**
 * Zweite Ausbaustufe von GEO Wissen (Oktober 2026):
 * Branchenleitfäden, neue Plattformthemen (AI Mode, ChatGPT Shopping & Werbung) und die offengelegte Methodik.
 */
const OKT_2026 = "2026-10-01";

export const newArticles: Article[] = [
  /* ───────────────────────────── PLATTFORMEN ───────────────────────────── */
  {
    slug: "google-ai-mode",
    title: "Google AI Mode: Was Unternehmen jetzt wissen müssen",
    metaTitle: "Google AI Mode (KI-Modus): Was Unternehmen wissen müssen",
    description:
      "Google AI Mode erklärt: Wie der KI-Modus der Google-Suche Antworten bildet, worin er sich von AI Overviews unterscheidet und wie Unternehmen dort als Quelle sichtbar werden.",
    category: "Plattformen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["Google AI Mode", "KI-Modus", "Google AI Overviews", "Query Fan-out", "Generative Engine Optimization"],
    answer:
      "Google AI Mode (deutsch: KI-Modus) ist eine dialogorientierte KI-Suche innerhalb der Google-Suche. Statt einer Ergebnisliste liefert sie eine ausführliche, KI-generierte Antwort mit Links zu den Quellen und erlaubt Rückfragen. In Deutschland ist AI Mode seit Oktober 2025 auf Deutsch verfügbar. Für Unternehmen gelten dieselben Grundlagen wie für die Google-Suche: indexierbare Seiten, klare Antworten und eine eindeutige Markenentität.",
    body: [
      { type: "h2", text: "Was ist Google AI Mode?" },
      {
        type: "p",
        text: "AI Mode ist ein eigener Bereich der Google-Suche, erreichbar über einen Reiter bzw. ein Symbol neben dem Suchfeld. Nutzer stellen dort längere, komplexe Fragen, auch per Sprache oder Bild, und können im Dialog nachfragen. Die Antwort basiert auf einem angepassten Gemini-Modell und auf Googles Suchindex.",
      },
      { type: "h2", text: "AI Mode und AI Overviews: der Unterschied" },
      {
        type: "table",
        head: ["", "AI Overviews", "AI Mode"],
        rows: [
          ["Wo", "Oberhalb der normalen Suchergebnisse", "Eigener Bereich der Google-Suche"],
          ["Auslöser", "Google entscheidet je Suchanfrage", "Nutzer wählt den Modus bewusst"],
          ["Antwort", "Kurze Zusammenfassung", "Ausführliche Antwort mit Rückfragen"],
          ["Klassische Ergebnisse", "Direkt darunter", "Nicht im Vordergrund"],
        ],
      },
      {
        type: "p",
        text: "Für beide Formate gilt laut Google: Es gibt keine zusätzlichen technischen Anforderungen und kein spezielles Markup. Eine Seite muss indexiert und für ein Snippet geeignet sein. Mehr zu den Übersichten auf der Seite [Google AI Overviews Optimierung](/google-ai-overviews).",
      },
      { type: "h2", text: "Wie AI Mode Antworten bildet" },
      {
        type: "p",
        text: "Google beschreibt für AI Mode eine Technik, bei der eine Frage in mehrere Teilfragen zerlegt wird, zu denen parallel gesucht wird („Query Fan-out“). Die Ergebnisse werden anschließend zu einer Antwort zusammengeführt. Für Unternehmen bedeutet das: Nicht nur die Hauptfrage zählt, sondern auch die Teilfragen dahinter – etwa zu Kosten, Ablauf, Alternativen oder Voraussetzungen.",
      },
      { type: "h2", text: "So werden Unternehmen in AI Mode sichtbar" },
      {
        type: "ol",
        items: [
          "Indexierung sicherstellen: Wichtige Seiten müssen in der Google Search Console als indexiert erscheinen.",
          "Teilfragen beantworten: Seiten so aufbauen, dass Kosten, Ablauf, Unterschiede und Voraussetzungen jeweils in eigenen, klar überschriebenen Abschnitten beantwortet werden.",
          "Antwort zuerst: Jeder Abschnitt beginnt mit der direkten Antwort – das Prinzip beschreibt der Beitrag [Answer Engine Optimization](/ratgeber/answer-engine-optimization).",
          "Entität stärken: Gleiche Angaben zu Unternehmen, Leistungen und Standort auf Website, Google-Unternehmensprofil und Verzeichnissen – siehe [Entity Optimization](/ratgeber/entity-optimization).",
          "Externe Bestätigung: Erwähnungen in Fachquellen, die Google für Ihr Thema heranzieht.",
        ],
      },
      { type: "h2", text: "Wie misst man die Sichtbarkeit in AI Mode?" },
      {
        type: "p",
        text: "Die Google Search Console fasst Daten aus den KI-Funktionen mit der normalen Websuche zusammen; einen getrennten Bericht nur für AI Mode gibt es dort nicht. Verlässlicher ist eine regelmäßige Abfrage eines festen Fragenkatalogs, bei der festgehalten wird, ob und mit welcher Seite Ihr Unternehmen verlinkt wird. So arbeiten wir im [AI Visibility Monitoring](/ai-visibility).",
      },
    ],
    related: [
      { label: "Google AI Overviews Optimierung", href: "/google-ai-overviews" },
      { label: "Gemini SEO", href: "/gemini-seo" },
      { label: "Google AI Overviews: Was Unternehmen wissen sollten", href: "/ratgeber/google-ai-overviews-unternehmen" },
    ],
    sources: [
      { label: "Google Search Central: KI-Funktionen und Ihre Website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      { label: "onlinemarketing.de: Google AI Mode jetzt in Deutschland nutzen (14.10.2025)", href: "https://onlinemarketing.de/seo/google-ai-mode-jetzt-in-deutschland-nutzen" },
    ],
  },
  {
    slug: "chatgpt-shopping-und-werbung",
    title: "ChatGPT Shopping und ChatGPT-Werbung: Was Unternehmen wissen sollten",
    metaTitle: "ChatGPT Shopping & ChatGPT Ads: Organisch vs. Werbung",
    description:
      "Wie ChatGPT Produkte empfiehlt, was Produktfeeds damit zu tun haben und wie die seit August 2026 in Deutschland gestarteten ChatGPT-Anzeigen funktionieren – und was das für GEO bedeutet.",
    category: "Plattformen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 7,
    author: "fabian",
    topics: ["ChatGPT Shopping", "ChatGPT Ads", "ChatGPT Werbung", "Produktfeeds", "Agentic Commerce", "E-Commerce GEO"],
    answer:
      "In ChatGPT gibt es zwei Wege, als Anbieter vor Nutzern zu erscheinen: organisch, wenn ChatGPT ein Produkt oder Unternehmen in seiner Antwort empfiehlt, und bezahlt über Anzeigen, die OpenAI seit Ende August 2026 auch in Deutschland ausspielt. Laut OpenAI beeinflussen Anzeigen die Antworten nicht und sind als „Gesponsert“ gekennzeichnet. Organische Empfehlungen bleiben deshalb eine eigene Aufgabe – genau hier setzt GEO an.",
    body: [
      { type: "h2", text: "Wie ChatGPT Produkte empfiehlt" },
      {
        type: "p",
        text: "Bei Kauffragen durchsucht ChatGPT das Web, vergleicht Angebote und zeigt Produkte mit Bildern, Preisen und Links zu Händlern. Grundlage sind Webseiten, Testberichte, Vergleiche und – bei teilnehmenden Händlern – strukturierte Produktdaten. OpenAI betont, dass diese Ergebnisse keine Anzeigen sind und nicht durch Partnerschaften beeinflusst werden.",
      },
      { type: "h2", text: "Produktfeeds: Was sich 2026 verändert hat" },
      {
        type: "p",
        text: "Im September 2025 startete OpenAI „Instant Checkout“, bei dem Käufe direkt in ChatGPT abgeschlossen werden konnten. Im März 2026 hat OpenAI den Schwerpunkt auf die Produktsuche verlagert: Händler liefern strukturierte Produktfeeds mit Titel, Beschreibung, Bildern, Preis und Verfügbarkeit, der Kauf läuft über den eigenen Shop. Welche Händlerfunktionen in Deutschland bereitstehen, ändert sich laufend – den aktuellen Stand sollten Sie direkt bei OpenAI prüfen.",
      },
      { type: "h2", text: "ChatGPT-Werbung in Deutschland" },
      {
        type: "ul",
        items: [
          "Start: Ende August 2026 in Deutschland und weiteren europäischen Märkten.",
          "Wer sieht Anzeigen: Nutzer der Tarife Free und Go. Plus, Pro, Business, Enterprise und Edu bleiben werbefrei.",
          "Platzierung: unter der Antwort, gekennzeichnet als „Gesponsert“.",
          "Ausrichtung in der EU: am Gesprächskontext, ungefähren Standort und Gerät; personalisierte Werbung nur mit ausdrücklicher Zustimmung.",
          "Einkauf: Preise, Mindestvolumen und Abrechnungsmodelle waren zum Start nicht öffentlich.",
        ],
      },
      { type: "h2", text: "Organisch oder bezahlt: Was ist wichtiger?" },
      {
        type: "table",
        head: ["", "Organische Empfehlung (GEO)", "ChatGPT-Anzeige"],
        rows: [
          ["Position", "In der Antwort selbst", "Unter der Antwort, als Anzeige markiert"],
          ["Wer sieht es", "Alle Nutzer", "Nur Free- und Go-Nutzer"],
          ["Kosten", "Aufbau von Inhalten, Entität, Quellen", "Mediabudget pro Auslieferung bzw. Klick"],
          ["Wirkung", "Glaubwürdigkeit einer Empfehlung", "Sofortige Präsenz, solange Budget läuft"],
        ],
      },
      {
        type: "p",
        text: "Beides schließt sich nicht aus. Anzeigen kaufen Präsenz, aber keine Empfehlung. Wer in der Antwort selbst genannt werden will, braucht die Grundlagen aus [ChatGPT SEO](/chatgpt-seo): zugängliche Seiten, klare Produkt- und Leistungsinformationen, eine eindeutige Marke und Erwähnungen in Vergleichen und Testberichten.",
      },
      { type: "h2", text: "Checkliste für Händler und Marken" },
      {
        type: "ol",
        items: [
          "OAI-SearchBot in der robots.txt zulassen, damit Produktseiten für die ChatGPT-Suche erreichbar sind.",
          "Produktdaten vollständig und strukturiert pflegen (Schema.org Product, Offer, Preis, Verfügbarkeit).",
          "Kaufberatende Inhalte erstellen: Vergleiche, Einsatzbereiche, Größen- und Auswahlhilfen.",
          "In Testberichten und Vergleichsportalen präsent sein, die ChatGPT für Ihre Kategorie zitiert.",
          "Sichtbarkeit messen – mehr dazu im Leitfaden [GEO für E-Commerce](/ratgeber/geo-e-commerce).",
        ],
      },
    ],
    related: [
      { label: "ChatGPT SEO", href: "/chatgpt-seo" },
      { label: "GEO für E-Commerce", href: "/ratgeber/geo-e-commerce" },
      { label: "In ChatGPT sichtbar werden", href: "/ratgeber/in-chatgpt-sichtbar-werden" },
    ],
    sources: [
      { label: "techinformed: OpenAI refocuses ChatGPT shopping on discovery (2026)", href: "https://techinformed.com/openai-refocuses-chatgpt-shopping-on-discovery/" },
      { label: "onlinemarketing.de: OpenAI startet ChatGPT-Werbung in Deutschland", href: "https://onlinemarketing.de/technologie/openai-startet-chatgpt-werbung-in-deutschland-eu-datenschutz" },
      { label: "W&V: So funktionieren ChatGPT Ads zum Start in Deutschland", href: "https://www.wuv.de/themen/ki-tech/so-funktionieren-chatgpt-ads-zum-start-in-deutschland" },
      { label: "OpenAI Help Center: Shopping-Ergebnisse in der ChatGPT-Suche", href: "https://help.openai.com/en/articles/11128490-improved-shopping-results-in-chatgpt-search" },
    ],
  },

  /* ───────────────────────────── PRAXIS ───────────────────────────── */
  {
    slug: "methodik-prompt-katalog",
    title: "Unsere Methodik: Wie wir KI-Sichtbarkeit mit einem Prompt-Katalog messen",
    metaTitle: "Methodik: KI-Sichtbarkeit mit Prompt-Katalog messen",
    description:
      "Die offengelegte Messmethodik von Die GEO Agentur: wie wir Fragen auswählen, KI-Systeme abfragen, Antworten auswerten und mit Schwankungen umgehen.",
    category: "Praxis",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 7,
    author: "jan",
    topics: ["Prompt-Katalog", "AI Visibility", "KI-Sichtbarkeit messen", "Methodik", "Share of Voice"],
    answer:
      "Wir messen KI-Sichtbarkeit über einen festen Katalog von Fragen, die echte Kunden stellen. Jede Frage wird in den vereinbarten KI-Systemen mehrfach und unter dokumentierten Bedingungen gestellt; jede Antwort wird nach festen Kriterien ausgewertet: Nennung, Position, Kontext, Zitierung und Korrektheit. Den Katalog und die Regeln legen wir unseren Kunden vollständig offen, damit jedes Ergebnis nachvollziehbar ist.",
    body: [
      {
        type: "p",
        text: "Dieser Beitrag beschreibt, wie wir konkret vorgehen. Die allgemeinen Grundlagen der Messung erklärt der Beitrag [KI-Sichtbarkeit messen](/ratgeber/ki-sichtbarkeit-messen).",
      },
      { type: "h2", text: "1. Fragen auswählen" },
      {
        type: "p",
        text: "Der Katalog entsteht gemeinsam mit dem Kunden aus Quellen, die echte Nachfragen zeigen: Vertriebs- und Supportgespräche, Suchanfragen aus der Search Console, Fragen aus Foren und Bewertungen. Wir gliedern ihn nach Absicht:",
      },
      {
        type: "table",
        head: ["Typ", "Beispiel", "Was er zeigt"],
        rows: [
          ["Kategoriefrage", "Welche Anbieter gibt es für …?", "Wird die Marke überhaupt genannt?"],
          ["Vergleichsfrage", "X oder Y – was ist besser für …?", "Wie wird die Marke gegenüber Wettbewerbern eingeordnet?"],
          ["Problemfrage", "Wie löse ich …?", "Wird die Marke als Lösung erkannt?"],
          ["Markenfrage", "Was macht [Marke]? Ist [Marke] seriös?", "Stimmt die Darstellung?"],
          ["Regionale Frage", "… in [Region]", "Wird der Standort richtig zugeordnet?"],
        ],
      },
      {
        type: "p",
        text: "Die Anzahl der Fragen richtet sich nach Themen, Märkten und Produkten und wird im Angebot festgelegt. Einmal festgelegt, bleibt der Kern des Katalogs stabil, damit Entwicklungen über Monate vergleichbar sind; neue Fragen kommen ergänzend hinzu.",
      },
      { type: "h2", text: "2. Abfragen unter dokumentierten Bedingungen" },
      {
        type: "ul",
        items: [
          "Systeme: die vereinbarten Plattformen, z. B. ChatGPT, Gemini, Perplexity und Google AI Overviews.",
          "Wiederholung: Jede Frage wird mehrfach gestellt, weil Antworten variieren.",
          "Neutraler Zustand: neue Sitzungen ohne Gesprächsverlauf und ohne personalisierten Kontext.",
          "Protokoll: Datum, System, Modus (z. B. mit oder ohne Websuche) und Standort werden je Abfrage festgehalten.",
        ],
      },
      { type: "h2", text: "3. Antworten auswerten" },
      {
        type: "table",
        head: ["Kriterium", "Was wir erfassen"],
        rows: [
          ["Nennung", "Kommt die Marke in der Antwort vor – ja oder nein?"],
          ["Position", "Wird sie zuerst, in der Mitte oder am Ende genannt?"],
          ["Kontext", "Empfehlung, neutrale Erwähnung oder kritische Darstellung?"],
          ["Zitierung", "Wird die eigene Website als Quelle verlinkt – mit welcher Seite?"],
          ["Korrektheit", "Stimmen Leistungen, Standort, Preise und Positionierung?"],
          ["Wettbewerber", "Welche anderen Anbieter werden genannt?"],
          ["Fremdquellen", "Welche Websites prägen die Antwort?"],
        ],
      },
      { type: "h2", text: "4. Kennzahlen bilden" },
      {
        type: "p",
        text: "Aus den Einzelauswertungen berechnen wir Nennungsrate (Anteil der Antworten mit Nennung), Share of Voice (Nennungen der Marke im Verhältnis zu allen genannten Anbietern) und Zitierrate. Wir weisen Kennzahlen je Plattform und je Fragetyp aus, nicht nur als Gesamtwert – sonst verdeckt ein guter Wert bei Markenfragen eine schwache Sichtbarkeit bei Kategoriefragen.",
      },
      { type: "h2", text: "5. Mit Schwankungen umgehen" },
      {
        type: "p",
        text: "KI-Antworten sind nicht deterministisch, und Anbieter ändern ihre Modelle laufend. Deshalb bewerten wir Trends über mehrere Messungen, nicht einzelne Ausreißer, und vermerken bekannte Modellwechsel im Reporting. Eine einzelne Testfrage hat für uns keine Aussagekraft.",
      },
      { type: "h2", text: "Was wir bewusst nicht tun" },
      {
        type: "ul",
        items: [
          "Keine Garantien für Nennungen oder Positionen – KI-Antworten lassen sich nicht garantieren.",
          "Keine Manipulation durch versteckte Texte, gefälschte Bewertungen oder künstliche Massenerwähnungen.",
          "Keine Kennzahlen ohne offengelegte Fragen: Jeder Wert lässt sich auf die zugrunde liegenden Antworten zurückführen.",
        ],
      },
      {
        type: "p",
        text: "Die Methodik ist die Grundlage für unser [GEO Audit](/geo-audit) und das laufende [AI Visibility Monitoring](/ai-visibility).",
      },
    ],
    related: [
      { label: "AI Visibility Monitoring", href: "/ai-visibility" },
      { label: "KI-Sichtbarkeit messen: die Grundlagen", href: "/ratgeber/ki-sichtbarkeit-messen" },
      { label: "GEO Audit: Ablauf und Inhalte", href: "/ratgeber/geo-audit-ablauf" },
    ],
  },

  /* ───────────────────────────── STRATEGIE (Branchen) ───────────────────────────── */
  {
    slug: "geo-saas",
    title: "GEO für SaaS: So werden Software-Anbieter in KI-Antworten empfohlen",
    metaTitle: "GEO für SaaS-Unternehmen: In ChatGPT & Co. empfohlen werden",
    description:
      "Generative Engine Optimization für SaaS: Welche Fragen Software-Käufer in ChatGPT stellen, warum Vergleichsportale entscheidend sind und welche Inhalte KI-Systeme zitieren.",
    category: "Strategie",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "fabian",
    topics: ["GEO für SaaS", "Software-Empfehlungen ChatGPT", "B2B SaaS Marketing", "Vergleichsportale", "Generative Engine Optimization"],
    answer:
      "Für SaaS-Unternehmen ist GEO besonders relevant, weil Software-Käufer ihre Recherche zunehmend mit Fragen wie „Welches Tool eignet sich für …?“ in KI-Systemen beginnen. Ob ein Anbieter genannt wird, hängt vor allem von drei Dingen ab: klar beschriebenen Anwendungsfällen auf der eigenen Website, aktuellen Funktions- und Preisinformationen und der Präsenz in Vergleichsportalen, Bewertungsplattformen und Fachartikeln.",
    body: [
      { type: "h2", text: "Welche Fragen Software-Käufer stellen" },
      {
        type: "ul",
        items: [
          "Kategoriefragen: „Welche CRM-Software eignet sich für kleine Agenturen?“",
          "Vergleichsfragen: „Tool A oder Tool B – was ist besser für …?“",
          "Anforderungsfragen: „Welche Software ist DSGVO-konform und hat Server in Deutschland?“",
          "Integrationsfragen: „Welche Tools lassen sich mit … verbinden?“",
          "Alternativfragen: „Welche Alternativen gibt es zu …?“",
        ],
      },
      { type: "h2", text: "Was KI-Systeme für SaaS-Empfehlungen heranziehen" },
      {
        type: "p",
        text: "Bei Software-Fragen stützen sich KI-Antworten häufig auf Bewertungsplattformen, Vergleichsartikel, Listen wie „Die besten Tools für …“, Dokumentationen und die Websites der Anbieter. Eine starke eigene Website reicht deshalb selten aus: Die externe Bestätigung entscheidet oft, ob ein Tool in die engere Auswahl der Antwort kommt.",
      },
      { type: "h2", text: "Die wichtigsten Hebel für SaaS" },
      {
        type: "ol",
        items: [
          "Anwendungsfall-Seiten: je Zielgruppe oder Einsatzzweck eine Seite, die konkret beschreibt, für wen das Tool gedacht ist und welches Problem es löst.",
          "Ehrliche Vergleichsseiten: eigene Gegenüberstellungen mit Wettbewerbern, sachlich und nachprüfbar – ohne abwertende Aussagen.",
          "Aktuelle Fakten: Preise, Funktionen, Integrationen, Hosting-Standort und Zertifizierungen an einer Stelle, maschinenlesbar und mit Datum.",
          "Dokumentation öffentlich zugänglich halten: Hilfe-Center und API-Dokumentation sind oft zitierte Quellen.",
          "Bewertungen und Vergleiche: echte Kundenbewertungen auf relevanten Plattformen und Präsenz in redaktionellen Tool-Vergleichen.",
          "Entität pflegen: einheitlicher Produktname, Kategorie und Herstellerangaben überall – siehe [Entity Optimization](/ratgeber/entity-optimization).",
        ],
      },
      { type: "h2", text: "Typische Fehler" },
      {
        type: "ul",
        items: [
          "Preise und Funktionen nur hinter Login oder in PDFs – für Crawler unsichtbar.",
          "Startseiten voller Slogans, aber ohne klare Aussage, was das Produkt ist.",
          "Veraltete Funktionsangaben auf Vergleichsportalen, die KI-Systeme weiter zitieren.",
        ],
      },
      {
        type: "p",
        text: "Wo Ihr Tool heute in ChatGPT, Gemini und Perplexity steht, zeigt ein [GEO Audit](/geo-audit). Wie Sie Kategorie- und Vergleichsfragen regelmäßig verfolgen, beschreibt [AI Visibility Monitoring](/ai-visibility).",
      },
    ],
    related: [
      { label: "Warum ChatGPT Wettbewerber empfiehlt", href: "/ratgeber/chatgpt-empfiehlt-wettbewerber" },
      { label: "GEO-Strategie entwickeln", href: "/ratgeber/geo-strategie" },
      { label: "Was macht eine GEO Agentur?", href: "/geo-agentur" },
    ],
  },
  {
    slug: "geo-e-commerce",
    title: "GEO für E-Commerce: Wie Online-Shops in KI-Kaufberatungen auftauchen",
    metaTitle: "GEO für E-Commerce: Produkte in ChatGPT & Co. sichtbar machen",
    description:
      "Generative Engine Optimization für Online-Shops: Wie KI-Systeme Produkte empfehlen, welche Rolle Produktdaten, Testberichte und Kaufberatung spielen und was Shops konkret tun können.",
    category: "Strategie",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["GEO für E-Commerce", "ChatGPT Shopping", "Produktdaten", "Kaufberatung", "Google AI Mode"],
    answer:
      "Für Online-Shops entscheidet GEO darüber, ob Produkte in KI-gestützten Kaufberatungen vorkommen – in ChatGPT, Google AI Mode, AI Overviews oder Perplexity. Entscheidend sind vollständige, strukturierte Produktdaten, Inhalte, die echte Kauffragen beantworten, und Erwähnungen in Testberichten und Vergleichen, auf die sich KI-Systeme bei Empfehlungen stützen.",
    body: [
      { type: "h2", text: "Wie KI-Systeme Produkte empfehlen" },
      {
        type: "p",
        text: "Auf eine Frage wie „Welche Laufschuhe sind gut für Anfänger?“ suchen KI-Systeme nach Kaufberatungen, Testberichten, Produktseiten und Bewertungen und fassen sie zu einer Empfehlung zusammen. Händler und Marken, deren Produkte in diesen Quellen gut beschrieben und häufig genannt werden, landen eher in der Antwort.",
      },
      { type: "h2", text: "Die wichtigsten Hebel für Shops" },
      {
        type: "ol",
        items: [
          "Produktdaten vollständig pflegen: Titel, Eigenschaften, Maße, Material, Preis und Verfügbarkeit – im HTML und als strukturierte Daten (Schema.org Product und Offer).",
          "Kaufberatung statt nur Kategorieseiten: Ratgeber, die Auswahlfragen beantworten („Für wen eignet sich …?“, „Worin unterscheiden sich …?“).",
          "Produktfragen direkt beantworten: FAQ auf Produktseiten mit echten Kundenfragen aus Service und Bewertungen.",
          "Echte Bewertungen sammeln und sichtbar machen – niemals gekaufte oder erfundene.",
          "Präsenz in Testberichten und Vergleichsportalen Ihrer Kategorie aufbauen.",
          "Crawler-Zugang prüfen: Shopsysteme blockieren KI-Crawler manchmal über Firewall- oder Bot-Regeln.",
        ],
      },
      { type: "h2", text: "ChatGPT Shopping und Werbung" },
      {
        type: "p",
        text: "ChatGPT zeigt bei Kauffragen Produktkarten mit Preisen und Händlerlinks, und seit August 2026 laufen in Deutschland auch Anzeigen in ChatGPT. Was das für Shops bedeutet, erklärt der Beitrag [ChatGPT Shopping und ChatGPT-Werbung](/ratgeber/chatgpt-shopping-und-werbung).",
      },
      { type: "h2", text: "Was Shops messen sollten" },
      {
        type: "ul",
        items: [
          "Nennungen bei Kategorie- und Auswahlfragen („beste … für …“).",
          "Welche Produkte genannt werden – und ob Preise und Eigenschaften stimmen.",
          "Welche Testberichte und Portale die Antworten prägen.",
          "Besuche und Umsatz aus KI-Systemen in der Webanalyse.",
        ],
      },
      {
        type: "p",
        text: "Unser [GEO Audit](/geo-audit) zeigt, bei welchen Kauffragen Ihr Shop heute genannt wird und wer stattdessen empfohlen wird.",
      },
    ],
    related: [
      { label: "ChatGPT Shopping und ChatGPT-Werbung", href: "/ratgeber/chatgpt-shopping-und-werbung" },
      { label: "Google AI Mode", href: "/ratgeber/google-ai-mode" },
      { label: "Perplexity SEO", href: "/perplexity-seo" },
    ],
  },
  {
    slug: "geo-kanzleien-steuerberater",
    title: "GEO für Kanzleien und Steuerberater: Sichtbar in KI-Antworten – sachlich und berufsrechtskonform",
    metaTitle: "GEO für Kanzleien & Steuerberater: Sichtbar in ChatGPT",
    description:
      "Wie Rechtsanwaltskanzleien und Steuerberatungen in ChatGPT, Gemini und Google AI Overviews sichtbar werden – mit sachlichen Inhalten, die zum berufsrechtlichen Werberahmen passen.",
    category: "Strategie",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "fabian",
    topics: ["GEO für Kanzleien", "GEO für Steuerberater", "Anwalt ChatGPT", "Steuerberater finden KI", "Lokale KI-Sichtbarkeit"],
    answer:
      "Kanzleien und Steuerberatungen werden in KI-Antworten vor allem dann genannt, wenn ihre Rechts- bzw. Fachgebiete, Standorte und Ansprechpartner eindeutig beschrieben sind und unabhängige Quellen – Verzeichnisse, Kammerangaben, Fachbeiträge, Bewertungen – diese Angaben bestätigen. GEO passt dabei gut zum berufsrechtlichen Rahmen: Es setzt auf sachliche, überprüfbare Information statt auf Werbeversprechen.",
    body: [
      { type: "h2", text: "Wie Mandanten heute suchen" },
      {
        type: "p",
        text: "Viele Rechts- und Steuerfragen beginnen inzwischen als Frage an ein KI-System: „Was muss ich bei einer Kündigung beachten?“ oder „Welcher Steuerberater in Passau ist auf Photovoltaik spezialisiert?“. Auf die erste Frage antwortet die KI mit Erklärungen, auf die zweite mit konkreten Namen. Für Kanzleien zählt beides: als fachliche Quelle zitiert und als Anbieter genannt zu werden.",
      },
      { type: "h2", text: "Der berufsrechtliche Rahmen" },
      {
        type: "p",
        text: "Rechtsanwälte dürfen nach § 43b BRAO nur werben, soweit sie sachlich über ihre berufliche Tätigkeit unterrichten; für Steuerberater enthält § 57a StBerG eine entsprechende Regel. GEO-Inhalte passen gut dazu, weil sie auf sachliche Information setzen: klare Angaben zu Tätigkeitsschwerpunkten, verständliche Fachbeiträge, nachprüfbare Fakten. Werbliche Superlative oder Erfolgsversprechen sind dagegen weder berufsrechtlich ratsam noch für KI-Systeme hilfreich. Dieser Beitrag ersetzt keine berufsrechtliche Prüfung im Einzelfall.",
      },
      { type: "h2", text: "Die wichtigsten Hebel" },
      {
        type: "ol",
        items: [
          "Tätigkeitsschwerpunkte als eigene Seiten: je Rechts- oder Fachgebiet eine Seite, die erklärt, wobei die Kanzlei hilft und für wen.",
          "Fachbeiträge mit Antwort zuerst: verständliche Erklärungen typischer Mandantenfragen, mit Autor, Datum und Quellen (Gesetze, Urteile).",
          "Personen sichtbar machen: Berufsträger mit Qualifikationen wie Fachanwaltstiteln oder Fachberaterbezeichnungen, jeweils mit eigenem Profil.",
          "Standortdaten einheitlich halten: Website, Google-Unternehmensprofil, Kammer- und Anwaltsverzeichnisse.",
          "Echte Bewertungen von Mandanten – unter Beachtung der Verschwiegenheit, niemals beauftragt oder gefälscht.",
          "Externe Fachpräsenz: Gastbeiträge, Vorträge, Zitate in regionaler Presse.",
        ],
      },
      { type: "h2", text: "Was Kanzleien messen sollten" },
      {
        type: "p",
        text: "Sinnvoll ist ein Fragenkatalog aus zwei Teilen: Fachfragen, bei denen die Kanzlei als Quelle zitiert werden soll, und Anbieterfragen mit Ort und Rechtsgebiet, bei denen sie genannt werden soll. Wie wir solche Kataloge aufbauen, beschreibt unsere [Methodik](/ratgeber/methodik-prompt-katalog).",
      },
    ],
    related: [
      { label: "Entity Optimization", href: "/ratgeber/entity-optimization" },
      { label: "Answer Engine Optimization", href: "/ratgeber/answer-engine-optimization" },
      { label: "GEO Audit", href: "/geo-audit" },
    ],
    sources: [
      { label: "§ 43b BRAO (gesetze-im-internet.de)", href: "https://www.gesetze-im-internet.de/brao/__43b.html" },
      { label: "§ 57a StBerG (gesetze-im-internet.de)", href: "https://www.gesetze-im-internet.de/stberg/__57a.html" },
    ],
  },
];
