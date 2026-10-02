/**
 * GEO Wissen – die Knowledge Base der GEO Agentur.
 * Inline-Links im Fließtext: [Ankertext](/pfad). Jeder Artikel beginnt mit einer zitierfähigen Kurzantwort.
 */
import { newArticles } from "./articles-2";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type Cluster = "Grundlagen" | "Plattformen" | "Praxis" | "Strategie";

export type Article = {
  slug: string;
  title: string;
  /** Meta Title, falls abweichend vom H1 */
  metaTitle?: string;
  description: string;
  category: Cluster;
  published: string;
  updated: string;
  readingMinutes: number;
  author: "jan" | "fabian";
  /** Themen/Keywords für Schema.org (about) */
  topics: string[];
  /** Die Kurzantwort: ein zitierfähiger Absatz ganz oben */
  answer: string;
  body: Block[];
  /** Weiterführende Seiten mit beschreibendem Ankertext */
  related?: { label: string; href: string }[];
  sources?: { label: string; href: string }[];
};

export const categories: { slug: string; name: Cluster; description: string }[] = [
  { slug: "grundlagen", name: "Grundlagen", description: "Begriffe und Konzepte: GEO, AI Search, AEO und LLM Optimization." },
  { slug: "plattformen", name: "Plattformen", description: "Wie ChatGPT, Gemini, Perplexity, Google AI Overviews, Copilot und Claude Quellen auswählen." },
  { slug: "praxis", name: "Praxis", description: "Sichtbarkeit messen, Audits durchführen und konkrete Probleme lösen." },
  { slug: "strategie", name: "Strategie", description: "GEO und SEO verbinden, Entitäten stärken und eine GEO-Strategie aufbauen." },
];

const SEP_2026 = "2026-09-24";
const OKT_2026 = "2026-10-01";

