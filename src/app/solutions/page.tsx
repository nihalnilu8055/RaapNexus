import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  Receipt,
  LineChart,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Financial Solutions — Tax Auditing, Financial Auditing, Analysis & Business Intelligence",
  description:
    "Explore RaapNexus solutions across Tax Auditing & Tax Intelligence, Financial Auditing, Financial Analysis, and Business Analysis.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      id: "tax-auditing",
      title: "Tax Auditing & Tax Intelligence",
      eyebrow: "Pillar 01 — Regulatory Alignment",
      headline: "Organize tax-related records and support compliance workflows",
      challenge:
        "Corporate tax teams and external advisors struggle with fragmented filing documentation, cross-border VAT reconciliation discrepancies, and delayed data collection across subsidiaries.",
      solution:
        "RaapNexus organizes tax-relevant financial records, validates vendor Tax Registration Numbers (TRNs), reconciles input and output tax ledgers, and prepares auditable documentation packages.",
      exampleQuestions: [
        "“What is our net output vs input VAT position across UAE and KSA entities for Q3?”",
        "“Identify any high-value purchase invoices lacking verified vendor tax IDs.”",
        "“Generate a summary of qualifying corporate tax deductions for fiscal year 2026.”",
        "“Export tax subledger reconciliation workbook with statutory account codes.”",
      ],
      benefits: [
        "Systematic review of tax-relevant financial records",
        "Early discrepancy and variance identification before filing deadlines",
        "Multi-jurisdiction tax subledger alignment (VAT, Corporate Tax, WHT)",
        "Audit-stamped documentation support for external advisory teams",
      ],
      icon: Receipt,
    },
    {
      id: "financial-auditing",
      title: "Financial Auditing",
      eyebrow: "Pillar 02 — Balance & Ledger Integrity",
      headline: "Structured reviews, transaction examination, and automated balancing",
      challenge:
        "Finance directors and audit committees spend weeks tracking down unbalanced suspense accounts, examining thousands of journal entries, and manually verifying debit/credit equations.",
      solution:
        "RaapNexus provides continuous ledger verification, examining journal entries, testing balance sheets against subledgers, and highlighting potential inconsistencies with zero direct database writes.",
      exampleQuestions: [
        "“Show the consolidated trial balance for Period 08 and verify equal debits and credits.”",
        "“Are there any unallocated journals or suspense entries remaining in the operating ledger?”",
        "“Reconcile trade accounts receivable subledger against General Ledger account 1200-00.”",
        "“Audit manual journal vouchers posted outside standard operating hours.”",
      ],
      benefits: [
        "100% debit/credit mathematical reconciliation verification",
        "Granular transaction examination across nested subledgers",
        "Elimination of manual transcription and formula errors",
        "Direct drill-through from high-level trial balances to source vouchers",
      ],
      icon: Scale,
    },
    {
      id: "financial-analysis",
      title: "Financial Analysis",
      eyebrow: "Pillar 03 — Profitability & Performance",
      headline: "Multi-period performance reporting, EBITDA modeling, and trend discovery",
      challenge:
        "Executive teams rely on stale monthly reports that fail to explain margin compression, working capital deterioration, or revenue leakage until weeks after period closing.",
      solution:
        "RaapNexus transforms transactional ledger history into dynamic performance models, offering deep profitability breakdowns, cash conversion cycle monitoring, and decision-support insights.",
      exampleQuestions: [
        "“Provide an EBITDA bridge comparing Q3 performance against budget by subsidiary.”",
        "“What is our current cash conversion cycle and days sales outstanding (DSO) trend?”",
        "“Which customer accounts have the highest gross contribution margin this fiscal year?”",
        "“Model the working capital impact of a 15-day extension in supplier payment terms.”",
      ],
      benefits: [
        "Comprehensive multi-period profitability and EBITDA modeling",
        "Working capital trend evaluation and liquidity monitoring",
        "CFO-ready variance analytics comparing actuals against budget",
        "Instant export to formula-rich audit workbooks (.xlsx)",
      ],
      icon: LineChart,
    },
    {
      id: "business-analysis",
      title: "Business Analysis",
      eyebrow: "Pillar 04 — Operational & Strategic Evaluation",
      headline: "Connect operational telemetry directly to corporate financial outcomes",
      challenge:
        "Operations leads and business analysts manage in functional silos, unable to evaluate how regional branch performance, inventory velocity, or staffing levels impact overall enterprise ROI.",
      solution:
        "RaapNexus bridges operational indicators and financial ledgers, helping leadership evaluate branch performance, monitor inventory turns, and make better-informed strategic decisions.",
      exampleQuestions: [
        "“Compare sales velocity and contribution margin between Dubai and Abu Dhabi hubs.”",
        "“Which warehouse inventory SKUs carry the highest holding cost relative to turnover?”",
        "“Evaluate operational revenue efficiency per headcount across active business entities.”",
        "“Uncover operational variance drivers impacting consolidated net income.”",
      ],
      benefits: [
        "Cross-subsidiary operational telemetry and branch performance",
        "Product line contribution margin and inventory velocity indexing",
        "Decision-support frameworks connecting operations to enterprise ROI",
        "Unified view of key business indicators across all operating entities",
      ],
      icon: TrendingUp,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen text-[#0F172A]">
      {/* Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold uppercase tracking-[0.2em] text-[#0284C7]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
          <span>Institutional Solutions</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] text-[#0F172A]">
          Four pillars of{" "}
          <span className="gradient-accent block mt-1">
            financial intelligence.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#475569] max-w-2xl mx-auto font-normal leading-relaxed">
          Purpose-built solutions designed to help modern enterprises audit, analyze, and optimize every dimension of financial performance.
        </p>
      </section>

      {/* Solutions Detail */}
      <section className="py-12 border-t border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={sol.id}
                id={sol.id}
                className="scroll-mt-32 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm relative overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Column: Solution Narrative */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#0284C7] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7]">
                        {sol.eyebrow}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                      {sol.title}
                    </h2>

                    <p className="text-sm sm:text-base font-semibold text-slate-700">
                      {sol.headline}
                    </p>

                    <div className="space-y-3 text-xs sm:text-sm text-[#475569] leading-relaxed">
                      <p>
                        <strong className="text-slate-900 font-semibold">The Challenge: </strong>
                        {sol.challenge}
                      </p>
                      <p>
                        <strong className="text-slate-900 font-semibold">The RaapNexus Approach: </strong>
                        {sol.solution}
                      </p>
                    </div>

                    <div className="pt-2 space-y-2">
                      <span className="text-xs font-mono uppercase font-bold text-slate-800 block">
                        Verified Institutional Benefits:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {sol.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Typical Analytical Queries */}
                  <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4">
                    <span className="text-xs font-mono uppercase text-slate-700 font-bold block border-b border-slate-200 pb-2">
                      Representative Analytical Inquiries
                    </span>

                    <div className="space-y-2.5">
                      {sol.exampleQuestions.map((q, i) => (
                        <div
                          key={i}
                          className="bg-white p-3 rounded-xl border border-slate-200/80 text-xs text-slate-800 italic font-sans"
                        >
                          {q}
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center justify-between border-t border-slate-200">
                      <span>Audit Trail: Logged</span>
                      <span className="text-[#0284C7] font-semibold">Zero DB Writes</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-white border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold text-[#0F172A]">
            Transform your financial intelligence.
          </h2>
          <p className="text-sm text-[#475569]">
            Schedule a confidential consultation with our financial advisory team to evaluate RaapNexus for your enterprise.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm shadow-md transition-all"
            >
              <span>Schedule Financial Consultation</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
