import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  Workflow,
  Sparkles,
  Server,
  Terminal,
  Lock,
  Code2,
  FileCheck,
} from "lucide-react";
import { InteractiveAIDemo } from "@/components/home/InteractiveAIDemo";
import { ProductGallery } from "@/components/home/ProductGallery";

export const metadata: Metadata = {
  title: "Platform Architecture — Model Context Protocol & ERP Gateway",
  description:
    "Explore how RaapNexus bridges enterprise systems and AI assistants through the open Model Context Protocol (MCP), context disambiguation, and pre-validated transaction staging.",
};

export default function PlatformPage() {
  const architectureLayers = [
    {
      level: "Layer 01",
      name: "AI Interface & Model Context Protocol (MCP)",
      tagline: "Natural Language Gateway",
      desc: "Connects with modern AI assistants (ChatGPT, Claude, Cursor, and custom MCP clients). Receives user business queries and streams back structured conversational responses, charts, and report artifacts.",
      icon: Terminal,
      accent: "#42D9F5",
      points: [
        "Standardized MCP tool definitions and schemas",
        "Role-aware session context preservation",
        "Multi-modal streaming output",
      ],
    },
    {
      level: "Layer 02",
      name: "Context Resolution & Entity Disambiguation",
      tagline: "Intelligent Code Mapping Engine",
      desc: "Resolves fuzzy conversational references ('Al Noor', 'Dubai branch', 'Server blades') into precise ERP ledger codes, cost centers, and item SKUs with verified business logic.",
      icon: Cpu,
      accent: "#9B8CFF",
      points: [
        "Zero SQL injection vulnerability by design",
        "Fiscal calendar and multi-period alignment",
        "Cross-subsidiary entity boundary checking",
      ],
    },
    {
      level: "Layer 03",
      name: "Governance, Authorization & Tenant Scope",
      tagline: "Zero-Trust Security Gate",
      desc: "Enforces strict tenant isolation, corporate role permissions (RBAC), and policy validation prior to accessing application services.",
      icon: ShieldCheck,
      accent: "#34D399",
      points: [
        "Cryptographic multi-tenant segregation",
        "Fine-grained branch and GL account masking",
        "Mandatory dual-key authorization for write transactions",
      ],
    },
    {
      level: "Layer 04",
      name: "Business Application Services & ERP Connector",
      tagline: "Authoritative Transaction Execution",
      desc: "Interfaces with supported ERP systems through standard REST / SOAP / RPC APIs. Prepares pre-validated invoice drafts and journal vouchers without issuing direct database writes.",
      icon: Database,
      accent: "#FBBF24",
      points: [
        "Pre-execution credit limit and tax TRN validation",
        "Inventory allocation and warehouse reservation",
        "Immutable SHA-256 cryptographic audit trail",
      ],
    },
  ];

  const examplePrompts = [
    {
      cat: "Executive & Board",
      prompt: "“Provide a consolidated EBITDA breakdown for Q3 across all subsidiaries and flag any variance over 5%.”",
      result: "Consolidated financial report with drill-through to subsidiary ledgers.",
    },
    {
      cat: "Sales & Commercial",
      prompt: "“Compare Dubai Downtown and Abu Dhabi Mall sales yesterday against their weekly target.”",
      result: "Comparative branch telemetry and cashier ticket volume analysis.",
    },
    {
      cat: "Supply Chain & Ops",
      prompt: "“Which warehouse SKUs are at risk of stockout within the next 21 days based on current burn rate?”",
      result: "Stock velocity calculation and recommended draft supplier PO.",
    },
    {
      cat: "Finance & Audit",
      prompt: "“Show unposted journals and aged receivables exceeding 60 days for period 08.”",
      result: "Filtered subledger extract with one-click Excel (.xlsx) export.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#07111F] min-h-screen text-white">
      {/* Platform Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
          <Layers className="w-3.5 h-3.5" />
          <span>Technical Architecture Overview</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          The technical architecture behind{" "}
          <span className="gradient-text-cyan-violet block mt-1">
            intelligent ERP conversations.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#8E9EBA] max-w-2xl mx-auto">
          RaapNexus decouples complex ERP schemas from executive decision-makers through an authorized, standards-based integration fabric.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-bold text-sm shadow-xl shadow-[#42D9F5]/20 hover:scale-[1.02] transition-all"
          >
            Request Architecture Review
          </Link>
          <a
            href="#architecture"
            className="px-7 py-3.5 rounded-full bg-[#0B1728] border border-[#1E314B] text-white hover:text-[#42D9F5] font-semibold text-sm transition-all"
          >
            Inspect 4-Tier Pipeline
          </a>
        </div>
      </section>

      {/* 4-Tier Architecture Deep Dive */}
      <section id="architecture" className="py-20 border-t border-[#1E314B]/60 bg-[#050C16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#42D9F5] font-bold">
              Engineering Topology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Four deterministic engineering tiers
            </h2>
            <p className="text-sm sm:text-base text-[#8E9EBA]">
              Every user interaction is isolated, authenticated, contextually resolved, and logged before touching ERP business logic.
            </p>
          </div>

          <div className="space-y-6">
            {architectureLayers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.level}
                  className="rounded-2xl bg-[#0B1728] border border-[#1E314B] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between hover:border-[#42D9F5]/40 transition-colors shadow-xl"
                >
                  <div className="flex items-start gap-5 max-w-2xl">
                    <div className="w-12 h-12 rounded-xl bg-[#07111F] border border-[#1E314B] flex items-center justify-center text-white shrink-0 shadow-inner">
                      <Icon className="w-6 h-6" style={{ color: layer.accent }} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#8E9EBA] bg-[#101F35] px-2.5 py-0.5 rounded">
                          {layer.level}
                        </span>
                        <span className="text-xs font-semibold text-[#9B8CFF]">
                          {layer.tagline}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{layer.name}</h3>
                      <p className="text-xs sm:text-sm text-[#8E9EBA] leading-relaxed">
                        {layer.desc}
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-auto lg:min-w-[320px] bg-[#07111F] p-4 rounded-xl border border-[#1E314B] space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#42D9F5] font-bold block">
                      Enforced Controls:
                    </span>
                    <ul className="space-y-1.5 text-xs text-white/90">
                      {layer.points.map((pt, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Interactive AI Simulation */}
      <div id="demo">
        <InteractiveAIDemo />
      </div>

      {/* Example Prompts Showcase */}
      <section className="py-20 bg-[#07111F] border-t border-[#1E314B]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-[#42D9F5] font-bold">
              Real-World Scenarios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Enterprise prompts in action
            </h2>
            <p className="text-sm sm:text-base text-[#8E9EBA]">
              Explore how distinct leadership roles query their systems of record through RaapNexus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examplePrompts.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0B1728] border border-[#1E314B] rounded-2xl p-6 space-y-4 hover:border-[#42D9F5]/40 transition-colors shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#42D9F5] font-bold">
                    {item.cat}
                  </span>
                  <span className="text-[11px] font-mono text-[#8E9EBA] bg-[#101F35] px-2 py-0.5 rounded">
                    Validated Response
                  </span>
                </div>
                <p className="text-base text-white font-medium italic">
                  {item.prompt}
                </p>
                <div className="pt-2 border-t border-[#1E314B] flex items-center justify-between text-xs text-[#8E9EBA]">
                  <span>Outcome:</span>
                  <span className="text-white font-semibold">{item.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <div id="gallery">
        <ProductGallery />
      </div>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#050C16] border-t border-[#1E314B]/70 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to test RaapNexus with your ERP environment?
          </h2>
          <p className="text-sm sm:text-base text-[#8E9EBA]">
            Our solutions team can deploy a secure sandbox configured with your sample schemas and workflow rules.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-bold text-sm shadow-xl shadow-[#42D9F5]/25 hover:scale-[1.02] transition-all"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
