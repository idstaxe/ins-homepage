import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function Testimonials() {
  return (
    <section
      className="bg-surface-muted py-20 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Client feedback"
          title="What clients say about working with INS"
          description="Comments from marketing, communications and sales leaders at industrial companies that have run trade media programmes with us."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.author} as="blockquote" className="flex flex-col">
              <p className="flex-1 text-sm leading-relaxed text-navy/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic">
                  <p className="font-semibold text-navy">{t.author}</p>
                  <p className="text-sm text-navy/60">
                    {t.role}
                    {t.company ? `, ${t.company}` : ""}
                  </p>
                </cite>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
