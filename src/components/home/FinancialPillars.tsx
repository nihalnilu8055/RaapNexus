"use client";

import React, { useState } from "react";
import {
  Receipt,
  Scale,
  LineChart,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Sliders,
  ChevronRight,
  Activity,
  Layers,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedFinancialBackground } from "@/components/ui/AnimatedFinancialBackground";

interface ServiceCard {
  id: string;
  num: string;
  title: string;
  tagline: string;
  desc: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  icon: React.ElementType;
  route: string;
  stats: { label: string; value: string }[];
  renderMiniVis: () => React.ReactNode;
}

export const FinancialPillars: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeCard, setActiveCard] = useState<string>("tax");

  const services: ServiceCard[] = [
    {
      id: "tax",
      num: "01",
      title: "Tax Intelligence",
      tagline: "Clearer visibility into tax-related financial information",
      desc: "Organizes multi-jurisdiction financial records, verifies vendor Tax Registration Numbers (TRNs), and reconciles input and output VAT ledgers before filing deadlines.",
      badge: "Audit-Ready Filing",
      badgeColor: "bg-sky-50 text-[#0284C7] border-sky-200/80",
      accentColor: "#0284C7",
      icon: Receipt,
      route: "/solutions#tax",
      stats: [
        { label: "TRN Accuracy", value: "100% Validated" },
        { label: "VAT Variance", value: "$0.00 Net" },
        { label: "Filing Pack", value: "Auto-Generated" },
      ],
      renderMiniVis: () => (
        <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-500 font-medium">VAT Reconciliation</span>
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              100% Matched
            </span>
          </div>
          {/* Animated Bar Visualization */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Input VAT ($228k)</span>
              <span>Output VAT ($412k)</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden flex">
              <div className="h-full bg-sky-500 rounded-l-full transition-all duration-500" style={{ width: "42%" }} />
              <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: "35%" }} />
              <div className="h-full bg-slate-300 rounded-r-full" style={{ width: "23%" }} />
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px] text-slate-500 font-mono">
            <span>Jurisdiction: UAE FTA & KSA ZATCA</span>
            <span className="text-[#0284C7] font-semibold">Zero Discrepancy</span>
          </div>
        </div>
      ),
    },
    {
      id: "audit",
      num: "02",
      title: "Financial Auditing",
      tagline: "Structured financial review and continuous clarity",
      desc: "Continuously balances general ledger debits and credits, verifies journal vouchers against source records, and highlights discrepancies before period close.",
      badge: "Continuous Sampling",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
      accentColor: "#10B981",
      icon: Scale,
      route: "/solutions#audit",
      stats: [
        { label: "Debits / Credits", value: "$14.89M Verified" },
        { label: "Trial Balance", value: "Zero Variance" },
        { label: "Sample Coverage", value: "100% Passed" },
      ],
      renderMiniVis: () => (
        <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-500 font-medium">Double-Entry Ledger Flow</span>
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Debit = Credit
            </span>
          </div>
          {/* Dual Balance Visual */}
          <div className="grid grid-cols-2 gap-2 text-center font-mono">
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
              <span className="text-[9px] uppercase text-slate-400 block">Total Debits</span>
              <span className="text-xs font-bold text-[#0F172A]">$14,892,420.00</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
              <span className="text-[9px] uppercase text-slate-400 block">Total Credits</span>
              <span className="text-xs font-bold text-[#0F172A]">$14,892,420.00</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>Sampling: 12,480 Vouchers</span>
            <span className="text-emerald-600 font-semibold">Variance: $0.00</span>
          </div>
        </div>
      ),
    },
    {
      id: "analysis",
      num: "03",
      title: "Financial Analysis",
      tagline: "Understand financial performance, margins, and trends",
      desc: "Transforms ledger data into multidimensional profitability models, EBITDA margin structures, cash conversion telemetry, and scenario forecasting.",
      badge: "Scenario Forecasting",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
      accentColor: "#6366F1",
      icon: LineChart,
      route: "/solutions#analysis",
      stats: [
        { label: "Peak Margin", value: "34.2% ($4.18M)" },
        { label: "Cash Conversion", value: "38 Days (-6d)" },
        { label: "Forecast Accuracy", value: "Deterministic" },
      ],
      renderMiniVis: () => (
        <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-500 font-medium">Trajectory & Margin Wave</span>
            <span className="text-indigo-600 font-bold font-mono">+18.4% YoY</span>
          </div>
          {/* Animated SVG Sparkline */}
          <div className="h-10 w-full relative">
            <svg viewBox="0 0 280 40" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="visMarginGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,32 Q 40,30 70,22 T 140,24 T 210,12 T 280,6 L 280,40 L 0,40 Z"
                fill="url(#visMarginGrad)"
              />
              <path
                d="M 0,32 Q 40,30 70,22 T 140,24 T 210,12 T 280,6"
                fill="none"
                stroke="#6366F1"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="210" cy="12" r="3.5" fill="#6366F1" className="animate-ping opacity-75" />
              <circle cx="210" cy="12" r="3" fill="#6366F1" />
            </svg>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100">
            <span>EBITDA Margin: 32.6%</span>
            <span className="text-indigo-600 font-semibold">Runway: 32 Mo</span>
          </div>
        </div>
      ),
    },
    {
      id: "business",
      num: "04",
      title: "Business Analysis",
      tagline: "Turn operational metrics into actionable executive insights",
      desc: "Evaluates operational cost centers, revenue run-rate variance, customer acquisition efficiency, and inventory turns to deliver strategic decision intelligence.",
      badge: "Unit Economics",
      badgeColor: "bg-cyan-50 text-cyan-800 border-cyan-200/80",
      accentColor: "#06B6D4",
      icon: TrendingUp,
      route: "/solutions#business",
      stats: [
        { label: "CAC Payback", value: "6.2 Months" },
        { label: "LTV / CAC", value: "4.8x Ratio" },
        { label: "Cost Centers", value: "Full Visibility" },
      ],
      renderMiniVis: () => (
        <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-500 font-medium">Unit Economics Telemetry</span>
            <span className="text-cyan-700 font-bold">4.8x LTV/CAC</span>
          </div>
          {/* Mini Metric Bars */}
          <div className="grid grid-cols-3 gap-1.5 text-center font-mono">
            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
              <span className="text-[8px] uppercase text-slate-400 block">Payback</span>
              <span className="text-[11px] font-bold text-[#0F172A]">6.2 mo</span>
            </div>
            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
              <span className="text-[8px] uppercase text-slate-400 block">Gross Mgn</span>
              <span className="text-[11px] font-bold text-[#0F172A]">72.4%</span>
            </div>
            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
              <span className="text-[8px] uppercase text-slate-400 block">Net Churn</span>
              <span className="text-[11px] font-bold text-emerald-600">-1.2%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>Operational Efficiency: Optimal</span>
            <span className="text-cyan-700 font-semibold">Driver-Based</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="solutions" className="py-14 sm:py-16 lg:py-20 bg-white relative overflow-hidden border-b border-slate-200/60">
      {/* Animated Atmospheric Background */}
      <AnimatedFinancialBackground variant="solutions" />

      {/* Full-Width Expansive Container (4–6% horizontal padding) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-slate-200/80">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284C7] font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Interactive Service Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
              Intelligence engineered for{" "}
              <span className="gradient-accent inline-block">financial mastery.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Four specialized disciplines integrated into a unified institutional platform. Explore each interactive service card below.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:text-[#0284C7] transition-colors group interactive-target"
            >
              <span>Explore Complete Solution Directory</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1 text-[#0284C7]" />
            </Link>
          </div>
        </div>

        {/* 4 Visually Distinct Interactive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
          
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0 || index === 3;
            const spanClass = isFeatured ? "lg:col-span-7" : "lg:col-span-5";
            const isSelected = activeCard === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCard(service.id)}
                onClick={() => setActiveCard(service.id)}
                className={`${spanClass} group relative p-6 sm:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between border cursor-pointer hover:-translate-y-1.5 ${
                  isSelected
                    ? "bg-white border-[#0284C7] shadow-[0_20px_45px_-15px_rgba(2,132,199,0.18)] ring-1 ring-[#0284C7]/20"
                    : "bg-gradient-to-br from-[#FAFBFD] to-white hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-md"
                }`}
              >
                {/* Subtle top indicator bar */}
                <div
                  className="absolute top-0 left-6 right-6 h-1 rounded-t-full transition-opacity duration-300"
                  style={{
                    backgroundColor: service.accentColor,
                    opacity: isSelected ? 1 : 0,
                  }}
                />

                <div className="space-y-4">
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 shadow-2xs group-hover:scale-105"
                      style={{
                        backgroundColor: isSelected ? service.accentColor : "#F8FAFC",
                        color: isSelected ? "#FFFFFF" : service.accentColor,
                        border: `1px solid ${service.accentColor}30`,
                      }}
                    >
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#0284C7] transition-colors">
                        {service.num}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#0284C7] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#0284C7] mt-0.5">
                      {service.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-2 font-normal">
                      {service.desc}
                    </p>
                  </div>

                  {/* Interactive Mini-Visualization */}
                  <div className="pt-2">
                    {service.renderMiniVis()}
                  </div>

                  {/* Stats Pill Matrix */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
                    {service.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="p-2 rounded-lg bg-slate-50/80 border border-slate-100">
                        <span className="text-[9px] uppercase text-slate-400 block">{stat.label}</span>
                        <span className="font-bold text-[#0F172A]">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Institutional Service
                  </span>
                  <Link
                    href={service.route}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors group-hover:translate-x-1 duration-200"
                    style={{ color: service.accentColor }}
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
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
