import { Nav } from "@/components/nav";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { WhySection } from "@/components/why-section";
import { DimensionsSection } from "@/components/dimensions-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works";
import { QuoteSection } from "@/components/quote-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <StatsSection />
      <WhySection />
      <DimensionsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <QuoteSection />
      <CTASection />
      <Footer />
    </main>
  );
}
