import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CalendlyEmbed } from "@/components/booking/CalendlyEmbed";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact INS Trade Media Service",
  description:
    "Book a strategy call or send a message to INS. Headquartered in Helsinki, Finland — serving industrial B2B companies worldwide.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

function contactPointSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact INS Trade Media Service",
    description: "Get in touch with INS for trade media PR and press release distribution.",
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.name,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        postalCode: siteConfig.address.postalCode,
        addressCountry: "FI",
      },
    },
  };
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPointSchema()} />

      <section className="bg-navy py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Contact
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Request a consultation for your trade media campaign
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Tell us about your products, target markets and upcoming news. We will prepare a relevant approach and media recommendation.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-8">
              <SectionHeading
                title="Get in touch"
                description="We help industrial companies secure targeted editorial coverage in the trade media that matter to their buyers and specifiers."
              />
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin
                    className="mt-1 h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <address className="not-italic text-sm text-navy/80">
                    <strong className="block text-navy">
                      {siteConfig.name}
                    </strong>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode}{" "}
                    {siteConfig.address.city}
                    <br />
                    {siteConfig.address.country}
                  </address>
                </li>
                <li className="flex items-center gap-4">
                  <Phone
                    className="h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="text-sm text-navy/80 hover:text-accent"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail
                    className="h-5 w-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-navy/80 hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <div id="book" className="mb-12">
                <h2 className="mb-4 text-lg font-semibold text-navy">
                  Book a consultation
                </h2>
                <CalendlyEmbed minHeight={650} />
              </div>
              <div>
                <h2 className="mb-4 text-lg font-semibold text-navy">
                  Provide your details for a media assessment
                </h2>
                <div className="rounded-2xl border border-border bg-white p-6">
                  <ContactForm formName="contact-page" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
