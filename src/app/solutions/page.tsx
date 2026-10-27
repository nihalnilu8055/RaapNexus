import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Landmark,
  BadgePercent,
  Boxes,
  Building,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  TrendingUp,
  Clock,
  ShieldCheck,
  Building2,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Solutions — Finance, Sales, Supply Chain & Operations",
  description:
    "Tailored conversational intelligence for finance directors, sales executives, supply chain leaders, and corporate group operations.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      id: "finance",
      title: "Finance & Accounting",
      eyebrow: "Financial Precision & Governance",
      headline: "Live ledger verification without monthly closing delays",
      challenge:
        "Finance teams spend hundreds of hours manually compiling disparate spreadsheets, balancing trial balances, cross-checking journal entries, and reconciling accounts receivable across disconnected ERP modules.",
      solution:
        "RaapNexus empowers CFOs and controllers to query trial balances, generate aged debtors schedules, review variance anomalies, and inspect underlying vouchers in seconds — with instant export to formatted Excel workbooks.",
      exampleQuestions: [
        "“Show the trial balance for August and highlight any unbalanced accounts.”",
        "“What are our top overdue accounts receivable exceeding 60 days?”",
        "“Compare operating expenses across Q1-Q3 against approved budget.”",
        "“Export the consolidated balance sheet for Period 08 to Excel.”",
      ],
      benefits: [
        "100% debit/credit mathematical reconciliation verification",
        "Zero manual spreadsheet transcription errors",
        "Direct drill-through from summary totals to journal vouchers",
        "Audit-stamped historical record of all conversational inquiries",
      ],
      icon: Landmark,
      accent: "#42D9F5",
    },
    {
      id: "sales",
      title: "Sales & Distribution",
      eyebrow: "Commercial Velocity & Invoicing",
      headline: "Real-time branch telemetry and controlled invoicing workflows",
      challenge:
        "Sales leadership lacks instant visibility into branch performance, cashier velocity, and basket averages, while sales ops staff struggle with slow, manual invoice generation and credit check bottlenecks.",
      challengeHighlight: "Slow manual invoicing & blind regional distribution",
      solution:
        "RaapNexus delivers live branch telemetry, compares regional sales quotas, and stages pre-validated sales invoices with automatic credit headroom checks and dual-approval sign-off before committing to the ERP.",
      exampleQuestions: [
        "“What were sales by branch yesterday compared to weekly targets?”",
        "“Create an invoice for Al Noor Trading for 20 server units.”",
        "“Which sales rep achieved the highest gross margin this month?”",
        "“What is the current credit headroom for Apex Global Logix?”",
      ],
      benefits: [
        "Sub-second branch performance and cashier ticket metrics",
        "Pre-execution credit limit and customer contract rate validation",
        "Dual-control human sign-off on all commercial write transactions",
        "Seamless integration with point-of-sale and distribution subledgers",
      ],
      icon: BadgePercent,
      accent: "#9B8CFF",
    },
    {
      id: "inventory",
      title: "Inventory & Purchasing",
      eyebrow: "Supply Chain & Stock Health",
      headline: "Predictive warehouse coverage and automated reorder staging",
      challenge:
        "Supply chain managers battle unanticipated stockouts on high-margin SKUs, excess dead stock accumulation, and disjointed purchasing cycles split across multiple warehouse management systems.",
      challengeHighlight: "Blind stockouts and bloated carrying costs",
      solution:
        "RaapNexus monitors multi-warehouse inventory levels, tracks SKU turnover velocity, triggers predictive replenishment alerts, and prepares draft purchase orders for authorized supplier submission.",
      exampleQuestions: [
        "“What are our top-selling items and their remaining days of stock cover?”",
        "“Which SKUs in DXB-Central are nearing their minimum reorder point?”",
        "“Prepare a draft purchase order for 50 units of IoT Gateway v4.”",
        "“Show batch expiry dates for perishable stock in Sharjah Warehouse.”",
      ],
      benefits: [
        "Instant multi-warehouse inventory valuation and batch tracking",
        "Dynamic burn rate recalculation based on 90-day velocity",
        "Automated draft PO preparation matching approved supplier price books",
        "Zero direct table writes; all POs staged in authorized buffer",
      ],
      icon: Boxes,
      accent: "#34D399",
    },
    {
      id: "enterprise",
      title: "Enterprise Operations",
      eyebrow: "Multi-Company & Holding Groups",
      headline: "Strict multi-tenant boundaries with consolidated rollup",
      challenge:
        "Conglomerates and holding companies operating multiple subsidiaries struggle to aggregate performance across different legal entities, tax jurisdictions, and currencies without exposing confidential subsidiary records.",
      challengeHighlight: "Data leakage risk and fragmented subsidiary reporting",
      solution:
        "RaapNexus enforces cryptographic tenant isolation. Authorized group executives can view consolidated EBITDA, liquidity, and headcount across all entities while subsidiary managers remain strictly confined to their local records.",
      exampleQuestions: [
        "“Consolidate Q3 operating EBITDA across all GCC and European entities.”",
        "“Switch context to Europe Distribution SA (Tenant #TN-8822).”",
        "“What is our consolidated cash position across all operating bank accounts?”",
        "“Verify intercompany journal eliminations for period closing.”",
      ],
      benefits: [
        "Cryptographically segregated multi-tenant architecture",
        "Multi-currency conversion at verified closing exchange rates",
        "Automated intercompany balance elimination tracking",
        "Strict compliance with regional data residency requirements",
      ],
      icon: Building,
      accent: "#FBBF24",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#07111F] min-h-screen text-white">
      {/* Solutions Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Department-Specific Value</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          Purpose-built intelligence for{" "}
          <span className="gradient-text-cyan-violet block mt-1">
            every enterprise leader.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#8E9EBA] max-w-2xl mx-auto">
          From the CFO&apos;s closing balance sheet to the warehouse manager&apos;s stock replenishment, RaapNexus translates departmental objectives into verified ERP actions.
        </p>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {solutions.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-4 py-2 rounded-full bg-[#0B1728] border border-[#1E314B] text-xs font-semibold text-[#8E9EBA] hover:text-white hover:border-[#42D9F5]/40 transition-all"
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* 4 Detailed Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-8">
        {solutions.map((sol, idx) => {
          const Icon = sol.icon;
          const isEven = idx % 2 === 0;

          return (
            <section
              key={sol.id}
              id={sol.id}
              className="rounded-3xl bg-[#0B1728] border border-[#1E314B] p-8 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left/Right Text Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#42D9F5]">
                      {sol.eyebrow}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                      {sol.title}
                    </h2>
                    <p className="text-base font-semibold text-[#9B8CFF]">
                      {sol.headline}
                    </p>
                  </div>

                  {/* Problem & Solution Comparison */}
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="bg-[#07111F] p-4 rounded-xl border border-rose-500/20 space-y-1">
                      <span className="text-rose-400 font-bold uppercase tracking-wider text-[10px] block">
                        The Operational Challenge:
                      </span>
                      <p className="text-[#8E9EBA] leading-relaxed">{sol.challenge}</p>
                    </div>

                    <div className="bg-[#07111F] p-4 rounded-xl border border-emerald-500/20 space-y-1">
                      <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px] block">
                        The RaapNexus Resolution:
                      </span>
                      <p className="text-white/90 leading-relaxed">{sol.solution}</p>
                    </div>
                  </div>

                  {/* Key Benefits Bulleted */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-white block">
                      Core Institutional Advantages:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {sol.benefits.map((b, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#42D9F5] shrink-0" />
                          <span className="text-[#8E9EBA]">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-bold text-xs shadow-lg hover:shadow-[#42D9F5]/30 transition-all"
                    >
                      <span>Book a {sol.title} Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right/Left Interactive Showcase Column */}
                <div className={`lg:col-span-6 ${isEven ? "" : "lg:order-1"}`}>
                  <div className="rounded-2xl bg-[#07111F] border border-[#1E314B] p-6 shadow-xl space-y-4">
                    <div className="flex items-center justify-between border-b border-[#1E314B] pb-3">
                      <div className="flex items-center gap-2">
                        <Icon className="w-5 h-5" style={{ color: sol.accent }} />
                        <span className="font-bold text-white text-sm">
                          Verified Query Scenarios
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8E9EBA]">
                        Application Services Mode
                      </span>
                    </div>

                    <p className="text-xs text-[#8E9EBA]">
                      Click or review the standard conversational prompts used by enterprise teams in {sol.title}:
                    </p>

                    <div className="space-y-2.5">
                      {sol.exampleQuestions.map((q, qIdx) => (
                        <div
                          key={qIdx}
                          className="bg-[#0B1728] p-3 rounded-xl border border-[#1E314B] hover:border-[#42D9F5]/40 transition-colors text-xs space-y-1"
                        >
                          <div className="flex items-center justify-between text-[10px] text-[#42D9F5] font-mono">
                            <span>Prompt #{qIdx + 1}</span>
                            <span className="text-emerald-400">Pre-Configured</span>
                          </div>
                          <p className="text-white font-medium italic">{q}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-[#8E9EBA] border-t border-[#1E314B]">
                      <span>Role Scope: Department Lead / Controller</span>
                      <span className="text-emerald-400 font-mono text-[11px]">Audit Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Conversion Section */}
      <section className="py-20 mt-16 bg-[#050C16] border-t border-[#1E314B]/70 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Transform your department&apos;s ERP interaction today.
          </h2>
          <p className="text-sm sm:text-base text-[#8E9EBA]">
            Schedule a personalized demonstration configured around your exact industry and operational modules.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-bold text-sm shadow-xl shadow-[#42D9F5]/25 hover:scale-[1.02] transition-all"
            >
              <span>Schedule Tailored Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
