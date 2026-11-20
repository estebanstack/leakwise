import { Battery, Signal } from "@/components/icons";

type PhoneFrameProps = {
  children: React.ReactNode;
  /** Rendered outside the clipped screen (e.g. a notification overlapping the frame edge). */
  overlay?: React.ReactNode;
  className?: string;
};

/** Decorative phone shell. Wrap in an element with role="img" + label when used as an illustration. */
export function PhoneFrame({ children, overlay, className }: PhoneFrameProps) {
  return (
    <div className={`relative w-[300px] sm:w-[340px] lg:w-[350px] ${className ?? ""}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-16 -z-10"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,181,71,0.16), rgba(255,181,71,0) 100%)",
        }}
      />
      <div className="relative overflow-hidden rounded-[44px] border-8 border-surface-2 bg-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-hairline">
        <div className="absolute left-1/2 top-0 z-20 h-6 w-[100px] -translate-x-1/2 rounded-b-2xl bg-surface-2" />
        <div className="relative z-10 flex items-center justify-between px-6 pb-1 pt-2.5 text-xs font-medium text-text">
          <span>9:41</span>
          <span className="flex items-center gap-1.5 text-muted">
            <Signal />
            <Battery />
          </span>
        </div>
        {children}
      </div>
      {overlay}
    </div>
  );
}
