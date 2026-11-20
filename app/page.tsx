import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";

// Placeholder anchors, replaced by real sections in later phases.
const placeholders = [
  { id: "the-leak", label: "The leak" },
  { id: "how", label: "How it works" },
  { id: "features", label: "Features" },
  { id: "calculator", label: "Savings calculator" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "get-started", label: "Get started" },
] as const;

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="overflow-x-clip outline-none">
        <Hero />
        {placeholders.map((s) => (
          <section key={s.id} id={s.id} className="mx-auto max-w-[1200px] px-6 py-10">
            <h2 className="text-sm font-medium text-muted">{s.label}</h2>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
