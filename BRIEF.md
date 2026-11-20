# Portfolio Page #2: Leakwise (subscription tracker landing page)

> Fictional SaaS product. Portfolio concept for Upwork.
> Goal per `docs/Upwork_Plan.md`: prove **"Give me a design and I'll ship it clean and animated."** Must show scroll animations, feature sections, a pricing table and pixel-precise layout in React/Next.js.

---

## 1. The product

- **Name:** Leakwise
- **Tagline:** Stop paying for things you forgot about.
- **The problem (everyone has it):** forgotten subscriptions, free trials that quietly convert to paid, and price increases nobody notices. The average person underestimates their subscription spend by a lot.
- **What it does:** connects read-only to your bank or card, finds every recurring charge, warns you **before** renewals and trial endings, and lets you cancel in one tap.
- **Audience:** busy adults 20–45 with streaming, apps, gym memberships and SaaS tools piling up.
- **Primary CTA:** "Find my subscriptions" (an email capture that starts the free plan). Secondary: "See how it works".
- **Footer disclaimer:** "Leakwise is a fictional product. Portfolio concept designed and built by Esteban Castro."

## 2. Look and feel

Deliberately different from Northline (light, warm, athletic): **dark, calm, precise fintech**.

- **Colors**
  - Background: ink navy `#0B1020`; raised surfaces `#121933`; hairlines `rgba(238,241,247,.10)`
  - Text: `#EEF1F7`; muted `#9AA3B8`
  - Accent ("leak" / money going out): amber `#FFB547` (CTAs, highlights)
  - Positive ("saved"): mint `#3DD6B5` (savings numbers, success states only)
  - No purple-to-blue gradients, no glassmorphism everywhere, no neon.
- **Fonts (Google, free):** headings **Bricolage Grotesque** 600–800; body/UI **Inter** 400/500/600; numbers use tabular figures.
- **Style:** big confident headlines, generous space, 12px radius on cards, crisp 1px hairlines, real-looking product UI mock-ups built in HTML/CSS (no screenshots of fake apps as images).
- **Motion (the point of this piece):** scroll-triggered reveals, a counting money total, cards that stack and slide, and one scroll-pinned section. Everything respects `prefers-reduced-motion` and stays at 60fps (transform/opacity only).

## 3. Sections and copy

### Nav (sticky, blurs on scroll)
Logo "leakwise" · How it works · Features · Pricing · FAQ · **[Find my subscriptions]**

### Hero
- **Eyebrow:** Subscription tracker for real life
- **Headline:** You're paying for things you forgot about.
- **Subhead:** Leakwise finds every subscription and free trial on your cards, warns you before they renew, and cancels the ones you don't use, in one tap.
- **CTA:** email field + **[Find my subscriptions]** · small print: "Free forever plan. Read-only bank connection. No card needed."
- **Visual (animated):** a phone/app card where subscription rows slide in one by one (Netflix-style generic names: "StreamBox $15.49", "CloudDrive $2.99", "FitPass $39.00", "NewsDaily $12.00", "PhotoPro $9.99", "MusicFlow $10.99") while a total counts up to **$247/mo**, then two rows get flagged amber: "Unused for 64 days" and "Trial ends in 2 days".
- **Proof row:** "Avg. member finds $512/year in forgotten charges" · "Bank-level encryption" · "Cancel in one tap" *(fictional stats, used consistently)*

### The leak (problem → number)
- Big animated stat: **$512** counts up on scroll. "That's what the average Leakwise member was losing every year before they joined."
- 3 small facts: "Free trials that auto-convert" · "Price increases you never noticed" · "Apps you stopped opening months ago"

### How it works (3 steps, scroll-pinned)
Pinned section; the phone mock-up on the right changes per step as you scroll:
1. **Connect your cards.** Read-only and encrypted. We can see charges, never move money.
2. **See every subscription.** Leakwise groups recurring charges, flags trials and spots price hikes.
3. **Keep or cancel.** Get a heads-up 3 days before each renewal. Cancel the ones you don't need in one tap.

