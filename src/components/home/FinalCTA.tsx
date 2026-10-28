"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, FileCheck, Layers } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-[#FAFBFD] border-t border-slate-200/80 relative overflow-hidden">
      {/* Subtle Financial Grid Texture & Soft Ambient Glow */}
      <div className="absolute inset-0 bg-financial-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#0284C7]/[0.06] via-[#38BDF8]/[0.04] to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Full-Width Expansive Container (4–6% horizontal padding) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10 text-center">
        
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
            <span>Institutional Engagement</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.1]">
            Make financial decisions with{" "}
            <span className="gradient-accent inline-block">
              greater clarity.
            </span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Connect your ERP and subledgers to intelligent tax auditing, financial examination, and business analysis—with enterprise dual control built in from day one.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm sm:text-base shadow-[0_4px_18px_rgba(15,23,42,0.15)] hover:shadow-[0_8px_25px_rgba(15,23,42,0.22)] transition-all duration-200 group"
            >
              <span>Schedule an Enterprise Consultation</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/platform"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200/90 font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200"
            >
              <span>Explore Technical Architecture</span>
            </Link>
          </div>

          {/* Trust Assurances */}
          <div className="pt-6 sm:pt-8 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Zero direct database writes</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Cryptographic tenant & entity isolation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>Continuous audit trail reconciliation</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
