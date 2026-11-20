import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Features } from "@/components/Features";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LeakStat } from "@/components/LeakStat";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" tabIndex={-1} className="overflow-x-clip outline-none">
        <Hero />
        <LeakStat />
        <HowItWorks />
        <Features />
        <SavingsCalculator />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
