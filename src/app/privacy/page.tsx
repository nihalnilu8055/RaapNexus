import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RaapNexus Enterprise Privacy Policy and Data Sovereignty Commitments.",
};

export default function PrivacyPage() {
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Data Governance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Enterprise Privacy Policy
          </h1>
          <p className="text-xs font-mono text-slate-400">
            Last Updated: October 2026 (Operational Policy)
          </p>
        </div>

        <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-[#475569] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">1. Core Data Sovereignty Principle</h2>
            <p>
              RaapNexus provides financial and tax intelligence for enterprise resource planning (ERP) systems. We recognize that financial, inventory, and customer databases are the sovereign property of your organization. Under no circumstances do we sell, rent, or monetize your company data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">2. Zero Model Training On Enterprise Data</h2>
            <p>
              Business records retrieved from your connected systems and user prompts processed through RaapNexus are strictly evaluated statelessly in volatile memory. We do not use your customer records, financial statements, or internal transaction history to train, re-train, or fine-tune public foundation AI models.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">3. Information Collected via Demo Inquiries</h2>
            <p>
              When you submit a demonstration request or contact our solutions engineering team, we collect your full name, corporate email address, organization name, job title, and details regarding your current enterprise architecture. This information is utilized solely to deliver and tailor your requested demonstration.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">4. Encryption Standards & Data In Transit</h2>
            <p>
              All communications between your client applications, the RaapNexus gateway, and your backend ERP systems are secured using modern TLS 1.3 cryptographic protocols with perfect forward secrecy. Sensitive configuration credentials stored within the vault are encrypted at rest with AES-256 keys.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#0F172A]">5. Legal Notice & Final Document Availability</h2>
            <p className="text-xs italic text-slate-400">
              Note: This document represents the operational privacy framework of RaapNexus. Custom Data Processing Agreements (DPAs) and Business Associate Agreements (BAAs) are executed individually alongside enterprise subscription contracts.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
