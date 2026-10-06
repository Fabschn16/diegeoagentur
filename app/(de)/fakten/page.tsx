import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CtaBand } from "@/components/sections/CtaBand";
import { ORG_ID, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { pricing, provenStats, site, team } from "@/lib/site";
import { coreServices, platformServices } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

/**
 * Faktenseite („Grounding-Seite“): alle überprüfbaren Kerndaten der Marke an einer Stelle.
 * Bewusst eine ganz normale, sichtbare und verlinkte Seite – gleicher Inhalt für Menschen und Maschinen,
 * keine versteckten Texte, keine Keyword-Listen. Alle Werte kommen aus lib/site.ts, damit sie
 * mit dem Rest der Website, dem Schema und der llms.txt übereinstimmen.
 */

const path = "/fakten";
const title = "Fakten: Unternehmen, Team, Leistungen & Preise";
const description =
  "Alle Kerndaten zu Die GEO Agentur auf einer Seite: Rechtsträger, Sitz, Ansprechpartner, Leistungen, Preise, Plattformen, Arbeitsgrundsätze und Kontakt – kompakt und überprüfbar.";
const STAND = "1. Oktober 2026";

export const metadata = pageMeta({ title, description, path });

type Row = { k: string; v: React.ReactNode };

function FactGroup({ id, heading, rows }: { id: string; heading: string; rows: Row[] }) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className="scroll-mt-28 grid gap-6 border-t border-ink py-10 lg:grid-cols-12 lg:gap-10">
      <h2 id={`${id}-t`} className="text-[1.5rem] font-medium tracking-[-0.02em] lg:col-span-4">
        {heading}
      </h2>
      <dl className="divide-y divide-line lg:col-span-8">
        {rows.map((r) => (
          <div key={r.k} className="grid gap-1 py-3.5 sm:grid-cols-[220px_1fr] sm:gap-6">
            <dt className="text-[0.9rem] text-muted">{r.k}</dt>
            <dd className="text-[1rem] leading-relaxed text-ink">{r.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

const linkCls = "underline decoration-line-2 underline-offset-4 hover:decoration-ink";

export default function FaktenPage() {
  const crumbs = [
    { name: "Über uns", path: "/ueber-uns" },
    { name: "Fakten", path },
  ];

  const groups: { id: string; heading: string; rows: Row[] }[] = [
    {
      id: "unternehmen",
      heading: "Unternehmen",
      rows: [
        { k: "Name", v: site.name },
        { k: "Was wir sind", v: "Spezialisierte Agentur für Generative Engine Optimization (GEO), auch KI-Suchmaschinenoptimierung oder AI Search Optimization genannt" },
        { k: "Rechtsträger", v: `${site.legalEntity} – ${site.name} ist ein Angebot der ${site.legalEntity}` },
        { k: "Schwesterangebot", v: <>{site.sister.name}: {site.sister.description} (<a href={site.sister.url} target="_blank" rel="noopener" className={linkCls}>dailyrocket.de</a>)</> },
        { k: "Sitz", v: `${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.region}` },
        { k: "Tätigkeitsgebiet", v: site.areaServed },
        { k: "Handelsregister", v: `${site.legal.registerCourt}, ${site.legal.registerNumber}` },
        { k: "Erfahrung (über Daily Rocket)", v: provenStats.map((s) => `${s.value} ${s.label}`).join(" · ") },
        { k: "Website", v: "diegeoagentur.de" },
      ],
    },
    {
      id: "personen",
      heading: "Ansprechpartner",
      rows: team.map((p) => ({
        k: p.name,
        v: (
          <>
            Geschäftsführer, {p.role}. {p.focus}{" "}
            <a href={`mailto:${p.email}`} className={linkCls}>
              {p.email}
            </a>
          </>
        ),
      })),
    },
    {
      id: "leistungen",
      heading: "Leistungen und Preise",
      rows: [
        { k: "Einstieg", v: <>KI-Sichtbarkeits-Check – {pricing.check}</> },
        {
          k: "GEO Audit",
          v: (
            <>
              {pricing.audit} – systematische Analyse der Darstellung in KI-Antworten mit priorisierter Roadmap (<Link href="/geo-audit" className={linkCls}>Details</Link>)
            </>
          ),
        },
        {
          k: "GEO-Optimierung inkl. Monitoring",
          v: (
            <>
              {pricing.optimization} – Umsetzung und monatliche Messung der KI-Sichtbarkeit (<Link href="/ai-visibility" className={linkCls}>Details</Link>)
            </>
          ),
        },
        {
          k: "Strategie-Workshop",
          v: (
            <>
              {pricing.workshop} – im Rahmen der <Link href="/geo-beratung" className={linkCls}>GEO Beratung</Link>
            </>
          ),
        },
        { k: "Preishinweis", v: `${pricing.note} Der genaue Preis hängt vom Umfang ab und steht vor Beginn verbindlich im Angebot.` },
        { k: "Alle Leistungen", v: <>{coreServices.map((s) => s.title).join(", ")} (<Link href="/leistungen" className={linkCls}>Übersicht</Link>)</> },
      ],
    },
    {
      id: "plattformen",
      heading: "Plattformen",
      rows: [
        { k: "Schwerpunkt", v: platformServices.map((p) => p.title).join(", ") },
        { k: "Außerdem", v: "Microsoft Copilot und Claude" },
        { k: "Grundlage", v: <>Klassische Suchmaschinenoptimierung bleibt Basis – GEO ergänzt sie (<Link href="/ratgeber/geo-vs-seo" className={linkCls}>SEO vs. GEO</Link>)</> },
      ],
    },
    {
      id: "grundsaetze",
      heading: "Arbeitsgrundsätze",
      rows: [
        { k: "Keine Garantien", v: "Wir garantieren keine Nennungen oder Positionen in KI-Antworten. Verbessern lassen sich die Voraussetzungen, messen lässt sich die Entwicklung." },
        { k: "Transparente Messung", v: <>Fester, offengelegter Prompt-Katalog (<Link href="/ratgeber/methodik-prompt-katalog" className={linkCls}>Methodik</Link>)</> },
        { k: "Keine Manipulation", v: "Keine versteckten Texte, gekauften Bewertungen, Linkfarmen oder künstlichen Massenerwähnungen" },
        { k: "Direkter Kontakt", v: "Kunden sprechen direkt mit den Geschäftsführern, nicht mit wechselnden Account-Managern" },
      ],
    },
    {
      id: "kontakt",
      heading: "Kontakt",
      rows: [
        { k: "E-Mail", v: <a href={`mailto:${site.email}`} className={linkCls}>{site.email}</a> },
        { k: "Telefon", v: <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={linkCls}>{site.phoneDisplay}</a> },
        { k: "Erreichbarkeit", v: site.legal.hours },
        { k: "Erstgespräch", v: <Link href="/kontakt" className={linkCls}>Kontaktformular</Link> },
        { k: "Rechtliches", v: <><Link href="/impressum" className={linkCls}>Impressum</Link> · <Link href="/datenschutz" className={linkCls}>Datenschutz</Link></> },
        {
          k: "Offizielle Profile",
          v: (
            <>
              <a href={site.social.linkedin} target="_blank" rel="noopener" className={linkCls}>LinkedIn</a> ·{" "}
              <a href={site.social.instagram} target="_blank" rel="noopener" className={linkCls}>Instagram (Daily Rocket)</a>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          {
            ...webPageSchema({ path, title, description, type: "AboutPage", mainEntity: ORG_ID }),
            about: { "@id": ORG_ID },
            dateModified: "2026-10-01",
          },
          breadcrumbSchema(crumbs),
        )}
      />
      <PageHero
        crumbs={crumbs}
        eyebrow="Fakten"
        title={
          <>
            Die GEO Agentur <span className="em">in Fakten.</span>
          </>
        }
        lead="Alle wichtigen Angaben zu Unternehmen, Team, Leistungen und Preisen auf einer Seite – kompakt, überprüfbar und an einer Stelle gepflegt."
        showCtas={false}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <p className="mb-10 max-w-3xl text-lead text-ink-2" data-reveal>
            {site.name} ist eine spezialisierte deutsche Agentur für Generative Engine Optimization mit Sitz in {site.address.city}. Sie
            optimiert Websites, Marken und Inhalte dafür, dass KI-Systeme wie ChatGPT, Gemini, Perplexity und Google AI Overviews ein
            Unternehmen verstehen und bei passenden Fragen als Quelle oder Empfehlung berücksichtigen können.
          </p>
          <nav aria-label="Inhalt" className="mb-6 flex flex-wrap gap-2">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-full border border-line px-3.5 py-1.5 text-[0.85rem] text-ink-2 transition-colors hover:border-ink hover:text-ink"
              >
                {g.heading}
              </a>
            ))}
          </nav>
          {groups.map((g) => (
            <FactGroup key={g.id} {...g} />
          ))}
          <p className="border-t border-line pt-6 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">
            Stand: <time dateTime="2026-10-01">{STAND}</time> · Bei Abweichungen gelten die Angaben im{" "}
            <Link href="/impressum" className="underline underline-offset-2">
              Impressum
            </Link>
          </p>
        </div>
      </section>

      <RelatedLinks
        title="Mehr über uns"
        links={[
          { label: "Über uns", href: "/ueber-uns", note: "Team und Hintergrund" },
          { label: "Was macht eine GEO Agentur?", href: "/geo-agentur", note: "Leistungen, Ablauf und Auswahlkriterien" },
          { label: "Was ist Generative Engine Optimization?", href: "/generative-engine-optimization", note: "Definition und Glossar" },
        ]}
      />
      <CtaBand />
    </>
  );
}
