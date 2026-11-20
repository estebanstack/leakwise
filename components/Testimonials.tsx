import { Star } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
      <Reveal>
        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-amber">
          {testimonials.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.02em] md:text-5xl">
          {testimonials.heading}
        </h2>
      </Reveal>
      <ul className="mt-12 grid gap-5 lg:grid-cols-3">
        {testimonials.items.map((t, i) => (
          <li key={t.name}>
            <Reveal delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-card border border-hairline bg-surface p-7">
                <div className="flex gap-0.5 text-lg text-amber">
                  <span className="sr-only">5 out of 5</span>
                  {Array.from({ length: 5 }, (_, n) => (
                    <Star key={n} />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-text">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface-2 font-display text-xs font-bold text-amber"
                  >
                    {t.initials}
                  </span>
                  <span className="text-sm text-muted">
                    <strong className="font-semibold text-text">{t.name}</strong>, {t.role}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
