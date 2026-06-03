export interface Service {
  title: string;
  description: string;
  outcome: string;
}

export const services: Service[] = [
  {
    title: "Campaign-specific media selection",
    description:
      "We compile targeted lists of trade titles and editors relevant to your product, application and priority markets for each campaign.",
    outcome: "Relevant outlets only",
  },
  {
    title: "Maintained newsroom",
    description:
      "We keep your company profile, products and news available in a format editors can easily access and republish.",
    outcome: "Ongoing source for journalists",
  },
  {
    title: "Trade media writing and adaptation",
    description:
      "We prepare or adapt your announcements in the style and length expected by specialist trade editors.",
    outcome: "Content ready for publication",
  },
  {
    title: "Technical translation",
    description:
      "Accurate translation of technical and commercial content into the languages of your target markets.",
    outcome: "Local-language versions",
  },
  {
    title: "Outreach and relationship management",
    description:
      "We manage the sending of personalised pitches, follow-up with editors and coordination across markets.",
    outcome: "Single point of contact",
  },
  {
    title: "Monitoring and reporting",
    description:
      "We track placements and provide structured reports covering publications, languages, estimated readership and key metrics.",
    outcome: "Transparent results",
  },
];

export const howItWorksInput = [
  "Details of the news, product or announcement",
  "Priority markets, regions and audience types",
];

export const howItWorksOutput = [
  "Campaign-specific media list compiled from our database and editor relationships",
  "Content drafted or refined for trade media style, with professional translation where required",
  "Personalised pitches sent to selected editors; follow-up handled",
  "Your company and product newsroom maintained for ongoing journalist access",
  "Monitoring of placements, with reporting on publications, estimated reach and outcomes",
];

export const benefits = [
  {
    title: "Reach across borders without dilution",
    description:
      "We maintain active contacts with relevant trade titles in the markets you specify. Coverage is not sprayed across unrelated outlets.",
  },
  {
    title: "Credibility that paid channels cannot buy",
    description:
      "Editorial placement in a specialist trade journal carries the authority of an independent editor. This influences professional buyers and specifiers more effectively than advertising or owned content.",
  },
  {
    title: "Consistent, managed media presence",
    description:
      "We handle ongoing outreach, newsroom maintenance, follow-up and reporting so your visibility does not depend on one-off press releases or internal bandwidth.",
  },
];

export const metrics = [
  { value: "257+", label: "Proven publications across 6 campaigns for one client" },
  { value: "5,500%", label: "Reported ROI on a documented campaign" },
  { value: "500+", label: "Editorial articles from one Swedish Steel Prize programme" },
  { value: "60+", label: "Trade journals from a single campaign" },
];

export const clientLogos = [
  "SSAB",
  "Alfa Laval",
  "KONE",
  "Hermle",
  "Steerprop",
  "TAGARNO",
  "Water Jet Sweden",
  "T.CON",
];

export const industries = [
  "Marine propulsion and shipbuilding",
  "Steel production and metal processing",
  "Elevators, escalators and urban mobility",
  "Hygienic processing, food, beverage and pharma",
  "Industrial machinery and automation",
  "Process engineering and fluid handling",
  "Sustainable materials and packaging",
  "Logistics, ports and heavy transport",
  "Paper, print and converting",
  "Technical components and B2B equipment",
];

export interface Differentiator {
  title: string;
  description: string;
}

export const differentiators: Differentiator[] = [
  {
    title: "Hand-picked, campaign-specific media lists",
    description: "We do not use generic mass distribution. For each campaign we select the precise titles and editors whose readers buy products like yours.",
  },
  {
    title: "Specialist focus on industrial and technical content",
    description: "We work only with industrial companies. Our writers and media contacts understand technical products, specifications and applications.",
  },
  {
    title: "Full-service workload reduction",
    description: "From content and translation to outreach, follow-up, newsroom maintenance, monitoring and KPI reporting — one partner handles the entire process.",
  },
  {
    title: "Long-term media relationships, not one-off blasts",
    description: "We maintain ongoing relationships with trade editors. Consistent, relevant pitches from a known source achieve higher placement rates over time.",
  },
];
