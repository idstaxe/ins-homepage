import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Why Trade Media Matters for B2B Sales",
  description:
    "Trade media is the #1 trusted source for credible product news in industrial B2B. Learn why coverage in specialist publications drives purchase decisions.",
  alternates: {
    canonical: `${siteConfig.url}/why-trade-media`,
  },
};

const reasons = [
  {
    title: "Gain trust of potential buyers",
    description:
      "Credibility equals trust, and trust equals sales. Industry insiders loyally respect specialized trade publications as valuable resources for decision making.",
  },
  {
    title: "Reach a highly specific audience",
    description:
      "Trade media readers are passionate, well-educated experts who understand your products. One published article in the right magazine can result in hundreds of direct sales opportunities.",
  },
  {
    title: "More valuable business opportunities",
    description:
      "Trade media coverage makes your products a talking point globally and gets ideal customers coming directly to you — replicating and improving on trade show lead generation.",
  },
  {
    title: "Tell your technical story",
    description:
      "In trade media, innovative products are placed centre-stage with the nitty-gritty technical details experts are passionate about.",
  },
];

const insBenefits = [
  "Create genuine sales value from your media coverage",
  "Generate the right media buzz around new products and events",
  "Reach precise international audiences with pinpoint accuracy",
  "Achieve credibility way beyond paid advertising or social media",
  "Demonstrate clear, concise, measurable results from coverage",
];

export default function WhyTradeMediaPage() {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "/contact#book";

  return (
    <>
      <section className="bg-navy py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Why Trade Media
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Reach the readers that matter
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Trade media is the number one source of product innovation news for
            industrial decision makers. Purchase decisions are made based on the
            products covered in these trusted pages.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="What is trade media?"
            description="Trade media (magazines and journals, print or digital) targets specialist audiences who work in a particular industry. These publications keep industry members aware of new products, events, and R&D — and contain targeted advertising that informs purchasing decisions."
          />

          <div className="mt-12 rounded-2xl border border-border bg-white p-8">
            <h2 className="text-xl font-semibold text-navy">
              Why is trade media essential for sales?
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "#1 trusted source for credible product news",
                "Shapes purchase decisions in your industry",
                "Engages key players from decision-makers to end-users",
                "Shortens sales processes with ready-to-buy purchasers",
                "Your competitors are already visible there",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-navy/80"
                >
                  <CheckCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Benefits for industrial companies"
            title="Why coverage in specialist trade media supports sales"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <h3 className="font-semibold text-navy">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Why INS"
                title="We focus exclusively on industrial trade media"
                description="For over 40 years we have worked with manufacturers to reach the specialist editors and publications that serve their markets. We select media based on the specific product and the audiences that buy it."
              />
            </div>
            <ul className="space-y-4">
              {insBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 text-sm text-navy/80"
                >
                  <CheckCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={calendlyUrl} size="lg">
              Book a strategy call
              <ArrowRight size={18} />
            </Button>
            <Link
              href="/success-stories"
              className="text-sm font-semibold text-navy hover:text-accent"
            >
              See trade media case studies →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
