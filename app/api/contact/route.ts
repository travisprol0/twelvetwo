import { NextResponse } from "next/server";
import { site } from "@/content/site";
import {
  inquiryContent,
  parseInquiry,
  validateInquiry,
} from "@/lib/contact";

const sendError = "The inquiry could not be sent. Email us directly instead.";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { status: "error", message: sendError },
      { status: 400 },
    );
  }

  const inquiry = parseInquiry(body);

  if (!inquiry || Object.keys(validateInquiry(inquiry)).length > 0) {
    return NextResponse.json(
      { status: "error", message: sendError },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim() ?? "";
  const from = process.env.CONTACT_FROM_EMAIL?.trim() ?? "";

  if (!apiKey || !from) {
    return NextResponse.json({ status: "unconfigured" });
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || site.email;
  const { subject, text } = inquiryContent(inquiry);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: inquiry.email.trim(),
        subject,
        text,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { status: "error", message: sendError },
        { status: 502 },
      );
    }
  } catch {
    return NextResponse.json(
      { status: "error", message: sendError },
      { status: 502 },
    );
  }

  return NextResponse.json({ status: "sent" });
}
