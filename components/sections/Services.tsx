import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";
import { coreServices, platformServices } from "@/lib/services";

export function Services({ index = "03", showHeader = true }: { index?: string; showHeader?: boolean }) {
  return (
    <section aria-labelledby="leistungen" className="border-t border-line bg-paper-2/50 py-24 lg:py-36">
      <div className="container-x">
        {showHeader && (
          <SectionHeader
            index={index}
            eyebrow="Leistungen"
            title={
              <span id="leistungen">
                Alles, was eine Marke für <span className="em">KI-Sichtbarkeit</span> braucht.
              </span>
            }
            align="split"
            lead="Sechs Disziplinen, ein Ziel: dass KI-Systeme Ihr Unternehmen korrekt verstehen und bei den richtigen Fragen berücksichtigen."
          />
        )}

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[24px] border border-line bg-line md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {coreServices.map((s, i) => (
            <li key={s.id} className="bg-paper" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}>
              <Link href={s.href} className="group flex h-full flex-col p-7 transition-colors duration-500 hover:bg-card sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.7rem] text-muted">{s.index}</span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-line text-muted transition-all duration-500 ease-out-soft group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
                <h3 className="mt-10 text-h3 font-medium">{s.title}</h3>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-8">
                  {s.points.slice(0, 4).map((p) => (
                    <li key={p} className="rounded-full border border-line px-2.5 py-1 text-[0.74rem] text-ink-2">
                      {p.replace(/\?$/, "")}
                    </li>
                  ))}
                  {s.points.length > 4 && (
                    <li className="rounded-full px-1 py-1 font-mono text-[0.72rem] text-muted">+{s.points.length - 4}</li>
                  )}
                </ul>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="rounded-[24px] bg-ink p-7 text-paper sm:p-9 lg:col-span-4" data-reveal>
            <p className="eyebrow text-fog">Nach Plattform</p>
            <p className="mt-6 text-[1.5rem] font-medium leading-tight tracking-[-0.02em]">
              Jedes System bildet Antworten etwas anders. <span className="em text-fog">Wir kennen die Unterschiede.</span>
            </p>
            <Link href="/leistungen" className="mt-8 inline-flex items-center gap-2 text-[0.9rem] font-medium">
              Alle Leistungen <ArrowRight className="size-3.5" />
            </Link>
            <Link href="/geo-agentur" className="mt-3 flex items-center gap-2 text-[0.9rem] text-fog hover:text-paper">
              Was macht eine GEO Agentur? <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:col-span-8">
            {platformServices.map((p, i) => (
              <li key={p.id} className="bg-paper" data-reveal style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                <Link href={p.href} className="group flex h-full items-start justify-between gap-6 p-6 transition-colors hover:bg-card sm:p-7">
                  <span>
                    <span className="block text-[1.1rem] font-medium tracking-[-0.01em]">{p.title}</span>
                    <span className="mt-1.5 block text-[0.88rem] leading-relaxed text-muted">{p.short}</span>
                  </span>
                  <ArrowRight className="mt-1.5 size-4 shrink-0 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
