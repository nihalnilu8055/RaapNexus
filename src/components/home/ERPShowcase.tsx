"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Layers,
  Activity,
  CheckCircle2,
  Cpu,
  BarChart3,
  ExternalLink,
  Laptop,
  Lock,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export const ERPShowcase: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeModule, setActiveModule] = useState<"finance" | "ops" | "tax">("finance");

  return (
    <section id="erp-showcase" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/60">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none rounded-full blur-[130px] opacity-25 -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(14,165,233,0.35), rgba(2,132,199,0.12), transparent 70%)",
        }}
      />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs sm:text-[13px] font-body font-medium text-[#0284C7] mb-3 shadow-2xs">
            <Laptop className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Interactive Platform Experience</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-heading font-bold text-[#0F172A] tracking-[-0.025em] leading-[1.18]">
            See RaapNexus{" "}
            <span className="gradient-accent inline-block">in Action</span>
          </h2>

          <p className="mt-3 text-[15px] sm:text-base lg:text-[17px] text-slate-600 font-body font-normal leading-[1.65]">
            Go beyond the overview and explore the ERP experience for yourself.
          </p>
        </div>

        {/* Large Premium ERP Showcase Card */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.1)] overflow-hidden">
          
          {/* Top Window Chrome Bar */}
          <div className="px-5 py-3.5 bg-slate-50/90 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-mono text-slate-600 ml-3 hidden sm:inline font-medium">
                raapnexus.app &middot; erp-unified-console.live
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Protected Demo Environment
              </span>
              <Link
                href="/erp-demo"
                className="hidden md:inline-flex items-center gap-1 text-xs font-semibold text-[#0284C7] hover:underline"
              >
                <span>Full Screen</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card Main Grid (Description & Actions Left, Interactive Preview Right) */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Core Value Labels & Actions */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Three Specific Labels */}
              <div className="space-y-4">
                
                {/* 1. Unified Operations */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-sky-300 transition-all group">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-100/80 text-[#0284C7] flex items-center justify-center font-bold">
                      <Layers className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-heading font-semibold text-[#0F172A] tracking-tight">
                      Unified Operations
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-body font-normal leading-relaxed pl-11">
                    Connect general ledgers, multi-entity transactions, and supply chain records into a synchronized single source of truth.
                  </p>
                </div>

                {/* 2. Business Insights */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-sky-300 transition-all group">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center font-bold">
                      <BarChart3 className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-heading font-semibold text-[#0F172A] tracking-tight">
                      Business Insights
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-body font-normal leading-relaxed pl-11">
                    Gain forward-looking clarity with automated variance detection, EBITDA sensitivity modeling, and cash conversion telemetry.
                  </p>
                </div>

                {/* 3. Connected Workflows */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-sky-300 transition-all group">
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100/80 text-indigo-700 flex items-center justify-center font-bold">
                      <Cpu className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <h3 className="text-base sm:text-[17px] font-heading font-semibold text-[#0F172A] tracking-tight">
                      Connected Workflows
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-body font-normal leading-relaxed pl-11">
                    Enforce institutional dual-control approvals, zero direct database writes, and continuous audit trail reconciliation.
                  </p>
                </div>

              </div>

              {/* CTAs */}
              <div className="pt-2 space-y-3">
                <Link
                  href="/erp-demo"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-body font-semibold text-sm shadow-[0_4px_16px_rgba(15,23,42,0.14)] hover:shadow-[0_8px_24px_rgba(2,132,199,0.25)] active:scale-[0.98] transition-all duration-200 group interactive-target"
                >
                  <span>Launch ERP Demo</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1 text-sky-400" />
                </Link>

                <div className="flex items-center justify-between px-1">
                  <Link
                    href="/platform"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0284C7] transition-colors group"
                  >
                    <span>Discover the Platform</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-slate-400 group-hover:text-[#0284C7]" />
                  </Link>

                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                    Opens separately in demo environment
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Dashboard Preview Graphic & Interactive Chart */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-5 sm:p-7 text-white shadow-xl relative overflow-hidden border border-slate-800">
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-financial-grid opacity-20 pointer-events-none" />

                {/* Dashboard Nav Bar */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-400 flex items-center justify-center font-bold text-xs">
                      RN
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white font-mono block">RaapNexus ERP Enterprise</span>
                      <span className="text-[10px] text-slate-400 font-mono block">Multi-Entity General Ledger</span>
                    </div>
                  </div>

                  {/* Module Selector */}
                  <div className="inline-flex p-1 bg-slate-800/90 rounded-lg text-[10px] font-mono border border-slate-700 gap-1">
                    <button
                      onClick={() => setActiveModule("finance")}
                      className={`px-2.5 py-1 rounded transition-colors ${activeModule === "finance" ? "bg-sky-500 text-white font-bold" : "text-slate-400 hover:text-white"}`}
                    >
                      Accounting
                    </button>
                    <button
                      onClick={() => setActiveModule("ops")}
                      className={`px-2.5 py-1 rounded transition-colors ${activeModule === "ops" ? "bg-sky-500 text-white font-bold" : "text-slate-400 hover:text-white"}`}
                    >
                      Operations
                    </button>
                    <button
                      onClick={() => setActiveModule("tax")}
                      className={`px-2.5 py-1 rounded transition-colors ${activeModule === "tax" ? "bg-sky-500 text-white font-bold" : "text-slate-400 hover:text-white"}`}
                    >
                      Tax Engine
                    </button>
                  </div>
                </div>

                {/* 3 Metric Summary Blocks */}
                <div className="relative z-10 grid grid-cols-3 gap-3 my-4">
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 font-mono">
                    <span className="text-[9px] uppercase text-slate-400 block">Operating Cash Flow</span>
                    <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">$4,820,000</span>
                    <span className="text-[10px] text-emerald-400 font-semibold block mt-0.5">+14.2% YoY</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 font-mono">
                    <span className="text-[9px] uppercase text-slate-400 block">Subledger Variance</span>
                    <span className="text-sm sm:text-base font-bold text-emerald-400 mt-0.5 block">$0.00 Net</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Zero Discrepancy</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 font-mono">
                    <span className="text-[9px] uppercase text-slate-400 block">Order Execution</span>
                    <span className="text-sm sm:text-base font-bold text-sky-400 mt-0.5 block">99.8%</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">On-Time Fulfillment</span>
                  </div>
                </div>

                {/* Subtle Animated Chart Illustration */}
                <div className="relative z-10 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>OPERATIONAL PERFORMANCE TELEMETRY</span>
                    <span className="text-sky-400 font-semibold">Real-Time Ingestion</span>
                  </div>
                  <div className="h-24 w-full relative">
                    <svg viewBox="0 0 500 90" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="erpChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,70 Q 120,65 240,42 T 380,26 T 500,10 L 500,90 L 0,90 Z"
                        fill="url(#erpChartGradient)"
                      />
                      <path
                        d="M 0,70 Q 120,65 240,42 T 380,26 T 500,10"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="380" cy="26" r="4" fill="#38BDF8" className="animate-ping opacity-60" />
                      <circle cx="380" cy="26" r="3" fill="#38BDF8" />
                    </svg>
                  </div>
                </div>

                {/* Workflows / Activity Feed Preview */}
                <div className="relative z-10 mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Dual-control approval gate: 14,820 transactions verified
                  </span>
                  <Link
                    href="/erp-demo"
                    className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1"
                  >
                    <span>Launch Interactive Demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
