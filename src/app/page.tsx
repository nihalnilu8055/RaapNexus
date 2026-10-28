import React from "react";
import { Hero } from "@/components/home/Hero";
import { FinancialPillars } from "@/components/home/FinancialPillars";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { WhyRaapNexus } from "@/components/home/WhyRaapNexus";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. Dramatic, Editorial Full-Width Hero */}
      <Hero />

      {/* 2. Solutions: Four Elegant Offerings (Tax, Audit, Financial Analysis, Business Analysis) */}
      <FinancialPillars />

      {/* 3. Interactive Showcase: Clean Financial Intelligence Interface with Working Tabs */}
      <ProductShowcase />

      {/* 4. Why RaapNexus: Three Concise Value Propositions with Strong Typography */}
      <WhyRaapNexus />

      {/* 5. Final CTA: Bold, Full-Width Engagement Section */}
      <FinalCTA />
    </div>
  );
}
