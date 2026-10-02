import { Breadcrumbs } from "./Breadcrumbs";
import { Button } from "./Button";
import { bookingHref, cta } from "@/lib/site";

export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  aside,
  primary = cta.primary,
  showCtas = true,
}: {
  crumbs: { name: string; path: string }[];
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  aside?: React.ReactNode;
  primary?: { label: string; href: string };
  showCtas?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(16,17,15,0.04)_1px,transparent_1px)] [background-size:calc(100%/12)_100%] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div className="container-x relative pb-16 pt-8 sm:pt-12 lg:pb-24">
        <Breadcrumbs items={crumbs} />
        <div className={`mt-12 grid gap-12 lg:mt-20 ${aside ? "lg:grid-cols-12" : ""}`}>
          <div className={aside ? "lg:col-span-7" : "max-w-4xl"}>
            <p className="eyebrow mb-6 flex items-center gap-3 text-muted" data-reveal>
              <span className="rounded-[3px] bg-signal px-1.5 leading-[1.5] text-white">1</span>
              {eyebrow}
            </p>
            <h1 className="text-h1 font-medium text-balance" data-reveal style={{ ["--reveal-delay" as string]: "60ms" }}>
              {title}
            </h1>
            <div className="mt-7 max-w-2xl text-lead text-pretty text-ink-2" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
              {lead}
            </div>
            {showCtas && (
              <div className="mt-10 flex flex-col gap-3 sm:flex-row" data-reveal style={{ ["--reveal-delay" as string]: "180ms" }}>
                <Button href={primary.href} size="lg" arrow>
                  {primary.label}
                </Button>
                <Button href={bookingHref} size="lg" variant="secondary">
                  {cta.secondary.label}
                </Button>
              </div>
            )}
          </div>
          {aside && (
            <div className="lg:col-span-5 lg:pt-2" data-reveal style={{ ["--reveal-delay" as string]: "160ms" }}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
