import { Globe, Target, Handshake } from "lucide-react";
import { benefits } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const icons = [Globe, Target, Handshake];

export function Benefits() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="benefits-heading"
          eyebrow="The visibility challenge"
          title="Industrial buyers rely on specialist trade media"
          description="Your customers and specifiers look to trade journals and industry publications for credible information on new products, technologies and suppliers. If your innovations are not covered there, competitors' products will be."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = icons[i];
            return (
              <Card key={benefit.title} as="article">
                <Icon
                  className="mb-4 h-8 w-8 text-accent"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold text-navy">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
