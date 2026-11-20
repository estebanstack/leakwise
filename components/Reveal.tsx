"use client";

import * as m from "motion/react-m";
import { useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds. Keep small (stagger siblings by ~0.06–0.1). */
  delay?: number;
};

/** Fade + 20px rise, once, when scrolled into view. Static when motion is reduced. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
