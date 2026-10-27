import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-28 bg-[#050C16] relative overflow-hidden border-t border-[#1E314B]/70">
      {/* Cinematic Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#42D9F5]/15 via-[#9B8CFF]/10 to-[#42D9F5]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F35] border border-[#42D9F5]/40 text-xs font-semibold uppercase tracking-wider text-[#42D9F5] shadow-lg shadow-[#42D9F5]/10">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transform Enterprise Operations</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Your business is ready for a{" "}
          <span className="gradient-text-cyan-violet block mt-2">
            better conversation.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-[#8E9EBA] max-w-2xl mx-auto font-normal leading-relaxed">
          Discover how RaapNexus can simplify business reporting, connect your systems to AI assistants, and support controlled enterprise workflows.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-extrabold text-base shadow-2xl shadow-[#42D9F5]/30 hover:shadow-[#42D9F5]/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Book Your Demo</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </Link>

          <Link
            href="/contact#team"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0B1728] hover:bg-[#101F35] text-white border border-[#1E314B] hover:border-[#42D9F5]/40 font-semibold text-base transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#42D9F5]" />
            <span>Talk to Our Team</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#8E9EBA]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#42D9F5]" />
            <span>No disruption to existing ERP</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#42D9F5]" />
            <span>Dedicated architecture review</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#42D9F5]" />
            <span>Enterprise security & compliance</span>
          </div>
        </div>
      </div>
    </section>
  );
};
