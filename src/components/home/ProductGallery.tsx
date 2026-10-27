"use client";

import React, { useState } from "react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/mockData";
import {
  Maximize2,
  X,
  Sparkles,
  Bot,
  BarChart3,
  Scale,
  Building2,
  Package,
  FileCheck2,
  FileSpreadsheet,
  ShieldCheck,
  Building,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Filter,
  CheckCircle2,
  Search,
  Database,
  Lock,
} from "lucide-react";

export const ProductGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Conversational Intelligence",
    "Executive Intelligence",
    "Financial Control",
    "Sales & Distribution",
    "Supply Chain",
    "Transaction Execution",
    "Security & Governance",
  ];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) =>
          item.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  // Renders the specific high-fidelity HTML/CSS interface for each mockup
  const renderMockupContent = (itemId: string, isModal = false) => {
    switch (itemId) {
      case "conversational-workspace":
        return (
          <div className="bg-[#07111F] rounded-xl border border-[#1E314B] p-3.5 sm:p-4 text-xs font-sans space-y-3">
            <div className="flex items-center justify-between border-b border-[#1E314B] pb-2 text-[#8E9EBA]">
              <span className="font-mono text-[#42D9F5] flex items-center gap-1.5 text-[11px]">
                <Bot className="w-3.5 h-3.5" />
                Prompt Execution Stream
              </span>
              <span className="text-[10px] font-mono bg-[#101F35] px-2 py-0.5 rounded text-emerald-400">
                Connected: MCP Server v1.0
              </span>
            </div>
            <div className="bg-[#101F35] p-2.5 rounded-lg border border-[#1E314B]/70 space-y-1">
              <span className="text-[10px] text-[#8E9EBA] font-mono">User Prompt:</span>
              <p className="text-white font-medium">&ldquo;Show me Q3 revenue by region and highlight any variance over 5%.&rdquo;</p>
            </div>
            <div className="bg-[#0B1728] p-3 rounded-lg border border-[#42D9F5]/30 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-white">Q3 Regional Revenue Summary</span>
                <span className="text-emerald-400 font-mono text-[10px]">+8.4% Net Variance</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="bg-[#07111F] p-2 rounded border border-[#1E314B]">
                  <span className="text-[#8E9EBA] block">MENA Region</span>
                  <span className="font-bold text-white">$14.2M (+12%)</span>
                </div>
                <div className="bg-[#07111F] p-2 rounded border border-[#1E314B]">
                  <span className="text-[#8E9EBA] block">Europe Hub</span>
                  <span className="font-bold text-white">$9.8M (+4%)</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "executive-dashboard":
        return (
          <div className="bg-[#07111F] rounded-xl border border-[#1E314B] p-3.5 sm:p-4 text-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#1E314B] pb-2">
              <span className="font-bold text-white flex items-center gap-1.5 text-xs">
                <BarChart3 className="w-3.5 h-3.5 text-[#42D9F5]" />
                Executive Command Center
              </span>
              <span className="text-[10px] font-mono text-[#8E9EBA]">Consolidated FY2026</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-[#101F35] p-2 rounded border border-[#1E314B]">
                <span className="text-[10px] text-[#8E9EBA] block">Revenue YTD</span>
                <span className="font-extrabold text-white text-xs sm:text-sm">$48.2M</span>
                <span className="text-[10px] text-emerald-400 block">+14.2%</span>
              </div>
              <div className="bg-[#101F35] p-2 rounded border border-[#1E314B]">
                <span className="text-[10px] text-[#8E9EBA] block">EBITDA</span>
                <span className="font-extrabold text-white text-xs sm:text-sm">34.2%</span>
                <span className="text-[10px] text-emerald-400 block">+$16.5M</span>
              </div>
              <div className="bg-[#101F35] p-2 rounded border border-[#1E314B]">
                <span className="text-[10px] text-[#8E9EBA] block">Cash Liquidity</span>
                <span className="font-extrabold text-white text-xs sm:text-sm">$12.8M</span>
                <span className="text-[10px] text-cyan-400 block">Safe Headroom</span>
              </div>
            </div>
            <div className="h-10 bg-[#0B1728] rounded border border-[#1E314B] flex items-end p-1 gap-1">
              <div className="h-4/6 flex-1 bg-[#42D9F5]/40 rounded-sm" />
              <div className="h-5/6 flex-1 bg-[#42D9F5]/60 rounded-sm" />
              <div className="h-3/6 flex-1 bg-[#42D9F5]/50 rounded-sm" />
              <div className="h-6/6 flex-1 bg-[#9B8CFF] rounded-sm" />
              <div className="h-5/6 flex-1 bg-[#42D9F5] rounded-sm" />
            </div>
          </div>
        );

      case "financial-trial-balance":
        return (
          <div className="bg-[#07111F] rounded-xl border border-[#1E314B] p-3.5 sm:p-4 text-xs font-mono space-y-2">
            <div className="flex justify-between items-center border-b border-[#1E314B] pb-2 text-[11px]">
              <span className="text-[#42D9F5] font-bold flex items-center gap-1">
                <Scale className="w-3.5 h-3.5" />
                Trial Balance (Period 08)
              </span>
              <span className="text-emerald-400 font-semibold">Balanced: $4.98M</span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between py-1 border-b border-[#1E314B]/40">
                <span className="text-[#8E9EBA] truncate max-w-[170px]">1010-01 Operating Bank Cash</span>
                <span className="text-white">$842,500.00 DR</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1E314B]/40">
                <span className="text-[#8E9EBA] truncate max-w-[170px]">1200-00 Accounts Receivable</span>
                <span className="text-white">$1,215,300.00 DR</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#1E314B]/40">
                <span className="text-[#8E9EBA] truncate max-w-[170px]">2010-00 Trade Accounts Payable</span>
                <span className="text-white">$684,200.00 CR</span>
              </div>
            </div>
            <div className="pt-1 flex justify-between font-bold text-emerald-400 text-[11px]">
              <span>Discrepancy: $0.00</span>
              <span className="text-[#8E9EBA] font-normal">Reconciled to GL</span>
            </div>
          </div>
        );

      case "branch-sales-analytics":
        return (
          <div className="bg-[#07111F] rounded-xl border border-[#1E314B] p-3.5 sm:p-4 text-xs space-y-2.5">
            <div className="flex justify-between items-center border-b border-[#1E314B] pb-2">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#42D9F5]" />
                Branch Telemetry
              </span>
              <span className="text-[#42D9F5] font-bold">$184,420 Total</span>
            </div>
            <div className="space-y-2 text-[11px]">
              <div>
                <div className="flex justify-between text-white font-medium">
                  <span className="truncate">Dubai Downtown (DXB-01)</span>
                  <span>$78,500 (+12%)</span>
                </div>
                <div className="w-full bg-[#101F35] h-1.5 rounded-full mt-1">
                  <div className="bg-[#42D9F5] h-1.5 rounded-full w-[85%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-white font-medium">
                  <span className="truncate">Abu Dhabi Mall (AUH-02)</span>
                  <span>$52,120 (+8%)</span>
                </div>
                <div className="w-full bg-[#101F35] h-1.5 rounded-full mt-1">
                  <div className="bg-[#9B8CFF] h-1.5 rounded-full w-[65%]" />
                </div>
              </div>
            </div>
          </div>
        );

      case "inventory-stock-analysis":
        return (
          <div className="bg-[#07111F] rounded-xl border border-[#1E314B] p-3.5 sm:p-4 text-xs space-y-2.5">
            <div className="flex justify-between items-center border-b border-[#1E314B] pb-2">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-amber-400" />
                Warehouse Stock Velocity
              </span>
              <span className="text-emerald-400 font-mono text-[10px]">0 Stockouts</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="bg-[#101F35] p-2 rounded border border-[#1E314B]">
                <span className="text-[#8E9EBA] block">Server Blade X8</span>
                <span className="font-bold text-white">142 in stock (34d)</span>
              </div>
              <div className="bg-[#101F35] p-2 rounded border border-[#1E314B]">
                <span className="text-[#8E9EBA] block">IoT Edge GW v4</span>
                <span className="font-bold text-white">380 in stock (42d)</span>
              </div>
            </div>
            <div className="bg-emerald-950/40 border border-emerald-500/30 p-1.5 rounded text-[10px] text-emerald-400">
              Optimal buffer: All top 10 revenue drivers covered above safety threshold.
            </div>
          </div>
        );

      case "invoice-creation-approval":
        return (
          <div className="bg-[#07111F] rounded-xl border border-[#1E314B] p-3.5 sm:p-4 text-xs space-y-2.5">
            <div className="flex justify-between items-center border-b border-[#1E314B] pb-2">
              <span className="font-bold text-[#9B8CFF] flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5" />
                Staged Invoice #INV-9014
              </span>
              <span className="text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded text-[10px] border border-amber-500/30">
                Pending Sign-Off
              </span>
            </div>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span className="text-[#8E9EBA]">Customer:</span>
                <span className="text-white font-medium truncate">Al Noor Trading LLC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8E9EBA]">Items:</span>
                <span className="text-white">20x Server Blade X8</span>
              </div>
              <div className="flex justify-between font-bold text-white pt-1 border-t border-[#1E314B]">
                <span>Total Payable:</span>
                <span className="text-[#42D9F5]">$17,850.00</span>
              </div>
            </div>
          </div>
        );

      case "excel-ready-reporting":
        return (
          <div className="bg-[#07111F] rounded-xl border border-[#1E314B] p-3.5 sm:p-4 text-xs font-mono space-y-2">
            <div className="flex justify-between items-center border-b border-[#1E314B] pb-2">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5" />
                Live Excel Grid: [fx = SUM(B2:B9)]
              </span>
              <span className="text-[10px] text-[#8E9EBA]">.XLSX Native</span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-[10px] bg-[#101F35] p-1.5 rounded text-[#8E9EBA]">
              <div className="font-bold text-white">Period</div>
              <div className="font-bold text-white">Sales</div>
              <div className="font-bold text-white">COGS</div>
              <div className="font-bold text-white">Margin</div>
              <div className="text-white">Q1 2026</div>
              <div className="text-white">$12.4M</div>
              <div className="text-white">$7.2M</div>
              <div className="text-emerald-400">41.9%</div>
            </div>
          </div>
        );

      case "audit-activity-interface":
        return (
          <div className="bg-[#07111F] rounded-xl border border-[#1E314B] p-3.5 sm:p-4 text-xs font-mono space-y-2">
            <div className="flex justify-between items-center border-b border-[#1E314B] pb-2">
              <span className="text-[#42D9F5] font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Immutable Event Stream
              </span>
              <span className="text-[10px] text-emerald-400">SHA-256 Hashed</span>
            </div>
            <div className="space-y-1.5 text-[10px]">
              <div className="bg-[#101F35] p-1.5 rounded flex justify-between">
                <span className="text-white truncate">TX_PREP: INV-9014</span>
                <span className="text-[#8E9EBA]">17:41:02 | ACTOR: CFO</span>
              </div>
              <div className="bg-[#101F35] p-1.5 rounded flex justify-between">
                <span className="text-white truncate">QUERY: BRANCH_SALES</span>
                <span className="text-[#8E9EBA]">17:40:15 | ACTOR: CEO</span>
              </div>
            </div>
          </div>
        );

      case "multi-company-tenant-selection":
        return (
          <div className="bg-[#07111F] rounded-xl border border-[#1E314B] p-3.5 sm:p-4 text-xs space-y-2.5">
            <div className="flex justify-between items-center border-b border-[#1E314B] pb-2">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#42D9F5]" />
                Tenant & Subsidiary Boundary
              </span>
              <span className="text-[10px] font-mono text-emerald-400">Strictly Isolated</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="bg-[#101F35] p-2 rounded border border-[#42D9F5]/40 flex justify-between items-center">
                <span className="text-white font-semibold truncate">GCC Holdings Ltd (Tenant #TN-8821)</span>
                <span className="text-[10px] text-[#42D9F5] font-mono shrink-0 ml-1">Active</span>
              </div>
              <div className="bg-[#0B1728] p-2 rounded border border-[#1E314B] flex justify-between items-center text-[#8E9EBA]">
                <span className="truncate">Europe Distribution SA (Tenant #TN-8822)</span>
                <span className="text-[10px] font-mono shrink-0 ml-1">Gated</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#050C16] relative border-t border-[#1E314B]/70 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#42D9F5]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#9B8CFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Software Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            See your business in a whole new light.
          </h2>

          <p className="text-sm sm:text-lg text-[#8E9EBA]">
            Explore 9 realistic product interfaces built specifically for executive clarity, granular operational analysis, and auditable enterprise workflows.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#42D9F5] text-[#07111F] font-bold shadow-md shadow-[#42D9F5]/20"
                  : "bg-[#0B1728] text-[#8E9EBA] border border-[#1E314B] hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 9 Product UI Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl bg-[#0B1728] border border-[#1E314B] hover:border-[#42D9F5]/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#42D9F5]/10 flex flex-col justify-between"
            >
              {/* Product UI Simulation Window */}
              <div className="p-3 sm:p-4 bg-[#07111F] border-b border-[#1E314B] relative">
                {/* Window Chrome */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-[#8E9EBA] truncate max-w-[170px]">
                    {item.systemScope}
                  </span>
                  <Maximize2 className="w-3.5 h-3.5 text-[#8E9EBA] group-hover:text-[#42D9F5] transition-colors" />
                </div>

                {/* Embedded HTML/CSS Interface Preview */}
                <div className="transform group-hover:scale-[1.01] transition-transform duration-300">
                  {renderMockupContent(item.id)}
                </div>
              </div>

              {/* Card Metadata & Description */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#42D9F5] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#42D9F5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8E9EBA] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Metrics Strip */}
                <div className="pt-2.5 border-t border-[#1E314B]/70 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-[#8E9EBA]">Benchmark:</span>
                    <span className="font-bold text-white font-mono text-xs">
                      {item.metrics[0].value}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#42D9F5] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accessible Modal / Lightbox for Full Inspection */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
            <div className="bg-[#0B1728] border border-[#1E314B] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-[#07111F] border-b border-[#1E314B] flex items-center justify-between sticky top-0 z-10">
                <div className="space-y-0.5 min-w-0 pr-4">
                  <span className="text-xs font-mono uppercase text-[#42D9F5] font-semibold block truncate">
                    {selectedItem.category} // Enterprise Module
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white truncate">
                    {selectedItem.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-2 rounded-xl bg-[#101F35] text-[#8E9EBA] hover:text-white border border-[#1E314B] transition-colors shrink-0"
                  aria-label="Close modal preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 space-y-6">
                {/* Expanded Interface Mockup */}
                <div className="rounded-xl border border-[#1E314B] bg-[#07111F] p-4 sm:p-5 shadow-inner">
                  <div className="flex items-center justify-between text-xs text-[#8E9EBA] pb-3 border-b border-[#1E314B] mb-4 gap-2">
                    <span className="font-mono text-[#42D9F5] truncate">System Scope: {selectedItem.systemScope}</span>
                    <span className="text-emerald-400 font-mono text-[11px] shrink-0">Production Ready</span>
                  </div>

                  {renderMockupContent(selectedItem.id, true)}
                </div>

                {/* Deep Description & Architecture Notes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-2">
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Operational Overview
                    </h4>
                    <p className="text-xs sm:text-sm text-[#8E9EBA] leading-relaxed">
                      {selectedItem.description}
                    </p>
                    <p className="text-xs text-[#8E9EBA]/80 leading-relaxed pt-1">
                      RaapNexus communicates directly with existing business services without requiring custom ETL pipelines or schema migrations.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      Key Architecture Highlights
                    </h4>
                    <ul className="space-y-1.5 text-xs text-white">
                      {selectedItem.highlightFeatures.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#42D9F5] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                  {selectedItem.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-[#101F35] p-2.5 sm:p-3 rounded-xl border border-[#1E314B] text-center"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-[#8E9EBA] block truncate">
                        {m.label}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white font-mono block mt-0.5 truncate">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer CTAs */}
                <div className="pt-4 border-t border-[#1E314B] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-[#8E9EBA] text-center sm:text-left">
                    Experience this module with your enterprise ERP data.
                  </span>

                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      window.location.href = "/contact";
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-bold text-xs shadow-lg hover:shadow-[#42D9F5]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Schedule Module Walkthrough</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
