"use client";

import React, { useState } from "react";
import {
  MessageSquareCode,
  FileSpreadsheet,
  ShieldCheck,
  Server,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  BarChart2,
  Layers,
  Lock,
} from "lucide-react";
import Link from "next/link";

export const CoreCapabilities: React.FC = () => {
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilities = [
    {
      id: "conversational-bi",
      step: "01",
      title: "Conversational Business Intelligence",
      tagline: "Natural dialogue for complex enterprise systems",
      benefit: "Ask questions in plain English and get reconciled answers with automatic entity and ledger mapping.",
      description:
        "Ask complex business questions in everyday language. RaapNexus resolves familiar customer names, branch tags, and product terms to exact ERP ledger keys and SKUs, preserving context across multi-turn conversations.",
      icon: MessageSquareCode,
      color: "from-[#42D9F5] to-cyan-200",
      accent: "#42D9F5",
      features: [
        "Multi-turn conversational context preservation",
        "Contextual entity mapping (e.g., 'Al Noor' ➔ CUST-04921)",
        "Zero SQL, Python, or technical query knowledge needed",
      ],
      previewType: "chat",
    },
    {
      id: "reporting-analysis",
      step: "02",
      title: "Reporting & Excel-Ready Analysis",
      tagline: "Instant, structured, CFO-ready financial reports",
      benefit: "Transform raw ledger entries into formatted trial balances, P&L summaries, and downloadable workbooks.",
      description:
        "Transform raw transactional ledger entries into formatted, CFO-ready reports, visual breakdown charts, and one-click downloadable Excel workbooks without waiting for BI pipeline refresh cycles.",
      icon: FileSpreadsheet,
      color: "from-emerald-400 to-teal-300",
      accent: "#34D399",
      features: [
        "Instant trial balances, P&L summaries, and aged receivables",
        "Direct export to formula-rich .XLSX workbooks",
        "Reconciled ledger drill-down with zero discrepancy",
      ],
      previewType: "reporting",
    },
    {
      id: "validated-actions",
      step: "03",
      title: "Validated Business Actions",
      tagline: "Pre-validated transaction workflows with human sign-off",
      benefit: "Draft invoices, sales orders, and transfers with credit checks and mandatory human authorization.",
      description:
        "Prepare draft commercial invoices, purchase orders, inventory transfers, and journal vouchers through verified application services. Validates credit limits and tax compliance before staging for human authorization.",
      icon: ShieldCheck,
      color: "from-amber-400 to-orange-300",
      accent: "#FBBF24",
      features: [
        "Pre-execution credit headroom & inventory availability checks",
        "Mandatory two-person dual control sign-off queue",
        "Zero direct raw SQL write access to core tables",
      ],
      previewType: "actions",
    },
    {
      id: "integration-governance",
      step: "04",
      title: "Enterprise Integration & Governance",
      tagline: "Standards-based architecture built for security and audit",
      benefit: "Connect with MCP and enterprise APIs with strict tenant isolation and tamper-evident audit trails.",
      description:
        "Connect with leading AI assistants using the open Model Context Protocol (MCP) or secure REST endpoints. Strictly isolated by tenant boundary, encrypted in transit, and recorded to an immutable audit log.",
      icon: Server,
      color: "from-[#9B8CFF] to-indigo-300",
      accent: "#9B8CFF",
      features: [
        "Native Model Context Protocol (MCP) implementation",
        "Cryptographically hashed immutable audit ledger",
        "Strict tenant isolation and zero customer data model training",
      ],
      previewType: "integration",
    },
  ];

  const active = capabilities[activeCapability];

  return (
    <section className="py-16 sm:py-20 bg-[#07111F] relative overflow-hidden border-t border-[#1E314B]/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#42D9F5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#9B8CFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core capabilities built for enterprise control.
          </h2>

          <p className="text-sm sm:text-base text-[#8E9EBA]">
            Four core engineering pillars that empower RaapNexus to understand business language, safeguard company assets, and unlock ERP productivity.
          </p>
        </div>

        {/* 4 Feature Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isActive = activeCapability === idx;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveCapability(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? "bg-[#101F35] border-[#42D9F5] shadow-lg shadow-[#42D9F5]/10"
                    : "bg-[#0B1728] border-[#1E314B] hover:border-white/20 text-[#8E9EBA] hover:text-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-[#42D9F5]/20 text-[#42D9F5]"
                          : "bg-[#07111F] text-[#8E9EBA]"
                      }`}
                    >
                      {cap.step}
                    </span>
                    <Icon
                      className={`w-4 h-4 ${
                        isActive ? "text-[#42D9F5]" : "text-[#8E9EBA]"
                      }`}
                    />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                    {cap.title}
                  </h4>
                  <p className="text-[11px] text-[#8E9EBA] mt-1 line-clamp-2">
                    {cap.benefit}
                  </p>
                </div>
                {isActive && (
                  <div className="w-full h-0.5 bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] absolute bottom-0 left-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase Box */}
        <div className="rounded-2xl bg-[#0B1728] border border-[#1E314B] p-6 lg:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Description and Key Benefits */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#42D9F5]">
                  Capability {active.step} of 04
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {active.title}
                </h3>
                <p className="text-sm font-semibold text-[#9B8CFF]">
                  {active.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#8E9EBA] leading-relaxed">
                {active.description}
              </p>

              <div className="space-y-2.5 pt-1">
                {active.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#42D9F5] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-white/90 font-medium">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#42D9F5] hover:text-white transition-colors"
                >
                  <span>Explore in Platform Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Interactive / Visual Preview for Active Capability */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#07111F] border border-[#1E314B] p-4 sm:p-5 shadow-xl space-y-4">
                {active.previewType === "chat" && (
                  <div className="space-y-3 font-sans">
                    <div className="flex items-center justify-between text-xs text-[#8E9EBA] border-b border-[#1E314B] pb-2">
                      <span className="font-mono text-[#42D9F5]">Conversational Resolver</span>
                      <span className="text-emerald-400 font-mono text-[11px]">Context Retained: 3 Turns</span>
                    </div>
                    <div className="bg-[#101F35] p-3 rounded-lg text-xs space-y-1">
                      <span className="text-[#8E9EBA] text-[10px] block font-mono">User Prompt:</span>
                      <p className="text-white">&ldquo;Show me Q3 revenue for Dubai branch and Al Noor invoices.&rdquo;</p>
                    </div>
                    <div className="space-y-1.5 font-mono text-[11px]">
                      <div className="bg-[#0B1728] p-2 rounded border border-[#1E314B] flex items-center justify-between">
                        <span className="text-white/80">&ldquo;Dubai branch&rdquo;</span>
                        <span className="text-[#42D9F5]">➔ BR-DXB-01 (Downtown Retail)</span>
                      </div>
                      <div className="bg-[#0B1728] p-2 rounded border border-[#1E314B] flex items-center justify-between">
                        <span className="text-white/80">&ldquo;Al Noor&rdquo;</span>
                        <span className="text-[#9B8CFF]">➔ CUST-04921 (Al Noor Trading LLC)</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Automatic disambiguation without requiring technical SQL queries.</span>
                    </div>
                  </div>
                )}

                {active.previewType === "reporting" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-[#1E314B] pb-2 text-xs">
                      <span className="font-bold text-white">Consolidated Report Generator</span>
                      <span className="font-mono text-[#34D399] text-[11px]">.xlsx Formula Ready</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-[#101F35] p-2 rounded text-center">
                        <span className="text-[10px] text-[#8E9EBA] block">Gross Margin</span>
                        <span className="font-bold text-white">41.8%</span>
                      </div>
                      <div className="bg-[#101F35] p-2 rounded text-center">
                        <span className="text-[10px] text-[#8E9EBA] block">EBITDA</span>
                        <span className="font-bold text-emerald-400">$1.24M</span>
                      </div>
                      <div className="bg-[#101F35] p-2 rounded text-center">
                        <span className="text-[10px] text-[#8E9EBA] block">Variance</span>
                        <span className="font-bold text-[#42D9F5]">+6.2%</span>
                      </div>
                    </div>
                    <div className="border border-[#1E314B] rounded-lg p-3 bg-[#0B1728] space-y-2 text-xs">
                      <div className="flex justify-between text-[#8E9EBA] text-[10px] uppercase font-mono">
                        <span>Period: August FY2026</span>
                        <span className="text-emerald-400">Debits = Credits</span>
                      </div>
                      <div className="flex items-center justify-between text-white font-medium">
                        <span>Consolidated General Ledger</span>
                        <span className="text-[#34D399] font-mono">$4,982,450.00</span>
                      </div>
                    </div>
                  </div>
                )}

                {active.previewType === "actions" && (
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-[#1E314B] pb-2">
                      <span className="font-bold text-amber-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Staged Action Buffer
                      </span>
                      <span className="text-white/80 font-mono text-[10px]">Zero Direct DB Writes</span>
                    </div>
                    <div className="bg-[#101F35] p-3 rounded-lg border border-[#1E314B] space-y-2">
                      <div className="flex justify-between font-bold text-white">
                        <span>Commercial Invoice #DRAFT-9014</span>
                        <span className="text-[#42D9F5]">$17,850.00</span>
                      </div>
                      <div className="text-[11px] text-[#8E9EBA]">
                        Customer credit headroom ($39,650) and warehouse stock (142 units) pre-verified.
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] text-amber-300 font-mono">
                          Awaiting Dual Control Sign-Off
                        </span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">
                          Pending Approval
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {active.previewType === "integration" && (
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-[#1E314B] pb-2">
                      <span className="font-mono text-[#42D9F5]">MCP Gateway Router</span>
                      <span className="text-emerald-400 font-mono text-[11px]">Protocol v1.0 Validated</span>
                    </div>
                    <div className="space-y-1.5 font-mono text-[11px]">
                      <div className="bg-[#0B1728] p-2 rounded border border-[#1E314B] text-[#8E9EBA]">
                        <span className="text-[#42D9F5]">CLIENT:</span> Claude / Cursor / ChatGPT / Custom AI
                      </div>
                      <div className="bg-[#0B1728] p-2 rounded border border-[#1E314B] text-[#8E9EBA]">
                        <span className="text-[#9B8CFF]">LAYER:</span> RaapNexus Authorization & Tenant Boundary
                      </div>
                      <div className="bg-[#0B1728] p-2 rounded border border-[#1E314B] text-[#8E9EBA]">
                        <span className="text-emerald-400">SYSTEM:</span> SAP / NetSuite / Dynamics 365 / SQL
                      </div>
                    </div>
                    <div className="p-2 rounded bg-[#101F35] text-[11px] text-[#8E9EBA]">
                      Strict role-based isolation. No training on enterprise tenant data.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};