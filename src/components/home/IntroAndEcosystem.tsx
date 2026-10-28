"use client";

import React from "react";
import {
  Database,
  Layers,
  Cpu,
  Terminal,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export const IntroAndEcosystem: React.FC = () => {
  const integrations = [
    {
      name: "SAP S/4HANA",
      category: "Enterprise ERP",
      desc: "Financial Ledger & Controlling",
      badge: "Supported System",
      icon: (
        <span className="font-extrabold text-[10px] text-[#E5C378] tracking-wider">
          SAP
        </span>
      ),
    },
    {
      name: "Oracle NetSuite",
      category: "Cloud Financials",
      desc: "SuiteTalk REST Web Services",
      badge: "Supported System",
      icon: (
        <span className="font-extrabold text-[9px] text-[#C5A880] tracking-wider">
          NETS
        </span>
      ),
    },
    {
      name: "Microsoft Dynamics",
      category: "Finance & Operations",
      desc: "General Ledger Integration",
      badge: "Supported System",
      icon: (
        <span className="font-extrabold text-[9px] text-[#E5C378] tracking-wider">
          D365
        </span>
      ),
    },
    {
      name: "QuickBooks Online",
      category: "SMB Accounting",
      desc: "Invoicing & Subledger Sync",
      badge: "Supported Platform",
      icon: (
        <span className="font-extrabold text-[9px] text-[#C5A880] tracking-wider">
          QB
        </span>
      ),
    },
    {
      name: "Xero Accounting",
      category: "Financial Management",
      desc: "Chart of Accounts Mapping",
      badge: "Supported Platform",
      icon: (
        <span className="font-extrabold text-[9px] text-[#E5C378] tracking-wider">
          XERO
        </span>
      ),
    },
    {
      name: "PostgreSQL & SQL",
      category: "Data Infrastructure",
      desc: "Gated Financial Service Endpoints",
      badge: "Zero Direct SQL",
      icon: <Database className="w-4 h-4 text-[#C5A880]" />,
    },
    {
      name: "Claude & ChatGPT",
      category: "AI Assistants",
      desc: "Model Context Protocol (MCP)",
      badge: "Compatible Client",
      icon: <Workflow className="w-4 h-4 text-[#E5C378]" />,
    },
    {
      name: "Cursor & VS Code",
      category: "Developer Workspaces",
      desc: "Financial Protocol Standard",
      badge: "MCP Ready",
      icon: <Terminal className="w-4 h-4 text-[#C5A880]" />,
    },
  ];

  // Marquee track duplicated for seamless continuous CSS animation
  const track = [...integrations, ...integrations];

  return (
    <section id="intro" className="py-20 sm:py-24 bg-[#070B12] relative border-t border-b border-[#D4AF37]/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#D4AF37]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Section 2: Financial Platform Introduction */}
        <div className="max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
            Financial Platform Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FBF9F5] tracking-tight leading-tight">
            See your finances with{" "}
            <span className="gradient-text-gold">greater clarity.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#C8CED8] font-normal leading-relaxed pt-1">
            RaapNexus brings financial auditing, tax intelligence, and business analysis into a more connected view of your business.
          </p>
        </div>

        {/* Hairline Divider with Central Gold Node */}
        <div className="relative py-4 flex items-center justify-center max-w-xl mx-auto">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
          <div className="absolute w-2 h-2 rounded-full bg-[#D4AF37] ring-4 ring-[#070B12]" />
        </div>

        {/* Section 7: Ecosystem Header */}
        <div className="space-y-1 pt-2">
          <h3 className="text-lg sm:text-xl font-bold text-[#FBF9F5]">
            Designed to fit your financial workflow.
          </h3>
          <p className="text-xs sm:text-sm text-[#7E8B9E] max-w-lg mx-auto">
            Explore the tools and systems that connect with your workflow through authoritative application services.
          </p>
        </div>
      </div>

      {/* Marquee Container with Left & Right Gradient Mask Fades */}
      <div className="relative w-full overflow-hidden group mt-10">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#070B12] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#070B12] to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <div className="flex w-max space-x-4 animate-marquee group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] py-2">
          {track.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#0B111D]/90 border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 hover:bg-[#101726] transition-all duration-300 shadow-lg shrink-0 w-64 select-none"
            >
              <div className="w-9 h-9 rounded-xl bg-[#05080E] border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              <div className="min-w-0 flex-1 text-left">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-xs font-bold text-[#FBF9F5] truncate">{item.name}</h4>
                  <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#121D30] text-[#E5C378] border border-[#D4AF37]/20 shrink-0">
                    {item.badge}
                  </span>
                </div>
                <p className="text-[11px] text-[#7E8B9E] truncate">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reassurance Micro-Label */}
      <div className="max-w-6xl mx-auto px-4 mt-6 text-center">
        <p className="text-[11px] text-[#7E8B9E]">
          Connected platforms reflect supported enterprise integration interfaces. Integrations interface through authorized API services without direct database writes.
        </p>
      </div>
    </section>
  );
};