"use client";

import * as m from "motion/react-m";
import { EASE, Panel, useK, VIEW } from "./shared";

export function TrialBit() {
  const k = useK();
  return (
    <Panel className="gap-4">
      <div className="relative size-[84px] shrink-0">
        <svg viewBox="0 0 84 84" className="size-full -rotate-90" fill="none">
          <circle cx="42" cy="42" r="36" stroke="rgba(238,241,247,0.10)" strokeWidth="7" />
          <m.circle
            cx="42"
            cy="42"
            r="36"
            stroke="#FFB547"
            strokeWidth="7"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 0.72 }}
            viewport={VIEW}
            transition={{ duration: 1.2 * k, ease: EASE }}
          />
        </svg>
        <span className="absolute inset-0 flex flex-col items-center justify-center font-display leading-none">
          <span className="tnum text-xl font-bold">2</span>
          <span className="mt-0.5 text-[10px] font-medium text-muted">days</span>
        </span>
      </div>
      <div>
        <p className="text-sm font-semibold leading-tight">PhotoPro trial</p>
        <p className="tnum mt-1 text-[11px] text-muted">Then $9.99/mo</p>
      </div>
    </Panel>
  );
}
