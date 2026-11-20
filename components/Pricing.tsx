"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useRef, useState } from "react";
import { Check } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { pricing } from "@/lib/content";

type Billing = "monthly" | "yearly";
const OPTIONS: { value: Billing; label: string }[] = [
  { value: "monthly", label: "Monthly" },
  { value: "yearly", label: "Yearly" },
];

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent, i: number) {
    let next = i;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % 2;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i + 1) % 2;
    else return;
    e.preventDefault();
    setBilling(OPTIONS[next].value);
    refs.current[next]?.focus();
  }

  const yearly = billing === "yearly";

  return (
    <section id="pricing" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
      <Reveal className="flex flex-col items-center text-center">
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-amber">
          {pricing.eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] md:text-5xl">
          {pricing.heading}
        </h2>

        <div className="mt-8 flex items-center gap-3">
          <div
            role="radiogroup"
            aria-label="Billing period"
            className="relative grid grid-cols-2 rounded-full border border-hairline bg-surface p-1"
          >
            <span
              aria-hidden="true"
              className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-text transition-transform duration-300 ease-out ${
                yearly ? "translate-x-full" : "translate-x-0"
              }`}
            />
            {OPTIONS.map((o, i) => {
              const on = billing === o.value;
              return (
                <button
                  key={o.value}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setBilling(o.value)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`relative z-10 rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-300 ${
                    on ? "text-ink" : "text-muted hover:text-text"
                  }`}
                >
                  {o.label}
                </button>
              );
            })}
          </div>
          <span className="rounded-full bg-mint/15 px-3 py-1 text-xs font-semibold text-mint">
            {pricing.yearlyPill}
          </span>
        </div>
      </Reveal>

      <ul className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-5">
        {pricing.plans.map((p, i) => {
          const popular = "popular" in p;
          const price = yearly ? p.yearly : p.monthly;
          return (
            <li key={p.name}>
              <Reveal delay={i * 0.07} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-card border p-7 ${
                    popular
                      ? "border-amber bg-surface-2 shadow-[0_20px_50px_-24px_rgba(255,181,71,0.35)]"
                      : "border-hairline bg-surface"
                  }`}
                >
                  {popular && (
                    <span className="absolute -top-3 left-7 rounded-full bg-amber px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                      {pricing.popular}
                    </span>
                  )}
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <div className="h-14 overflow-hidden">
                      <AnimatePresence mode="wait" initial={false}>
                        <m.p
                          key={price}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -12 }}
                          transition={{ duration: 0.18 }}
                          className="tnum font-display text-5xl font-extrabold leading-[56px] tracking-[-0.02em]"
                        >
                          {price}
                        </m.p>
                      </AnimatePresence>
                    </div>
                    <span className="text-base font-medium text-muted">/mo</span>
                  </div>
                  <p className="tnum mt-1 h-5 text-sm text-muted">
                    {yearly || p.monthly === "$0" ? p.billedYearly : "Billed monthly"}
                  </p>

                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[15px]">
                        <Check className="mt-0.5 shrink-0 text-lg text-mint" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#get-started"
                    className={`mt-8 block rounded-xl px-6 py-3.5 text-center font-semibold transition-colors ${
                      popular
                        ? "bg-amber text-ink hover:bg-amber/90"
                        : "border border-hairline text-text hover:border-text/40"
                    }`}
                  >
                    {pricing.cta}
                  </a>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 text-center text-sm text-muted">{pricing.note}</p>
    </section>
  );
}
