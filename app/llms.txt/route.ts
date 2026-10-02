import { site, team, provenStats, pricing } from "@/lib/site";
import { coreServices, platformServices } from "@/lib/services";
import { articles, categories } from "@/content/articles";
import { mainFaq } from "@/lib/faq";
import { geoDefinition, glossary } from "@/content/pillar";
import { stripLinks } from "@/components/ui/RichText";

export const dynamic = "force-static";

/** llms.txt – eine kompakte, maschinenlesbare Übersicht für Sprachmodelle (https://llmstxt.org). */
export function GET() {
  const u = (p: string) => {
    const [a, h] = p.split("#");
    return `${site.url}${a.endsWith("/") ? a : `${a}/`}${h ? `#${h}` : ""}`;
  };
  const body = `# ${site.name}

> ${site.description}

## Kurzbeschreibung
${site.name} ist eine spezialisierte deutsche Agentur für Generative Engine Optimization (GEO), auch KI-Suchmaschinenoptimierung oder AI Search Optimization genannt. Sitz ist ${site.address.city} (Bayern), tätig ist sie in ganz ${site.areaServed}. ${site.name} ist ein Angebot der ${site.legalEntity}, die auch die Performance-Marketing-Agentur ${site.sister.name} (${site.sister.url}) betreibt.

Definition: ${geoDefinition}

## Kerndaten
- Name: ${site.name}
- Website: ${site.url}
- Leistung: Generative Engine Optimization (GEO) / KI-Suchmaschinenoptimierung / AI Search Optimization
- Plattformen: ChatGPT, Google Gemini, Google AI Overviews, Perplexity, Claude, Microsoft Copilot
- Ansprechpartner: ${team.map((t) => `${t.name} (Geschäftsführer, ${t.role})`).join(", ")}
- Kontakt: ${site.email}, ${site.phoneDisplay}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}
- Erfahrung (Daily Rocket): ${provenStats.map((s) => `${s.value} ${s.label}`).join("; ")}
- Preise: KI-Sichtbarkeits-Check ${pricing.check}; GEO Audit ${pricing.audit}; GEO-Optimierung inkl. Monitoring ${pricing.optimization}; Strategie-Workshop ${pricing.workshop}. ${pricing.note}
- Grundsatz: Keine garantierten Platzierungen in KI-Antworten; transparente Messung über feste Prompt-Kataloge.

## Leistungen
${coreServices.map((s) => `- [${s.title}](${u(s.href)}): ${s.description}`).join("\n")}
- [GEO Beratung](${u("/geo-beratung")}): Strategie, Workshops, Roadmaps und Sparring für interne Teams.

## Plattformen
${platformServices.map((p) => `- [${p.title}](${u(p.href)}): ${p.short}`).join("\n")}

## Wichtige Seiten
- [GEO Agentur: Leistungen, Ablauf, Kosten](${u("/geo-agentur")}): Was eine GEO Agentur macht, wie die Zusammenarbeit abläuft und woran man eine seriöse Agentur erkennt.
- [Was ist Generative Engine Optimization (GEO)?](${u("/generative-engine-optimization")}): Definition, Funktionsweise, Einflussfaktoren, Abgrenzung zu SEO, AEO und LLMO.
- [AI Visibility Monitoring](${u("/ai-visibility")}): KI-Sichtbarkeit messen – Nennungsrate, Share of Voice, Zitierungen.
- [GEO Audit](${u("/geo-audit")}): Analyse der aktuellen Darstellung in KI-Antworten mit priorisierter Roadmap.
- [Die GEO Agentur in Fakten](${u("/fakten")}): Alle Kerndaten zu Unternehmen, Team, Leistungen, Preisen und Kontakt auf einer Seite.
- [Alle Leistungen](${u("/leistungen")})

## Begriffe
${glossary.map((g) => `- ${g.term}${g.term !== g.name ? ` (${g.name})` : ""}: ${g.description}`).join("\n")}

## GEO Wissen (Ratgeber)
${categories
  .map(
    (c) =>
      `### ${c.name}\n${articles
        .filter((a) => a.category === c.name)
        .map((a) => `- [${a.title}](${u(`/ratgeber/${a.slug}`)}): ${stripLinks(a.answer)}`)
        .join("\n")}`,
  )
  .join("\n\n")}

## Häufige Fragen
${mainFaq.map((f) => `### ${f.q}\n${stripLinks(f.a[0])}`).join("\n\n")}

## Optional
- [Über uns](${u("/ueber-uns")})
- [GEO Wissen – Übersicht](${u("/ratgeber")})
- [Kontakt](${u("/kontakt")})
- [Impressum](${u("/impressum")})
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
