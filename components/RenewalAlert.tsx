import * as m from "motion/react-m";

type RenewalAlertProps = {
  title: string;
  price: string;
  show: boolean;
  animate: boolean;
};

/** Decorative notification card (Keep / Cancel are visual only, not focusable). */
export function RenewalAlert({ title, price, show, animate }: RenewalAlertProps) {
  return (
    <m.div
      initial={animate ? { opacity: 0, scale: 0.92, y: 14 } : false}
      animate={show ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.92, y: 14 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      className="absolute -left-6 bottom-6 z-30 flex w-[292px] items-center justify-between gap-3 rounded-xl border border-hairline bg-surface-2 p-3 shadow-[0_16px_32px_-12px_rgba(0,0,0,0.7)] sm:-left-10"
    >
      <div className="min-w-0">
        <p className="text-[13px] font-semibold leading-tight">{title}</p>
        <p className="tnum mt-0.5 text-[11px] text-muted">{price} · Heads-up from Leakwise</p>
      </div>
      <div className="flex shrink-0 gap-1.5">
        <span className="rounded-lg border border-hairline px-2.5 py-1.5 text-[11px] font-semibold text-text">
          Keep
        </span>
        <span className="rounded-lg bg-amber px-2.5 py-1.5 text-[11px] font-semibold text-ink">
          Cancel
        </span>
      </div>
    </m.div>
  );
}
