import type { QA } from "@/components/ui/QASection";

/** Die zentrale Definition – identisch auf Pillar-Seite, Ratgeber-Hub und in llms.txt verwendet. */
export const geoDefinition =
  "Generative Engine Optimization (GEO) bezeichnet die Optimierung von Marken, Websites und Inhalten für KI-gestützte Such- und Antwortsysteme wie ChatGPT, Gemini, Perplexity und Google AI Overviews. Ziel ist, dass ein Unternehmen von diesen Systemen besser verstanden und bei relevanten Suchanfragen als Quelle oder relevante Empfehlung berücksichtigt werden kann.";

export const glossary = [
  {
    term: "GEO",
    name: "Generative Engine Optimization",
    description:
      "Optimierung von Marken, Websites und Inhalten für generative KI-Suchsysteme, damit diese ein Unternehmen verstehen und in Antworten als Quelle oder Empfehlung berücksichtigen können. Oberbegriff dieser Website.",
  },
  {
    term: "KI-SEO",
    name: "KI-Suchmaschinenoptimierung",
    description: "Deutschsprachige Bezeichnung für GEO. Wird oft auch als KI-SEO oder AI SEO abgekürzt.",
  },
  {
    term: "AI Search Optimization",
    name: "AI Search Optimization",
    description: "Englischer Sammelbegriff für die Optimierung der Sichtbarkeit in KI-gestützten Suchsystemen; weitgehend synonym zu GEO.",
  },
  {
    term: "GSO",
    name: "Generative Search Optimization",
    description: "Seltener verwendete Variante von GEO mit Fokus auf generative Suchergebnisse innerhalb von Suchmaschinen.",
  },
  {
    term: "AEO",
    name: "Answer Engine Optimization",
    description:
      "Optimierung für Systeme, die direkte Antworten liefern – Featured Snippets, Sprachassistenten, Antwortmaschinen. Überschneidet sich mit GEO, konzentriert sich aber stärker auf die Form einzelner Inhalte.",
  },
  {
    term: "LLMO",
    name: "Large Language Model Optimization",
    description: "Betont die Repräsentation einer Marke im Wissen und in den Antworten großer Sprachmodelle. Auch LLM SEO genannt.",
  },
  {
    term: "AIO",
    name: "AI Overview Optimization",
    description: "Optimierung für Google AI Overviews („Übersicht mit KI“) und den AI Mode der Google-Suche. Teilweise auch GAIO genannt.",
  },
  {
    term: "AI Visibility",
    name: "AI Visibility (KI-Sichtbarkeit)",
    description: "Maß dafür, wie häufig und in welchem Kontext eine Marke in Antworten von KI-Systemen genannt oder als Quelle zitiert wird.",
  },
  {
    term: "Entität",
    name: "Entität (Entity)",
    description:
      "Eindeutig identifizierbares Objekt wie ein Unternehmen, eine Person oder ein Ort. Suchmaschinen und Sprachmodelle ordnen Informationen Entitäten und ihren Beziehungen zu.",
  },
];

