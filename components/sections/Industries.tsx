import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/content/services";

export function Industries() {
  return (
    <section className="bg-surface-muted py-20 sm:py-24" aria-labelledby="industries-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries"
          title="We work with industrial companies across sectors"
          description="INS specialises in targeted trade media outreach for manufacturers and suppliers of technical products, equipment and solutions. The media we reach serve professional buyers and specifiers in these fields."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy/80"
            >
              {industry}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy/60">
          If your sector is not listed, contact us. Our database covers most industrial verticals worldwide.
        </p>
      </div>
    </section>
  );
}
