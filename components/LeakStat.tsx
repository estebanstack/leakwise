import { AppsGrid, Hourglass, TrendUp } from "@/components/icons";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { leak } from "@/lib/content";

const icons = { hourglass: Hourglass, trend: TrendUp, apps: AppsGrid } as const;

export function LeakStat() {
  return (
    <section id="the-leak" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
            {leak.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-4 font-display text-[clamp(5.5rem,11vw,10rem)] font-extrabold leading-none tracking-[-0.03em] text-amber">
            <CountUp to={leak.stat} prefix="$" duration={1.8} />
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="mx-auto mt-6 max-w-xl text-balance text-xl font-medium leading-snug text-text md:text-2xl">
            {leak.caption}
          </h2>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-4 lg:grid-cols-3">
        {leak.facts.map((f, i) => {
          const Icon = icons[f.icon];
          return (
            <li key={f.text}>
              <Reveal delay={0.08 * i} className="h-full">
                <div className="flex h-full items-center gap-4 rounded-card border border-hairline bg-surface p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber/12 text-xl text-amber">
                    <Icon />
                  </span>
                  <p className="font-medium text-text">{f.text}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
