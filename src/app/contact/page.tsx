"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Building2,
  ShieldCheck,
  Send,
  Sparkles,
  Bot,
  AlertCircle,
  FileCheck,
  ArrowRight,
  RefreshCw,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required (min 2 characters)"),
  workEmail: z.string().email("Please provide a valid corporate work email"),
  company: z.string().min(2, "Company name is required"),
  jobTitle: z.string().min(2, "Job title is required"),
  erpSystem: z.string().min(1, "Please select your primary ERP system"),
  areasOfInterest: z.array(z.string()).min(1, "Select at least one area of interest"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to scheduling communication",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      company: "",
      jobTitle: "",
      erpSystem: "",
      areasOfInterest: ["Conversational ERP Querying", "Excel-Ready Financial Reporting"],
      message: "",
      consent: false,
    },
  });

  const selectedInterests = watch("areasOfInterest") || [];

  const handleInterestToggle = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setValue(
        "areasOfInterest",
        selectedInterests.filter((i) => i !== interest)
      );
    } else {
      setValue("areasOfInterest", [...selectedInterests, interest]);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to submit demo request.");
      }

      setSubmissionSuccess({
        referenceId: result.referenceId,
        message: result.message,
      });
    } catch (err: any) {
      setServerError(
        err.message || "A network or server error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const interestOptions = [
    "Tax Auditing & Tax Intelligence",
    "Financial Auditing & Ledger Reconciliation",
    "Financial Performance & Profitability Analysis",
    "Business Analysis & Operational Telemetry",
    "Multi-Entity Group Consolidation",
  ];

  const erpOptions = [
    "SAP S/4HANA / SAP ECC",
    "Oracle NetSuite",
    "Oracle Cloud ERP",
    "Microsoft Dynamics 365 Finance & Ops",
    "Microsoft Dynamics 365 Business Central",
    "Infor CloudSuite",
    "Epicor ERP",
    "Custom / Proprietary ERP Backend",
    "Other ERP Solution",
  ];

  return (
    <div className="pt-28 pb-20 bg-[#05080E] min-h-screen text-[#FBF9F5]">
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1726] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C378]">
          <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Institutional Engagement</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Schedule a financial advisory{" "}
          <span className="gradient-text-gold block mt-1">
            consultation.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-[#C8CED8] max-w-xl mx-auto">
          Discuss your enterprise audit workflows, tax intelligence requirements, and financial modeling with our senior partners.
        </p>
      </section>

      {/* Main Form & Information Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Box (Left 7 cols) */}
          <div className="lg:col-span-7 bg-[#0B1728] border border-[#1E314B] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            {submissionSuccess ? (
              /* Honest Success State */
              <div className="space-y-6 py-8 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#42D9F5] font-bold">
                    Demo Request Recorded
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    Thank You For Reaching Out
                  </h3>
                  <p className="text-sm text-[#8E9EBA] max-w-md mx-auto leading-relaxed">
                    {submissionSuccess.message}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#07111F] border border-[#1E314B] max-w-sm mx-auto text-xs space-y-1 font-mono">
                  <span className="text-[#8E9EBA]">Reference Tracking ID:</span>
                  <div className="font-bold text-[#42D9F5] text-sm">
                    {submissionSuccess.referenceId}
                  </div>
                  <span className="text-[10px] text-[#8E9EBA]/80 block pt-1 font-sans">
                    A copy of your request parameters has been queued for our solutions engineering team.
                  </span>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmissionSuccess(null)}
                    className="text-xs font-semibold text-[#8E9EBA] hover:text-white transition-colors underline underline-offset-4"
                  >
                    Submit another demonstration inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Interactive Form */
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">
                    Request an Enterprise Walkthrough
                  </h3>
                  <p className="text-xs text-[#8E9EBA]">
                    Please provide your corporate details to pair you with the appropriate industry solutions architect.
                  </p>
                </div>

                {serverError && (
                  <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{serverError}</span>
                  </div>
                )}

                {/* Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/90">
                      Full Name <span className="text-[#42D9F5]">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="e.g. Tariq Mansoor"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111F] border border-[#1E314B] text-white text-xs placeholder:text-[#8E9EBA]/50 focus:outline-none focus:border-[#42D9F5] focus:ring-1 focus:ring-[#42D9F5] transition-all"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-400">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/90">
                      Work Email <span className="text-[#42D9F5]">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("workEmail")}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111F] border border-[#1E314B] text-white text-xs placeholder:text-[#8E9EBA]/50 focus:outline-none focus:border-[#42D9F5] focus:ring-1 focus:ring-[#42D9F5] transition-all"
                    />
                    {errors.workEmail && (
                      <p className="text-[11px] text-rose-400">{errors.workEmail.message}</p>
                    )}
                  </div>
                </div>

                {/* Company & Job Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/90">
                      Company / Organization <span className="text-[#42D9F5]">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("company")}
                      placeholder="e.g. Al Noor Holdings"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111F] border border-[#1E314B] text-white text-xs placeholder:text-[#8E9EBA]/50 focus:outline-none focus:border-[#42D9F5] focus:ring-1 focus:ring-[#42D9F5] transition-all"
                    />
                    {errors.company && (
                      <p className="text-[11px] text-rose-400">{errors.company.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/90">
                      Job Title <span className="text-[#42D9F5]">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("jobTitle")}
                      placeholder="e.g. Chief Financial Officer"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111F] border border-[#1E314B] text-white text-xs placeholder:text-[#8E9EBA]/50 focus:outline-none focus:border-[#42D9F5] focus:ring-1 focus:ring-[#42D9F5] transition-all"
                    />
                    {errors.jobTitle && (
                      <p className="text-[11px] text-rose-400">{errors.jobTitle.message}</p>
                    )}
                  </div>
                </div>

                {/* Current ERP System Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/90">
                    Current ERP or Primary Business System <span className="text-[#42D9F5]">*</span>
                  </label>
                  <select
                    {...register("erpSystem")}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111F] border border-[#1E314B] text-white text-xs focus:outline-none focus:border-[#42D9F5] focus:ring-1 focus:ring-[#42D9F5] transition-all"
                  >
                    <option value="">Select your current ERP...</option>
                    {erpOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0B1728] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.erpSystem && (
                    <p className="text-[11px] text-rose-400">{errors.erpSystem.message}</p>
                  )}
                </div>

                {/* Areas of Interest Checkboxes */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-white/90 block">
                    Areas of Focus for Demonstration (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {interestOptions.map((interest) => {
                      const isChecked = selectedInterests.includes(interest);
                      return (
                        <div
                          key={interest}
                          onClick={() => handleInterestToggle(interest)}
                          className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-center gap-2 select-none ${
                            isChecked
                              ? "bg-[#101F35] border-[#42D9F5] text-white"
                              : "bg-[#07111F] border-[#1E314B] text-[#8E9EBA] hover:text-white"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                              isChecked
                                ? "bg-[#42D9F5] text-[#07111F] font-bold"
                                : "border border-[#1E314B]"
                            }`}
                          >
                            {isChecked && "✓"}
                          </div>
                          <span className="truncate">{interest}</span>
                        </div>
                      );
                    })}
                  </div>
                  {errors.areasOfInterest && (
                    <p className="text-[11px] text-rose-400">
                      {errors.areasOfInterest.message}
                    </p>
                  )}
                </div>

                {/* Optional Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/90">
                    Specific Workflow Questions or Integrations (Optional)
                  </label>
                  <textarea
                    rows={3}
                    {...register("message")}
                    placeholder="Tell us about specific reporting bottlenecks, branch topologies, or custom ERP modules you'd like to test..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#07111F] border border-[#1E314B] text-white text-xs placeholder:text-[#8E9EBA]/50 focus:outline-none focus:border-[#42D9F5] focus:ring-1 focus:ring-[#42D9F5] transition-all resize-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="space-y-1">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      {...register("consent")}
                      className="mt-0.5 rounded bg-[#07111F] border-[#1E314B] text-[#42D9F5] focus:ring-0 focus:ring-offset-0"
                    />
                    <span className="text-[11px] text-[#8E9EBA] leading-tight">
                      I agree to allow RaapNexus to process my information to schedule and deliver this enterprise product demonstration. View our{" "}
                      <Link href="/privacy" className="text-[#42D9F5] underline hover:text-white">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-[11px] text-rose-400">{errors.consent.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#C5A880] text-[#05080E] font-bold text-sm shadow-xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Registering Consultation Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-[#7E8B9E] pt-2">
                    Confidential engagement. Guaranteed response within one business day.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Information Column (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* What to expect card */}
            <div className="bg-[#0B1728] border border-[#1E314B] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <span className="text-xs font-mono uppercase text-[#42D9F5] font-bold">
                Walkthrough Outline
              </span>
              <h3 className="text-lg font-bold text-white">
                What to expect during your demonstration
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-[#8E9EBA]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#101F35] text-[#42D9F5] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Architecture & Schema Assessment</h4>
                    <p className="text-xs text-[#8E9EBA]">
                      Review of your current ERP version, subledgers, and network integration prerequisites.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#101F35] text-[#42D9F5] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Live Conversational Simulation</h4>
                    <p className="text-xs text-[#8E9EBA]">
                      Real-time prompt execution showcasing trial balances, branch metrics, and Excel workbook exports.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#101F35] text-[#42D9F5] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Security & Dual Control Deep Dive</h4>
                    <p className="text-xs text-[#8E9EBA]">
                      Demonstration of zero-direct-database writes, human sign-off staging queues, and immutable audit logging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact & Support Details */}
            <div id="team" className="bg-[#0B1728] border border-[#1E314B] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Direct Enterprise Coordination
              </h4>
              <p className="text-xs text-[#8E9EBA] leading-relaxed">
                For existing enterprise pilots, security compliance reviews, or partner inquiries:
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center gap-3 text-white">
                  <Mail className="w-4 h-4 text-[#42D9F5] shrink-0" />
                  <span className="font-mono">enterprise@raapnexus.com</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Clock className="w-4 h-4 text-[#42D9F5] shrink-0" />
                  <span>Sunday – Thursday: 08:00 – 18:00 (GST / UTC+4)</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SOC 2 Compliance Team Available Upon Request</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
