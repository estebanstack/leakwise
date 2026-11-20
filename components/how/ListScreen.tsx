import { SubscriptionRow } from "@/components/SubscriptionRow";
import { heroSubscriptions, type Subscription } from "@/lib/content";

const byName = (n: string): Subscription => heroSubscriptions.find((s) => s.name === n)!;

const groups = [
  {
    label: "Streaming",
    rows: [
      { ...byName("StreamBox"), flag: "Was $13.49", badge: "Price up $2", flagged: true },
      { ...byName("MusicFlow"), flagged: false },
    ],
  },
  { label: "Fitness", rows: [{ ...byName("FitPass"), flagged: false }] },
  {
    label: "Apps",
    rows: [
      { ...byName("PhotoPro"), badge: "Trial", flagged: true },
      { ...byName("CloudDrive"), flagged: false },
    ],
  },
] as const;

export function ListScreen() {
  return (
    <div className="h-full px-4 pt-3">
      <div className="flex items-baseline justify-between">
        <h4 className="font-display text-xl font-bold tracking-[-0.02em]">Subscriptions</h4>
        <span className="text-[11px] text-muted">14 found</span>
      </div>
      {groups.map((g) => (
        <div key={g.label} className="mt-3">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
            {g.label}
          </p>
          <ul className="flex flex-col gap-1.5">
            {g.rows.map((r) => (
              <SubscriptionRow key={r.name} {...r} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
