"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Receipt,
  TrendingUp,
  ShoppingBag,
  Package,
  Users,
  Kanban,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Clock,
  ChevronRight,
  Laptop,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface ERPModule {
  id: string;
  name: string;
  tag: string;
  icon: React.ElementType;
  description: string;
  capabilities: string[];
  metrics: { label: string; value: string; badge: string }[];
  previewUi: () => React.ReactNode;
}

const modules: ERPModule[] = [
  {
    id: "finance",
    name: "Finance & Accounting",
    tag: "General Ledger & Tax",
    icon: Receipt,
    description:
      "Automate general ledger balancing, multi-currency customer invoicing, statutory VAT/tax returns, and period-close reconciliations with institutional dual-control governance.",
    capabilities: [
      "Real-time debit/credit continuous trial balance",
      "Multi-jurisdiction VAT & vendor TRN verification",
      "Zero direct database writes with read-only security",
    ],
    metrics: [
      { label: "Trial Balance", value: "$14,892,420.00", badge: "Balanced" },
      { label: "Net Tax Variance", value: "$0.00 Net", badge: "Reconciled" },
      { label: "Close Cycle", value: "Real-Time", badge: "Automated" },
    ],
    previewUi: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="p-3 bg-slate-900 text-white rounded-xl space-y-2">
          <div className="flex justify-between items-center text-[11px] text-slate-400 border-b border-slate-800 pb-2">
            <span>GENERAL LEDGER SUMMARY · Q3 FY26</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Debit = Credit
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-2 rounded bg-slate-800/80 border border-slate-700">
              <span className="text-[9px] text-slate-400 block uppercase">Debits</span>
              <span className="text-sm font-bold text-white">$14,892,420.00</span>
            </div>
            <div className="p-2 rounded bg-slate-800/80 border border-slate-700">
              <span className="text-[9px] text-slate-400 block uppercase">Credits</span>
              <span className="text-sm font-bold text-white">$14,892,420.00</span>
            </div>
          </div>
        </div>
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
            <span>Recent Vouchers</span>
            <span className="text-sky-600">Audit Status</span>
          </div>
          <div className="space-y-1.5 text-[11px]">
            <div className="flex justify-between items-center bg-white p-2 rounded border border-slate-100">
              <span className="text-slate-800 font-semibold">JV-9021 Vendor Payables</span>
              <span className="text-emerald-600 font-bold text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Verified</span>
            </div>
            <div className="flex justify-between items-center bg-white p-2 rounded border border-slate-100">
              <span className="text-slate-800 font-semibold">TRN-4819 VAT Adjustment</span>
              <span className="text-sky-600 font-bold text-[10px] bg-sky-50 px-2 py-0.5 rounded border border-sky-200">Reconciled</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "sales",
    name: "Sales",
    tag: "Pipeline & Orders",
    icon: TrendingUp,
    description:
      "Manage customer quotes, sales orders, pricing contracts, and automated invoicing. Connect closed opportunities directly to delivery and accounting without manual duplicate entry.",
    capabilities: [
      "End-to-end quotation to invoice conversion",
      "Multi-tier customer discount approval rules",
      "Live order fulfillment and payment status tracking",
    ],
    metrics: [
      { label: "Active Pipeline", value: "$4,280,000", badge: "+22% QoQ" },
      { label: "Order Velocity", value: "99.8% On-Time", badge: "Optimal" },
      { label: "Avg Close Time", value: "14 Days", badge: "-4 Days" },
    ],
    previewUi: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="flex justify-between text-[11px] font-bold text-slate-700">
            <span>SALES PIPELINE STAGES</span>
            <span className="text-sky-600">84 Active Orders</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="p-2 bg-white rounded border border-slate-200">
              <span className="text-slate-400 block">Quoted</span>
              <span className="text-xs font-bold text-slate-800">$1.4M</span>
            </div>
            <div className="p-2 bg-white rounded border border-slate-200">
              <span className="text-slate-400 block">Approved</span>
              <span className="text-xs font-bold text-emerald-600">$2.1M</span>
            </div>
            <div className="p-2 bg-white rounded border border-slate-200">
              <span className="text-slate-400 block">Invoiced</span>
              <span className="text-xs font-bold text-sky-600">$780k</span>
            </div>
          </div>
        </div>
        <div className="p-3 bg-slate-900 text-white rounded-xl space-y-2">
          <div className="flex justify-between text-[11px] text-slate-400">
            <span>RECENT CONTRACTS</span>
            <span className="text-emerald-400 font-semibold">Auto-Synced to GL</span>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between bg-slate-800/80 p-2 rounded border border-slate-700">
              <span>Apex Logistics LLC · Enterprise Tier</span>
              <span className="text-emerald-400 font-bold">$184,000</span>
            </div>
            <div className="flex justify-between bg-slate-800/80 p-2 rounded border border-slate-700">
              <span>Vertex Holdings · Annual License</span>
              <span className="text-emerald-400 font-bold">$92,500</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "purchasing",
    name: "Purchasing",
    tag: "Procurement & POs",
    icon: ShoppingBag,
    description:
      "Automate purchase orders, vendor evaluation, and three-way matching (PO vs. Goods Receipt vs. Vendor Bill) to prevent overpayments and eliminate billing discrepancies.",
    capabilities: [
      "Automated three-way PO matching",
      "Vendor TRN statutory compliance verification",
      "Departmental budget threshold controls",
    ],
    metrics: [
      { label: "Open Orders", value: "34 POs", badge: "In Fulfillment" },
      { label: "Matching Accuracy", value: "100.0%", badge: "Zero Discrepancy" },
      { label: "Cost Savings", value: "8.4%", badge: "Negotiated" },
    ],
    previewUi: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="flex justify-between text-[11px] font-bold text-slate-700">
            <span>3-WAY MATCH VERIFICATION</span>
            <span className="text-emerald-600 font-bold">100% Matched</span>
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div className="flex items-center justify-between bg-white p-2 rounded border border-slate-200">
              <span>PO #4910 &middot; Hardware Ingestion</span>
              <span className="text-slate-800 font-bold">$42,800.00</span>
              <span className="text-emerald-600 font-bold">Receipt Matched</span>
            </div>
            <div className="flex items-center justify-between bg-white p-2 rounded border border-slate-200">
              <span>PO #4912 &middot; Cloud Data Center Feeds</span>
              <span className="text-slate-800 font-bold">$18,400.00</span>
              <span className="text-emerald-600 font-bold">Bill Approved</span>
            </div>
          </div>
        </div>
        <div className="p-3 bg-sky-50 border border-sky-200/80 rounded-xl flex items-center justify-between text-[11px]">
          <span className="text-slate-700 font-medium">Vendor TRN Check: Verified with UAE FTA & KSA ZATCA</span>
          <span className="text-sky-700 font-bold">Compliant</span>
        </div>
      </div>
    ),
  },
  {
    id: "inventory",
    name: "Inventory",
    tag: "Stock & Warehouse",
    icon: Package,
    description:
      "Track multi-warehouse inventory valuation, batch serials, safety stock levels, and automated replenishment triggers to ensure zero fulfillment stockouts.",
    capabilities: [
      "Multi-warehouse inventory tracking and bin allocation",
      "Automated replenishment and safety stock alerts",
      "FIFO and Weighted Average valuation accounting",
    ],
    metrics: [
      { label: "Turnover Velocity", value: "8.4x / yr", badge: "+1.2x YoY" },
      { label: "Fulfillment Rate", value: "99.4%", badge: "Optimal" },
      { label: "Stock Accuracy", value: "99.98%", badge: "Audited" },
    ],
    previewUi: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="p-3 bg-slate-900 text-white rounded-xl space-y-2">
          <div className="flex justify-between items-center text-[11px] text-slate-400">
            <span>MULTI-WAREHOUSE STOCK TELEMETRY</span>
            <span className="text-emerald-400 font-bold">All Sites Active</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="p-2 bg-slate-800/80 rounded border border-slate-700">
              <span className="text-slate-400 block">Hub A (Dubai)</span>
              <span className="text-sm font-bold text-white">4,280 Units</span>
            </div>
            <div className="p-2 bg-slate-800/80 rounded border border-slate-700">
              <span className="text-slate-400 block">Hub B (Riyadh)</span>
              <span className="text-sm font-bold text-white">3,120 Units</span>
            </div>
            <div className="p-2 bg-slate-800/80 rounded border border-slate-700">
              <span className="text-slate-400 block">Hub C (DIFC)</span>
              <span className="text-sm font-bold text-white">1,840 Units</span>
            </div>
          </div>
        </div>
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-[11px]">
          <span className="text-slate-700 font-medium">Auto-Replenish Queue: 0 stockouts pending</span>
          <span className="text-emerald-600 font-bold">Protected</span>
        </div>
      </div>
    ),
  },
  {
    id: "hr",
    name: "Human Resources",
    tag: "Payroll & People",
    icon: Users,
    description:
      "Oversee employee directories, organizational roles, leave requests, and automated statutory payroll runs with direct integration into the general ledger.",
    capabilities: [
      "Automated payroll calculation with statutory deductions",
      "Role-based permission gating and audit access logs",
      "Leave approval workflows with manager signoff",
    ],
    metrics: [
      { label: "Active Team", value: "340 Staff", badge: "14 Locations" },
      { label: "Payroll Processing", value: "100% On-Time", badge: "Automated" },
      { label: "Compliance", value: "WPS Ready", badge: "Verified" },
    ],
    previewUi: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="flex justify-between text-[11px] font-bold text-slate-700">
            <span>MONTHLY PAYROLL EXECUTION</span>
            <span className="text-sky-600">WPS Verified</span>
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div className="flex justify-between bg-white p-2 rounded border border-slate-200">
              <span className="text-slate-800">Total Net Salary Disbursement</span>
              <span className="text-slate-900 font-bold">$684,200.00</span>
            </div>
            <div className="flex justify-between bg-white p-2 rounded border border-slate-200">
              <span className="text-slate-800">Statutory Tax & Social Deductions</span>
              <span className="text-slate-900 font-bold">$92,400.00</span>
            </div>
          </div>
        </div>
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-[11px]">
          <span className="text-emerald-800 font-medium">Dual-Control Approval: Signed off by CFO & HR Lead</span>
          <span className="text-emerald-700 font-bold">100% Cleared</span>
        </div>
      </div>
    ),
  },
  {
    id: "project",
    name: "Project Management",
    tag: "Milestones & Time",
    icon: Kanban,
    description:
      "Plan project milestones, track billable consultant timesheets, monitor budget burn rates, and tie task deliverables directly to customer invoicing.",
    capabilities: [
      "Milestone planning and dependency tracking",
      "Timesheet-to-invoice automated billing",
      "Budget vs. actual expenditure telemetry",
    ],
    metrics: [
      { label: "Active Projects", value: "24 Engagements", badge: "On Track" },
      { label: "Billable Utilization", value: "88.4%", badge: "+4.2%" },
      { label: "Margin per Project", value: "38.2%", badge: "Healthy" },
    ],
    previewUi: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="flex justify-between text-[11px] font-bold text-slate-700">
            <span>PROJECT BUDGET TELEMETRY</span>
            <span className="text-indigo-600 font-bold">Within Limits</span>
          </div>
          <div className="space-y-1.5 text-[10px]">
            <div className="flex justify-between items-center bg-white p-2 rounded border border-slate-200">
              <span>ERP Migration Phase II &middot; Client A</span>
              <span className="text-slate-900 font-bold">$142,000 / $160,000</span>
              <span className="text-emerald-600 font-bold">88% Burn</span>
            </div>
            <div className="flex justify-between items-center bg-white p-2 rounded border border-slate-200">
              <span>Financial Infrastructure Setup &middot; Client B</span>
              <span className="text-slate-900 font-bold">$78,000 / $90,000</span>
              <span className="text-emerald-600 font-bold">86% Burn</span>
            </div>
          </div>
        </div>
        <div className="p-3 bg-slate-900 text-white rounded-xl flex items-center justify-between text-[11px]">
          <span className="text-slate-300">Billable timesheets auto-attached to monthly customer invoices</span>
          <span className="text-sky-400 font-bold">Active</span>
        </div>
      </div>
    ),
  },
  {
    id: "reporting",
    name: "Reporting & Analytics",
    tag: "Executive BI",
    icon: BarChart3,
    description:
      "Convert operational records into real-time executive dashboards, cash flow runway models, EBITDA sensitivity forecasts, and automated board presentations.",
    capabilities: [
      "Deterministic scenario sensitivity modeling",
      "Multi-dimensional drilldown into raw general ledgers",
      "Scheduled board-ready financial intelligence briefs",
    ],
    metrics: [
      { label: "EBITDA Margin", value: "32.6%", badge: "+18.4% YoY" },
      { label: "Cash Runway", value: "32 Months", badge: "Stress-Tested" },
      { label: "Query Latency", value: "< 140ms", badge: "Instant" },
    ],
    previewUi: () => (
      <div className="space-y-3 font-mono text-xs">
        <div className="p-3 bg-slate-900 text-white rounded-xl space-y-2">
          <div className="flex justify-between items-center text-[11px] text-slate-400">
            <span>EXECUTIVE BI TRAJECTORY</span>
            <span className="text-sky-400 font-bold">+18.4% Operating Trajectory</span>
          </div>
          <div className="h-16 w-full relative">
            <svg viewBox="0 0 400 60" className="w-full h-full overflow-visible">
              <path
                d="M 0,45 Q 100,40 200,28 T 300,18 T 400,8"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="300" cy="18" r="3" fill="#38BDF8" />
              <circle cx="400" cy="8" r="3" fill="#38BDF8" className="animate-ping opacity-60" />
            </svg>
          </div>
        </div>
        <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-between text-[11px]">
          <span className="text-sky-900 font-medium">Board Pack PDF: Generated with cryptographic audit trail</span>
          <span className="text-[#0284C7] font-bold">Ready</span>
        </div>
      </div>
    ),
  },
];

