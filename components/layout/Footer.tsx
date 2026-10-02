import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight } from "@/components/ui/Icons";
import { site, platforms } from "@/lib/site";
import { coreServices, platformServices } from "@/lib/services";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-night text-paper">
      <div className="container-x pt-20 pb-10 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="paper" className="text-[1.25rem]" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-fog">
              Spezialisierte Agentur für Generative Engine Optimization. Wir sorgen dafür, dass Unternehmen in KI-Antworten sichtbar,
              verstanden und als relevante Quelle genannt werden.
            </p>
            <address className="mt-8 space-y-1.5 text-[0.92rem] not-italic text-fog">
              <p>
                {site.address.street}, {site.address.postalCode} {site.address.city}
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-paper transition-colors hover:text-signal">
                  {site.phoneDisplay}
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
            <FooterCol title="Leistungen">
              {coreServices.map((s) => (
                <FooterLink key={s.id} href={s.href}>
                  {s.title}
                </FooterLink>
              ))}
              <FooterLink href="/geo-beratung">GEO Beratung</FooterLink>
            </FooterCol>
            <FooterCol title="Plattformen">
              {platformServices.map((p) => (
                <FooterLink key={p.id} href={p.href}>
                  {p.title}
                </FooterLink>
              ))}
            </FooterCol>
            <FooterCol title="Agentur">
              <FooterLink href="/ueber-uns">Über uns</FooterLink>
              <FooterLink href="/fakten">Fakten auf einen Blick</FooterLink>
              <FooterLink href="/geo-agentur">GEO Agentur</FooterLink>
              <FooterLink href="/generative-engine-optimization">Was ist GEO?</FooterLink>
              <FooterLink href="/ratgeber">GEO Wissen</FooterLink>
              <FooterLink href="/geo-audit">Sichtbarkeits-Check</FooterLink>
              <FooterLink href="/kontakt">Kontakt</FooterLink>
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
            Werden Sie zur <span className="em text-night-line">Quelle.</span>
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-night-line pt-8 text-[0.8rem] text-fog md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name} · Ein Angebot der {site.legalEntity}
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em]">
            Optimiert für {platforms.slice(0, 4).join(" · ")}
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-paper">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-paper">
              Datenschutz
            </Link>
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
