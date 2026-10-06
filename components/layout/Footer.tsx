import Link from "next/link";
import { CookieSettingsLink } from "@/components/ui/CookieBanner";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight } from "@/components/ui/Icons";
import { site, platforms } from "@/lib/site";
import { l10n } from "@/lib/l10n";
import type { Locale } from "@/lib/i18n";

const links = {
  de: { consulting: "/geo-beratung", about: "/ueber-uns", facts: "/fakten", agency: "/geo-agentur", geo: "/generative-engine-optimization", knowledge: "/ratgeber", check: "/geo-audit", contact: "/kontakt" },
  en: { consulting: "/en/geo-consulting", about: "/en/about", facts: "/en/facts", agency: "/en/geo-agency", geo: "/en/generative-engine-optimization", knowledge: "/en/insights", check: "/en/geo-audit", contact: "/en/contact" },
};

export function Footer({ locale = "de" }: { locale?: Locale }) {
  const year = new Date().getFullYear();
  const { coreServices, platformServices, ui } = l10n(locale);
  const L = links[locale];
  return (
    <footer className="relative overflow-hidden bg-night text-paper">
      <div className="container-x pt-20 pb-10 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="paper" className="text-[1.25rem]" locale={locale} />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-fog">
              {ui.footerBlurb}
            </p>
            <address className="mt-8 space-y-1.5 text-[0.92rem] not-italic text-fog">
              <p>
                {site.address.street}, {site.address.postalCode} {site.address.city}
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-paper transition-colors hover:text-signal">
                  {locale === "en" ? site.phone : site.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="text-paper transition-colors hover:text-signal">
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <FooterCol title={ui.services}>
              {coreServices.map((s) => (
                <FooterLink key={s.id} href={s.href}>
                  {s.title}
                </FooterLink>
              ))}
              <FooterLink href={L.consulting}>{ui.consulting}</FooterLink>
            </FooterCol>
            <FooterCol title={ui.platformsCol}>
              {platformServices.map((p) => (
                <FooterLink key={p.id} href={p.href}>
                  {p.title}
                </FooterLink>
              ))}
            </FooterCol>
            <FooterCol title={ui.agencyCol}>
              <FooterLink href={L.about}>{ui.about}</FooterLink>
              <FooterLink href={L.facts}>{ui.facts}</FooterLink>
              <FooterLink href={L.agency}>{ui.agency}</FooterLink>
              <FooterLink href={L.geo}>{ui.whatIsGeo}</FooterLink>
              {L.knowledge && <FooterLink href={L.knowledge}>{ui.knowledge}</FooterLink>}
              <FooterLink href={L.check}>{ui.visibilityCheck}</FooterLink>
              <FooterLink href={L.contact}>{ui.contact}</FooterLink>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-[0.92rem] text-fog transition-colors hover:text-paper"
                >
                  LinkedIn <ArrowUpRight className="size-3" />
                </a>
              </li>
              <li>
                <a
                  href={site.sister.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-[0.92rem] text-fog transition-colors hover:text-paper"
                >
                  Daily Rocket <ArrowUpRight className="size-3" />
                </a>
              </li>
            </FooterCol>
          </div>
        </div>

        <div aria-hidden="true" className="mt-20 select-none border-t border-night-line pt-10">
          <p className="text-[clamp(2.6rem,8.4vw,8.6rem)] font-medium leading-[0.9] tracking-[-0.05em] text-night-3">
            {ui.footerSlogan[0]} <span className="em text-night-line">{ui.footerSlogan[1]}</span>
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-night-line pt-8 text-[0.8rem] text-fog md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name} · {ui.offeredBy} {site.legalEntity}
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em]">
            {ui.optimisedFor} {platforms.slice(0, 4).join(" · ")}
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-paper" hrefLang="de">
              {ui.imprint}
            </Link>
            <Link href="/datenschutz" className="hover:text-paper" hrefLang="de">
              {ui.privacy}
            </Link>
            <CookieSettingsLink className="hover:text-paper" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-5 text-fog/70">{title}</p>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[0.92rem] text-fog transition-colors hover:text-paper">
        {children}
      </Link>
    </li>
  );
}
