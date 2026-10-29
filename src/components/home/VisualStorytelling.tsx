"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  Activity,
  FileCheck2,
  SlidersHorizontal,
  ChevronRight,
  Database,
  Cpu,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface BenefitItem {
  id: string;
  icon: React.ElementType;
  title: string;
  badge: string;
  desc: string;
  stats: { label: string; value: string };
}

const benefits: BenefitItem[] = [
  {
    id: "clarity",
    icon: Sparkles,
    title: "Greater Financial Clarity",
    badge: "Ledger Resolution",
    desc: "Eliminate black-box accounting. Trace high-level balance sheet aggregates directly to granular subledger entries with complete provenance and automated variance detection.",
    stats: { label: "Reconciliation Confidence", value: "99.98%" },
  },
  {
    id: "decisions",
    icon: TrendingUp,
    title: "More Informed Decisions",
    badge: "Scenario Intelligence",
    desc: "Evaluate multi-jurisdiction tax exposure, simulate cash runway under fluctuating market dynamics, and test capital allocation models with deterministic financial math.",
    stats: { label: "Model Latency", value: "< 240ms" },
  },
  {
    id: "insights",
    icon: Layers,
    title: "Connected Business Insights",
    badge: "Unified Telemetry",
    desc: "Break down the wall between operational metrics and financial fundamentals. Unify payroll, procurement, customer acquisition, and tax obligations into one coherent executive view.",
    stats: { label: "Cross-Entity Telemetry", value: "Real-Time" },
  },
];

type StageMode = "ingestion" | "audit" | "clarity";

interface StageConfig {
  id: StageMode;
  label: string;
  badge: string;
  heading: string;
  icon: React.ElementType;
  nodes: { label: string; status: string; detail: string; color: string }[];
  metrics: { label: string; value: string; trend: string }[];
}

const stages: StageConfig[] = [
  {
    id: "ingestion",
    label: "01. Signal Ingestion",
    badge: "Multi-Source Intake",
    heading: "Normalized Transaction Pipeline",
    icon: Database,
    nodes: [
      { label: "ERP Subledgers", status: "Active", detail: "Oracle, SAP, NetSuite", color: "#0284C7" },
      { label: "Bank Telemetry", status: "Live Feed", detail: "SWIFT & ISO 20022", color: "#0EA5E9" },
      { label: "Tax Jurisdiction Rules", status: "Loaded", detail: "VAT, GST, CIT Engines", color: "#06B6D4" },
    ],
    metrics: [
      { label: "Stream Ingestion", value: "48,200/sec", trend: "+14.2%" },
      { label: "Parsing Variance", value: "0.00%", trend: "Zero Tolerance" },
      { label: "Entities Connected", value: "14 Jurisdictions", trend: "Synchronized" },
    ],
  },
  {
    id: "audit",
    label: "02. Continuous Audit",
    badge: "Dual-Control Governance",
    heading: "Cryptographic Subledger Verification",
    icon: Cpu,
    nodes: [
      { label: "TRN & TIN Validation", status: "100% Match", detail: "Real-time authority check", color: "#0284C7" },
      { label: "Dual Approval Gate", status: "Enforced", detail: "Zero direct DB writes", color: "#0EA5E9" },
      { label: "Variance Reconciler", status: "Balanced", detail: "Debit = Credit verified", color: "#10B981" },
    ],
    metrics: [
      { label: "Audit Trial Status", value: "Immutable", trend: "SHA-256" },
      { label: "Anomalies Flagged", value: "0 Detected", trend: "Clean Ledger" },
      { label: "Reconciliation Rate", value: "99.98%", trend: "Institutional Grade" },
    ],
  },
  {
    id: "clarity",
    label: "03. Executive Clarity",
    badge: "Boardroom Intelligence",
    heading: "Strategic Decision Stream",
    icon: BarChart3,
    nodes: [
      { label: "Optimized Tax Exposure", status: "$2.41M Saved", detail: "Cross-border efficiency", color: "#0284C7" },
      { label: "Operating Trajectory", status: "+18.4% YoY", detail: "EBITDA margin expansion", color: "#10B981" },
      { label: "Runway & Liquidity", status: "32 Months", detail: "Stress-tested solvency", color: "#0EA5E9" },
    ],
    metrics: [
      { label: "Executive Briefing", value: "Instant", trend: "Board Ready" },
      { label: "Decision Confidence", value: "High (Deterministic)", trend: "Audited Math" },
      { label: "Strategic Runway", value: "32 Months", trend: "+4 mo. vs Plan" },
    ],
  },
];

