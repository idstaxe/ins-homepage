"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type FormStatus = "idle" | "loading" | "success" | "error";

interface ContactFormProps {
  formName?: string;
  compact?: boolean;
}

const INDUSTRIES = [
  "Marine & propulsion",
  "Steel & metals",
  "Elevators & urban mobility",
  "Hygienic processing & fluid handling",
  "Industrial machinery & equipment",
  "Process engineering",
  "Sustainability & materials",
  "Logistics & supply chain",
  "Paper, print & packaging",
  "Food & beverage equipment",
  "Other industrial",
];

export function ContactForm({ formName = "contact", compact = false }: ContactFormProps) {
  const pathname = usePathname();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage("Form is not configured yet. Please email services@ins.fi directly.");
      return;
    }
    formData.append("access_key", accessKey);
    formData.append("subject", "New trade media inquiry from INS website");
    formData.append("from_name", "INS Website");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();
        trackEvent({ event: "form_submit", form_name: formName, page: pathname });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email services@ins.fi.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center" role="status">
        <CheckCircle className="mb-3 h-10 w-10 text-green-600" />
        <p className="font-semibold text-navy">Thank you. Your inquiry has been sent.</p>
        <p className="mt-2 text-sm text-navy/70">We will contact you shortly to discuss your trade media requirements.</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm font-medium text-accent underline">Submit another inquiry</button>
      </div>
    );
  }

  const messageRows = compact ? 3 : 4;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formName}-name`} className="mb-1.5 block text-sm font-medium text-navy">Name *</label>
          <input id={`${formName}-name`} name="name" type="text" required autoComplete="name" className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30" placeholder="Full name" />
        </div>
        <div>
          <label htmlFor={`${formName}-company`} className="mb-1.5 block text-sm font-medium text-navy">Company *</label>
          <input id={`${formName}-company`} name="company" type="text" required autoComplete="organization" className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30" placeholder="Company name" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formName}-email`} className="mb-1.5 block text-sm font-medium text-navy">Email *</label>
          <input id={`${formName}-email`} name="email" type="email" required autoComplete="email" className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30" placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor={`${formName}-website`} className="mb-1.5 block text-sm font-medium text-navy">Website <span className="font-normal text-navy/50">(optional)</span></label>
          <input id={`${formName}-website`} name="website" type="url" autoComplete="url" className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30" placeholder="https://yourcompany.com" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formName}-industry`} className="mb-1.5 block text-sm font-medium text-navy">Industry *</label>
          <select id={`${formName}-industry`} name="industry" required className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-navy focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30">
            <option value="">Select your industry</option>
            {INDUSTRIES.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${formName}-markets`} className="mb-1.5 block text-sm font-medium text-navy">Target markets or regions *</label>
          <input id={`${formName}-markets`} name="target_markets" type="text" required className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30" placeholder="e.g. DACH, North America, China, global" />
        </div>
      </div>

      <div>
        <label htmlFor={`${formName}-message`} className="mb-1.5 block text-sm font-medium text-navy">Brief description of your news, product or campaign *</label>
        <textarea id={`${formName}-message`} name="message" required rows={messageRows} className="w-full resize-y rounded-lg border border-border bg-white px-4 py-2.5 text-navy placeholder:text-navy/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/30" placeholder="Product launch, technical innovation, event or other announcement. Key markets and any specific media or language needs." />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:opacity-60 sm:w-auto">
        {status === "loading" ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending...</>) : "Request a consultation"}
      </button>

      <p className="text-[11px] text-navy/50">We use the information you provide to prepare a relevant media approach and will not share it with third parties.</p>
    </form>
  );
}