export const pillarSections: QA[] = [
  {
    id: "funktionsweise",
    q: "Wie funktioniert Generative Engine Optimization?",
    a: [
      "Generative Engine Optimization funktioniert, indem sie an den beiden Wegen ansetzt, auf denen ein KI-System Informationen über ein Unternehmen gewinnt: dem trainierten Wissen des Sprachmodells und der Websuche, mit der viele Systeme zum Zeitpunkt einer Frage aktuelle Seiten abrufen.",
      "Für das trainierte Wissen zählt, wie konsistent und häufig ein Unternehmen über längere Zeit im Web beschrieben wird. Für die Websuche zählen Auffindbarkeit, technische Lesbarkeit, Aktualität und die Frage, wie präzise eine Seite die konkrete Frage beantwortet. GEO verbessert beides und misst die Wirkung über einen festen Katalog von Fragen.",
    ],
  },
  {
    id: "faktoren",
    q: "Welche Faktoren beeinflussen die Sichtbarkeit in KI-Antworten?",
    a: [
      "Die Sichtbarkeit in KI-Antworten hängt vor allem von fünf Faktoren ab: technischer Zugänglichkeit, inhaltlicher Klarheit, Belegbarkeit, einer eindeutigen Markenentität und externer Autorität.",
      "Technisch müssen KI-Crawler die Website erreichen und Inhalte ohne JavaScript lesen können ([Technical GEO](/leistungen#technik)). Inhaltlich sollten Seiten konkrete Fragen direkt beantworten ([Content für AI Search](/leistungen#content)). Belegbarkeit entsteht durch Zahlen, Beispiele, Quellen und erkennbare Autoren. Die Markenentität muss überall gleich beschrieben sein ([Entity Optimization](/ratgeber/entity-optimization)). Und externe Quellen – Fachportale, Vergleiche, Verzeichnisse, Presse – müssen bestätigen, wofür ein Unternehmen steht ([Digital Authority](/leistungen#autoritaet)).",
    ],
  },
  {
    id: "relevanz",
    q: "Warum ist GEO gerade jetzt relevant?",
    a: [
      "GEO ist relevant, weil ein wachsender Teil der Recherche in KI-Systemen stattfindet und diese Systeme oft nur wenige Anbieter konkret nennen. ChatGPT erreichte im Februar 2026 rund 900 Millionen wöchentlich aktive Nutzer, Google AI Overviews laut Alphabet bereits im Juli 2025 mehr als zwei Milliarden monatliche Nutzer.",
      "Bei Google konnte ein Unternehmen auch auf Position fünf noch gefunden werden. In einer KI-Antwort gibt es oft keine Position fünf. Wer dort nicht vorkommt, wird in diesem Moment nicht in Betracht gezogen. Mehr zu den Veränderungen der Suche im Beitrag [Was ist AI Search?](/ratgeber/was-ist-ai-search).",
    ],
  },
  {
    id: "herkunft",
    q: "Woher stammt der Begriff Generative Engine Optimization?",
    a: [
      "Der Begriff Generative Engine Optimization wurde 2023 durch ein Forschungspapier von Wissenschaftlern der Princeton University, des Georgia Institute of Technology, des Allen Institute for AI und des IIT Delhi geprägt.",
      "Die Autoren untersuchten, welche Eigenschaften von Inhalten beeinflussen, ob generative Suchsysteme sie in ihre Antworten übernehmen. In ihren Tests konnten etwa Quellenangaben, Zitate und konkrete Zahlen die Sichtbarkeit von Inhalten um bis zu 40 Prozent steigern.",
    ],
  },
  {
    id: "abgrenzung",
    q: "Was gehört zu GEO – und was nicht?",
    a: [
      "Zu GEO gehören Analyse, technische Optimierung, Inhalte, Entitätsaufbau, externe Autorität und Messung. Nicht dazu gehören Versuche, Sprachmodelle durch versteckte Texte, gefälschte Bewertungen oder künstliche Massenerwähnungen zu manipulieren.",
      "Ebenso wenig kann seriöse GEO-Arbeit Platzierungen garantieren: KI-Antworten entstehen dynamisch und werden von den Anbietern laufend verändert. Verlässlich verbessern lassen sich die Voraussetzungen – und verlässlich messen lässt sich die Entwicklung.",
    ],
  },
  {
    id: "seo",
    q: "Ersetzt GEO die klassische Suchmaschinenoptimierung?",
    a: [
      "Nein. GEO baut auf SEO auf und ergänzt sie. Viele KI-Systeme greifen auf Suchindizes zurück, und technische Qualität, gute Inhalte und Autorität wirken auf beides. Neu sind vor allem die Ausrichtung auf Fragen statt Keywords, die Bedeutung der Markenentität und die Messung von Nennungen statt Rankings.",
      "Den Vergleich im Detail beschreibt der Beitrag [SEO vs. GEO: Was ist der Unterschied?](/ratgeber/geo-vs-seo).",
    ],
  },
  {
    id: "messung",
    q: "Wie misst man den Erfolg von GEO?",
    a: [
      "Der Erfolg von GEO wird über einen festen Katalog geschäftsrelevanter Fragen gemessen, die regelmäßig in mehreren KI-Systemen gestellt werden. Kennzahlen sind Nennungsrate, Share of Voice gegenüber Wettbewerbern, Zitierungen der eigenen Website, Kontext und Korrektheit der Darstellung.",
      "Ergänzend wird der Traffic aus KI-Systemen in der Webanalyse ausgewertet. Wie wir das als laufende Leistung umsetzen, zeigt die Seite [AI Visibility Monitoring](/ai-visibility).",
    ],
  },
  {
    id: "zielgruppen",
    q: "Für welche Unternehmen lohnt sich GEO?",
    a: [
      "GEO lohnt sich besonders für Unternehmen, deren Kunden vor einer Entscheidung recherchieren: B2B-Anbieter, SaaS-Unternehmen, Beratungen, Kanzleien, Dienstleister mit erklärungsbedürftigen Leistungen, E-Commerce-Marken und regionale Anbieter mit großem Einzugsgebiet.",
      "Wie eine Strategie je nach Geschäftsmodell aussieht, beschreibt der Leitfaden [GEO-Strategie entwickeln](/ratgeber/geo-strategie). Branchenleitfäden gibt es für [SaaS-Anbieter](/ratgeber/geo-saas), [Online-Shops](/ratgeber/geo-e-commerce) sowie [Kanzleien und Steuerberater](/ratgeber/geo-kanzleien-steuerberater).",
    ],
  },
];
