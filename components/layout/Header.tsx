"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ArrowRight } from "@/components/ui/Icons";
import { cta, site } from "@/lib/site";
import { coreServices, platformServices } from "@/lib/services";

const nav = [
  { label: "GEO Wissen", href: "/ratgeber" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setOpen(false), setMenu(false));
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const leistungenActive =
    isActive("/leistungen") ||
    [...platformServices.map((p) => p.href), "/geo-audit", "/geo-beratung", "/geo-agentur", "/ai-visibility"].some((h) => isActive(h));

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(true);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setMenu(false), 120);
  };

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open || menu
          ? "border-b border-line bg-paper/85 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-paper/0"
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between gap-6 lg:h-[76px]">
        <Logo />

        {/* Desktop */}
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
          <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
            <button
              type="button"
              aria-expanded={menu}
              aria-controls="leistungen-menu"
              onClick={() => setMenu((v) => !v)}
              className={`flex h-10 items-center gap-1.5 rounded-full px-4 text-[0.9rem] transition-colors hover:text-ink ${
                leistungenActive ? "text-ink" : "text-ink-2"
              }`}
            >
              Leistungen
              <svg viewBox="0 0 10 6" aria-hidden="true" className={`w-2.5 transition-transform duration-300 ${menu ? "rotate-180" : ""}`}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            <div
              id="leistungen-menu"
              className={`absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-3 transition-[opacity,transform,visibility] duration-300 ease-out-soft ${
                menu ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="grid grid-cols-[1.35fr_1fr] overflow-hidden rounded-2xl border border-line bg-card shadow-[0_30px_80px_-30px_rgba(16,17,15,0.35)]">
                <div className="p-6">
                  <p className="eyebrow mb-4 text-muted">Leistungen</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {coreServices.map((s) => (
                      <li key={s.id}>
                        <Link href={s.href} className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-paper">
                          <span className="block text-[0.9rem] font-medium">{s.title}</span>
                          <span className="mt-0.5 block text-[0.8rem] leading-snug text-muted">{s.short}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l border-line bg-paper/60 p-6">
                  <p className="eyebrow mb-4 text-muted">Nach Plattform</p>
                  <ul className="space-y-0.5">
                    {platformServices.map((p) => (
                      <li key={p.id}>
                        <Link href={p.href} className="flex items-center justify-between rounded-lg px-3 py-2 text-[0.9rem] transition-colors hover:bg-card">
                          {p.title}
                          <ArrowRight className="size-3.5 text-muted" />
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/geo-beratung" className="flex items-center justify-between rounded-lg px-3 py-2 text-[0.9rem] transition-colors hover:bg-card">
                        GEO Beratung
                        <ArrowRight className="size-3.5 text-muted" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/geo-agentur" className="flex items-center justify-between rounded-lg px-3 py-2 text-[0.9rem] transition-colors hover:bg-card">
                        Was macht eine GEO Agentur?
                        <ArrowRight className="size-3.5 text-muted" />
                      </Link>
                    </li>
                  </ul>
                  <Link href="/leistungen" className="mt-5 flex items-center gap-2 px-3 text-[0.85rem] font-medium">
                    Alle Leistungen im Überblick <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`flex h-10 items-center rounded-full px-4 text-[0.9rem] transition-colors hover:text-ink ${
                isActive(n.href) ? "text-ink" : "text-ink-2"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={cta.primaryShort.href}
            className="group hidden h-10 items-center gap-2 rounded-full bg-ink pl-4 pr-3.5 text-[0.86rem] font-medium text-paper transition-colors hover:bg-ink-2 sm:inline-flex"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
            </span>
            {cta.primaryShort.label}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            className="relative -mr-2 flex size-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
            <span className={`absolute h-px w-5 bg-ink transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
          </button>
        </div>
      </div>

    </header>

      {/* Mobile – außerhalb des Headers, da backdrop-filter sonst den fixed-Kontext begrenzt */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[68px] z-40 border-t border-line overflow-y-auto bg-paper transition-[opacity,visibility] duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile Navigation" className="container-x flex min-h-full flex-col pb-8 pt-6">
          <ul className="border-t border-line">
            {[{ label: "Leistungen", href: "/leistungen" }, ...nav].map((n, i) => (
              <li key={n.href} className="border-b border-line">
                <Link
                  href={n.href}
                  className="flex items-baseline justify-between py-4 text-[1.9rem] font-medium tracking-[-0.03em]"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {n.label}
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-8 mb-3 text-muted">Schwerpunkte</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[0.95rem] text-ink-2">
            {[...platformServices.map((p) => ({ label: p.title, href: p.href })), { label: "GEO Audit", href: "/geo-audit" }, { label: "GEO Beratung", href: "/geo-beratung" }, { label: "GEO Agentur", href: "/geo-agentur" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-3 pt-10">
            <Link href={cta.primary.href} className="flex h-14 items-center justify-center gap-2 rounded-full bg-ink font-medium text-paper">
              {cta.primary.label} <ArrowRight />
            </Link>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex h-14 items-center justify-center rounded-full border border-line-2 font-medium">
              {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
