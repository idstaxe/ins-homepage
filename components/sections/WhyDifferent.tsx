import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiators } from "@/content/services";

export function WhyDifferent() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="why-different-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="why-different-heading"
          eyebrow="Why INS"
          title="A focused approach to trade media for industrial companies"
          description="INS is not a generalist PR agency. We work exclusively with industrial and technical companies that need precise visibility in the specialist media their customers actually read."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {differentiators.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
