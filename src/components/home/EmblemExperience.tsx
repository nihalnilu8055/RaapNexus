"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  FileCheck2,
  Database,
  ArrowRight,
  Eye,
} from "lucide-react";

export const EmblemExperience: React.FC = () => {
  const guarantees = [
    {
      num: "01",
      title: "Zero Direct Database Writes",
      desc: "All transaction proposals and audit queries interface through validated application services with isolation buffers. Direct SQL mutations are strictly forbidden by design.",
      icon: Database,
    },
    {
      num: "02",
      title: "Cryptographic Tenant & Entity Isolation",
      desc: "Strict multi-entity and subsidiary boundary verification prevents cross-company data leakage across regional holding companies.",
      icon: Lock,
    },
    {
      num: "03",
      title: "Mandatory Human Dual-Control",
      desc: "High-impact adjustments, voucher drafts, and commercial postings require explicit two-person authorized human sign-off before ERP commitment.",
      icon: UserCheck,
    },
    {
      num: "04",
      title: "Zero Proprietary Data Training",
      desc: "Your organization's charts of accounts, financial balances, and sensitive transaction data are never retained or used to train external models.",
      icon: FileCheck2,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#05080E] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37]/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
            Architectural Integrity
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FBF9F5] tracking-tight">
            Engineered for institutional trust.
          </h2>
          <p className="text-sm sm:text-base text-[#C8CED8] font-normal leading-relaxed">
            Designed for Chief Financial Officers, Audit Committees, and Institutional IT Leaders who require uncompromised financial precision and governance.
          </p>
        </div>

        {/* Central Architecture & Integrity Layer Diagram */}
        <div className="rounded-3xl bg-[#0B111D] border border-white/[0.08] hover:border-[#00C4FF]/30 transition-colors p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Architectural Protocol Node with Controlled Emblem */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center space-y-5">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center select-none group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00C4FF]/15 via-[#38BDF8]/10 to-transparent blur-2xl pointer-events-none" />
                
                {/* Concentric Precision Rings */}
                <div className="absolute inset-1 rounded-full border border-[#00C4FF]/20 pointer-events-none" />
                <div className="absolute inset-4 rounded-full border border-dashed border-[#00C4FF]/25 pointer-events-none animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-white/10 pointer-events-none" />

                {/* Controlled 3D Emblem Mark */}
                <img
                  src="/images/raapnexus-mark.png"
                  alt="Nexus Financial Core Protocol"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain relative z-10 transform transition-transform duration-500 ease-out group-hover:scale-105 filter drop-shadow-[0_4px_16px_rgba(0,196,255,0.4)]"
                  loading="lazy"
                />
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold tracking-widest text-[#00C4FF] uppercase">
                  Nexus Intelligence Core
                </span>
                <p className="text-xs text-[#7E8B9E] max-w-xs leading-relaxed">
                  Deterministic transaction gate separating executive intelligence and analytical models from core ERP tables.
                </p>
              </div>
            </div>

            {/* Right: 4 Institutional Controls */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guarantees.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="p-5 rounded-2xl bg-[#070B12] border border-white/[0.06] hover:border-[#D4AF37]/40 transition-all duration-300 space-y-2.5 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-[#0E1726] border border-[#D4AF37]/20 flex items-center justify-center text-[#E5C378]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#7E8B9E]">
                        Control {item.num}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#FBF9F5] group-hover:text-[#E5C378] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#7E8B9E] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};