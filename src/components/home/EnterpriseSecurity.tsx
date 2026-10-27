import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  FileCheck2,
  Database,
  ArrowRight,
  Server,
  Layers,
  KeyRound,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Bot,
} from "lucide-react";

export const EnterpriseSecurity: React.FC = () => {
  const securityPillars = [
    {
      title: "Controlled Application Access",
      desc: "All interactions pass through fine-grained role-based access control (RBAC). A regional manager only accesses their authorized branches.",
      icon: KeyRound,
    },
    {
      title: "Business-Rule Validation",
      desc: "Queries and actions pass strict validation filters (credit limits, tax rules, account permissions) before touching application services.",
      icon: ShieldCheck,
    },
    {
      title: "Tenant & Company Scope",
      desc: "Strict cryptographic multi-tenant boundaries prevent cross-company data leakage across group subsidiaries.",
      icon: Layers,
    },
    {
      title: "Per-User Credential Isolation",
      desc: "User sessions utilize short-lived ephemeral tokens mapped to existing corporate SSO / IAM directories.",
      icon: Lock,
    },
    {
      title: "Auditable Supported Operations",
      desc: "Every query, model interpretation, and prepared transaction is logged with timestamp, user ID, and cryptographic hash.",
      icon: Eye,
    },
    {
      title: "Mandatory Human Approval",
      desc: "High-impact actions (invoicing, transfers, journal drafts) require explicit two-person dual control approval before ledger commitment.",
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-24 bg-[#050C16] relative overflow-hidden border-t border-[#1E314B]/70">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#42D9F5]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero-Trust Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            AI-powered. Business-controlled.
          </h2>

          <p className="text-base sm:text-lg text-[#8E9EBA]">
            Designed for institutional IT leaders and CFOs who require ironclad governance. RaapNexus brokers intelligence without surrendering administrative control.
          </p>
        </div>

        {/* Visual Architecture Diagram (AI Assistant -> RaapNexus -> Authorization -> Business Services -> Connected ERP) */}
        <div className="rounded-2xl bg-[#0B1728] border border-[#1E314B] p-6 lg:p-8 mb-16 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8E9EBA]">
              Architectural Pipeline & Human-in-the-Loop Gateway
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative items-center">
            {/* Step 1: AI Assistant */}
            <div className="bg-[#07111F] border border-[#1E314B] rounded-xl p-4 text-center space-y-2 relative">
              <div className="w-10 h-10 rounded-lg bg-[#101F35] mx-auto flex items-center justify-center text-[#42D9F5]">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">1. AI Assistant</h4>
              <p className="text-[11px] text-[#8E9EBA]">ChatGPT / Claude / MCP Client</p>
            </div>

            {/* Step 2: RaapNexus Gateway */}
            <div className="bg-[#07111F] border border-[#42D9F5]/40 rounded-xl p-4 text-center space-y-2 relative shadow-lg shadow-[#42D9F5]/10">
              <div className="w-10 h-10 rounded-lg bg-[#42D9F5]/10 mx-auto flex items-center justify-center text-[#42D9F5]">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">2. RaapNexus</h4>
              <p className="text-[11px] text-[#8E9EBA]">Contextual Engine & Protocol Router</p>
            </div>

            {/* Step 3: Authorization & Tenant Scope */}
            <div className="bg-[#07111F] border border-[#9B8CFF]/40 rounded-xl p-4 text-center space-y-2 relative shadow-lg shadow-[#9B8CFF]/10">
              <div className="w-10 h-10 rounded-lg bg-[#9B8CFF]/10 mx-auto flex items-center justify-center text-[#9B8CFF]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">3. Auth & Context</h4>
              <p className="text-[11px] text-[#8E9EBA]">Tenant Isolation & RBAC Validation</p>
            </div>

            {/* Step 4: Business Application Services */}
            <div className="bg-[#07111F] border border-[#1E314B] rounded-xl p-4 text-center space-y-2 relative">
              <div className="w-10 h-10 rounded-lg bg-[#101F35] mx-auto flex items-center justify-center text-emerald-400">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">4. App Services</h4>
              <p className="text-[11px] text-[#8E9EBA]">ERP APIs & Business Rules</p>
            </div>

            {/* Step 5: Connected ERP */}
            <div className="bg-[#07111F] border border-[#1E314B] rounded-xl p-4 text-center space-y-2 relative">
              <div className="w-10 h-10 rounded-lg bg-[#101F35] mx-auto flex items-center justify-center text-blue-400">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">5. Core ERP</h4>
              <p className="text-[11px] text-[#8E9EBA]">System of Record</p>
            </div>
          </div>

          {/* Distinct Human-in-the-Loop Dual Approval Gate Pathway */}
          <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-amber-950/30 via-[#101F35] to-amber-950/30 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                  Transaction Staging & Dual-Control Approval Gateway
                </span>
                <p className="text-[11px] text-[#8E9EBA]">
                  Write transactions are never executed autonomously. Draft invoices and POs wait in a secure staging queue for authorized user sign-off.
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold shrink-0">
              Human Sign-Off Required
            </span>
          </div>

          {/* Explicit Guarantee Box */}
          <div className="mt-4 p-3 rounded-lg bg-[#07111F] border border-[#1E314B] text-center">
            <p className="text-xs text-white/90">
              <span className="text-[#42D9F5] font-bold">Strict Architecture Guarantee:</span>{" "}
              AI assistants never have direct raw SQL database access. All data interactions are brokered exclusively through validated application services.
            </p>
          </div>
        </div>

        {/* 6 Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-[#0B1728] border border-[#1E314B] rounded-2xl p-6 space-y-3 hover:border-[#42D9F5]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#101F35] border border-[#1E314B] flex items-center justify-center text-[#42D9F5]">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-[#8E9EBA] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to /security */}
        <div className="mt-12 text-center">
          <Link
            href="/security"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#101F35] hover:bg-[#1E314B] text-white border border-[#1E314B] font-semibold text-sm transition-all group"
          >
            <span>Read Complete Security Whitepaper</span>
            <ArrowRight className="w-4 h-4 text-[#42D9F5] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
