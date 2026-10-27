import React from "react";
import {
  Link2,
  Brain,
  ShieldCheck,
  SendHorizontal,
  ArrowRight,
  Database,
  Cpu,
  Lock,
  FileCheck,
} from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Connect your business systems",
      subtitle: "Secure Integration Layer",
      desc: "RaapNexus connects to your supported ERP systems, subledgers, and operational databases via standard APIs, service layers, or the open Model Context Protocol (MCP).",
      icon: Link2,
      accent: "#42D9F5",
    },
    {
      num: "02",
      title: "Understand business context",
      subtitle: "Contextual Disambiguation",
      desc: "The platform interprets the user's natural language request, resolves fuzzy entity names (customers, SKUs, GL accounts), and anchors the query in the correct fiscal period and subsidiary.",
      icon: Brain,
      accent: "#9B8CFF",
    },
    {
      num: "03",
      title: "Validate permissions & rules",
      subtitle: "Tenant & Role Verification",
      desc: "Before any information is returned or action prepared, RaapNexus validates the user's role scope, tenant boundaries, and applicable business policies (credit limits, tax rules).",
      icon: ShieldCheck,
      accent: "#34D399",
    },
    {
      num: "04",
      title: "Deliver insights or staged action",
      subtitle: "Controlled Outcome",
      desc: "Results are presented as live analytical cards, formatted Excel workbooks, or pre-validated transaction drafts awaiting authorized human sign-off before committing to the ERP.",
      icon: SendHorizontal,
      accent: "#FBBF24",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#07111F] relative overflow-hidden border-t border-[#1E314B]/60">
      {/* Background Grid */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
            <Cpu className="w-3.5 h-3.5" />
            <span>Operational Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From question to business outcome.
          </h2>

          <p className="text-base sm:text-lg text-[#8E9EBA]">
            Every query flows through four deterministic, security-first stages designed to ensure financial precision and institutional control.
          </p>
        </div>

        {/* 4 Connected Stages with Visual Node Pipeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#42D9F5] via-[#9B8CFF] to-[#34D399] -translate-y-12 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="rounded-2xl bg-[#0B1728] border border-[#1E314B] p-6 hover:border-[#42D9F5]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Node Indicator */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#07111F] border border-[#1E314B] flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                        <Icon className="w-6 h-6" style={{ color: step.accent }} />
                      </div>
                      <span className="text-2xl font-mono font-extrabold text-[#1E314B] group-hover:text-white/40 transition-colors">
                        {step.num}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#42D9F5] block mb-1">
                      {step.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#42D9F5] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8E9EBA] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#1E314B]/50 flex items-center justify-between text-xs text-[#8E9EBA]">
                    <span className="text-[10px] font-mono">Stage {step.num} / 04</span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: step.accent }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0B1728] border border-[#1E314B] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#101F35] border border-[#1E314B] flex items-center justify-center text-[#42D9F5] shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Guaranteed Zero-Direct-Database-Write Isolation
              </h4>
              <p className="text-xs text-[#8E9EBA]">
                AI models never issue raw SQL or write directly to tables. All updates run through ERP application validation APIs.
              </p>
            </div>
          </div>

          <a
            href="/security"
            className="text-xs font-bold text-[#42D9F5] hover:text-white transition-colors shrink-0 flex items-center gap-1.5"
          >
            <span>Review Security Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
