"use client";

import React from "react";
import { Receipt, Scale, LineChart, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const FinancialPillars: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "Tax Auditing & Tax Intelligence",
      tagline: "Statutory Filing Alignment & VAT Reconciliation",
      desc: "Organizes cross-entity tax-relevant records, validates vendor Tax Registration Numbers (TRNs), reconciles input/output VAT subledgers, and prepares auditable filing packs.",
      highlight: "Automated input VAT recovery & multi-jurisdiction TRN checks",
      icon: Receipt,
      href: "/solutions#tax-auditing",
    },
    {
      num: "02",
      title: "Financial Auditing",
      tagline: "Continuous Ledger Verification & Variance Detection",
      desc: "Continuously reconciles general ledger debits and credits, balances journal vouchers against source records, and surfaces anomalies before accounting period close.",
      highlight: "Zero-discrepancy trial balance & 100% voucher-to-source tracing",
      icon: Scale,
      href: "/solutions#financial-auditing",
    },
    {
      num: "03",
      title: "Financial Analysis",
      tagline: "Multidimensional Performance & Margin Modeling",
      desc: "Translates transactional ledger history into multidimensional profitability models, EBITDA margin structures, cash conversion telemetry, and working capital cycles.",
      highlight: "Scenario-based forecasting, margin telemetry & cash trajectory",
      icon: LineChart,
      href: "/solutions#financial-analysis",
    },
    {
      num: "04",
      title: "Business Analysis",
      tagline: "Operational Cost Centers & Unit Economics",
      desc: "Evaluates operational cost centers, revenue run-rate variance, customer acquisition efficiency, and inventory turns to guide strategic executive decisions.",
      highlight: "Driver-based operational intelligence & business unit economics",
      icon: TrendingUp,
      href: "/solutions#business-analysis",
    },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-28 lg:py-32 bg-white relative">
      {/* Full-Width Expansive Container (4–6% horizontal padding) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-16 pb-8 border-b border-slate-200/80">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-mono uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
              <span>Core Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
              Institutional financial capabilities.
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Engineered to help enterprises audit, understand, analyze, and optimize their total financial performance.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#0284C7] transition-colors group"
            >
              <span>View Comprehensive Solution Directory</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 12-Column Flexible Grid for the 4 Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#FAFBFD] hover:bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.07)] transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#0284C7] shadow-2xs group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#0284C7] transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug group-hover:text-[#0284C7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Card Footer: Highlight & Navigation */}
                <div className="pt-5 mt-6 border-t border-slate-200/60 space-y-3">
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                    <span>{item.highlight}</span>
                  </div>

                  <div>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:text-[#0284C7] transition-colors"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
