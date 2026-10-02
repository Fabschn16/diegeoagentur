import { Breadcrumbs } from "./Breadcrumbs";

export function LegalPage({ title, path, children }: { title: string; path: string; children: React.ReactNode }) {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-x">
        <Breadcrumbs items={[{ name: title, path }]} />
        <h1 className="mt-12 text-h1 font-medium">{title}</h1>
        <div className="prose-geo mt-10 max-w-3xl">{children}</div>
      </div>
    </section>
  );
}
