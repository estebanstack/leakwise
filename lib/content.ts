export const brand = {
  name: "Leakwise",
  tagline: "Stop paying for things you forgot about.",
} as const;

export const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const primaryCta = {
  label: "Find my subscriptions",
  href: "#get-started",
} as const;

export const footer = {
  links: [
    { label: "Product", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  disclaimer:
    "Leakwise is a fictional product. Portfolio concept designed and built by Esteban Castro.",
  copyright: "© 2026 Leakwise",
} as const;

export const hero = {
  eyebrow: "Subscription tracker for real life",
  headlineLead: "You're paying for things you ",
  headlineAccent: "forgot about.",
  subhead:
    "Leakwise finds every subscription and free trial on your cards, warns you before they renew, and cancels the ones you don't use, in one tap.",
  smallPrint: "Free forever plan. Read-only bank connection. No card needed.",
  secondaryCta: { label: "See how it works", href: "#how" },
  proof: [
    {
      icon: "trend",
      lead: "Avg. member finds ",
      highlight: "$512/year",
      tail: " in forgotten charges",
    },
    { icon: "lock", lead: "Bank-level encryption" },
    { icon: "tap", lead: "Cancel in one tap" },
  ],
} as const;

export type Subscription = {
  name: string;
  amount: string;
  date: string;
  flag?: string;
};

/** Six of the user's 14 subscriptions (they sum to $90.46; the phone header total is across all 14). */
export const heroSubscriptions: Subscription[] = [
  { name: "PhotoPro", amount: "$9.99", date: "Renews Dec 11", flag: "Trial ends in 2 days" },
  { name: "StreamBox", amount: "$15.49", date: "Renews Dec 14" },
  { name: "FitPass", amount: "$39.00", date: "Renews Dec 20", flag: "Unused for 64 days" },
  { name: "NewsDaily", amount: "$12.00", date: "Renews Dec 12" },
  { name: "CloudDrive", amount: "$2.99", date: "Renews Dec 15" },
  { name: "MusicFlow", amount: "$10.99", date: "Renews Dec 18" },
];

export const heroPhone = {
  label: "This month · 14 subscriptions",
  total: 247,
  more: "Showing 6 of 14 · +8 more",
  alert: { title: "NewsDaily renews in 3 days", price: "$12.00" },
  description:
    "Leakwise app preview: 14 subscriptions totalling $247 a month. PhotoPro is flagged as a trial ending in 2 days, FitPass as unused for 64 days, and a reminder says NewsDaily renews in 3 days with Keep and Cancel options.",
} as const;

export const leak = {
  eyebrow: "The leak",
  stat: 512,
  caption: "That's what the average Leakwise member was losing every year before they joined.",
  facts: [
    { icon: "hourglass", text: "Free trials that auto-convert" },
    { icon: "trend", text: "Price increases you never noticed" },
    { icon: "apps", text: "Apps you stopped opening months ago" },
  ],
} as const;

export const how = {
  heading: "How it works",
  steps: [
    {
      title: "Connect your cards.",
      body: "Read-only and encrypted. We can see charges, never move money.",
      label: "Phone preview: connecting a card with a read-only, encrypted connection.",
    },
    {
      title: "See every subscription.",
      body: "Leakwise groups recurring charges, flags trials and spots price hikes.",
      label: "Phone preview: subscriptions grouped by Streaming, Fitness and Apps, with a trial and a price increase flagged.",
    },
    {
      title: "Keep or cancel.",
      body: "Get a heads-up 3 days before each renewal. Cancel the ones you don't need in one tap.",
      label: "Phone preview: a renewal alert for NewsDaily with Keep and Cancel buttons, and a confirmation that PhotoPro was cancelled.",
    },
  ],
} as const;

export const features = {
  eyebrow: "Features",
  // Invented heading (the brief gives no h2 copy for this section).
  heading: "Everything that quietly drains your account, caught.",
  items: [
    { id: "renewal", title: "Renewal alerts", body: "Know 3 days before anything renews." },
    {
      id: "trial",
      title: "Trial tracker",
      body: "Every free trial, with a countdown to the day it starts charging.",
    },
    { id: "cancel", title: "One-tap cancel", body: "We handle the cancel flow for 400+ services." },
    {
      id: "radar",
      title: "Price-hike radar",
      body: "Get flagged the moment a subscription quietly gets more expensive.",
    },
    {
      id: "shared",
      title: "Shared plans",
      body: "Split family and roommate subscriptions so nobody pays twice.",
    },
    {
      id: "report",
      title: "Monthly report",
      body: "One clear email: what you pay, what you saved, what to review.",
    },
  ],
} as const;
