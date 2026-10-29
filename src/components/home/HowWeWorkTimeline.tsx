"use client";

import React, { useState } from "react";
import {
  Search,
  Cpu,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  Layers,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

interface TimelineStep {
  num: string;
  title: string;
  tagline: string;
  desc: string;
  icon: React.ElementType;
  deliverables: string[];
  timing: string;
}

const steps: TimelineStep[] = [
  {
    num: "01",
    title: "Discover",
    tagline: "Secure, Read-Only Intake",
    desc: "We connect directly to your general ledgers and ERP systems using isolated read-only architecture. No software installation, database modifications, or IT backlogs.",
    icon: Search,
    deliverables: ["ERP connector handshake", "Subledger mapping", "Historical transaction ingestion"],
    timing: "Day 1–3",
  },
  {
    num: "02",
    title: "Analyze",
    tagline: "Continuous Ledger Verification",
    desc: "Our engine executes double-entry debit/credit balancing, reconciles cross-border VAT/TRN records, and isolates unallocated line items with zero variance tolerance.",
    icon: Cpu,
    deliverables: ["Double-entry reconciliation", "Vendor TRN authority checks", "Variance pattern isolation"],
    timing: "Continuous",
  },
  {
    num: "03",
    title: "Understand",
    tagline: "Contextual Financial Intelligence",
    desc: "Dense accounting vouchers and trial balance tables are transformed into plain-English executive narratives, EBITDA sensitivity models, and cash-flow drivers.",
    icon: Lightbulb,
    deliverables: ["Plain-English briefing", "EBITDA & margin telemetry", "Deterministic scenario forecasts"],
    timing: "Real-time",
  },
  {
    num: "04",
    title: "Act",
    tagline: "Dual-Control Governance & Action",
    desc: "Leadership executes strategic decisions with total institutional confidence. File verified statutory tax packs, optimize working capital, and allocate capital with certainty.",
    icon: CheckCircle2,
    deliverables: ["Audit-ready filing pack", "Dual-approval governance", "Board-ready presentation"],
    timing: "On-demand",
  },
];

export const HowWeWorkTimeline: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200/60">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284C7] font-semibold mb-3">
            <Activity className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>How We Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
            A structured, repeatable methodology for{" "}
            <span className="gradient-accent inline-block">financial certainty.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed mt-2">
            Four clear phases that turn fragmented accounting records into institutional-grade clarity.
          </p>
        </div>

        {/* 4-Step Animated Timeline */}
        <div className="relative">
          
          {/* Animated Connecting SVG Line on Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-10 right-10 h-1 -z-0">
            <svg className="w-full h-3 overflow-visible">
              <line
                x1="0"
                y1="2"
                x2="100%"
                y2="2"
                stroke="#E2E8F0"
                strokeWidth="2.5"
                strokeDasharray="6 6"
              />
              <line
                x1="0"
                y1="2"
                x2={`${(activeStep / (steps.length - 1)) * 100}%`}
                y2="2"
                stroke="#0284C7"
                strokeWidth="3"
                strokeLinecap="round"
                className="transition-all duration-500 ease-out"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? "bg-white border-[#0284C7] shadow-[0_20px_45px_-15px_rgba(2,132,199,0.18)] ring-1 ring-[#0284C7]/20 -translate-y-1.5"
                      : "bg-[#FAFBFD] hover:bg-white border-slate-200/90 shadow-2xs hover:shadow-md"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Step Milestone Circle & Badge */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? "bg-[#0284C7] text-white shadow-xs scale-105"
                            : "bg-white text-[#0F172A] border border-slate-200/90"
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold">
                          {step.timing}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {step.num}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-bold block">
                        {step.tagline}
                      </span>
                      <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mt-0.5">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-2 font-normal">
                        {step.desc}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        Key Deliverables
                      </span>
                      {step.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className={isActive ? "text-[#0284C7]" : "text-slate-400"}>
                      Phase {step.num}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#0284C7]">
                      {isActive ? "Active Step" : "Explore"}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
