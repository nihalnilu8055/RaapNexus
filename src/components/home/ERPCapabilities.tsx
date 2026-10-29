"use client";

import React from "react";
import {
  Layers,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

interface Capability {
  num: string;
  title: string;
  tagline: string;
  desc: string;
  icon: React.ElementType;
  badge: string;
  points: string[];
}

const capabilities: Capability[] = [
  {
    num: "01",
    title: "Multi-Entity Financial Ledger",
    tagline: "Synchronized General Ledgers",
    desc: "Unify general ledgers, vendor payables, receivables, and multi-jurisdiction VAT/tax calculations across all business subsidiaries without manual CSV exports.",
    icon: Layers,
    badge: "Continuous Balancing",
    points: ["Real-time debit/credit reconciliation", "Multi-currency and multi-jurisdiction VAT", "Zero IT tickets for financial closes"],
  },
  {
    num: "02",
    title: "Operations & Supply Chain",
    tagline: "End-to-End Visibility",
    desc: "Track inventory velocity, automate purchase order workflows, and monitor operational fulfillment with precision forecasting and stock alerts.",
    icon: BarChart3,
    badge: "Operational Precision",
    points: ["Automated PO-to-invoice matching", "Real-time stock turnover telemetry", "Supplier performance benchmarks"],
  },
  {
    num: "03",
    title: "Dual-Control Governance",
    tagline: "Institutional Security",
    desc: "Safeguard business integrity with read-only database connections, multi-tier approval gates, and immutable audit logs that comply with statutory requirements.",
    icon: ShieldCheck,
    badge: "Enterprise Security",
    points: ["Zero direct database writes", "Cryptographic multi-tenant isolation", "Audit-ready governance workflows"],
  },
];

export const ERPCapabilities: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#FAFBFD] relative overflow-hidden border-b border-slate-200/60">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 sm:mb-10 pb-5 sm:pb-6 border-b border-slate-200/80">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-slate-200/80 text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284C7] font-semibold shadow-2xs">
              <span>ERP Architectural Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
              Built for institutional scale and{" "}
              <span className="gradient-accent inline-block">complete operational control.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Three core pillars engineered to streamline your enterprise from general ledgers to daily fulfillment.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/platform"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] hover:text-[#0284C7] transition-colors group"
            >
              <span>Explore Technical Architecture</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1 text-[#0284C7]" />
            </Link>
          </div>
        </div>

        {/* 3 Clean Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.num}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 text-[#0284C7] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#0284C7] transition-colors">
                      {cap.num}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-bold block">
                      {cap.tagline}
                    </span>
                    <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mt-0.5">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-2 font-normal">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {cap.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <Link
                    href="/erp-demo"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:underline"
                  >
                    <span>Experience in ERP Demo</span>
                    <ArrowRight className="w-3 h-3" />
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
