import type { Faq } from "./faq";
import type { QA } from "@/components/ui/QASection";
import { platformExtras } from "@/content/platformQa";

export type PlatformPageData = {
  slug: string;
  name: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  h1: [string, string];
  lead: string;
  answer: string;
  glance: { k: string; v: string }[];
  howTitle: [string, string];
  how: string[];
  levers: { t: string; d: string }[];
  faq: Faq[];
  sources?: { label: string; href: string }[];
  qaTitle?: [string, string];
  qa?: QA[];
  related?: { label: string; href: string; note?: string }[];
};

const basePages: Record<string, PlatformPageData> = {
  "chatgpt-seo": {
    slug: "chatgpt-seo",
    name: "ChatGPT SEO",
    eyebrow: "ChatGPT SEO",
    metaTitle: "ChatGPT SEO – in ChatGPT-Antworten genannt werden",
    metaDescription:
      "ChatGPT SEO von der GEO Agentur: Wir optimieren Ihr Unternehmen dafür, in ChatGPT und der ChatGPT-Suche korrekt dargestellt, genannt und als Quelle verlinkt zu werden.",
    h1: ["ChatGPT SEO:", "Teil der Antwort werden."],
    lead: "ChatGPT ist für viele Menschen der erste Ort, an dem sie nach Anbietern, Produkten und Lösungen fragen. Wir sorgen dafür, dass Ihr Unternehmen dort richtig verstanden und bei passenden Fragen berücksichtigt wird.",
    answer:
      "ChatGPT SEO ist die Optimierung dafür, dass ein Unternehmen in den Antworten von ChatGPT korrekt dargestellt, genannt und als Quelle verlinkt wird. Es verbindet saubere technische Grundlagen mit klaren, zitierfähigen Inhalten, einer eindeutigen Markenentität und Erwähnungen in den Quellen, auf die sich ChatGPT stützt.",
    glance: [
      { k: "Plattform", v: "ChatGPT von OpenAI, inklusive ChatGPT-Suche" },
      { k: "Relevante Crawler", v: "OAI-SearchBot (Suche), GPTBot (Training), ChatGPT-User (Nutzeraufrufe)" },
      { k: "Wichtigste Hebel", v: "Crawlbarkeit, zitierfähige Inhalte, Entität, Drittquellen" },
      { k: "Messung", v: "Nennungsrate, Zitierungen, Kontext über festen Prompt-Katalog" },
    ],
    howTitle: ["Wie ChatGPT", "Antworten bildet."],
    how: [
      "ChatGPT beantwortet Fragen auf zwei Wegen. Zum einen aus dem Wissen, das das Modell im Training gelernt hat. Zum anderen über die ChatGPT-Suche: Dabei durchsucht ChatGPT das Web in Echtzeit, fasst passende Seiten zusammen und verlinkt sie als Quellen.",
      "Für das trainierte Wissen zählt, wie konsistent und häufig Ihr Unternehmen im Web beschrieben wird. Für die Suche zählt, ob Ihre Seiten für den Suchcrawler von OpenAI zugänglich sind und die konkrete Frage präziser beantworten als andere Quellen.",
    ],
    levers: [
      { t: "Zugang für OpenAI-Crawler", d: "Wir prüfen robots.txt, Firewall- und CDN-Regeln, damit OAI-SearchBot Ihre Inhalte erreichen kann." },
      { t: "Serverseitig lesbare Inhalte", d: "Wichtige Inhalte stehen direkt im HTML – nicht erst nach JavaScript-Rendering." },
      { t: "Antworten statt Werbetexte", d: "Seiten, die konkrete Kundenfragen im ersten Absatz beantworten und mit Fakten belegen." },
      { t: "Eindeutige Markenentität", d: "Gleiche Beschreibung von Leistungen, Standorten und Personen auf Website, Profilen und Verzeichnissen." },
      { t: "Präsenz in Drittquellen", d: "Vergleichsartikel, Fachportale und Branchenlisten, die ChatGPT bei Ihrer Themenwelt heranzieht." },
      { t: "Kontinuierliches Monitoring", d: "Regelmäßige Abfragen eines festen Prompt-Katalogs – inklusive Wettbewerbsvergleich." },
    ],
    faq: [
      {
        q: "Wie finde ich heraus, was ChatGPT über mein Unternehmen sagt?",
        a: [
          "Am zuverlässigsten über eine strukturierte Abfrage vieler relevanter Fragen – nicht über eine einzelne Testfrage. Genau das leistet unser kostenloser Sichtbarkeits-Check: Wir fragen ChatGPT und weitere Systeme so, wie Ihre Kunden fragen, und zeigen Ihnen die Ergebnisse.",
        ],
      },
      {
        q: "Kann ChatGPT falsche Informationen über mein Unternehmen wiedergeben?",
        a: [
          "Ja. Sprachmodelle können veraltete oder falsche Angaben wiedergeben, etwa zu Leistungen, Preisen oder Standorten. Die wirksamste Gegenmaßnahme sind eindeutige, aktuelle und konsistente Informationen auf der eigenen Website und in den Quellen, die das Modell heranzieht.",
        ],
      },
      {
        q: "Muss ich GPTBot in der robots.txt erlauben?",
        a: [
          "Nicht zwingend. GPTBot sammelt Inhalte für das Training von Modellen, OAI-SearchBot für die ChatGPT-Suche. Beide lassen sich getrennt steuern. Wer in der ChatGPT-Suche als Quelle erscheinen möchte, sollte OAI-SearchBot zulassen. Ob GPTBot zugelassen wird, ist eine strategische Entscheidung, die wir gemeinsam mit Ihnen treffen.",
        ],
      },
      {
        q: "Garantieren Sie eine Nennung in ChatGPT?",
        a: [
          "Nein. ChatGPT-Antworten entstehen dynamisch und lassen sich nicht garantieren. Wir verbessern die Voraussetzungen für eine Nennung und messen transparent, wie sich Ihre Sichtbarkeit entwickelt.",
        ],
      },
    ],
    sources: [{ label: "OpenAI: Overview of OpenAI Crawlers", href: "https://platform.openai.com/docs/bots" }],
  },

  "gemini-seo": {
    slug: "gemini-seo",
    name: "Gemini SEO",
    eyebrow: "Gemini SEO",
    metaTitle: "Gemini SEO – sichtbar in Google Gemini",
    metaDescription:
      "Gemini SEO von der GEO Agentur: Wir optimieren Unternehmen dafür, in Antworten von Google Gemini sichtbar und korrekt dargestellt zu werden – auf Basis von Google-Index, Entitäten und strukturierten Daten.",
    h1: ["Gemini SEO:", "Sichtbar im KI-Assistenten von Google."],
    lead: "Gemini ist in Android, Google Workspace und die Google-App integriert. Wer im Google-Ökosystem sauber aufgestellt ist, hat die besten Voraussetzungen – aber nicht automatisch eine Nennung.",
    answer:
      "Gemini SEO ist die Optimierung dafür, dass ein Unternehmen in den Antworten von Google Gemini sichtbar und korrekt dargestellt wird. Grundlage ist eine starke Präsenz im Google-Ökosystem: indexierbare Inhalte, strukturierte Daten, ein gepflegtes Unternehmensprofil und eindeutige Entitätssignale.",
    glance: [
      { k: "Plattform", v: "Google Gemini (App, Web, Android, Workspace)" },
      { k: "Datengrundlage", v: "Trainiertes Modellwissen und Google-Suche als Grounding" },
      { k: "Steuerung", v: "Google-Extended in der robots.txt" },
      { k: "Wichtigste Hebel", v: "Google-Index, Entität, strukturierte Daten, Autorität" },
    ],
    howTitle: ["Wie Gemini", "Antworten bildet."],
    how: [
      "Gemini kombiniert das Wissen des Sprachmodells mit aktuellen Informationen aus der Google-Suche. Dadurch profitieren Unternehmen, die in Google gut indexiert, klar strukturiert und als Entität eindeutig erkennbar sind.",
      "Eine Besonderheit ist Google-Extended: Über diesen Eintrag in der robots.txt steuern Website-Betreiber, ob Google ihre Inhalte für Gemini-Modelle und das Grounding in Gemini nutzen darf. Die Darstellung in der Google-Suche und in AI Overviews ist davon nicht betroffen.",
    ],
    levers: [
      { t: "Technische SEO-Basis", d: "Indexierung, Seitenqualität und Snippet-Fähigkeit als Voraussetzung für jede Google-KI." },
      { t: "Entität im Knowledge Graph", d: "Eindeutige Organisations-, Personen- und Leistungsdaten, die Google einer Marke zuordnen kann." },
      { t: "Strukturierte Daten", d: "Schema.org für Organisation, Leistungen, Personen, Artikel und FAQ." },
      { t: "Google Unternehmensprofil", d: "Für regional tätige Unternehmen: vollständig, aktuell und konsistent mit der Website." },
      { t: "Klare Antwortstruktur", d: "Inhalte mit eindeutigen Definitionen, Vergleichen und Schritt-für-Schritt-Erklärungen." },
      { t: "Bewusste Crawler-Entscheidung", d: "Google-Extended nicht versehentlich blockieren – oder bewusst und begründet." },
    ],
    faq: [
      {
        q: "Ist Gemini SEO dasselbe wie SEO für Google?",
        a: [
          "Nicht ganz. Die Grundlagen überschneiden sich stark, weil Gemini auf die Google-Suche zurückgreift. Gemini formuliert aber eigene Antworten und nennt dabei nur wenige Anbieter. Entscheidend ist deshalb zusätzlich, wie eindeutig Ihre Marke als Entität erkennbar ist und wie zitierfähig Ihre Inhalte sind.",
        ],
      },
      {
        q: "Was passiert, wenn ich Google-Extended blockiere?",
        a: [
          "Dann dürfen Ihre Inhalte nicht für Gemini-Modelle und das Grounding in Gemini verwendet werden. Ihre Sichtbarkeit in der klassischen Google-Suche und in AI Overviews bleibt davon unberührt. Für die meisten Unternehmen, die in Gemini sichtbar sein wollen, ist eine Blockade nicht sinnvoll.",
        ],
      },
      {
        q: "Wie unterscheiden sich Gemini und AI Overviews?",
        a: [
          "AI Overviews sind KI-Zusammenfassungen innerhalb der Google-Suche. Gemini ist Googles eigenständiger KI-Assistent. Beide nutzen Googles Infrastruktur, sind aber getrennte Produkte mit eigener Darstellung – wir betrachten sie deshalb getrennt.",
        ],
      },
    ],
    sources: [
      { label: "Google: Übersicht über Google-Crawler (Google-Extended)", href: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers" },
    ],
  },

  "perplexity-seo": {
    slug: "perplexity-seo",
    name: "Perplexity SEO",
    eyebrow: "Perplexity SEO",
    metaTitle: "Perplexity SEO – als Quelle in Perplexity zitiert werden",
    metaDescription:
      "Perplexity SEO von der GEO Agentur: Wir optimieren Ihre Website dafür, in Perplexity als Quelle ausgewählt und zitiert zu werden – mit technischer Basis, präzisen Inhalten und Monitoring.",
    h1: ["Perplexity SEO:", "Als Quelle zitiert werden."],
    lead: "Perplexity zeigt zu jeder Antwort nummerierte Quellen. Das macht die Plattform besonders transparent – und besonders relevant für Unternehmen, deren Kunden gründlich recherchieren.",
    answer:
      "Perplexity SEO ist die Optimierung dafür, dass eine Website in Perplexity als Quelle ausgewählt und zitiert wird. Perplexity durchsucht für nahezu jede Anfrage das Web in Echtzeit und zeigt seine Quellen an. Verbesserungen an Inhalten und Technik wirken dort deshalb oft schneller als bei rein modellbasierten Antworten.",
    glance: [
      { k: "Plattform", v: "Perplexity, Answer Engine mit Echtzeit-Websuche" },
      { k: "Relevanter Crawler", v: "PerplexityBot" },
      { k: "Besonderheit", v: "Nummerierte, sichtbare Quellen zu jeder Antwort" },
      { k: "Wichtigste Hebel", v: "Crawlbarkeit, Präzision, Aktualität, Quellenlandschaft" },
    ],
    howTitle: ["Wie Perplexity", "Quellen auswählt."],
    how: [
      "Perplexity versteht sich als Answer Engine: Zu einer Frage werden passende Webseiten gesucht, gelesen und zu einer Antwort mit Quellenangaben zusammengefasst. Nutzer sehen genau, woher eine Aussage stammt – und klicken gezielt auf Quellen, um tiefer einzusteigen.",
      "Ausgewählt werden Seiten, die eine Frage präzise, aktuell und gut belegt beantworten. Neben Ihrer eigenen Website spielen dabei Fachportale, Vergleiche und Foren eine große Rolle, die Perplexity zu Ihrem Thema heranzieht.",
    ],
    levers: [
      { t: "Crawlbarkeit für PerplexityBot", d: "Freigabe in robots.txt, CDN und Firewall – und schnelle, stabile Auslieferung." },
      { t: "Präzise Absätze", d: "Jeder Abschnitt beantwortet eine Frage vollständig und lässt sich einzeln zitieren." },
      { t: "Aktualität sichtbar machen", d: "Gepflegte Inhalte mit Datum, aktuellen Zahlen und klaren Versionsständen." },
      { t: "Belege und Zahlen", d: "Konkrete Fakten, Quellen und Beispiele statt allgemeiner Aussagen." },
      { t: "Quellenlandschaft", d: "Präsenz auf den Portalen und Vergleichsseiten, die Perplexity in Ihrer Branche zitiert." },
      { t: "Messung der Zitierungen", d: "Wie oft Ihre Domain als Quelle erscheint – und bei welchen Fragen." },
    ],
    faq: [
      {
        q: "Warum ist Perplexity für B2B-Unternehmen interessant?",
        a: [
          "Perplexity wird häufig für gründliche Recherchen genutzt – etwa zum Vergleich von Anbietern oder zur Einarbeitung in ein Fachthema. Weil Quellen sichtbar verlinkt sind, entsteht aus einer Zitierung oft ein qualifizierter Besuch.",
        ],
      },
      {
        q: "Wie schnell wirken Optimierungen in Perplexity?",
        a: [
          "Da Perplexity in Echtzeit sucht, können sich Verbesserungen an Inhalten und Technik vergleichsweise schnell auswirken – sobald die Seiten neu erfasst wurden. Verlässliche Aussagen treffen wir erst auf Basis wiederholter Messungen.",
        ],
      },
      {
        q: "Brauche ich für Perplexity eigene Inhalte?",
        a: [
          "Meist nicht. Gute Inhalte funktionieren plattformübergreifend. Wir priorisieren aber Fragen, bei denen Perplexity in Ihrer Branche besonders häufig genutzt wird, und passen Struktur und Belege entsprechend an.",
        ],
      },
    ],
    sources: [{ label: "Perplexity: Perplexity Crawlers", href: "https://docs.perplexity.ai/guides/bots" }],
  },

  "google-ai-overviews": {
    slug: "google-ai-overviews",
    name: "Google AI Overviews",
    eyebrow: "Google AI Overviews",
    metaTitle: "Google AI Overviews Optimierung – in der „Übersicht mit KI“ erscheinen",
    metaDescription:
      "Optimierung für Google AI Overviews: Wir sorgen dafür, dass Ihre Inhalte in den KI-Übersichten der Google-Suche als Quelle berücksichtigt werden – auf Basis solider SEO und klarer Antwortstruktur.",
    h1: ["Google AI Overviews:", "Ganz oben – in der Antwort."],
    lead: "Bei vielen Suchanfragen steht über den klassischen Ergebnissen inzwischen eine KI-Zusammenfassung. Wer dort als Quelle verlinkt ist, wird gesehen, bevor der erste organische Treffer beginnt.",
    answer:
      "Google AI Overviews – auf Deutsch „Übersicht mit KI“ – sind KI-generierte Zusammenfassungen oberhalb der klassischen Suchergebnisse. Sie basieren auf dem Google-Suchindex und verlinken ausgewählte Quellen. Voraussetzung sind indexierbare Seiten mit soliden SEO-Grundlagen; entscheidend ist dann, wie klar und belegbar eine Seite die konkrete Frage beantwortet.",
    glance: [
      { k: "Plattform", v: "Google-Suche – AI Overviews und AI Mode" },
      { k: "In Deutschland", v: "Als „Übersicht mit KI“ seit Frühjahr 2025" },
      { k: "Reichweite", v: "Über 2 Mrd. monatliche Nutzer weltweit (Alphabet, Juli 2025)" },
      { k: "Voraussetzung", v: "Indexierte, snippet-fähige Seiten – keine Zusatztechnik nötig" },
    ],
    howTitle: ["Wie AI Overviews", "Quellen auswählen."],
    how: [
      "AI Overviews greifen auf den regulären Google-Index zu. Laut Google gibt es keine zusätzlichen technischen Anforderungen: Eine Seite muss indexiert sein und für ein Snippet in Frage kommen. Welche Seiten verlinkt werden, hängt davon ab, wie gut sie einzelne Aspekte der Frage beantworten.",
      "Das verändert die Logik der Sichtbarkeit. Nicht nur die Seite auf Position 1 kann verlinkt werden, sondern die Seite, die einen Teilaspekt am klarsten erklärt. Gleichzeitig werden klassische Ergebnisse weiter nach unten gedrängt.",
    ],
    levers: [
      { t: "SEO-Fundament", d: "Indexierung, Seitenqualität, interne Verlinkung und Core Web Vitals." },
      { t: "Snippet-Fähigkeit", d: "Keine versehentlichen nosnippet- oder max-snippet-Einschränkungen." },
      { t: "Frage-Antwort-Struktur", d: "Kernaussage im ersten Absatz, klare Zwischenüberschriften, Listen und Tabellen." },
      { t: "Expertise zeigen", d: "Autoren, Belege, Erfahrungswerte und nachvollziehbare Quellen." },
      { t: "Strukturierte Daten", d: "Maschinenlesbare Fakten zu Organisation, Leistungen und Inhalten." },
      { t: "Messung", d: "Welche Suchanfragen eine AI Overview auslösen – und ob Ihre Seite darin verlinkt ist." },
    ],
    faq: [
      {
        q: "Kosten AI Overviews Traffic?",
        a: [
          "Bei manchen Informationsfragen klicken Nutzer seltener, weil die Antwort bereits oben steht. Gleichzeitig erhalten die in der AI Overview verlinkten Quellen besonders prominente Sichtbarkeit. Entscheidend ist, bei den geschäftsrelevanten Fragen als Quelle vertreten zu sein.",
        ],
      },
      {
        q: "Brauche ich für AI Overviews spezielles Markup?",
        a: [
          "Nein. Google nennt keine zusätzlichen Anforderungen über die üblichen SEO-Best-Practices hinaus. Strukturierte Daten helfen dabei, Inhalte eindeutig zu machen, sind aber keine Voraussetzung für die Aufnahme.",
        ],
      },
      {
        q: "Was ist der AI Mode?",
        a: [
          "Der AI Mode ist ein eigener, dialogorientierter Suchmodus von Google, in dem Nutzer komplexere Fragen stellen und nachfragen können. Er nutzt dieselbe Grundlage wie AI Overviews, geht aber stärker in die Tiefe. Für beide gelten dieselben Grundprinzipien.",
        ],
      },
    ],
    sources: [
      { label: "Google Search Central: KI-Funktionen und Ihre Website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      {
        label: "TechCrunch: Google's AI Overviews have 2B monthly users (23.07.2025)",
        href: "https://techcrunch.com/2025/07/23/googles-ai-overviews-have-2b-monthly-users-ai-mode-100m-in-the-us-and-india/",
      },
    ],
  },
};

/** Basisdaten + vertiefende Q&A-Abschnitte, Meta-Daten und interne Links aus content/platformQa.ts */
export const platformPages: Record<string, PlatformPageData> = Object.fromEntries(
  Object.entries(basePages).map(([k, v]) => [k, { ...v, ...(platformExtras[k] ?? {}) }]),
);
