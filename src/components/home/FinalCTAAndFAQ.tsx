"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  HelpCircle,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

export const FinalCTAAndFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is RaapNexus?",
      answer:
        "RaapNexus is an AI-powered enterprise software platform that connects your ERP and business systems with modern AI assistants. It enables executives and operational teams to ask natural language questions, uncover real-time insights, generate Excel-ready reports, and prepare validated business transactions — all with enterprise security, tenant isolation, and administrative control built in.",
    },
    {
      question: "Which AI assistants can connect?",
      answer:
        "RaapNexus supports any AI client or workspace utilizing the open Model Context Protocol (MCP) or secure REST APIs, including ChatGPT (Actions & Custom GPTs), Claude (Artifacts & MCP), Cursor, and VS Code. It can also integrate directly with your organization's custom internal AI models and private cloud agents.",
    },
    {
      question: "Can RaapNexus prepare transactions?",
      answer:
        "Yes, in a controlled and pre-validated manner. RaapNexus can assemble draft commercial invoices, purchase orders, warehouse transfers, and journal entries through authoritative application services. Every proposed action verifies business rules (such as customer credit headroom, inventory availability, and tax compliance) and stages the draft for mandatory human authorization before posting to the ERP general ledger.",
    },
    {
      question: "How does RaapNexus handle enterprise access and security?",
      answer:
        "Security is institutional-grade by design: zero direct database writes, strict cryptographic tenant boundary isolation, role-based and field-level access control (RBAC), and immutable audit trails for every query and tool call. RaapNexus operates under strict zero-retention policies: your proprietary ERP records and enterprise data are never used to train public foundation models.",
    },
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#07111F] relative overflow-hidden border-t border-[#1E314B]/70">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#42D9F5]/10 via-[#9B8CFF]/10 to-[#42D9F5]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Compact FAQ Section (4 Essential Questions) */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Clarity & Governance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-xs sm:text-sm text-[#8E9EBA]">
              Essential details regarding architecture, AI compatibility, and enterprise governance.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#0B1728] border-[#42D9F5]/40 shadow-lg shadow-[#42D9F5]/5"
                      : "bg-[#0B1728]/70 border-[#1E314B] hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-3.5 sm:py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42D9F5]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full bg-[#101F35] border border-[#1E314B] flex items-center justify-center shrink-0 text-[#8E9EBA] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#42D9F5] border-[#42D9F5]/40" : ""
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#8E9EBA] leading-relaxed border-t border-[#1E314B]/40 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Conversion Banner */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0B1728] to-[#07111F] border border-[#1E314B] p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F35] border border-[#42D9F5]/40 text-xs font-semibold uppercase tracking-wider text-[#42D9F5] shadow-lg shadow-[#42D9F5]/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transform Enterprise Operations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] max-w-2xl mx-auto">
            Ready to have a better conversation with your business?
          </h2>

          <p className="text-sm sm:text-base text-[#8E9EBA] max-w-xl mx-auto font-normal leading-relaxed">
            Discover how RaapNexus can simplify business reporting, connect your systems to AI assistants, and support controlled enterprise workflows.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-extrabold text-sm sm:text-base shadow-xl shadow-[#42D9F5]/25 hover:shadow-[#42D9F5]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>

            <Link
              href="/platform"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#101F35] hover:bg-[#152844] text-white border border-[#1E314B] hover:border-[#42D9F5]/40 font-semibold text-sm sm:text-base transition-all group"
            >
              <span>Explore the Platform</span>
              <ChevronRight className="w-4 h-4 text-[#8E9EBA] group-hover:text-[#42D9F5] group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8E9EBA]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#42D9F5]" />
              <span>Zero direct database writes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#42D9F5]" />
              <span>Dedicated architecture review</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#42D9F5]" />
              <span>Strict enterprise tenant isolation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};