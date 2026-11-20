export function Droplet({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 2.5c-.4 0-.8.2-1 .5C8.6 6.2 5.5 10 5.5 14a6.5 6.5 0 0 0 13 0c0-4-3.1-7.8-5.5-11-.2-.3-.6-.5-1-.5Z" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className ?? ""}`}>
      <span className="font-display text-2xl font-bold lowercase tracking-[-0.02em]">
        leakwise
      </span>
      <Droplet className="text-lg text-amber" />
    </span>
  );
}

const base = {
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const ArrowRight = ({ className }: { className?: string }) => (
  <svg {...base} className={className}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const TrendDown = ({ className }: { className?: string }) => (
  <svg {...base} className={className}><path d="M3 7l6 6 4-4 8 8M21 11v6h-6" /></svg>
);
export const Lock = ({ className }: { className?: string }) => (
  <svg {...base} className={className}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
);
export const Tap = ({ className }: { className?: string }) => (
  <svg {...base} className={className}><path d="M9 11V5a2 2 0 0 1 4 0v6m0-1.5a2 2 0 0 1 4 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-3l-2-4a1.8 1.8 0 0 1 3-2l1 1.5" /></svg>
);
export const CheckCircle = ({ className }: { className?: string }) => (
  <svg {...base} className={className}><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.5 2.5L16 9.5" /></svg>
);
export const Signal = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 18 12" width="18" height="12" aria-hidden="true" className={className} fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5" width="3" height="7" rx="1" /><rect x="10" y="2.5" width="3" height="9.5" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
);
export const Battery = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 26 12" width="26" height="12" aria-hidden="true" className={className}><rect x="0.5" y="0.5" width="21" height="11" rx="3" fill="none" stroke="currentColor" opacity=".6" /><rect x="2.5" y="2.5" width="17" height="7" rx="1.5" fill="currentColor" /><rect x="23" y="4" width="2" height="4" rx="1" fill="currentColor" opacity=".6" /></svg>
);
export const Dots = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" className={className} fill="currentColor"><circle cx="5" cy="12" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="19" cy="12" r="1.8" /></svg>
);

export const Hourglass = ({ className }: { className?: string }) => (
  <svg {...base} className={className}><path d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9" /></svg>
);
export const TrendUp = ({ className }: { className?: string }) => (
  <svg {...base} className={className}><path d="M3 17l6-6 4 4 8-8M21 13V7h-6" /></svg>
);
export const AppsGrid = ({ className }: { className?: string }) => (
  <svg {...base} className={className}><rect x="4" y="4" width="6" height="6" rx="1.5" /><rect x="14" y="4" width="6" height="6" rx="1.5" /><rect x="4" y="14" width="6" height="6" rx="1.5" /><rect x="14" y="14" width="6" height="6" rx="1.5" /></svg>
);
export const CardIcon = ({ className }: { className?: string }) => (
  <svg {...base} className={className}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3 10h18M7 15h3" /></svg>
);
