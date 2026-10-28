"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Scale,
  Receipt,
  LineChart,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  PieChart,
  Layers,
} from "lucide-react";

export const FinancialPillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "tax-auditing",
      number: "01",
      title: "Tax Auditing & Tax Intelligence",
      tagline: "Tax record organization & compliance readiness",
      shortDesc:
        "Help businesses organize tax-related financial records, review relevant documentation, identify discrepancies, and support tax compliance workflows.",
      icon: Receipt,
      features: [
        "Systematic review of tax-relevant financial records",
        "Discrepancy and variance detection across filing periods",
        "Structured documentation support for regulatory workflows",
      ],
      preview: {
        badge: "Tax Intelligence Engine",
        metric1Label: "Tax Accounts Reconciled",
        metric1Value: "100%",
        metric2Label: "Potential Discrepancies",
        metric2Value: "0 Detected",
        items: [
          { label: "Corporate VAT Subledger", status: "Reconciled", code: "ACC-TAX-01" },
          { label: "Withholding Tax Provisions", status: "Verified", code: "ACC-WHT-04" },
          { label: "Cross-Border Sales Invoices", status: "Documented", code: "DOC-XB-88" },
        ],
      },
    },
    {
      id: "financial-auditing",
      number: "02",
      title: "Financial Auditing",
      tagline: "Structured reviews & transaction examination",
      shortDesc:
        "Support structured financial reviews, transaction examination, reconciliation workflows, and the identification of potential inconsistencies.",
      icon: Scale,
      features: [
        "Granular transaction examination across nested subledgers",
        "Automated reconciliation between balance sheets and journals",
        "Early warning detection of journal variances or suspense entries",
      ],
      preview: {
        badge: "General Ledger Audit Trace",
        metric1Label: "Debit / Credit Balance",
        metric1Value: "$4,982,450.00",
        metric2Label: "Suspense Account Discrepancy",
        metric2Value: "$0.00",
        items: [
          { label: "Operating Bank Cash vs GL", status: "Balanced", code: "1010-01" },
          { label: "Trade Receivables Aging", status: "Verified", code: "1200-00" },
          { label: "Accounts Payable Clearing", status: "Matched", code: "2010-00" },
        ],
      },
    },
    {
      id: "financial-analysis",
      number: "03",
      title: "Financial Analysis",
      tagline: "Performance reporting & profitability modeling",
      shortDesc:
        "Help users understand financial performance through organized reporting, historical financial trends, profitability analysis, and decision-support insights.",
      icon: LineChart,
      features: [
        "Comprehensive multi-period profitability and margin modeling",
        "Working capital trend evaluation and liquidity monitoring",
        "CFO-ready variance analytics comparing actuals against budget",
      ],
      preview: {
        badge: "Financial Performance Model",
        metric1Label: "Operating EBITDA Margin",
        metric1Value: "34.2%",
        metric2Label: "YTD Revenue Growth",
        metric2Value: "+14.2%",
        items: [
          { label: "Consolidated Revenue Run-Rate", status: "$48.2M YTD", code: "FIN-REV" },
          { label: "Gross Profit Margin", status: "41.8%", code: "FIN-GPM" },
          { label: "Cash Conversion Cycle", status: "22.4 Days", code: "FIN-CCC" },
        ],
      },
    },
    {
      id: "business-analysis",
      number: "04",
      title: "Business Analysis",
      tagline: "Operational evaluation & key business indicators",
      shortDesc:
        "Help businesses evaluate operational and financial performance, interpret key business indicators, and make better-informed decisions.",
      icon: TrendingUp,
      features: [
        "Cross-subsidiary operational telemetry and branch performance",
        "Product line contribution margin and volume velocity",
        "Decision-support frameworks connecting operations to enterprise ROI",
      ],
      preview: {
        badge: "Operational Executive Telemetry",
        metric1Label: "Active Business Entities",
        metric1Value: "7 Subsidiaries",
        metric2Label: "Operational Efficiency",
        metric2Value: "98.4%",
        items: [
          { label: "Regional Unit Performance", status: "+11.4% Target", code: "OPS-REG" },
          { label: "Customer Margin Contribution", status: "Optimal", code: "OPS-CAC" },
          { label: "Inventory Velocity Index", status: "14.2 Turn Days", code: "OPS-WMS" },
        ],
      },
    },
  ];

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 sm:py-28 bg-[#05080E] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D4AF37]/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#9E825A]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
            The Four Core Pillars
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FBF9F5] tracking-tight">
            Institutional financial capabilities.
          </h2>
          <p className="text-sm sm:text-base text-[#C8CED8] font-normal leading-relaxed">
            Engineered to help businesses audit, understand, analyze, and optimize their total financial performance.
          </p>
        </div>

        {/* 4 Pillars Navigation Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${
                  isActive
                    ? "bg-[#0E1726] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10"
                    : "bg-[#0B111D]/80 border-white/[0.06] hover:border-[#D4AF37]/40 text-[#7E8B9E] hover:text-[#FBF9F5]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-[#D4AF37]/20 text-[#E5C378]"
                          : "bg-[#05080E] text-[#7E8B9E]"
                      }`}
                    >
                      {pillar.number}
                    </span>
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? "text-[#D4AF37]" : "text-[#7E8B9E] group-hover:text-[#E5C378]"
                      }`}
                    />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#FBF9F5] line-clamp-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-[#7E8B9E] mt-1 line-clamp-2">
                    {pillar.tagline}
                  </p>
                </div>

                {isActive && (
                  <div className="w-full h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#9E825A] absolute bottom-0 left-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Panel */}
        <div className="rounded-3xl bg-[#0B111D] border border-[#D4AF37]/20 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Editorial Pillar Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5A880]">
                  Pillar {current.number} of 04
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FBF9F5]">
                  {current.title}
                </h3>
                <p className="text-sm font-semibold text-[#E5C378]">
                  {current.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#C8CED8] leading-relaxed">
                {current.shortDesc}
              </p>

              <div className="space-y-3 pt-2">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#FBF9F5]/90 font-medium leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href={`/solutions#${current.id}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#E5C378] hover:text-[#FBF9F5] transition-colors"
                >
                  <span>Learn more about {current.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Financial Artifact & Preview Telemetry */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#070B12] border border-[#D4AF37]/20 p-5 sm:p-6 shadow-xl space-y-4 font-sans">
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs">
                  <div className="flex items-center gap-2 text-[#E5C378] font-mono text-[11px] font-semibold">
                    <CurrentIcon className="w-3.5 h-3.5" />
                    <span>{current.preview.badge}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#D4AF37] bg-[#121D30] px-2 py-0.5 rounded border border-[#D4AF37]/20">
                    System Verified
                  </span>
                </div>

                {/* 2 KPI Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-[#0E1726] border border-white/[0.06] rounded-xl p-3 text-left">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#7E8B9E] block truncate">
                      {current.preview.metric1Label}
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-mono text-[#FBF9F5] block mt-1">
                      {current.preview.metric1Value}
                    </span>
                  </div>
                  <div className="bg-[#0E1726] border border-white/[0.06] rounded-xl p-3 text-left">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#7E8B9E] block truncate">
                      {current.preview.metric2Label}
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-mono text-[#E5C378] block mt-1">
                      {current.preview.metric2Value}
                    </span>
                  </div>
                </div>

                {/* Structured Subledger Records */}
                <div className="space-y-2 pt-1 font-mono text-xs">
                  {current.preview.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0B111D] border border-white/[0.04] p-2.5 rounded-lg flex items-center justify-between text-[11px]"
                    >
                      <span className="text-[#C8CED8] truncate pr-2">{item.label}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-[#7E8B9E]">{item.code}</span>
                        <span className="text-[#E5C378] font-semibold">{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtle Disclaimer Pill */}
                <p className="text-[10px] text-[#7E8B9E]/80 text-center pt-1 font-mono">
                  Illustrative platform simulation. Connects directly with verified enterprise ledgers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};