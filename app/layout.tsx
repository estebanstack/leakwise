import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const title = "Leakwise — Stop paying for things you forgot about.";
const description =
  "Leakwise finds every subscription and free trial on your cards, warns you before they renew, and cancels the ones you don't use, in one tap.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://leakwise.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Leakwise",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1020",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-amber px-4 py-2.5 text-sm font-semibold text-ink focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
