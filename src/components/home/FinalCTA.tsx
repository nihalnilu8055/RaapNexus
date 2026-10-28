"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
          <span>Institutional Engagement</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] sm:leading-[1.12]">
          Make financial decisions with{" "}
          <span className="gradient-accent block sm:inline">
            greater clarity.</span>
        </h2>

        <p className="text-sm sm:text-lg text-[#475569] max-w-xl mx-auto leading-relaxed">
          Connect your business systems to intelligent financial auditing and analysis with enterprise control built in.
        </p>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </Link>
          <Link
            href="/platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 font-semibold text-sm transition-all"
          >
            <span>Explore Architecture</span>
          </Link>
        </div>

        {/* Trust Highlights */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
            <span>Zero direct database writes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
            <span>Cryptographic entity isolation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
            <span>Audit-ready reconciliation traces</span>
          </div>
        </div>
      </div>
    </section>
  );
};
