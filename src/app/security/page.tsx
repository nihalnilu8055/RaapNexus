import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  FileCheck2,
  Database,
  ArrowRight,
  Server,
  Layers,
  KeyRound,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Bot,
  Cpu,
  Check,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Institutional Trust & Security Architecture — The Ultimate Finance Platform",
  description:
    "Comprehensive security whitepaper explaining zero-direct-database-write architecture, multi-tenant isolation, RBAC validation, and cryptographic auditability.",
};

export default function SecurityPage() {
  const securityControls = [
    {
      title: "Application-Layer Integration (No Direct SQL)",
      status: "Implemented",
      desc: "RaapNexus communicates with underlying ERP systems strictly via documented business APIs and application services. Natural language queries are NEVER compiled into raw SQL or executed directly against database tables.",
      icon: Database,
    },
    {
      title: "Tenant & Company-Aware Isolation",
      status: "Implemented",
      desc: "Every API call and user session is cryptographically bound to a verified tenant ID. Multi-company groups benefit from strict logical data separation with zero possibility of cross-subsidiary leakage.",
      icon: Layers,
    },
    {
      title: "Role-Based Access Control (RBAC)",
      status: "Implemented",
      desc: "Existing ERP security matrices and user roles are respected. A store manager cannot access corporate payroll ledgers; a procurement clerk cannot view unrelated accounts receivable.",
      icon: KeyRound,
    },
    {
      title: "Human-in-the-Loop Dual Control Approval",
      status: "Implemented",
      desc: "High-value business actions (commercial invoices, inventory allocations, purchase orders) are staged in a draft queue requiring explicit human approval by an authorized controller before posting.",
      icon: UserCheck,
    },
    {
      title: "Ephemeral Credential Handling & SSO",
      status: "Implemented",
      desc: "User sessions utilize short-lived JWT tokens tied to your enterprise identity provider (SAML 2.0 / OIDC / Azure AD / Okta). No persistent ERP master credentials are ever exposed to the AI model.",
      icon: Lock,
    },
    {
      title: "Immutable Event Auditing & Cryptographic Log",
      status: "Implemented",
      desc: "Every interaction — from the user prompt to the model interpretation, context resolution, and application service response — is recorded in an immutable audit ledger with SHA-256 integrity hashing.",
      icon: Eye,
    },
    {
      title: "Fine-Grained Column & Field Level Redaction",
      status: "Implemented",
      desc: "Sensitive fields such as employee salaries, bank account numbers, and personal tax identifiers can be masked or redacted at the gateway layer before AI generation.",
      icon: ShieldCheck,
    },
    {
      title: "Zero AI Model Training On Customer Data",
      status: "Implemented",
      desc: "Your ERP business data, financial records, and operational prompts are strictly processed statelessly in-memory and NEVER used to train or fine-tune public AI models.",
      icon: Cpu,
    },
    {
      title: "Hardware Security Module (HSM) Key Storage",
      status: "Planned / Roadmap",
      desc: "Dedicated FIPS 140-3 Level 3 Cloud HSM key custody for enterprise clients requiring dedicated BYOK (Bring Your Own Key) operational environments.",
      icon: Lock,
    },
  ];

  const securityFaqs = [
    {
      q: "Can an AI hallucination accidentally corrupt our ERP ledger?",
      a: "No. RaapNexus completely prohibits autonomous write operations. Draft actions (such as invoice preparation or journal entries) are pre-validated against ERP schemas and held in a staging buffer. Only an authorized human user with appropriate ERP signing credentials can execute the commit.",
    },
    {
      q: "Where is our data stored during a conversational session?",
      a: "RaapNexus operates statelessly. Queries are resolved in real time against your ERP APIs. Query results are returned to the user's secure browser session and are not stored in external model repositories.",
    },
    {
      q: "Does RaapNexus comply with SOC 2 and ISO 27001 standards?",
      a: "RaapNexus is built from the ground up to adhere to SOC 2 Type II trust principles and ISO 27001 security controls, including encryption in transit (TLS 1.3), encryption at rest (AES-256), strict tenant isolation, and comprehensive event logging. Enterprise audit packages and architecture diagrams are provided to your IT compliance review team.",
    },
    {
      q: "How does RaapNexus integrate with corporate Single Sign-On (SSO)?",
      a: "We support standard SAML 2.0 and OpenID Connect (OIDC) protocols, allowing direct federated integration with Azure Active Directory, Okta, Ping Identity, and Google Workspace. Multi-factor authentication (MFA) policies configured in your IdP are strictly enforced.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#07111F] min-h-screen text-white">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101F35] border border-[#1E314B] text-xs font-semibold uppercase tracking-wider text-[#42D9F5]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Institutional Trust & Governance</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          Security architecture designed for{" "}
          <span className="gradient-text-cyan-violet block mt-1">
            mission-critical ERP data.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-[#8E9EBA] max-w-2xl mx-auto">
          We treat enterprise ERP systems as sovereign environments. Learn how RaapNexus protects data sovereignty, guarantees tenant boundaries, and enforces dual human authorization.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-bold text-sm shadow-xl shadow-[#42D9F5]/20 hover:scale-[1.02] transition-all"
          >
            Request Security Packet & SOC2 Summary
          </Link>
        </div>
      </section>

      {/* Security Architecture Pipeline Visual */}
      <section className="py-16 bg-[#050C16] border-y border-[#1E314B]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#42D9F5] font-bold">
              Defensive Topology
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              The Sovereign Data Gateway
            </h2>
            <p className="text-xs sm:text-sm text-[#8E9EBA]">
              Under no circumstances do third-party AI models interface directly with your core database.
            </p>
          </div>

          {/* Architecture Block Diagram */}
          <div className="rounded-2xl bg-[#0B1728] border border-[#1E314B] p-6 lg:p-8 space-y-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#07111F] p-4 rounded-xl border border-[#1E314B] space-y-2">
                <span className="text-[10px] font-mono text-[#42D9F5] uppercase">Perimeter</span>
                <h4 className="text-sm font-bold text-white">1. Client / MCP Session</h4>
                <p className="text-xs text-[#8E9EBA]">
                  TLS 1.3 encrypted channel with federated SAML/OIDC user identity token.
                </p>
              </div>

              <div className="bg-[#07111F] p-4 rounded-xl border border-[#42D9F5]/40 space-y-2">
                <span className="text-[10px] font-mono text-[#42D9F5] uppercase">Validation Gateway</span>
                <h4 className="text-sm font-bold text-white">2. RaapNexus Enforcer</h4>
                <p className="text-xs text-[#8E9EBA]">
                  Tenant isolation verification, entity mapping, and business rule checking.
                </p>
              </div>

              <div className="bg-[#07111F] p-4 rounded-xl border border-[#9B8CFF]/40 space-y-2">
                <span className="text-[10px] font-mono text-[#9B8CFF] uppercase">Staging Queue</span>
                <h4 className="text-sm font-bold text-white">3. Dual Control Buffer</h4>
                <p className="text-xs text-[#8E9EBA]">
                  Actions (invoices, POs) await explicit sign-off. Zero autonomous writes.
                </p>
              </div>

              <div className="bg-[#07111F] p-4 rounded-xl border border-[#1E314B] space-y-2">
                <span className="text-[10px] font-mono text-emerald-400 uppercase">Core Record</span>
                <h4 className="text-sm font-bold text-white">4. ERP Business Services</h4>
                <p className="text-xs text-[#8E9EBA]">
                  Standard ERP APIs enforce local transaction consistency and ledger posting.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#07111F] border border-emerald-500/30 flex items-center gap-3 text-xs text-white">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                <strong>Data Minimization Guarantee:</strong> Prompts and business metrics are evaluated statelessly in volatile memory and are never persisted or utilized for public LLM training.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Controls Table / Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#42D9F5] font-bold">
            Verified Defense Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Implemented controls & roadmap transparency
          </h2>
          <p className="text-sm sm:text-base text-[#8E9EBA]">
            We clearly distinguish our operational controls from upcoming roadmap features so compliance teams can make informed risk assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityControls.map((ctrl, idx) => {
            const Icon = ctrl.icon;
            const isImplemented = ctrl.status === "Implemented";
            return (
              <div
                key={idx}
                className="bg-[#0B1728] border border-[#1E314B] rounded-2xl p-6 space-y-3 hover:border-[#42D9F5]/40 transition-colors shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#101F35] border border-[#1E314B] flex items-center justify-center text-[#42D9F5]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full ${
                        isImplemented
                          ? "bg-emerald-950/80 text-emerald-400 border border-emerald-500/30"
                          : "bg-blue-950/80 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {ctrl.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">{ctrl.title}</h3>
                  <p className="text-xs sm:text-sm text-[#8E9EBA] leading-relaxed">
                    {ctrl.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1E314B]/60 flex items-center gap-1.5 text-[11px] text-[#8E9EBA]">
                  <Check className="w-3.5 h-3.5 text-[#42D9F5]" />
                  <span>Verified in Production Architectures</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Security FAQs */}
      <section className="py-16 bg-[#050C16] border-t border-[#1E314B]/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono uppercase text-[#42D9F5] font-bold">
              Compliance Q&A
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Frequently asked security questions
            </h2>
          </div>

          <div className="space-y-4">
            {securityFaqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#0B1728] border border-[#1E314B] rounded-2xl p-6 space-y-2 shadow-lg"
              >
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#42D9F5] shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#8E9EBA] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            Schedule a confidential IT security briefing
          </h2>
          <p className="text-sm text-[#8E9EBA]">
            Our security architects can join your team to review network topology, VPC peering, and enterprise compliance requirements.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#42D9F5] to-[#9B8CFF] text-[#07111F] font-bold text-sm shadow-xl shadow-[#42D9F5]/25 hover:scale-[1.02] transition-all"
            >
              <span>Schedule Technical Security Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
