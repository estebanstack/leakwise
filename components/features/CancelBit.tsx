"use client";

import * as m from "motion/react-m";
import { EASE, Panel, useK, VIEW } from "./shared";

export function CancelBit() {
  const k = useK();
  const t = (delay: number, duration = 0.35) => ({ duration: duration * k, delay: delay * k, ease: EASE });
  return (
    <Panel className="flex-col gap-2.5">
      <div className="flex w-full items-center justify-between rounded-xl border border-hairline bg-surface p-2.5">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-lg border border-hairline bg-ink font-display text-sm font-bold">
            F
          </span>
          <div>
            <p className="text-sm font-medium leading-tight">FitPass</p>
            <p className="tnum text-[11px] text-muted">$39.00</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative h-4 w-12 text-right text-[11px] font-semibold">
            <m.span
              className="absolute inset-0 text-amber"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              viewport={VIEW}
              transition={t(0.9, 0.2)}
            >
              Active
            </m.span>
            <m.span
              className="absolute inset-0 text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEW}
              transition={t(0.9, 0.2)}
            >
              Off
            </m.span>
          </span>
          <span className="relative block h-5 w-9 overflow-hidden rounded-full bg-hairline">
            <m.span
              className="absolute inset-0 bg-amber"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              viewport={VIEW}
              transition={t(0.9, 0.3)}
            />
            <m.span
              className="absolute left-0.5 top-0.5 size-4 rounded-full bg-text"
              initial={{ x: 16 }}
              whileInView={{ x: 0 }}
              viewport={VIEW}
              transition={t(0.9, 0.3)}
            />
          </span>
        </div>
      </div>
      <m.span
        className="self-start rounded-full bg-mint/15 px-2.5 py-1 text-[11px] font-semibold text-mint"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={VIEW}
        transition={t(1.3, 0.35)}
      >
        Cancelled
      </m.span>
    </Panel>
  );
}
