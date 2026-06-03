# Cloudflare deployment guide

This project is deployed on **Cloudflare Workers** using [@opennextjs/cloudflare](https://opennext.js.org/cloudflare). Environment variables must be set in the Cloudflare dashboard — a local `.env.local` file does not affect production.

---

## Quick checklist

- [ ] All environment variables added in Cloudflare (Production)
- [ ] Redeploy after changing variables
- [ ] Custom domain connected (e.g. `ins.fi`)
- [ ] Web3Forms domain allowlist includes your live domain
- [ ] Test contact form and Calendly on the live site

---

## Where to add environment variables

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages**
3. Select your **Pages project** (the INS homepage)
4. Open **Settings** → **Environment variables**
5. Add each variable below for **Production** (and **Preview** if you use preview deployments)

| Variable | Example | Required for |
|----------|---------|----------------|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | `xxxxxxxx-xxxx-xxxx` | Contact form emails → [form setup](form-email-setup.md) |
| `NEXT_PUBLIC_CALENDLY_URL` | `https://calendly.com/your-team/consultation` | Booking embed |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Google Analytics |
| `NEXT_PUBLIC_SITE_URL` | `https://ins.fi` | SEO metadata, sitemap, canonical URLs |

6. Click **Save**
7. Go to **Deployments** and **Retry deployment** on the latest build, or push a new commit to trigger a rebuild

> **Important:** Variables prefixed with `NEXT_PUBLIC_` are embedded at **build time**. After adding or changing them, you must **redeploy** — saving alone is not enough.

---

## Build settings (Cloudflare Workers + Next.js)

The repo includes [`wrangler.jsonc`](../wrangler.jsonc) and [`open-next.config.ts`](../open-next.config.ts) for OpenNext.

| Setting | Recommended value |
|---------|-------------------|
| Worker name | `ins-homepage` (must match `wrangler.jsonc`) |
| Build command | `npm run build` |
| Deploy command | `npm run deploy` |
| Root directory | `/` |
| Node.js version | 20+ |

Use `npm run deploy` (not bare `npx wrangler deploy`). The deploy script runs `opennextjs-cloudflare build && opennextjs-cloudflare deploy`, which uses the committed [`wrangler.jsonc`](../wrangler.jsonc) and avoids auto-migrate creating a mismatched `WORKER_SELF_REFERENCE` binding.

To deploy manually from your machine:

```bash
npm run deploy
```

---

## Custom domain

1. In your Pages project: **Custom domains** → **Set up a custom domain**
2. Add `ins.fi` (and `www.ins.fi` if needed)
3. Cloudflare will configure DNS if the domain is on the same account

After connecting the domain, update:

```env
NEXT_PUBLIC_SITE_URL=https://ins.fi
```

Then redeploy.

---

## Web3Forms on Cloudflare

The contact form posts directly from the visitor’s browser to `api.web3forms.com` — no Cloudflare Worker is required.

In the [Web3Forms dashboard](https://web3forms.com):

1. Open your form / access key settings
2. Under **allowed domains** (or similar), add:
   - `ins.fi`
   - `www.ins.fi`
   - Your `*.pages.dev` preview URL (optional, for testing)

See the full email setup guide: [form-email-setup.md](form-email-setup.md)

---

## Google Analytics on Cloudflare

GA4 runs in the browser after cookie consent — no server-side config on Cloudflare is needed.

1. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Cloudflare env vars
2. Redeploy
3. In GA4 Admin → Events, mark `form_submit` and `calendly_open` as conversions

---

## Calendly on Cloudflare

1. Set `NEXT_PUBLIC_CALENDLY_URL` to your full Calendly scheduling link
2. Redeploy
3. The embed loads in an iframe on `/contact` and the homepage CTA section

---

## Troubleshooting

### Form works locally but not on Cloudflare

- Confirm `NEXT_PUBLIC_WEB3FORMS_KEY` is set under **Production** environment variables
- **Redeploy** after adding the variable
- Check browser DevTools → Network for failed requests to `api.web3forms.com`

### Wrong site URL in metadata / sitemap

- Set `NEXT_PUBLIC_SITE_URL` to your live domain (including `https://`)
- Redeploy

### Changes to env vars not visible

- `NEXT_PUBLIC_*` values are baked in at build time — always trigger a new deployment after editing them

### Deploy fails: WORKER_SELF_REFERENCE references Worker 'homepage-ins' which was not found (code 10143)

The worker name in [`wrangler.jsonc`](../wrangler.jsonc) must match the `WORKER_SELF_REFERENCE` service binding.

Correct configuration (already in this repo):

```jsonc
{
  "name": "ins-homepage",
  "services": [
    {
      "binding": "WORKER_SELF_REFERENCE",
      "service": "ins-homepage"
    }
  ]
}
```

Push the latest code from GitHub and redeploy. Do not rely on Cloudflare auto-migrate alone — it may derive the wrong name from an old `package.json` name.

### 404 or build failures

- Check **Deployments** → latest build log in Cloudflare
- Ensure Node version matches local (18+)
- Confirm `npm run build` succeeds locally before pushing

---

## GitHub connection

Repo: [github.com/idstaxe/ins-homepage](https://github.com/idstaxe/ins-homepage)

Cloudflare Pages can auto-deploy on push to `main`. Each push triggers a new build using the environment variables configured in the dashboard.

---

## Related docs

- [Contact form email setup (Web3Forms)](form-email-setup.md)
- [`.env.local.example`](../.env.local.example) — local development template
