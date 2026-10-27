import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  FileSpreadsheet,
  Database,
  BarChart2,
} from "lucide-react";

export const WhyRaapNexus: React.FC = () => {
  const differentiators = [
    {
      title: "Direct Access Without SQL Barriers",
      desc: "Executives and managers ask business questions in natural language. No waiting in IT ticket queues for custom queries, reports, or data exports.",
      icon: Sparkles,
    },
    {
      title: "Eliminates Manual Spreadsheet Stitching",
      desc: "Instantly transform ERP ledger extracts into structured, formula-ready Excel workbooks without manual copy-paste errors or fragmented CSV dumps.",
      icon: FileSpreadsheet,
    },
    {
      title: "Preserves Your Existing ERP Investment",
      desc: "RaapNexus does not replace your ERP. It connects via standard APIs and application services, maximizing the value of your established ledger software.",
      icon: Database,
    },
    {
      title: "Built Around Strict Dual Control",
      desc: "Unlike autonomous agents that risk erroneous database commits, RaapNexus stages transaction drafts and requires authorized human approval.",
      icon: ShieldCheck,
    },
    {
      title: "Enterprise Multi-Tenant Boundaries",
      desc: "Strict cryptographic separation ensures users only see data permitted by their entity scope, role permissions, and legal jurisdiction.",
      icon: Layers,
    },
    {
      title: "Model Context Protocol (MCP) Native",
      desc: "Interoperable with current and future AI models through the open Model Context Protocol. Zero proprietary vendor lock-in.",
      icon: Workflow,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#050C16] relative overflow-hidden border-t border-[#1E314B]/70">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#42D9F5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Core Message */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
              <Clock className="w-3.5 h-3.5" />
              <span>Institutional Value</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Less navigating.{" "}
              <span className="gradient-text-cyan block mt-1">
                More knowing.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#8E9EBA] leading-relaxed">
              Enterprise software should answer questions, not generate administrative overhead. RaapNexus removes friction between decision-makers and their systems of record.
            </p>

            {/* Supporting Imagery from permit-compliant Unsplash */}
            <div className="relative rounded-2xl overflow-hidden border border-[#1E314B] shadow-2xl h-56 sm:h-72 w-full">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Executive business and finance leadership analyzing real-time data"
                fill
                className="object-cover object-center filter brightness-90 contrast-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#07111F]/85 backdrop-blur-md border border-[#1E314B] text-xs text-white">
                <span className="font-semibold text-[#42D9F5] block">
                  Built for Enterprise Decision-Makers
                </span>
                <span className="text-[#8E9EBA] text-[11px]">
                  CFOs, CEOs, controllers, and IT directors operating complex multi-entity businesses.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-bold text-sm shadow-lg hover:shadow-[#42D9F5]/30 transition-all"
              >
                <span>Request Enterprise Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 6 Distinct Enterprise Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentiators.map((diff, i) => {
              const Icon = diff.icon;
              return (
                <div
                  key={i}
                  className="bg-[#0B1728] border border-[#1E314B] rounded-2xl p-5 space-y-3 hover:border-[#42D9F5]/40 transition-colors shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#101F35] border border-[#1E314B] flex items-center justify-center text-[#42D9F5]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{diff.title}</h4>
                  <p className="text-xs sm:text-sm text-[#8E9EBA] leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
