"use client";

import React, { useState } from "react";
import {
  Database,
  Cpu,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  ShieldCheck,
  TrendingUp,
  FileCheck2,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface StoryStep {
  id: string;
  num: string;
  label: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  badge: string;
  telemetry: { label: string; value: string; detail: string }[];
  highlight: string;
}

const steps: StoryStep[] = [
  {
    id: "data",
    num: "01",
    label: "Data",
    subtitle: "Multi-Source Intake & Ingestion",
    desc: "Raw, disparate financial signals—general ledger dumps, bank feeds (ISO 20022), ERP databases, and tax invoices—are securely ingested through isolated, read-only connectors.",
    icon: Database,
    badge: "Normalized Data Pipeline",
    telemetry: [
      { label: "Connectors", value: "SAP, NetSuite, Oracle", detail: "Read-only isolation" },
      { label: "Ingestion Latency", value: "< 120ms", detail: "Real-time sync" },
      { label: "Data Integrity", value: "Cryptographic Hash", detail: "SHA-256 validation" },
    ],
    highlight: "Zero schema alteration or direct database writes",
  },
  {
    id: "analysis",
    num: "02",
    label: "Analysis",
    subtitle: "Deterministic Ledger Audit & Rules",
    desc: "Every transaction is sampled and evaluated against accounting logic: double-entry balancing, cross-border VAT validation, vendor TRN verification, and period-close reconciliations.",
    icon: Cpu,
    badge: "Continuous Sampling Engine",
    telemetry: [
      { label: "Vouchers Audited", value: "14,892,420 Tx", detail: "Continuous examination" },
      { label: "Trial Balance", value: "Zero Variance", detail: "Debit = Credit verified" },
      { label: "TRN Accuracy", value: "100% Tax Matched", detail: "Authority cross-checked" },
    ],
    highlight: "Automated anomaly isolation before period close",
  },
  {
    id: "insights",
    num: "03",
    label: "Insights",
    subtitle: "Contextual Performance Telemetry",
    desc: "Isolated ledger entries transform into forward-looking intelligence: EBITDA margin sensitivity, working capital cycles, cross-jurisdiction tax optimization, and unit economics.",
    icon: BarChart3,
    badge: "Multi-Quarter Scenario Modeling",
    telemetry: [
      { label: "EBITDA Margin", value: "32.6% (Peak 34.2%)", detail: "+18.4% YoY trajectory" },
      { label: "Cash Conversion", value: "38 Days", detail: "-6 days operational improvement" },
      { label: "Runway Solvency", value: "32 Months", detail: "Stress-tested scenarios" },
    ],
    highlight: "Translates dense ledger rows into strategic financial levers",
  },
  {
    id: "decisions",
    num: "04",
    label: "Decisions",
    subtitle: "Executive Action & Governance",
    desc: "Leadership acts with absolute certainty. Board-ready briefings, verified statutory tax filings, and capital allocation models are staged with dual-control governance.",
    icon: ShieldCheck,
    badge: "Institutional Certainty",
    telemetry: [
      { label: "Filing Status", value: "Pack Auto-Generated", detail: "Audit-ready signoff" },
      { label: "Governance Gate", value: "Dual Approval", detail: "Human review required" },
      { label: "Executive Briefing", value: "One-Click PDF/Feed", detail: "Boardroom verified" },
    ],
    highlight: "Clear, verifiable numbers that withstand institutional scrutiny",
  },
];

export const FinancialDataStory: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const currentStep = steps[activeStepIndex];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] relative overflow-hidden border-b border-slate-200/60">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] pointer-events-none rounded-full blur-[120px] opacity-30 -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(14,165,233,0.3), rgba(2,132,199,0.12), transparent 70%)",
        }}
      />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-mono uppercase tracking-[0.18em] text-[#0284C7] font-semibold mb-4 shadow-2xs">
            <Activity className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>The Financial Data Story</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
            From raw data to{" "}
            <span className="gradient-accent inline-block">confident decisions.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            Follow the four-stage transformation: how fragmented transactions are ingested, continuously audited, distilled into strategic insights, and converted into decisive executive actions.
          </p>
        </div>

        {/* Interactive Sequence Navigator (Desktop Pipeline / Mobile Stack) */}
        <div className="mb-10 sm:mb-12">
          <div className="relative">
            {/* Animated Connecting SVG Line */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 -z-0">
              <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none">
                <line
                  x1="0%"
                  y1="2"
                  x2="100%"
                  y2="2"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <line
                  x1="0%"
                  y1="2"
                  x2={`${(activeStepIndex / (steps.length - 1)) * 100}%`}
                  y2="2"
                  stroke="#0284C7"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="transition-all duration-500 ease-out"
                />
              </svg>
            </div>

            {/* 4 Stage Steppers */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStepIndex === idx;
                const isPassed = activeStepIndex > idx;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                      isActive
                        ? "bg-white border-[#0284C7] shadow-[0_16px_36px_-12px_rgba(2,132,199,0.18)] ring-1 ring-[#0284C7]/20 -translate-y-1"
                        : isPassed
                        ? "bg-white/90 border-sky-200/80 hover:bg-white text-slate-700 shadow-2xs"
                        : "bg-white/60 hover:bg-white border-slate-200/80 text-slate-500 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-[#0284C7] text-white shadow-sm scale-105"
                            : isPassed
                            ? "bg-sky-50 text-[#0284C7] border border-sky-200"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-sky-50 text-[#0284C7] border border-sky-200"
                            : "text-slate-400"
                        }`}
                      >
                        {step.num}
                      </span>
                    </div>

                    <div>
                      <div className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight flex items-center gap-1.5">
                        <span>{step.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
                        )}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {step.subtitle}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                      <span className={isActive ? "text-[#0284C7] font-semibold" : "text-slate-400"}>
                        {isActive ? "Active Stage" : "View Details"}
                      </span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? "rotate-90 text-[#0284C7]" : "text-slate-300"}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Stage Preview Console */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.08)] overflow-hidden">
          {/* Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-50/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-sky-100/70 border border-sky-200 text-[#0284C7] font-mono text-xs font-bold uppercase tracking-wider">
                Stage {currentStep.num} Execution
              </span>
              <span className="text-sm sm:text-base font-bold text-[#0F172A]">
                {currentStep.label}: {currentStep.subtitle}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{currentStep.badge}</span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
                {currentStep.desc}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-[#0F172A] font-medium flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{currentStep.highlight}</span>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % steps.length)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <span>Advance to Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                </button>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-[#0284C7] hover:bg-slate-100 transition-colors"
                >
                  <span>Technical Documentation</span>
                </Link>
              </div>
            </div>

            {/* Right Telemetry Matrix */}
            <div className="lg:col-span-6 space-y-3">
              <div className="rounded-xl p-4 sm:p-5 bg-slate-900 text-white space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
                  <span>STAGE VERIFICATION TELEMETRY</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Verified Output
                  </span>
                </div>

                <div className="space-y-3">
                  {currentStep.telemetry.map((item, tIdx) => (
                    <div key={tIdx} className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono text-slate-400 block">{item.label}</span>
                        <span className="text-sm font-bold text-white font-mono mt-0.5 block">{item.value}</span>
                      </div>
                      <span className="text-[10px] font-mono text-sky-400 px-2 py-1 rounded bg-sky-950/60 border border-sky-800/50">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
