"use client";

import React from "react";
import { Sparkles, ShieldCheck, Scale, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const WhyRaapNexus: React.FC = () => {
  const valueProps = [
    {
      icon: Sparkles,
      num: "01",
      title: "Direct Financial Clarity Without IT Queues",
      desc: "Executives, CFOs, and finance leaders query general ledgers, tax liabilities, and variance drivers in plain business terms. Gain immediate answers without waiting for custom SQL scripts, IT tickets, or fragile spreadsheet stitching.",
      highlight: "Instant auditable reporting without database access friction",
    },
    {
      icon: ShieldCheck,
      num: "02",
      title: "Dual-Control Governance & Zero Direct Database Writes",
      desc: "Enterprise financial integrity is non-negotiable. RaapNexus operates via strictly isolated, read-only ERP connectors and stages business actions as human-reviewable drafts requiring authorized dual approval.",
      highlight: "Read-only architecture with cryptographic multi-tenant separation",
    },
    {
      icon: Scale,
      num: "03",
      title: "Continuous Ledger Audit & Multi-Entity Reconciliation",
      desc: "Reconcile debit and credit variances, validate cross-border vendor Tax Registration Numbers (TRNs), and detect trial balance discrepancies continuously—not during chaotic quarter-end close cycles.",
      highlight: "Subledger automated sampling and zero-variance verification",
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white relative">
      {/* Full-Width Expansive Container (4–6% horizontal padding) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-16 pb-8 border-b border-slate-200/80">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-[11px] font-mono uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
              <span>Why RaapNexus</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
              Built for institutional rigor.
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Designed specifically for CFOs, controllers, and enterprise leadership who demand total accuracy, auditable controls, and zero operational compromise.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F172A] hover:text-[#0284C7] transition-colors group"
            >
              <span>Learn About Our Engineering Principles</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3-Column Grid for Concise Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <div
                key={prop.num}
                className="group relative p-7 sm:p-8 rounded-2xl bg-[#FAFBFD] hover:bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.07)] transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#0284C7] shadow-2xs group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#0284C7] transition-colors">
                      {prop.num}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug group-hover:text-[#0284C7] transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {prop.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                    <span>{prop.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
