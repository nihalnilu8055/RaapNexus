"use client";

import React, { useState } from "react";
import {
  INTERACTIVE_PROMPTS,
  InteractivePrompt,
} from "@/data/mockData";
import {
  Bot,
  User,
  Sparkles,
  TrendingUp,
  FileSpreadsheet,
  Download,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  Building2,
  FileText,
  Check,
  ArrowRight,
  Terminal,
  Printer,
  ChevronRight,
  BarChart2,
  Layers,
  X,
} from "lucide-react";

export const InteractiveAIDemo: React.FC = () => {
  const [selectedPrompt, setSelectedPrompt] = useState<InteractivePrompt>(
    INTERACTIVE_PROMPTS[0]
  );
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingStep, setThinkingStep] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [approvedAction, setApprovedAction] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const handleSelectPrompt = (prompt: InteractivePrompt) => {
    if (prompt.id === selectedPrompt.id && !isThinking) return;
    setSelectedPrompt(prompt);
    setIsThinking(true);
    setThinkingStep(0);
    setApprovedAction(false);
    setDownloadSuccess(false);

    // Simulate thinking steps
    setTimeout(() => setThinkingStep(1), 300);
    setTimeout(() => setThinkingStep(2), 650);
    setTimeout(() => setThinkingStep(3), 950);
    setTimeout(() => {
      setIsThinking(false);
    }, 1200);
  };

  const handleDownloadExcel = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleApprove = () => {
    setApprovedAction(true);
  };

  return (
    <section id="demo" className="py-20 sm:py-24 bg-[#050C16] relative overflow-hidden border-t border-[#1E314B]/70">
      {/* Background radial effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#9B8CFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#42D9F5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
            <Bot className="w-3.5 h-3.5" />
            <span>Interactive Platform Simulation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ask your business anything.
          </h2>

          <p className="text-sm sm:text-lg text-[#8E9EBA]">
            Experience how RaapNexus transforms everyday executive prompts into verified ERP metrics, deep charts, and stage-controlled transactions.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0B1728] border border-[#1E314B] text-[11px] text-[#8E9EBA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#42D9F5]" />
            <span>Simulated with realistic multi-entity enterprise datasets. No live ERP connection required.</span>
          </div>
        </div>

        {/* Prompt Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {INTERACTIVE_PROMPTS.map((prompt) => {
            const isSelected = selectedPrompt.id === prompt.id;
            return (
              <button
                key={prompt.id}
                onClick={() => handleSelectPrompt(prompt)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border text-left ${
                  isSelected
                    ? "bg-[#101F35] text-white border-[#42D9F5] shadow-lg shadow-[#42D9F5]/20 ring-1 ring-[#42D9F5]"
                    : "bg-[#0B1728] text-[#8E9EBA] border-[#1E314B] hover:text-white hover:border-white/30"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    prompt.isAction ? "bg-[#9B8CFF]" : "bg-[#42D9F5]"
                  }`}
                />
                <span className="truncate max-w-[280px] sm:max-w-none">{prompt.query}</span>
                {prompt.isAction && (
                  <span className="text-[10px] font-mono uppercase bg-[#9B8CFF]/20 text-[#9B8CFF] px-1.5 py-0.5 rounded shrink-0">
                    Action
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Window */}
        <div className="rounded-2xl bg-[#0B1728] border border-[#1E314B] shadow-2xl overflow-hidden">
          {/* Header Bar */}
          <div className="px-4 sm:px-5 py-3 bg-[#07111F] border-b border-[#1E314B] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-[11px] sm:text-xs font-mono text-[#8E9EBA] truncate">
                raapnexus://workspace/prompt-runner
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-xs">
              <div className="flex items-center gap-1.5 bg-[#101F35] px-2.5 py-1 rounded-md text-[#8E9EBA] border border-[#1E314B]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#42D9F5]" />
                <span className="text-[11px]">Tenant: GCC-Holdings (Live)</span>
              </div>
              <span className="text-[#8E9EBA] hidden sm:inline text-xs">Role: Regional CFO</span>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 space-y-6">
            {/* User Prompt Bubble */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#42D9F5]/30 to-[#9B8CFF]/30 border border-[#42D9F5]/40 flex items-center justify-center text-white shrink-0 font-bold text-xs">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 bg-[#101F35] border border-[#1E314B] rounded-2xl rounded-tl-sm p-3.5 sm:p-4 shadow-sm">
                <div className="flex items-center justify-between text-xs text-[#8E9EBA] mb-1">
                  <span className="font-semibold text-white/90">Authorized Business User</span>
                  <span className="font-mono text-[11px]">Just now</span>
                </div>
                <p className="text-sm sm:text-base text-white font-medium">
                  &ldquo;{selectedPrompt.query}&rdquo;
                </p>
              </div>
            </div>

            {/* AI Assistant Response Area */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#07111F] border border-[#42D9F5]/50 flex items-center justify-center text-[#42D9F5] shrink-0 shadow-md shadow-[#42D9F5]/20">
                <Bot className="w-5 h-5 text-[#42D9F5]" />
              </div>

              <div className="flex-1 space-y-4 min-w-0">
                {isThinking ? (
                  /* THINKING STATE ANIMATION */
                  <div className="bg-[#07111F] border border-[#1E314B] rounded-2xl p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#42D9F5]">
                      <Sparkles className="w-4 h-4 animate-spin" />
                      <span className="font-mono font-semibold">
                        RaapNexus Intelligent Context Engine resolving...
                      </span>
                    </div>

                    <div className="space-y-2 pt-1">
                      {selectedPrompt.thinkingSteps.map((step, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2.5 text-xs font-mono transition-opacity duration-300 ${
                            idx <= thinkingStep ? "opacity-100 text-white/90" : "opacity-30 text-[#8E9EBA]"
                          }`}
                        >
                          {idx < thinkingStep ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : idx === thinkingStep ? (
                            <div className="w-3.5 h-3.5 rounded-full border-2 border-[#42D9F5] border-t-transparent animate-spin shrink-0" />
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border border-gray-600 shrink-0" />
                          )}
                          <span className="truncate">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* GENERATED RESPONSE CONTENT */
                  <div className="bg-[#07111F] border border-[#1E314B] rounded-2xl p-4 sm:p-6 space-y-6">
                    {/* Response Title & Summary */}
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                          <span>{selectedPrompt.responseTitle}</span>
                        </h3>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" />
                          ERP Reconciled
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#8E9EBA] leading-relaxed">
                        {selectedPrompt.responseSummary}
                      </p>
                    </div>

                    {/* KPI Metrics Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                      {selectedPrompt.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="bg-[#0B1728] border border-[#1E314B] rounded-xl p-3 sm:p-3.5 space-y-1"
                        >
                          <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8E9EBA] font-medium block truncate">
                            {metric.label}
                          </span>
                          <span className="text-base sm:text-xl font-bold text-white block truncate">
                            {metric.value}
                          </span>
                          {metric.change && (
                            <span
                              className={`text-[10px] sm:text-[11px] font-medium block truncate ${
                                metric.positive
                                  ? "text-emerald-400"
                                  : "text-amber-400"
                              }`}
                            >
                              {metric.change}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Rich Chart Visual (for analytical prompts) */}
                    {selectedPrompt.chartData && selectedPrompt.chartData.length > 0 && !selectedPrompt.isAction && (
                      <div className="bg-[#0B1728] border border-[#1E314B] rounded-xl p-4 space-y-3">
                        <div className="flex items-center justify-between text-xs text-[#8E9EBA]">
                          <span className="font-semibold text-white flex items-center gap-1.5">
                            <BarChart2 className="w-4 h-4 text-[#42D9F5]" />
                            Telemetry Breakdown vs Budget / Target
                          </span>
                          <span className="font-mono text-[11px]">Values in USD ($)</span>
                        </div>

                        {/* Responsive SVG Bar Comparison */}
                        <div className="space-y-2.5 pt-1">
                          {selectedPrompt.chartData.map((item, idx) => {
                            const maxValue = Math.max(...selectedPrompt.chartData!.map((d) => d.value));
                            const pct = Math.round((item.value / maxValue) * 100);
                            return (
                              <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-xs text-white">
                                  <span className="font-medium truncate max-w-[180px] sm:max-w-none">{item.name}</span>
                                  <span className="font-mono font-bold text-[#42D9F5]">
                                    ${item.value.toLocaleString()}
                                  </span>
                                </div>
                                <div className="w-full h-2.5 bg-[#101F35] rounded-full overflow-hidden flex">
                                  <div
                                    className="h-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] rounded-full transition-all duration-700"
                                    style={{ width: `${pct}%` }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Interactive Action Workflow View */}
                    {selectedPrompt.isAction && selectedPrompt.actionDetails ? (
                      /* ACTION WORKFLOW DETAIL BOX */
                      <div className="bg-[#0B1728] border border-[#9B8CFF]/30 rounded-xl p-4 sm:p-5 space-y-4">
                        <div className="flex items-center justify-between border-b border-[#1E314B] pb-3 gap-2">
                          <div>
                            <span className="text-[10px] font-mono uppercase text-[#9B8CFF] font-semibold">
                              Pre-Validation Gateway
                            </span>
                            <h4 className="text-sm sm:text-base font-bold text-white mt-0.5 truncate">
                              {selectedPrompt.actionDetails.customer}
                            </h4>
                          </div>

                          <div className="text-right shrink-0">
                            <span className="text-[10px] text-[#8E9EBA] block">Staged Net Total</span>
                            <span className="text-base sm:text-lg font-extrabold text-[#42D9F5]">
                              ${selectedPrompt.actionDetails.total.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Staged Items List */}
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs text-left min-w-[420px]">
                            <thead className="text-[#8E9EBA] border-b border-[#1E314B]">
                              <tr>
                                <th className="pb-2">Item Code</th>
                                <th className="pb-2">Description</th>
                                <th className="pb-2">Qty</th>
                                <th className="pb-2">Unit Price</th>
                                <th className="pb-2 text-right">Line Total</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-[#1E314B]/60 text-white font-medium">
                              {selectedPrompt.actionDetails.items.map((item, idx) => (
                                <tr key={idx} className="py-2">
                                  <td className="py-2.5 font-mono text-[#42D9F5]">{item.code}</td>
                                  <td className="py-2.5">{item.name}</td>
                                  <td className="py-2.5">{item.qty} units</td>
                                  <td className="py-2.5">${item.unitPrice.toFixed(2)}</td>
                                  <td className="py-2.5 text-right font-bold">${item.total.toLocaleString()}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>

                        {/* Validation Checks */}
                        <div className="space-y-2 pt-2 border-t border-[#1E314B]">
                          <span className="text-xs font-bold text-white uppercase tracking-wider block">
                            Enterprise Pre-Commit Verification (5/5 Checks Passed)
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                            {selectedPrompt.actionDetails.validationChecks.map((chk, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 bg-[#101F35] p-2 rounded-lg border border-[#1E314B]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <div className="truncate">
                                  <span className="font-semibold text-white block truncate">{chk.rule}</span>
                                  <span className="text-[10px] text-[#8E9EBA] block truncate">{chk.note}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sign-off Trigger Bar */}
                        <div className="pt-3 border-t border-[#1E314B] flex flex-wrap items-center justify-between gap-3">
                          <div className="text-xs text-[#8E9EBA]">
                            <span>Two-person dual control requirement enforced. Zero raw SQL writes.</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={handleApprove}
                              disabled={approvedAction}
                              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-lg ${
                                approvedAction
                                  ? "bg-emerald-600 text-white cursor-default"
                                  : "bg-gradient-to-r from-[#9B8CFF] to-[#42D9F5] text-[#07111F] hover:shadow-[#9B8CFF]/30 active:scale-95"
                              }`}
                            >
                              {approvedAction ? (
                                <>
                                  <Check className="w-4 h-4" />
                                  <span>Invoice Authorized & Posted to ERP</span>
                                </>
                              ) : (
                                <>
                                  <ShieldCheck className="w-4 h-4" />
                                  <span>Authorize & Post Invoice</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* DATA TABLE & VISUAL BREAKDOWN */
                      <div className="space-y-3">
                        {selectedPrompt.tableHeaders && selectedPrompt.tableRows && (
                          <div className="overflow-x-auto rounded-xl border border-[#1E314B] bg-[#0B1728]">
                            <table className="w-full text-xs text-left min-w-[500px]">
                              <thead className="bg-[#101F35] text-[#8E9EBA] uppercase text-[10px] tracking-wider border-b border-[#1E314B]">
                                <tr>
                                  {selectedPrompt.tableHeaders.map((head, i) => (
                                    <th key={i} className="px-3.5 py-3 font-semibold">
                                      {head}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#1E314B]/60 text-white font-medium">
                                {selectedPrompt.tableRows.map((row, rIdx) => (
                                  <tr
                                    key={rIdx}
                                    className="hover:bg-[#101F35]/50 transition-colors"
                                  >
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className="px-3.5 py-2.5">
                                        {typeof cell === "string" && cell.startsWith("+") ? (
                                          <span className="text-emerald-400 font-semibold">{cell}</span>
                                        ) : typeof cell === "string" && cell.startsWith("-") ? (
                                          <span className="text-rose-400 font-semibold">{cell}</span>
                                        ) : (
                                          cell
                                        )}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Contextual Actions Bar */}
                    <div className="pt-3 border-t border-[#1E314B] flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-[#8E9EBA]">
                        <Terminal className="w-3.5 h-3.5 text-[#42D9F5]" />
                        <span>Execution source: Model Context Protocol (MCP) Router</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleDownloadExcel}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                            downloadSuccess
                              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                              : "bg-[#101F35] text-white hover:text-[#42D9F5] border-[#1E314B] hover:border-[#42D9F5]/40"
                          }`}
                        >
                          {downloadSuccess ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Worksheet Exported!</span>
                            </>
                          ) : (
                            <>
                              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Export Excel (.xlsx)</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => setShowReportModal(true)}
                          className="px-3 py-1.5 rounded-lg bg-[#42D9F5]/10 text-[#42D9F5] hover:bg-[#42D9F5]/20 border border-[#42D9F5]/30 flex items-center gap-1.5 font-semibold"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Audit Trace</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Audit Trace Lightbox Modal */}
        {showReportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="bg-[#0B1728] border border-[#1E314B] rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-[#1E314B] pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#42D9F5]" />
                  <h4 className="text-base font-bold text-white">Cryptographic Audit Ledger</h4>
                </div>
                <button
                  onClick={() => setShowReportModal(false)}
                  className="p-1 rounded-lg text-[#8E9EBA] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2 text-xs font-mono text-[#8E9EBA] bg-[#07111F] p-4 rounded-xl border border-[#1E314B]">
                <div><span className="text-white font-bold">Query:</span> {selectedPrompt.query}</div>
                <div><span className="text-white font-bold">Session Actor:</span> CFO_Session_48192 (Tenant: GCC-Holdings)</div>
                <div><span className="text-white font-bold">SHA-256 Hash:</span> 7e91a0f44bc18...392d4b00a</div>
                <div><span className="text-white font-bold">Execution Route:</span> ERP Application Services (Port 8443)</div>
                <div className="text-emerald-400"><span className="text-white font-bold">DB Write Allowed:</span> FALSE (Zero direct SQL access enforced)</div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setShowReportModal(false)}
                  className="px-4 py-2 rounded-xl bg-[#101F35] border border-[#1E314B] text-white hover:text-[#42D9F5] text-xs font-semibold"
                >
                  Close Trace
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