const baseArticles: Article[] = [
  /* ───────────────────────────── GRUNDLAGEN ───────────────────────────── */
  {
    slug: "was-ist-ai-search",
    title: "Was ist AI Search? KI-Suche einfach erklärt",
    description:
      "AI Search erklärt: Wie KI-Suchmaschinen wie ChatGPT, Perplexity und Google AI Overviews Antworten erzeugen, worin sie sich von klassischer Suche unterscheiden und was das für Unternehmen bedeutet.",
    category: "Grundlagen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["AI Search", "KI-Suche", "Generative Search", "Retrieval Augmented Generation"],
    answer:
      "AI Search (KI-Suche) bezeichnet Suchsysteme, die auf eine Frage keine Linkliste ausgeben, sondern mithilfe eines Sprachmodells eine eigene Antwort formulieren und dafür Informationen aus dem Web und aus ihrem trainierten Wissen zusammenführen. Bekannte Beispiele sind ChatGPT mit Websuche, Perplexity, Microsoft Copilot und Google AI Overviews.",
    body: [
      { type: "h2", text: "Wie AI Search funktioniert" },
      {
        type: "p",
        text: "Die meisten KI-Suchsysteme arbeiten nach einem ähnlichen Prinzip, das in der Fachsprache Retrieval Augmented Generation (RAG) heißt: Zuerst sucht das System passende Dokumente (Retrieval), dann formuliert ein Sprachmodell auf dieser Grundlage eine Antwort (Generation) und verweist häufig auf die verwendeten Quellen.",
      },
      {
        type: "ol",
        items: [
          "Der Nutzer stellt eine Frage, oft ausführlich und mit Kontext.",
          "Das System zerlegt die Frage in Teilfragen und durchsucht einen Suchindex oder das Web.",
          "Passende Seiten werden gelesen und nach Relevanz und Vertrauenswürdigkeit bewertet.",
          "Das Sprachmodell fasst die Informationen zu einer Antwort zusammen und nennt ausgewählte Quellen.",
        ],
      },
      { type: "h2", text: "Was AI Search von klassischer Suche unterscheidet" },
      {
        type: "table",
        head: ["", "Klassische Suche", "AI Search"],
        rows: [
          ["Ergebnis", "Liste mit Links", "Formulierte Antwort mit wenigen Quellen"],
          ["Anfrage", "Kurze Suchbegriffe", "Ganze Fragen mit Kontext"],
          ["Entscheidung", "Nutzer vergleicht selbst", "System fasst zusammen und empfiehlt"],
          ["Sichtbarkeit", "Position im Ranking", "Nennung und Zitierung in der Antwort"],
        ],
      },
      { type: "h2", text: "Welche Systeme zur AI Search gehören" },
      {
        type: "ul",
        items: [
          "[ChatGPT](/chatgpt-seo) mit integrierter Websuche",
          "[Perplexity](/perplexity-seo) als Answer Engine mit nummerierten Quellen",
          "[Google AI Overviews](/google-ai-overviews) und der AI Mode in der Google-Suche",
          "[Google Gemini](/gemini-seo) als eigenständiger Assistent",
          "[Microsoft Copilot und Claude](/ratgeber/copilot-und-claude)",
        ],
      },
      { type: "h2", text: "Was AI Search für Unternehmen bedeutet" },
      {
        type: "p",
        text: "In einer KI-Antwort werden oft nur wenige Anbieter konkret genannt. Wer dort nicht vorkommt, wird in diesem Moment nicht in Betracht gezogen – auch wenn die eigene Website bei Google auf Seite eins steht. Die Disziplin, die sich mit dieser Sichtbarkeit beschäftigt, heißt [Generative Engine Optimization (GEO)](/generative-engine-optimization).",
      },
      {
        type: "p",
        text: "Gleichzeitig bleibt klassische Suche wichtig: Viele KI-Systeme greifen auf Suchindizes zurück. Eine solide SEO-Basis ist deshalb die Voraussetzung für Sichtbarkeit in der KI-Suche. Mehr dazu im Beitrag [SEO vs. GEO](/ratgeber/geo-vs-seo).",
      },
    ],
    related: [
      { label: "Was ist Generative Engine Optimization?", href: "/generative-engine-optimization" },
      { label: "Was ist Answer Engine Optimization?", href: "/ratgeber/answer-engine-optimization" },
      { label: "KI-Sichtbarkeit messen", href: "/ratgeber/ki-sichtbarkeit-messen" },
    ],
  },
  {
    slug: "answer-engine-optimization",
    title: "Was ist Answer Engine Optimization (AEO)?",
    metaTitle: "Answer Engine Optimization (AEO): Definition & Unterschied zu GEO",
    description:
      "Answer Engine Optimization (AEO) einfach erklärt: Definition, Herkunft, Unterschied zu SEO und GEO und wie Inhalte für Antwortmaschinen strukturiert werden.",
    category: "Grundlagen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 5,
    author: "jan",
    topics: ["Answer Engine Optimization", "AEO", "Featured Snippets", "Generative Engine Optimization"],
    answer:
      "Answer Engine Optimization (AEO) ist die Optimierung von Inhalten für Systeme, die eine Frage direkt beantworten, statt eine Linkliste anzuzeigen – etwa Featured Snippets, Sprachassistenten oder KI-Suchmaschinen. Ziel ist, dass die eigene Seite als Quelle der Antwort ausgewählt wird.",
    body: [
      { type: "h2", text: "Woher der Begriff kommt" },
      {
        type: "p",
        text: "Der Begriff AEO entstand, bevor generative KI-Suche verbreitet war: Mit hervorgehobenen Antwortboxen in der Google-Suche und Sprachassistenten wurde es wichtig, Inhalte so zu formulieren, dass eine einzelne, präzise Antwort extrahiert werden kann. Mit ChatGPT, Perplexity und Google AI Overviews hat das Thema eine neue Dimension bekommen.",
      },
      { type: "h2", text: "AEO, GEO und SEO im Vergleich" },
      {
        type: "table",
        head: ["Begriff", "Schwerpunkt"],
        rows: [
          ["SEO", "Ranking einer Website in der Ergebnisliste von Suchmaschinen"],
          ["AEO", "Auswahl als direkte Antwort – Snippets, Sprachassistenten, Antwortmaschinen"],
          ["GEO", "Nennung und Zitierung in Antworten generativer KI-Systeme; schließt Marke, Entität und externe Quellen ein"],
        ],
      },
      {
        type: "p",
        text: "Die Begriffe überschneiden sich, sind aber nicht identisch. AEO konzentriert sich stark auf die Form einzelner Inhalte. [Generative Engine Optimization](/generative-engine-optimization) betrachtet zusätzlich, wie ein Sprachmodell eine Marke insgesamt versteht – über die eigene Website hinaus.",
      },
      { type: "h2", text: "Wie man Inhalte für Antwortmaschinen schreibt" },
      {
        type: "ul",
        items: [
          "Die Frage als Zwischenüberschrift formulieren, wie Nutzer sie stellen.",
          "Die Antwort im ersten Satz vollständig geben – Details folgen danach.",
          "Definitionen, Listen und Tabellen für Vergleiche und Abläufe nutzen.",
          "Aussagen mit konkreten Zahlen, Beispielen und Quellen belegen.",
          "Strukturierte Daten einsetzen, damit Fakten maschinenlesbar sind.",
        ],
      },
      {
        type: "p",
        text: "Diese Prinzipien nutzen wir auf allen Seiten dieser Website – jede Seite beginnt mit einer Kurzantwort. Wie wir das für Kunden umsetzen, beschreibt unsere Leistung [Content für AI Search](/leistungen#content).",
      },
    ],
    related: [
      { label: "Was ist LLM Optimization?", href: "/ratgeber/llm-optimization" },
      { label: "Was ist AI Search?", href: "/ratgeber/was-ist-ai-search" },
      { label: "Optimierung für Google AI Overviews", href: "/google-ai-overviews" },
    ],
  },
  {
    slug: "llm-optimization",
    title: "Was ist LLM Optimization (LLMO)?",
    metaTitle: "LLM Optimization (LLMO): Was es ist und wie es funktioniert",
    description:
      "LLM Optimization (Large Language Model Optimization) erklärt: Wie Marken im Wissen von Sprachmodellen wie ChatGPT, Gemini und Claude richtig repräsentiert werden – und wie sich LLMO von GEO unterscheidet.",
    category: "Grundlagen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 5,
    author: "jan",
    topics: ["LLM Optimization", "LLMO", "Large Language Model Optimization", "LLM SEO"],
    answer:
      "LLM Optimization (LLMO, Large Language Model Optimization) bezeichnet Maßnahmen, mit denen ein Unternehmen im Wissen und in den Antworten großer Sprachmodelle wie ChatGPT, Gemini oder Claude korrekt und möglichst häufig repräsentiert wird. Der Begriff wird oft synonym zu GEO verwendet, betont aber stärker das Modellwissen selbst.",
    body: [
      { type: "h2", text: "Zwei Wege, wie ein Sprachmodell Ihre Marke kennt" },
      {
        type: "ul",
        items: [
          "Trainiertes Wissen: Informationen, die das Modell während des Trainings aus öffentlich verfügbaren Texten gelernt hat. Dieses Wissen hat einen Stichtag und ändert sich nur mit neuen Modellversionen.",
          "Abgerufenes Wissen: Informationen, die das System zum Zeitpunkt der Frage über eine Websuche abruft. Sie sind aktuell, hängen aber davon ab, welche Seiten gefunden und ausgewählt werden.",
        ],
      },
      {
        type: "p",
        text: "LLMO setzt bei beiden an. Für das trainierte Wissen zählt, wie konsistent und häufig ein Unternehmen über längere Zeit im Web beschrieben wird. Für das abgerufene Wissen zählen Auffindbarkeit, Aktualität und Zitierfähigkeit – also klassische Stärken von [Generative Engine Optimization](/generative-engine-optimization).",
      },
      { type: "h2", text: "Was LLMO in der Praxis umfasst" },
      {
        type: "ol",
        items: [
          "Konsistente Kerndaten: Name, Leistungen, Standort und Personen überall gleich beschreiben – siehe [Entity Optimization](/ratgeber/entity-optimization).",
          "Klare, faktenbasierte Inhalte, die Fragen eindeutig beantworten.",
          "Präsenz auf Quellen, die in der eigenen Branche häufig gelesen und zitiert werden.",
          "Zugang für die Crawler der KI-Anbieter, sofern gewünscht.",
          "Regelmäßige Prüfung, wie Modelle die Marke beschreiben – inklusive Fehlern.",
        ],
      },
      { type: "h2", text: "LLMO, LLM SEO und GEO" },
      {
        type: "p",
        text: "In der Praxis werden LLMO, LLM SEO und GEO häufig austauschbar verwendet. Wir nutzen GEO als Oberbegriff, weil er alle generativen Suchsysteme einschließt – auch Google AI Overviews, die auf dem klassischen Suchindex beruhen. Eine Übersicht aller Begriffe finden Sie im [Glossar](/generative-engine-optimization#begriffe).",
      },
    ],
    related: [
      { label: "Was ist Answer Engine Optimization?", href: "/ratgeber/answer-engine-optimization" },
      { label: "Entity Optimization erklärt", href: "/ratgeber/entity-optimization" },
      { label: "ChatGPT SEO", href: "/chatgpt-seo" },
    ],
  },

  /* ───────────────────────────── PLATTFORMEN ───────────────────────────── */
  {
    slug: "google-ai-overviews-unternehmen",
    title: "Google AI Overviews: Was Unternehmen jetzt wissen sollten",
    description:
      "Was Google AI Overviews sind, wie Quellen ausgewählt werden und was Unternehmen tun können, um in den KI-Übersichten der Google-Suche berücksichtigt zu werden.",
    category: "Plattformen",
    published: SEP_2026,
    updated: OKT_2026,
    readingMinutes: 5,
    author: "jan",
    topics: ["Google AI Overviews", "AI Overviews SEO", "Google AI Mode", "Google AI Search"],
    answer:
      "Google AI Overviews („Übersicht mit KI“) sind KI-generierte Zusammenfassungen oberhalb der klassischen Suchergebnisse. Sie basieren auf dem Google-Suchindex und verlinken ausgewählte Quellen. Voraussetzung für eine Berücksichtigung sind indexierbare Seiten mit soliden SEO-Grundlagen; entscheidend ist dann, wie klar und belegbar eine Seite die konkrete Frage beantwortet.",
    body: [
      { type: "h2", text: "Was AI Overviews sind" },
      {
        type: "p",
        text: "Bei vielen Suchanfragen zeigt Google ganz oben eine von KI formulierte Zusammenfassung – in Deutschland als „Übersicht mit KI“ und seit Frühjahr 2025 verfügbar. Sie beantwortet die Frage direkt und verweist auf mehrere Quellen, die Nutzer für Details öffnen können.",
      },
      {
        type: "p",
        text: "Laut Alphabet erreichten AI Overviews bereits im Juli 2025 mehr als zwei Milliarden Nutzer pro Monat. Für Unternehmen bedeutet das: Der prominenteste Platz in der Google-Suche ist bei vielen Fragen keine klassische Position mehr, sondern eine Antwort.",
      },
      { type: "h2", text: "Wie Quellen ausgewählt werden" },
      {
        type: "p",
        text: "AI Overviews nutzen den regulären Google-Suchindex. Laut Google gibt es keine zusätzlichen technischen Anforderungen: Eine Seite muss indexiert sein und für ein Snippet in Frage kommen. Welche Seiten verlinkt werden, hängt davon ab, wie gut sie den jeweiligen Aspekt der Frage beantworten.",
      },
      { type: "h2", text: "Was Unternehmen konkret tun können" },
      {
        type: "ol",
        items: [
          "Technische Grundlagen sichern: Indexierbarkeit, saubere Snippets, keine versehentlichen nosnippet-Angaben.",
          "Fragen direkt beantworten: die Kernaussage im ersten Absatz, Details danach – das Prinzip der [Answer Engine Optimization](/ratgeber/answer-engine-optimization).",
          "Struktur schaffen: klare Zwischenüberschriften, Listen, Tabellen und eindeutige Definitionen.",
          "Belegbarkeit erhöhen: konkrete Zahlen, Quellen, Autoren mit nachvollziehbarer Expertise.",
          "Strukturierte Daten nutzen, damit Organisation, Leistungen und Inhalte maschinenlesbar sind.",
        ],
      },
      { type: "h2", text: "AI Overviews und Gemini: der Unterschied" },
      {
        type: "p",
        text: "AI Overviews sind Teil der Google-Suche. [Gemini](/gemini-seo) ist Googles eigenständiger KI-Assistent. Beide nutzen Googles Infrastruktur, sind aber unterschiedliche Produkte. Wichtig für Website-Betreiber: Die Steuerung über „Google-Extended“ in der robots.txt betrifft die Nutzung von Inhalten für Gemini-Modelle, nicht die Darstellung in der Google-Suche und ihren KI-Funktionen.",
      },
      { type: "h2", text: "Wie man Erfolg misst" },
      {
        type: "p",
        text: "Klassische Werkzeuge wie die Search Console zeigen nur begrenzt, ob und in welchem Zusammenhang eine Seite in AI Overviews erscheint. Wir messen deshalb zusätzlich über einen definierten Katalog relevanter Suchanfragen, ob eine AI Overview erscheint, welche Quellen sie nennt und ob die eigene Seite darunter ist – Details in [KI-Sichtbarkeit messen](/ratgeber/ki-sichtbarkeit-messen).",
      },
    ],
    related: [
      { label: "Optimierung für Google AI Overviews", href: "/google-ai-overviews" },
      { label: "Gemini SEO", href: "/gemini-seo" },
      { label: "SEO vs. GEO", href: "/ratgeber/geo-vs-seo" },
    ],
    sources: [
      { label: "Google Search Central: KI-Funktionen und Ihre Website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      {
        label: "TechCrunch: Google's AI Overviews have 2B monthly users (23.07.2025)",
        href: "https://techcrunch.com/2025/07/23/googles-ai-overviews-have-2b-monthly-users-ai-mode-100m-in-the-us-and-india/",
      },
      { label: "t3n: AI Overviews kommen nach Deutschland", href: "https://t3n.de/news/google-neue-such-funktion-ai-overviews-deutschland-1679953/" },
    ],
  },
  {
    slug: "copilot-und-claude",
    title: "Microsoft Copilot und Claude: Was Unternehmen über diese KI-Assistenten wissen sollten",
    metaTitle: "Copilot & Claude: Sichtbarkeit in Microsoft Copilot und Claude",
    description:
      "Wie Microsoft Copilot und Claude von Anthropic Informationen aus dem Web nutzen, welche Crawler relevant sind und was Unternehmen für ihre Sichtbarkeit in diesen KI-Assistenten tun können.",
    category: "Plattformen",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 5,
    author: "jan",
    topics: ["Microsoft Copilot", "Claude", "Bing", "KI-Crawler", "AI Visibility"],
    answer:
      "Microsoft Copilot stützt sich bei aktuellen Informationen auf den Bing-Suchindex; Sichtbarkeit in Bing ist deshalb die wichtigste Voraussetzung. Claude von Anthropic kann ebenfalls im Web suchen und nutzt dafür eigene Crawler. Für beide gilt: Wer gut auffindbar, eindeutig beschrieben und von vertrauenswürdigen Quellen erwähnt wird, hat bessere Chancen, in Antworten berücksichtigt zu werden.",
    body: [
      { type: "h2", text: "Microsoft Copilot" },
      {
        type: "p",
        text: "Copilot ist in Windows, den Edge-Browser, Microsoft 365 und die Bing-Suche integriert und erreicht damit viele Nutzer im beruflichen Umfeld. Für aktuelle Informationen greift Copilot auf den Bing-Index zurück.",
      },
      {
        type: "ul",
        items: [
          "Website in den Bing Webmaster Tools anmelden und die Sitemap einreichen – am einfachsten per Import aus der Google Search Console.",
          "Den Bericht „AI Performance“ (Beta) in den Bing Webmaster Tools im Blick behalten, der Daten zur Sichtbarkeit in KI-Antworten von Microsoft liefert.",
          "IndexNow einsetzen, damit Bing Änderungen schneller erfasst.",
          "Bingbot nicht blockieren und auf saubere, serverseitig ausgelieferte Inhalte achten.",
        ],
      },
      { type: "h2", text: "Claude von Anthropic" },
      {
        type: "p",
        text: "Claude wird zunehmend für Recherche und in Unternehmen eingesetzt und kann Informationen über eine Websuche abrufen. Anthropic unterscheidet dabei zwischen Crawlern für das Training von Modellen, für die Suche und für Abrufe, die Nutzer direkt auslösen. Website-Betreiber können diese getrennt in der robots.txt steuern.",
      },
      {
        type: "p",
        text: "Wer in Claude-Antworten als Quelle erscheinen möchte, sollte den Such-Crawler zulassen. Ob Inhalte zusätzlich für Training freigegeben werden, ist eine strategische Entscheidung, die wir mit Kunden im [GEO Audit](/geo-audit) besprechen.",
      },
      { type: "h2", text: "Was für alle KI-Assistenten gilt" },
      {
        type: "ol",
        items: [
          "Inhalte, die konkrete Fragen im ersten Satz beantworten.",
          "Eine eindeutige, konsistente Beschreibung der Marke im gesamten Web – siehe [Entity Optimization](/ratgeber/entity-optimization).",
          "Erwähnungen in Fachportalen, Vergleichen und Verzeichnissen der eigenen Branche.",
          "Regelmäßige Messung über einen festen Prompt-Katalog – siehe [AI Visibility](/ai-visibility).",
        ],
      },
    ],
    related: [
      { label: "ChatGPT SEO", href: "/chatgpt-seo" },
      { label: "Perplexity SEO", href: "/perplexity-seo" },
      { label: "Was ist AI Search?", href: "/ratgeber/was-ist-ai-search" },
    ],
    sources: [
      { label: "Bing Webmaster Tools", href: "https://www.bing.com/webmasters" },
      { label: "IndexNow", href: "https://www.indexnow.org/" },
    ],
  },

  /* ───────────────────────────── PRAXIS ───────────────────────────── */
  {
    slug: "in-chatgpt-sichtbar-werden",
    title: "In ChatGPT sichtbar werden: 7 Hebel für Unternehmen",
    metaTitle: "In ChatGPT sichtbar werden: 7 Hebel für Unternehmen (Anleitung)",
    description:
      "Wie wird mein Unternehmen in ChatGPT sichtbar? Sieben konkrete Hebel – von der Crawlbarkeit über Inhalte und Entität bis zu externen Quellen und Monitoring.",
    category: "Praxis",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 7,
    author: "fabian",
    topics: ["ChatGPT SEO", "ChatGPT Optimierung", "in ChatGPT sichtbar werden", "in ChatGPT empfohlen werden"],
    answer:
      "Ein Unternehmen wird in ChatGPT sichtbarer, wenn ChatGPT es eindeutig versteht, aktuelle Informationen darüber findet und vertrauenswürdige Quellen es im passenden Zusammenhang erwähnen. Die wichtigsten Hebel sind Crawlbarkeit, Inhalte mit klaren Antworten, eine konsistente Markenentität, externe Erwähnungen und regelmäßige Messung. Eine Nennung garantieren kann niemand.",
    body: [
      { type: "h2", text: "Hebel 1: Zugang für die OpenAI-Crawler" },
      {
        type: "p",
        text: "Für die Websuche in ChatGPT nutzt OpenAI den Crawler OAI-SearchBot. Wird er per robots.txt, Firewall oder CDN-Regel blockiert, kann ChatGPT Ihre Seiten nicht als Quelle verwenden. Prüfen Sie diese Einstellungen als Erstes.",
      },
      { type: "h2", text: "Hebel 2: Inhalte, die ohne JavaScript lesbar sind" },
      {
        type: "p",
        text: "Wichtige Inhalte sollten direkt im ausgelieferten HTML stehen. Seiten, deren Text erst im Browser per JavaScript nachgeladen wird, sind für viele Crawler schwer oder gar nicht lesbar.",
      },
      { type: "h2", text: "Hebel 3: Konkrete Fragen beantworten" },
      {
        type: "p",
        text: "Nutzer fragen ChatGPT nicht „Steuerberater München“, sondern „Welcher Steuerberater in München ist gut für Selbstständige?“. Seiten, die solche Fragen direkt im ersten Absatz beantworten und mit Fakten belegen, werden eher als Quelle ausgewählt.",
      },
      { type: "h2", text: "Hebel 4: Eine eindeutige Markenentität" },
      {
        type: "p",
        text: "Name, Leistungen, Standorte und Personen sollten auf der Website, in Unternehmensprofilen und Verzeichnissen identisch beschrieben sein. Widersprüche führen dazu, dass ein Modell eine Marke unscharf oder falsch einordnet. Mehr dazu in [Entity Optimization](/ratgeber/entity-optimization).",
      },
      { type: "h2", text: "Hebel 5: Präsenz in den richtigen Drittquellen" },
      {
        type: "p",
        text: "Für Vergleichsfragen stützt sich ChatGPT häufig auf Vergleichsartikel, Fachportale, Bewertungsplattformen und Branchenverzeichnisse. Welche Quellen in Ihrer Branche relevant sind, zeigt eine Quellenanalyse im [GEO Audit](/geo-audit).",
      },
      { type: "h2", text: "Hebel 6: Bing nicht vergessen" },
      {
        type: "p",
        text: "Eine saubere Indexierung bei Bing ist eine sinnvolle Grundlage für KI-Sichtbarkeit insgesamt – unter anderem, weil [Microsoft Copilot](/ratgeber/copilot-und-claude) darauf aufbaut. Melden Sie Ihre Website in den Bing Webmaster Tools an.",
      },
      { type: "h2", text: "Hebel 7: Messen statt raten" },
      {
        type: "p",
        text: "Ein einzelner Test in ChatGPT sagt wenig, weil Antworten variieren. Sinnvoll ist ein fester Katalog von Fragen, der regelmäßig abgefragt und ausgewertet wird – siehe [AI Visibility messen](/ai-visibility).",
      },
      {
        type: "quote",
        text: "Seriöse GEO-Arbeit manipuliert keine Modelle. Sie sorgt dafür, dass zutreffende Informationen über ein Unternehmen leicht auffindbar, eindeutig und glaubwürdig belegt sind.",
      },
    ],
    related: [
      { label: "ChatGPT SEO: Leistung und Vorgehen", href: "/chatgpt-seo" },
      { label: "ChatGPT empfiehlt Ihre Wettbewerber?", href: "/ratgeber/chatgpt-empfiehlt-wettbewerber" },
      { label: "Kostenlosen KI-Sichtbarkeits-Check anfragen", href: "/geo-audit" },
    ],
    sources: [{ label: "OpenAI: Overview of OpenAI Crawlers", href: "https://platform.openai.com/docs/bots" }],
  },
  {
    slug: "chatgpt-empfiehlt-wettbewerber",
    title: "ChatGPT empfiehlt Ihre Wettbewerber? Ursachen und was Sie tun können",
    metaTitle: "Warum empfiehlt ChatGPT meine Wettbewerber? Ursachen & Lösungen",
    description:
      "Warum nennt ChatGPT andere Anbieter, aber nicht Ihr Unternehmen? Die häufigsten Ursachen – und wie Sie Schritt für Schritt herausfinden, was zu tun ist.",
    category: "Praxis",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "fabian",
    topics: ["ChatGPT Empfehlungen", "Wettbewerber in ChatGPT", "AI Visibility", "GEO Audit"],
    answer:
      "Wenn ChatGPT Wettbewerber empfiehlt, liegt das meist daran, dass über diese mehr eindeutige und gut auffindbare Informationen existieren: klarere Leistungsseiten, häufigere Erwähnungen in Vergleichen und Fachquellen oder ein konsistenteres Markenprofil. Die Ursache lässt sich durch eine strukturierte Analyse der Antworten und ihrer Quellen eingrenzen.",
    body: [
      { type: "h2", text: "Die häufigsten Ursachen" },
      {
        type: "ol",
        items: [
          "Ihre Website beantwortet die konkrete Frage nicht – sie beschreibt Leistungen allgemein, aber nicht für den gefragten Anwendungsfall.",
          "Wettbewerber tauchen in Vergleichsartikeln, Branchenlisten oder Fachportalen auf, Sie nicht.",
          "Ihr Unternehmen ist im Web uneinheitlich beschrieben, etwa mit veralteten Leistungen oder Standorten.",
          "Die Crawler der KI-Anbieter erreichen Ihre Website nicht oder können Inhalte nicht lesen.",
          "Ihre Marke ist neu oder im Web kaum erwähnt, sodass das trainierte Wissen des Modells wenig über Sie enthält.",
        ],
      },
      { type: "h2", text: "So finden Sie die Ursache" },
      {
        type: "ol",
        items: [
          "Sammeln Sie 20 bis 50 Fragen, die Ihre Kunden tatsächlich stellen würden.",
          "Stellen Sie diese Fragen mehrfach in ChatGPT, Perplexity und Gemini und dokumentieren Sie, wer genannt wird.",
          "Notieren Sie, welche Quellen die Systeme verlinken – oft tauchen dieselben Seiten immer wieder auf.",
          "Vergleichen Sie, wie Ihre Website und die Ihrer Wettbewerber diese Fragen beantworten.",
          "Prüfen Sie, ob Sie auf den wiederkehrenden Quellen überhaupt vorkommen.",
        ],
      },
      {
        type: "p",
        text: "Genau diese Analyse führen wir im [GEO Audit](/geo-audit) systematisch durch – inklusive Wettbewerbsvergleich und priorisierter Maßnahmen.",
      },
      { type: "h2", text: "Was danach zu tun ist" },
      {
        type: "ul",
        items: [
          "Fehlende Antworten ergänzen: Seiten für die konkreten Fragen und Anwendungsfälle Ihrer Kunden – siehe [Content für AI Search](/leistungen#content).",
          "Präsenz auf den wiederkehrenden Quellen aufbauen – siehe [Digital Authority](/leistungen#autoritaet).",
          "Kerndaten vereinheitlichen – siehe [Entity Optimization](/ratgeber/entity-optimization).",
          "Technische Hürden beseitigen – siehe [Technical GEO](/leistungen#technik).",
        ],
      },
      {
        type: "p",
        text: "Wichtig: Veränderungen in KI-Antworten brauchen Zeit, und keine Agentur kann eine Nennung garantieren. Fortschritte lassen sich aber messen – siehe [AI Visibility](/ai-visibility).",
      },
    ],
    related: [
      { label: "In ChatGPT sichtbar werden: 7 Hebel", href: "/ratgeber/in-chatgpt-sichtbar-werden" },
      { label: "Wie funktioniert ein GEO Audit?", href: "/ratgeber/geo-audit-ablauf" },
      { label: "Kostenlosen Sichtbarkeits-Check anfragen", href: "/geo-audit" },
    ],
  },
  {
    slug: "ki-sichtbarkeit-messen",
    title: "KI-Sichtbarkeit messen: Prompts, Nennungen, Quellen",
    metaTitle: "AI Visibility messen: So misst man KI-Sichtbarkeit richtig",
    description:
      "Wie man die Sichtbarkeit einer Marke in ChatGPT, Gemini, Perplexity und AI Overviews seriös misst – und welche Kennzahlen dabei wirklich aussagekräftig sind.",
    category: "Praxis",
    published: SEP_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["AI Visibility", "KI-Sichtbarkeit", "GEO Monitoring", "Share of Voice"],
    answer:
      "KI-Sichtbarkeit wird gemessen, indem ein fester Katalog geschäftsrelevanter Fragen regelmäßig in mehreren KI-Systemen abgefragt wird. Ausgewertet werden Nennungsrate, Kontext und Tonalität der Nennung, genannte Wettbewerber und die zitierten Quellen – als Entwicklung über Zeit, nicht als einzelner Screenshot.",
    body: [
      { type: "h2", text: "Warum ein Screenshot nichts beweist" },
      {
        type: "p",
        text: "KI-Antworten sind nicht statisch. Dieselbe Frage kann je nach Formulierung, Gesprächsverlauf, Standort und Zeitpunkt unterschiedlich beantwortet werden. Ein einzelner Screenshot, auf dem eine Marke genannt wird, sagt deshalb wenig aus. Aussagekräftig wird Messung erst durch Wiederholung und Struktur.",
      },
      { type: "h2", text: "Schritt 1: Den Prompt-Katalog definieren" },
      {
        type: "p",
        text: "Grundlage ist ein Katalog von Fragen, die potenzielle Kunden tatsächlich stellen. Wir gliedern ihn typischerweise in vier Gruppen:",
      },
      {
        type: "ul",
        items: [
          "Kategoriefragen: „Welche Anbieter gibt es für …?“",
          "Vergleichsfragen: „Was ist besser, A oder B?“ oder „Welcher Anbieter eignet sich für …?“",
          "Problemfragen: „Wie löse ich …?“ – ohne Nennung einer Marke",
          "Markenfragen: „Was ist [Ihre Marke]?“, „Ist [Ihre Marke] seriös?“",
        ],
      },
      { type: "h2", text: "Schritt 2: Die richtigen Kennzahlen" },
      {
        type: "table",
        head: ["Kennzahl", "Was sie aussagt"],
        rows: [
          ["Nennungsrate", "In wie vielen relevanten Antworten die Marke vorkommt"],
          ["Share of Voice", "Wie oft die Marke im Verhältnis zu Wettbewerbern genannt wird"],
          ["Zitierungen", "Ob und wie oft die eigene Website als Quelle verlinkt wird"],
          ["Kontext", "Ob die Marke empfohlen, nur erwähnt oder kritisch dargestellt wird"],
          ["Korrektheit", "Ob Leistungen, Standorte und Positionierung richtig wiedergegeben werden"],
          ["Quellenlandschaft", "Welche fremden Seiten die Antworten zu Ihrem Thema prägen"],
        ],
      },
      { type: "h2", text: "Schritt 3: Nach Plattform und Thema auswerten" },
      {
        type: "p",
        text: "ChatGPT, Gemini, Perplexity und Google AI Overviews greifen auf unterschiedliche Quellen zurück. Eine Marke kann in einem System stark und in einem anderen kaum sichtbar sein. Ebenso unterscheidet sich die Sichtbarkeit oft stark zwischen Themen. Die Auswertung nach Plattform und Thema zeigt, wo sich Maßnahmen am meisten lohnen.",
      },
      { type: "h2", text: "Schritt 4: Mit Webanalyse verbinden" },
      {
        type: "p",
        text: "Viele KI-Systeme verlinken ihre Quellen. Besuche aus ChatGPT, Perplexity oder Gemini lassen sich deshalb in der Webanalyse als eigener Kanal auswerten. So wird sichtbar, ob Nennungen auch zu Besuchen und Anfragen führen. Ergänzend lohnt ein Blick in den Bericht „AI Performance“ (Beta) der Bing Webmaster Tools.",
      },
      { type: "h2", text: "Was eine seriöse Messung auszeichnet" },
      {
        type: "ul",
        items: [
          "Offengelegter Prompt-Katalog und Messzeitraum",
          "Mehrere Abfragen pro Prompt statt Einzelergebnissen",
          "Vergleich mit Wettbewerbern statt isolierter Zahlen",
          "Keine garantierten Platzierungen",
        ],
      },
      {
        type: "p",
        text: "Wie wir diese Messung als laufende Leistung umsetzen, beschreibt die Seite [AI Visibility Monitoring](/ai-visibility).",
      },
    ],
    related: [
      { label: "AI Visibility Monitoring", href: "/ai-visibility" },
      { label: "Wie funktioniert ein GEO Audit?", href: "/ratgeber/geo-audit-ablauf" },
      { label: "GEO-Strategie entwickeln", href: "/ratgeber/geo-strategie" },
    ],
  },
  {
    slug: "geo-audit-ablauf",
    title: "Wie funktioniert ein GEO Audit?",
    metaTitle: "GEO Audit erklärt: Ablauf, Inhalte und Ergebnis",
    description:
      "Was ein GEO Audit (AI Visibility Audit) untersucht, wie es abläuft und was am Ende herauskommt – vom Prompt-Katalog über die Quellenanalyse bis zur priorisierten Roadmap.",
    category: "Praxis",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["GEO Audit", "AI Visibility Audit", "KI-Sichtbarkeitsanalyse", "ChatGPT Audit"],
    answer:
      "Ein GEO Audit – auch AI Visibility Audit oder KI-Sichtbarkeitsanalyse – untersucht systematisch, ob und wie ChatGPT, Gemini, Perplexity und Google AI Overviews ein Unternehmen heute nennen, welche Wettbewerber stattdessen auftauchen, auf welche Quellen sich die Antworten stützen und welche technischen und inhaltlichen Lücken bestehen. Ergebnis ist eine priorisierte Roadmap.",
    body: [
      { type: "h2", text: "Die fünf Bausteine eines GEO Audits" },
      { type: "h3", text: "1. Prompt-Katalog" },
      {
        type: "p",
        text: "Gemeinsam definieren wir die Fragen, die potenzielle Kunden KI-Systemen stellen – gegliedert nach Themen und Kaufphasen, von der allgemeinen Problemfrage bis zur konkreten Anbieterfrage.",
      },
      { type: "h3", text: "2. Sichtbarkeitsanalyse" },
      {
        type: "p",
        text: "Jede Frage wird mehrfach in den relevanten Systemen gestellt. Ausgewertet werden Nennungen, Position, Kontext und Korrektheit der Darstellung – im Vergleich zu den wichtigsten Wettbewerbern.",
      },
      { type: "h3", text: "3. Quellenanalyse" },
      {
        type: "p",
        text: "Welche Seiten verlinken die Systeme? Häufig prägen wenige Portale, Vergleiche oder Fachartikel die Antworten einer ganzen Branche. Diese Quellen sind der wichtigste Hebel für [Digital Authority](/leistungen#autoritaet).",
      },
      { type: "h3", text: "4. Technische Prüfung" },
      {
        type: "p",
        text: "Wir prüfen, ob KI-Crawler die Website erreichen, ob Inhalte ohne JavaScript lesbar sind und ob strukturierte Daten vorhanden und korrekt sind – die Grundlagen von [Technical GEO](/leistungen#technik).",
      },
      { type: "h3", text: "5. Entitäts-Check" },
      {
        type: "p",
        text: "Wie wird das Unternehmen im Web beschrieben – und ist das konsistent? Abweichungen bei Namen, Leistungen oder Standorten schwächen das Bild, das sich ein Sprachmodell macht. Mehr dazu in [Entity Optimization](/ratgeber/entity-optimization).",
      },
      { type: "h2", text: "Das Ergebnis" },
      {
        type: "ul",
        items: [
          "Ist-Stand der KI-Sichtbarkeit je Plattform und Thema",
          "Wettbewerbsvergleich und Share of Voice",
          "Liste der wichtigsten Quellen Ihrer Branche",
          "Technische und inhaltliche Lücken",
          "Priorisierte Roadmap mit konkreten Maßnahmen",
        ],
      },
      { type: "h2", text: "GEO Audit oder SEO Audit?" },
      {
        type: "p",
        text: "Ein SEO Audit prüft vor allem Rankings, Technik und Inhalte für die klassische Suche. Ein GEO Audit ergänzt das um die Perspektive der KI-Systeme: Was antworten sie, wen nennen sie und warum? Beides überschneidet sich, ersetzt sich aber nicht – siehe [SEO vs. GEO](/ratgeber/geo-vs-seo).",
      },
      {
        type: "p",
        text: "Einen ersten Eindruck liefert unser [kostenloser KI-Sichtbarkeits-Check](/geo-audit) – eine Stichprobe, die wir persönlich mit Ihnen besprechen.",
      },
    ],
    related: [
      { label: "GEO Audit anfragen", href: "/geo-audit" },
      { label: "KI-Sichtbarkeit messen", href: "/ratgeber/ki-sichtbarkeit-messen" },
      { label: "Was macht eine GEO Agentur?", href: "/geo-agentur" },
    ],
  },

  /* ───────────────────────────── STRATEGIE ───────────────────────────── */
  {
    slug: "geo-vs-seo",
    title: "SEO vs. GEO: Was ist der Unterschied?",
    metaTitle: "SEO vs. GEO: Der Unterschied – und warum Sie beides brauchen",
    description:
      "SEO vs. GEO: Wie sich Generative Engine Optimization von klassischer Suchmaschinenoptimierung unterscheidet, wo sich beide überschneiden und wie Unternehmen beides sinnvoll kombinieren.",
    category: "Strategie",
    published: SEP_2026,
    updated: OKT_2026,
    readingMinutes: 8,
    author: "fabian",
    topics: ["SEO vs. GEO", "Generative Engine Optimization", "Suchmaschinenoptimierung", "AI Search"],
    answer:
      "SEO optimiert dafür, dass eine Website in der Ergebnisliste einer Suchmaschine gut platziert ist. GEO optimiert zusätzlich dafür, dass KI-Systeme eine Marke verstehen und in formulierten Antworten nennen. GEO ersetzt SEO nicht, sondern baut darauf auf: Viele KI-Systeme stützen sich auf Suchindizes.",
    body: [
      { type: "h2", text: "Der Unterschied in einem Satz" },
      {
        type: "p",
        text: "Bei SEO konkurrieren Sie um eine Position in einer Liste. Bei GEO konkurrieren Sie um einen Platz in einer Antwort – und diese Antwort nennt oft nur wenige Anbieter.",
      },
      {
        type: "table",
        head: ["", "Klassisches SEO", "GEO"],
        rows: [
          ["Ziel", "Ranking in der Ergebnisliste", "Nennung und Zitierung in der KI-Antwort"],
          ["Ergebnisform", "Zehn Links zur Auswahl", "Eine formulierte Antwort"],
          ["Wichtige Faktoren", "Relevanz, Technik, Backlinks", "Klarheit, Belegbarkeit, Entität, externe Erwähnungen"],
          ["Messung", "Rankings, Klicks, Traffic", "Nennungen, Kontext, zitierte Quellen, Share of Voice"],
          ["Nutzerverhalten", "Vergleichen und klicken", "Antwort lesen, gezielt nachfragen"],
        ],
      },
      { type: "h2", text: "Was gleich bleibt" },
      {
        type: "p",
        text: "Die Grundlagen überschneiden sich stark. Eine technisch saubere, schnelle Website, Inhalte mit echter Substanz und eine gute Reputation im Web zahlen auf beides ein. Google selbst betont, dass für seine KI-Funktionen in der Suche dieselben Best Practices gelten wie für die klassische Suche.",
      },
      {
        type: "p",
        text: "Hinzu kommt: KI-Systeme mit Websuche greifen auf Suchindizes zurück. Wer in Google oder Bing nicht gefunden wird, wird auch in KI-Antworten selten als Quelle ausgewählt.",
      },
      { type: "h2", text: "Was sich ändert" },
      { type: "h3", text: "1. Von Keywords zu Fragen" },
      {
        type: "p",
        text: "Nutzer formulieren in KI-Assistenten ganze Fragen mit Kontext: Budget, Branche, Region, Anforderungen. Inhalte müssen deshalb konkrete Fragen beantworten, statt nur Suchbegriffe abzudecken – das Prinzip der [Answer Engine Optimization](/ratgeber/answer-engine-optimization).",
      },
      { type: "h3", text: "2. Von der Seite zur Marke" },
      {
        type: "p",
        text: "Eine KI bewertet nicht nur eine einzelne Seite, sondern bildet sich ein Bild vom Unternehmen insgesamt. Widersprüchliche Angaben zu Leistungen, Standorten oder Positionierung schwächen dieses Bild – siehe [Entity Optimization](/ratgeber/entity-optimization).",
      },
      { type: "h3", text: "3. Von Backlinks zu Erwähnungen" },
      {
        type: "p",
        text: "Links bleiben wichtig. Für KI-Systeme zählt aber auch, in welchem Zusammenhang eine Marke erwähnt wird – in Fachartikeln, Vergleichen, Verzeichnissen oder Branchenlisten, auch ohne Link.",
      },
      { type: "h3", text: "4. Von Rankings zu Nennungen" },
      {
        type: "p",
        text: "Rankings lassen sich exakt messen. KI-Antworten variieren je nach Formulierung, Kontext und Zeitpunkt. GEO-Messung arbeitet deshalb mit Stichproben über viele Prompts und bewertet Häufigkeiten und Entwicklungen – siehe [KI-Sichtbarkeit messen](/ratgeber/ki-sichtbarkeit-messen).",
      },
      { type: "h2", text: "Was eine starke Website heute braucht" },
      {
        type: "table",
        head: ["Baustein", "Wirkt auf SEO", "Wirkt auf GEO"],
        rows: [
          ["Technical SEO (Indexierung, Geschwindigkeit, sauberes HTML)", "Ja", "Ja – Voraussetzung für KI-Crawler"],
          ["Inhalte mit klaren Antworten", "Ja", "Ja – Grundlage für Zitierungen"],
          ["Strukturierte Daten", "Ja", "Ja – eindeutige Fakten für Maschinen"],
          ["Entität und Markensignale", "Teilweise", "Stark – Basis für das Markenverständnis"],
          ["Externe Erwähnungen und Autorität", "Ja (Backlinks)", "Stark – auch Erwähnungen ohne Link"],
          ["Messung von KI-Nennungen", "Nein", "Ja – eigene Kennzahlen"],
        ],
      },
      { type: "h2", text: "SEO und GEO kombinieren" },
      {
        type: "ol",
        items: [
          "SEO-Grundlagen sichern: Indexierung, Technik, interne Verlinkung.",
          "Den Prompt-Katalog aus echten Kundenfragen ableiten und mit den Keywords abgleichen.",
          "Bestehende Seiten um direkte Antworten, Definitionen und Belege ergänzen.",
          "Die Markenentität vereinheitlichen und externe Quellen gezielt aufbauen.",
          "Rankings und KI-Nennungen gemeinsam auswerten.",
        ],
      },
      {
        type: "quote",
        text: "Die sinnvolle Frage ist nicht „SEO oder GEO?“, sondern: Wie wird unsere Marke über die gesamte Suche hinweg gefunden, verstanden und empfohlen?",
      },
    ],
    related: [
      { label: "Was ist Generative Engine Optimization?", href: "/generative-engine-optimization" },
      { label: "GEO-Strategie entwickeln", href: "/ratgeber/geo-strategie" },
      { label: "GEO Beratung für SEO- und Marketing-Teams", href: "/geo-beratung" },
    ],
    sources: [
      { label: "Google Search Central: KI-Funktionen und Ihre Website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
    ],
  },
  {
    slug: "entity-optimization",
    title: "Entity Optimization: Wie KI-Systeme Ihre Marke verstehen",
    metaTitle: "Entity Optimization für AI Search: Marke als Entität stärken",
    description:
      "Entity Optimization erklärt: Was eine Entität ist, warum Sprachmodelle und Suchmaschinen in Entitäten denken und wie Unternehmen ihre Marke eindeutig und konsistent beschreiben.",
    category: "Strategie",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 6,
    author: "jan",
    topics: ["Entity Optimization", "Entität", "Knowledge Graph", "Strukturierte Daten", "Brand Authority"],
    answer:
      "Entity Optimization bedeutet, ein Unternehmen als eindeutige Entität – also als klar abgegrenztes „Ding“ mit festen Eigenschaften – im Web zu beschreiben: wer es ist, was es anbietet, wo es tätig ist, welche Personen dazugehören und wofür es Expertise besitzt. Je konsistenter diese Angaben sind, desto zuverlässiger können Suchmaschinen und Sprachmodelle die Marke einordnen.",
    body: [
      { type: "h2", text: "Was ist eine Entität?" },
      {
        type: "p",
        text: "Eine Entität ist ein eindeutig identifizierbares Objekt: eine Person, ein Unternehmen, ein Ort, ein Produkt oder ein Konzept. Suchmaschinen bilden diese Entitäten und ihre Beziehungen in Wissensdatenbanken ab, bei Google etwa im Knowledge Graph. Sprachmodelle lernen ähnliche Zusammenhänge aus Texten.",
      },
      { type: "h2", text: "Warum Entitäten für GEO so wichtig sind" },
      {
        type: "p",
        text: "Wenn ein Nutzer fragt „Welche Agentur in Bayern ist auf KI-Sichtbarkeit spezialisiert?“, muss das System wissen, welche Unternehmen in Bayern sitzen und welche sich mit diesem Thema beschäftigen. Fehlen diese Verknüpfungen oder widersprechen sich Quellen, wird eine Marke nicht oder falsch genannt.",
      },
      { type: "h2", text: "Die Kerndaten einer Unternehmensentität" },
      {
        type: "table",
        head: ["Eigenschaft", "Beispiel"],
        rows: [
          ["Name und Schreibweisen", "Offizieller Name, Kurzform, Domain"],
          ["Kategorie", "Was für ein Unternehmen – z. B. Agentur für Generative Engine Optimization"],
          ["Leistungen", "Klar benannte Angebote mit eigenen Seiten"],
          ["Standort und Einzugsgebiet", "Adresse, Region, Länder"],
          ["Personen", "Gründer, Ansprechpartner, Autoren"],
          ["Beziehungen", "Mutterunternehmen, Partner, Mitgliedschaften"],
          ["Profile", "Unternehmensprofile, Verzeichnisse, soziale Netzwerke"],
        ],
      },
      { type: "h2", text: "So stärken Sie Ihre Entität" },
      {
        type: "ol",
        items: [
          "Eine „Über uns“-Seite mit eindeutigen Fakten zu Unternehmen, Personen und Standort.",
          "Strukturierte Daten nach Schema.org: Organization, Person, Service – mit eindeutigen Verknüpfungen.",
          "Identische Angaben in Unternehmensprofilen, Branchenverzeichnissen und sozialen Netzwerken.",
          "Autorenangaben bei Fachartikeln, damit Expertise einer Person zugeordnet werden kann.",
          "Erwähnungen in Fachquellen, die Ihre Marke mit Ihren Themen verbinden – siehe [Digital Authority](/leistungen#autoritaet).",
        ],
      },
      {
        type: "p",
        text: "Wie wir das umsetzen, beschreibt die Leistung [Entity Optimization](/leistungen#entitaeten). Ob Ihr Unternehmen heute korrekt dargestellt wird, zeigt der [kostenlose KI-Sichtbarkeits-Check](/geo-audit).",
      },
    ],
    related: [
      { label: "Was ist LLM Optimization?", href: "/ratgeber/llm-optimization" },
      { label: "In ChatGPT sichtbar werden", href: "/ratgeber/in-chatgpt-sichtbar-werden" },
      { label: "Leistungen im Überblick", href: "/leistungen" },
    ],
  },
  {
    slug: "geo-strategie",
    title: "GEO-Strategie entwickeln: In 6 Schritten zur KI-Sichtbarkeit",
    metaTitle: "GEO-Strategie entwickeln: Leitfaden in 6 Schritten",
    description:
      "Wie Unternehmen eine Strategie für Generative Engine Optimization aufbauen: Ziele, Prompt-Katalog, Prioritäten, Umsetzung, Messung und Verzahnung mit SEO.",
    category: "Strategie",
    published: OKT_2026,
    updated: OKT_2026,
    readingMinutes: 7,
    author: "fabian",
    topics: ["GEO Strategie", "Generative Engine Optimization", "GEO für B2B", "GEO für E-Commerce"],
    answer:
      "Eine GEO-Strategie legt fest, bei welchen Fragen ein Unternehmen in KI-Antworten vorkommen will, welche Maßnahmen dafür Priorität haben und wie Fortschritt gemessen wird. Sie entsteht in sechs Schritten: Ziele, Prompt-Katalog, Ist-Analyse, Priorisierung, Umsetzung und Monitoring – eng verzahnt mit der bestehenden SEO.",
    body: [
      { type: "h2", text: "Schritt 1: Ziele festlegen" },
      {
        type: "p",
        text: "Geht es um mehr Anfragen, um Markenbekanntheit in einer neuen Kategorie oder um die korrekte Darstellung des Unternehmens? Das Ziel bestimmt, welche Fragen und Plattformen Vorrang haben.",
      },
      { type: "h2", text: "Schritt 2: Den Prompt-Katalog aufbauen" },
      {
        type: "p",
        text: "Sammeln Sie die Fragen, die Kunden in den verschiedenen Phasen ihrer Entscheidung stellen – aus Vertriebsgesprächen, Support-Anfragen und Keyword-Daten. Dieser Katalog ist die Grundlage für Inhalte und Messung.",
      },
      { type: "h2", text: "Schritt 3: Den Ist-Stand erheben" },
      {
        type: "p",
        text: "Wo werden Sie heute genannt, wo Ihre Wettbewerber, und welche Quellen prägen die Antworten? Die Methodik beschreibt der Beitrag [Wie funktioniert ein GEO Audit?](/ratgeber/geo-audit-ablauf).",
      },
      { type: "h2", text: "Schritt 4: Prioritäten setzen" },
      {
        type: "p",
        text: "Nicht alle Lücken sind gleich wichtig. Bewerten Sie Maßnahmen nach Geschäftswert der Frage, Aufwand und Wirkung. Häufig liefern technische Korrekturen und fehlende Antwortseiten die schnellsten Ergebnisse.",
      },
      { type: "h2", text: "Schritt 5: Umsetzen" },
      {
        type: "ul",
        items: [
          "[Technical GEO](/leistungen#technik): Crawlbarkeit, HTML, strukturierte Daten",
          "[Content für AI Search](/leistungen#content): Antwortseiten, Vergleiche, Definitionen",
          "[Entity Optimization](/leistungen#entitaeten): konsistente Kerndaten",
          "[Digital Authority](/leistungen#autoritaet): Präsenz auf relevanten Quellen",
        ],
      },
      { type: "h2", text: "Schritt 6: Messen und nachsteuern" },
      {
        type: "p",
        text: "Fragen Sie den Prompt-Katalog regelmäßig ab und werten Sie Entwicklungen aus – siehe [AI Visibility](/ai-visibility). KI-Systeme und Wettbewerb verändern sich laufend, deshalb ist GEO ein Zyklus, kein einmaliges Projekt.",
      },
      { type: "h2", text: "Besonderheiten nach Geschäftsmodell" },
      { type: "h3", text: "B2B und erklärungsbedürftige Leistungen" },
      {
        type: "p",
        text: "Entscheidungen dauern lange, und Vergleichsfragen sind besonders wertvoll. Fachartikel, Fallbeispiele und Erwähnungen in Branchenmedien haben hohes Gewicht.",
      },
      { type: "h3", text: "E-Commerce und Marken" },
      {
        type: "p",
        text: "Produktfragen wie „Welche … eignen sich für …?“ stehen im Mittelpunkt. Präzise Produktinformationen, Testberichte und Bewertungsplattformen prägen die Antworten.",
      },
      { type: "h3", text: "Regionale Anbieter" },
      {
        type: "p",
        text: "Fragen enthalten oft einen Ort. Konsistente Standortdaten, gepflegte Unternehmensprofile und lokale Erwähnungen sind entscheidend.",
      },
      {
        type: "p",
        text: "Wenn Sie die Strategie mit Ihrem eigenen Team umsetzen möchten, unterstützen wir mit [GEO Beratung](/geo-beratung).",
      },
    ],
    related: [
      { label: "GEO Beratung", href: "/geo-beratung" },
      { label: "SEO vs. GEO", href: "/ratgeber/geo-vs-seo" },
      { label: "Was macht eine GEO Agentur?", href: "/geo-agentur" },
    ],
  },
];

export const articles: Article[] = [...baseArticles, ...newArticles];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
