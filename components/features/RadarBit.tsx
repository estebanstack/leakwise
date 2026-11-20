"use client";

import * as m from "motion/react-m";
import { EASE, Panel, useK, VIEW } from "./shared";

export function RadarBit() {
  const k = useK();
  return (
    <Panel>
      <div className="flex w-full items-center justify-between rounded-xl border border-hairline bg-surface p-3">
        <div>
          <p className="text-sm font-semibold leading-tight">StreamBox</p>
          <p className="tnum mt-1 flex items-center gap-1.5 text-[12px]">
            <span className="text-muted line-through">$13.49</span>
            <span className="text-muted">→</span>
            <span className="font-semibold text-text">$15.49</span>
          </p>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <m.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.5 * k, delay: 0.2 * k, ease: EASE }}
            className="text-amber"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </m.span>
          <m.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEW}
            transition={{ duration: 0.4 * k, delay: 0.6 * k, ease: EASE }}
            className="tnum rounded-full bg-amber/15 px-2 py-0.5 text-[11px] font-semibold text-amber"
          >
            +$2.00/mo
          </m.span>
        </div>
      </div>
    </Panel>
  );
}
