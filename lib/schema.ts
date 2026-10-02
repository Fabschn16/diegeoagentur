import { site, team } from "./site";
import type { Faq } from "./faq";

/**
 * Schema.org-Graph mit stabilen @id-Referenzen:
 * Daily Rocket GmbH (parent) → Die GEO Agentur (Organization/ProfessionalService)
 *   → WebSite → WebPage → Service / Article / FAQPage / BreadcrumbList → Person (Autor)
 */
export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;
export const PARENT_ID = `${site.sister.url}/#organization`;
export const personId = (id: string) => `${site.url}/ueber-uns/#${id}`;

export const abs = (path: string) => {
  if (path.startsWith("http")) return path;
  // trailingSlash: true – URLs immer mit abschließendem Slash (identisch mit den Canonicals)
  const [p, hash] = path.split("#");
  const withSlash = p === "/" || p === "" ? "/" : p.endsWith("/") ? p : `${p}/`;
  return `${site.url}${withSlash}${hash ? `#${hash}` : ""}`;
};

const plain = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export const topics = [
  "Generative Engine Optimization",
  "GEO",
  "KI-Suchmaschinenoptimierung",
  "AI Search Optimization",
  "Answer Engine Optimization",
  "Large Language Model Optimization",
  "ChatGPT SEO",
  "Google AI Overviews",
  "Google Gemini",
  "Perplexity",
  "AI Visibility",
  "Entity Optimization",
  "Strukturierte Daten",
  "Suchmaschinenoptimierung",
  "Performance Marketing",
];

export function organizationSchema() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: site.name,
    alternateName: ["GEO Agentur", "diegeoagentur.de"],
    url: `${site.url}/`,
    logo: { "@type": "ImageObject", "@id": `${site.url}/#logo`, url: `${site.url}/icon.svg`, caption: site.name },
    image: `${site.url}/opengraph-image`,
    description: site.description,
    slogan: site.tagline,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    location: { "@type": "Place", name: `${site.address.city}, ${site.address.region}, Deutschland` },
    areaServed: { "@type": "Country", name: "Deutschland" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.phone,
      email: site.email,
      areaServed: "DE",
      availableLanguage: ["de"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    knowsAbout: topics,
    founder: team.map((p) => ({ "@id": personId(p.id) })),
    employee: team.map((p) => ({ "@id": personId(p.id) })),
    parentOrganization: { "@id": PARENT_ID },
  };
}

/** Daily Rocket GmbH – rechtlicher Träger und Schwesteragentur. Die Social-Profile gehören zu Daily Rocket. */
export function parentOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": PARENT_ID,
    name: site.legalEntity,
    alternateName: site.sister.name,
    url: `${site.sister.url}/`,
    description: site.sister.description,
    foundingDate: site.foundingDate,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    sameAs: [site.social.linkedin, site.social.instagram],
    subOrganization: { "@id": ORG_ID },
    founder: team.map((p) => ({ "@id": personId(p.id) })),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${site.url}/`,
    name: site.name,
    description: "Agentur und Wissensressource für Generative Engine Optimization (GEO) und KI-Suchmaschinenoptimierung.",
    inLanguage: "de-DE",
    publisher: { "@id": ORG_ID },
    about: { "@id": ORG_ID },
  };
}

export function personSchemas() {
  return team.map((p) => ({
    "@type": "Person",
    "@id": personId(p.id),
    name: p.name,
    givenName: p.firstName,
    familyName: p.name.split(" ").slice(1).join(" "),
    jobTitle: "Geschäftsführer",
    description: `${p.role}. ${p.focus}`,
    image: abs(p.image),
    email: p.email,
    url: abs(`/ueber-uns#${p.id}`),
    worksFor: [{ "@id": ORG_ID }, { "@id": PARENT_ID }],
    knowsAbout: p.id === "jan"
      ? ["Generative Engine Optimization", "Technical SEO", "Tracking", "Datenanalyse", "Künstliche Intelligenz"]
      : ["Generative Engine Optimization", "Digitale Strategie", "Performance Marketing", "Suchmaschinenmarketing"],
  }));
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  alternateName?: string[];
  /** Einstiegspreis netto in EUR; monthly = Preis pro Monat */
  minPrice?: number;
  monthly?: boolean;
}) {
  return {
    "@type": "Service",
    "@id": `${abs(opts.path)}#service`,
    name: opts.name,
    ...(opts.alternateName ? { alternateName: opts.alternateName } : {}),
    serviceType: opts.serviceType ?? opts.name,
    description: plain(opts.description),
    url: abs(opts.path),
    provider: { "@id": ORG_ID },
    brand: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Deutschland" },
    availableLanguage: "de",
    audience: { "@type": "BusinessAudience", audienceType: "Unternehmen, Marketing- und SEO-Verantwortliche" },
    ...(opts.minPrice
      ? {
          offers: {
            "@type": "Offer",
            url: abs(opts.path),
            priceCurrency: "EUR",
            priceSpecification: {
              "@type": opts.monthly ? "UnitPriceSpecification" : "PriceSpecification",
              minPrice: opts.minPrice,
              priceCurrency: "EUR",
              valueAddedTaxIncluded: false,
              ...(opts.monthly ? { unitText: "Monat", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } } : {}),
            },
          },
        }
      : {}),
  };
}

