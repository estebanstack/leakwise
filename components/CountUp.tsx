"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  from?: number;
  /** Seconds. */
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** "view" (default) counts when scrolled into view; "mount" counts right after hydration (above-the-fold use). */
  trigger?: "view" | "mount";
  /** Custom formatter (client-only usage; functions can't cross from server components). */
  format?: (value: number) => string;
};

function formatNumber(value: number, decimals: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/**
 * Server-renders the FINAL value (no CLS, correct without JS). On mount, if
 * motion is allowed and the element is below the viewport, it resets to `from`
 * and counts up to `to` when scrolled into view.
 */
export function CountUp({
  to,
  from = 0,
  duration = 1.6,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  trigger = "view",
  format,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const armed = useRef(false);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const render = (value: number) =>
    `${prefix}${format ? format(value) : formatNumber(value, decimals)}${suffix}`;

  // Arm on mount: only reset when the element has not been seen yet.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    const rect = el.getBoundingClientRect();
    if (trigger === "mount" || rect.top > window.innerHeight * 0.9) {
      armed.current = true;
      el.textContent = render(from);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, trigger]);

  useEffect(() => {
    const el = ref.current;
    if ((trigger !== "mount" && !inView) || !armed.current || !el || reduce) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = render(v);
      },
      onComplete: () => {
        el.textContent = render(to);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, trigger]);

  return (
    <span ref={ref} className={`tnum ${className ?? ""}`}>
      {render(to)}
    </span>
  );
}
