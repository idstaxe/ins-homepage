"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function StickyMobileCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "/contact#book";

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 shadow-lg backdrop-blur-md md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <Button
        href={calendlyUrl}
        size="md"
        className="w-full text-center"
        onClick={() =>
          trackEvent({
            event: "cta_click",
            cta_label: "Request a consultation",
            location: "sticky_mobile",
            page: pathname,
          })
        }
      >
        Request a consultation
      </Button>
    </div>
  );
}
