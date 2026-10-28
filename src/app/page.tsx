import React from "react";
import { Hero } from "@/components/home/Hero";
import { FinanceIntro } from "@/components/home/FinanceIntro";
import { FinancialPillars } from "@/components/home/FinancialPillars";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Section 1: Minimal Hero */}
      <Hero />

      {/* Section 2: Finance Platform Introduction & Interactive Plain-Words Query Demonstration */}
      <FinanceIntro />

      {/* Section 3: The Four Core Financial Capabilities */}
      <FinancialPillars />

      {/* Section 4: Product Showcase (Clean Minimal Browser Frame) */}
      <ProductShowcase />

      {/* Section 5: Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