### Features (6, grid of cards with small animated UI bits)
- **Renewal alerts:** "Know 3 days before anything renews."
- **Trial tracker:** "Every free trial, with a countdown to the day it starts charging."
- **One-tap cancel:** "We handle the cancel flow for 400+ services."
- **Price-hike radar:** "Get flagged the moment a subscription quietly gets more expensive."
- **Shared plans:** "Split family and roommate subscriptions so nobody pays twice."
- **Monthly report:** "One clear email: what you pay, what you saved, what to review."

### Savings calculator (interactive, the showpiece)
"How much are you leaking?" Toggle chips for common subscriptions (streaming ×3, music, cloud storage, gym, news, fitness app, VPN, design tool), each with a typical price. The yearly total animates as chips are toggled, plus the line: "Members typically cancel 3 of these. That's **$X/year** back." *(X = sum of the 3 most expensive selected × 12.)*

### Pricing (Monthly / Yearly toggle, "2 months free")
| Plan | Monthly | Yearly (per month) | Includes |
|---|---|---|---|
| Free | $0 | $0 | Up to 2 cards · Subscription list · Renewal alerts |
| **Plus** *(Most popular)* | $4.99 | $4.16 | Unlimited cards · Trial tracker · Price-hike radar · One-tap cancel |
| Family | $8.99 | $7.49 | Everything in Plus · Up to 5 people · Shared plans |

Button on each: **[Start free]**. Note: "Cancel anytime. Yes, we see the irony."

### Testimonials (3)
- "Found a gym membership I'd been paying for since 2023. Leakwise paid for itself in a day." **Priya R.**, designer
- "The trial countdown alone has saved me from four auto-renewals this year." **Marcus T.**, student
- "We were paying for the same streaming service twice in our household. Never again." **Elena & Jon**, Family plan

### FAQ (accordion)
- **Is it safe to connect my bank?** Leakwise uses a read-only connection through a certified banking partner. We can see transactions, never move money, and we never store your bank password.
- **How does one-tap cancel work?** For 400+ services we complete the cancellation flow for you. For the rest, we give you the direct cancel link and step-by-step instructions.
- **What does the free plan include?** Up to 2 cards, your full subscription list and renewal alerts. Forever.
- **Can I use it with my partner or roommates?** Yes. The Family plan covers up to 5 people and lets you split shared subscriptions.
- **What if I want to leave?** Delete your account in settings and we erase your data within 30 days.

### Final CTA band
**"Find your leaks in 2 minutes."** Email field + **[Find my subscriptions]**

### Footer
Logo · links (Product, Pricing, FAQ, Privacy, Terms; Privacy and Terms can be `#`) · disclaimer · © 2026 Leakwise

## 4. Technical requirements

- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS + Motion (formerly Framer Motion). All free. Static export or Vercel default, with no backend; forms are frontend only (validation, then a success state).
- **Own git repo** in `leakwise/`, its own Vercel project.
- **Responsive:** 375 / 768 / 1280 / 1440, plus the 1715 desktop check.
- **Accessibility:** semantic landmarks, labeled inputs, visible focus, accessible toggles/accordion/chips (`aria-pressed`, `aria-expanded`), reduced motion respected, contrast AA on the dark theme.
- **Performance:** Lighthouse mobile **90+** in all four categories. Animations GPU-friendly; fonts via `next/font`; no heavy libraries beyond Motion.
- **SEO:** title, meta description, OG image (1200×630), favicon.

## 5. Definition of done
- [ ] Live on a Vercel URL, public GitHub repo
- [ ] Every section above built with this copy
- [ ] Hero animation, scroll-pinned "How it works", savings calculator, pricing toggle and FAQ all work (and degrade cleanly with reduced motion)
- [ ] Responsive at all breakpoints, 0 console errors
- [ ] Lighthouse mobile 90+ (screenshot)
- [ ] Desktop + mobile screenshots + 2-line write-up in `portfolio-assets/leakwise/`

## 6. Workflow
Superdesign direction for hero + one feature section (a few credits; ~40 left) → Opus plan → `implementer` builds in phases → browser verification each phase → Lighthouse → deploy.
