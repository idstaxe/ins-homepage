# Contact form email setup (Web3Forms)

The INS website contact form sends submissions by email using [Web3Forms](https://web3forms.com). No custom backend is required.

---

## Quick checklist

- [ ] Create a Web3Forms account
- [ ] Copy your Access Key
- [ ] Add `NEXT_PUBLIC_WEB3FORMS_KEY` to `.env.local` (local)
- [ ] Add the same variables in Cloudflare Pages (production) — see [Cloudflare deployment guide](cloudflare-deployment.md)
- [ ] Restart dev server and test a submission
- [ ] Check inbox (and spam folder)

---

## Step 1 — Create a Web3Forms account

1. Open [https://web3forms.com](https://web3forms.com)
2. Sign up (free tier is enough for typical B2B lead volume)
3. Enter the **email address** that should receive form submissions  
   Example: `services@ins.fi` or your personal work email
4. Copy your **Access Key** from the dashboard

All submissions sent through that key are delivered to the email you registered with.

---

## Step 2 — Configure locally

1. In the project root, copy the example env file:

   ```bash
   cp .env.local.example .env.local
   ```

   On Windows (PowerShell):

   ```powershell
   Copy-Item .env.local.example .env.local
   ```

2. Open `.env.local` and set:

   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
   ```

3. Restart the dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000/contact](http://localhost:3000/contact) (or the homepage contact section) and submit a test message.

> **Note:** `.env.local` is gitignored and must never be committed. It contains secrets.

---

## Step 3 — Configure production (Cloudflare Pages)

The site is hosted on **Cloudflare**. Environment variables are set in the Cloudflare dashboard, not in the repo.

1. Open the [Cloudflare dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → your Pages project → **Settings** → **Environment variables**
3. Add for **Production**:

   | Name | Value |
   |------|--------|
   | `NEXT_PUBLIC_WEB3FORMS_KEY` | Your Web3Forms access key |

4. **Save**, then **Retry deployment** (or push a new commit)

`NEXT_PUBLIC_*` variables are included at **build time** — you must redeploy after changing them.

For all production variables (Calendly, GA4, site URL), see the full guide: **[Cloudflare deployment guide](cloudflare-deployment.md)**

Without `NEXT_PUBLIC_WEB3FORMS_KEY`, visitors see:

> *Form is not configured yet. Please email services@ins.fi directly.*

### Alternative: Vercel

If you deploy elsewhere (e.g. Vercel): **Settings → Environment Variables** → add the same key → redeploy.

---

## What each submission contains

The form is implemented in [`components/ContactForm.tsx`](../components/ContactForm.tsx).

| Label shown on site | Field name sent to Web3Forms |
|---------------------|------------------------------|
| Name | `name` |
| Company | `company` |
| Email | `email` |
| Website (optional) | `website` |
| Industry | `industry` |
| Target markets or regions | `target_markets` |
| Brief description of news / campaign | `message` |

Fixed values added on submit:

| Field | Value |
|-------|--------|
| Subject | `New trade media inquiry from INS website` |
| From name | `INS Website` |

---

## Optional — Web3Forms dashboard settings

In your Web3Forms account you can usually:

- Change the recipient email address
- Add **CC** or **BCC** recipients
- Enable an **auto-reply** to the person who submitted the form
- View submission history
- Restrict submissions to specific domains (recommended: `ins.fi`, `www.ins.fi`, `localhost`, your `*.pages.dev` preview URL)

---

## Troubleshooting

### Form shows “Form is not configured yet”

- `NEXT_PUBLIC_WEB3FORMS_KEY` is missing or empty in `.env.local` or production env vars
- Dev server was not restarted after editing `.env.local`

### No email received

- Check spam / junk folder
- Confirm the access key matches the Web3Forms account
- Verify the recipient email in the Web3Forms dashboard
- Submit again and check Web3Forms submission log in their dashboard

### Emails work locally but not in production

- Confirm the env var is set in **Cloudflare Pages → Settings → Environment variables** for Production
- **Redeploy** after adding or changing the variable (see [Cloudflare deployment guide](cloudflare-deployment.md))

---

## Security note

The key uses the `NEXT_PUBLIC_` prefix, so it is included in client-side JavaScript. This is the standard Web3Forms pattern for static/Next.js sites.

Mitigate abuse by:

- Enabling domain restrictions in Web3Forms
- Keeping the built-in honeypot field (`botcheck`) — already in the form
- Monitoring submission volume in the Web3Forms dashboard

---

## Related files

| File | Purpose |
|------|---------|
| [`.env.local.example`](../.env.local.example) | Template for all environment variables |
| [`components/ContactForm.tsx`](../components/ContactForm.tsx) | Form UI and Web3Forms API call |
| [`app/contact/page.tsx`](../app/contact/page.tsx) | Contact page |
| [`components/sections/FinalCTA.tsx`](../components/sections/FinalCTA.tsx) | Homepage contact section |
