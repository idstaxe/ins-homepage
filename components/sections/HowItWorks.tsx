import { ArrowRight } from "lucide-react";
import {
  howItWorksInput,
  howItWorksOutput,
} from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section
      className="bg-surface-muted py-20 sm:py-24"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="A structured process for targeted trade media coverage"
          description="You provide the news and your priority markets. We manage the rest: media selection, content preparation, outreach, follow-up and reporting."
          align="center"
        />

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-border bg-white p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              What we need from you
            </p>
            <ul className="space-y-3">
              {howItWorksInput.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-navy"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    1
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <ArrowRight className="h-8 w-8 text-accent" aria-hidden="true" />
          </div>

          <div className="rounded-2xl border border-navy/10 bg-navy p-8 text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              What we manage
            </p>
            <ul className="space-y-3">
              {howItWorksOutput.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-white/90"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                    {idx + 2}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
