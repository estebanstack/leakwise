import { ArrowRight, Lock, Tap, TrendDown } from "@/components/icons";
import { EmailCapture } from "@/components/EmailCapture";
import { HeroPhone } from "@/components/HeroPhone";
import { hero } from "@/lib/content";

const proofIcons = { trend: TrendDown, lock: Lock, tap: Tap } as const;

export function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-[1200px] px-6 pb-12 pt-6 lg:pt-6">
      <div className="grid items-center gap-14 lg:grid-cols-[55fr_45fr] lg:gap-10">
        <div className="min-w-0">
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-amber">
            {hero.eyebrow}
          </p>
          <h1 className="font-display text-[clamp(2.5rem,1.2rem+5vw,4.75rem)] font-extrabold leading-[1.06] tracking-[-0.02em] text-balance">
            {hero.headlineLead}
            <span className="text-amber">{hero.headlineAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{hero.subhead}</p>
          <EmailCapture idPrefix="hero-email" className="mt-8 max-w-md" />
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={hero.secondaryCta.href}
              className="group inline-flex w-fit items-center gap-1.5 rounded-sm text-sm font-medium text-text transition-colors hover:text-amber"
            >
              {hero.secondaryCta.label}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <span aria-hidden="true" className="hidden size-1 rounded-full bg-muted/50 sm:block" />
            <p className="text-xs text-muted">{hero.smallPrint}</p>
          </div>
        </div>

        <div className="flex justify-center pb-4 lg:justify-end lg:pr-4">
          <HeroPhone />
        </div>
      </div>

      <ul className="mt-12 flex flex-col gap-3 border-t border-hairline pt-6 md:flex-row md:flex-wrap md:items-center md:gap-x-8 lg:flex-nowrap lg:justify-between lg:gap-x-0">
        {hero.proof.map((p, i) => {
          const Icon = proofIcons[p.icon];
          return (
            <li key={p.lead} className="contents">
              {i > 0 && <span aria-hidden="true" className="hidden h-5 w-px bg-hairline lg:block" />}
              <span className="flex items-center gap-2.5 text-[13px] text-muted lg:whitespace-nowrap">
                <Icon className="shrink-0 text-lg" />
                <span>
                  {p.lead}
                  {"highlight" in p && (
                    <>
                      <span className="tnum font-semibold text-mint">{p.highlight}</span>
                      {p.tail}
                    </>
                  )}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
