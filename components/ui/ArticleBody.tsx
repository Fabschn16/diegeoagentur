import type { Block } from "@/content/articles";
import { RichText } from "./RichText";

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-geo">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} id={b.id ?? slugify(b.text)} className="scroll-mt-28">
                {b.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "p":
            return (
              <p key={i}>
                <RichText text={b.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it) => (
                  <li key={it}>
                    <RichText text={it} />
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((it) => (
                  <li key={it}>
                    <RichText text={it} />
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i}>
                <RichText text={b.text} />
              </blockquote>
            );
          case "table":
            return (
              <div key={i} className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
                <table className="min-w-[480px]">
                  <thead>
                    <tr>
                      {b.head.map((h, n) => (
                        <th key={n} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, n) => (
                      <tr key={n}>
                        {r.map((c, m) =>
                          m === 0 ? (
                            <th key={m} scope="row" className="!border-line !font-normal !text-muted">
                              {c}
                            </th>
                          ) : (
                            <td key={m}>
                              <RichText text={c} />
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
