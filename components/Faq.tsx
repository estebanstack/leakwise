"use client";

import { useId, useState } from "react";
import { Plus } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { faq } from "@/lib/content";

export function Faq() {
  const base = useId();
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set());

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <section id="faq" className="mx-auto max-w-[820px] px-6 py-20 lg:py-28">
      <Reveal>
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-amber">
          {faq.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] md:text-5xl">
          {faq.heading}
        </h2>
      </Reveal>
      <Reveal delay={0.06} className="mt-10 divide-y divide-hairline border-y border-hairline">
        {faq.items.map((item, i) => {
          const isOpen = open.has(i);
          const btnId = `${base}-q${i}`;
          const panelId = `${base}-a${i}`;
          return (
            <div key={item.q}>
              <h3>
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 rounded-sm py-5 text-left text-lg font-semibold"
                >
                  {item.q}
                  <Plus
                    className={`shrink-0 text-xl text-amber transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                inert={!isOpen}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 pr-10 leading-relaxed text-muted">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
