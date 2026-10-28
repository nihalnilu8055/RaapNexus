"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Menu, X, ArrowRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "/platform" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#05080E]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-xl shadow-black/50 py-3"
          : "bg-[#05080E]/60 backdrop-blur-sm border-b border-white/[0.04] py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Logo size="md" variant="official" />
          </div>

          {/* Desktop Navigation - Minimal Editorial Menu */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#0B111D]/80 border border-[#D4AF37]/15 px-5 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#FBF9F5] bg-[#121D30] border border-[#D4AF37]/30 shadow-sm"
                      : "text-[#C8CED8] hover:text-[#FBF9F5] hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Single Prominent Action */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <Link
              href="/platform"
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#00C4FF] via-[#38BDF8] to-[#0284C7] text-[#05080E] font-bold text-xs lg:text-sm shadow-lg shadow-[#00C4FF]/25 hover:shadow-[#00C4FF]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center space-x-2 shrink-0">
            <Link
              href="/platform"
              className="text-[11px] font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00C4FF] to-[#0284C7] text-[#05080E]"
            >
              Explore
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0E1726] border border-[#00C4FF]/20 text-[#FBF9F5] hover:text-[#00C4FF] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070B12]/98 border-b border-[#D4AF37]/20 px-5 pt-4 pb-6 space-y-3 shadow-2xl animate-fadeIn backdrop-blur-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#E5C378] bg-[#0E1726] font-semibold border-l-2 border-[#D4AF37]"
                      : "text-[#C8CED8] hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/[0.06]">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#05080E] font-bold text-xs uppercase tracking-wider"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};