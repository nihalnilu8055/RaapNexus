import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  Receipt,
  LineChart,
  TrendingUp,
  CheckCircle2,
  Database,
  ArrowRight,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Platform Architecture — The Ultimate Finance Platform",
  description:
    "Explore the technical architecture of RaapNexus — engineered for Tax Auditing, Financial Auditing, Financial Analysis, and Business Analysis with zero direct database writes.",
};

export default function PlatformPage() {
  const architectureLayers = [
    {
      level: "Layer 01",
      name: "Financial System Integration & ERP Gateway",
      tagline: "Authoritative Ledger Connector",
      desc: "Interfaces directly with enterprise ERPs (SAP S/4HANA, NetSuite, Dynamics 365) and subledgers via secure application services. Zero direct SQL table mutations.",
      icon: Database,
      points: [
        "Certified application-layer service endpoints",
        "Bit-level chart of accounts schema alignment",
        "Isolated staging buffers for transaction proposals",
      ],
    },
    {
      level: "Layer 02",
      name: "Audit Trace & Transaction Reconciliation Engine",
      tagline: "Debit / Credit Integrity",
      desc: "Continuously reconciles general ledger debits and credits, balances journal vouchers against source documents, and surfaces variances before period closing.",
      icon: Scale,
      points: [
        "Automated trial balance zero-discrepancy checks",
        "Journal voucher examination and anomaly detection",
        "Subledger-to-GL automated reconciliation rules",
      ],
    },
    {
      level: "Layer 03",
      name: "Tax Intelligence & Regulatory Compliance",
      tagline: "Documentation & Filing Readiness",
      desc: "Organizes corporate tax and VAT records, matches input/output tax subledgers, validates registration IDs (TRNs), and prepares structured filing documentation.",
      icon: Receipt,
      points: [
        "Multi-jurisdiction tax subledger segregation",
        "Automated input VAT claimable verification",
        "Cryptographically stamped audit document archives",
      ],
    },
    {
      level: "Layer 04",
      name: "Performance Modeling & Decision Analytics",
      tagline: "CFO-Level Strategy Formulation",
      desc: "Translates transactional ledger history into predictive profitability models, EBITDA margin structures, cash conversion telemetry, and operational unit economics.",
      icon: LineChart,
      points: [
        "Multidimensional profitability breakdown",
        "Working capital and cash cycle modeling",
        "Explainable driver-based variance analytics",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen text-[#0F172A]">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
          <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
          <span>Technical Topology</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] text-[#0F172A]">
          The architectural fabric behind{" "}
          <span className="gradient-accent block mt-1">
            financial clarity.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#475569] max-w-2xl mx-auto font-normal leading-relaxed">
          RaapNexus decouples complex ERP schemas from executive decision-makers through an authorized, deterministic, and auditable financial architecture.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm shadow-md transition-all"
          >
            Request Architecture Review
          </Link>
          <a
            href="#architecture"
            className="px-7 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all"
          >
            Inspect 4-Tier Topology
          </a>
        </div>
      </section>

      {/* 4-Tier Architecture Deep Dive */}
      <section id="architecture" className="py-20 border-t border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-bold">
              Deterministic Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
              Four architectural layers of financial control.
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              Every query and transaction review flows through verified service tiers designed to ensure complete ledger precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architectureLayers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 hover:border-[#0284C7]/50 transition-all shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-wider">
                      {layer.level}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0284C7]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                      {layer.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">
                      {layer.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {layer.desc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    {layer.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold text-[#0F172A]">
            Ready to evaluate RaapNexus with your ERP environment?
          </h2>
          <p className="text-sm text-[#475569]">
            Our solutions team can deploy a secure sandbox configured with your sample charts of accounts and workflow rules.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm shadow-md transition-all"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
