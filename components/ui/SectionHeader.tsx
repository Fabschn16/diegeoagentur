export function SectionHeader({
  index,
  eyebrow,
  title,
  lead,
  tone = "ink",
  align = "left",
  className = "",
  as: H = "h2",
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "ink" | "paper";
  align?: "left" | "split";
  className?: string;
  as?: "h1" | "h2";
}) {
  const muted = tone === "paper" ? "text-fog" : "text-muted";
  return (
    <div
      className={`${align === "split" ? "grid gap-8 lg:grid-cols-12 lg:items-end" : "max-w-3xl"} ${className}`}
      data-reveal
    >
      <div className={align === "split" ? "lg:col-span-7" : ""}>
        <p className={`eyebrow mb-6 flex items-center gap-3 ${muted}`}>
          {index && <span className={tone === "paper" ? "text-paper" : "text-ink"}>{index}</span>}
          {index && <span className={`h-px w-8 ${tone === "paper" ? "bg-night-line" : "bg-line-2"}`} />}
          <span>{eyebrow}</span>
        </p>
        <H className="text-h2 font-medium text-balance">{title}</H>
      </div>
      {lead && (
        <div className={align === "split" ? "lg:col-span-5 lg:pb-2" : "mt-6"}>
          <p className={`text-lead text-pretty ${muted}`}>{lead}</p>
        </div>
      )}
    </div>
  );
}
