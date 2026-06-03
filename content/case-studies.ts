export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  summary: string;
  outcomes: string[];
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "steerprop",
    client: "Steerprop",
    title: "6 tailor-made campaigns, 257 proven publications",
    summary:
      "Steerprop, a leading designer of azimuth propulsion systems, partnered with INS for six targeted press release campaigns to global trade media with tailor-made media lists for each release.",
    outcomes: [
      "257 total proven publications over 6 campaigns across 26 countries",
      "2,600,000+ average potential readership impressions per campaign",
      "5,500% average ROI per campaign",
      "10% increase in mailing open rate through editorial relationship development",
    ],
    featured: true,
  },
  {
    slug: "kone",
    client: "KONE",
    title: "Outperforming competitors in the DACH region",
    summary:
      "KONE chose INS to precisely reach the DACH region with product innovations. Despite competitors' home market advantage, KONE achieved significantly higher trade media coverage.",
    outcomes: [
      "38 proven published editorial articles for KONE",
      "Only 18 articles for Schindler, 22 for thyssenkrupp Elevator",
      "More than double the publicity of key competitors in their home markets",
      "Competitors displaced from visibility with essential potential customers",
    ],
    featured: true,
  },
  {
    slug: "alfa-laval",
    client: "Alfa Laval",
    title: "Year-round visibility in 14 languages",
    summary:
      "With frequent product news releases in 14 languages, INS helps Alfa Laval secure year-round visibility in trade media with truly global reach across diverse industrial sectors.",
    outcomes: [
      "Consistent global trade media visibility in 14 languages",
      "Well over 50 published articles per campaign on average",
      "Precise exposure in difficult-to-reach niche industrial markets",
      "Estimated visibility to 1.5 million specialist readers per campaign",
    ],
    featured: true,
  },
  {
    slug: "ssab",
    client: "SSAB",
    title: "500+ articles for the Swedish Steel Prize",
    summary:
      "SSAB's prestigious Swedish Steel Prize gained visibility in trade media across 11 languages, providing finalists a global platform to promote innovations with unrivaled credibility.",
    outcomes: [
      "Over 500 proven editorial articles in trade media",
      "Visibility to an estimated 26 million global readers",
      "Diverse coverage throughout the steel industry",
      "Specialised audience reach across mining, solar, automotive, and agriculture",
    ],
    featured: true,
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
