import { SectionHeader } from "@/components/ui/SectionHeader";
import { TextLink } from "@/components/ui/Button";

export const geoSignals = [
  { t: "Website", d: "Klare Seitenstruktur, eindeutige Aussagen, schnelle und saubere Auslieferung." },
  { t: "Content", d: "Inhalte, die echte Fragen präzise beantworten – belegbar und zitierfähig." },
  { t: "Markenentität", d: "Eine eindeutige, konsistente Beschreibung: wer Sie sind und wofür Sie stehen." },
  { t: "Strukturierte Daten", d: "Schema.org-Auszeichnungen, die Maschinen Fakten ohne Interpretation liefern." },
  { t: "Externe Erwähnungen", d: "Was Fachportale, Verzeichnisse, Presse und Kunden über Sie schreiben." },
  { t: "Autorität", d: "Nachweisbare Expertise in klar abgegrenzten Themen statt Breite ohne Tiefe." },
  { t: "Technische Lesbarkeit", d: "Zugänglich für KI-Crawler: serverseitiges HTML, Crawlability, llms.txt." },
  { t: "Semantische Zusammenhänge", d: "Themen, Begriffe und Leistungen, die sinnvoll miteinander verknüpft sind." },
];

const compare = [
  { k: "Ziel", seo: "Gute Platzierung in der Ergebnisliste", geo: "Nennung und Zitierung in der KI-Antwort" },
  { k: "Ergebnis", seo: "Zehn Links zur Auswahl", geo: "Eine formulierte Antwort mit wenigen Quellen" },
  { k: "Messung", seo: "Rankings, Klicks, organischer Traffic", geo: "Nennungen, Zitierungen, Kontext, Share of Voice" },
  { k: "Gemeinsame Basis", seo: "Technische Qualität, gute Inhalte, Autorität", geo: "Technische Qualität, gute Inhalte, Autorität" },
];

export function WhatIsGeo() {
  return (
    <section aria-labelledby="was-ist-geo" className="py-24 lg:py-36">
      <div className="container-x">
        <SectionHeader
          index="02"
          eyebrow="Was ist GEO?"
          title={
            <span id="was-ist-geo">
              Generative Engine Optimization, <span className="em">klar erklärt.</span>
            </span>
          }
          align="split"
          lead="GEO ist kein Trick und kein neues Buzzword für SEO. Es ist die logische Antwort darauf, dass Menschen ihre Fragen zunehmend an KI-Systeme stellen."
        />

        <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <p className="text-[1.45rem] leading-[1.4] tracking-[-0.015em] sm:text-[1.75rem]">
              <strong className="font-medium">Generative Engine Optimization (GEO)</strong>{" "}
              <span className="text-ink-2">
                ist die Optimierung eines Unternehmens dafür, dass KI-Systeme es verstehen und bei passenden Nutzerfragen als relevante
                Quelle berücksichtigen.
              </span>
            </p>
            <p className="mt-6 max-w-md text-[1rem] leading-relaxed text-muted">
              Dafür betrachten wir nicht nur Ihre Website, sondern alle Signale, aus denen sich ein Sprachmodell ein Bild von Ihrer Marke macht.
            </p>
            <TextLink href="/generative-engine-optimization" className="mt-8">
              Ausführlich: Was ist GEO?
            </TextLink>
          </div>

          <ol className="grid border-l border-t border-line sm:grid-cols-2 lg:col-span-7" aria-label="Acht Signale, die GEO optimiert">
            {geoSignals.map((s, i) => (
              <li
                key={s.t}
                className="group border-b border-r border-line p-6 transition-colors duration-500 hover:bg-card"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 4) * 60}ms` }}
              >
                <span className="font-mono text-[0.68rem] text-muted transition-colors group-hover:text-signal">
                  S{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[1.08rem] font-medium tracking-[-0.01em]">{s.t}</h3>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* SEO + GEO */}
        <div className="mt-24 rounded-[24px] bg-card p-6 ring-1 ring-line sm:p-10 lg:mt-32 lg:p-14" data-reveal>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6 text-muted">SEO & GEO</p>
              <p className="text-[1.6rem] font-medium leading-[1.2] tracking-[-0.025em] sm:text-[2.1rem]">
                SEO sorgt dafür, dass Suchmaschinen Ihre Website finden.{" "}
                <span className="em text-ink-2">GEO sorgt zusätzlich dafür, dass KI-Systeme Ihre Marke verstehen.</span>
              </p>
              <p className="mt-6 text-[0.98rem] leading-relaxed text-muted">
                Wir spielen beides nicht gegeneinander aus. Viele KI-Systeme stützen sich auf Suchindizes – eine starke SEO-Basis ist deshalb
                die beste Voraussetzung für GEO.
              </p>
            </div>
            <div className="-mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0 lg:col-span-7">
              <table className="w-full min-w-[520px] border-collapse text-left text-[0.92rem]">
                <caption className="sr-only">Vergleich von SEO und GEO</caption>
                <thead>
                  <tr className="border-b border-ink">
                    <th scope="col" className="w-[26%] py-3 pr-4 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted" />
                    <th scope="col" className="py-3 pr-4 font-medium">Klassisches SEO</th>
                    <th scope="col" className="py-3 font-medium">
                      GEO <span className="ml-1 rounded-[3px] bg-signal px-1 font-mono text-[0.6rem] leading-[1.5] text-white">+</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compare.map((r) => (
                    <tr key={r.k} className="border-b border-line align-top">
                      <th scope="row" className="py-4 pr-4 text-[0.85rem] font-normal text-muted">
                        {r.k}
                      </th>
                      <td className="py-4 pr-4 text-ink-2">{r.seo}</td>
                      <td className="py-4 text-ink">{r.geo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
