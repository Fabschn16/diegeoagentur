import Link from "next/link";
import { Fragment } from "react";

/**
 * Rendert Text mit Inline-Links im Format [Ankertext](/pfad) bzw. [Text](https://…).
 * So bleiben Inhalte als reine Daten pflegbar und erhalten trotzdem beschreibende interne Links.
 */
export function RichText({ text, linkClassName }: { text: string; linkClassName?: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(<Fragment key={i++}>{text.slice(last, m.index)}</Fragment>);
    const [, label, href] = m;
    const cls =
      linkClassName ?? "underline decoration-line-2 underline-offset-4 transition-colors hover:decoration-signal";
    parts.push(
      href.startsWith("http") ? (
        <a key={i++} href={href} target="_blank" rel="noopener" className={cls}>
          {label}
        </a>
      ) : (
        <Link key={i++} href={href} className={cls}>
          {label}
        </Link>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(<Fragment key={i++}>{text.slice(last)}</Fragment>);
  return <>{parts}</>;
}

export const stripLinks = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
