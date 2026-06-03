import {
  Send,
  Newspaper,
  PenLine,
  Languages,
  Globe2,
  BarChart3,
} from "lucide-react";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const icons = [Send, Newspaper, PenLine, Languages, Globe2, BarChart3];

export function Services() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What we deliver"
          title="The components of a targeted trade media programme"
          description="Each engagement includes the elements required to reach the right editors with content that meets their standards."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <Card key={service.title} as="article">
                <Icon
                  className="mb-4 h-7 w-7 text-accent"
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {service.description}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">
                  {service.outcome}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
