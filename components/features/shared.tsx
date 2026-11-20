"use client";

import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

/** 0 under reduced motion, else 1. Multiply durations/delays so non-transform animations also collapse to the final state. */
export function useK() {
  return useReducedMotionSafe() ? 0 : 1;
}

export const VIEW = { once: true, margin: "0px 0px -15% 0px" } as const;
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Inset surface-2 panel, ~120px tall, decorative. */
export function Panel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-[120px] items-center justify-center overflow-hidden rounded-lg border border-hairline bg-surface-2 p-3 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
