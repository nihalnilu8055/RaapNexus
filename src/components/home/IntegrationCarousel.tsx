"use client";

import React from "react";
import {
  Bot,
  Terminal,
  Workflow,
  Cpu,
  Database,
  Layers,
  Sparkles,
} from "lucide-react";

export const IntegrationCarousel: React.FC = () => {
  const integrations = [
    {
      name: "ChatGPT",
      category: "AI Assistant",
      desc: "OpenAI Actions & Custom GPTs",
      badge: "Verified MCP",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-400" fill="currentColor">
          <path d="M22.28 10.37c-.17-.98-.67-1.87-1.42-2.52.12-.42.18-.86.18-1.3 0-1.84-1.07-3.48-2.73-4.17-.4-.17-.82-.28-1.25-.33C16.48.86 15.11 0 13.56 0c-1.35 0-2.58.65-3.36 1.73-.55-.2-1.13-.3-1.72-.3-2.18 0-4.04 1.48-4.57 3.56-.37.15-.72.35-1.03.6C1.48 6.7 1 8.24 1.57 9.8c-.37.66-.57 1.41-.57 2.2 0 1.84 1.07 3.48 2.73 4.17.4.17.82.28 1.25.33.58 1.19 1.95 2.05 3.5 2.05 1.35 0 2.58-.65 3.36-1.73.55.2 1.13.3 1.72.3 2.18 0 4.04-1.48 4.57-3.56.37-.15.72-.35 1.03-.6 1.4-1.11 1.88-2.65 1.31-4.21.38-.66.58-1.41.58-2.2 0-.6-.12-1.19-.36-1.73l.12-.05zM13.56 2.05c.87 0 1.66.45 2.11 1.17l.22.35.41-.05c.45-.06.91-.01 1.34.14 1.07.39 1.77 1.41 1.77 2.56 0 .34-.06.67-.18.98l-.13.34.28.25c.61.54.98 1.29 1.06 2.1.1.97-.24 1.94-.92 2.62l-.27.27.12.37c.22.69.21 1.44-.04 2.13-.39 1.07-1.41 1.77-2.56 1.77-.34 0-.67-.06-.98-.18l-.34-.13-.25.28c-.54.61-1.29.98-2.1 1.06-.97.1-1.94-.24-2.62-.92l-.27-.27-.37.12c-.69.22-1.44.21-2.13-.04-1.07-.39-1.77-1.41-1.77-2.56 0-.34.06-.67.18-.98l.13-.34-.28-.25c-.61-.54-.98-1.29-1.06-2.1-.1-.97.24-1.94.92-2.62l.27-.27-.12-.37c-.22-.69-.21-1.44.04-2.13.39-1.07 1.41-1.77 2.56-1.77.34 0 .67.06.98.18l.34.13.25-.28c.54-.61 1.29-.98 2.1-1.06.13-.02.26-.03.4-.03z"/>
        </svg>
      ),
    },
    {
      name: "Claude",
      category: "AI Assistant",
      desc: "Anthropic Artifacts & MCP",
      badge: "Verified MCP",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-400" fill="currentColor">
          <path d="M17.5 4.5l-4.2 14.8h-2.6L6.5 4.5h2.6l2.9 10.9L15 4.5h2.5z" />
        </svg>
      ),
    },
    {
      name: "Cursor",
      category: "AI Developer Tool",
      desc: "AI Workspace IDE Client",
      badge: "Native MCP",
      icon: <Terminal className="w-5 h-5 text-[#42D9F5]" />,
    },
    {
      name: "VS Code",
      category: "Developer Tool",
      desc: "Agentic Extension Support",
      badge: "Protocol Ready",
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
    },
    {
      name: "MCP Protocol",
      category: "Open Standard",
      desc: "Model Context Protocol v1.0",
      badge: "Core Standard",
      icon: <Workflow className="w-5 h-5 text-[#9B8CFF]" />,
    },
    {
      name: "SAP S/4HANA",
      category: "Enterprise ERP",
      desc: "OData / BAPI Connector",
      badge: "Supported API",
      icon: (
        <div className="w-5 h-5 rounded bg-blue-600/30 border border-blue-400/50 flex items-center justify-center font-bold text-[10px] text-blue-300">
          SAP
        </div>
      ),
    },
    {
      name: "Oracle NetSuite",
      category: "Cloud ERP",
      desc: "SuiteTalk REST Web Services",
      badge: "Supported API",
      icon: (
        <div className="w-5 h-5 rounded bg-red-600/30 border border-red-400/50 flex items-center justify-center font-bold text-[9px] text-red-300">
          ORA
        </div>
      ),
    },
    {
      name: "Microsoft Dynamics",
      category: "Business ERP",
      desc: "Dynamics 365 Finance & Ops",
      badge: "Supported API",
      icon: (
        <div className="w-5 h-5 rounded bg-cyan-600/30 border border-cyan-400/50 flex items-center justify-center font-bold text-[9px] text-cyan-300">
          D365
        </div>
      ),
    },
    {
      name: "PostgreSQL & SQL",
      category: "Database Services",
      desc: "Application-Gated Endpoints",
      badge: "Zero Direct SQL",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
    },
  ];

  // Duplicate the array once for seamless continuous CSS animation
  const carouselTrack = [...integrations, ...integrations];

  return (
    <section className="py-12 sm:py-16 bg-[#07111F] relative overflow-hidden border-b border-[#1E314B]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2">
        <p className="text-xs font-mono uppercase tracking-widest text-[#42D9F5] font-semibold">
          AI Assistants & Enterprise Integrations
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Connected to the tools your business already uses.
        </h2>
        <p className="text-xs sm:text-sm text-[#8E9EBA] max-w-xl mx-auto">
          Bring your business workflows into the AI assistants and enterprise systems your teams rely on via standard protocols and authorized application APIs.
        </p>
      </div>

      {/* Marquee Container with Left & Right Gradient Mask Fades */}
      <div className="relative w-full overflow-hidden group">
        {/* Left Gradient Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#07111F] to-transparent z-10 pointer-events-none" />
        {/* Right Gradient Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#07111F] to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <div className="flex w-max space-x-4 animate-marquee group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] py-2">
          {carouselTrack.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-[#0B1728]/85 border border-[#1E314B]/80 hover:border-[#42D9F5]/40 hover:bg-[#101F35] transition-all duration-300 shadow-md shrink-0 w-64 select-none"
            >
              <div className="w-9 h-9 rounded-xl bg-[#07111F] border border-[#1E314B] flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                  <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#101F35] text-[#42D9F5] border border-[#1E314B] shrink-0">
                    {item.badge}
                  </span>
                </div>
                <p className="text-[11px] text-[#8E9EBA] truncate">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Micro-label footer */}
      <div className="max-w-7xl mx-auto px-4 mt-6 text-center">
        <p className="text-[11px] text-[#8E9EBA]/70">
          Standards-based integration via Model Context Protocol (MCP) and verified enterprise service APIs. No vendor lock-in.
        </p>
      </div>
    </section>
  );
};
