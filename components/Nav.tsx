"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { navLinks, primaryCta } from "@/lib/content";
import { Logo } from "@/components/icons";

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}
const getScrolled = () => window.scrollY > 8;
const getServerScrolled = () => false;

export function Nav() {
  const scrolled = useSyncExternalStore(subscribeScroll, getScrolled, getServerScrolled);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        solid
          ? "border-hairline bg-ink/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6"
      >
        <a href="#" aria-label="Leakwise home" className="rounded-md">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-sm text-sm font-medium text-muted transition-colors hover:text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={primaryCta.href}
          className="hidden rounded-xl bg-amber px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-amber/90 md:inline-block"
        >
          {primaryCta.label}
        </a>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-xl text-text md:hidden"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-hairline bg-ink/95 px-6 pb-6 pt-2 md:hidden"
      >
        <ul className="flex flex-col">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={close}
                className="block border-b border-hairline py-4 text-base font-medium text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={primaryCta.href}
          onClick={close}
          className="mt-5 block rounded-xl bg-amber px-5 py-3 text-center text-sm font-semibold text-ink"
        >
          {primaryCta.label}
        </a>
      </div>
    </header>
  );
}
