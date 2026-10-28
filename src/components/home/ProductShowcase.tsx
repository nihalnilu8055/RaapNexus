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
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tax" | "audit" | "analysis" | "business">("tax");

  return (
    <section id="showcase" className="py-20 sm:py-28 lg:py-32 bg-[#FAFBFD] border-t border-b border-slate-200/80 relative">
      {/* Full-Width Expansive Container (4–6% horizontal desktop padding) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-mono uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
              <span>Interactive Platform Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
              This is what your books look like,{" "}
              <span className="gradient-accent">explained.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Experience how RaapNexus structures tax auditing, financial examinations, and performance models into an intuitive, auditable environment.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-full border border-slate-200/80 shadow-2xs shrink-0">
            {[
              { id: "tax", label: "Tax Intelligence", icon: Receipt },
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
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? "bg-[#0F172A] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Expansive Full-Width Browser Console Frame (.win) */}
        <div className="win w-full">
          {/* Window Chrome Bar */}
          <div className="win-bar">
            <div className="flex items-center gap-1.5">
              <span className="win-bar-dot" />
              <span className="win-bar-dot" />
              <span className="win-bar-dot" />
            </div>
            <span className="font-mono text-xs text-slate-500 mx-auto hidden sm:inline">
              raapnexus · continuous audit console · {activeTab.toUpperCase()} subsystem
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
              <Lock className="w-3 h-3" />
              <span>Audit Isolation Active</span>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-5 sm:p-8 lg:p-10 bg-white space-y-8">
            
            {/* VIEW 1: TAX AUDITING & INTELLIGENCE */}
            {activeTab === "tax" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#0284C7] tracking-wider font-semibold">
                      Tax Auditing & Documentation Subsystem
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-0.5">
                      Corporate Tax & VAT Reconciliation — Q3 FY2026
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Filing Pack Prepared</span>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 hidden sm:inline-flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>TRN 100% Validated</span>
                    </span>
                  </div>
                </div>

                {/* KPI Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Output VAT Collected</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">$412,850.00</span>
                    <span className="text-xs text-emerald-600 font-medium">100% Invoiced to Ledger</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Input VAT Claimable</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">$228,400.00</span>
                    <span className="text-xs text-[#0284C7] font-medium">Vendor TRN Verified</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Net Tax Payable</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">$184,450.00</span>
                    <span className="text-xs text-slate-500">Statutory Deadline: In 24 Days</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Audit Variances</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-600 block">$0.00</span>
                    <span className="text-xs text-emerald-600 font-medium">Zero Unmatched Entries</span>
                  </div>
                </div>

                {/* Ledger & Tax Authority Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left font-mono text-xs sm:text-sm">
                    <thead className="bg-[#FAFBFD] text-slate-500 text-[11px] uppercase border-b border-slate-200">
                      <tr>
                        <th className="py-3 px-4 font-semibold">Tax Jurisdiction</th>
                        <th className="py-3 px-4 font-semibold">Tax Reg ID (TRN)</th>
                        <th className="py-3 px-4 font-semibold">Taxable Revenue</th>
                        <th className="py-3 px-4 font-semibold">Tax Rate</th>
                        <th className="py-3 px-4 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#0F172A]">UAE FTA Mainland</td>
                        <td className="py-3.5 px-4 text-slate-500">100294819200003</td>
                        <td className="py-3.5 px-4">$8,257,000.00</td>
                        <td className="py-3.5 px-4">5% Standard</td>
                        <td className="py-3.5 px-4 text-emerald-600 font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Reconciled</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#0F172A]">Saudi ZATCA Phase-2</td>
                        <td className="py-3.5 px-4 text-slate-500">310492819200003</td>
                        <td className="py-3.5 px-4">$4,120,000.00</td>
                        <td className="py-3.5 px-4">15% Standard</td>
                        <td className="py-3.5 px-4 text-emerald-600 font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Reconciled</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#0F172A]">DIFC Freezone Entity</td>
                        <td className="py-3.5 px-4 text-slate-500">100938210400001</td>
                        <td className="py-3.5 px-4">$2,840,000.00</td>
                        <td className="py-3.5 px-4">0% Qualifying</td>
                        <td className="py-3.5 px-4 text-[#0284C7] font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                          <span>Documented</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* VIEW 2: FINANCIAL AUDITING */}
            {activeTab === "audit" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#0284C7] tracking-wider font-semibold">
                      General Ledger Verification Engine
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-0.5">
                      Double-Entry Debit / Credit Continuous Reconciliation
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Trial Balance Balanced</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Total GL Debits</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">$14,892,420.00</span>
                    <span className="text-xs text-emerald-600 font-medium">Period Closing Verified</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Total GL Credits</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">$14,892,420.00</span>
                    <span className="text-xs text-emerald-600 font-medium">Exact Match</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Trial Balance Variance</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-600 block">$0.00</span>
                    <span className="text-xs text-emerald-600 font-medium">Zero Variance Detected</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Journal Vouchers Verified</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">12,480 Vouchers</span>
                    <span className="text-xs text-[#0284C7] font-medium">100% Traced to Source</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-mono text-slate-600 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Auditing Engine Status: Real-time sampling active across all subledgers.</span>
                  </div>
                  <span className="text-slate-400">Cryptographic audit log ID: 0x9f81...a38b</span>
                </div>
              </div>
            )}

            {/* VIEW 3: FINANCIAL ANALYSIS */}
            {activeTab === "analysis" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#0284C7] tracking-wider font-semibold">
                      Performance Telemetry & Modeling
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-0.5">
                      EBITDA Margin Structure & Profitability Modeling
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200 flex items-center gap-1.5">
                    <LineChart className="w-3.5 h-3.5" />
                    <span>Real-time Telemetry</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Net ARR Run-Rate</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">$28,450,000</span>
                    <span className="text-xs text-emerald-600 font-medium">+18.4% YoY Growth</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">EBITDA Margin</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">32.6%</span>
                    <span className="text-xs text-emerald-600 font-medium">Above Industry Target</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Cash Conversion Cycle</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">38 Days</span>
                    <span className="text-xs text-emerald-600 font-medium">-6 Days Improvement</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Gross Profit Margin</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">74.2%</span>
                    <span className="text-xs text-[#0284C7] font-medium">Healthy Cost Structure</span>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 4: BUSINESS ANALYSIS */}
            {activeTab === "business" && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#0284C7] tracking-wider font-semibold">
                      Operational Efficiency & Cost Center Analysis
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-0.5">
                      Business Unit Economics & Variance Tracking
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Cost Targets On Track</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">CAC Payback Period</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">6.2 Months</span>
                    <span className="text-xs text-emerald-600 font-medium">Top Quartile Velocity</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">LTV / CAC Ratio</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">4.8x</span>
                    <span className="text-xs text-emerald-600 font-medium">Strong Capital Efficiency</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">OpEx Ratio</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">41.6%</span>
                    <span className="text-xs text-slate-500">Within Planned Operating Budget</span>
                  </div>
                  <div className="bg-[#FAFBFD] border border-slate-200/80 p-4 sm:p-5 rounded-xl space-y-1">
                    <span className="text-[11px] uppercase font-mono text-slate-500 block">Inventory Days</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] block">26 Days</span>
                    <span className="text-xs text-emerald-600 font-medium">Optimized Turnover</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Caption & Navigation Link */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>Conceptual financial platform interface based on verified accounting and ERP structures.</p>
          <Link
            href="/platform"
            className="inline-flex items-center gap-1.5 font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
          >
            <span>Explore Technical Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};
