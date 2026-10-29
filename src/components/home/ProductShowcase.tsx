"use client";

import React, { useState } from "react";
import {
  Receipt,
  Scale,
  LineChart,
  TrendingUp,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  SlidersHorizontal,
  Calendar,
  Layers,
  Filter,
  RefreshCw,
  Search,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { AnimatedFinancialBackground } from "@/components/ui/AnimatedFinancialBackground";

type TabKey = "tax" | "audit" | "analysis" | "business";

export const ProductShowcase: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<TabKey>("tax");

  // Tab 1 (Tax) States
  const [taxJurisdiction, setTaxJurisdiction] = useState<"all" | "uae" | "ksa" | "difc">("all");
  const [selectedTaxRow, setSelectedTaxRow] = useState<number | null>(0);

  // Tab 2 (Audit) States
  const [auditCategory, setAuditCategory] = useState<"all" | "ap" | "ar" | "intercompany">("all");
  const [auditSamplePassed, setAuditSamplePassed] = useState(true);

  // Tab 3 (Analysis) States
  const [analysisMetric, setAnalysisMetric] = useState<"ebitda" | "cashflow" | "margin">("ebitda");
  const [scenarioMode, setScenarioMode] = useState<"base" | "conservative" | "accelerated">("base");

  // Tab 4 (Business) States
  const [businessSegment, setBusinessSegment] = useState<"all" | "enterprise" | "midmarket">("all");

  const tabs = [
    { id: "tax" as TabKey, label: "Tax Intelligence", icon: Receipt },
    { id: "audit" as TabKey, label: "Financial Auditing", icon: Scale },
    { id: "analysis" as TabKey, label: "Financial Analysis", icon: LineChart },
    { id: "business" as TabKey, label: "Business Insights", icon: TrendingUp },
  ];

  return (
    <section id="showcase" className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-t border-b border-slate-200/80 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedFinancialBackground variant="showcase" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-slate-200/80 text-[10px] font-mono uppercase tracking-[0.18em] text-[#0284C7] font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Interactive Financial Intelligence Center</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-[1.14]">
              This is what your books look like,{" "}
              <span className="gradient-accent inline-block">explained.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Explore the working intelligence console across all four specialized disciplines. Click the tabs and interact with the live telemetry controls.
            </p>
          </div>

          {/* Working Interactive Tab Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-2xl border border-slate-200/90 shadow-2xs shrink-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 active:scale-95 ${
                    isActive
                      ? "bg-[#0F172A] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Expansive Full-Width Browser Console Frame */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] overflow-hidden">
          
          {/* Console Window Top Bar */}
          <div className="py-2.5 px-4 sm:px-6 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 ml-2 hidden sm:inline">
                raapnexus &middot; {activeTab}.telemetry.active
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-slate-500 hidden md:inline">FY2026 Q3 Multi-Entity</span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold text-[10px]">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                Dual-Control Protected
              </span>
            </div>
          </div>

          {/* Dynamic Interactive Body Panels */}
          <div className="p-5 sm:p-7 lg:p-8">
            <AnimatePresence mode="wait">
              
              {/* ================= 1. TAX INTELLIGENCE PANEL ================= */}
              {activeTab === "tax" && (
                <motion.div
                  key="tax"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Tax Filter & Summary Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#0284C7] font-bold block">
                        STATUTORY COMPLIANCE & RECONCILIATION
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                        Multi-Jurisdiction VAT & Corporate Tax Pipeline
                      </h3>
                    </div>

                    {/* Working Jurisdiction Filter Pills */}
                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-mono">
                      {[
                        { id: "all", label: "All Entities" },
                        { id: "uae", label: "UAE FTA" },
                        { id: "ksa", label: "KSA ZATCA" },
                        { id: "difc", label: "DIFC Zero-Rate" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setTaxJurisdiction(item.id as any)}
                          className={`px-3 py-1 rounded-lg transition-all ${
                            taxJurisdiction === item.id
                              ? "bg-white text-[#0F172A] font-bold shadow-2xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4 Interactive Metric Blocks */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">Output VAT Collected</span>
                      <span className="text-xl sm:text-2xl font-black text-[#0F172A] font-mono mt-0.5 block">$412,850.00</span>
                      <span className="text-[10px] font-mono text-emerald-600 block mt-1">100% Invoiced to Ledger</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">Input VAT Claimable</span>
                      <span className="text-xl sm:text-2xl font-black text-[#0F172A] font-mono mt-0.5 block">$228,400.00</span>
                      <span className="text-[10px] font-mono text-[#0284C7] block mt-1">Vendor TRNs Verified</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">Net Payable to FTA</span>
                      <span className="text-xl sm:text-2xl font-black text-[#0F172A] font-mono mt-0.5 block">$184,450.00</span>
                      <span className="text-[10px] font-mono text-slate-500 block mt-1">Deadline: In 24 Days</span>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
                      <span className="text-[10px] font-mono uppercase text-emerald-700 block">Audit Variances</span>
                      <span className="text-xl sm:text-2xl font-black text-emerald-700 font-mono mt-0.5 block">$0.00 Net</span>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold block mt-1">Filing Pack Auto-Generated</span>
                    </div>
                  </div>

                  {/* Interactive Subledger Drilldown Table */}
                  <div className="rounded-xl border border-slate-200 overflow-hidden">
                    <div className="p-3 bg-slate-50 border-b border-slate-200 flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-slate-700">SUBLEDGER VENDOR & JURISDICTION DRILLDOWN</span>
                      <span className="text-slate-400">Click a record to verify cryptographic TRN status</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono border-collapse">
                        <thead>
                          <tr className="bg-slate-100/70 border-b border-slate-200 text-[10px] text-slate-500 uppercase">
                            <th className="p-3">Jurisdiction Entity</th>
                            <th className="p-3">Tax Reg ID (TRN)</th>
                            <th className="p-3">Taxable Revenue</th>
                            <th className="p-3">Statutory Rate</th>
                            <th className="p-3">Reconciliation Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {[
                            { entity: "UAE FTA Mainland OpCo", trn: "100294819200003", rev: "$8,257,000.00", rate: "5% Standard", status: "Reconciled & Filed", color: "text-emerald-600" },
                            { entity: "Saudi ZATCA Phase-2", trn: "310492819200003", rev: "$4,120,000.00", rate: "15% Standard", status: "E-Invoice Synced", color: "text-sky-600" },
                            { entity: "DIFC Freezone Entity", trn: "100938210400001", rev: "$2,840,000.00", rate: "0% Qualifying", status: "Exemption Documented", color: "text-emerald-600" },
                          ]
                            .filter((row) => {
                              if (taxJurisdiction === "uae") return row.entity.includes("UAE");
                              if (taxJurisdiction === "ksa") return row.entity.includes("Saudi");
                              if (taxJurisdiction === "difc") return row.entity.includes("DIFC");
                              return true;
                            })
                            .map((row, idx) => (
                              <tr
                                key={idx}
                                onClick={() => setSelectedTaxRow(idx)}
                                className={`cursor-pointer transition-colors ${
                                  selectedTaxRow === idx ? "bg-sky-50/70 font-semibold" : "hover:bg-slate-50"
                                }`}
                              >
                                <td className="p-3 text-[#0F172A]">{row.entity}</td>
                                <td className="p-3 text-slate-600">{row.trn}</td>
                                <td className="p-3 font-bold text-[#0F172A]">{row.rev}</td>
                                <td className="p-3 text-slate-600">{row.rate}</td>
                                <td className={`p-3 font-bold ${row.color} flex items-center gap-1.5`}>
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                  {row.status}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ================= 2. FINANCIAL AUDITING PANEL ================= */}
              {activeTab === "audit" && (
                <motion.div
                  key="audit"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold block">
                        CONTINUOUS GENERAL LEDGER VERIFICATION
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                        Double-Entry Ledger Balancing & Sample Testing
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-mono">
                      {[
                        { id: "all", label: "All Ledgers" },
                        { id: "ap", label: "Accounts Payable" },
                        { id: "ar", label: "Accounts Receivable" },
                        { id: "intercompany", label: "Intercompany" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setAuditCategory(item.id as any)}
                          className={`px-3 py-1 rounded-lg transition-all ${
                            auditCategory === item.id
                              ? "bg-white text-[#0F172A] font-bold shadow-2xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Balancing Scale Visualization */}
                  <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-mono font-bold tracking-wider">TRIAL BALANCE SAMPLING MESH</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Variance: $0.00 Net (Balanced)
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                        <span className="text-xs font-mono text-slate-400 block">TOTAL SUBLEDGER DEBITS</span>
                        <span className="text-2xl font-black font-mono text-white mt-1 block">$14,892,420.00</span>
                        <span className="text-[10px] font-mono text-sky-400 block mt-1">12,480 vouchers evaluated</span>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-800/90 border border-slate-700">
                        <span className="text-xs font-mono text-slate-400 block">TOTAL SUBLEDGER CREDITS</span>
                        <span className="text-2xl font-black font-mono text-white mt-1 block">$14,892,420.00</span>
                        <span className="text-[10px] font-mono text-emerald-400 block mt-1">Zero discrepancy found</span>
                      </div>
                    </div>
                  </div>

                  {/* Audit Sampling Telemetry Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">Unmatched Items</span>
                      <span className="text-base font-bold text-emerald-600 font-mono mt-0.5 block">0 Transactions</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Automated auto-reconciliation</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">Dual Approval Queue</span>
                      <span className="text-base font-bold text-[#0F172A] font-mono mt-0.5 block">100% Signoff</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Enforced before general close</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">Audit Log Hash</span>
                      <span className="text-base font-bold text-[#0284C7] font-mono mt-0.5 block">SHA-256 Validated</span>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Immutable audit trail</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ================= 3. FINANCIAL ANALYSIS PANEL ================= */}
              {activeTab === "analysis" && (
                <motion.div
                  key="analysis"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-600 font-bold block">
                        PERFORMANCE MODELING & SENSITIVITY
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                        Operating Trajectory & Margin Structure
                      </h3>
                    </div>

                    {/* Scenario Switcher */}
                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-mono">
                      {[
                        { id: "base", label: "Base Case" },
                        { id: "conservative", label: "Stress Test (+5% OpEx)" },
                        { id: "accelerated", label: "Expansion (+15% Rev)" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setScenarioMode(item.id as any)}
                          className={`px-3 py-1 rounded-lg transition-all ${
                            scenarioMode === item.id
                              ? "bg-indigo-600 text-white font-bold shadow-2xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Trajectory Curve Visualization */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-[#0F172A]">
                        {scenarioMode === "base" && "RUN-RATE: $18,420,000 (EBITDA 32.6%)"}
                        {scenarioMode === "conservative" && "RUN-RATE: $16,840,000 (EBITDA 27.8%)"}
                        {scenarioMode === "accelerated" && "RUN-RATE: $21,180,000 (EBITDA 36.4%)"}
                      </span>
                      <span className="text-indigo-600 font-bold">
                        {scenarioMode === "base" && "+18.4% YoY Trajectory"}
                        {scenarioMode === "conservative" && "Stress Tested & Solvent"}
                        {scenarioMode === "accelerated" && "+28.2% Accelerated"}
                      </span>
                    </div>

                    {/* Animated SVG Curve */}
                    <div className="h-28 w-full relative">
                      <svg viewBox="0 0 600 100" className="w-full h-full overflow-visible">
                        <defs>
                          <linearGradient id="analysisGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d={
                            scenarioMode === "base"
                              ? "M 0,80 Q 150,70 300,50 T 450,30 T 600,15 L 600,100 L 0,100 Z"
                              : scenarioMode === "conservative"
                              ? "M 0,80 Q 150,75 300,65 T 450,55 T 600,45 L 600,100 L 0,100 Z"
                              : "M 0,80 Q 150,60 300,35 T 450,20 T 600,8 L 600,100 L 0,100 Z"
                          }
                          fill="url(#analysisGradient)"
                          className="transition-all duration-500 ease-out"
                        />
                        <path
                          d={
                            scenarioMode === "base"
                              ? "M 0,80 Q 150,70 300,50 T 450,30 T 600,15"
                              : scenarioMode === "conservative"
                              ? "M 0,80 Q 150,75 300,65 T 450,55 T 600,45"
                              : "M 0,80 Q 150,60 300,35 T 450,20 T 600,8"
                          }
                          fill="none"
                          stroke="#6366F1"
                          strokeWidth="3"
                          strokeLinecap="round"
                          className="transition-all duration-500 ease-out"
                        />
                        <circle cx="450" cy={scenarioMode === "base" ? 30 : scenarioMode === "conservative" ? 55 : 20} r="4" fill="#6366F1" />
                        <circle cx="600" cy={scenarioMode === "base" ? 15 : scenarioMode === "conservative" ? 45 : 8} r="5" fill="#6366F1" className="animate-ping opacity-60" />
                      </svg>
                    </div>

                    <div className="flex justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-200/80">
                      <span>Q1 FY26 (Actual)</span>
                      <span>Q2 FY26 (Audited)</span>
                      <span>Q3 FY26 (Forecast)</span>
                      <span>Q4 FY26 (Target)</span>
                    </div>
                  </div>

                  {/* Levers & Metric Row */}
                  <div className="grid grid-cols-3 gap-3 font-mono text-center">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 block uppercase">Cash Conversion</span>
                      <span className="text-lg font-bold text-[#0F172A] mt-0.5 block">38 Days</span>
                      <span className="text-[10px] text-emerald-600 block">-6 days improvement</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 block uppercase">Gross Margin</span>
                      <span className="text-lg font-bold text-[#0F172A] mt-0.5 block">72.4%</span>
                      <span className="text-[10px] text-indigo-600 block">+3.1% YoY expansion</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 block uppercase">Runway Solvency</span>
                      <span className="text-lg font-bold text-[#0F172A] mt-0.5 block">32 Months</span>
                      <span className="text-[10px] text-emerald-600 block">Fully capital efficient</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ================= 4. BUSINESS INSIGHTS PANEL ================= */}
              {activeTab === "business" && (
                <motion.div
                  key="business"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-700 font-bold block">
                        OPERATIONAL COST CENTERS & UNIT ECONOMICS
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                        Driver-Based Executive Business Support
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-mono">
                      {[
                        { id: "all", label: "Consolidated" },
                        { id: "enterprise", label: "Enterprise Tier" },
                        { id: "midmarket", label: "Growth Tier" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setBusinessSegment(item.id as any)}
                          className={`px-3 py-1 rounded-lg transition-all ${
                            businessSegment === item.id
                              ? "bg-[#06B6D4] text-white font-bold shadow-2xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3 Unit Economics Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-mono text-slate-400 uppercase block">CAC Payback Period</span>
                      <span className="text-2xl font-black font-mono text-[#0F172A] mt-1 block">6.2 Months</span>
                      <span className="text-xs text-emerald-600 font-mono mt-1 block">Industry benchmark: 12-14 mo</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-mono text-slate-400 uppercase block">LTV to CAC Ratio</span>
                      <span className="text-2xl font-black font-mono text-[#0F172A] mt-1 block">4.8x Ratio</span>
                      <span className="text-xs text-cyan-700 font-mono mt-1 block">High capital efficiency</span>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-xs font-mono text-slate-400 uppercase block">Net Revenue Retention</span>
                      <span className="text-2xl font-black font-mono text-[#0F172A] mt-1 block">118.4%</span>
                      <span className="text-xs text-emerald-600 font-mono mt-1 block">Negative net churn</span>
                    </div>
                  </div>

                  {/* Operational Briefing Callout */}
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                        EXECUTIVE BRIEFING SUMMARY
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300">
                        Operating expenses normalized across all cost centers. Working capital cycle reduced by 6 days, unlocking $840k in free operational cash flow.
                      </p>
                    </div>

                    <Link
                      href="/solutions#business"
                      className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      <span>View Full Analysis</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Console Bottom Status Bar */}
          <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono gap-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Connected Subledgers: Active &middot; Zero Data Drift
            </span>
            <Link
              href="/platform"
              className="inline-flex items-center gap-1 text-[#0284C7] hover:underline font-semibold"
            >
              <span>Explore Technical Architecture</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
