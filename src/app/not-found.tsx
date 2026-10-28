import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass, ShieldCheck, Mail } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05080E] text-[#FBF9F5] flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden font-sans">
      {/* Background Gold Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <div className="flex justify-center mb-2">
          <Logo size="lg" variant="official" withTagline={true} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-semibold">
            Status: 404 // Route Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#FBF9F5]">
            Page Not Located
          </h1>
          <p className="text-sm text-[#8A95A5] leading-relaxed">
            The requested financial entity, document, or route could not be found within the RaapNexus platform.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E5C378] text-[#05080E] font-medium text-xs shadow-md hover:shadow-[#D4AF37]/20 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/platform"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0D1524] border border-[#D4AF37]/20 text-[#FBF9F5] hover:text-[#D4AF37] font-normal text-xs transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Platform</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-[#162238]/60 flex items-center justify-center gap-6 text-xs text-[#8A95A5]">
          <Link href="/solutions" className="hover:text-[#FBF9F5] transition-colors">
            Solutions
          </Link>
          <Link href="/about" className="hover:text-[#FBF9F5] transition-colors">
            About
          </Link>
          <Link href="/security" className="hover:text-[#FBF9F5] transition-colors">
            Security
          </Link>
          <Link href="/contact" className="hover:text-[#FBF9F5] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
