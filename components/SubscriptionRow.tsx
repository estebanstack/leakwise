import * as m from "motion/react-m";

type SubscriptionRowProps = {
  name: string;
  amount: string;
  date: string;
  flag?: string;
  /** Flagged state (amber edge, badge, flag text instead of the date). */
  flagged?: boolean;
  /** Slide-in delay in seconds; undefined renders static. */
  delay?: number;
  animateIn?: boolean;
};

export function SubscriptionRow({
  name,
  amount,
  date,
  flag,
  flagged = false,
  delay = 0,
  animateIn = false,
}: SubscriptionRowProps) {
  return (
    <m.li
      initial={animateIn ? { opacity: 0, x: 28 } : false}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-between overflow-hidden rounded-xl border border-hairline bg-surface-2/60 p-2.5"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-0.5 bg-amber transition-opacity duration-300 ${
          flagged ? "opacity-100" : "opacity-0"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute right-0 top-0 rounded-bl-lg border-b border-l border-amber/20 bg-amber/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber transition-opacity duration-300 ${
          flagged ? "opacity-100" : "opacity-0"
        }`}
      >
        Action needed
      </span>
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg border border-hairline bg-ink font-display text-base font-bold">
          {name[0]}
        </span>
        <div>
          <p className="text-sm font-medium leading-tight">{name}</p>
          <p className={`text-[11px] leading-tight ${flagged && flag ? "text-amber" : "text-muted"}`}>
            {flagged && flag ? flag : date}
          </p>
        </div>
      </div>
      <p className="tnum pr-0.5 text-sm font-semibold">{amount}</p>
    </m.li>
  );
}
