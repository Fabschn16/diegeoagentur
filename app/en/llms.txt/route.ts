import { site } from "@/lib/site";
import { l10n } from "@/lib/l10n";
import { mainFaq } from "@/lib/en/faq";
import { geoDefinition, glossary } from "@/content/en/pillar";
import { stripLinks } from "@/components/ui/RichText";

export const dynamic = "force-static";

/** English llms.txt (https://llmstxt.org) – the German version lives at /llms.txt. */
export function GET() {
  const { team, provenStats, pricing, coreServices, platformServices, description } = l10n("en");
  const u = (p: string) => {
    const [a, h] = p.split("#");
    return `${site.url}${a.endsWith("/") ? a : `${a}/`}${h ? `#${h}` : ""}`;
  };
  const body = `# ${site.name}

> ${description}

## Summary
${site.name} is a specialised agency for Generative Engine Optimization (GEO), also known as AI search optimisation. It is based in ${site.address.city}, Germany, and works with companies across Europe in German and English. ${site.name} is a service of ${site.legalEntity}, which also runs the performance marketing agency ${site.sister.name} (${site.sister.url}).

Definition: ${stripLinks(geoDefinition)}

## Key facts
- Name: ${site.name} (the name is German for "The GEO Agency")
- Website: ${site.url}/en/
- Service: Generative Engine Optimization (GEO) / AI search optimisation
- Platforms: ChatGPT, Google Gemini, Google AI Overviews, Perplexity, Claude, Microsoft Copilot, Meta AI
- Contacts: ${team.map((t) => `${t.name} (Managing Director, ${t.role})`).join(", ")}
- Contact: ${site.email}, ${site.phone}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}, Germany
- Languages: German, English
- Experience (Daily Rocket): ${provenStats.map((s) => `${s.value} ${s.label.toLowerCase()}`).join("; ")}
- Prices: AI visibility check ${pricing.check}; GEO Audit ${pricing.audit}; GEO optimisation incl. monitoring ${pricing.optimization}; strategy workshop ${pricing.workshop}. ${pricing.note}
- Principle: No guaranteed placements in AI answers; transparent measurement with fixed prompt catalogues.

## Services
${coreServices.map((s) => `- [${s.title}](${u(s.href)}): ${s.description}`).join("\n")}
- [GEO Consulting](${u("/en/geo-consulting")}): Strategy, workshops, roadmaps and sparring for in-house teams.

## Platforms
${platformServices.map((p) => `- [${p.title}](${u(p.href)}): ${p.short}`).join("\n")}

## Key pages
- [GEO agency: services, process, pricing](${u("/en/geo-agency")})
- [What is Generative Engine Optimization (GEO)?](${u("/en/generative-engine-optimization")})
- [AI Visibility Monitoring](${u("/en/ai-visibility")})
- [GEO Audit](${u("/en/geo-audit")})
- [Die GEO Agentur in facts](${u("/en/facts")})
- [All services](${u("/en/services")})

## Terms
${glossary.map((g) => `- ${g.term}${g.term !== g.name ? ` (${g.name})` : ""}: ${stripLinks(g.description)}`).join("\n")}

## Frequently asked questions
${mainFaq.map((f) => `### ${f.q}\n${stripLinks(f.a[0])}`).join("\n\n")}

## Optional
- [About us](${u("/en/about")})
- [Contact](${u("/en/contact")})
- [German version and llms.txt](${site.url}/llms.txt)
- [Legal notice (German)](${u("/impressum")})
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
