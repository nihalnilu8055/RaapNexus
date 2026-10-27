import React from "react";
import { Hero } from "@/components/home/Hero";
import { CompatibilityStrip } from "@/components/home/CompatibilityStrip";
import { ProblemTransformation } from "@/components/home/ProblemTransformation";
import { InteractiveAIDemo } from "@/components/home/InteractiveAIDemo";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { ProductGallery } from "@/components/home/ProductGallery";
import { HowItWorks } from "@/components/home/HowItWorks";
import { EnterpriseSecurity } from "@/components/home/EnterpriseSecurity";
import { BusinessSolutions } from "@/components/home/BusinessSolutions";
import { WhyRaapNexus } from "@/components/home/WhyRaapNexus";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Section B: Cinematic Hero */}
      <Hero />

      {/* Section C: Compatibility Strip */}
      <CompatibilityStrip />

      {/* Section D: Problem & Transformation */}
      <ProblemTransformation />

      {/* Section E: Interactive AI Demo */}
      <InteractiveAIDemo />

      {/* Section F: The Five Core Capabilities */}
      <CoreCapabilities />

      {/* Section G: Premium Product Gallery (9 Screens) */}
      <ProductGallery />

      {/* Section H: How It Works */}
      <HowItWorks />

      {/* Section I: Enterprise Security Architecture */}
      <EnterpriseSecurity />

      {/* Section J: Business Solutions */}
      <BusinessSolutions />

      {/* Section K: Why RaapNexus */}
      <WhyRaapNexus />

      {/* Section L: Frequently Asked Questions */}
      <FAQSection />

      {/* Section M: Final Conversion */}
      <FinalCTA />
    </div>
  );
}
