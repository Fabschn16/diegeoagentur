import { bookingHref, cta, pricing, provenStats, site, team } from "./site";
import { coreServices, platformServices, processSteps } from "./services";
import { ctaEn, pricingEn, provenStatsEn, siteEn, teamRolesEn } from "./en/site";
import { coreServicesEn, platformServicesEn, processStepsEn } from "./en/services";
import { ui, type Locale } from "./i18n";

/**
 * Sprachabhängige Daten an einer Stelle: `l10n(locale)` liefert dieselbe Struktur für Deutsch und Englisch.
 * Komponenten erhalten nur `locale` und holen sich hier Texte, CTAs, Leistungen und Preise.
 */
export function l10n(locale: Locale = "de") {
  if (locale === "en") {
    return {
      locale,
      home: "/en",
      ui: ui.en,
      description: siteEn.description,
      cta: ctaEn,
      bookingHref: site.bookingUrl || ctaEn.secondary.href,
      pricing: pricingEn,
      provenStats: provenStatsEn,
      coreServices: coreServicesEn,
      platformServices: platformServicesEn,
      processSteps: processStepsEn,
      team: team.map((p) => ({ ...p, ...teamRolesEn[p.id] })),
    };
  }
  return {
    locale,
    home: "/",
    ui: ui.de,
    description: site.description,
    cta,
    bookingHref,
    pricing,
    provenStats,
    coreServices,
    platformServices,
    processSteps,
    team: team.map((p) => ({ ...p })),
  };
}
