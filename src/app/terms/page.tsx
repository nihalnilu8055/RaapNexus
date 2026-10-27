import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileCheck, ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "RaapNexus Enterprise Terms of Service and Operational Conditions.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#07111F] min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#8E9EBA] hover:text-[#42D9F5] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
            <FileCheck className="w-3.5 h-3.5" />
            <span>Legal Framework</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Enterprise Terms of Service
          </h1>
          <p className="text-xs font-mono text-[#8E9EBA]">
            Last Updated: October 2026 (Operational Conditions)
          </p>
        </div>

        <div className="bg-[#0B1728] border border-[#1E314B] rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-[#8E9EBA] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Scope of the RaapNexus Platform</h2>
            <p>
              RaapNexus provides software and application service layers enabling natural language interaction with enterprise systems. RaapNexus does not replace underlying ERP accounting books or legal entity responsibilities. The customer remains the authoritative administrator of their enterprise records.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Dual-Control Authorization & Commitments</h2>
            <p>
              Users acknowledge that write transactions prepared via RaapNexus (including draft commercial invoices, purchase orders, and inventory vouchers) are held in an authorized staging queue. Formal commitment of any transaction to the customer&apos;s ERP system requires explicit human review and sign-off.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Acceptable Enterprise Use</h2>
            <p>
              The platform may only be utilized by authorized personnel within the organizational scope specified in the master enterprise agreement. Reverse engineering of the context resolution algorithm, unauthorized penetration testing without prior coordination, or circumvention of tenant isolation controls is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Availability & SLA Commitments</h2>
            <p>
              Service Level Agreements (SLAs), including target platform uptime (99.9%), support response times, and incident remediation commitments, are formally defined in individual Master Services Agreements (MSAs) executed with enterprise clients.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
