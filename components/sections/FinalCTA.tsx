import { SectionHeading } from "@/components/ui/SectionHeading";
import { CalendlyEmbed } from "@/components/booking/CalendlyEmbed";
import { ContactForm } from "@/components/ContactForm";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-surface-muted py-20 sm:py-24"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Next step"
          title="Discuss your trade media requirements"
          description="We work with industrial companies that need precise, credible coverage in the specialist publications their customers read. Start by requesting a consultation."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div id="book">
            <h3 className="mb-4 text-lg font-semibold text-navy">
              Book a consultation
            </h3>
            <CalendlyEmbed minHeight={500} />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-navy">
              Send your details
            </h3>
            <div className="rounded-2xl border border-border bg-white p-6">
              <ContactForm formName="homepage" compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
