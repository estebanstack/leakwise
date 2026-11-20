"use client";

import * as m from "motion/react-m";
import { EASE, Panel, useK, VIEW } from "./shared";

export function RenewalBit() {
  const k = useK();
  return (
    <Panel>
      <m.div
        initial={{ opacity: 0, y: -28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 0.5 * k, ease: EASE }}
        className="flex w-full items-center gap-3 rounded-xl border border-hairline bg-surface p-3 shadow-lg"
      >
        <m.span
          initial={{ rotate: 0 }}
          whileInView={{ rotate: [0, -16, 14, -10, 6, 0] }}
          viewport={VIEW}
          transition={{ duration: 0.8 * k, delay: 0.55 * k }}
          style={{ transformOrigin: "50% 15%" }}
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15L6 16ZM10 21h4" />
          </svg>
        </m.span>
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-tight">StreamBox</p>
          <p className="tnum truncate text-[11px] text-muted">renews in 3 days · $15.49</p>
        </div>
      </m.div>
    </Panel>
  );
}
