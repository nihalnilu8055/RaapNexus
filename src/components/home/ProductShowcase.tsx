"use client";

import React, { useState } from "react";
import {
  Receipt,
  Scale,
  LineChart,
  TrendingUp,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tax" | "audit" | "analysis" | "business">("tax");

  return (
    <section id="showcase" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
            Product Showcase
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            This is what your books look like,{" "}
            <span className="gradient-accent">explained.</span>
          </h2>
          <p className="text-sm sm:text-lg text-[#475569] leading-relaxed">
            Experience how RaapNexus structures tax auditing, financial examinations, and performance models into an intuitive, auditable environment.
          </p>

          {/* Interactive Tab Switcher */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {[
              { id: "tax", label: "Tax Intelligence & Audit", icon: Receipt },
              { id: "audit", label: "Financial Auditing", icon: Scale },
              { id: "analysis", label: "Financial Analysis", icon: LineChart },
              { id: "business", label: "Business Analysis", icon: TrendingUp },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-[#0F172A] text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimal Browser Frame (.win inspired by reference) */}
        <div className="win max-w-5xl mx-auto">
          {/* Window Chrome Bar */}
          <div className="win-bar">
            <div className="flex items-center gap-1.5">
              <span className="win-bar-dot" />
              <span className="win-bar-dot" />
              <span className="win-bar-dot" />
            </div>
            <span className="font-mono text-[11px] text-slate-500 mx-auto">
              raapnexus · financial auditing & tax reconciliation
            </span>
            <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              <Lock className="w-3 h-3" />
              <span className="hidden sm:inline">Audit Isolation Active</span>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-5 sm:p-8 bg-white space-y-6">
            {/* VIEW 1: TAX AUDITING & INTELLIGENCE */}
            {activeTab === "tax" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#0284C7] tracking-wider font-semibold">
                      Tax Auditing & Documentation Subsystem
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mt-0.5">
                      Corporate Tax & VAT Reconciliation — Q3 FY2026
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Filing Pack Prepared</span>
                  </span>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Output VAT Collected</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">$412,850.00</span>
                    <span className="text-[10px] text-emerald-600 font-medium">100% Invoiced</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Input VAT Claimable</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">$228,400.00</span>
                    <span className="text-[10px] text-[#0284C7] font-medium">Vendor TRN Verified</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Net Tax Payable</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">$184,450.00</span>
                    <span className="text-[10px] text-slate-500">Due in 24 Days</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Audit Variances</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-emerald-600 block mt-1">$0.00</span>
                    <span className="text-[10px] text-emerald-600 font-medium">Zero Unmatched Entries</span>
                  </div>
                </div>

                {/* Ledger Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left font-mono text-xs">
                    <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">Tax Jurisdiction</th>
                        <th className="py-2.5 px-3">Tax Reg ID (TRN)</th>
                        <th className="py-2.5 px-3">Taxable Revenue</th>
                        <th className="py-2.5 px-3">Tax Rate</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#0F172A]">UAE FTA Mainland</td>
                        <td className="py-2.5 px-3 text-slate-500">100294819200003</td>
                        <td className="py-2.5 px-3">$8,257,000.00</td>
                        <td className="py-2.5 px-3">5% Standard</td>
                        <td className="py-2.5 px-3 text-emerald-600 font-semibold">Reconciled</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#0F172A]">Saudi ZATCA Phase-2</td>
                        <td className="py-2.5 px-3 text-slate-500">310492819200003</td>
                        <td className="py-2.5 px-3">$4,120,000.00</td>
                        <td className="py-2.5 px-3">15% Standard</td>
                        <td className="py-2.5 px-3 text-emerald-600 font-semibold">Reconciled</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold text-[#0F172A]">DIFC Freezone Entity</td>
                        <td className="py-2.5 px-3 text-slate-500">100938210400001</td>
                        <td className="py-2.5 px-3">$2,840,000.00</td>
                        <td className="py-2.5 px-3">0% Qualifying</td>
                        <td className="py-2.5 px-3 text-[#0284C7] font-semibold">Documented</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* VIEW 2: FINANCIAL AUDITING */}
            {activeTab === "audit" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#0284C7] tracking-wider font-semibold">
                      General Ledger Verification Engine
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mt-0.5">
                      Double-Entry Debit / Credit Reconciliation
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Trial Balance Balanced</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Total GL Debits</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">$14,892,420.00</span>
                    <span className="text-[10px] text-emerald-600 font-medium">Period Closing Verified</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Total GL Credits</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">$14,892,420.00</span>
                    <span className="text-[10px] text-emerald-600 font-medium">Exact Match</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Trial Balance Variance</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-emerald-600 block mt-1">$0.00</span>
                    <span className="text-[10px] text-emerald-600 font-medium">Zero Variance</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Journal Vouchers Verified</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">4,218 Vouchers</span>
                    <span className="text-[10px] text-[#0284C7] font-medium">100% Traced to Source</span>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: FINANCIAL ANALYSIS */}
            {activeTab === "analysis" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#0284C7] tracking-wider font-semibold">
                      Performance Telemetry & Modeling
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mt-0.5">
                      EBITDA Margin Structure & Profitability
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-sky-700 border border-sky-200 flex items-center gap-1.5">
                    <LineChart className="w-3.5 h-3.5" />
                    <span>Real-time Telemetry</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Net ARR Run-Rate</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">$28,450,000</span>
                    <span className="text-[10px] text-emerald-600 font-medium">+18.4% YoY</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">EBITDA Margin</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">32.6%</span>
                    <span className="text-[10px] text-emerald-600 font-medium">Above Industry Target</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Cash Conversion Cycle</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">38 Days</span>
                    <span className="text-[10px] text-emerald-600 font-medium">-6 Days Improvement</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Gross Profit Margin</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">74.2%</span>
                    <span className="text-[10px] text-[#0284C7] font-medium">Healthy Cost Structure</span>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 4: BUSINESS ANALYSIS */}
            {activeTab === "business" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#0284C7] tracking-wider font-semibold">
                      Operational Efficiency & Cost Center Analysis
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mt-0.5">
                      Business Unit Economics & Variance Tracking
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Cost Targets On Track</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">CAC Payback Period</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">6.2 Months</span>
                    <span className="text-[10px] text-emerald-600 font-medium">Top Quartile</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">LTV / CAC Ratio</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">4.8x</span>
                    <span className="text-[10px] text-emerald-600 font-medium">Strong Capital Efficiency</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">OpEx Ratio</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">41.6%</span>
                    <span className="text-[10px] text-slate-500">Within Planned Budget</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-slate-500 block">Inventory Days</span>
                    <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A] block mt-1">26 Days</span>
                    <span className="text-[10px] text-emerald-600 font-medium">Optimized Velocity</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Caption & Navigation Link */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-5xl mx-auto text-xs text-slate-400">
          <p>Conceptual financial platform interface based on verified accounting and ERP structures.</p>
          <Link
            href="/platform"
            className="inline-flex items-center gap-1 font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
          >
            <span>Explore Technical Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
