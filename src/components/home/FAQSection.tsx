"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/mockData";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#07111F] relative overflow-hidden border-t border-[#1E314B]/60">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#42D9F5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clarity & Governance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-[#8E9EBA] max-w-2xl mx-auto">
            Everything enterprise decision-makers need to know about architecture, data isolation, and deployment.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#0B1728] border-[#42D9F5]/40 shadow-lg shadow-[#42D9F5]/5"
                    : "bg-[#0B1728]/60 border-[#1E314B] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#42D9F5]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#101F35] border border-[#1E314B] flex items-center justify-center shrink-0 text-[#8E9EBA] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#42D9F5] border-[#42D9F5]/40" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#8E9EBA] leading-relaxed border-t border-[#1E314B]/40 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B1728] border border-[#1E314B] text-center space-y-3">
          <h4 className="text-base font-bold text-white">Have a specific ERP architecture question?</h4>
          <p className="text-xs sm:text-sm text-[#8E9EBA] max-w-xl mx-auto">
            Our engineering and solutions architecture team is available to review your enterprise topology, security requirements, and custom workflows.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#42D9F5] hover:text-white transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Enterprise Solutions Team</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
