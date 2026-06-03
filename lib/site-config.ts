export const siteConfig = {
  name: "INS Trade Media Service",
  shortName: "INS",
  description:
    "INS Trade Media Service specialises in targeted trade media outreach for industrial manufacturers and suppliers. Based in Helsinki, we prepare and distribute technical press releases and product news to relevant trade publications in over 160 countries.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ins.fi",
  email: "services@ins.fi",
  phone: "+358 9 6120 990",
  address: {
    street: "Pohjoisesplanadi 21B",
    city: "Helsinki",
    postalCode: "00100",
    country: "Finland",
  },
  stats: {
    years: "40+",
    mediaOutlets: "100,000+",
    countries: "160",
  },
} as const;

export const navLinks = [
  { href: "/why-trade-media", label: "Why Trade Media" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/contact", label: "Contact" },
] as const;