export const ModuleExplorer: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeModuleId, setActiveModuleId] = useState<string>("finance");

  const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];
  const ActiveIcon = activeModule.icon;

  return (
    <section id="modules" className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] relative overflow-hidden border-b border-slate-200/60">
      
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] pointer-events-none rounded-full blur-[120px] opacity-25 -z-10"
        style={{
          background: "radial-gradient(ellipse at center, rgba(14,165,233,0.3), rgba(2,132,199,0.12), transparent 70%)",
        }}
      />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs sm:text-[13px] font-body font-medium text-[#0284C7] mb-3 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Integrated Application Suite</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-heading font-bold text-[#0F172A] tracking-[-0.025em] leading-[1.18]">
            Everything Connected.{" "}
            <span className="gradient-accent inline-block">One ERP.</span>
          </h2>

          <p className="mt-3 text-[15px] sm:text-base lg:text-[17px] text-slate-600 font-body font-normal leading-[1.65]">
            Explore the tools that bring your business workflows together.
          </p>
        </div>

        {/* Horizontal Scrollable / Responsive Grid Module Selector Bar */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-2 min-w-max sm:min-w-0">
            {modules.map((mod) => {
              const Icon = mod.icon;
              const isActive = activeModuleId === mod.id;

              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`flex flex-col items-center text-center p-3 sm:p-3.5 rounded-2xl transition-all duration-200 border cursor-pointer active:scale-95 ${
                    isActive
                      ? "bg-white border-[#0284C7] text-[#0F172A] shadow-[0_10px_25px_-5px_rgba(2,132,199,0.15)] ring-1 ring-[#0284C7]/20 -translate-y-1"
                      : "bg-white/70 hover:bg-white border-slate-200/80 text-slate-600 hover:text-slate-900 shadow-2xs"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                      isActive
                        ? "bg-[#0284C7] text-white shadow-xs"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-xs font-bold tracking-tight block whitespace-nowrap">
                    {mod.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5 block whitespace-nowrap">
                    {mod.tag}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Module Detail Panel */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] overflow-hidden">
          
          {/* Top Panel Bar */}
          <div className="px-6 py-3.5 bg-slate-50/90 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                RaapNexus ERP &middot; Module: {activeModule.name}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                Integrated Ledger & Workflow
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-sky-50 text-[#0284C7] font-semibold border border-sky-200">
                Active Operational Module
              </span>
            </div>
          </div>

          {/* Panel Body Grid */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Narrative & Capabilities */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#0284C7] text-xs font-body font-medium">
                  <ActiveIcon className="w-3.5 h-3.5" />
                  <span>{activeModule.tag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-heading font-bold text-[#0F172A] tracking-tight">
                  {activeModule.name}
                </h3>
                <p className="text-[15px] sm:text-base text-slate-600 font-body font-normal leading-relaxed pt-1">
                  {activeModule.description}
                </p>
              </div>

              {/* Key Capability Checklist */}
              <div className="space-y-2.5 pt-1">
                {activeModule.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-[14px] font-body font-normal text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

              {/* Telemetry Stats Strip */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
                {activeModule.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[10px] sm:text-[11px] font-body text-slate-500 block truncate">{m.label}</span>
                    <span className="text-xs sm:text-sm font-heading font-bold text-[#0F172A] block mt-0.5 truncate">{m.value}</span>
                    <span className="text-[11px] font-body text-[#0284C7] font-semibold block mt-0.5">{m.badge}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/erp-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-body font-semibold shadow-xs transition-all duration-200 group interactive-target"
                >
                  <span>Explore the ERP Demo</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-1 text-sky-400" />
                </Link>
              </div>

            </div>

            {/* Right Illustrative Representative UI Preview */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono border-b border-slate-100 pb-2">
                  <span className="text-slate-500 font-semibold flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-[#0284C7]" />
                    Illustrative Module Preview · RaapNexus ERP
                  </span>
                  <span className="text-emerald-600 font-bold">Synchronized</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeModule.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeModule.previewUi()}
                  </motion.div>
                </AnimatePresence>

                <div className="pt-2 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Target: raap.techorbit.net</span>
                  <span>Institutional Data Sanitized</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
