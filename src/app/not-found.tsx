import React from "react";
import Link from "next/link";
import { Home, Compass } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden font-sans">
      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <div className="flex justify-center mb-2">
          <Logo size="lg" variant="official" withTagline={true} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold">
            Status: 404 // Route Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Page Not Located
          </h1>
          <p className="text-sm text-[#475569] leading-relaxed">
            The requested financial entity, document, or route could not be found within the RaapNexus platform.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-xs shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 font-semibold text-xs transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Platform</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-slate-100 flex items-center justify-center gap-6 text-xs text-slate-500">
          <Link href="/solutions" className="hover:text-slate-900 transition-colors">
            Solutions
          </Link>
          <Link href="/about" className="hover:text-slate-900 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-slate-900 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
