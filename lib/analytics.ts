declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "consent" | "js",
      targetId: string | Date,
      config?: Record<string, string | number | boolean | undefined>,
    ) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEvent =
  | {
      event: "cta_click";
      cta_label: string;
      location: string;
      page: string;
    }
  | {
      event: "calendly_open";
      page: string;
    }
  | {
      event: "form_submit";
      form_name: string;
      page: string;
    }
  | {
      event: "case_study_view";
      case_study: string;
      page: string;
    }
  | {
      event: "outbound_click";
      url: string;
      page: string;
    }
  | {
      event: "page_view";
      page_path: string;
      page_title: string;
    };

export function trackEvent(payload: AnalyticsEvent) {
  if (typeof window === "undefined" || !window.gtag) return;

  const { event, ...params } = payload;
  window.gtag("event", event, params);
}

export function trackPageView(path: string, title: string) {
  trackEvent({
    event: "page_view",
    page_path: path,
    page_title: title,
  });
}

export const CONSENT_KEY = "ins_cookie_consent";

export type ConsentStatus = "accepted" | "declined" | null;

export function getConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function setConsent(status: "accepted" | "declined") {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, status);
  window.dispatchEvent(new CustomEvent("consent-change", { detail: status }));
}

export function updateConsentMode(granted: boolean) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
