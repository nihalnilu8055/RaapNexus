"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ArrowUpRight, Mail, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const solutionLinks = [
    { name: "Tax Intelligence & VAT", href: "/solutions#tax-auditing" },
    { name: "Continuous Financial Auditing", href: "/solutions#financial-auditing" },
    { name: "Financial Analysis & Margins", href: "/solutions#financial-analysis" },
    { name: "Operational Business Analysis", href: "/solutions#business-analysis" },
    { name: "Architecture & Connectors", href: "/platform" },
  ];

  const companyLinks = [
    { name: "About RaapNexus", href: "/about" },
    { name: "Solutions Directory", href: "/solutions" },
    { name: "Technical Platform", href: "/platform" },
    { name: "Security & Governance", href: "/security" },
    { name: "Contact & Advisory", href: "/contact" },
  ];

  return (
    <footer className="bg-[#FAFBFD] text-slate-600 border-t border-slate-200/90 w-full relative overflow-hidden">
      {/* Delicate Gradient Glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[250px] bg-gradient-to-b from-[#0284C7]/[0.03] to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container (4–6% horizontal padding) */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-12 sm:pt-14 pb-8 sm:pb-10 relative z-10">
        
        {/* Top Pre-Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-slate-200/80">
          
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block" aria-label="RaapNexus Home">
              <Logo size="header" variant="official" />
            </Link>

            <p className="text-base sm:text-lg font-heading font-bold text-[#0F172A] tracking-tight">
              Financial clarity. Smarter decisions. Stronger businesses.
            </p>

            <p className="text-xs sm:text-sm font-body font-normal text-slate-500 leading-relaxed max-w-md">
              RaapNexus unites institutional tax intelligence, continuous ledger auditing, and multidimensional financial analysis—empowering finance leaders to act with complete data confidence.
            </p>

            {/* Read-Only Architecture Trust Pill */}
            <div className="pt-1 flex items-center gap-2 text-xs font-body font-medium text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 shrink-0" />
              <span>Read-only ERP interface · Zero direct database writes</span>
            </div>
          </div>

          {/* Solutions Column (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-body uppercase tracking-[0.14em] text-slate-900 font-bold">
              Solutions
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm font-body font-normal">
              {solutionLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-[#0284C7] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#0284C7]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column (Col 9-10) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-body uppercase tracking-[0.14em] text-slate-900 font-bold">
              Company
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm font-body font-normal">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-[#0284C7] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-[#0284C7]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Advisory Card (Col 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-body uppercase tracking-[0.14em] text-slate-900 font-bold">
              Direct Advisory
            </p>
            <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
              <span className="text-xs font-body text-slate-500 block leading-snug">
                Need specialized financial analysis or tax auditing advisory?
              </span>
              
              <a
                href="mailto:info@techlogica.com?subject=RaapNexus%20Advisory%20Inquiry"
                className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-[#0284C7] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@techlogica.com</span>
              </a>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-body font-semibold shadow-xs transition-colors"
              >
                <span>Discuss Your Needs</span>
                <ArrowRight className="w-3 h-3 text-sky-400" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Compliance Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-[11px] sm:text-xs">
            <p>© {currentYear} RaapNexus. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-300">·</span>
            <Link href="/privacy" className="hover:text-slate-950 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/terms" className="hover:text-slate-950 transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/security" className="hover:text-slate-950 transition-colors">
              Security
            </Link>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>All Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
