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
