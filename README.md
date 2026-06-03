# INS Trade Media Service — Modern Homepage

A modern, conversion-focused B2B homepage for INS Trade Media Service (ins.fi) — targeted trade media outreach for industrial companies. Built with Next.js 15, TypeScript and Tailwind. The site emphasises clarity, credibility and lead qualification for technical B2B decision-makers.

## Features

- Homepage structured as a lead-generation funnel for industrial B2B visitors
- Supporting pages: Why Trade Media, Success Stories, Contact, Privacy
- Expanded contact form with industry, target markets and campaign context for qualification
- Calendly booking integration
- Web3Forms contact form
- Google Analytics 4 with GDPR-aware cookie consent banner and conversion event tracking
- JSON-LD (Organization, Service, FAQPage, ItemList), sitemap, robots.txt, llms.txt for search and AI engines
- British English, factual tone without hype, suitable for engineers and industrial decision-makers

## Getting started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
npm install
cp .env.local.example .env.local
```

### Environment variables

Edit `.env.local`:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly scheduling link |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key — see [Form email setup guide](docs/form-email-setup.md) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 Measurement ID (`G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://ins.fi`) |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Documentation

- [Cloudflare deployment guide](docs/cloudflare-deployment.md) — env vars, domain, production setup
- [Contact form email setup (Web3Forms)](docs/form-email-setup.md) — step-by-step guide to receive form submissions by email

## Deploy

The site is deployed on **Cloudflare Pages**.

- **[Cloudflare deployment guide](docs/cloudflare-deployment.md)** — environment variables, custom domain, redeploy
- **[Contact form email setup](docs/form-email-setup.md)** — receive form submissions via Web3Forms

Add all `NEXT_PUBLIC_*` variables in Cloudflare (**Workers & Pages → your project → Settings → Environment variables**), then redeploy.

## GA4 setup (post-launch)

1. Mark `form_submit` and `calendly_open` as **Conversions** in GA4 Admin → Events
2. Optionally link GA4 to Google Search Console
