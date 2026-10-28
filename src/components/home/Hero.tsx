"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Receipt,
  Scale,
  LineChart,
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Layers,
  Sparkles,
} from "lucide-react";

export const Hero: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<"margin" | "tax" | "audit">("margin");

  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 lg:pb-28 bg-[#FAFBFD] overflow-hidden border-b border-slate-200/60">
      {/* Editorial Luxury Ambient Lighting & Delicate Financial Grid Texture */}
      <div className="absolute inset-0 bg-financial-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-gradient-to-br from-[#0284C7]/[0.07] via-[#38BDF8]/[0.04] to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[500px] bg-gradient-to-bl from-blue-500/[0.05] via-sky-400/[0.03] to-transparent rounded-full blur-[150px] pointer-events-none" />

      {/* Full-Width Expansive Container (4–6% horizontal desktop padding) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: EDITORIAL STATEMENT & CTAs (45–48% width) ================= */}
          <div className="lg:col-span-6 xl:col-span-5 space-y-6 sm:space-y-8">
            
            {/* Small Eyebrow Label */}
            <div className="hero-animate-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] ring-4 ring-[#0284C7]/20" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-slate-800">
                TAX INTELLIGENCE · FINANCIAL CLARITY
              </span>
            </div>

            {/* Large 3-4 Line Editorial Headline */}
            <div className="hero-animate-headline space-y-1.5 sm:space-y-2">
              <h1 className="text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[4rem] font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.12] sm:leading-[1.08] break-words">
                See the numbers.
                <span className="block mt-1 text-[#0F172A]">
                  Understand the
                </span>
                <span className="gradient-accent block mt-0.5 sm:mt-1">
                  bigger picture.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="hero-animate-subhead text-base sm:text-lg lg:text-xl text-[#334155] leading-relaxed max-w-xl font-normal">
              Bring tax intelligence, financial auditing, and business analysis together to make more informed decisions with confidence.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="hero-animate-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
              <a
                href="#solutions"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm sm:text-base shadow-[0_4px_18px_rgba(15,23,42,0.15)] hover:shadow-[0_8px_25px_rgba(15,23,42,0.22)] transition-all duration-200 group"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200/90 font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Talk to Our Experts</span>
              </Link>
            </div>

            {/* Understated Trust-Oriented Supporting Details (Zero fabricated metrics/claims) */}
            <div className="pt-2 sm:pt-4 border-t border-slate-200/70">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Read-only ERP interface</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Audit-ready dual control</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>Multi-entity reconciliation</span>
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: SPECTACULAR FINANCIAL INTELLIGENCE VISUAL (52–55% width) ================= */}
          <div className="lg:col-span-6 xl:col-span-7 hero-animate-visual relative">
            
            {/* Visual Backplate Ambient Halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#0284C7]/10 via-[#38BDF8]/10 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Master Executive Console Container */}
            <div className="relative rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_25px_65px_-15px_rgba(15,23,42,0.1),0_0_1px_1px_rgba(15,23,42,0.03)] p-4 sm:p-6 lg:p-7 space-y-5">
              
              {/* Console Top Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <div>
                    <span className="font-semibold text-xs text-[#0F172A] tracking-tight block">
                      Continuous Financial Intelligence
                    </span>
                    <span className="text-[10px] text-slate-400 block font-mono">
                      Subledger Verification Engine · Active
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-[10px] font-mono text-slate-600">
                    FY2026 Q3 · Multi-Entity
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-sky-50 border border-sky-200/80 text-[10px] font-medium text-[#0284C7]">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Dual Control</span>
                  </span>
                </div>
              </div>

              {/* Console Main Section: Financial Analysis Chart */}
              <div className="bg-[#FAFBFD] rounded-xl border border-slate-200/80 p-4 sm:p-5 relative overflow-hidden">
                <div className="flex flex-wrap items-end justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      Consolidated Financial Trajectory
                    </span>
                    <div className="flex items-baseline gap-2.5 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-mono tracking-tight">
                        $18,420,000
                      </span>
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 inline-flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        +14.8% Audited Run-Rate
                      </span>
                    </div>
                  </div>

                  {/* Period Metric Switcher */}
                  <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-[10px] sm:text-[11px] font-medium text-slate-600 overflow-x-auto max-w-full">
                    <button
                      onClick={() => setActiveMetric("margin")}
                      className={`px-2 sm:px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                        activeMetric === "margin"
                          ? "bg-[#0F172A] text-white shadow-xs"
                          : "hover:text-[#0F172A]"
                      }`}
                    >
                      Operating Trajectory
                    </button>
                    <button
                      onClick={() => setActiveMetric("tax")}
                      className={`px-2 sm:px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                        activeMetric === "tax"
                          ? "bg-[#0F172A] text-white shadow-xs"
                          : "hover:text-[#0F172A]"
                      }`}
                    >
                      Tax Position
                    </button>
                    <button
                      onClick={() => setActiveMetric("audit")}
                      className={`px-2 sm:px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                        activeMetric === "audit"
                          ? "bg-[#0F172A] text-white shadow-xs"
                          : "hover:text-[#0F172A]"
                      }`}
                    >
                      Audit Trail
                    </button>
                  </div>
                </div>

                {/* SVG Visual Chart with Smooth Animated Path */}
                <div className="relative h-36 sm:h-44 w-full pt-2">
                  <svg
                    viewBox="0 0 600 160"
                    preserveAspectRatio="none"
                    className="w-full h-full overflow-visible"
                  >
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0284C7" stopOpacity="0.18" />
                        <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0284C7" />
                        <stop offset="50%" stopColor="#0284C7" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>

                    {/* Subtle Horizontal Reference Guidelines */}
                    <line x1="0" y1="40" x2="600" y2="40" stroke="rgba(15,23,42,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="85" x2="600" y2="85" stroke="rgba(15,23,42,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="130" x2="600" y2="130" stroke="rgba(15,23,42,0.06)" strokeDasharray="3 3" />

                    {/* Area Fill */}
                    <path
                      d="M 0,135 C 70,128 140,95 210,105 C 280,115 340,65 410,70 C 470,75 530,35 600,42 L 600,160 L 0,160 Z"
                      fill="url(#chartGradient)"
                    />

                    {/* Animated Line Stroke */}
                    <path
                      d="M 0,135 C 70,128 140,95 210,105 C 280,115 340,65 410,70 C 470,75 530,35 600,42"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="2.75"
                      strokeLinecap="round"
                      className="animate-chart-line"
                    />

                    {/* Coordinate Data Points */}
                    <circle cx="210" cy="105" r="3.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
                    <circle cx="410" cy="70" r="3.5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
                    <circle cx="600" cy="42" r="4.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="3" />
                  </svg>

                  {/* Interactive Floating Tooltip Pill at Recent Peak */}
                  <div className="absolute top-3 right-6 sm:right-12 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-lg px-2.5 py-1.5 shadow-[0_4px_14px_rgba(15,23,42,0.08)] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    <div className="text-[10px] font-mono">
                      <span className="text-slate-500">Peak Margin: </span>
                      <span className="font-bold text-[#0F172A]">34.2% · $4.18M</span>
                    </div>
                  </div>

                  {/* Time Axis Markers */}
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-200/60 mt-2">
                    <span>Q1 FY26</span>
                    <span>Q2 FY26</span>
                    <span>Q3 FY26 (Current)</span>
                    <span>Q4 FY26 (Forecast)</span>
                  </div>
                </div>
              </div>

              {/* Two Layered Strategic Sub-Panels: Tax Intelligence & Audit Findings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* PANEL A: Tax Intelligence Insight Panel (Floating Left) */}
                <div className="animate-float-slow bg-white rounded-xl border border-slate-200/90 p-3.5 sm:p-4 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.05)] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
                      <Receipt className="w-4 h-4 text-[#0284C7]" />
                      <span>Tax Intelligence</span>
                    </div>
                    <span className="text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Filing Pack Ready</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                    <div className="bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                      <span className="text-[9px] uppercase text-slate-400 block">Input VAT Claim</span>
                      <span className="font-bold text-[#0F172A]">$228,400.00</span>
                      <span className="text-[9px] text-emerald-600 font-sans block">100% TRN Validated</span>
                    </div>
                    <div className="bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                      <span className="text-[9px] uppercase text-slate-400 block">Net Tax Payable</span>
                      <span className="font-bold text-[#0F172A]">$184,450.00</span>
                      <span className="text-[9px] text-[#0284C7] font-sans block">Zero Variance</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                    <span className="font-mono">UAE FTA & KSA ZATCA</span>
                    <span className="text-[#0284C7] font-medium">Cross-Border Balanced</span>
                  </div>
                </div>

                {/* PANEL B: Financial Audit & Ledger Findings Panel (Floating Right) */}
                <div className="animate-float-reverse bg-white rounded-xl border border-slate-200/90 p-3.5 sm:p-4 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.05)] space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
                      <Scale className="w-4 h-4 text-[#0284C7]" />
                      <span>Financial Auditing</span>
                    </div>
                    <span className="text-[10px] font-medium text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded border border-sky-200/80">
                      General Ledger Balanced
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                    <div className="bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                      <span className="text-[9px] uppercase text-slate-400 block">Debits / Credits</span>
                      <span className="font-bold text-[#0F172A]">$14,892,420</span>
                      <span className="text-[9px] text-emerald-600 font-sans block">$0.00 Variance</span>
                    </div>
                    <div className="bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                      <span className="text-[9px] uppercase text-slate-400 block">Journal Vouchers</span>
                      <span className="font-bold text-[#0F172A]">12,480 Verified</span>
                      <span className="text-[9px] text-[#0284C7] font-sans block">Source Traced</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                    <span className="font-mono">Continuous Sample Test</span>
                    <span className="text-emerald-600 font-medium font-mono">100% Passed</span>
                  </div>
                </div>

              </div>

              {/* Bottom Operational Telemetry Strip: Business Analysis & Working Capital */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-slate-100 text-[11px] text-slate-600">
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                    <span className="text-slate-400">Cash Conversion:</span>
                    <strong className="text-[#0F172A] font-mono">38 Days (-6d)</strong>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-slate-400">EBITDA Margin:</span>
                    <strong className="text-[#0F172A] font-mono">32.6%</strong>
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  Illustrative demonstration data
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
