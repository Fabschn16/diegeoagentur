import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Brotkrumen" className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-ink">
            Start
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-line-2">/</span>
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-ink">
                {it.name}
              </span>
            ) : (
              <Link href={it.path} className="hover:text-ink">
                {it.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
