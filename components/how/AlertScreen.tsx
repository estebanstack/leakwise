import { CheckCircle } from "@/components/icons";

export function AlertScreen() {
  return (
    <div className="h-full px-4 pt-3">
      <h4 className="font-display text-xl font-bold tracking-[-0.02em]">Heads-up</h4>
      <div className="mt-4 rounded-xl border border-amber/30 bg-surface-2 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-amber">
          Renews in 3 days
        </p>
        <p className="mt-1.5 font-display text-lg font-bold leading-tight">NewsDaily</p>
        <p className="tnum text-sm text-muted">$12.00 on Dec 12</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <span className="rounded-xl border border-hairline py-3 text-center text-sm font-semibold">
            Keep
          </span>
          <span className="rounded-xl bg-amber py-3 text-center text-sm font-semibold text-ink">
            Cancel
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-start gap-3 rounded-xl border border-mint/30 bg-mint/10 p-3.5">
        <CheckCircle className="mt-0.5 shrink-0 text-xl text-mint" />
        <div>
          <p className="text-sm font-semibold text-mint">Cancelled PhotoPro</p>
          <p className="tnum text-xs text-muted">Saving $119.88/yr</p>
        </div>
      </div>
    </div>
  );
}
