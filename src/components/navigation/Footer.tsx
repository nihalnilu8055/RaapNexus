import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-500 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <Logo size="header" variant="official" />
            <span className="text-[11px] text-slate-400">
              The Ultimate Finance Platform · Financial Clarity. Intelligent Decisions.
            </span>
          </div>

          {/* Essential Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <Link href="/platform" className="hover:text-slate-900 transition-colors">
              Platform
            </Link>
            <Link href="/solutions" className="hover:text-slate-900 transition-colors">
              Solutions
            </Link>
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-slate-900 transition-colors">
              Contact
            </Link>
            <Link href="/security" className="hover:text-slate-900 transition-colors">
              Security
            </Link>
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacy
            </Link>
          </nav>

          {/* Contact Email */}
          <div className="text-xs">
            <a
              href="mailto:info@techlogica.com?subject=RaapNexus%20Inquiry"
              className="text-[#0284C7] hover:underline font-medium"
            >
              info@techlogica.com
            </a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400 text-center sm:text-left">
          <p>© {currentYear} RaapNexus. All rights reserved.</p>
          <p>Read-only ERP interface architecture. Zero direct database writes.</p>
        </div>
      </div>
    </footer>
  );
};
