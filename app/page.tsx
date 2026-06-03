import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { Metrics } from "@/components/sections/Metrics";
import { CaseStudyTeasers } from "@/components/sections/CaseStudyTeasers";
import { Testimonials } from "@/components/sections/Testimonials";
import { Industries } from "@/components/sections/Industries";
import { WhyDifferent } from "@/components/sections/WhyDifferent";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
} from "@/components/seo/JsonLd";
import { faqItems } from "@/content/faq";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Targeted Trade Media Outreach for Industrial Companies | INS Trade Media Service",
  description:
    "Specialist trade media outreach for manufacturers. Hand-picked press release distribution and editorial coverage in relevant international trade journals for industrial products and technologies.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[serviceSchema(), faqSchema(faqItems)]} />
      <Hero />
      <SocialProof />
      <Benefits />
      <HowItWorks />
      <Services />
      <Metrics />
      <CaseStudyTeasers />
      <Testimonials />
      <Industries />
      <WhyDifferent />
      <FAQ />
      <FinalCTA />
    </>
  );
}
