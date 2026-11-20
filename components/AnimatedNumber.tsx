"use client";

import { animate, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { formatDollars } from "@/lib/calc";

/**
 * Whole-dollar amount that tweens between values by writing straight to the DOM
 * (no re-render per frame). Server-renders the initial value; instant under reduced motion.
 */
export function AnimatedNumber({ value, className }: { value: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const shown = useRef(value);
  const reduce = useReducedMotion();
  const [initial] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce || shown.current === value) {
      shown.current = value;
      el.textContent = formatDollars(value);
      return;
    }
    const controls = animate(shown.current, value, {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        shown.current = v;
        el.textContent = formatDollars(Math.round(v));
      },
      onComplete: () => {
        shown.current = value;
        el.textContent = formatDollars(value);
      },
    });
    return () => controls.stop();
  }, [value, reduce]);

  return (
    <span ref={ref} className={`tnum ${className ?? ""}`}>
      {formatDollars(initial)}
    </span>
  );
}
