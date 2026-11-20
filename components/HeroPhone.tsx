"use client";

import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";
import { useEffect, useState } from "react";
import { CountUp } from "@/components/CountUp";
import { Dots, Droplet } from "@/components/icons";
import { PhoneFrame } from "@/components/PhoneFrame";
import { RenewalAlert } from "@/components/RenewalAlert";
import { SubscriptionRow } from "@/components/SubscriptionRow";
import { heroPhone, heroSubscriptions } from "@/lib/content";

const STAGGER = 0.08;
const FLAG_AT = 1300; // ms: after rows + count settle
const ALERT_AT = 2100;

export function HeroPhone() {
  const reduce = useReducedMotionSafe();
  const [flagTimer, setFlagTimer] = useState(false);
  const [alertTimer, setAlertTimer] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const a = setTimeout(() => setFlagTimer(true), FLAG_AT);
    const b = setTimeout(() => setAlertTimer(true), ALERT_AT);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [reduce]);

  const animateIn = !reduce;
  const flagged = Boolean(reduce) || flagTimer;
  const showAlert = Boolean(reduce) || alertTimer;

  return (
    <div role="img" aria-label={heroPhone.description}>
      <PhoneFrame
        overlay={
          <RenewalAlert
            title={heroPhone.alert.title}
            price={heroPhone.alert.price}
            show={showAlert}
            animate={animateIn}
          />
        }
      >
        <div className="relative z-10 px-4 pb-24 pt-2">
          <div className="mb-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 font-display text-base font-bold lowercase tracking-[-0.02em]">
              leakwise <Droplet className="text-sm text-amber" />
            </span>
            <span className="rounded-full border border-hairline bg-surface-2 p-1.5 text-muted">
              <Dots />
            </span>
          </div>
          <p className="text-xs font-medium text-muted">{heroPhone.label}</p>
          <p className="mb-4 mt-1 font-display text-4xl font-bold leading-none tracking-[-0.02em]">
            <CountUp to={heroPhone.total} prefix="$" trigger="mount" />
            <span className="ml-1 text-base font-semibold text-muted">/mo</span>
          </p>
          <ul className="flex flex-col gap-2">
            {heroSubscriptions.map((s, i) => (
              <SubscriptionRow
                key={s.name}
                {...s}
                flagged={flagged && Boolean(s.flag)}
                animateIn={animateIn}
                delay={0.25 + i * STAGGER}
              />
            ))}
          </ul>
          <p className="mt-3 text-center text-[11px] text-muted">{heroPhone.more}</p>
        </div>
      </PhoneFrame>
    </div>
  );
}