export const VisualStorytelling: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<StageMode>("clarity");
  const [selectedBenefit, setSelectedBenefit] = useState<string>("clarity");

  const currentStage = stages.find((s) => s.id === activeStage) || stages[2];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] relative overflow-hidden border-y border-slate-200/80">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full blur-[110px] opacity-25"
        style={{
          background: "radial-gradient(ellipse at center, rgba(14,165,233,0.35), rgba(2,132,199,0.15), transparent 70%)",
        }}
      />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-mono uppercase tracking-[0.18em] text-[#0284C7] font-semibold mb-4 shadow-2xs">
            <Activity className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Strategic Decision Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.12]">
            Clarity changes how you{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#06B6D4]">
              make decisions.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            When financial data is fragmented across legacy ERPs and static spreadsheets, leaders operate with delayed hindsight. 
            RaapNexus transforms continuous ledger telemetry into instantaneous, forward-looking strategic clarity.
          </p>
        </div>

        {/* Split Layout: 3 Core Benefits (Left) vs Interactive Telemetry Visual (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* Left Column: 3 Structured Benefits */}
          <div className="lg:col-span-5 space-y-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              const isSelected = selectedBenefit === benefit.id;

              return (
                <div
                  key={benefit.id}
                  onClick={() => {
                    setSelectedBenefit(benefit.id);
                    if (benefit.id === "clarity") setActiveStage("clarity");
                    if (benefit.id === "decisions") setActiveStage("audit");
                    if (benefit.id === "insights") setActiveStage("ingestion");
                  }}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border text-left ${
                    isSelected
                      ? "bg-white border-[#0284C7] shadow-[0_16px_36px_-12px_rgba(2,132,199,0.14)] ring-1 ring-[#0284C7]/20"
                      : "bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-[#0284C7] text-white shadow-sm"
                            : "bg-slate-100 text-[#0F172A]"
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-bold">
                          {benefit.badge}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight">
                          {benefit.title}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="text-xs font-mono font-bold text-[#0F172A] block">
                        {benefit.stats.value}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {benefit.stats.label}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {benefit.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#0284C7] flex items-center gap-1 group">
                      Explore capability stream
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    {isSelected && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        Viewing In Console
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="pt-2">
              <Link
                href="/platform"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-[#0284C7] text-white text-xs sm:text-sm font-bold shadow-sm transition-all duration-200"
              >
                <span>Read the Complete Architecture Whitepaper</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Decision Telemetry Console */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.08)] overflow-hidden">
            
            {/* Top Interactive Stage Selector Bar */}
            <div className="p-3 sm:p-4 bg-slate-50/80 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 pl-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-700 ml-2">
                  Decision Engine State
                </span>
              </div>

              {/* Stage Pills */}
              <div className="inline-flex p-1 bg-white rounded-xl border border-slate-200/80 shadow-2xs gap-1">
                {stages.map((stage) => {
                  const isActive = activeStage === stage.id;
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setActiveStage(stage.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        isActive
                          ? "bg-[#0284C7] text-white shadow-2xs font-semibold"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {stage.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Console Body */}
            <div className="p-5 sm:p-7 space-y-6">
              
              {/* Stage Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0284C7] text-[10px] font-mono font-bold uppercase tracking-wider border border-sky-100">
                    <currentStage.icon className="w-3 h-3 text-[#0284C7]" />
                    {currentStage.badge}
                  </span>
                  <h4 className="text-lg font-bold text-[#0F172A] tracking-tight">
                    {currentStage.heading}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Continuous Verification Active
                  </span>
                </div>
              </div>

              {/* Node Visualization Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentStage.nodes.map((node, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-sky-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        Channel {i + 1}
                      </span>
                      <span
                        className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded"
                        style={{
                          backgroundColor: `${node.color}15`,
                          color: node.color,
                        }}
                      >
                        {node.status}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-[#0F172A]">{node.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{node.detail}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Telemetry Metrics */}
              <div className="rounded-xl p-4 bg-slate-900 text-white space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Live Telemetry Stream
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Zero Desync Latency
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                  {currentStage.metrics.map((metric, i) => (
                    <div key={i} className="space-y-0.5">
                      <span className="text-[11px] text-slate-400 block font-mono">
                        {metric.label}
                      </span>
                      <span className="text-lg font-black text-white tracking-tight font-mono block">
                        {metric.value}
                      </span>
                      <span className="text-[10px] text-[#38BDF8] font-medium block">
                        {metric.trend}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verification Callout */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1.5 font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
                  SOC 2 Type II Certified Pipeline &middot; Read-Only Architecture
                </span>
                <span className="text-[11px] font-bold text-slate-700">
                  Ref: RNX-AUDIT-2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
