"use client";

import React, { useState } from "react";
import {
  FileSpreadsheet,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Sliders,
  Layers,
  Clock,
  ShieldAlert,
  ShieldCheck,
  TrendingUp,
  FileX,
  FileCheck,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type ComparisonDimension = "all" | "speed" | "accuracy" | "tax" | "decision";

interface DimensionFilter {
  id: ComparisonDimension;
  label: string;
}

const filters: DimensionFilter[] = [
  { id: "all", label: "Full Comparison" },
  { id: "speed", label: "Reporting Speed" },
  { id: "accuracy", label: "Ledger Accuracy" },
  { id: "tax", label: "Tax Compliance" },
  { id: "decision", label: "Executive Usability" },
];

export const ExploreTheDifference: React.FC = () => {
  const [activeMode, setActiveMode] = useState<"split" | "before" | "after">("split");
  const [selectedFilter, setSelectedFilter] = useState<ComparisonDimension>("all");

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/60">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12 pb-6 border-b border-slate-200/80">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284C7] font-semibold">
              <Sliders className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Explore The Difference</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
              Conventional reporting vs.{" "}
              <span className="gradient-accent inline-block">RaapNexus intelligence.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Compare a traditional, delayed accounting packet with RaapNexus's structured, continuous financial analysis.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2 bg-slate-100/80 p-1 rounded-xl border border-slate-200 shrink-0">
            <button
              onClick={() => setActiveMode("split")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeMode === "split"
                  ? "bg-white text-[#0F172A] shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setActiveMode("before")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeMode === "before"
                  ? "bg-rose-50 text-rose-700 shadow-2xs border border-rose-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Conventional Report
            </button>
            <button
              onClick={() => setActiveMode("after")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeMode === "after"
                  ? "bg-sky-50 text-[#0284C7] shadow-2xs border border-sky-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              RaapNexus Intelligence
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-slate-400 mr-1">Focus Dimension:</span>
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedFilter === f.id
                  ? "bg-[#0284C7] text-white shadow-xs font-semibold"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/60"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* ================= LEFT: CONVENTIONAL FINANCIAL REPORT ================= */}
          {(activeMode === "split" || activeMode === "before") && (
            <div className="rounded-2xl border border-rose-200/80 bg-[#FFFDFD] p-5 sm:p-7 shadow-2xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-rose-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-rose-100/70 border border-rose-200 text-rose-600 flex items-center justify-center">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-rose-600 font-bold block">
                        Traditional Approach
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        Conventional Financial Reporting
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-semibold">
                    Delayed &middot; Static
                  </span>
                </div>

                {/* Simulated Cluttered Spreadsheet UI */}
                <div className="rounded-xl border border-slate-200 bg-white p-3 font-mono text-[11px] space-y-2 overflow-x-auto shadow-2xs">
                  <div className="text-[10px] text-slate-400 border-b border-slate-100 pb-1 flex justify-between">
                    <span>Export_Consolidated_v4_FINAL(1).xlsx</span>
                    <span className="text-rose-500 font-bold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Formula Warnings Detected
                    </span>
                  </div>

                  <table className="w-full text-left text-slate-600 border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-[10px] uppercase text-slate-400 bg-slate-50/80">
                        <th className="p-1.5">Acct ID</th>
                        <th className="p-1.5">Description</th>
                        <th className="p-1.5">Debit</th>
                        <th className="p-1.5">Credit</th>
                        <th className="p-1.5">Variance</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-[10px]">
                      <tr>
                        <td className="p-1.5 text-slate-400">GL-10492</td>
                        <td className="p-1.5">Vendor Payables - Unaudited</td>
                        <td className="p-1.5">$84,120.00</td>
                        <td className="p-1.5">—</td>
                        <td className="p-1.5 text-rose-600 font-bold">#REF!</td>
                      </tr>
                      <tr className="bg-rose-50/40">
                        <td className="p-1.5 text-slate-400">GL-20311</td>
                        <td className="p-1.5">VAT Suspense Acct (Pending TRN)</td>
                        <td className="p-1.5">—</td>
                        <td className="p-1.5">$18,400.00</td>
                        <td className="p-1.5 text-amber-600 font-bold">Unmatched</td>
                      </tr>
                      <tr>
                        <td className="p-1.5 text-slate-400">GL-39100</td>
                        <td className="p-1.5">Intercompany Clearing (Entity B)</td>
                        <td className="p-1.5">$142,000.00</td>
                        <td className="p-1.5">$138,500.00</td>
                        <td className="p-1.5 text-rose-600 font-bold">-$3,500.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Drawbacks Breakdown */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <Clock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>15–25 Day Reporting Lag:</strong> Financial figures are assembled weeks after period close, leaving leadership with historical hindsight rather than forward guidance.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Manual Spreadsheet Vulnerabilities:</strong> Fragile formulas, broken cell links, and unverified vendor TRNs risk statutory audit penalties.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <FileX className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Opaque Black-Box Numbers:</strong> Board members and CFOs cannot drill from aggregate numbers into transactional source records without custom IT queries.</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200/80 text-[11px] font-mono text-rose-800 flex items-center justify-between">
                <span>Operational State: Reactive close cycle</span>
                <span className="font-bold">Manual reconciliation</span>
              </div>
            </div>
          )}

          {/* ================= RIGHT: RAAPNEXUS FINANCIAL INTELLIGENCE ================= */}
          {(activeMode === "split" || activeMode === "after") && (
            <div className="rounded-2xl border border-sky-300 bg-white p-5 sm:p-7 shadow-[0_20px_45px_-15px_rgba(2,132,199,0.15)] flex flex-col justify-between space-y-6 ring-1 ring-sky-200">
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#0284C7] text-white flex items-center justify-center shadow-xs">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-bold block">
                        Institutional Grade
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        RaapNexus Financial Intelligence
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Continuous &middot; Audited
                  </span>
                </div>

                {/* Structured Intelligence UI */}
                <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 space-y-3 font-mono text-[11px] shadow-2xs">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 border-b border-slate-200/80 pb-2">
                    <span className="font-bold text-[#0F172A]">CONTINUOUS SUBLEDGER BALANCING</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Zero Discrepancy
                    </span>
                  </div>

                  {/* 3 Live Telemetry Blocks */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2 rounded-lg bg-white border border-slate-200">
                      <span className="text-[9px] text-slate-400 uppercase block">General Ledger</span>
                      <span className="text-xs font-bold text-[#0F172A]">$14,892,420</span>
                      <span className="text-[9px] text-emerald-600 block mt-0.5">Debit = Credit</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-slate-200">
                      <span className="text-[9px] text-slate-400 uppercase block">Tax Variance</span>
                      <span className="text-xs font-bold text-emerald-600">$0.00 Net</span>
                      <span className="text-[9px] text-[#0284C7] block mt-0.5">TRN Validated</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-slate-200">
                      <span className="text-[9px] text-slate-400 uppercase block">EBITDA Margin</span>
                      <span className="text-xs font-bold text-indigo-600">32.6%</span>
                      <span className="text-[9px] text-slate-500 block mt-0.5">+18.4% YoY</span>
                    </div>
                  </div>
                </div>

                {/* Clear Advantages Breakdown */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Real-Time Continuous Sampling:</strong> Eliminate the frantic month-end crunch. Every transaction is verified continuously with zero ledger variance.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                    <span><strong>100% Tax Authority Compliance:</strong> Vendor TRNs, multi-jurisdiction VAT/GST treatments, and input/output tax balance packs are pre-verified before submission.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-600">
                    <TrendingUp className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span><strong>Deterministic Scenario Modeling:</strong> Model cash runway, simulate tax implications of cross-border expansion, and test pricing decisions with institutional rigor.</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200/80 text-[11px] font-mono text-[#0284C7] flex items-center justify-between">
                <span>Enterprise Governance: Dual-control workflows</span>
                <span className="font-bold">Read-only connector</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
