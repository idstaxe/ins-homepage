"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { featuredCaseStudies } from "@/content/case-studies";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { trackEvent } from "@/lib/analytics";

export function CaseStudyTeasers() {
  const pathname = usePathname();
  const studies = featuredCaseStudies.slice(0, 3);

  return (
    <section className="py-20 sm:py-24" aria-labelledby="case-studies-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Documented outcomes"
          title="Examples of trade media programmes we have managed"
          description="Selected results from campaigns for industrial clients. Full details are available on the Success Stories page."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {studies.map((study) => (
            <Card key={study.slug} as="article">
              <p className="text-sm font-semibold text-accent">
                {study.client}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-navy">
                {study.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {study.outcomes.slice(0, 2).map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2 text-sm text-navy/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {outcome}
                  </li>
                ))}
              </ul>
              <Link
                href="/success-stories"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                onClick={() =>
                  trackEvent({
                    event: "case_study_view",
                    case_study: study.slug,
                    page: pathname,
                  })
                }
              >
                Read case study
                <ArrowRight size={14} />
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-2 font-semibold text-navy hover:text-accent"
          >
            View all documented programmes
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
