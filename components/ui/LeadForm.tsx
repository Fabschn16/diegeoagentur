"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { ArrowRight, Check } from "./Icons";
import type { Locale } from "@/lib/i18n";

const copy = {
  de: {
    submit: "KI-Sichtbarkeit prüfen lassen",
    thanks: "Vielen Dank. Ihre Anfrage ist bei uns.",
    thanksAudit:
      "Wir prüfen Ihre Marke in den relevanten KI-Systemen und melden uns in der Regel innerhalb eines Werktags persönlich bei Ihnen – mit ersten Beobachtungen und einem Terminvorschlag.",
    thanksOther: "Wir melden uns in der Regel innerhalb eines Werktags persönlich bei Ihnen.",
    firstName: "Vorname",
    lastName: "Nachname",
    company: "Unternehmen",
    website: "Website",
    email: "E-Mail",
    phone: "Telefon",
    message: "Nachricht",
    auditMessage: "Wettbewerber oder Themen, die wir mitprüfen sollen",
    optional: "(optional)",
    privacy: "Wir verwenden Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage. Details in der",
    privacyLink: "Datenschutzerklärung",
    sending: "Wird gesendet …",
    failed: "Senden fehlgeschlagen",
    retry: "Bitte versuchen Sie es erneut oder schreiben Sie uns direkt eine E-Mail.",
  },
  en: {
    submit: "Check my AI visibility",
    thanks: "Thank you. We have received your request.",
    thanksAudit:
      "We will check your brand in the relevant AI systems and usually get back to you personally within one working day, with first observations and a suggested call time.",
    thanksOther: "We usually get back to you personally within one working day.",
    firstName: "First name",
    lastName: "Last name",
    company: "Company",
    website: "Website",
    email: "Email",
    phone: "Phone",
    message: "Message",
    auditMessage: "Competitors or topics we should check as well",
    optional: "(optional)",
    privacy: "We use your details only to handle your request. See our",
    privacyLink: "privacy policy (German)",
    sending: "Sending …",
    failed: "Sending failed",
    retry: "Please try again or email us directly.",
  },
};

type Status = "idle" | "sending" | "success" | "error";

export function LeadForm({
  variant = "audit",
  submitLabel,
  tone = "light",
  locale = "de",
}: {
  variant?: "audit" | "kontakt" | "beratung";
  submitLabel?: string;
  tone?: "light" | "card";
  locale?: Locale;
}) {
  const t = copy[locale];
  submitLabel ??= t.submit;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const uid = useId();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    setError("");
    // Netlify Forms: Anfragen landen im Netlify-Dashboard und werden per E-Mail weitergeleitet
    const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error(t.failed);
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : t.failed);
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex min-h-[420px] flex-col items-start justify-center rounded-[20px] border border-line bg-card p-8 sm:p-10">
        <span className="flex size-11 items-center justify-center rounded-full bg-ink text-paper">
          <Check className="size-5" />
        </span>
        <h3 className="mt-6 text-h3 font-medium">{t.thanks}</h3>
        <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-muted">
          {variant === "audit" ? t.thanksAudit : t.thanksOther}
        </p>
      </div>
    );
  }

  const field =
    "peer block w-full rounded-xl border border-line bg-card px-4 pt-6 pb-2.5 text-[0.98rem] text-ink outline-none transition-[border-color,box-shadow] placeholder:text-transparent hover:border-line-2 focus:border-ink focus:shadow-[0_0_0_4px_rgba(16,17,15,0.06)]";
  const label =
    "pointer-events-none absolute left-4 top-4 origin-left text-[0.95rem] text-muted transition-all duration-200 peer-focus:top-2 peer-focus:text-[0.7rem] peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[0.7rem]";

  const input = ({
    name,
    labelText,
    type = "text",
    required = false,
    autoComplete,
    className = "",
  }: {
    name: string;
    labelText: string;
    type?: string;
    required?: boolean;
    autoComplete?: string;
    className?: string;
  }) => (
    <div className={`relative ${className}`}>
      <input
        id={`${uid}-${name}`}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={labelText}
        className={field}
        {...(type === "url" ? { inputMode: "url" as const } : {})}
      />
      <label htmlFor={`${uid}-${name}`} className={label}>
        {labelText}
        {!required && <span className="ml-1 text-muted/70">{t.optional}</span>}
      </label>
    </div>
  );

  return (
    <form
      name="anfrage"
      method="POST"
      data-netlify="true"
      netlify-honeypot="firma2"
      noValidate
      onSubmit={onSubmit}
      className={`rounded-[20px] ${tone === "card" ? "border border-line bg-paper p-5 sm:p-8" : ""}`}
      aria-describedby={`${uid}-privacy`}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {input({name: "vorname", labelText: t.firstName, required: true, autoComplete: "given-name"})}
        {input({name: "nachname", labelText: t.lastName, required: true, autoComplete: "family-name"})}
        {input({name: "unternehmen", labelText: t.company, required: true, autoComplete: "organization"})}
        {input({name: "website", labelText: t.website, type: "text", required: true, autoComplete: "url"})}
        {input({name: "email", labelText: t.email, type: "email", required: true, autoComplete: "email"})}
        {input({name: "telefon", labelText: t.phone, type: "tel", autoComplete: "tel"})}
        <div className="relative sm:col-span-2">
          <textarea
            id={`${uid}-nachricht`}
            name="nachricht"
            rows={3}
            placeholder={t.message}
            className={`${field} resize-none`}
          />
          <label htmlFor={`${uid}-nachricht`} className={label}>
            {variant === "audit" ? t.auditMessage : t.message}
            <span className="ml-1 text-muted/70">{t.optional}</span>
          </label>
        </div>
        {/* Honeypot */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
          <label>
            Firma2
            <input type="text" name="firma2" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <input type="hidden" name="form-name" value="anfrage" />
        <input type="hidden" name="anliegen" value={variant} />
        <input type="hidden" name="sprache" value={locale} />
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id={`${uid}-privacy`} className="text-[0.78rem] leading-relaxed text-muted sm:max-w-[48%]">
          {t.privacy}{" "}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink">
            {t.privacyLink}
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-ink px-7 text-[0.95rem] font-medium text-paper transition-[background-color,transform] duration-300 hover:bg-ink-2 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? t.sending : submitLabel}
          {status !== "sending" && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />}
        </button>
      </div>
      {status === "error" && (
        <p role="alert" className="mt-4 rounded-xl border border-signal/40 bg-signal-soft/40 px-4 py-3 text-[0.9rem] text-ink">
          {error}. {t.retry}
        </p>
      )}
    </form>
  );
}
