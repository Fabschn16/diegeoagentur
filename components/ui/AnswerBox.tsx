/** Die Kurzantwort – ein eigenständig zitierfähiger Absatz. */
import { ui, type Locale } from "@/lib/i18n";

export function AnswerBox({ label, children, locale = "de" }: { label?: string; children: React.ReactNode; locale?: Locale }) {
  label ??= ui[locale].shortAnswer;
  return (
    <div className="relative rounded-[20px] border border-line bg-card p-6 sm:p-8" data-reveal>
      <p className="eyebrow mb-4 flex items-center gap-2 text-muted">
        <span className="rounded-[3px] bg-signal px-1.5 font-mono text-[0.6rem] leading-[1.5] text-white">1</span>
        {label}
      </p>
      <p className="text-[1.12rem] leading-[1.6] text-ink sm:text-[1.2rem]">{children}</p>
    </div>
  );
}
