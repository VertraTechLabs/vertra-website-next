import { NextResponse } from "next/server";

function cleanString(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const fullName = cleanString(body.fullName);
    const companyName = cleanString(body.companyName);
    const email = cleanString(body.email).toLowerCase();
    const projectType = cleanString(body.projectType);
    const budgetRange = cleanString(body.budgetRange);
    const projectDescription = cleanString(body.projectDescription);

    if (!fullName) {
      return NextResponse.json(
        {
          success: false,
          error: "Full name is required.",
        },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          error: "Email is required.",
        },
        { status: 400 }
      );
    }

    if (!projectDescription) {
      return NextResponse.json(
        {
          success: false,
          error: "Project description is required.",
        },
        { status: 400 }
      );
    }

    const leadOSUrl = process.env.LEADOS_PUBLIC_INTAKE_URL;
    const intakeSecret = process.env.VERTRA_INTAKE_SECRET;

    if (!leadOSUrl || !intakeSecret) {
      console.error("Missing LeadOS intake environment variables.");

      return NextResponse.json(
        {
          success: false,
          error: "Project intake is not configured.",
        },
        { status: 500 }
      );
    }

    const response = await fetch(leadOSUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-vertra-intake-key": intakeSecret,
      },
      body: JSON.stringify({
        fullName,
        companyName,
        email,
        projectType,
        budgetRange,
        projectDescription,
      }),
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("LeadOS intake error:", result);

      return NextResponse.json(
        {
          success: false,
          error: result?.error || "Unable to submit project inquiry.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Project inquiry submitted successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Submit project error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while submitting your project.",
      },
      { status: 500 }
    );
  }
}