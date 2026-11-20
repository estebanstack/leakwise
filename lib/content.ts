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
