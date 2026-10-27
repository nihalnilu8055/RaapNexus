"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquareCode,
  FileSpreadsheet,
  Network,
  ShieldAlert,
  Server,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
  Database,
  Lock,
  Cpu,
  Layers,
  ChevronRight,
  Building2,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

export const CoreCapabilities: React.FC = () => {
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilities = [
    {
      id: "conversational-intelligence",
      step: "01",
      title: "Conversational Intelligence",
      tagline: "Natural dialogue for complex enterprise systems",
      description:
        "Ask complex business questions in natural, everyday language. RaapNexus continuously preserves business context across multi-turn conversations, clarifying ambiguities before querying your underlying records.",
      icon: MessageSquareCode,
      color: "from-[#42D9F5] to-cyan-200",
      accent: "#42D9F5",
      features: [
        "Multi-turn conversational context preservation",
        "Role-aware automatic entity disambiguation",
        "Zero SQL, Python, or technical query knowledge needed",
      ],
      previewType: "chat",
    },
    {
      id: "business-reporting",
      step: "02",
      title: "Business Reporting",
      tagline: "Instant, structured, Excel-ready executive reports",
      description:
        "Transform raw transactional ledger entries into formatted, CFO-ready reports, visual breakdown charts, and one-click downloadable Excel workbooks without waiting for BI pipeline refresh cycles.",
      icon: FileSpreadsheet,
      color: "from-emerald-400 to-teal-300",
      accent: "#34D399",
      features: [
        "Instant trial balances, P&L summaries, and aged receivables",
        "Direct export to formula-rich .XLSX workbooks",
        "Drill down from high-level totals into underlying journal entries",
      ],
      previewType: "reporting",
    },
    {
      id: "intelligent-code-mapping",
      step: "03",
      title: "Intelligent Code Mapping",
      tagline: "Bridging human vernacular and cryptic ERP codes",
      description:
        "Resolve familiar customer names, nicknames, product descriptions, branch tags, and account names to their exact ERP ledger keys and SKUs through contextual fuzzy matching and verified business logic.",
      icon: Network,
      color: "from-[#9B8CFF] to-indigo-300",
      accent: "#9B8CFF",
      features: [
        "Resolves 'Al Noor' -> Customer ID CUST-04921",
        "Matches 'Blade server' -> Item SKU SRV-X8-BLD",
        "Prevents ambiguous cross-subsidiary ledger contamination",
      ],
      previewType: "mapping",
    },
    {
      id: "controlled-business-actions",
      step: "04",
      title: "Controlled Business Actions",
      tagline: "Pre-validated transaction workflows with human sign-off",
      description:
        "Prepare draft commercial invoices, purchase orders, inventory transfers, and journal vouchers through verified application services, validating credit limits and tax compliance before staging for human authorization.",
      icon: ShieldAlert,
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
      id: "enterprise-ready-integration",
      step: "05",
      title: "Enterprise-Ready Integration",
      tagline: "Standards-based architecture built for security and audit",
      description:
        "Connect with leading AI assistants using the open Model Context Protocol (MCP) or secure REST endpoints. Strictly isolated by tenant boundary, encrypted in transit, and recorded to an immutable audit log.",
      icon: Server,
      color: "from-blue-400 to-[#42D9F5]",
      accent: "#60A5FA",
      features: [
        "Native Model Context Protocol (MCP) implementation",
        "Cryptographically hashed immutable audit ledger",
        "Strict logical tenant & multi-company partitioning",
      ],
      previewType: "integration",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#07111F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#42D9F5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#9B8CFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything starts with a question.
          </h2>

          <p className="text-sm sm:text-base text-[#8E9EBA]">
            Explore the five deep engineering layers that empower RaapNexus to understand business language, safeguard company assets, and unlock ERP productivity.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 mb-8 sm:mb-10">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isActive = activeCapability === idx;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveCapability(idx)}
                className={`p-3 sm:p-4 rounded-xl border text-left transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? "bg-[#101F35] border-[#42D9F5] shadow-lg shadow-[#42D9F5]/10"
                    : "bg-[#0B1728] border-[#1E314B] hover:border-white/20 text-[#8E9EBA] hover:text-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
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
                </div>
                {isActive && (
                  <div className="w-full h-0.5 bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] absolute bottom-0 left-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Feature Showcase Box */}
        {(() => {
          const active = capabilities[activeCapability];
          const Icon = active.icon;

          return (
            <div className="rounded-2xl bg-[#0B1728] border border-[#1E314B] p-6 lg:p-10 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Description and Key Benefits */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#42D9F5]">
                      Capability {active.step} of 05
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {active.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#9B8CFF]">
                      {active.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#8E9EBA] leading-relaxed">
                    {active.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    {active.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#42D9F5] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-white/90 font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href="/platform"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#42D9F5] hover:text-white transition-colors"
                    >
                      <span>Deep Dive Architecture</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Unique UI Mockup for the Active Capability */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl bg-[#07111F] border border-[#1E314B] p-5 shadow-xl space-y-4">
                    {active.previewType === "chat" && (
                      <div className="space-y-3 font-sans">
                        <div className="flex items-center justify-between text-xs text-[#8E9EBA] border-b border-[#1E314B] pb-2">
                          <span className="font-mono text-[#42D9F5]">Context Engine v2.4</span>
                          <span className="text-emerald-400">Context Retained: 4 Turns</span>
                        </div>
                        <div className="bg-[#101F35] p-3 rounded-lg text-xs space-y-1">
                          <span className="text-[#8E9EBA] text-[10px] block font-mono">Turn 1 (Prompt):</span>
                          <p className="text-white">&ldquo;Show me Q3 revenue for Sharjah Hub.&rdquo;</p>
                        </div>
                        <div className="bg-[#0B1728] p-3 rounded-lg text-xs border border-[#1E314B] space-y-1">
                          <span className="text-[#42D9F5] text-[10px] block font-mono">RaapNexus:</span>
                          <p className="text-white font-medium">Sharjah Central Hub generated $482,100 in Q3 (+8.4% YoY).</p>
                        </div>
                        <div className="bg-[#101F35] p-3 rounded-lg text-xs space-y-1">
                          <span className="text-[#8E9EBA] text-[10px] block font-mono">Turn 2 (Follow-up):</span>
                          <p className="text-white">&ldquo;What was their best performing product category during that time?&rdquo;</p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>Automatically resolved branch context &lsquo;Sharjah Central Hub&rsquo; without re-prompting.</span>
                        </div>
                      </div>
                    )}

                    {active.previewType === "reporting" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-[#1E314B] pb-2 text-xs">
                          <span className="font-bold text-white">Consolidated Report Generator</span>
                          <span className="font-mono text-[#34D399] text-[11px]">.xlsx Compatible</span>
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
                            <span>Reporting Period</span>
                            <span>Auto-Calculated Formulae</span>
                          </div>
                          <div className="flex items-center justify-between text-white font-medium">
                            <span>August Trial Balance Summary</span>
                            <span className="text-emerald-400 font-mono">SUM(Debits) == SUM(Credits)</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {active.previewType === "mapping" && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="text-[11px] text-[#8E9EBA] border-b border-[#1E314B] pb-2 flex justify-between">
                          <span>Contextual Entity Resolver</span>
                          <span className="text-[#9B8CFF]">Confidence: 99.8%</span>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-[#101F35] p-2.5 rounded border border-[#1E314B] flex items-center justify-between">
                            <span className="text-white/80">&ldquo;Al Noor&rdquo;</span>
                            <span className="text-[#9B8CFF]">➔ CUST-04921 (Al Noor Trading LLC)</span>
                          </div>
                          <div className="bg-[#101F35] p-2.5 rounded border border-[#1E314B] flex items-center justify-between">
                            <span className="text-white/80">&ldquo;Dubai branch&rdquo;</span>
                            <span className="text-[#9B8CFF]">➔ BR-DXB-01 (Downtown Retail)</span>
                          </div>
                          <div className="bg-[#101F35] p-2.5 rounded border border-[#1E314B] flex items-center justify-between">
                            <span className="text-white/80">&ldquo;Server blades&rdquo;</span>
                            <span className="text-[#9B8CFF]">➔ SKU-SRV-X8-BLD</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-[#8E9EBA] font-sans pt-1">
                          Semantic matching eliminates user syntax errors and prevents invalid ERP ledger lookups.
                        </p>
                      </div>
                    )}

                    {active.previewType === "actions" && (
                      <div className="space-y-3 text-xs">
                        <div className="flex items-center justify-between border-b border-[#1E314B] pb-2">
                          <span className="font-bold text-amber-400 flex items-center gap-1.5">
                            <ShieldAlert className="w-3.5 h-3.5" />
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
                            Customer credit limit verified. 20 units reserved in DXB-Central warehouse.
                          </div>
                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[10px] text-amber-300 font-mono">
                              Awaiting CFO Dual Control Signature
                            </span>
                            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">
                              Pending
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {active.previewType === "integration" && (
                      <div className="space-y-3 text-xs">
                        <div className="flex items-center justify-between border-b border-[#1E314B] pb-2">
                          <span className="font-mono text-[#42D9F5]">MCP Gateway Router</span>
                          <span className="text-emerald-400 font-mono">Protocol v1.0 Validated</span>
                        </div>
                        <div className="space-y-1.5 font-mono text-[11px]">
                          <div className="bg-[#0B1728] p-2 rounded border border-[#1E314B] text-[#8E9EBA]">
                            <span className="text-[#42D9F5]">CLIENT:</span> Claude / Cursor / ChatGPT
                          </div>
                          <div className="bg-[#0B1728] p-2 rounded border border-[#1E314B] text-[#8E9EBA]">
                            <span className="text-[#9B8CFF]">ROUTER:</span> RaapNexus Authorization Layer (Tenant: TN-8821)
                          </div>
                          <div className="bg-[#0B1728] p-2 rounded border border-[#1E314B] text-[#8E9EBA]">
                            <span className="text-emerald-400">BACKEND:</span> ERP Business Application Services
                          </div>
                        </div>
                        <div className="p-2 rounded bg-[#101F35] text-[11px] text-[#8E9EBA]">
                          All communications signed with per-user ephemeral cryptographic tokens.
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
