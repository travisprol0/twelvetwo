import { site } from "@/content/site";

export type Inquiry = {
  name: string;
  company: string;
  email: string;
  build: string;
  help: string;
  timeline: string;
  budget: string;
};

export type FieldErrors = Partial<Record<keyof Inquiry, string>>;

export type InquiryResult =
  | { status: "sent" }
  | { status: "unconfigured"; mailto: string }
  | { status: "error"; message: string };

export function validateInquiry(data: Inquiry): FieldErrors {
  const errors: FieldErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }

  if (data.company.trim().length < 2) {
    errors.company = "Enter your company.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (data.build.trim().length < 12) {
    errors.build = "Describe what you are trying to build.";
  }

  if (!data.help) {
    errors.help = "Choose the kind of help you need.";
  }

  if (!data.timeline) {
    errors.timeline = "Choose a timeline.";
  }

  return errors;
}

export function inquiryContent(data: Inquiry) {
  const lines = [
    `Name: ${data.name.trim()}`,
    `Company: ${data.company.trim()}`,
    `Email: ${data.email.trim()}`,
    `Help: ${data.help}`,
    `Timeline: ${data.timeline}`,
    data.budget.trim() ? `Budget: ${data.budget.trim()}` : null,
    "",
    data.build.trim(),
  ].filter((line): line is string => line !== null);

  return {
    subject: `Project inquiry from ${data.name.trim()}`,
    text: lines.join("\n"),
  };
}

export function inquiryMailto(data: Inquiry) {
  const { subject, text } = inquiryContent(data);
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}

const sendError = "The inquiry could not be sent. Email us directly instead.";

export function inquiryPayload(data: Inquiry) {
  return {
    name: data.name.trim(),
    company: data.company.trim(),
    email: data.email.trim(),
    build: data.build.trim(),
    help: data.help,
    timeline: data.timeline,
    budget: data.budget.trim(),
  };
}

export function parseInquiry(value: unknown): Inquiry | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const record = value as Record<string, unknown>;
  const fields = ["name", "company", "email", "build", "help", "timeline", "budget"] as const;

  if (!fields.every((field) => typeof record[field] === "string")) {
    return null;
  }

  return {
    name: record.name as string,
    company: record.company as string,
    email: record.email as string,
    build: record.build as string,
    help: record.help as string,
    timeline: record.timeline as string,
    budget: record.budget as string,
  };
}

export async function submitInquiry(data: Inquiry): Promise<InquiryResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(inquiryPayload(data)),
    });

    const payload = (await response.json().catch(() => null)) as InquiryResult | null;

    if (payload?.status === "unconfigured") {
      return { status: "unconfigured", mailto: inquiryMailto(data) };
    }

    if (response.ok && payload?.status === "sent") {
      return { status: "sent" };
    }

    return {
      status: "error",
      message: payload?.status === "error" ? payload.message : sendError,
    };
  } catch {
    return { status: "error", message: sendError };
  }
}
