interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  const json = Array.isArray(data) ? data : [data];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json.length === 1 ? json[0] : json) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "INS Trade Media Service",
    alternateName: "Industrial News Service",
    url: "https://ins.fi",
    logo: "https://ins.fi/images/logo.png",
    description:
      "INS Trade Media Service specialises in targeted editorial coverage for industrial companies. We work with manufacturers of technical products to reach the specialist trade media read by their customers and specifiers in over 160 countries.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pohjoisesplanadi 21B",
      addressLocality: "Helsinki",
      postalCode: "00100",
      addressCountry: "FI",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+358-9-6120-990",
      email: "services@ins.fi",
      contactType: "sales",
      availableLanguage: ["English", "Finnish", "Swedish"],
    },
    sameAs: ["https://ins.fi", "https://www.ins-news.com"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "INS Trade Media Service",
    url: "https://ins.fi",
    description:
      "Earn coverage in the right trade media to engage B2B customers and boost sales.",
    publisher: {
      "@type": "Organization",
      name: "INS Trade Media Service",
    },
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Trade Media PR & Press Release Distribution",
    provider: {
      "@type": "Organization",
      name: "INS Trade Media Service",
    },
    description:
      "Targeted trade media outreach and press release distribution for industrial manufacturers and suppliers. We identify relevant specialist publications, prepare technical content and manage outreach to editors in priority markets worldwide.",
    areaServed: "Worldwide",
    serviceType: "Public Relations",
  };
}

export function faqSchema(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function caseStudiesListSchema(
  studies: { title: string; summary: string; client: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "INS Trade Media Success Stories",
    itemListElement: studies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        headline: study.title,
        description: study.summary,
        author: {
          "@type": "Organization",
          name: study.client,
        },
        publisher: {
          "@type": "Organization",
          name: "INS Trade Media Service",
        },
      },
    })),
  };
}
