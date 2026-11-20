"use client";

import { AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import * as m from "motion/react-m";
import { useRef, useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { Reveal } from "@/components/Reveal";
import { AlertScreen } from "@/components/how/AlertScreen";
import { ConnectScreen } from "@/components/how/ConnectScreen";
import { ListScreen } from "@/components/how/ListScreen";
import { how } from "@/lib/content";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

const screens = [ConnectScreen, ListScreen, AlertScreen];
const SCREEN_H = "h-[440px]";

function StepPhone({ index, compact }: { index: number; compact?: boolean }) {
  const Screen = screens[index];
  return (
    <div role="img" aria-label={how.steps[index].label}>
      <PhoneFrame compact={compact}>
        <div className={SCREEN_H}>
          <Screen />
        </div>
      </PhoneFrame>
    </div>
  );
}

/** Stacked layout: <1024px, and at every width under reduced motion. */
function Stacked() {
  return (
    <ol className="flex flex-col gap-16 lg:gap-24">
      {how.steps.map((s, i) => (
        <li key={s.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal className="max-w-md">
            <StepText i={i} active />
          </Reveal>
          <Reveal delay={0.08} className="flex justify-center lg:justify-end">
            <StepPhone index={i} compact />
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

function StepText({
  i,
  active,
  onSelect,
}: {
  i: number;
  active: boolean;
  onSelect?: () => void;
}) {
  const s = how.steps[i];
  return (
    <div className="flex gap-4">
      <span
        aria-hidden="true"
        className={`relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-colors duration-300 ${
          active ? "border-amber bg-amber text-ink" : "border-hairline bg-surface text-muted"
        }`}
      >
        {i + 1}
      </span>
      <div>
        <h3
          className={`font-display text-2xl font-bold tracking-[-0.02em] transition-colors duration-300 md:text-3xl ${
            active ? "text-text" : "text-muted"
          }`}
        >
          {onSelect ? (
            <button type="button" onClick={onSelect} className="rounded-sm text-left">
              {s.title}
            </button>
          ) : (
            s.title
          )}
        </h3>
        <p className={`mt-2 text-base leading-relaxed transition-colors duration-300 ${active ? "text-text/80" : "text-muted"}`}>
          {s.body}
        </p>
      </div>
    </div>
  );
}

/** Scroll-pinned layout (>=1024px, motion allowed). */
function Pinned() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(v < 1 / 3 ? 0 : v < 2 / 3 ? 1 : 2);
  });

  function goTo(i: number) {
    const el = wrapRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const progress = (i + 0.5) / 3;
    window.scrollTo({ top: top + progress * (el.offsetHeight - window.innerHeight) });
  }

  const Screen = screens[active];

  return (
    <div ref={wrapRef} className="relative h-[300vh]">
      <div className="sticky top-[72px] flex h-[calc(100dvh-72px)] items-center">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <ol className="relative flex flex-col gap-10">
            <span aria-hidden="true" className="absolute bottom-4 left-[15px] top-4 w-px bg-hairline">
              <m.span
                className="absolute inset-0 origin-top bg-amber"
                style={{ scaleY: scrollYProgress }}
              />
            </span>
            {how.steps.map((s, i) => (
              <li key={s.title} aria-current={active === i ? "step" : undefined}>
                <StepText i={i} active={active === i} onSelect={() => goTo(i)} />
              </li>
            ))}
          </ol>
          <div className="flex justify-end">
            <div role="img" aria-label={how.steps[active].label}>
              <PhoneFrame>
                <div className={`relative ${SCREEN_H}`}>
                  <AnimatePresence initial={false}>
                    <m.div
                      key={active}
                      className="absolute inset-0"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Screen />
                    </m.div>
                  </AnimatePresence>
                </div>
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  const reduce = useReducedMotionSafe();

  return (
    <section id="how" className="mx-auto max-w-[1200px] px-6 pb-12 pt-16 lg:pt-24">
      <Reveal>
        <h2 className="mb-12 font-display text-4xl font-extrabold tracking-[-0.02em] md:text-5xl lg:mb-16">
          {how.heading}
        </h2>
      </Reveal>
      {reduce ? (
        <Stacked />
      ) : (
        <>
          <div className="lg:hidden">
            <Stacked />
          </div>
          <div className="hidden lg:block">
            <Pinned />
          </div>
        </>
      )}
    </section>
  );
}
