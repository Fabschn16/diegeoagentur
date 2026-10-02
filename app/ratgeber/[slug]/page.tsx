import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnswerBox } from "@/components/ui/AnswerBox";
import { ArticleBody, slugify } from "@/components/ui/ArticleBody";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArrowRight } from "@/components/ui/Icons";
import { articles, getArticle } from "@/content/articles";
import { abs, articleSchema, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { team } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const meta = pageMeta({ title: a.metaTitle ?? a.title, description: a.description, path: `/ratgeber/${a.slug}`, type: "article" });
  return {
    ...meta,
    openGraph: { ...meta.openGraph, type: "article", publishedTime: a.published, modifiedTime: a.updated },
  };
}

const dateFmt = new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const path = `/ratgeber/${a.slug}`;
  const author = team.find((t) => t.id === a.author)!;
  const toc = a.body.filter((b) => b.type === "h2") as { type: "h2"; text: string; id?: string }[];
  const related = [
    ...articles.filter((x) => x.slug !== a.slug && x.category === a.category),
    ...articles.filter((x) => x.slug !== a.slug && x.category !== a.category),
  ].slice(0, 3);
  const crumbs = [
    { name: "GEO Wissen", path: "/ratgeber" },
    { name: a.title, path },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, title: a.title, description: a.description, mainEntity: `${abs(path)}#article`, about: a.topics }),
          articleSchema({
            path,
            title: a.title,
            description: a.description,
            datePublished: a.published,
            dateModified: a.updated,
            authorId: a.author,
            about: a.topics,
            section: a.category,
          }),
          breadcrumbSchema(crumbs),
        )}
      />
      <article>
        <header className="border-b border-line">
          <div className="container-x pb-14 pt-8 sm:pt-12 lg:pb-20">
            <Breadcrumbs items={crumbs} />
            <div className="mt-12 max-w-4xl lg:mt-16">
              <p className="eyebrow mb-6 text-muted" data-reveal>
                {a.category}
              </p>
              <h1 className="text-h1 font-medium text-balance" data-reveal style={{ ["--reveal-delay" as string]: "60ms" }}>
                {a.title}
              </h1>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-[0.88rem] text-muted" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
                <Link href={`/ueber-uns#${author.id}`} className="flex items-center gap-3 text-ink">
                  <span className="relative size-9 overflow-hidden rounded-full bg-paper-2">
                    <Image src={author.image} alt="" fill sizes="36px" className="object-cover grayscale" style={{ transform: "scale(2)", transformOrigin: author.face, objectPosition: author.face }} />
                  </span>
                  <span>
                    <span className="block font-medium">{author.name}</span>
                    <span className="block text-[0.78rem] text-muted">{author.role}</span>
                  </span>
                </Link>
                <span>
                  Aktualisiert am <time dateTime={a.updated}>{dateFmt.format(new Date(a.updated))}</time>
                </span>
                <span>{a.readingMinutes} Min. Lesezeit</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container-x grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
          <aside className="order-last lg:order-first lg:col-span-3">
            <nav aria-label="Inhalt" className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4 text-muted">Inhalt</p>
              <ol className="space-y-2.5 border-l border-line">
                {toc.map((h) => (
                  <li key={h.text}>
                    <a
                      href={`#${h.id ?? slugify(h.text)}`}
                      className="-ml-px block border-l border-transparent pl-4 text-[0.88rem] leading-snug text-muted transition-colors hover:border-ink hover:text-ink"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <AnswerBox label="Die Kurzantwort">{a.answer}</AnswerBox>
            <div className="mt-6">
              <ArticleBody blocks={a.body} />
            </div>

            {a.related && (
              <nav aria-labelledby="weiterfuehrend" className="mt-14 rounded-[20px] border border-line bg-card p-6 sm:p-8">
                <h2 id="weiterfuehrend" className="eyebrow mb-4 text-muted">
                  Weiterführend
                </h2>
                <ul className="divide-y divide-line">
                  {a.related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="group flex items-center justify-between gap-4 py-3 text-[1rem] font-medium">
                        {r.label}
                        <ArrowRight className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {a.sources && (
              <section aria-labelledby="quellen" className="mt-16 border-t border-line pt-8">
                <h2 id="quellen" className="eyebrow mb-4 text-muted">
                  Quellen
                </h2>
                <ol className="space-y-2 text-[0.9rem]">
                  {a.sources.map((s, i) => (
                    <li key={s.href} className="flex gap-3">
                      <span className="font-mono text-[0.72rem] text-muted">[{i + 1}]</span>
                      <a href={s.href} target="_blank" rel="noopener nofollow" className="underline decoration-line-2 underline-offset-4 hover:decoration-ink">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <div className="mt-16 flex flex-col gap-5 rounded-[20px] border border-line bg-card p-6 sm:flex-row sm:items-center sm:p-8">
              <span className="relative size-16 shrink-0 overflow-hidden rounded-full bg-paper-2">
                <Image src={author.image} alt={author.name} fill sizes="64px" className="object-cover grayscale" style={{ transform: "scale(2)", transformOrigin: author.face, objectPosition: author.face }} />
              </span>
              <div>
                <p className="eyebrow mb-1 text-muted">Autor</p>
                <p className="font-medium">
                  <Link href={`/ueber-uns#${author.id}`} className="hover:underline hover:underline-offset-4">
                    {author.name}
                  </Link>{" "}
                  · <span className="text-muted">Geschäftsführer, {author.role}</span>
                </p>
                <p className="mt-1 text-[0.92rem] leading-relaxed text-muted">{author.focus}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section aria-labelledby="weiterlesen" className="border-t border-line py-16 lg:py-20">
        <div className="container-x">
          <h2 id="weiterlesen" className="eyebrow mb-8 text-muted">
            Weitere Beiträge aus GEO Wissen
          </h2>
          <ul className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/ratgeber/${r.slug}`} className="group flex h-full flex-col rounded-[20px] border border-line p-6 transition-colors hover:border-ink">
                  <span className="font-mono text-[0.66rem] uppercase tracking-[0.1em] text-muted">{r.category}</span>
                  <span className="mt-6 text-[1.1rem] font-medium leading-snug">{r.title}</span>
                  <span className="mt-auto pt-8 text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink"><ArrowRight className="size-4" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
