import React from "react";
import Link from "next/link";
import {
  Landmark,
  BadgePercent,
  Boxes,
  Building,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export const BusinessSolutions: React.FC = () => {
  const solutions = [
    {
      id: "finance",
      title: "Finance & Accounting",
      headline: "Explore balances, ledger information, and financial reporting.",
      desc: "Instantly verify debits and credits across nested subledgers, inspect journal vouchers, generate aged accounts receivable, and export audit-ready balance sheets.",
      icon: Landmark,
      accent: "#42D9F5",
      sampleQuery: "“Show the trial balance for August and highlight any variance.”",
      previewStats: [
        { label: "Trial Balance", val: "$4.98M" },
        { label: "Unallocated Journals", val: "0 Items" },
        { label: "Reconciliation", val: "100% Match" },
      ],
    },
    {
      id: "sales",
      title: "Sales & Distribution",
      headline: "Understand branch performance, sales activity, and supported invoice workflows.",
      desc: "Track daily branch telemetry, monitor hourly cashier velocity, compare regional sales targets, and prepare pre-validated customer invoices with automated credit limit checks.",
      icon: BadgePercent,
      accent: "#9B8CFF",
      sampleQuery: "“What were sales by branch yesterday compared to target?”",
      previewStats: [
        { label: "Consolidated Sales", val: "$184,420" },
        { label: "Top Branch", val: "Dubai ($78.5k)" },
        { label: "Target Achievement", val: "+11.4%" },
      ],
    },
    {
      id: "inventory",
      title: "Inventory & Purchasing",
      headline: "Review stock, purchasing, and supplier-related information.",
      desc: "Query multi-warehouse stock availability, monitor SKU turnover velocity, detect impending stockouts, and prepare draft supplier purchase orders based on real-time consumption.",
      icon: Boxes,
      accent: "#34D399",
      sampleQuery: "“What are our top-selling items and current days of stock cover?”",
      previewStats: [
        { label: "Inventory Value", val: "$1.06M" },
        { label: "Stockout Risk", val: "0% across Top SKUs" },
        { label: "Avg Turn Time", val: "14.2 Days" },
      ],
    },
    {
      id: "enterprise",
      title: "Enterprise Operations",
      headline: "Work across supported companies and business environments while respecting tenant boundaries.",
      desc: "Consolidate performance across multiple subsidiaries, currencies, and tax jurisdictions without violating regional data residency or legal entity separation.",
      icon: Building,
      accent: "#FBBF24",
      sampleQuery: "“Consolidate Q3 EBITDA across GCC and Europe subsidiaries.”",
      previewStats: [
        { label: "Active Entities", val: "7 Subsidiaries" },
        { label: "Tenant Isolation", val: "Cryptographic" },
        { label: "Multi-Currency", val: "USD / EUR / AED" },
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#07111F] relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#9B8CFF]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            One intelligent interface.{" "}
            <span className="gradient-text-cyan-violet block mt-1">
              Every business conversation.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#8E9EBA]">
            Whether you are closing fiscal periods, balancing warehouse inventory, or monitoring retail distribution, RaapNexus adapts to the language of each business department.
          </p>
        </div>

        {/* 4 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div
                key={sol.id}
                className="rounded-2xl bg-[#0B1728] border border-[#1E314B] p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-[#42D9F5]/40 transition-all duration-300 shadow-xl group"
              >
                <div className="space-y-4">
                  {/* Icon & Title Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#07111F] border border-[#1E314B] flex items-center justify-center text-white shadow-inner">
                      <Icon className="w-6 h-6" style={{ color: sol.accent }} />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#8E9EBA]">
                      Department Domain
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#42D9F5] transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#8E9EBA] mt-1">
                      {sol.headline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#8E9EBA] leading-relaxed">
                    {sol.desc}
                  </p>

                  {/* Sample Conversational Query Pill */}
                  <div className="p-3 rounded-xl bg-[#07111F] border border-[#1E314B] text-xs space-y-1">
                    <span className="text-[10px] uppercase font-mono text-[#42D9F5] block font-semibold">
                      Sample Conversational Prompt:
                    </span>
                    <p className="text-white font-medium italic">{sol.sampleQuery}</p>
                  </div>

                  {/* Micro Metric Preview */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {sol.previewStats.map((st, idx) => (
                      <div
                        key={idx}
                        className="bg-[#101F35] p-2 rounded-lg border border-[#1E314B]/60 text-center"
                      >
                        <span className="text-[10px] text-[#8E9EBA] block truncate">
                          {st.label}
                        </span>
                        <span className="text-xs font-bold text-white font-mono block mt-0.5 truncate">
                          {st.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-6 mt-6 border-t border-[#1E314B]/50 flex items-center justify-between">
                  <span className="text-xs text-[#8E9EBA]">
                    Role-tailored interfaces & controls
                  </span>
                  <Link
                    href={`/solutions#${sol.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#42D9F5] hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Explore {sol.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
