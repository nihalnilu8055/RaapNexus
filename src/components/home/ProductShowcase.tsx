"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Scale,
  Receipt,
  TrendingUp,
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Download,
  ArrowRight,
  Maximize2,
} from "lucide-react";

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"tax" | "audit" | "financial" | "business">("tax");

  return (
    <section className="py-20 sm:py-28 bg-[#070B12] relative overflow-hidden border-t border-b border-[#D4AF37]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
            Product Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FBF9F5] tracking-tight">
            Unified financial intelligence in action.
          </h2>
          <p className="text-sm sm:text-base text-[#C8CED8] font-normal leading-relaxed">
            Experience how RaapNexus structures tax auditing, financial examinations, and performance models into an intuitive, auditable environment.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: "tax", label: "Tax Intelligence & Audit", icon: Receipt },
            { id: "audit", label: "Financial Auditing", icon: Scale },
            { id: "financial", label: "Financial Analysis", icon: BarChart3 },
            { id: "business", label: "Business Analysis", icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-[#121D30] text-[#E5C378] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15 ring-1 ring-[#D4AF37]/40"
                    : "bg-[#0B111D] text-[#7E8B9E] border-white/[0.06] hover:text-[#FBF9F5] hover:border-white/20"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* High-Fidelity Conceptual Financial Interface Frame */}
        <div className="rounded-3xl bg-[#0B111D] border border-[#D4AF37]/30 shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Window Chrome Header */}
          <div className="px-4 sm:px-6 py-3.5 bg-[#05080E] border-b border-[#D4AF37]/15 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
              </div>
              <span className="text-[11px] sm:text-xs font-mono text-[#7E8B9E] ml-2">
                raapnexus://financial-intelligence/{activeTab}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#121D30] text-[#E5C378] border border-[#D4AF37]/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Audit Isolation Active</span>
              </span>
              <span className="text-[#7E8B9E] hidden sm:inline">Tenant #TN-8821</span>
            </div>
          </div>

          {/* Dynamic Window Content According to Active Tab */}
          <div className="p-5 sm:p-7 space-y-6">
            {/* VIEW 1: TAX AUDITING & INTELLIGENCE */}
            {activeTab === "tax" && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#C5A880] tracking-wider font-semibold">
                      Tax Auditing & Documentation Subsystem
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#FBF9F5] mt-0.5">
                      Corporate Tax & VAT Reconciliation — Q3 FY2026
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded text-xs font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Filing Pack Prepared</span>
                    </span>
                  </div>
                </div>

                {/* Tax KPI Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Output VAT Collected</span>
                    <span className="text-lg font-bold font-mono text-[#FBF9F5] block mt-1">$412,850.00</span>
                    <span className="text-[10px] text-emerald-400">100% Invoiced</span>
                  </div>
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Input VAT Claimable</span>
                    <span className="text-lg font-bold font-mono text-[#FBF9F5] block mt-1">$228,400.00</span>
                    <span className="text-[10px] text-[#C5A880]">Vendor TRN Verified</span>
                  </div>
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Net Tax Payable</span>
                    <span className="text-lg font-bold font-mono text-[#E5C378] block mt-1">$184,450.00</span>
                    <span className="text-[10px] text-[#7E8B9E]">Due in 24 Days</span>
                  </div>
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Audit Variances</span>
                    <span className="text-lg font-bold font-mono text-emerald-400 block mt-1">$0.00</span>
                    <span className="text-[10px] text-emerald-400">Zero Unmatched Entries</span>
                  </div>
                </div>

                {/* Tax Ledger Reconciliation Table */}
                <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-[#070B12]">
                  <table className="w-full text-left font-mono text-xs">
                    <thead className="bg-[#0E1726] text-[#7E8B9E] text-[10px] uppercase">
                      <tr>
                        <th className="py-2.5 px-3">Tax Jurisdiction</th>
                        <th className="py-2.5 px-3">Tax Reg ID (TRN)</th>
                        <th className="py-2.5 px-3">Taxable Revenue</th>
                        <th className="py-2.5 px-3">Tax Rate</th>
                        <th className="py-2.5 px-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04] text-[#C8CED8]">
                      <tr>
                        <td className="py-2 px-3 font-semibold text-[#FBF9F5]">UAE FTA Mainland</td>
                        <td className="py-2 px-3 text-[#7E8B9E]">100294819200003</td>
                        <td className="py-2 px-3">$8,257,000.00</td>
                        <td className="py-2 px-3">5% Standard</td>
                        <td className="py-2 px-3 text-emerald-400">Reconciled</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-[#FBF9F5]">Saudi ZATCA Phase-2</td>
                        <td className="py-2 px-3 text-[#7E8B9E]">310492819200003</td>
                        <td className="py-2 px-3">$4,120,000.00</td>
                        <td className="py-2 px-3">15% Standard</td>
                        <td className="py-2 px-3 text-emerald-400">Reconciled</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-semibold text-[#FBF9F5]">DIFC Freezone Entity</td>
                        <td className="py-2 px-3 text-[#7E8B9E]">100938210400001</td>
                        <td className="py-2 px-3">$2,840,000.00</td>
                        <td className="py-2 px-3">0% Qualifying</td>
                        <td className="py-2 px-3 text-[#E5C378]">Documented</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* VIEW 2: FINANCIAL AUDITING */}
            {activeTab === "audit" && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#C5A880] tracking-wider font-semibold">
                      General Ledger Verification
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#FBF9F5] mt-0.5">
                      Period Closing Examination & Trial Balance Integrity
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#121D30] text-[#E5C378] border border-[#D4AF37]/20">
                    IFRS & GAAP Validated
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Total General Ledger Debits</span>
                    <span className="text-lg font-bold font-mono text-[#FBF9F5] block mt-1">$4,982,450.00</span>
                    <span className="text-[10px] text-emerald-400">100% Reconciled</span>
                  </div>
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Total General Ledger Credits</span>
                    <span className="text-lg font-bold font-mono text-[#FBF9F5] block mt-1">$4,982,450.00</span>
                    <span className="text-[10px] text-emerald-400">100% Reconciled</span>
                  </div>
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Net Balance Discrepancy</span>
                    <span className="text-lg font-bold font-mono text-emerald-400 block mt-1">$0.00</span>
                    <span className="text-[10px] text-[#7E8B9E]">Balanced Equation</span>
                  </div>
                </div>

                {/* Audit Journal Trail */}
                <div className="bg-[#070B12] rounded-xl border border-white/[0.06] p-4 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-[#7E8B9E] text-[10px] uppercase border-b border-white/[0.06] pb-2">
                    <span>Audit Checkpoint</span>
                    <span>Result</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#FBF9F5]">1010-01 Cash & Bank vs Bank Statements</span>
                    <span className="text-emerald-400 font-semibold">Matched (Zero Variance)</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/[0.04]">
                    <span className="text-[#FBF9F5]">1200-00 Trade Accounts Receivable Subledger</span>
                    <span className="text-emerald-400 font-semibold">Tied to Invoices ($1,215,300)</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-[#FBF9F5]">9999-00 Suspense & Clearing Balances</span>
                    <span className="text-[#E5C378] font-semibold">$0.00 (All Allocated)</span>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: FINANCIAL ANALYSIS */}
            {activeTab === "financial" && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#C5A880] tracking-wider font-semibold">
                      Performance & Profitability Modeling
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#FBF9F5] mt-0.5">
                      Consolidated Revenue, EBITDA & Margin Structure
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#121D30] text-[#E5C378] border border-[#D4AF37]/20">
                    Rolling FY2026
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Revenue YTD</span>
                    <span className="text-lg font-bold font-mono text-[#FBF9F5] block mt-1">$48,200,000</span>
                    <span className="text-[10px] text-emerald-400">+14.2% YoY</span>
                  </div>
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Gross Profit</span>
                    <span className="text-lg font-bold font-mono text-[#FBF9F5] block mt-1">$20,147,600</span>
                    <span className="text-[10px] text-[#E5C378]">41.8% Margin</span>
                  </div>
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Operating EBITDA</span>
                    <span className="text-lg font-bold font-mono text-[#E5C378] block mt-1">$16,484,400</span>
                    <span className="text-[10px] text-emerald-400">34.2% Margin</span>
                  </div>
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Cash Liquidity</span>
                    <span className="text-lg font-bold font-mono text-[#FBF9F5] block mt-1">$12,840,000</span>
                    <span className="text-[10px] text-emerald-400">Safe Headroom</span>
                  </div>
                </div>

                {/* Visual Telemetry Bars */}
                <div className="bg-[#070B12] rounded-xl border border-white/[0.06] p-4 space-y-3">
                  <span className="text-xs font-semibold text-[#FBF9F5] block">Subsidiary Margin Telemetry</span>
                  <div className="space-y-2 font-mono text-xs">
                    <div>
                      <div className="flex justify-between text-[#C8CED8] mb-1">
                        <span>Middle East Regional Hub (GCC)</span>
                        <span className="text-[#E5C378]">$28.4M (58.9%)</span>
                      </div>
                      <div className="w-full bg-[#0E1726] h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#D4AF37] to-[#E5C378] h-2 rounded-full w-[59%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[#C8CED8] mb-1">
                        <span>European Operations SA</span>
                        <span className="text-[#C5A880]">$14.2M (29.5%)</span>
                      </div>
                      <div className="w-full bg-[#0E1726] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#9E825A] h-2 rounded-full w-[30%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 4: BUSINESS ANALYSIS */}
            {activeTab === "business" && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#C5A880] tracking-wider font-semibold">
                      Operational Performance & Telemetry
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#FBF9F5] mt-0.5">
                      Key Business Indicators & Unit Economics
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#121D30] text-[#E5C378] border border-[#D4AF37]/20">
                    Live Operational Trace
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Active Subsidiaries</span>
                    <span className="text-lg font-bold font-mono text-[#FBF9F5] block mt-1">7 Group Entities</span>
                    <span className="text-[10px] text-emerald-400">Multi-Currency Consolidated</span>
                  </div>
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Working Capital Velocity</span>
                    <span className="text-lg font-bold font-mono text-[#E5C378] block mt-1">14.2 Days</span>
                    <span className="text-[10px] text-emerald-400">Optimal Liquidity</span>
                  </div>
                  <div className="bg-[#0E1726] border border-white/[0.06] p-3 rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#7E8B9E]">Target Achievement</span>
                    <span className="text-lg font-bold font-mono text-emerald-400 block mt-1">111.4%</span>
                    <span className="text-[10px] text-emerald-400">+11.4% vs Plan</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#070B12] border border-white/[0.06] text-xs text-[#C8CED8] space-y-1">
                  <span className="text-[#E5C378] font-bold font-mono block">Executive Decision Support:</span>
                  <p className="leading-relaxed">
                    RaapNexus connects transactional ERP data directly to high-level strategic indicators, enabling CFOs and managing directors to uncover operational variances before month-end closing.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Window Footer Action Strip */}
          <div className="px-5 py-3.5 bg-[#070B12] border-t border-[#D4AF37]/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#7E8B9E] font-mono text-[11px] text-center sm:text-left">
              Conceptual financial platform interface based on verified accounting and ERP structures.
            </span>
            <Link
              href="/platform"
              className="inline-flex items-center gap-1.5 text-[#E5C378] hover:text-[#FBF9F5] font-bold transition-colors shrink-0"
            >
              <span>Explore Platform Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};