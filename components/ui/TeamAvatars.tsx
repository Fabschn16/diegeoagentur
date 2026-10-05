import Image from "next/image";
import { team } from "@/lib/site";
import { ui, type Locale } from "@/lib/i18n";

/** Überlappende Porträts von Fabian und Jan – jedes Bild öffnet eine E-Mail. */
export function TeamAvatars({ size = 44, tone = "light", locale = "de" }: { size?: number; tone?: "light" | "dark"; locale?: Locale }) {
  const mail = ui[locale].emailTo;
  const ring = tone === "dark" ? "ring-ink" : "ring-paper";
  const ordered = ["fabian", "jan"].map((id) => team.find((t) => t.id === id)!);
  return (
    <span className="flex -space-x-2.5">
      {ordered.map((p) => (
        <a
          key={p.id}
          href={`mailto:${p.email}`}
          title={`${mail} ${p.name}`}
          aria-label={`${mail} ${p.name}: ${p.email}`}
          className={`relative block overflow-hidden rounded-full bg-paper-2 ring-2 ${ring} transition-transform duration-300 ease-out-soft hover:z-10 hover:-translate-y-0.5`}
          style={{ width: size, height: size }}
        >
          <Image src={p.image} alt={p.name} fill sizes={`${size * 2}px`} className="object-cover" style={{ transform: "scale(2)", transformOrigin: p.face, objectPosition: p.face }} />
        </a>
      ))}
    </span>
  );
}
