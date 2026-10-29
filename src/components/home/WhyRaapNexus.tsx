"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ShieldCheck, Scale, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export const WhyRaapNexus: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const valueProps = [
    {
      icon: Sparkles,
      num: "01",
      title: "Direct Financial Clarity Without IT Queues",
      desc: "Executives, CFOs, and finance leaders query general ledgers, tax liabilities, and variance drivers in plain business terms. Gain immediate financial reporting and insights without waiting for custom SQL scripts, IT tickets, or fragile spreadsheet stitching.",
      highlight: "Instant auditable reporting without database access friction",
    },
    {
      icon: ShieldCheck,
      num: "02",
      title: "Dual-Control Governance & Zero Direct Database Writes",
      desc: "Enterprise financial integrity is non-negotiable. RaapNexus operates via strictly isolated, read-only ERP connectors and stages business actions as human-reviewable drafts requiring authorized dual approval before any downstream action.",
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
    <section className="py-14 sm:py-16 lg:py-20 bg-white relative">
      {/* Full-Width Expansive Container (4–6% horizontal padding) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Compact Section Header */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-slate-200/80"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-50 border border-slate-200/80 text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284C7] font-semibold">
              <span>Why RaapNexus</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
              Built for institutional rigor.
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Designed specifically for CFOs, controllers, and enterprise leadership who demand total accuracy, auditable controls, and zero operational compromise.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:text-[#0284C7] transition-colors group"
            >
              <span>Learn About Our Engineering Principles</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* 3-Column Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.num}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.05 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#FAFBFD] hover:bg-white border border-slate-200/80 hover:border-sky-300/90 shadow-2xs hover:shadow-[0_16px_36px_-12px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div className="space-y-3">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-[#0284C7] shadow-2xs group-hover:bg-[#0284C7] group-hover:text-white transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-[#0284C7] transition-colors">
                      {prop.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] leading-snug group-hover:text-[#0284C7] transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                    {prop.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60">
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-600 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                    <span>{prop.highlight}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
