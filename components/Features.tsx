import { Reveal } from "@/components/Reveal";
import { CancelBit } from "@/components/features/CancelBit";
import { RadarBit } from "@/components/features/RadarBit";
import { RenewalBit } from "@/components/features/RenewalBit";
import { ReportBit } from "@/components/features/ReportBit";
import { SharedBit } from "@/components/features/SharedBit";
import { TrialBit } from "@/components/features/TrialBit";
import { features } from "@/lib/content";

const bits = {
  renewal: RenewalBit,
  trial: TrialBit,
  cancel: CancelBit,
  radar: RadarBit,
  shared: SharedBit,
  report: ReportBit,
} as const;

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
      <Reveal>
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-amber">
          {features.eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] md:text-5xl">
          {features.heading}
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.items.map((f, i) => {
          const Bit = bits[f.id];
          return (
            <li key={f.id}>
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <article className="flex h-full flex-col gap-5 rounded-card border border-hairline bg-surface p-4 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-text/25">
                  <Bit />
                  <div className="px-1 pb-1">
                    <h3 className="font-display text-xl font-bold tracking-[-0.01em]">{f.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
