import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for INS Trade Media Service website.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 prose prose-navy">
        <h1 className="text-4xl font-bold text-navy">Privacy Policy</h1>
        <p className="mt-4 text-navy/70">
          Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-navy/80">
          <section>
            <h2 className="text-xl font-semibold text-navy">Who we are</h2>
            <p className="mt-3 leading-relaxed">
              {siteConfig.name} ({siteConfig.address.street},{" "}
              {siteConfig.address.postalCode} {siteConfig.address.city},{" "}
              {siteConfig.address.country}) operates this website. Contact:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent underline">
                {siteConfig.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              Analytics cookies
            </h2>
            <p className="mt-3 leading-relaxed">
              With your consent, we use Google Analytics 4 to understand how
              visitors use our website. This helps us improve content and user
              experience. Analytics data is processed by Google LLC. You can
              accept or decline analytics cookies via the banner shown on your
              first visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">
              Contact form data
            </h2>
            <p className="mt-3 leading-relaxed">
              When you submit our contact form, we collect the information you
              provide (name, email, company, message) to respond to your
              inquiry. We do not sell your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Your rights</h2>
            <p className="mt-3 leading-relaxed">
              Under GDPR, you have the right to access, rectify, or delete your
              personal data. Contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent underline">
                {siteConfig.email}
              </a>{" "}
              to exercise these rights.
            </p>
          </section>
        </div>

        <p className="mt-12">
          <Link href="/" className="font-semibold text-accent hover:underline">
            ← Back to homepage
          </Link>
        </p>
      </div>
    </article>
  );
}
