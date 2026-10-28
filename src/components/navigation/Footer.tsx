import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05080E] text-[#7E8B9E] border-t border-[#D4AF37]/15 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#D4AF37]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" variant="official" withTagline={true} />
            <p className="text-xs sm:text-sm text-[#7E8B9E] leading-relaxed max-w-sm pt-2">
              The Ultimate Finance Platform. Empowering modern enterprises with rigorous tax auditing, structured financial examination, performance modeling, and intelligent business analysis.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E1726] border border-[#D4AF37]/20 text-xs text-[#E5C378]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                <span>Financial Clarity. Intelligent Decisions.</span>
              </span>
            </div>
          </div>

          {/* Column: Core Pillars */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FBF9F5]">Service Pillars</p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/solutions#tax-auditing" className="hover:text-[#E5C378] transition-colors">
                  Tax Auditing & Intelligence
                </Link>
              </li>
              <li>
                <Link href="/solutions#financial-auditing" className="hover:text-[#E5C378] transition-colors">
                  Financial Auditing
                </Link>
              </li>
              <li>
                <Link href="/solutions#financial-analysis" className="hover:text-[#E5C378] transition-colors">
                  Financial Analysis
                </Link>
              </li>
              <li>
                <Link href="/solutions#business-analysis" className="hover:text-[#E5C378] transition-colors">
                  Business Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Platform & Architecture */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FBF9F5]">Platform</p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/platform" className="hover:text-[#E5C378] transition-colors">
                  Platform Architecture
                </Link>
              </li>
              <li>
                <Link href="/platform#reconciliation" className="hover:text-[#E5C378] transition-colors">
                  Ledger Reconciliation
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-[#E5C378] transition-colors flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Institutional Governance</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E5C378] transition-colors">
                  About RaapNexus
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Contact & Advisory */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FBF9F5]">Engagement</p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/contact" className="hover:text-[#E5C378] transition-colors flex items-center gap-1">
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </Link>
              </li>
              <li>
                <a href="mailto:advisory@raapnexus.com" className="hover:text-[#E5C378] transition-colors">
                  advisory@raapnexus.com
                </a>
              </li>
              <li className="text-xs text-[#7E8B9E] pt-2">
                Available for enterprise CFO, Audit & Tax Advisory engagements.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E8B9E]">
          <p>© {currentYear} RaapNexus. All rights reserved. The Ultimate Finance Platform.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-[#FBF9F5] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#FBF9F5] transition-colors">
              Terms of Governance
            </Link>
            <Link href="/security" className="hover:text-[#FBF9F5] transition-colors">
              Security Protocol
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};