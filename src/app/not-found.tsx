import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass, ShieldCheck, Mail } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#42D9F5]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <div className="flex justify-center mb-2">
          <Logo size="lg" variant="dark" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#42D9F5] font-bold">
            Status: 404 // Route Not Found
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Page Not Located
          </h1>
          <p className="text-sm text-[#8E9EBA] leading-relaxed">
            The ERP business entity or page path you requested does not exist in this tenant scope.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-bold text-xs shadow-lg hover:shadow-[#42D9F5]/30 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#101F35] border border-[#1E314B] text-white hover:text-[#42D9F5] font-semibold text-xs transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Platform</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-[#1E314B]/60 flex items-center justify-center gap-6 text-xs text-[#8E9EBA]">
          <Link href="/solutions" className="hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="/security" className="hover:text-white transition-colors">
            Security
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
