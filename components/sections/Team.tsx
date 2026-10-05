import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/Button";
import { Mail as MailIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";
import { l10n } from "@/lib/l10n";
import type { Locale } from "@/lib/i18n";

const copy = {
  de: {
    title: (
      <>
        Spezialisten für Performance, Daten und die <span className="em">neue Generation der Suche.</span>
      </>
    ),
    officeAlt: "Jan Hugo und Fabian Schnabel, Geschäftsführer von Die GEO Agentur, bei der gemeinsamen Analyse am Laptop",
    caption: "Analyse statt Annahmen",
    intro: (since: string) =>
      `Hinter der GEO Agentur stehen Fabian Schnabel und Jan Hugo – Gründer und Geschäftsführer der Performance-Marketing-Agentur Daily Rocket. Seit ${since} betreuen sie mit Daily Rocket von Passau aus Unternehmen in ganz Deutschland, heute über 100 Kunden mit mehr als 20 Mio. € Ad Spend pro Jahr.`,
    text: "Für GEO führen wir zusammen, was wir dort täglich tun: Suchverhalten verstehen, sauber messen und Entscheidungen auf Daten stützen. Sie sprechen immer direkt mit den Menschen, die Ihr Projekt verantworten.",
    disciplines: ["Performance Marketing", "Tracking & Datenmodelle", "SEO", "Datenanalyse", "Künstliche Intelligenz"],
    mailLabel: (name: string, email: string) => `E-Mail an ${name}: ${email}`,
    portraitAlt: (name: string, role: string) => `Porträt von ${name}, Geschäftsführer (${role}) bei Die GEO Agentur`,
    mailTo: "E-Mail an",
    more: "Mehr über uns und unsere Arbeitsweise",
    moreHref: "/ueber-uns",
  },
  en: {
    title: (
      <>
        Specialists in performance, data and the <span className="em">new generation of search.</span>
      </>
    ),
    officeAlt: "Jan Hugo and Fabian Schnabel, managing directors of Die GEO Agentur, analysing data together on a laptop",
    caption: "Analysis, not assumptions",
    intro: (since: string) =>
      `Die GEO Agentur is run by Fabian Schnabel and Jan Hugo, founders and managing directors of the performance marketing agency Daily Rocket. Since ${since}, they have been working from Passau with companies across Germany through Daily Rocket, today serving more than 100 clients with over €20M in annual ad spend.`,
    text: "For GEO, we bring together what we do there every day: understanding search behaviour, measuring cleanly and basing decisions on data. You always speak directly with the people responsible for your project.",
    disciplines: ["Performance Marketing", "Tracking & Data Models", "SEO", "Data Analysis", "Artificial Intelligence"],
    mailLabel: (name: string, email: string) => `Email ${name}: ${email}`,
    portraitAlt: (name: string, role: string) => `Portrait of ${name}, managing director (${role}) at Die GEO Agentur`,
    mailTo: "Email",
    more: "More about us and how we work",
    moreHref: "/en/about",
  },
};

export function Team({
  index = "06",
  showLink = true,
  headingLevel = "h2",
  locale = "de",
}: {
  index?: string;
  showLink?: boolean;
  headingLevel?: "h1" | "h2";
  locale?: Locale;
}) {
  const t = copy[locale];
  const { team } = l10n(locale);
  return (
    <section aria-labelledby="team" className="py-24 lg:py-36">
      <div className="container-x">
        <SectionHeader
          as={headingLevel}
          index={index}
          eyebrow="Team"
          title={<span id="team">{t.title}</span>}
        />

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-12">
          <figure className="relative self-start overflow-hidden rounded-[24px] bg-paper-2 lg:col-span-7" data-reveal>
            <div className="relative aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/images/team/office.jpg"
                alt={t.officeAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-[50%_85%] lg:object-center grayscale-[35%] transition-[filter] duration-700 hover:grayscale-0"
              />
            </div>
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3.5 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-ink backdrop-blur">
              {t.caption}
            </figcaption>
          </figure>

          <div className="flex flex-col lg:col-span-5">
            <div data-reveal>
              <p className="text-[1.15rem] leading-relaxed text-ink-2">{t.intro(site.foundingDate)}</p>
              <p className="mt-5 text-[1rem] leading-relaxed text-muted">{t.text}</p>
              <ul className="mt-7 flex flex-wrap gap-1.5">
                {t.disciplines.map((d) => (
                  <li key={d} className="rounded-full border border-line px-3 py-1 text-[0.78rem] text-ink-2">
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-4 lg:mt-auto lg:pt-10">
              {team.map((p, i) => (
                <li key={p.id} id={p.id} data-reveal style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
                  <a href={`mailto:${p.email}`} className="group block" aria-label={t.mailLabel(p.name, p.email)}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-paper-2">
                      <Image
                        src={p.image}
                        alt={t.portraitAlt(p.name, p.role)}
                        fill
                        sizes="(min-width: 1024px) 20vw, 50vw"
                        className="object-cover object-top grayscale transition-[filter,transform] duration-700 ease-out-soft group-hover:scale-[1.02] group-hover:grayscale-0"
                      />
                      <span className="absolute inset-x-2 bottom-2 flex items-center justify-center gap-1.5 rounded-full bg-paper/90 px-3 py-2 text-[0.78rem] font-medium text-ink backdrop-blur transition-[opacity,transform] duration-500 ease-out-soft lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                        <MailIcon className="size-3.5" /> {t.mailTo} {p.firstName}
                      </span>
                    </div>
                    <p className="mt-4 text-[1.05rem] font-medium">{p.name}</p>
                    <p className="mt-0.5 text-[0.85rem] text-muted">{p.role}</p>
                    <p className="mt-2 break-all text-[0.85rem] text-ink-2 underline decoration-line-2 underline-offset-4 transition-colors group-hover:decoration-ink">
                      {p.email}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {showLink && (
          <div className="mt-10" data-reveal>
            <TextLink href={t.moreHref}>{t.more}</TextLink>
          </div>
        )}
      </div>
    </section>
  );
}
