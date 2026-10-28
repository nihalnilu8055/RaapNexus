import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "RaapNexus Enterprise Terms of Service and Operational Conditions.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen text-[#0F172A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-[#0284C7] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold uppercase tracking-wider text-[#0284C7]">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Legal Framework</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Enterprise Terms of Service
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Last Updated: October 2026 (Operational Conditions)
          </p>
        </div>

        <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-[#475569] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">1. Scope of the RaapNexus Platform</h2>
            <p>
              RaapNexus provides software and application service layers enabling natural language interaction with enterprise systems. RaapNexus does not replace underlying ERP accounting books or legal entity responsibilities. The customer remains the authoritative administrator of their enterprise records.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">2. Dual-Control Authorization & Commitments</h2>
            <p>
              Users acknowledge that write transactions prepared via RaapNexus (including draft commercial invoices, purchase orders, and inventory vouchers) are held in an authorized staging queue. Formal commitment of any transaction to the customer&apos;s ERP system requires explicit human review and sign-off.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">3. Read-Only Access Default</h2>
            <p>
              By default, all queries, analytical reports, and audit reviews interface through read-only service endpoints. Direct SQL database modifications are strictly prohibited by architecture.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">4. Limitation of Advisory Liability</h2>
            <p className="text-xs italic text-slate-400">
              Note: RaapNexus is a financial intelligence and auditing technology platform. Analytical outputs, variance detections, and filing summaries are assistive tools and do not constitute formal legal or statutory tax advice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
