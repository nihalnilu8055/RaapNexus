import { NextResponse } from "next/server";
import { z } from "zod";

const demoRequestSchema = z.object({
  fullName: z.string().min(2, "Full name is required (min 2 characters)"),
  workEmail: z.string().email("Please provide a valid corporate work email"),
  company: z.string().min(2, "Company name is required"),
  jobTitle: z.string().min(2, "Job title is required"),
  erpSystem: z.string().min(1, "Please select your primary ERP or business system"),
  areasOfInterest: z.array(z.string()).min(1, "Select at least one area of interest"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must consent to receive demo scheduling communications",
  }),
});

// Stored inquiries in runtime storage for demo verification
const submittedRequests: Array<z.infer<typeof demoRequestSchema> & { id: string; receivedAt: string }> = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = demoRequestSchema.parse(body);

    const referenceId = `REQ-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 899 + 100)}`;
    const record = {
      ...validatedData,
      id: referenceId,
      receivedAt: new Date().toISOString(),
    };

    submittedRequests.push(record);
    console.log(`[RaapNexus Demo Request Logged] ${referenceId} for ${validatedData.fullName} (${validatedData.company})`);

    return NextResponse.json({
      success: true,
      referenceId,
      message: `Thank you, ${validatedData.fullName}. Your demonstration request has been recorded. Our enterprise solutions architecture team will contact you at ${validatedData.workEmail} to confirm your schedule.`,
      recordCount: submittedRequests.length,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          issues: error.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
