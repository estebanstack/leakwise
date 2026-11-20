import { CardIcon, CheckCircle, Lock } from "@/components/icons";

const cards = [
  { name: "Everyday Checking", last4: "4821", connected: true },
  { name: "Rewards Visa", last4: "1093", connected: false },
  { name: "Savings", last4: "7710", connected: false },
] as const;

export function ConnectScreen() {
  return (
    <div className="h-full px-4 pt-3">
      <h4 className="font-display text-xl font-bold tracking-[-0.02em]">Connect a card</h4>
      <p className="mt-1 text-xs text-muted">Choose where your subscriptions are charged.</p>
      <ul className="mt-5 flex flex-col gap-2.5">
        {cards.map((c) => (
          <li
            key={c.last4}
            className={`flex items-center gap-3 rounded-xl border bg-surface-2/60 p-3 ${
              c.connected ? "border-mint/40" : "border-hairline"
            }`}
          >
            <span className="flex size-9 items-center justify-center rounded-lg border border-hairline bg-ink text-lg text-muted">
              <CardIcon />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium leading-tight">{c.name}</p>
              <p className="tnum text-[11px] text-muted">••{c.last4}</p>
            </div>
            {c.connected ? (
              <span className="flex items-center gap-1 rounded-full bg-mint/15 px-2 py-1 text-[10px] font-semibold text-mint">
                <CheckCircle className="text-xs" /> Connected
              </span>
            ) : (
              <span className="rounded-full border border-hairline px-2.5 py-1 text-[10px] font-semibold text-muted">
                Connect
              </span>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-muted">
        <Lock className="text-sm" /> Read-only · 256-bit encryption
      </p>
    </div>
  );
}
