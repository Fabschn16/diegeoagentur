import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { Team } from "@/components/sections/Team";
import { WhyUs } from "@/components/sections/WhyUs";
import { CtaBand } from "@/components/sections/CtaBand";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { ArrowUpRight } from "@/components/ui/Icons";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { l10n } from "@/lib/l10n";
import { pageMeta } from "@/lib/seo";

const path = "/en/about";
const title = "About Die GEO Agentur: Team, Background & Daily Rocket";
const description =
  "Die GEO Agentur combines experience in performance marketing, tracking, SEO and data analysis with Generative Engine Optimization. Meet Fabian Schnabel and Jan Hugo.";

export const metadata = pageMeta({ title, description, path });

const sisterDescription = "Performance marketing agency for Google Ads, tracking and AI";

export default function AboutPageEn() {
  const { provenStats } = l10n("en");
  const crumbs = [{ name: "About us", path }];
  return (
    <>
      <JsonLd data={graph(webPageSchema({ path, title, description, type: "AboutPage" }), breadcrumbSchema(crumbs))} />
      <PageHero
        locale="en"
        crumbs={crumbs}
        eyebrow="About us"
        title={
          <>
            Die GEO Agentur: We come from search. <span className="em">And we know where it is heading.</span>
          </>
        }
        lead="Die GEO Agentur grew out of our day-to-day work with search data. When you have spent years analysing campaigns, tracking and search behaviour, you notice early when something fundamental is shifting."
        showCtas={false}
      />

      <section className="pt-10 lg:pt-14">
        <div className="container-x">
          <figure className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-paper-2 sm:aspect-[21/9]" data-reveal>
            <Image
              src="/images/team/team-wide.jpg"
              alt="Fabian Schnabel and Jan Hugo, the team behind Die GEO Agentur"
              fill
              priority
              sizes="(min-width: 1320px) 1224px, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section aria-labelledby="warum" className="py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <p className="eyebrow mb-6 text-muted">Why we exist</p>
            <h2 id="warum" className="text-h2 font-medium text-balance">
              Visibility was never just <span className="em">a position.</span>
            </h2>
          </div>
          <div className="space-y-6 text-[1.08rem] leading-[1.75] text-ink-2 lg:col-span-6 lg:col-start-7" data-reveal>
            <p>
              Through our performance marketing agency{" "}
              <a href={site.sister.url} target="_blank" rel="noopener" className="underline decoration-line-2 underline-offset-4 hover:decoration-ink">
                Daily Rocket
              </a>
              , we have worked every day since {site.foundingDate} with search queries, conversion data and the algorithms that decide who gets seen.
            </p>
            <p>
              With ChatGPT, Gemini, Perplexity and AI Overviews, the question has shifted. It is no longer just “What position are we in?”
              but “Are we even mentioned in the answer?”. Die GEO Agentur is our response: an independent, specialised brand dedicated to
              exactly this question.
            </p>
            <p>
              We bring together what most agencies keep separate: performance marketing, tracking, SEO, data analysis and AI. Because AI
              visibility does not come from a single trick, but from the interplay of technology, content, brand and measurement.
            </p>
          </div>
        </div>

        <div className="container-x mt-16 lg:mt-20">
          <dl className="grid gap-px overflow-hidden rounded-[24px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-card p-7">
              <dt className="text-[0.88rem] text-muted">Daily Rocket founded</dt>
              <dd className="mt-3 text-[2.4rem] font-medium leading-none tracking-[-0.03em]">{site.foundingDate}</dd>
            </div>
            {provenStats.map((s) => (
              <div key={s.label} className="bg-card p-7">
                <dt className="text-[0.88rem] text-muted">{s.label}</dt>
                <dd className="mt-3 text-[2.4rem] font-medium leading-none tracking-[-0.03em]">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[0.78rem] text-muted">Figures for Daily Rocket GmbH, as of September 2026.</p>
        </div>
      </section>

      <Team index="" showLink={false} locale="en" />

      <WhyUs index="" locale="en" />

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <a
            href={site.sister.url}
            target="_blank"
            rel="noopener"
            className="group flex flex-col gap-6 rounded-[24px] border border-line p-7 transition-colors hover:border-ink sm:flex-row sm:items-center sm:justify-between sm:p-10"
            data-reveal
          >
            <div>
              <p className="eyebrow text-muted">Our sister agency</p>
              <p className="mt-3 text-[1.5rem] font-medium tracking-[-0.02em]">Daily Rocket</p>
              <p className="mt-1 text-[0.98rem] text-muted">{sisterDescription}</p>
            </div>
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>
      </section>

      <RelatedLinks
        locale="en"
        title="More about us"
        links={[
          { label: "Die GEO Agentur in facts", href: "/en/facts", note: "All key data, services and prices on one page" },
          { label: "Our methodology", href: "/en/insights/methodology-prompt-catalogue", note: "How we measure AI visibility" },
          { label: "What does a GEO agency do?", href: "/en/geo-agency", note: "Services, process and costs" },
          { label: "Get in touch", href: "/en/contact", note: "We work in German and English" },
        ]}
      />
      <CtaBand locale="en" />
    </>
  );
}
