"use client";

import React from "react";
import Link from "next/link";
import {
  Bot,
  Layers,
  ShieldCheck,
  Server,
  Database,
  ArrowRight,
  CheckCircle2,
  Lock,
  UserCheck,
  FileCheck2,
  Eye,
  Cpu,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export const SecurityAndWorkflow: React.FC = () => {
  const pipelineSteps = [
    {
      num: "01",
      title: "AI Assistant",
      subtitle: "Conversational Request",
      desc: "Prompt initiated in ChatGPT, Claude, Cursor, or custom MCP client.",
      icon: Bot,
      accent: "#42D9F5",
    },
    {
      num: "02",
      title: "RaapNexus Engine",
      subtitle: "Context & Code Resolver",
      desc: "Resolves fuzzy names, SKUs, and dates into verified ERP ledger codes.",
      icon: Layers,
      accent: "#9B8CFF",
    },
    {
      num: "03",
      title: "Authorization & Rules",
      subtitle: "Zero-Trust Security Gate",
      desc: "Enforces tenant scope, RBAC filters, credit limits, and tax rules.",
      icon: ShieldCheck,
      accent: "#34D399",
    },
    {
      num: "04",
      title: "Connected ERP",
      subtitle: "Application Services",
      desc: "Executes read telemetry or stages draft transactions for sign-off.",
      icon: Database,
      accent: "#FBBF24",
    },
  ];

  const controls = [
    {
      num: "01",
      title: "Zero Direct Database Writes",
      desc: "AI never touches raw SQL tables. All transaction proposals pass through validated application APIs with staging buffers.",
      icon: Database,
      accent: "#42D9F5",
    },
    {
      num: "02",
      title: "Role-Based & Field-Level Access",
      desc: "Granular RBAC ensures users only access data within their company entity, branch scope, and authorization tier.",
      icon: Lock,
      accent: "#9B8CFF",
    },
    {
      num: "03",
      title: "Human-in-the-Loop Verification",
      desc: "Commercial invoices, POs, and journal vouchers require explicit two-person dual control approval before ledger post.",
      icon: UserCheck,
      accent: "#34D399",
    },
    {
      num: "04",
      title: "Comprehensive Audit Trail",
      desc: "Every natural language prompt, model interpretation, and staged action is logged with an immutable cryptographic hash.",
      icon: Eye,
      accent: "#60A5FA",
    },
    {
      num: "05",
      title: "Zero Customer Data Training",
      desc: "Your proprietary schemas, financials, and customer records remain strictly private and are never used to train public AI models.",
      icon: FileCheck2,
      accent: "#FBBF24",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#050C16] relative overflow-hidden border-t border-[#1E314B]/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#42D9F5]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Architecture & Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Enterprise security and how it works.
          </h2>

          <p className="text-sm sm:text-base text-[#8E9EBA]">
            How RaapNexus bridges AI assistants and enterprise systems with deterministic guardrails and institutional control.
          </p>
        </div>

        {/* Pipeline Diagram (4 Steps connected horizontally) */}
        <div className="rounded-2xl bg-[#0B1728] border border-[#1E314B] p-5 sm:p-7 mb-12 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#1E314B]/80 pb-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8E9EBA] font-semibold">
              Deterministic 4-Stage Execution Pipeline
            </span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded">
              Zero Direct DB Writes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="rounded-xl bg-[#07111F] border border-[#1E314B] p-4 relative group hover:border-[#42D9F5]/40 transition-all shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#101F35] border border-[#1E314B]"
                      style={{ color: step.accent }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#8E9EBA]/60">
                      Step {step.num}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#42D9F5] block mb-0.5">
                    {step.subtitle}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-[#42D9F5] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#8E9EBA] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5 Enterprise Security Controls */}
        <div className="space-y-4">
          <div className="text-center sm:text-left mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Five institutional control mechanisms
            </h3>
            <p className="text-xs sm:text-sm text-[#8E9EBA] mt-1">
              Purpose-engineered to satisfy the most demanding corporate risk, compliance, and audit requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {controls.map((ctrl) => {
              const Icon = ctrl.icon;
              return (
                <div
                  key={ctrl.num}
                  className="rounded-xl bg-[#0B1728] border border-[#1E314B] p-4 sm:p-5 hover:border-[#42D9F5]/40 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-8 h-8 rounded-lg bg-[#07111F] border border-[#1E314B] flex items-center justify-center"
                        style={{ color: ctrl.accent }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#8E9EBA]/50">
                        Control {ctrl.num}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-[#42D9F5] transition-colors">
                      {ctrl.title}
                    </h4>
                    <p className="text-xs text-[#8E9EBA] leading-relaxed">
                      {ctrl.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Read Security Docs Card */}
            <div className="rounded-xl bg-gradient-to-br from-[#101F35] to-[#0B1728] border border-[#42D9F5]/30 p-5 flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#42D9F5] font-bold block mb-1">
                  Compliance Documentation
                </span>
                <h4 className="text-sm font-bold text-white mb-1.5">
                  Detailed Security Architecture
                </h4>
                <p className="text-xs text-[#8E9EBA] leading-relaxed">
                  Review complete zero-trust specifications, tenant isolation protocols, and compliance verification reports.
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href="/security"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#42D9F5] hover:text-white transition-colors"
                >
                  <span>Review full security specifications</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};