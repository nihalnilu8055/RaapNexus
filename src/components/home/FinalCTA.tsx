"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#05080E] relative overflow-hidden border-t border-[#D4AF37]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#D4AF37]/[0.05] via-[#C5A880]/[0.03] to-[#D4AF37]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1726] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C378]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span>Institutional Engagement</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#FBF9F5] tracking-tight leading-[1.12]">
          Make every financial{" "}
          <span className="gradient-text-nexus block mt-1 sm:inline">
            decision clearer.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#C8CED8] max-w-xl mx-auto leading-relaxed">
          Discover a more connected approach to financial intelligence with RaapNexus.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full bg-gradient-to-r from-[#00C4FF] via-[#38BDF8] to-[#0284C7] text-[#05080E] font-extrabold text-sm sm:text-base shadow-xl shadow-[#00C4FF]/25 hover:shadow-[#00C4FF]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <Link
            href="/platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0B111D] hover:bg-[#121D30] text-[#FBF9F5] border border-[#00C4FF]/25 hover:border-[#00C4FF]/50 font-semibold text-sm sm:text-base transition-all"
          >
            <span>Explore the Platform</span>
          </Link>
        </div>

        {/* Trust & Governance Highlights */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#7E8B9E]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00C4FF]" />
            <span>Zero direct database writes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00C4FF]" />
            <span>Dedicated architecture advisory</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00C4FF]" />
            <span>Multi-entity tenant isolation</span>
          </div>
        </div>
      </div>
    </section>
  );
};