export function faqSchema(items: Faq[], path?: string) {
  return {
    "@type": "FAQPage",
    ...(path ? { "@id": `${abs(path)}#faq`, isPartOf: { "@id": `${abs(path)}#webpage` } } : {}),
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a.join(" ")) },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  const last = items.length ? items[items.length - 1].path : "/";
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(last)}#breadcrumb`,
    itemListElement: [{ name: "Start", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function webPageSchema(opts: {
  path: string;
  title: string;
  description: string;
  type?: string;
  /** @id des Hauptgegenstands der Seite, z. B. ein Service oder Artikel */
  mainEntity?: string;
  /** Themen der Seite (Klartext) */
  about?: string[];
  breadcrumb?: boolean;
}) {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.title,
    description: opts.description,
    inLanguage: "de-DE",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    about: opts.about ? opts.about.map((t) => ({ "@type": "Thing", name: t })) : { "@id": ORG_ID },
    ...(opts.mainEntity ? { mainEntity: { "@id": opts.mainEntity } } : {}),
    ...(opts.breadcrumb !== false && opts.path !== "/" ? { breadcrumb: { "@id": `${abs(opts.path)}#breadcrumb` } } : {}),
  };
}

export function articleSchema(opts: {
  path: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authorId: string;
  about?: string[];
  section?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${abs(opts.path)}#article`,
    headline: opts.title,
    description: opts.description,
    url: abs(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: "de-DE",
    ...(opts.section ? { articleSection: opts.section } : {}),
    ...(opts.about ? { about: opts.about.map((t) => ({ "@type": "Thing", name: t })), keywords: opts.about.join(", ") } : {}),
    author: { "@id": personId(opts.authorId) },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
    mainEntityOfPage: { "@id": `${abs(opts.path)}#webpage` },
    image: `${site.url}/opengraph-image`,
  };
}

/** Glossar als DefinedTermSet – eindeutige Begriffsdefinitionen für Suchmaschinen und Sprachmodelle */
export function definedTermsSchema(path: string, terms: { term: string; name: string; description: string }[]) {
  return {
    "@type": "DefinedTermSet",
    "@id": `${abs(path)}#glossar`,
    name: "Glossar: Begriffe rund um Generative Engine Optimization",
    inLanguage: "de-DE",
    hasDefinedTerm: terms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${abs(path)}#${t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      termCode: t.term,
      name: t.name,
      description: t.description,
      inDefinedTermSet: { "@id": `${abs(path)}#glossar` },
    })),
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
