"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Compass,
  FileSpreadsheet,
  MessageSquare,
  ShieldCheck,
  Terminal,
  Database,
  Building2,
} from "lucide-react";

export const ProblemTransformation: React.FC = () => {
  const [activeView, setActiveView] = useState<"after" | "before">("after");

  return (
    <section className="py-20 sm:py-24 bg-[#07111F] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#42D9F5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
            <Compass className="w-3.5 h-3.5" />
            <span>The Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your ERP has the answers.{" "}
            <span className="gradient-text-cyan block mt-1">
              Getting to them shouldn&apos;t be the hard part.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#8E9EBA] max-w-2xl mx-auto">
            Traditional enterprise software hides vital business insights behind convoluted menu trees, manual exports, and cryptic database codes. RaapNexus cuts through the friction.
          </p>

          {/* Interactive Toggle Pill */}
          <div className="pt-3 flex items-center justify-center">
            <div className="inline-flex p-1 rounded-full bg-[#0B1728] border border-[#1E314B] shadow-lg">
              <button
                onClick={() => setActiveView("before")}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeView === "before"
                    ? "bg-[#1E314B] text-white shadow-md"
                    : "text-[#8E9EBA] hover:text-white"
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                <span>Conventional ERP</span>
              </button>
              <button
                onClick={() => setActiveView("after")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeView === "after"
                    ? "bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] shadow-lg shadow-[#42D9F5]/25"
                    : "text-[#8E9EBA] hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>The RaapNexus Experience</span>
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="relative rounded-2xl bg-[#0B1728] border border-[#1E314B] shadow-2xl overflow-hidden min-h-[460px]">
          {activeView === "before" ? (
            /* CONVENTIONAL ERP VIEW */
            <div className="p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-950/40 border border-amber-800/60 px-3 py-1 rounded-md">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>The Legacy Experience</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Friction at every operational touchpoint
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Multiple disconnected screens</h4>
                      <p className="text-xs text-[#8E9EBA]">
                        Users must navigate deep nested menus (T-codes, sub-menus, sub-ledgers) across 6 different screens just to verify branch sales.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Complicated navigation & SQL barriers</h4>
                      <p className="text-xs text-[#8E9EBA]">
                        Business executives must wait days for an IT analyst to write custom queries or build specialized BI cubes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Manual, error-prone reports</h4>
                      <p className="text-xs text-[#8E9EBA]">
                        Finance staff spend hours copying, pasting, and reconciling disparate raw CSV dumps into fragile spreadsheets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Cryptic internal codes</h4>
                      <p className="text-xs text-[#8E9EBA]">
                        Requires memorizing ledger codes like &apos;GL_4020_00_DXB&apos; instead of asking for &apos;Dubai sales&apos;.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legacy Screen Mockup */}
              <div className="lg:col-span-7 bg-[#111827] rounded-xl border border-gray-700/80 p-4 font-mono text-xs text-gray-300 shadow-xl overflow-x-auto">
                <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-3">
                  <span className="text-[10px] sm:text-[11px] text-gray-400 truncate">
                    ERP GUI v4.12 — Program: [TX_FIN_GL_REP_0891]
                  </span>
                  <span className="text-amber-400 text-[10px] shrink-0 font-bold">
                    QUERY TIMEOUT (12.4s)
                  </span>
                </div>
                <div className="space-y-2 text-[11px] bg-black/60 p-3 rounded border border-gray-800">
                  <p className="text-gray-500">
                    SELECT SUM(TRANS_AMT) FROM GL_SUBLEDGER_HIST WHERE COMP_CODE = &apos;GCC_88&apos; ...
                  </p>
                  <div className="text-rose-400 font-bold">
                    ERROR: PARAMETER [BRANCH_DIM_KEY] AMBIGUOUS IN LEDGER PARTITION 03.
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-gray-400 pt-2 border-t border-gray-800 text-[10px]">
                    <div>REC_ID</div>
                    <div>GL_ACCT</div>
                    <div>TX_DATE</div>
                    <div>AMT_RAW</div>
                    <div>0091823</div>
                    <div>4010-09-DXB</div>
                    <div>20261026</div>
                    <div>78500.22</div>
                    <div>0091824</div>
                    <div>4010-12-AUH</div>
                    <div>20261026</div>
                    <div>52120.40</div>
                  </div>
                  <p className="text-gray-500 text-[10px] pt-2">
                    Action Required: Please export to CSV and re-index column 3 against Master Cost Center table to resolve branch labels.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* RAAPNEXUS CONVERSATIONAL VIEW */
            <div className="p-5 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#42D9F5] bg-[#42D9F5]/10 border border-[#42D9F5]/30 px-3 py-1 rounded-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The RaapNexus Modern Standard</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Conversational speed with enterprise rigor
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#42D9F5] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Ask a question in plain English</h4>
                      <p className="text-xs text-[#8E9EBA]">
                        Ask naturally: &ldquo;What were sales by branch yesterday?&rdquo; — no query syntax or T-codes required.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#42D9F5] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Get a clear, contextual answer</h4>
                      <p className="text-xs text-[#8E9EBA]">
                        Instant executive summary with key drivers, variance analysis, and aggregated metrics in milliseconds.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#42D9F5] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Explore an interactive report</h4>
                      <p className="text-xs text-[#8E9EBA]">
                        Rich visual cards, drill-down tables, and one-click export to formatted Excel workbooks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#42D9F5] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">Prepare a controlled business action</h4>
                      <p className="text-xs text-[#8E9EBA]">
                        Pre-validated invoice staging with dual human authorization before any ERP ledger write.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RaapNexus Screen Mockup */}
              <div className="lg:col-span-7 bg-[#07111F] rounded-xl border border-[#42D9F5]/30 p-4 sm:p-5 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-[#1E314B] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-white font-semibold">
                      RaapNexus Conversational Core
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#42D9F5] bg-[#101F35] px-2 py-0.5 rounded border border-[#1E314B]">
                    Role: CFO Verified
                  </span>
                </div>

                {/* Flow Simulation */}
                <div className="space-y-3">
                  <div className="bg-[#101F35] p-3 rounded-lg border border-[#1E314B] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#42D9F5]" />
                      <span className="text-white font-medium">
                        &ldquo;Compare branch sales yesterday with Q3 daily averages.&rdquo;
                      </span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">0.38s</span>
                  </div>

                  <div className="bg-[#0B1728] p-3.5 rounded-lg border border-[#1E314B] space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#8E9EBA]">Consolidated Result:</span>
                      <span className="text-xs font-bold text-emerald-400">+11.4% Growth</span>
                    </div>
                    <div className="text-xl font-extrabold text-white">$184,420 Net Sales</div>
                    <p className="text-xs text-[#8E9EBA]">
                      Mapped 4 branches from ERP Chart of Accounts. Dubai Downtown led with $78.5k (+12.1% above target).
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs gap-2">
                    <span className="text-[11px] text-[#8E9EBA] flex items-center gap-1 truncate">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Audit Stamped #EVT-48192</span>
                    </span>
                    <button className="px-3 py-1.5 rounded-lg bg-[#101F35] border border-[#1E314B] text-white hover:text-[#42D9F5] flex items-center gap-1 shrink-0 font-semibold">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Export .XLSX</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
