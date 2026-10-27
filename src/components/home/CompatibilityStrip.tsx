import React from "react";
import { Cpu, Terminal, Bot, Workflow, Database, Layers } from "lucide-react";

export const CompatibilityStrip: React.FC = () => {
  const integrations = [
    {
      name: "ChatGPT",
      desc: "Actions & Custom GPTs",
      icon: Bot,
      accent: "text-emerald-400",
    },
    {
      name: "Claude",
      desc: "Anthropic Artifacts & MCP",
      icon: SparkleIcon,
      accent: "text-amber-400",
    },
    {
      name: "Cursor",
      desc: "AI Workspace IDE",
      icon: Terminal,
      accent: "text-[#42D9F5]",
    },
    {
      name: "VS Code",
      desc: "Agentic Developer Tools",
      icon: Cpu,
      accent: "text-blue-400",
    },
    {
      name: "MCP-Compatible Tools",
      desc: "Model Context Protocol",
      icon: Workflow,
      accent: "text-[#9B8CFF]",
    },
    {
      name: "Enterprise ERPs",
      desc: "Supported API Backends",
      icon: Database,
      accent: "text-cyan-300",
    },
  ];

  function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    );
  }

  return (
    <section className="py-12 bg-[#050C16] border-y border-[#1E314B]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase font-bold tracking-widest text-[#8E9EBA]">
            Universal Ecosystem Compatibility via Standards-Based Interfaces & MCP
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {integrations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-[#0B1728]/70 border border-[#1E314B]/60 hover:border-[#42D9F5]/40 hover:bg-[#101F35] transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-[#07111F] border border-[#1E314B] flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                  <Icon className={`w-5 h-5 ${item.accent}`} />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  {item.name}
                </h4>
                <p className="text-[11px] text-[#8E9EBA] mt-0.5 line-clamp-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-[#8E9EBA]/70">
            Compatible with standards-based Model Context Protocol (MCP) clients and enterprise ERP interfaces. No proprietary lock-in.
          </p>
        </div>
      </div>
    </section>
  );
};
