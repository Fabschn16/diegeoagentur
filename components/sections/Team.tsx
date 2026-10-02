import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/Button";
import { Mail as MailIcon } from "@/components/ui/Icons";
import { site, team } from "@/lib/site";

const disciplines = ["Performance Marketing", "Tracking & Datenmodelle", "SEO", "Datenanalyse", "Künstliche Intelligenz"];

export function Team({ index = "06", showLink = true, headingLevel = "h2" }: { index?: string; showLink?: boolean; headingLevel?: "h1" | "h2" }) {
  return (
    <section aria-labelledby="team" className="py-24 lg:py-36">
      <div className="container-x">
        <SectionHeader
          as={headingLevel}
          index={index}
          eyebrow="Team"
          title={
            <span id="team">
              Spezialisten für Performance, Daten und die <span className="em">neue Generation der Suche.</span>
            </span>
          }
        />

        <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-12">
          <figure className="relative self-start overflow-hidden rounded-[24px] bg-paper-2 lg:col-span-7" data-reveal>
            <div className="relative aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="/images/team/office.jpg"
                alt="Jan Hugo und Fabian Schnabel, Geschäftsführer von Die GEO Agentur, bei der gemeinsamen Analyse am Laptop"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-[50%_85%] lg:object-center grayscale-[35%] transition-[filter] duration-700 hover:grayscale-0"
              />
            </div>
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3.5 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-ink backdrop-blur">
              Analyse statt Annahmen
            </figcaption>
          </figure>

          <div className="flex flex-col lg:col-span-5">
            <div data-reveal>
              <p className="text-[1.15rem] leading-relaxed text-ink-2">
                Hinter der GEO Agentur stehen Fabian Schnabel und Jan Hugo – Gründer und Geschäftsführer der Performance-Marketing-Agentur Daily Rocket. Seit {site.foundingDate}{" "}
                betreuen sie mit Daily Rocket von Passau aus Unternehmen in ganz Deutschland, heute über 100 Kunden mit mehr als 20 Mio. € Ad Spend pro Jahr.
              </p>
              <p className="mt-5 text-[1rem] leading-relaxed text-muted">
                Für GEO führen wir zusammen, was wir dort täglich tun: Suchverhalten verstehen, sauber messen und Entscheidungen auf Daten stützen.
                Sie sprechen immer direkt mit den Menschen, die Ihr Projekt verantworten.
              </p>
              <ul className="mt-7 flex flex-wrap gap-1.5">
                {disciplines.map((d) => (
                  <li key={d} className="rounded-full border border-line px-3 py-1 text-[0.78rem] text-ink-2">
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-4 lg:mt-auto lg:pt-10">
              {team.map((p, i) => (
                <li key={p.id} id={p.id} data-reveal style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
                  <a href={`mailto:${p.email}`} className="group block" aria-label={`E-Mail an ${p.name}: ${p.email}`}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-paper-2">
                      <Image
                        src={p.image}
                        alt={`Porträt von ${p.name}, Geschäftsführer (${p.role}) bei Die GEO Agentur`}
                        fill
                        sizes="(min-width: 1024px) 20vw, 50vw"
                        className="object-cover object-top grayscale transition-[filter,transform] duration-700 ease-out-soft group-hover:scale-[1.02] group-hover:grayscale-0"
                      />
                      <span className="absolute inset-x-2 bottom-2 flex items-center justify-center gap-1.5 rounded-full bg-paper/90 px-3 py-2 text-[0.78rem] font-medium text-ink backdrop-blur transition-[opacity,transform] duration-500 ease-out-soft lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                        <MailIcon className="size-3.5" /> E-Mail an {p.firstName}
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
            <TextLink href="/ueber-uns">Mehr über uns und unsere Arbeitsweise</TextLink>
          </div>
        )}
      </div>
    </section>
  );
}
