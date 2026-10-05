"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { analytics } from "@/lib/site";

/**
 * Eigenes Consent-Banner (wie auf dailyrocket.de) mit Google Consent Mode v2.
 * Der Google Tag Manager wird erst nach einer Einwilligung geladen; GA4 & Co. laufen über den Container.
 * Wieder öffnen: window.dispatchEvent(new Event(OPEN_EVENT)), z. B. über den Footer-Link.
 */
export const OPEN_EVENT = "open-cookie-settings";
const STORAGE_KEY = "dga-consent-v1";

type Consent = { statistics: boolean; marketing: boolean };

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

function applyConsent(c: Consent) {
  const v = (on: boolean) => (on ? "granted" : "denied");
  window.gtag?.("consent", "update", {
    analytics_storage: v(c.statistics),
    ad_storage: v(c.marketing),
    ad_user_data: v(c.marketing),
    ad_personalization: v(c.marketing),
  });
  if ((c.statistics || c.marketing) && analytics.gtmId && !document.getElementById("gtm-script")) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    const s = document.createElement("script");
    s.id = "gtm-script";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtm.js?id=${analytics.gtmId}`;
    document.head.appendChild(s);
  }
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [choice, setChoice] = useState<Consent>({ statistics: false, marketing: false });

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setChoice(stored);
      applyConsent(stored);
    } else {
      setOpen(true);
    }
    const reopen = () => {
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const save = (c: Consent) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
    } catch {}
    setChoice(c);
    applyConsent(c);
    setOpen(false);
    setDetails(false);
    // Ein Widerruf wirkt auf bereits geladene Tags erst nach einem Neuladen vollständig.
    if (document.getElementById("gtm-script") && !c.statistics && !c.marketing) window.location.reload();
  };

  if (!open) return null;

  const btn = "inline-flex h-11 items-center justify-center rounded-full px-5 text-[0.9rem] font-medium transition-colors";

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className="fixed inset-x-4 bottom-4 z-[90] max-w-[36rem] rounded-[20px] border border-line bg-card p-6 shadow-[0_20px_60px_-20px_rgba(16,17,15,0.35)] sm:left-6 sm:right-auto sm:bottom-6"
    >
      <p id="cookie-title" className="text-[1.1rem] font-medium tracking-[-0.01em] text-ink">
        Ihre Datenschutzeinstellungen
      </p>
      <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-2">
        Wir nutzen Cookies und ähnliche Technologien für Analyse und Marketing. Mit „Alle akzeptieren“ stimmen Sie der Verwendung zu. Ihre
        Auswahl können Sie jederzeit über „Cookie-Einstellungen“ im Footer ändern.
      </p>

      {details && (
        <ul className="mt-5 space-y-3 border-t border-line pt-5 text-[0.88rem]">
          <Toggle label="Notwendig" desc="Speichert Ihre Auswahl. Immer aktiv." checked disabled />
          <Toggle
            label="Statistik"
            desc="Google Analytics 4 über den Google Tag Manager, um die Nutzung der Website zu verstehen."
            checked={choice.statistics}
            onChange={(v) => setChoice({ ...choice, statistics: v })}
          />
          <Toggle
            label="Marketing"
            desc="Messung und Optimierung von Werbekampagnen, z. B. Google Ads."
            checked={choice.marketing}
            onChange={(v) => setChoice({ ...choice, marketing: v })}
          />
        </ul>
      )}

      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <button type="button" onClick={() => save({ statistics: false, marketing: false })} className={`${btn} border border-line-2 text-ink hover:border-ink`}>
          Alle ablehnen
        </button>
        {details ? (
          <button type="button" onClick={() => save(choice)} className={`${btn} border border-line-2 text-ink hover:border-ink`}>
            Auswahl speichern
          </button>
        ) : (
          <button type="button" onClick={() => setDetails(true)} className={`${btn} border border-line-2 text-ink hover:border-ink`}>
            Einstellungen anpassen
          </button>
        )}
        <button type="button" onClick={() => save({ statistics: true, marketing: true })} className={`${btn} bg-ink text-paper hover:bg-ink-2`}>
          Alle akzeptieren
        </button>
      </div>

      <p className="mt-4 flex gap-4 text-[0.78rem] text-muted">
        <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink">
          Datenschutzerklärung
        </Link>
        <Link href="/impressum" className="underline underline-offset-2 hover:text-ink">
          Impressum
        </Link>
      </p>
    </div>
  );
}

function Toggle({
  label,
  desc,
  checked,
  disabled = false,
  onChange,
}: {
  label: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <li>
      <label className={`flex items-start gap-3 ${disabled ? "opacity-70" : "cursor-pointer"}`}>
        <input
          type="checkbox"
          className="mt-0.5 size-4 accent-ink"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span>
          <span className="font-medium text-ink">{label}</span>
          <span className="block text-muted">{desc}</span>
        </span>
      </label>
    </li>
  );
}

/** Footer-Link, der das Banner wieder öffnet. */
export function CookieSettingsLink({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))} className={className}>
      Cookie-Einstellungen
    </button>
  );
}
