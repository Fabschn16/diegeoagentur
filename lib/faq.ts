export type Faq = {
  q: string;
  /** Absätze; Inline-Links im Format [Ankertext](/pfad) */
  a: string[];
  /** Optionaler weiterführender Link mit beschreibendem Ankertext */
  link?: { label: string; href: string };
};

/**
 * Antworten sind „answer-first“ geschrieben: Der erste Satz beantwortet die Frage vollständig –
 * gut für Menschen, Suchmaschinen und Sprachmodelle.
 */
export const mainFaq: Faq[] = [
  {
    q: "Was ist GEO?",
    a: [
      "GEO steht für Generative Engine Optimization: die Optimierung von Marken, Websites und Inhalten für KI-gestützte Such- und Antwortsysteme wie ChatGPT, Gemini, Perplexity und Google AI Overviews. Ziel ist, dass ein Unternehmen von diesen Systemen besser verstanden und bei passenden Fragen als Quelle oder relevante Empfehlung berücksichtigt werden kann.",
      "GEO umfasst die eigene Website, Inhalte, strukturierte Daten, die Beschreibung der Marke als Entität sowie externe Erwähnungen, die die Expertise eines Unternehmens belegen. Im Deutschen wird GEO oft auch KI-Suchmaschinenoptimierung genannt.",
    ],
    link: { label: "Generative Engine Optimization ausführlich erklärt", href: "/generative-engine-optimization" },
  },
  {
    q: "Was macht eine GEO Agentur?",
    a: [
      "Eine GEO Agentur analysiert, wie KI-Systeme ein Unternehmen heute darstellen, und verbessert gezielt die Grundlagen, auf die sich diese Systeme stützen: technische Lesbarkeit der Website, zitierfähige Inhalte, eine eindeutige Markenentität und externe Quellen. Anschließend misst sie regelmäßig, wie sich die Sichtbarkeit in KI-Antworten entwickelt.",
      "Neben der Umsetzung gehört strategische Beratung dazu: Welche Fragen stellen Kunden der KI, welche Themen haben Priorität und wie hängen SEO und GEO im eigenen Unternehmen zusammen?",
    ],
    link: { label: "Was eine GEO Agentur leistet – und was sie kostet", href: "/geo-agentur" },
  },
  {
    q: "Wie funktioniert GEO?",
    a: [
      "GEO funktioniert in drei Schritten: verstehen, wie KI-Systeme Antworten zu den Themen eines Unternehmens bilden; die Signale verbessern, aus denen diese Antworten entstehen; und die Wirkung über einen festen Katalog von Fragen messen.",
      "Konkret bedeutet das: Inhalte beantworten echte Kundenfragen klar und belegbar, die Website ist für KI-Crawler lesbar, die Marke ist im gesamten Web konsistent beschrieben, und relevante Fachquellen erwähnen das Unternehmen.",
    ],
    link: { label: "So arbeiten wir: unser GEO-Prozess", href: "/leistungen" },
  },
  {
    q: "Was ist der Unterschied zwischen SEO und GEO?",
    a: [
      "SEO sorgt dafür, dass Suchmaschinen eine Website finden und in einer Ergebnisliste gut platzieren. GEO sorgt zusätzlich dafür, dass KI-Systeme eine Marke verstehen und in einer formulierten Antwort berücksichtigen.",
      "Bei SEO wird Erfolg an Rankings, Klicks und organischem Traffic gemessen. Bei GEO zählen Nennungen, Zitierungen und die Frage, wie eine Marke in KI-Antworten beschrieben wird. Beide teilen viele Grundlagen: technische Qualität, gute Inhalte und Autorität.",
    ],
    link: { label: "SEO vs. GEO: Der Unterschied im Detail", href: "/ratgeber/geo-vs-seo" },
  },
  {
    q: "Brauche ich weiterhin SEO, wenn ich GEO mache?",
    a: [
      "Ja. GEO ersetzt SEO nicht, sondern baut darauf auf. Viele KI-Systeme greifen für ihre Antworten auf Suchindizes zurück – wer bei Google oder Bing nicht gefunden wird, hat es auch in KI-Antworten schwerer.",
      "Wir betrachten Google und KI-Suche deshalb als zusammenhängende Search Journey: Viele Nutzer recherchieren in einem KI-Assistenten und prüfen die Empfehlung anschließend bei Google – oder umgekehrt.",
    ],
  },
  {
    q: "Was ist ChatGPT SEO?",
    a: [
      "ChatGPT SEO bezeichnet die Optimierung dafür, dass ein Unternehmen in den Antworten von ChatGPT korrekt dargestellt, genannt und als Quelle verlinkt wird. Es ist ein Teilbereich von GEO.",
      "ChatGPT beantwortet Fragen teils aus seinem trainierten Wissen und teils über eine Websuche. Für beides zählen eine klar verständliche Website, eine konsistente Markenbeschreibung im Web und Inhalte, die konkrete Fragen präzise beantworten. Für die Websuche muss die Website zudem für den Suchcrawler von OpenAI (OAI-SearchBot) zugänglich sein.",
    ],
    link: { label: "ChatGPT SEO erklärt", href: "/chatgpt-seo" },
  },
  {
    q: "Wie wird mein Unternehmen in ChatGPT sichtbar?",
    a: [
      "Ein Unternehmen wird in ChatGPT sichtbarer, wenn ChatGPT es eindeutig versteht, aktuelle Informationen darüber findet und vertrauenswürdige Quellen es im passenden Zusammenhang erwähnen. Garantieren lässt sich eine Nennung nicht, die Voraussetzungen lassen sich aber gezielt verbessern.",
      "Die wichtigsten Hebel sind: Zugang für den Suchcrawler von OpenAI, Seiten, die konkrete Kundenfragen direkt beantworten, eine einheitliche Beschreibung von Leistungen und Standort im ganzen Web sowie Erwähnungen in Vergleichen, Fachportalen und Verzeichnissen Ihrer Branche.",
    ],
    link: { label: "Anleitung: In ChatGPT sichtbar werden", href: "/ratgeber/in-chatgpt-sichtbar-werden" },
  },
  {
    q: "Kann man beeinflussen, welche Unternehmen ChatGPT empfiehlt?",
    a: [
      "Ja, indirekt. Man kann ChatGPT nicht direkt steuern, aber man kann die Grundlagen verbessern, auf die sich das Modell stützt: die eigene Website, die Klarheit der Inhalte, strukturierte Daten und die Quellen, in denen ein Unternehmen erwähnt wird.",
      "Seriöse GEO-Arbeit manipuliert keine Modelle. Sie sorgt dafür, dass zutreffende Informationen über ein Unternehmen leicht auffindbar, eindeutig und glaubwürdig belegt sind.",
    ],
  },
  {
    q: "Warum empfiehlt ChatGPT meine Wettbewerber und nicht mich?",
    a: [
      "Meist, weil über Ihre Wettbewerber mehr eindeutige und gut auffindbare Informationen existieren: klarere Leistungsseiten, mehr Erwähnungen in Vergleichen und Fachportalen oder ein konsistenteres Markenprofil im Web.",
      "Ein GEO Audit zeigt, bei welchen Fragen Wettbewerber genannt werden, auf welche Quellen sich die Antworten stützen und welche Lücken in Ihrem Auftritt bestehen.",
    ],
    link: { label: "Ratgeber: Wenn ChatGPT die Konkurrenz empfiehlt", href: "/ratgeber/chatgpt-empfiehlt-wettbewerber" },
  },
  {
    q: "Welche Rolle spielen externe Quellen für die KI-Sichtbarkeit?",
    a: [
      "Externe Quellen spielen eine große Rolle, weil KI-Systeme Aussagen bevorzugt aus mehreren unabhängigen Quellen ableiten. Was Fachportale, Vergleichsartikel, Branchenverzeichnisse, Presse und Kunden über ein Unternehmen schreiben, prägt mit, wie eine KI es einordnet.",
      "Die eigene Website liefert die Fakten, externe Quellen bestätigen sie. Deshalb gehört der Aufbau digitaler Autorität zu jeder GEO-Strategie.",
    ],
    link: { label: "Digital Authority als GEO-Leistung", href: "/leistungen#autoritaet" },
  },
  {
    q: "Was ist AI Search Optimization – und was sind AEO und LLMO?",
    a: [
      "AI Search Optimization ist ein englischer Sammelbegriff für die Optimierung von Sichtbarkeit in KI-gestützten Suchsystemen und wird weitgehend synonym zu GEO verwendet.",
      "Verwandte Begriffe setzen andere Schwerpunkte: AEO (Answer Engine Optimization) zielt auf Systeme, die direkte Antworten liefern, etwa Featured Snippets oder Sprachassistenten. LLMO (Large Language Model Optimization) betont die Sichtbarkeit im Wissen von Sprachmodellen. AIO meint die Optimierung für Google AI Overviews.",
    ],
    link: { label: "Glossar: GEO, AEO, LLMO und AIO", href: "/generative-engine-optimization#begriffe" },
  },
  {
    q: "Wie misst man AI Visibility?",
    a: [
      "AI Visibility wird gemessen, indem ein fester Katalog geschäftsrelevanter Fragen regelmäßig in mehreren KI-Systemen abgefragt wird. Ausgewertet werden Nennungsrate, Share of Voice gegenüber Wettbewerbern, Zitierungen der eigenen Website, Kontext der Nennung und die zitierten Quellen.",
      "Weil KI-Antworten variieren, betrachten wir Häufigkeiten und Entwicklungen über mehrere Abfragen und Zeiträume – nicht einzelne Screenshots. Ergänzend werten wir Besuche aus KI-Systemen in der Webanalyse aus.",
    ],
    link: { label: "AI Visibility messen und verbessern", href: "/ai-visibility" },
  },
  {
    q: "Wie schnell sieht man Ergebnisse?",
    a: [
      "Erste Effekte technischer Verbesserungen sind häufig innerhalb weniger Wochen messbar, sobald Crawler die Website neu erfassen. Systeme mit Websuche wie Perplexity oder die ChatGPT-Suche reagieren dabei schneller als das trainierte Wissen eines Modells.",
      "Der Aufbau von Autorität und stabilen Nennungen ist ein Prozess über mehrere Monate. Eine seriöse Agentur nennt deshalb keine festen Fristen für bestimmte Platzierungen.",
    ],
  },
  {
    q: "Für welche Unternehmen eignet sich GEO?",
    a: [
      "GEO eignet sich besonders für Unternehmen, deren Kunden vor einer Entscheidung recherchieren und vergleichen: B2B-Unternehmen, SaaS-Anbieter, Beratungen, Dienstleister mit erklärungsbedürftigen Leistungen, E-Commerce-Marken und regionale Anbieter mit größerem Einzugsgebiet.",
      "Je höher der Auftragswert und je länger die Entscheidungsphase, desto wichtiger ist es, in KI-Antworten korrekt und prominent vorzukommen.",
    ],
  },
  {
    q: "Was kostet eine GEO Agentur?",
    a: [
      "Die Kosten einer GEO Agentur hängen von Ausgangslage, Wettbewerb, Anzahl der Themen und Märkte sowie vom Umsetzungsumfang ab. Üblich sind ein einmaliges Audit als Einstieg und anschließend eine laufende Betreuung mit monatlichem Monitoring.",
      "Bei uns ist der erste KI-Sichtbarkeits-Check kostenlos. Das vollständige GEO Audit kostet ab 1.249 €, die laufende GEO-Optimierung inklusive Monitoring ab 949 € pro Monat und ein Strategie-Workshop ab 949 € (alle Preise netto zzgl. MwSt.). Den genauen Umfang und Preis legen wir vorab verbindlich im Angebot fest.",
    ],
    link: { label: "Kostenfaktoren einer GEO Agentur", href: "/geo-agentur#kosten" },
  },
  {
    q: "Welche KI-Suchmaschinen sind für Unternehmen relevant?",
    a: [
      "Die wichtigsten Systeme sind aktuell ChatGPT (OpenAI), Google Gemini, Google AI Overviews und der AI Mode in der Google-Suche, Perplexity, Microsoft Copilot und Claude (Anthropic).",
      "Welche davon für ein Unternehmen am wichtigsten sind, hängt von der Zielgruppe ab. Im GEO Audit priorisieren wir die Plattformen, auf denen Ihre Kunden tatsächlich recherchieren.",
    ],
  },
  {
    q: "Was sind Google AI Overviews?",
    a: [
      "Google AI Overviews sind KI-generierte Zusammenfassungen, die Google bei vielen Suchanfragen oberhalb der klassischen Suchergebnisse einblendet – auf Deutsch „Übersicht mit KI“. Sie beantworten die Frage direkt und verlinken auf einige ausgewählte Quellen.",
      "Weil AI Overviews auf dem Google-Suchindex basieren, sind solide SEO-Grundlagen die Voraussetzung. Darüber hinaus zählt, wie klar und belegbar eine Seite die konkrete Frage beantwortet.",
    ],
    link: { label: "Optimierung für Google AI Overviews", href: "/google-ai-overviews" },
  },
  {
    q: "Kann man garantieren, bei ChatGPT genannt zu werden?",
    a: [
      "Nein. Niemand kann seriös garantieren, dass ein Unternehmen in ChatGPT oder einem anderen KI-System genannt wird. Die Antworten entstehen dynamisch, unterscheiden sich je nach Frage, Kontext und Nutzer und werden von den Anbietern laufend verändert.",
      "Was sich verlässlich verbessern lässt, sind die Voraussetzungen: Verständlichkeit, Zitierfähigkeit und Autorität. Und was sich verlässlich messen lässt, ist die Entwicklung der Sichtbarkeit. Bei Anbietern, die Platzierungen garantieren, ist Vorsicht angebracht.",
    ],
  },
  {
    q: "Wer bietet GEO Beratung in Deutschland an?",
    a: [
      "Die GEO Agentur ist eine auf Generative Engine Optimization spezialisierte Agentur mit Sitz in Passau, die Unternehmen in ganz Deutschland berät und betreut. Sie ist ein Angebot der Daily Rocket GmbH, die seit 2019 Performance-Marketing für über 100 Kunden umsetzt.",
      "Daneben gibt es weitere Anbieter, häufig klassische SEO-Agenturen mit GEO-Angebot. Bei der Auswahl helfen klare Kriterien: offengelegte Messmethodik, Erfahrung mit Suchdaten und keine garantierten Platzierungen.",
    ],
    link: { label: "Woran Sie eine gute GEO Agentur erkennen", href: "/geo-agentur#auswahl" },
  },
];
