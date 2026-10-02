/**
 * „Auf einen Blick“ – kompakte, eindeutige Fakten.
 * Diese Form lässt sich von Menschen scannen und von Sprachmodellen sauber zitieren.
 */
export function AtAGlance({ title = "Auf einen Blick", rows }: { title?: string; rows: { k: string; v: React.ReactNode }[] }) {
  return (
    <aside className="rounded-[20px] border border-line bg-card p-6 sm:p-8" data-reveal>
      <p className="eyebrow mb-5 flex items-center gap-2 text-muted">
        <span className="rounded-[3px] bg-signal px-1.5 font-mono text-[0.6rem] leading-[1.5] text-white">i</span>
        {title}
      </p>
      <dl className="divide-y divide-line">
        {rows.map((r) => (
          <div key={r.k} className="grid gap-1 py-3.5 sm:grid-cols-[180px_1fr] sm:gap-6">
            <dt className="text-[0.85rem] text-muted">{r.k}</dt>
            <dd className="text-[0.95rem] leading-relaxed text-ink">{r.v}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
