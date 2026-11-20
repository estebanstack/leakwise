import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leakwise-mu.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: base }];
}
