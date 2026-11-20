"use client";

import * as m from "motion/react-m";
import { EASE, Panel, useK, VIEW } from "./shared";

const bars = [44, 62, 38, 78, 100]; // % heights, last bar = this month

export function ReportBit() {
  const k = useK();
  return (
    <Panel className="flex-col items-stretch justify-between gap-2">
      <div className="flex h-[58px] items-end gap-2 border-b border-hairline px-1">
        {bars.map((h, i) => (
          <m.span
            key={i}
            style={{ height: `${h}%`, transformOrigin: "bottom" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={VIEW}
            transition={{ duration: 0.6 * k, delay: i * 0.08 * k, ease: EASE }}
            className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-mint" : "bg-text/20"}`}
          />
        ))}
      </div>
      <p className="tnum flex items-baseline justify-between text-[12px] text-muted">
        Saved this month
        {/* PhotoPro $9.99 + FitPass $39.00 = $48.99 */}
        <span className="font-display text-base font-bold text-mint">$48.99</span>
      </p>
    </Panel>
  );
}
