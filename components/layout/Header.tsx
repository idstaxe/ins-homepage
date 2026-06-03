"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "/contact#book";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-lg font-bold text-white">
            INS
          </span>
          <span className="hidden font-semibold text-navy sm:block">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-navy/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
            <Button
              href={calendlyUrl}
              size="sm"
              onClick={() =>
                trackEvent({
                  event: "cta_click",
                  cta_label: "Request a consultation",
                  location: "header",
                  page: pathname,
                })
              }
            >
              Request a consultation
            </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-navy md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-border bg-white px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-navy/80 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={calendlyUrl}
              size="md"
              className="w-full text-center"
              onClick={() =>
                trackEvent({
                  event: "cta_click",
                  cta_label: "Request a consultation",
                  location: "mobile_menu",
                  page: pathname,
                })
              }
            >
              Request a consultation
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
