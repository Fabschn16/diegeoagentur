"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { analytics } from "@/lib/site";
import { localeOf } from "@/lib/i18n";

const copy = {
  de: {
    title: "Cookie-Einstellungen",
    text: "Mit Ihrer Einwilligung nutzen wir Google Analytics 4, um die Reichweite unserer Website zu messen. Ohne Zustimmung wird nichts an Google übertragen. Ihre Entscheidung können Sie jederzeit über „Cookie-Einstellungen“ im Footer ändern.",
    reject: "Ablehnen",
    accept: "Akzeptieren",
    privacy: "Datenschutzerklärung",
    settings: "Cookie-Einstellungen",
  },
  en: {
    title: "Cookie settings",
    text: "With your consent, we use Google Analytics 4 to measure the reach of our website. Without your consent, nothing is sent to Google. You can change your decision at any time via “Cookie settings” in the footer.",
    reject: "Reject",
    accept: "Accept",
    privacy: "Privacy policy (German)",
    settings: "Cookie settings",
  },
};

const useCopy = () => copy[localeOf(usePathname() || "/")];

/**
 * Eigenes Consent-Banner mit Google Consent Mode v2.
 * gtag.js (Google Analytics 4) wird erst nach „Akzeptieren“ geladen; vorher geht keine Anfrage an Google.
 * Wieder öffnen: window.dispatchEvent(new Event(OPEN_EVENT)), z. B. über den Footer-Link.
 */
export const OPEN_EVENT = "open-cookie-settings";
const STORAGE_KEY = "dga-consent-v2";

type Consent = { analytics: boolean };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

function loadGa4() {
  const id = analytics.ga4Id;
  if (!id || document.getElementById("ga4-script")) return;
  const s = document.createElement("script");
  s.id = "ga4-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(s);
  window.gtag?.("js", new Date());
  // Google Signals und Werbefunktionen aus; IP-Adressen werden bei GA4 ohnehin nicht gespeichert.
  window.gtag?.("config", id, { allow_google_signals: false, allow_ad_personalization_signals: false });
}

function applyConsent(c: Consent) {
  // Werbe-Speicher bleibt immer abgelehnt, nur die Analyse wird freigegeben.
  window.gtag?.("consent", "update", { analytics_storage: c.analytics ? "granted" : "denied" });
  if (c.analytics) loadGa4();
}

/** Entfernt GA-Cookies (_ga, _ga_*) nach einem Widerruf. */
function clearGaCookies() {
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const part of document.cookie.split(";")) {
    const name = part.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_")) {
      for (const d of domains) {
        document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
      }
    }
  }
}

export function CookieBanner() {
  const t = useCopy();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored) applyConsent(stored);
    else setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const save = (c: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    } catch {}
    applyConsent(c);
    setOpen(false);
    if (!c.analytics) {
      clearGaCookies();
      // Ein bereits geladenes gtag.js wird erst durch ein Neuladen vollständig entfernt.
      if (document.getElementById("ga4-script")) window.location.reload();
    }
  };

  if (!open) return null;

  const btn =
    "inline-flex h-11 flex-1 items-center justify-center rounded-full border border-ink px-5 text-[0.9rem] font-medium text-ink transition-colors hover:bg-ink hover:text-paper";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-4 bottom-4 z-[90] max-w-[34rem] rounded-[20px] border border-line bg-card p-6 shadow-[0_20px_60px_-20px_rgba(16,17,15,0.35)] sm:left-6 sm:right-auto sm:bottom-6"
    >
      <p id="cookie-title" className="text-[1.1rem] font-medium tracking-[-0.01em] text-ink">
        {t.title}
      </p>
      <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-2">{t.text}</p>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <button type="button" onClick={() => save({ analytics: false })} className={btn}>
          {t.reject}
        </button>
        <button type="button" onClick={() => save({ analytics: true })} className={btn}>
          {t.accept}
        </button>
      </div>

      <p className="mt-4 text-[0.78rem] text-muted">
        <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink">
          {t.privacy}
        </Link>
      </p>
    </div>
  );
}

/** Footer-Link, der das Banner wieder öffnet. */
export function CookieSettingsLink({ className = "" }: { className?: string }) {
  const t = useCopy();
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))} className={className}>
      {t.settings}
    </button>
  );
}
