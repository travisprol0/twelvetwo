"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { helpOptions, timelineOptions } from "@/content/contact";
import { site } from "@/content/site";
import {
  type FieldErrors,
  type Inquiry,
  type InquiryResult,
  submitInquiry,
  validateInquiry,
} from "@/lib/contact";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";

const empty: Inquiry = {
  name: "",
  company: "",
  email: "",
  build: "",
  help: "",
  timeline: "",
  budget: "",
};

const fields: Array<{
  name: keyof Inquiry;
  label: string;
  autoComplete?: string;
  type?: string;
}> = [
  { name: "name", label: "Name", autoComplete: "name" },
  { name: "company", label: "Company", autoComplete: "organization" },
  { name: "email", label: "Email", autoComplete: "email", type: "email" },
];

export function ContactForm() {
  const [values, setValues] = useState<Inquiry>(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [result, setResult] = useState<InquiryResult | null>(null);
  const [pending, setPending] = useState(false);

  function update(name: keyof Inquiry, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateInquiry(values);
    setErrors(nextErrors);
    setResult(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setPending(true);
    const response = await submitInquiry(values);
    setResult(response);
    setPending(false);

    if (response.status === "sent") {
      setValues(empty);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <Field
            key={field.name}
            id={field.name}
            label={field.label}
            error={errors[field.name]}
            className={field.name === "email" ? "sm:col-span-2" : undefined}
          >
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              autoComplete={field.autoComplete}
              value={values[field.name]}
              onChange={(event) => update(field.name, event.target.value)}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              className={inputClass(Boolean(errors[field.name]))}
            />
          </Field>
        ))}
      </div>

      <Field id="build" label="What are you trying to build?" error={errors.build}>
        <textarea
          id="build"
          name="build"
          rows={6}
          value={values.build}
          onChange={(event) => update("build", event.target.value)}
          aria-invalid={Boolean(errors.build)}
          aria-describedby={errors.build ? "build-error" : undefined}
          className={cn(inputClass(Boolean(errors.build)), "min-h-36 resize-y")}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="help" label="What kind of help do you need?" error={errors.help}>
          <select
            id="help"
            name="help"
            value={values.help}
            onChange={(event) => update("help", event.target.value)}
            aria-invalid={Boolean(errors.help)}
            aria-describedby={errors.help ? "help-error" : undefined}
            className={inputClass(Boolean(errors.help))}
          >
            <option value="">Select</option>
            {helpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field id="timeline" label="Timeline" error={errors.timeline}>
          <select
            id="timeline"
            name="timeline"
            value={values.timeline}
            onChange={(event) => update("timeline", event.target.value)}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
            className={inputClass(Boolean(errors.timeline))}
          >
            <option value="">Select</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="budget" label="Budget (optional)" error={errors.budget}>
        <input
          id="budget"
          name="budget"
          value={values.budget}
          onChange={(event) => update("budget", event.target.value)}
          className={inputClass(false)}
        />
      </Field>

      <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center">
        <Button type="submit" disabled={pending}>
          {pending ? "Sending…" : "Send project inquiry"}
        </Button>
        <a href={`mailto:${site.email}`} className="text-sm text-muted hover:text-ink">
          Or email {site.email}
        </a>
      </div>

      {result?.status === "sent" ? (
        <p role="status" className="border border-line bg-raised px-4 py-3 text-sm text-ink">
          Inquiry sent. We&apos;ll reply by email.
        </p>
      ) : null}

      {result?.status === "unconfigured" ? (
        <div role="status" className="border border-line bg-raised px-4 py-4 text-sm leading-relaxed text-muted">
          <p>This form isn&apos;t connected to an inbox yet. Nothing was sent automatically.</p>
          <a href={result.mailto} className="mt-3 inline-flex text-ink underline decoration-line-strong underline-offset-4 hover:decoration-brass">
            Email this inquiry to {site.email}
          </a>
        </div>
      ) : null}

      {result?.status === "error" ? (
        <p role="alert" className="border border-line bg-raised px-4 py-3 text-sm text-ink">
          {result.message}{" "}
          <a href={`mailto:${site.email}`} className="underline decoration-line-strong underline-offset-4">
            {site.email}
          </a>
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm text-ink">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-brass">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    "w-full border bg-inset px-3 py-3 text-sm text-ink outline-none placeholder:text-faint",
    invalid ? "border-brass" : "border-line focus:border-line-strong",
  );
}
