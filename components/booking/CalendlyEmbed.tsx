"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

interface CalendlyEmbedProps {
  url?: string;
  minHeight?: number;
  title?: string;
}

export function CalendlyEmbed({
  url,
  minHeight = 700,
  title = "Schedule a meeting with INS",
}: CalendlyEmbedProps) {
  const pathname = usePathname();
  const tracked = useRef(false);
  const calendlyUrl =
    url || process.env.NEXT_PUBLIC_CALENDLY_URL || "";

  useEffect(() => {
    if (!calendlyUrl || tracked.current) return;
    tracked.current = true;
    trackEvent({
      event: "calendly_open",
      page: pathname,
    });
  }, [calendlyUrl, pathname]);

  if (!calendlyUrl) {
    return (
      <div
        className="flex min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-border bg-surface-muted p-8 text-center"
        role="region"
        aria-label="Booking calendar placeholder"
      >
        <div>
          <p className="font-semibold text-navy">
            Consultation booking calendar
          </p>
          <p className="mt-2 text-sm text-navy/60">
            Add your Calendly URL to <code className="rounded bg-white px-1">NEXT_PUBLIC_CALENDLY_URL</code> to enable inline booking.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block text-sm font-semibold text-accent underline"
          >
            Use the contact form instead
          </a>
        </div>
      </div>
    );
  }

  const embedUrl = calendlyUrl.includes("?")
    ? `${calendlyUrl}&hide_gdpr_banner=1`
    : `${calendlyUrl}?hide_gdpr_banner=1`;

  return (
    <iframe
      src={embedUrl}
      title={title}
      width="100%"
      height={minHeight}
      className="rounded-2xl border border-border bg-white"
      loading="lazy"
    />
  );
}
