"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Bot,
  TrendingUp,
  FileSpreadsheet,
  FileText,
  CheckCircle2,
  Clock,
  Building2,
  ShieldCheck,
  ChevronRight,
  Check,
  Receipt,
  Layers,
} from "lucide-react";

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"sales" | "invoice">("sales");
  const [excelExported, setExcelExported] = useState(false);
  const [invoiceApproved, setInvoiceApproved] = useState(false);

  const handleExportExcel = () => {
    setExcelExported(true);
    setTimeout(() => setExcelExported(false), 2500);
  };

  const handleApproveInvoice = () => {
    setInvoiceApproved(true);
  };

  const branches = [
    { name: "Dubai Downtown", code: "DXB-01", amount: "$78,500", pct: 85, growth: "+12.1%" },
    { name: "Abu Dhabi Mall", code: "AUH-02", amount: "$52,120", pct: 60, growth: "+8.6%" },
    { name: "Sharjah Central Hub", code: "SHJ-03", amount: "$31,800", pct: 38, growth: "+6.0%" },
    { name: "Doha City Center", code: "DOH-04", amount: "$22,000", pct: 25, growth: "-12.0%" },
  ];

  return (
    <section className="relative min-h-[90vh] pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#07111F] flex items-center">
      {/* Background Subtle Grid & Ambient Glows */}
      <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-[450px] h-[450px] bg-[#42D9F5]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-[450px] h-[450px] bg-[#9B8CFF]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-5 left-1/3 w-80 h-80 bg-[#42D9F5]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1728] border border-[#1E314B] shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#42D9F5] animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#42D9F5]">
                The Conversational Business Layer
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Your entire business.{" "}
              <span className="gradient-text-cyan-violet block mt-1">
                One conversation away.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#8E9EBA] max-w-xl font-normal leading-relaxed">
              Connect your business systems to AI assistants and transform everyday questions into live insights, analysis-ready reports, and validated business actions.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-bold text-sm sm:text-base shadow-xl shadow-[#42D9F5]/25 hover:shadow-[#42D9F5]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href="/platform"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0B1728] hover:bg-[#101F35] border border-[#1E314B] text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:border-[#42D9F5]/50 group"
              >
                <span>Explore the Platform</span>
                <ChevronRight className="w-4 h-4 text-[#8E9EBA] group-hover:text-[#42D9F5] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </div>

            {/* Value Highlights Under CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#8E9EBA]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#42D9F5]" />
                <span>Zero direct database writes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#42D9F5]" />
                <span>Tenant & role isolation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#42D9F5]" />
                <span>Excel-ready export</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Product Interface */}
          <div className="lg:col-span-6 relative w-full">
            {/* Ambient Interface Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#42D9F5]/20 to-[#9B8CFF]/20 rounded-2xl blur-xl opacity-75" />

            {/* Interactive Product Window */}
            <div className="relative rounded-2xl bg-[#0B1728] border border-[#1E314B] shadow-2xl shadow-black/70 overflow-hidden">
              {/* Window Header */}
              <div className="px-3 sm:px-4 py-3 bg-[#07111F] border-b border-[#1E314B] flex items-center justify-between gap-2">
                <div className="flex items-center space-x-2 shrink-0">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27C93F]" />
                  <span className="ml-1.5 text-[10px] sm:text-xs font-mono text-[#8E9EBA] hidden xs:inline truncate">
                    raapnexus-agent // live
                  </span>
                </div>

                {/* Simulation Switcher Tabs */}
                <div className="flex items-center bg-[#101F35] p-0.5 rounded-lg border border-[#1E314B]/70 text-[11px] sm:text-xs shrink-0">
                  <button
                    onClick={() => setActiveTab("sales")}
                    className={`px-2.5 py-1 rounded-md transition-all font-semibold ${
                      activeTab === "sales"
                        ? "bg-[#07111F] text-[#42D9F5] shadow-sm"
                        : "text-[#8E9EBA] hover:text-white"
                    }`}
                  >
                    <span className="hidden sm:inline">Branch </span>Analytics
                  </button>
                  <button
                    onClick={() => setActiveTab("invoice")}
                    className={`px-2.5 py-1 rounded-md transition-all font-semibold ${
                      activeTab === "invoice"
                        ? "bg-[#07111F] text-[#9B8CFF] shadow-sm"
                        : "text-[#8E9EBA] hover:text-white"
                    }`}
                  >
                    <span className="hidden sm:inline">Action </span>Workflow
                  </button>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-3.5 sm:p-5 space-y-4">
                {activeTab === "sales" ? (
                  /* SALES QUERY DEMO */
                  <div className="space-y-4">
                    {/* Conversational User Prompt */}
                    <div className="flex items-start gap-3 bg-[#101F35]/70 border border-[#1E314B] rounded-xl p-3 sm:p-3.5">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#07111F] border border-[#1E314B] flex items-center justify-center text-[#42D9F5] shrink-0 font-bold text-xs">
                        CEO
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-xs text-[#8E9EBA] mb-0.5">
                          <span className="font-semibold text-white/90">Executive Prompt</span>
                          <span className="text-[10px] font-mono text-[#8E9EBA]">Yesterday, 18:30</span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-white truncate sm:whitespace-normal">
                          &ldquo;What were sales by branch yesterday?&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* AI Agent Execution Badge */}
                    <div className="flex items-center justify-between text-xs px-1 text-[#8E9EBA]">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-[#42D9F5]" />
                        <span className="text-white/80 font-medium text-xs">RaapNexus Intelligence Engine</span>
                        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                          ERP Verified
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#42D9F5]">0.42s latency</span>
                    </div>

                    {/* Live Dashboard Card */}
                    <div className="rounded-xl bg-[#07111F]/95 border border-[#1E314B] p-3.5 sm:p-4 space-y-4">
                      {/* KPI Summary */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[10px] sm:text-xs text-[#8E9EBA] font-medium uppercase tracking-wider">
                            Total Consolidated Sales
                          </p>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-2xl sm:text-3xl font-extrabold text-white">
                              $184,420
                            </span>
                            <span className="text-xs font-semibold text-emerald-400 flex items-center gap-0.5">
                              <TrendingUp className="w-3 h-3" />
                              +11.4% vs target
                            </span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="inline-block text-[10px] sm:text-[11px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#101F35] text-[#8E9EBA] border border-[#1E314B]">
                            Oct 26, 2026
                          </span>
                        </div>
                      </div>

                      {/* Visual Branch Comparison Bars */}
                      <div className="space-y-2.5 pt-1">
                        {branches.map((b) => (
                          <div key={b.code} className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="text-white font-medium flex items-center gap-1.5 truncate max-w-[200px]">
                                <Building2 className="w-3.5 h-3.5 text-[#8E9EBA] shrink-0" />
                                <span className="truncate">{b.name}</span>
                                <span className="text-[10px] font-mono text-[#8E9EBA] hidden sm:inline">
                                  ({b.code})
                                </span>
                              </span>
                              <div className="flex items-center gap-2 shrink-0">
                                <span className="font-semibold text-white">{b.amount}</span>
                                <span className={`text-[10px] font-mono ${b.growth.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}>
                                  {b.growth}
                                </span>
                              </div>
                            </div>
                            {/* Bar */}
                            <div className="w-full h-2 bg-[#101F35] rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] rounded-full transition-all duration-700"
                                style={{ width: `${b.pct}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Bar */}
                      <div className="pt-2 border-t border-[#1E314B] flex items-center justify-between text-xs gap-2">
                        <span className="text-[#8E9EBA] text-[11px] truncate">
                          General Ledger Reconciled
                        </span>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={handleExportExcel}
                            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                              excelExported
                                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                                : "bg-[#101F35] text-white hover:text-[#42D9F5] border-[#1E314B] hover:border-[#42D9F5]/40"
                            }`}
                          >
                            {excelExported ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Exported!</span>
                              </>
                            ) : (
                              <>
                                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Export .XLSX</span>
                              </>
                            )}
                          </button>

                          <Link
                            href="/solutions#sales"
                            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#42D9F5]/10 text-[#42D9F5] border border-[#42D9F5]/30 hover:bg-[#42D9F5]/20 font-semibold transition-all text-xs"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Full Report</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* INVOICE ACTION WORKFLOW DEMO */
                  <div className="space-y-4">
                    {/* User Prompt */}
                    <div className="flex items-start gap-3 bg-[#101F35]/70 border border-[#1E314B] rounded-xl p-3 sm:p-3.5">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#07111F] border border-[#1E314B] flex items-center justify-center text-[#9B8CFF] shrink-0 font-bold text-xs">
                        OPS
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between text-xs text-[#8E9EBA] mb-0.5">
                          <span className="font-semibold text-white/90">Action Request</span>
                          <span className="text-[10px] font-mono text-[#8E9EBA]">Dual Sign-Off Gate</span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-white truncate sm:whitespace-normal">
                          &ldquo;Create an invoice for Al Noor Trading for 20 units.&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Staged Draft Transaction Card */}
                    <div className="rounded-xl bg-[#07111F]/95 border border-[#9B8CFF]/30 p-3.5 sm:p-4 space-y-3 relative overflow-hidden">
                      <div className="flex items-center justify-between border-b border-[#1E314B] pb-2.5 gap-2">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#9B8CFF] font-semibold">
                            Draft #INV-2026-9014
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-white truncate max-w-[200px] sm:max-w-none">
                            Al Noor Trading LLC (CUST-04921)
                          </h4>
                        </div>
                        <span
                          className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-full font-semibold flex items-center gap-1 shrink-0 ${
                            invoiceApproved
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                              : "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                          }`}
                        >
                          {invoiceApproved ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Approved & Posted
                            </>
                          ) : (
                            <>
                              <Clock className="w-3.5 h-3.5" />
                              Awaiting Sign-Off
                            </>
                          )}
                        </span>
                      </div>

                      {/* Transaction Details */}
                      <div className="grid grid-cols-3 gap-2 text-xs py-1">
                        <div className="bg-[#101F35] p-2 rounded-lg border border-[#1E314B]">
                          <span className="text-[10px] text-[#8E9EBA] block">SKU</span>
                          <span className="font-semibold text-white truncate block text-[11px]">
                            Server Blade X8
                          </span>
                        </div>
                        <div className="bg-[#101F35] p-2 rounded-lg border border-[#1E314B]">
                          <span className="text-[10px] text-[#8E9EBA] block">Qty</span>
                          <span className="font-semibold text-white text-[11px]">20 Units</span>
                        </div>
                        <div className="bg-[#101F35] p-2 rounded-lg border border-[#1E314B]">
                          <span className="text-[10px] text-[#8E9EBA] block">Total (+5% VAT)</span>
                          <span className="font-bold text-[#42D9F5] text-[11px] sm:text-xs">$17,850.00</span>
                        </div>
                      </div>

                      {/* Validation Status */}
                      <div className="bg-[#0B1728] p-2.5 rounded-lg border border-[#1E314B] space-y-1 text-xs">
                        <div className="flex items-center justify-between text-[#8E9EBA]">
                          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Business Rules Validated (6/6 Checks Passed)
                          </span>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-[#8E9EBA]">
                          Credit headroom $57.5k OK. 142 units in stock. TRN #1002948192 verified.
                        </p>
                      </div>

                      {/* Review & Approve Button */}
                      <div className="pt-1 flex items-center justify-between gap-2">
                        <span className="text-[10px] text-[#8E9EBA] truncate">
                          Dual control: CFO / Controller role
                        </span>
                        <button
                          onClick={handleApproveInvoice}
                          disabled={invoiceApproved}
                          className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 ${
                            invoiceApproved
                              ? "bg-emerald-600 text-white cursor-default"
                              : "bg-gradient-to-r from-[#9B8CFF] to-[#42D9F5] text-[#07111F] hover:shadow-lg hover:shadow-[#9B8CFF]/20 active:scale-95"
                          }`}
                        >
                          {invoiceApproved ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Authorized & Committed</span>
                            </>
                          ) : (
                            <>
                              <ShieldCheck className="w-3.5 h-3.5" />
                              <span>Review & Approve</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
