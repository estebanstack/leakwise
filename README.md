# Leakwise

A landing page for **Leakwise**, a fictional subscription-tracker app: it finds forgotten subscriptions and free trials, warns you before they renew, and cancels the ones you don't use in one tap.

This is a portfolio piece (page #2): a dark, calm fintech look with scroll-triggered motion, one scroll-pinned section, an interactive savings calculator and a pricing toggle.

> Leakwise is a fictional product. Portfolio concept designed and built by Esteban Castro.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4 (tokens in `app/globals.css` via `@theme`)
- Motion (`motion/react`, loaded through `LazyMotion` + `m.*` components)
- Fonts via `next/font/google`: Bricolage Grotesque and Inter
- No backend, no database, no UI library, no icon library (inline SVG). Forms are front-end only: validation, then a success state.

## Scripts

```bash
npm run dev      # dev server
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
npx tsc --noEmit # type check
node --test lib/calc.test.ts   # calculator math self-check (Node 24, no extra deps)
```

Optional: set `NEXT_PUBLIC_SITE_URL` so metadata, sitemap and robots use the real deployed URL.

## Structure

```
app/            layout, page, globals.css, icons, OG image, robots, sitemap
components/     Nav, Hero, LeakStat, HowItWorks, Features, SavingsCalculator,
                Pricing, Testimonials, Faq, FinalCta, Footer + small UI pieces
components/how/ and components/features/   phone screens and animated UI bits
lib/            content.ts (all copy and data), calc.ts (+ test), reduced-motion hook
```

## Accessibility and motion

- Semantic landmarks, a skip link, labelled form fields, visible `:focus-visible` rings and AA contrast on the dark theme.
- Chips use `aria-pressed`, the pricing toggle is a `radiogroup` with arrow-key support, the FAQ uses buttons with `aria-expanded` / `aria-controls`, and the calculator announces results through a debounced `aria-live` region.
- Phone mock-ups are decorative (`role="img"` with a text description); real information is always in text.
- Motion uses transform and opacity only (one small SVG ring excepted). `prefers-reduced-motion` is respected: Motion's `MotionConfig`, a global CSS rule, a hydration-safe hook where structure changes (the pinned "How it works" becomes a stacked layout), and final states rendered immediately.

## Images

No photos are used; all UI is built in HTML/CSS/SVG.
