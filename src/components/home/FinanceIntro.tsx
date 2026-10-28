"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

interface QuestionItem {
  chip: string;
  q: string;
  label: string;
  fig: string;
  line: string;
  src: string;
  spark: number[];
}

export const FinanceIntro: React.FC = () => {
  const questions: QuestionItem[] = [
    {
      chip: "VAT this quarter?",
      q: "How much VAT do we owe this quarter?",
      label: "Net VAT Payable",
      fig: "$184,450.00",
      line: "Output tax $412,850.00 less claimable input tax $228,400.00 across UAE & KSA entities. Statutory return due in 24 days.",
      src: "Sales and purchase tax ledgers · Read-only audit trace",
      spark: [12, 15, 14, 19, 21, 20, 26, 29, 34],
    },
    {
      chip: "Ledger variances?",
      q: "What discrepancies or variances require review this month?",
      label: "Audit Variances Detected",
      fig: "0 Unmatched Entries",
      line: "100% of journal vouchers reconciled against vendor invoices and bank settlement feeds. Zero debit/credit variance.",
      src: "General ledger reconciliation engine · Balanced",
      spark: [4, 9, 7, 12, 10, 15, 13, 17, 14],
    },
    {
      chip: "Filing readiness?",
      q: "Are we ready for statutory corporate tax filing?",
      label: "Tax Filing Readiness",
      fig: "98% Ready",
      line: "Documentation packs compiled. All qualifying deductions matched to verified Tax Registration Numbers (TRNs).",
      src: "Corporate tax subledger & documentation archive",
      spark: [40, 48, 55, 63, 70, 78, 84, 89, 98],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState(questions[0].q);
  const [isTyping, setIsTyping] = useState(false);

  const activeQuestion = questions[activeIndex];

  const selectQuestion = (idx: number) => {
    if (idx === activeIndex) return;
    setActiveIndex(idx);
    const targetQ = questions[idx].q;
    setIsTyping(true);
    let curr = 0;
    setTypedText("");

    const interval = setInterval(() => {
      curr += 2;
      if (curr >= targetQ.length) {
        setTypedText(targetQ);
        setIsTyping(false);
        clearInterval(interval);
      } else {
        setTypedText(targetQ.slice(0, curr));
      }
    }, 20);
  };

  const nextQuestion = () => {
    selectQuestion((activeIndex + 1) % questions.length);
  };

  return (
    <section id="intro" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
            Finance Platform Introduction
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Clarity for every{" "}
            <span className="gradient-accent">financial decision.</span>
          </h2>
          <p className="text-sm sm:text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Explore a more connected approach to tax auditing, financial auditing, financial analysis, and business analysis.
          </p>
        </div>

        {/* Interactive Plain-Words Query Demonstration */}
        <div className="pt-4 max-w-2xl mx-auto text-left space-y-4">
          {/* Prompt Bar */}
          <div className="flex items-center gap-3 p-2.5 sm:p-3 pl-4 sm:pl-5 rounded-full bg-white border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <Sparkles className="w-5 h-5 text-[#0284C7] shrink-0" />
            <div className="flex-1 min-w-0 font-medium text-sm sm:text-base text-[#0F172A] truncate">
              <span>{typedText}</span>
              {isTyping && <span className="inline-block w-0.5 h-4 ml-0.5 bg-[#0284C7] animate-pulse" />}
            </div>
            <button
              onClick={nextQuestion}
              type="button"
              aria-label="Next question"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {questions.map((item, idx) => (
              <button
                key={item.chip}
                onClick={() => selectQuestion(idx)}
                type="button"
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all duration-150 ${
                  activeIndex === idx
                    ? "bg-[#0F172A] text-white border-[#0F172A] shadow-sm font-medium"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {item.chip}
              </button>
            ))}
          </div>

          {/* Answer Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-[0_12px_40px_rgb(0,0,0,0.04)] space-y-4 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-400">
                  {activeQuestion.label}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-mono mt-0.5 tracking-tight">
                  {activeQuestion.fig}
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60 self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Audited Result</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeQuestion.line}
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400 border-t border-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
              <span>{activeQuestion.src}</span>
            </div>
          </div>

          <p className="text-center text-[11px] text-slate-400 pt-1">
            An illustration based on verified financial structures. RaapNexus connects to your ERP in read-only mode to surface verifiable answers.
          </p>
        </div>
      </div>
    </section>
  );
};
