"use client";

import * as m from "motion/react-m";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Reveal } from "@/components/Reveal";
import {
  formatCents,
  formatDollars,
  monthlyTotal,
  typicalSavings,
  wholeDollars,
  yearlyTotal,
} from "@/lib/calc";
import { calculator } from "@/lib/content";

export function SavingsCalculator() {
  const [selected, setSelected] = useState<ReadonlySet<string>>(
    () => new Set<string>(calculator.defaults),
  );
  const [announce, setAnnounce] = useState("");

  const cents = useMemo(
    () => calculator.chips.filter((c) => selected.has(c.id)).map((c) => c.cents),
    [selected],
  );
  const count = cents.length;
  const yearly = yearlyTotal(cents);
  const savings = typicalSavings(cents);
  const yearlyDollars = wholeDollars(yearly);
  const savingsDollars = wholeDollars(savings);
  const ratio = yearly > 0 ? savings / yearly : 0;

  // Debounced screen-reader summary (skips the initial render).
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const t = setTimeout(() => {
      setAnnounce(
        yearlyDollars === 0
          ? "No subscriptions selected."
          : `You spend ${formatDollars(yearlyDollars)} a year. Typical savings ${formatDollars(savingsDollars)} a year.`,
      );
    }, 400);
    return () => clearTimeout(t);
  }, [yearlyDollars, savingsDollars]);

  function toggle(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section id="calculator" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
      <Reveal>
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-amber">
          {calculator.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] md:text-5xl">
          {calculator.heading}
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">{calculator.subline}</p>
      </Reveal>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12">
        <Reveal delay={0.05}>
          <ul className="grid grid-cols-2 gap-3">
            {calculator.chips.map((c) => {
              const on = selected.has(c.id);
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => toggle(c.id)}
                    className={`flex h-full w-full items-center justify-between gap-2 rounded-xl border p-3.5 text-left transition-[transform,background-color,border-color] duration-150 active:scale-[0.98] sm:p-4 ${
                      on
                        ? "border-amber bg-amber/10"
                        : "border-hairline bg-surface hover:border-text/25"
                    }`}
                  >
                    <span className="min-w-0">
                      <span className="block text-[15px] font-semibold leading-tight">
                        {c.name}
                      </span>
                      <span className="tnum mt-1 block text-[13px] text-muted">
                        {formatCents(c.cents)}/mo
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex size-5 shrink-0 items-center justify-center rounded-full border ${
                        on ? "border-amber bg-amber text-ink" : "border-muted/60"
                      }`}
                    >
                      {on && (
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.5l4.5 4.5L19 7.5" />
                        </svg>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p className="tnum text-sm text-muted">
              Selected: <span className="font-semibold text-text">{count}</span> of{" "}
              {calculator.chips.length} · {formatCents(monthlyTotal(cents))}/mo
            </p>
            <button
              type="button"
              disabled={count === 0}
              onClick={() => setSelected(new Set())}
              className="rounded-sm text-sm font-medium text-text underline underline-offset-4 transition-colors hover:text-amber disabled:cursor-not-allowed disabled:no-underline disabled:opacity-40 disabled:hover:text-text"
            >
              Clear all
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:sticky lg:top-24">
          <div className="rounded-card border border-hairline bg-surface p-6 sm:p-8">
            <p className="text-sm font-medium text-muted">You spend</p>
            <p className="mt-2 flex items-baseline gap-2 font-display font-extrabold leading-none tracking-[-0.02em]">
              <AnimatedNumber value={yearlyDollars} className="text-[clamp(3rem,2rem+4vw,4.5rem)]" />
              <span className="text-lg font-semibold text-muted">/year</span>
            </p>

            <div className="my-6 h-px bg-hairline" />

            <p hidden={count === 0} className="text-lg leading-snug">
              Members typically cancel 3 of these. That&apos;s{" "}
              <span className="font-bold text-mint">
                <AnimatedNumber value={savingsDollars} />
                /year
              </span>{" "}
              back.
            </p>
            <p hidden={count > 0} className="text-lg leading-snug text-muted">
              {calculator.empty}
            </p>

            <div aria-hidden="true" className="mt-6">
              <div className="h-2.5 overflow-hidden rounded-full bg-text/10">
                <m.div
                  className="h-full origin-left rounded-full bg-mint"
                  initial={false}
                  animate={{ scaleX: ratio }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs font-medium">
                <span className="text-mint">Saved</span>
                <span className="text-muted">Kept</span>
              </div>
            </div>

            <a
              href="#get-started"
              className="mt-7 block rounded-xl bg-amber px-6 py-3.5 text-center font-semibold text-ink transition-colors hover:bg-amber/90"
            >
              Find my subscriptions
            </a>

            <div aria-live="polite" className="sr-only">
              {announce}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
