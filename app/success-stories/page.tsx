import type { Metadata } from "next";
import { SuccessStoriesContent } from "@/components/sections/SuccessStoriesContent";
import {
  JsonLd,
  caseStudiesListSchema,
} from "@/components/seo/JsonLd";
import { caseStudies } from "@/content/case-studies";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Trade Media Success Stories & Case Studies",
  description:
    "See how INS helped Steerprop, KONE, Alfa Laval, and SSAB achieve hundreds of trade media publications and measurable ROI.",
  alternates: {
    canonical: `${siteConfig.url}/success-stories`,
  },
};

export default function SuccessStoriesPage() {
  return (
    <>
      <JsonLd data={caseStudiesListSchema(caseStudies)} />
      <SuccessStoriesContent />
    </>
  );
}
