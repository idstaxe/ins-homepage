"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import {
  getConsent,
  trackPageView,
  updateConsentMode,
} from "@/lib/analytics";

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [consentGranted, setConsentGranted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const syncConsent = () => {
      const consent = getConsent();
      const granted = consent === "accepted";
      setConsentGranted(granted);
      if (granted) updateConsentMode(true);
    };

    syncConsent();
    window.addEventListener("consent-change", syncConsent);
    return () => window.removeEventListener("consent-change", syncConsent);
  }, []);

  useEffect(() => {
    if (!consentGranted) return;
    trackPageView(pathname, document.title);
  }, [pathname, consentGranted]);

  if (!measurementId || !consentGranted) return null;

  return <NextGoogleAnalytics gaId={measurementId} />;
}

export function GoogleAnalyticsConsentInit() {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });
  }, []);

  return null;
}
