import { Button } from "@/components/ui/Button";
import { cta } from "@/lib/site";

export const metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-28 lg:py-40">
      <div className="container-x max-w-3xl">
        <p className="eyebrow mb-6 text-muted">Fehler 404</p>
        <h1 className="text-h1 font-medium">
          Diese Seite gibt es nicht. <span className="em">Die Antwort schon.</span>
        </h1>
        <p className="mt-6 text-lead text-muted">Vielleicht finden Sie hier, was Sie suchen:</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/" arrow>
            Zur Startseite
          </Button>
          <Button href={cta.primary.href} variant="secondary">
            {cta.primary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
