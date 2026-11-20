"use client";

import * as m from "motion/react-m";
import { EASE, Panel, useK, VIEW } from "./shared";

const people = [
  { initial: "P", tone: "bg-amber text-ink" },
  { initial: "M", tone: "bg-mint text-ink" },
  { initial: "E", tone: "bg-text text-ink" },
] as const;

export function SharedBit() {
  const k = useK();
  return (
    <Panel className="flex-col gap-3">
      <div className="flex -space-x-2.5">
        {people.map((p, i) => (
          <m.span
            key={p.initial}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEW}
            transition={{ type: "spring", stiffness: 420, damping: 22, delay: (0.1 + i * 0.12) * k }}
            className={`flex size-10 items-center justify-center rounded-full border-2 border-surface-2 font-display text-sm font-bold ${p.tone}`}
          >
            {p.initial}
          </m.span>
        ))}
      </div>
      <m.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEW}
        transition={{ duration: 0.4 * k, delay: 0.5 * k, ease: EASE }}
        className="tnum text-[12px] text-muted"
      >
        {/* $15.49 / 3 = 5.163..., shown as $5.16 */}
        StreamBox ÷ 3 = <span className="font-semibold text-text">$5.16 each</span>
      </m.p>
    </Panel>
  );
}
