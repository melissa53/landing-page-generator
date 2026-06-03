# landing-page-generator

Post-booking landing page generator. Generates a personalized landing page for a client after they confirm onboarding.

## Getting started

```bash
npm install
npm run dev
```

## Editing client data

All auto-filled fields are driven by `src/client-data.json`:

```json
{
  "clientName": "Apex Media Group",
  "logoUrl": "https://...",
  "websiteUrl": "https://apex-media.com",
  "primaryColor": "#1A1A2E",
  "accentColor": "#E63946",
  "fontFamily": "Inter"
}
```

## Media logos

`src/logos.json` contains the media outlet logos rendered in the strip. For the test run these are hardcoded. To regenerate from a real client site:

```bash
npm run scrape -- https://yourclientsite.com
```

This fetches the client homepage (and `/press`, `/media`), detects known media mentions, and overwrites `src/logos.json`.

## Manual sections (fill after generation)

| Section | What to fill in |
|---|---|
| Video Embed | Replace placeholder with iframe or video embed URL |
| Case Study 1–3 | Image, client name, result headline, description, CTA link |

## Tech stack

- React 19 + Vite 8
- TypeScript
- Tailwind CSS v3
- Cheerio (scraper)

## Deployment

Static site — deploy to Railway. Matt connects the onboarding form webhook and Railway build pipeline.
