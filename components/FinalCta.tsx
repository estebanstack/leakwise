import { EmailCapture } from "@/components/EmailCapture";
import { Reveal } from "@/components/Reveal";
import { finalCta, hero } from "@/lib/content";

export function FinalCta() {
  return (
    <section id="get-started" className="mx-auto max-w-[1200px] px-6 pb-24 pt-10 lg:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-card border border-hairline bg-surface px-6 py-14 text-center sm:px-12 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, rgba(255,181,71,0.16), rgba(255,181,71,0) 70%)",
            }}
          />
          <div className="relative mx-auto flex max-w-xl flex-col items-center">
            <h2 className="text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] md:text-5xl">
              {finalCta.heading}
            </h2>
            <EmailCapture
              idPrefix="cta-email"
              inputId="get-started-email"
              focusOnHash="#get-started"
              className="mt-8 w-full text-left"
            />
            <p className="mt-4 text-xs text-muted">{hero.smallPrint}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
