"use client";

import React from "react";
import { Receipt, Scale, LineChart, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export const FinancialPillars: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "Tax Auditing & Tax Intelligence",
      tagline: "Statutory Documentation & VAT Alignment",
      desc: "Organizes tax-relevant financial records, validates vendor Tax Registration Numbers (TRNs), reconciles input/output VAT subledgers, and prepares auditable filing packs.",
      highlight: "Cross-border VAT reconciliation & deduction validation",
      icon: Receipt,
      href: "/solutions#tax-auditing",
    },
    {
      num: "02",
      title: "Financial Auditing",
      tagline: "Ledger Examination & Variance Detection",
      desc: "Continuously reconciles general ledger debits and credits, balances journal vouchers against source documents, and surfaces anomalies before accounting period close.",
      highlight: "Zero-discrepancy trial balance & voucher tracing",
      icon: Scale,
      href: "/solutions#financial-auditing",
    },
    {
      num: "03",
      title: "Financial Analysis",
      tagline: "Profitability & Performance Modeling",
      desc: "Translates transactional ledger history into multidimensional profitability models, EBITDA margin structures, cash conversion telemetry, and working capital cycles.",
      highlight: "Scenario-based forecasting & margin telemetry",
      icon: LineChart,
      href: "/solutions#financial-analysis",
    },
    {
      num: "04",
      title: "Business Analysis",
      tagline: "Operational Unit Economics",
      desc: "Evaluates operational cost centers, revenue run-rate variance, customer acquisition efficiency, and inventory turns to guide strategic executive decisions.",
      highlight: "Driver-based operational intelligence & KPI tracking",
      icon: TrendingUp,
      href: "/solutions#business-analysis",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
            The Four Core Pillars
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Institutional financial capabilities.
          </h2>
          <p className="text-sm sm:text-lg text-[#475569] leading-relaxed">
            Engineered to help businesses audit, understand, analyze, and optimize their total financial performance.
          </p>
        </div>

        {/* Minimal 4-Pillar Editorial Grid (Inspired by Reference Whisper Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="pt-6 border-t border-slate-200/90 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-center text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-400">
                      {item.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] leading-snug group-hover:text-[#0284C7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:text-[#0284C7] transition-colors"
                  >
                    <span>Explore Pillar</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
