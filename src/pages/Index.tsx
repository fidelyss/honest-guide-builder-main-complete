import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import WhatIsSection from "@/components/WhatIsSection";
import ProductsSection from "@/components/ProductsSection";
import ProsConsSection from "@/components/ProsConsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LegitimacySection from "@/components/LegitimacySection";
import CTASection from "@/components/CTASection";
import DisclaimerSection from "@/components/DisclaimerSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EmpathySection />
      <WhatIsSection />
      <ProductsSection />
      <ProsConsSection />
      <TestimonialsSection />
      <LegitimacySection />
      <CTASection />
      <DisclaimerSection />
    </main>
  );
};

export default Index;
