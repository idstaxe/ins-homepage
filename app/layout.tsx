import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import {
  GoogleAnalytics,
  GoogleAnalyticsConsentInit,
} from "@/components/analytics/GoogleAnalytics";
import { CookieConsent } from "@/components/analytics/CookieConsent";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Targeted Trade Media Outreach for Industrial Companies | INS",
    template: `%s | INS Trade Media Service`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | B2B Trade Media PR`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className="antialiased">
        <GoogleAnalyticsConsentInit />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
