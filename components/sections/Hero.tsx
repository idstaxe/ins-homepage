"use client";

import { ArrowRight, Globe, Target, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  const pathname = usePathname();
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "/contact#book";

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-navy-light)_0%,_transparent_60%)] opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Targeted trade media outreach for industrial companies
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Reach the specialist trade media that influences your buyers
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            INS works with manufacturers and industrial suppliers to secure editorial coverage in the precise trade publications and regions where their customers make purchasing decisions.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href={calendlyUrl}
              size="lg"
              onClick={() =>
                trackEvent({
                  event: "cta_click",
                  cta_label: "Request a consultation",
                  location: "hero",
                  page: pathname,
                })
              }
            >
              Request a consultation
              <ArrowRight size={18} />
            </Button>
            <Button
              href="#proof"
              variant="secondary"
              size="lg"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20"
              onClick={() =>
                trackEvent({
                  event: "cta_click",
                  cta_label: "See results",
                  location: "hero",
                  page: pathname,
                })
              }
            >
              See results
            </Button>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Globe,
              stat: siteConfig.stats.years,
              label: "Years focused on industrial trade media",
            },
            {
              icon: Target,
              stat: siteConfig.stats.mediaOutlets,
              label: "Trade media outlets in database",
            },
            {
              icon: Users,
              stat: siteConfig.stats.countries,
              label: "Countries with relevant media",
            },
          ].map(({ icon: Icon, stat, label }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <Icon className="mb-3 h-6 w-6 text-accent" aria-hidden="true" />
              <p className="text-2xl font-bold">{stat}</p>
              <p className="mt-1 text-sm text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
