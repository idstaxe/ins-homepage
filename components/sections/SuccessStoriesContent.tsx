"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { caseStudies } from "@/content/case-studies";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import type { CaseStudy } from "@/content/case-studies";

function CaseStudyCard({
  study,
  page,
}: {
  study: CaseStudy;
  page: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-white">
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
        aria-expanded={expanded}
        onClick={() => {
          setExpanded(!expanded);
          if (!expanded) {
            trackEvent({
              event: "case_study_view",
              case_study: study.slug,
              page,
            });
          }
        }}
      >
        <div>
          <p className="text-sm font-semibold text-accent">{study.client}</p>
          <h2 className="mt-1 text-xl font-semibold text-navy">{study.title}</h2>
          <p className="mt-2 text-sm text-navy/70">{study.summary}</p>
        </div>
        <ChevronDown
          className={cn(
            "mt-1 h-5 w-5 shrink-0 text-navy/50 transition-transform",
            expanded && "rotate-180",
          )}
          aria-hidden="true"
        />
      </button>
      {expanded && (
        <div className="border-t border-border px-6 pb-6">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy/50">
            Key outcomes
          </h3>
          <ul className="space-y-2">
            {study.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-start gap-2 text-sm text-navy/80"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export function SuccessStoriesContent() {
  const pathname = usePathname();
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "/contact#book";

  return (
    <>
      <section className="bg-navy py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Success Stories
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Documented trade media programmes
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Selected examples of campaigns we have managed for industrial clients, with reported placements and outcomes.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Programmes"
            title="Examples of targeted trade media campaigns"
            align="center"
          />
          <div className="mt-12 space-y-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} page={pathname} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Client impressions"
            title="What our clients say"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <blockquote
                key={t.author}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <p className="text-sm leading-relaxed text-navy/80">
                  &ldquo;{t.quote.slice(0, 180)}...&rdquo;
                </p>
                <footer className="mt-4 border-t border-border pt-4">
                  <cite className="not-italic">
                    <p className="font-semibold text-navy">{t.author}</p>
                    <p className="text-sm text-navy/60">{t.role}</p>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy">
            Ready to generate high-quality leads?
          </h2>
          <p className="mt-4 text-navy/70">
            Smarter media mentions that drive your B2B sales.
          </p>
          <div className="mt-8">
            <Button href={calendlyUrl} size="lg">
              Book a strategy call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
