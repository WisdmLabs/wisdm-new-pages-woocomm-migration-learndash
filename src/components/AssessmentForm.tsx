"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { captureAttribution, readAttribution, type Attribution } from "@/lib/tracking";

// Mirrors wisdmlabs.com contact form + deck form spec. Budget is the ICP qualifier.
const BUDGET_OPTIONS = [
  { label: "<$3,000", value: "<$3000" },
  { label: "$3,000–$5,000", value: "$3000-$5000" },
  { label: "$5,000–$10,000", value: "$5000-$10000" },
  { label: "Above $10,000", value: "Above $10000" },
];

const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const FORM_GUID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID;

export function AssessmentForm({
  detailsPlaceholder,
  submitLabel = "Book Free Assessment",
  microcopy = "30 minutes with a senior engineer. No obligation. We respond within one business day.",
}: {
  detailsPlaceholder: string;
  submitLabel?: string;
  microcopy?: string;
}) {
  const router = useRouter();
  const [attribution, setAttribution] = useState<Attribution | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Capture gclid/UTMs on mount so they're attached to the eventual submit.
  useEffect(() => {
    captureAttribution();
    setAttribution(readAttribution());
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const attr = readAttribution();

    try {
      // Wire to HubSpot only when both IDs are present; otherwise simulate (build mode).
      if (PORTAL_ID && FORM_GUID) {
        const fields = [
          { name: "firstname", value: String(form.get("name") ?? "") },
          { name: "email", value: String(form.get("email") ?? "") },
          { name: "website", value: String(form.get("website") ?? "") },
          { name: "budget_range", value: String(form.get("budget") ?? "") },
          { name: "project_details", value: String(form.get("details") ?? "") },
          { name: "gclid", value: attr.gclid },
          { name: "utm_source", value: attr.utm_source },
          { name: "utm_medium", value: attr.utm_medium },
          { name: "utm_campaign", value: attr.utm_campaign },
          { name: "utm_term", value: attr.utm_term },
          { name: "utm_content", value: attr.utm_content },
          { name: "landing_page_path", value: attr.page_path },
        ];
        const res = await fetch(
          `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fields,
              context: { pageUri: window.location.href, pageName: document.title },
            }),
          }
        );
        if (!res.ok) throw new Error("submit_failed");
      }
      // Fire-and-forget email notification — don't block the redirect on it.
      fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          message: String(form.get("details") ?? ""),
          page: window.location.pathname,
        }),
      }).catch(() => {});
      // Conversion fires on /thank-you load (deck §4.3–4.4), not here.
      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Your Name" name="name" type="text" required />
        <Field label="Work Email" name="email" type="email" required />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Website" name="website" type="url" placeholder="https://" />
        <div>
          <Label htmlFor="budget" required>
            Your Budget
          </Label>
          <select
            id="budget"
            name="budget"
            required
            defaultValue=""
            className="w-full rounded-lg border border-line bg-white px-3.5 py-2 text-[15px] text-ink outline-none focus:border-ink"
          >
            <option value="" disabled>
              Select a range
            </option>
            {BUDGET_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="details" required>
          Project Details
        </Label>
        <textarea
          id="details"
          name="details"
          required
          rows={3}
          placeholder={detailsPlaceholder}
          className="w-full rounded-lg border border-line bg-white px-3.5 py-2 text-[15px] text-ink outline-none placeholder:text-muted/70 focus:border-ink"
        />
      </div>

      <label className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 accent-navy" />
        <span>
          I agree to the{" "}
          <a href="/privacy" className="underline hover:text-ink">
            Privacy Policy
          </a>{" "}
          and consent to being contacted about my enquiry.
        </span>
      </label>

      {/* Hidden attribution — populated from sessionStorage on landing. */}
      <input type="hidden" name="gclid" value={attribution?.gclid ?? ""} readOnly />
      <input type="hidden" name="page_path" value={attribution?.page_path ?? ""} readOnly />

      {error && <p className="text-sm text-[#c0392b]">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-pill bg-navy px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-black disabled:opacity-60"
      >
        {submitting ? "Booking…" : submitLabel}
      </button>
      <p className="text-center text-[12px] text-muted">{microcopy}</p>
    </form>
  );
}

function Label({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1 block text-[13px] font-medium text-ink">
      {children}
      {required && <span className="text-[#c0392b]"> *</span>}
    </label>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-line bg-white px-3.5 py-2 text-[15px] text-ink outline-none placeholder:text-muted/70 focus:border-ink"
      />
    </div>
  );
}
