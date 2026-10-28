import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  Receipt,
  ArrowRight,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About RaapNexus — The Ultimate Finance Platform",
  description:
    "Learn about RaapNexus, our mission for financial clarity, institutional governance, and deterministic financial intelligence.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Financial Rigor First",
      desc: "Financial data demands bit-level precision. Every analytical view and audit trace must balance to the penny, reconciling general ledger debits and credits with zero tolerance for ambiguity.",
      icon: Scale,
    },
    {
      title: "Tax & Compliance Readiness",
      desc: "Navigating complex multi-jurisdictional tax obligations requires structured record organization, early discrepancy identification, and auditable filing support.",
      icon: Receipt,
    },
    {
      title: "Institutional Governance",
      desc: "We enforce strict cryptographic isolation, role-based scoping, and mandatory two-person dual control approval before any transaction is staged for ledger commitment.",
      icon: ShieldCheck,
    },
    {
      title: "Deterministic Technology",
      desc: "Our platform never writes raw SQL queries directly to your ERP database. All queries and proposed actions interface through authorized, verified application service endpoints.",
      icon: Lock,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen text-[#0F172A]">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
          <span>Our Mission & Principles</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] text-[#0F172A]">
          Built for clarity.{" "}
          <span className="gradient-accent block mt-1">
            Engineered for control.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#475569] max-w-2xl mx-auto font-normal leading-relaxed">
          RaapNexus was founded to address a critical enterprise challenge: modern businesses have vast ERP ledgers and transaction records, but lack a unified, auditable layer to interpret them with confidence.
        </p>
      </section>

      {/* Core Mission Narrative */}
      <section className="py-16 border-t border-b border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
            Redefining financial intelligence for the modern enterprise.
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            In an era of multi-subsidiary expansion and complex regulatory oversight, financial leadership cannot afford fragmented spreadsheets, delayed reporting cycles, or unaudited automated systems.
          </p>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            RaapNexus unifies <strong>Tax Auditing</strong>, <strong>Financial Auditing</strong>, <strong>Financial Analysis</strong>, and <strong>Business Analysis</strong> into a coherent, secure platform. We empower CFOs, finance directors, tax advisors, and executives to examine transactions, detect variances, and model performance with complete institutional confidence.
          </p>
        </div>
      </section>

      {/* 4 Guiding Principles */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
            Institutional Standards
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Our architectural convictions.
          </h2>
          <p className="text-sm sm:text-base text-[#475569]">
            Four uncompromised standards that guide every line of code and financial model in RaapNexus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm hover:border-[#0284C7]/50 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0284C7]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engagement CTA */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
            Consult with our financial advisory team.
          </h2>
          <p className="text-sm text-[#475569]">
            Discuss your enterprise architecture, audit workflows, and tax compliance requirements with our senior solution partners.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm shadow-md transition-all"
            >
              <span>Schedule Architecture Advisory</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
