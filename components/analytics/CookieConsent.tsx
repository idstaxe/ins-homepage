"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getConsent, setConsent, updateConsentMode } from "@/lib/analytics";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getConsent() === null);
  }, []);

  const accept = () => {
    setConsent("accepted");
    updateConsentMode(true);
    setVisible(false);
  };

  const decline = () => {
    setConsent("declined");
    updateConsentMode(false);
    setVisible(false);
  };

  if (!visible || !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-xl sm:inset-x-auto sm:bottom-6"
    >
      <p className="text-sm leading-relaxed text-navy/80">
        We use analytics cookies to understand how visitors use our site and
        improve your experience. You can accept or decline analytics tracking.{" "}
        <Link href="/privacy" className="font-medium text-accent underline">
          Privacy Policy
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={accept}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Accept analytics
        </button>
        <button
          type="button"
          onClick={decline}
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
