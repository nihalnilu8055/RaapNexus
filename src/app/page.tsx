import React from "react";
import { Hero } from "@/components/home/Hero";
import { IntroAndEcosystem } from "@/components/home/IntroAndEcosystem";
import { FinancialPillars } from "@/components/home/FinancialPillars";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { EmblemExperience } from "@/components/home/EmblemExperience";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#05080E]">
      {/* Section 1: Minimal, High-Impact First Screen */}
      <Hero />

      {/* Section 2: Financial Platform Introduction & Ecosystem Compatibility */}
      <IntroAndEcosystem />

      {/* Section 3: Four Core Financial Capabilities */}
      <FinancialPillars />

      {/* Section 4: High-Fidelity Product Showcase */}
      <ProductShowcase />

      {/* Section 5: Emblem Experience & Institutional Integrity */}
      <EmblemExperience />

      {/* Section 6: Final Call to Action */}
      <FinalCTA />
    </div>
  );
}