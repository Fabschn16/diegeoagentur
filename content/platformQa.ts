import type { QA } from "@/components/ui/QASection";

type PlatformExtra = {
  metaTitle: string;
  metaDescription: string;
  qaTitle: [string, string];
  qa: QA[];
  related: { label: string; href: string; note?: string }[];
};

/**
 * Vertiefende Inhalte je Plattformseite: Antwort-zuerst-Abschnitte zu den
 * Suchintentionen aus dem SEO/GEO-Briefing und thematisch passende interne Links.
 */
export const platformExtras: Record<string, PlatformExtra> = {
  "chatgpt-seo": {
    metaTitle: "ChatGPT SEO: In ChatGPT sichtbar werden & als Quelle genannt",
    metaDescription:
      "Was ist ChatGPT SEO und wie funktioniert die ChatGPT-Suche? Wie ChatGPT Quellen auswählt, welche Faktoren zählen und wie Die GEO Agentur Unternehmen in ChatGPT sichtbar macht.",
    qaTitle: ["ChatGPT SEO", "im Detail."],
    qa: [
      {
        id: "was-ist-chatgpt-seo",
        q: "Was ist ChatGPT SEO?",
        a: [
          "ChatGPT SEO ist die Optimierung eines Unternehmens dafür, dass ChatGPT es korrekt beschreibt, bei passenden Fragen nennt und als Quelle verlinkt. Der Begriff lehnt sich an klassische Suchmaschinenoptimierung an, meint aber kein Ranking in einer Ergebnisliste, sondern die Präsenz in einer formulierten Antwort.",
          "ChatGPT SEO ist ein Teilbereich von [Generative Engine Optimization (GEO)](/generative-engine-optimization), die alle KI-Suchsysteme umfasst.",
        ],
      },
      {
        id: "chatgpt-search",
        q: "Wie funktioniert die ChatGPT-Suche?",
        a: [
          "Bei Fragen, die aktuelle oder konkrete Informationen erfordern, durchsucht ChatGPT das Web, liest passende Seiten und fasst sie zu einer Antwort mit Quellenlinks zusammen. Für das Auffinden und Abrufen von Seiten für die Suche nutzt OpenAI den Crawler OAI-SearchBot; ruft ein Nutzer eine Seite direkt über ChatGPT auf, erscheint der User-Agent ChatGPT-User.",
          "Ohne Websuche antwortet ChatGPT aus dem Wissen, das das Modell im Training gelernt hat. Für dieses Wissen zählt, wie konsistent und häufig ein Unternehmen über längere Zeit im Web beschrieben wurde.",
        ],
      },
      {
        id: "quellenauswahl",
        q: "Wie wählt ChatGPT Quellen aus?",
        a: [
          "OpenAI legt die genaue Gewichtung nicht offen. Beobachtbar ist, dass ChatGPT bevorzugt Seiten zitiert, die erreichbar sind, die konkrete Frage direkt beantworten, aktuell wirken und in ihrem Thema glaubwürdig sind. Bei Anbieterfragen greift ChatGPT häufig auf Vergleichsartikel, Fachportale, Verzeichnisse und Bewertungsplattformen zurück – nicht nur auf Herstellerseiten.",
          "Warum dadurch oft Wettbewerber genannt werden, erklärt der Beitrag [Warum empfiehlt ChatGPT meine Wettbewerber?](/ratgeber/chatgpt-empfiehlt-wettbewerber).",
        ],
      },
      {
        id: "faktoren",
        q: "Welche Faktoren beeinflussen die Sichtbarkeit in ChatGPT?",
        a: [
          "Entscheidend sind fünf Faktoren: technischer Zugang für die OpenAI-Crawler, serverseitig lesbare Inhalte, Seiten mit klaren und belegten Antworten, eine eindeutige Markenentität und Erwähnungen in den Drittquellen Ihrer Branche.",
          "Keiner dieser Faktoren wirkt allein. Eine technisch perfekte Website ohne externe Bestätigung bleibt ebenso unsichtbar wie eine bekannte Marke, deren Website für Crawler gesperrt ist.",
        ],
      },
      {
        id: "externe-quellen",
        q: "Welche Rolle spielen externe Quellen für ChatGPT?",
        a: [
          "Externe Quellen spielen eine große Rolle, weil ChatGPT Aussagen über Anbieter häufig aus mehreren unabhängigen Seiten zusammensetzt. Wer in Branchenvergleichen, Fachartikeln oder Verzeichnissen fehlt, wird bei Empfehlungsfragen seltener berücksichtigt – auch mit einer sehr guten eigenen Website.",
          "Der Aufbau dieser Präsenz gehört bei uns zur Leistung [Digital Authority](/leistungen#autoritaet) und erfolgt ausschließlich über echte, redaktionell passende Erwähnungen.",
        ],
      },
      {
        id: "messen",
        q: "Wie misst man die Sichtbarkeit in ChatGPT?",
        a: [
          "Man misst sie über einen festen Katalog typischer Kundenfragen, die regelmäßig und mehrfach gestellt werden. Ausgewertet werden Nennungsrate, Zitierungen der eigenen Website, Kontext der Nennung und der Vergleich zu Wettbewerbern. Ergänzend lassen sich Besuche aus ChatGPT in der Webanalyse auswerten.",
          "Wie wir das laufend umsetzen, zeigt [AI Visibility Monitoring](/ai-visibility).",
        ],
      },
      {
        id: "agentur",
        q: "Wie unterstützt eine GEO Agentur bei ChatGPT SEO?",
        a: [
          "Eine GEO Agentur analysiert zunächst, was ChatGPT heute über ein Unternehmen und seine Wettbewerber sagt, und leitet daraus Maßnahmen ab: technische Korrekturen, neue oder überarbeitete Inhalte, Entitätspflege und den Aufbau externer Quellen. Anschließend misst sie, ob sich die Darstellung verändert.",
          "Der Einstieg ist bei uns ein [GEO Audit](/geo-audit). Was eine GEO Agentur insgesamt leistet und was sie kostet, beschreibt die Seite [GEO Agentur](/geo-agentur).",
        ],
      },
    ],
    related: [
      { label: "In ChatGPT sichtbar werden", href: "/ratgeber/in-chatgpt-sichtbar-werden", note: "Praxisleitfaden" },
      { label: "Warum ChatGPT Wettbewerber empfiehlt", href: "/ratgeber/chatgpt-empfiehlt-wettbewerber", note: "Ursachen und Gegenmaßnahmen" },
      { label: "ChatGPT Shopping und ChatGPT-Werbung", href: "/ratgeber/chatgpt-shopping-und-werbung", note: "Organische Empfehlung vs. Anzeigen" },
      { label: "AI Visibility messen", href: "/ai-visibility", note: "Monitoring und Kennzahlen" },
      { label: "Was ist Generative Engine Optimization?", href: "/generative-engine-optimization", note: "Grundlagen und Glossar" },
    ],
  },

  "gemini-seo": {
    metaTitle: "Gemini SEO: Sichtbarkeit in Google Gemini verbessern",
    metaDescription:
      "Gemini SEO erklärt: Wie Google Gemini Informationen findet, welche Rolle die Google-Suche spielt und wie Unternehmen in Gemini-Antworten korrekt dargestellt werden. Von Die GEO Agentur.",
    qaTitle: ["Gemini SEO", "im Detail."],
    qa: [
      {
        id: "was-ist-gemini-seo",
        q: "Was ist Gemini SEO?",
        a: [
          "Gemini SEO ist die Optimierung dafür, dass Googles KI-Assistent Gemini ein Unternehmen korrekt beschreibt und bei passenden Fragen berücksichtigt. Weil Gemini eng mit der Google-Suche verbunden ist, überschneidet sich Gemini SEO stark mit klassischer Suchmaschinenoptimierung und der Optimierung für [Google AI Overviews](/google-ai-overviews).",
        ],
      },
      {
        id: "funktionsweise",
        q: "Wie findet Gemini Informationen über Unternehmen?",
        a: [
          "Gemini nutzt neben dem trainierten Modellwissen die Google-Suche, um Antworten mit aktuellen Informationen zu stützen. Damit sind dieselben Grundlagen relevant wie für Google: indexierbare Seiten, klare Inhalte, strukturierte Daten und ein gepflegtes Unternehmensprofil.",
          "Für die Nutzung von Inhalten zum Training und zur Fundierung von Gemini-Modellen gibt es bei Google das separate Steuerungstoken Google-Extended in der robots.txt. Es beeinflusst laut Google nicht das Ranking in der normalen Google-Suche.",
        ],
      },
      {
        id: "faktoren",
        q: "Welche Faktoren beeinflussen die Sichtbarkeit in Gemini?",
        a: [
          "Wichtig sind eine gute organische Sichtbarkeit in Google, eindeutige Angaben zu Unternehmen, Leistungen und Standorten, ein vollständiges Google-Unternehmensprofil bei lokalen Anbietern, strukturierte Daten sowie Erwähnungen in Quellen, die Google als vertrauenswürdig einstuft.",
        ],
      },
      {
        id: "unterschied-chatgpt",
        q: "Worin unterscheidet sich Gemini SEO von ChatGPT SEO?",
        a: [
          "Der wichtigste Unterschied ist die Datenbasis: Gemini stützt sich auf Googles Index und Googles Wissen über Entitäten, ChatGPT auf eigene Crawler und eigene Suchpartner. Wer in Google gut aufgestellt ist, hat bei Gemini meist eine bessere Ausgangslage – eine Garantie für Nennungen ist das nicht.",
          "Mehr zu ChatGPT auf der Seite [ChatGPT SEO](/chatgpt-seo).",
        ],
      },
      {
        id: "messen",
        q: "Wie misst man die Sichtbarkeit in Gemini?",
        a: [
          "Wie bei anderen KI-Systemen über einen festen Prompt-Katalog, der regelmäßig abgefragt und ausgewertet wird. Gemini-Antworten können je nach Konto, Standort und Gesprächsverlauf variieren, deshalb zählt die Entwicklung über viele Abfragen. Methodik: [KI-Sichtbarkeit messen](/ratgeber/ki-sichtbarkeit-messen).",
        ],
      },
    ],
    related: [
      { label: "Google AI Overviews Optimierung", href: "/google-ai-overviews", note: "KI-Antworten in der Google-Suche" },
      { label: "Entity Optimization", href: "/ratgeber/entity-optimization", note: "Marke als eindeutige Entität" },
      { label: "AI Visibility messen", href: "/ai-visibility", note: "Monitoring und Kennzahlen" },
      { label: "Was ist AI Search?", href: "/ratgeber/was-ist-ai-search", note: "Wie KI-Suche funktioniert" },
    ],
  },

  "perplexity-seo": {
    metaTitle: "Perplexity SEO: Als Quelle in Perplexity zitiert werden",
    metaDescription:
      "Perplexity SEO erklärt: Wie Perplexity Quellen sucht und zitiert, welche Inhalte bevorzugt werden und wie Ihre Website zur zitierten Quelle wird. Von Die GEO Agentur.",
    qaTitle: ["Perplexity SEO", "im Detail."],
    qa: [
      {
        id: "was-ist-perplexity-seo",
        q: "Was ist Perplexity SEO?",
        a: [
          "Perplexity SEO ist die Optimierung dafür, dass Perplexity eine Website als Quelle heranzieht und zitiert. Weil Perplexity zu nahezu jeder Antwort sichtbare Quellen nennt, ist der Zusammenhang zwischen Website-Inhalten und KI-Antwort hier besonders direkt.",
        ],
      },
      {
        id: "funktionsweise",
        q: "Wie funktioniert Perplexity?",
        a: [
          "Perplexity ist eine Antwortmaschine: Sie durchsucht zu einer Frage das Web in Echtzeit, liest mehrere Seiten und fasst sie zu einer Antwort mit nummerierten Quellenangaben zusammen. Für das Crawling nutzt Perplexity den PerplexityBot; Abrufe, die Nutzer direkt auslösen, laufen über Perplexity-User.",
        ],
      },
      {
        id: "quellenauswahl",
        q: "Welche Inhalte zitiert Perplexity bevorzugt?",
        a: [
          "Perplexity legt seine Auswahlkriterien nicht im Detail offen. In der Praxis werden häufig Seiten zitiert, die eine Frage präzise und früh beantworten, gut strukturiert sind, aktuelle Daten nennen und Belege enthalten. Lange Werbetexte ohne konkrete Aussagen werden selten zitiert.",
          "Wie solche Inhalte aufgebaut sind, beschreibt der Beitrag [Answer Engine Optimization](/ratgeber/answer-engine-optimization).",
        ],
      },
      {
        id: "faktoren",
        q: "Welche Faktoren beeinflussen die Sichtbarkeit in Perplexity?",
        a: [
          "Zentral sind der Zugang für PerplexityBot, schnell ladende und ohne JavaScript lesbare Seiten, Antwort-zuerst-Inhalte, Aktualität mit sichtbarem Datum und Präsenz in den Quellen, die Perplexity zu Ihrem Thema bereits häufig zitiert.",
        ],
      },
      {
        id: "messen",
        q: "Wie misst man die Sichtbarkeit in Perplexity?",
        a: [
          "Über einen festen Prompt-Katalog, bei dem für jede Antwort die zitierten Quellen erfasst werden. So wird sichtbar, ob und mit welchen Seiten Ihre Website zitiert wird und welche fremden Quellen die Antworten prägen. Besuche aus Perplexity lassen sich zusätzlich in der Webanalyse auswerten. Mehr dazu: [AI Visibility Monitoring](/ai-visibility).",
        ],
      },
    ],
    related: [
      { label: "Answer Engine Optimization", href: "/ratgeber/answer-engine-optimization", note: "Inhalte als Antwort aufbauen" },
      { label: "KI-Sichtbarkeit messen", href: "/ratgeber/ki-sichtbarkeit-messen", note: "Methodik im Detail" },
      { label: "ChatGPT SEO", href: "/chatgpt-seo", note: "Sichtbarkeit in ChatGPT" },
      { label: "GEO Audit", href: "/geo-audit", note: "Ihr Ist-Stand in KI-Suchen" },
    ],
  },

  "google-ai-overviews": {
    metaTitle: "Google AI Overviews Optimierung: In der Übersicht mit KI erscheinen",
    metaDescription:
      "Google AI Overviews Optimierung: Was AI Overviews und AI Mode sind, wie Google Quellen auswählt und wie Ihre Inhalte in der „Übersicht mit KI“ verlinkt werden. Von Die GEO Agentur.",
    qaTitle: ["Google AI Overviews", "im Detail."],
    qa: [
      {
        id: "was-sind-ai-overviews",
        q: "Was sind Google AI Overviews?",
        a: [
          "Google AI Overviews – auf Deutsch „Übersicht mit KI“ – sind KI-generierte Zusammenfassungen, die Google bei vielen Suchanfragen oberhalb der klassischen Ergebnisse einblendet. Sie beantworten die Frage direkt und verlinken die Seiten, auf die sich die Zusammenfassung stützt. Daneben bietet Google mit dem AI Mode eine dialogorientierte KI-Suche an.",
        ],
      },
      {
        id: "quellenauswahl",
        q: "Wie wählt Google Quellen für AI Overviews aus?",
        a: [
          "AI Overviews stützen sich auf Googles Suchindex. Google gibt an, dass für AI Overviews dieselben Grundlagen gelten wie für die normale Suche: Seiten müssen indexiert und für ein Snippet geeignet sein; eine spezielle Auszeichnung oder ein eigenes Markup gibt es nicht.",
          "In der Praxis werden häufig Seiten verlinkt, die eine Teilfrage besonders klar beantworten – auch wenn sie in den klassischen Ergebnissen nicht ganz oben stehen.",
        ],
      },
      {
        id: "faktoren",
        q: "Welche Faktoren beeinflussen die Sichtbarkeit in AI Overviews?",
        a: [
          "Wichtig sind Indexierung und technische Qualität, Inhalte, die konkrete Fragen in klaren Abschnitten beantworten, nachvollziehbare Expertise mit erkennbaren Autoren, aktuelle Informationen und eine gute organische Grundsichtbarkeit zum Thema.",
          "Den Unterschied zwischen klassischem SEO und der Optimierung für KI-Antworten erklärt der Beitrag [SEO vs. GEO](/ratgeber/geo-vs-seo).",
        ],
      },
      {
        id: "klicks",
        q: "Verlieren Websites durch AI Overviews Klicks?",
        a: [
          "Das hängt stark von der Art der Suchanfrage ab. Bei einfachen Informationsfragen beantwortet die Übersicht die Frage oft vollständig, sodass weniger Nutzer klicken. Wer als Quelle verlinkt wird, bleibt dagegen sichtbar und erreicht Nutzer, die tiefer einsteigen wollen. Deshalb lohnt es sich, gezielt auf die Verlinkung in AI Overviews hinzuarbeiten.",
        ],
      },
      {
        id: "messen",
        q: "Wie misst man die Sichtbarkeit in AI Overviews?",
        a: [
          "Die Google Search Console weist Impressionen und Klicks aus AI Overviews derzeit nicht getrennt aus. Gemessen wird deshalb über eine regelmäßige Abfrage relevanter Suchbegriffe, bei der festgehalten wird, ob eine Übersicht erscheint und welche Seiten verlinkt werden. Mehr dazu im Beitrag [Google AI Overviews für Unternehmen](/ratgeber/google-ai-overviews-unternehmen).",
        ],
      },
    ],
    related: [
      { label: "Google AI Overviews für Unternehmen", href: "/ratgeber/google-ai-overviews-unternehmen", note: "Ratgeber" },
      { label: "Google AI Mode", href: "/ratgeber/google-ai-mode", note: "Der KI-Modus der Google-Suche" },
      { label: "Gemini SEO", href: "/gemini-seo", note: "Sichtbarkeit in Google Gemini" },
      { label: "SEO vs. GEO", href: "/ratgeber/geo-vs-seo", note: "Unterschiede und Gemeinsamkeiten" },
      { label: "Was ist Generative Engine Optimization?", href: "/generative-engine-optimization", note: "Grundlagen und Glossar" },
    ],
  },
};
