import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { CtaBand } from "@/components/sections/CtaBand";
import { ORG_ID, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { siteEn } from "@/lib/en/site";
import { l10n } from "@/lib/l10n";
import { pageMeta } from "@/lib/seo";

/**
 * Facts page ("grounding page"), English version of app/(de)/fakten/page.tsx.
 * Legal data (register court, HRB, VAT ID) comes unchanged from lib/site.ts.
 */

const path = "/en/facts";
const title = "Facts: Company, Team, Services & Prices";
const description =
  "All key facts about Die GEO Agentur on one page: legal entity, location, contacts, services, prices, platforms, working principles and contact details – concise and verifiable.";
const AS_OF = "1 October 2026";

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

export default function FactsPageEn() {
  const { pricing, provenStats, team, coreServices, platformServices } = l10n("en");
  const crumbs = [
    { name: "About us", path: "/en/about" },
    { name: "Facts", path },
  ];

  const groups: { id: string; heading: string; rows: Row[] }[] = [
    {
      id: "unternehmen",
      heading: "Company",
      rows: [
        { k: "Name", v: site.name },
        { k: "What we are", v: "A specialised agency for Generative Engine Optimization (GEO), also known as AI search optimisation or AI Search Optimization" },
        { k: "Legal entity", v: `${site.legalEntity} – ${site.name} is a service of ${site.legalEntity}` },
        {
          k: "Sister company",
          v: (
            <>
              {site.sister.name}: performance marketing agency for Google Ads, tracking and AI (
              <a href={site.sister.url} target="_blank" rel="noopener" className={linkCls}>
                dailyrocket.de
              </a>
              )
            </>
          ),
        },
        { k: "Registered office", v: `${site.address.street}, ${site.address.postalCode} ${site.address.city}, Bavaria, Germany` },
        { k: "Area served", v: siteEn.areaServed },
        { k: "Languages", v: "German and English" },
        { k: "Commercial register", v: `${site.legal.registerCourt} (Local Court of Passau), ${site.legal.registerNumber}` },
        { k: "VAT ID", v: site.legal.vatId },
        { k: "Experience (via Daily Rocket)", v: provenStats.map((s) => `${s.value} ${s.label}`).join(" · ") },
        { k: "Website", v: "diegeoagentur.de" },
      ],
    },
    {
      id: "personen",
      heading: "Contacts",
      rows: team.map((p) => ({
        k: p.name,
        v: (
          <>
            Managing Director, {p.role}. {p.focus}{" "}
            <a href={`mailto:${p.email}`} className={linkCls}>
              {p.email}
            </a>
          </>
        ),
      })),
    },
    {
      id: "leistungen",
      heading: "Services and prices",
      rows: [
        { k: "Entry point", v: <>AI visibility check – {pricing.check}</> },
        {
          k: "GEO Audit",
          v: (
            <>
              {pricing.audit} – systematic analysis of how you are represented in AI answers, with a prioritised roadmap (
              <Link href="/en/geo-audit" className={linkCls}>
                details
              </Link>
              )
            </>
          ),
        },
        {
          k: "GEO optimisation incl. monitoring",
          v: (
            <>
              {pricing.optimization} – implementation and monthly measurement of AI visibility (
              <Link href="/en/ai-visibility" className={linkCls}>
                details
              </Link>
              )
            </>
          ),
        },
        {
          k: "Strategy workshop",
          v: (
            <>
              {pricing.workshop} – as part of{" "}
              <Link href="/en/geo-consulting" className={linkCls}>
                GEO Consulting
              </Link>
            </>
          ),
        },
        { k: "Pricing note", v: `${pricing.note} The exact price depends on scope and is confirmed in a binding quote before work begins.` },
        {
          k: "All services",
          v: (
            <>
              {coreServices.map((s) => s.title).join(", ")} (
              <Link href="/en/services" className={linkCls}>
                overview
              </Link>
              )
            </>
          ),
        },
      ],
    },
    {
      id: "plattformen",
      heading: "Platforms",
      rows: [
        { k: "Focus", v: platformServices.map((p) => p.title).join(", ") },
        { k: "Also", v: "Microsoft Copilot and Claude" },
        { k: "Foundation", v: <>Traditional search engine optimisation remains the foundation; GEO complements it (<Link href="/en/insights/geo-vs-seo" className={linkCls}>SEO vs. GEO</Link>)</> },
      ],
    },
    {
      id: "grundsaetze",
      heading: "Working principles",
      rows: [
        { k: "No guarantees", v: "We do not guarantee mentions or positions in AI answers. What can be improved are the preconditions; what can be measured is the progress." },
        { k: "Transparent measurement", v: <>A fixed, disclosed prompt catalogue (<Link href="/en/insights/methodology-prompt-catalogue" className={linkCls}>methodology</Link>)</> },
        { k: "No manipulation", v: "No hidden text, bought reviews, link farms or artificial mass mentions" },
        { k: "Direct contact", v: "Clients speak directly with the managing directors, not with changing account managers" },
      ],
    },
    {
      id: "kontakt",
      heading: "Contact",
      rows: [
        {
          k: "Email",
          v: (
            <a href={`mailto:${site.email}`} className={linkCls}>
              {site.email}
            </a>
          ),
        },
        {
          k: "Phone",
          v: (
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={linkCls}>
              {site.phone}
            </a>
          ),
        },
        { k: "Opening hours", v: siteEn.hours },
        {
          k: "Intro call",
          v: (
            <Link href="/en/contact" className={linkCls}>
              Contact form
            </Link>
          ),
        },
        {
          k: "Legal",
          v: (
            <>
              <Link href="/impressum" className={linkCls}>
                Legal notice (German)
              </Link>{" "}
              ·{" "}
              <Link href="/datenschutz" className={linkCls}>
                Privacy policy (German)
              </Link>
            </>
          ),
        },
        {
          k: "Official profiles",
          v: (
            <>
              <a href={site.social.linkedin} target="_blank" rel="noopener" className={linkCls}>
                LinkedIn
              </a>{" "}
              ·{" "}
              <a href={site.social.instagram} target="_blank" rel="noopener" className={linkCls}>
                Instagram (Daily Rocket)
              </a>
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
        locale="en"
        crumbs={crumbs}
        eyebrow="Facts"
        title={
          <>
            Die GEO Agentur <span className="em">in facts.</span>
          </>
        }
        lead="All the key details about the company, team, services and prices on one page: concise, verifiable and maintained in one place."
        showCtas={false}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <p className="mb-10 max-w-3xl text-lead text-ink-2" data-reveal>
            {site.name} is a specialised German agency for Generative Engine Optimization based in {site.address.city}, working with
            companies across Europe. It optimises websites, brands and content so that AI systems such as ChatGPT, Gemini, Perplexity and
            Google AI Overviews understand a company and can consider it as a source or recommendation for relevant questions.
          </p>
          <nav aria-label="Contents" className="mb-6 flex flex-wrap gap-2">
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
            As of: <time dateTime="2026-10-01">{AS_OF}</time> · In case of discrepancies, the details in the{" "}
            <Link href="/impressum" className="underline underline-offset-2">
              legal notice (Impressum)
            </Link>{" "}
            apply
          </p>
        </div>
      </section>

      <RelatedLinks
        locale="en"
        title="More about us"
        links={[
          { label: "About us", href: "/en/about", note: "Team and background" },
          { label: "What does a GEO agency do?", href: "/en/geo-agency", note: "Services, process and selection criteria" },
          { label: "What is Generative Engine Optimization?", href: "/en/generative-engine-optimization", note: "Definition and glossary" },
        ]}
      />
      <CtaBand locale="en" />
    </>
  );
}
