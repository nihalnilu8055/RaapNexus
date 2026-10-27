import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ShieldCheck, Cpu, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050C16] text-[#8E9EBA] border-t border-[#1E314B]/70 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#42D9F5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9B8CFF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E314B]/50">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" variant="dark" />
            <p className="text-sm text-[#8E9EBA] leading-relaxed max-w-sm pt-2">
              Turn your business systems into intelligent conversations. Ask questions, uncover insights, generate reports, and prepare business actions through AI assistants — with enterprise control built in.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs text-white/90">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Enterprise Systems Ready</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#101F35]/60 border border-[#1E314B] text-xs text-[#42D9F5]">
                <Cpu className="w-3 h-3" />
                <span>MCP Protocol</span>
              </span>
            </div>
          </div>

          {/* Column: Platform */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Platform</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/platform" className="hover:text-white transition-colors">
                  Conversational Layer
                </Link>
              </li>
              <li>
                <Link href="/platform#architecture" className="hover:text-white transition-colors">
                  System Architecture
                </Link>
              </li>
              <li>
                <Link href="/platform#mcp" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>MCP Integration</span>
                  <ArrowUpRight className="w-3 h-3 text-[#42D9F5]" />
                </Link>
              </li>
              <li>
                <Link href="/platform#reporting" className="hover:text-white transition-colors">
                  Excel-Ready Reporting
                </Link>
              </li>
              <li>
                <Link href="/platform#actions" className="hover:text-white transition-colors">
                  Action Workflows
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Solutions */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Solutions</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions#finance" className="hover:text-white transition-colors">
                  Finance & Accounting
                </Link>
              </li>
              <li>
                <Link href="/solutions#sales" className="hover:text-white transition-colors">
                  Sales & Distribution
                </Link>
              </li>
              <li>
                <Link href="/solutions#inventory" className="hover:text-white transition-colors">
                  Inventory & Purchasing
                </Link>
              </li>
              <li>
                <Link href="/solutions#enterprise" className="hover:text-white transition-colors">
                  Enterprise Operations
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#42D9F5]" />
                  <span>Trust & Security</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Company & Governance */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white">Company</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact#support" className="hover:text-white transition-colors">
                  Support & Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E9EBA]/70 gap-4">
          <p>© {currentYear} RaapNexus. All rights reserved. Enterprise AI software for modern business systems.</p>

          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#42D9F5] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#42D9F5] transition-colors">
              Terms
            </Link>
            <Link href="/security" className="hover:text-[#42D9F5] transition-colors">
              Security
            </Link>
            <Link href="/contact" className="hover:text-[#42D9F5] transition-colors">
              Schedule Tour
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
