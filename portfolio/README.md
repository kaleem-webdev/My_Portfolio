# Kaleem Ullah – Portfolio

A fast, static portfolio built with **Next.js (App Router) + React + TypeScript + Tailwind CSS**, with Lucide icons. No backend, no database and no extra dependencies beyond `lucide-react`.

## Run it

Requires Node.js 20+.

```bash
cd portfolio
npm install
npm run dev          # http://localhost:3000  (development)

npm run build        # production build
npm run start        # serve the production build
npm run lint         # ESLint
```

## Files you edit

| What to change | File |
| --- | --- |
| Name, title, "years of experience", site URL, SEO description | `src/data/site.ts` → `site` |
| Email, phone numbers, GitHub and LinkedIn links, optional form endpoint | `src/data/site.ts` → `contact` |
| Your photo | Replace `public/images/kaleem-portrait.jpg` (and `.webp`), 4:5 ratio, ~800×1000px. Path/size set in `portrait` |
| Your CV | Replace `public/cv/Kaleem_Ullah_CV.pdf` (keep the filename, or update `cvPath`) |
| About text and side card | `src/data/site.ts` → `about`, `education` |
| Skills | `src/data/site.ts` → `skillGroups` |
| **Projects** (title, description, tags, links, screenshot) | `src/data/site.ts` → `projects` |
| Work experience | `src/data/site.ts` → `experience` |
| Services | `src/data/site.ts` → `services` |
| Colours | `src/app/globals.css` (`--accent`, `--background`, …) |
| Social-share image | `public/images/og.jpg` (1200×630) |
| Favicon | `src/app/icon.svg` |
| Fonts | `src/app/fonts/` (self-hosted Geist, Geist Mono, Instrument Serif – all open source) |

### Adding a real project

In `src/data/site.ts`, edit an entry in `projects`:

```ts
{
  title: "My Real Project",
  description: "What it does and what you built.",
  tags: ["Laravel", "MySQL"],
  thumb: "web",
  image: "/images/projects/my-real-project.jpg", // put the screenshot in public/images/projects/
  liveUrl: "https://…",     // leave "" to keep the button disabled
  sourceUrl: "https://github.com/kaleem-webdev/…",
  placeholder: false,       // removes the "Sample placeholder" badge
}
```

## Pages

| URL | What it is |
| --- | --- |
| `/` | Home: hero, stats, 3 featured projects, contact call-to-action |
| `/about`, `/skills`, `/projects`, `/experience`, `/services`, `/contact` | One page each, with its own title, description, canonical tag and structured data |
| `/sitemap.xml`, `/robots.txt` | Generated automatically from `navLinks` and `site` in `src/data/site.ts` |

Add a new page by creating `src/app/<name>/page.tsx`, calling `pageMetadata({...})` from `src/lib/seo.ts`, and adding it to `navLinks`. It then appears in the navbar, footer and sitemap automatically.

## Animations

All motion is CSS plus tiny client components, with no animation library.

- **Headings** (`AnimatedHeading`): words rise out of a mask one after another. The text stays real HTML, so SEO and screen readers are unaffected.
- **Sections** (`Reveal` in `src/components/ui.tsx`): `variant` can be `up` (default), `left`, `right`, `scale`, `blur` or `draw`; `delay` staggers items.
- **Page banners** (`PageBanner`): one per inner page. Edit the title, breadcrumb label and description in that page's `src/app/<name>/page.tsx`.
- **Automatic effects:** scroll-progress bar, technologies ticker on Home (`TechMarquee`), page fade between routes (`src/app/template.tsx`), drifting glow, count-up stats.
- **Accessibility:** everything is switched off for visitors with "reduce motion" enabled, and content is fully visible with JavaScript disabled.
- Timings and keyframes live at the bottom of `src/app/globals.css`.

## Getting indexed by Google (checklist)

The site address lives in one place, `site.url` in `src/data/site.ts` (default `https://kaleemwebdev.vercel.app`). Canonical tags, the sitemap, robots.txt, Open Graph URLs and structured data all use it. If you move to a custom domain, set `NEXT_PUBLIC_SITE_URL` in Vercel and redeploy.

1. Deploy, then open `https://kaleemwebdev.vercel.app/sitemap.xml` and `/robots.txt` to confirm both load.
2. In Vercel → Project → Settings → **Deployment Protection**, make sure *Vercel Authentication* is **off for Production**. If it is on, Google gets a login wall and cannot index anything.
3. In [Google Search Console](https://search.google.com/search-console), add the property `https://kaleemwebdev.vercel.app` (URL prefix) and choose the **HTML tag** verification method. Copy only the `content` value into a Vercel environment variable named `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, redeploy, then click Verify.
4. Search Console → **Sitemaps** → submit `sitemap.xml`.
5. Search Console → **URL inspection** → paste each page URL → **Request indexing**.
6. Optional: do the same in Bing Webmaster Tools (`NEXT_PUBLIC_BING_SITE_VERIFICATION`).

Indexing is not instant and cannot be forced; first appearance usually takes a few days to a few weeks. When you change real content, update `site.lastUpdated` so `<lastmod>` in the sitemap stays honest.

## Contact form

There is no backend, so by default the form validates the input and then opens the visitor's email app with the message pre-filled. It tells them clearly that **nothing has been sent until they press send** there.

To receive messages directly, create a free endpoint with a form service (e.g. Formspree or Web3Forms) and paste its URL into `contact.formEndpoint` in `src/data/site.ts`. The form will then POST JSON and show success/error states based on the real response.

## Publishing checklist

- [ ] Replace the 5 placeholder projects (details, screenshots, links) and set `placeholder: false`
- [ ] Confirm the experience years label (`site.experienceLabel`) and the job entries/dates
- [ ] Confirm the skills list; delete anything you can't speak to in an interview
- [ ] Decide which email/phone/GitHub details are public (see note below)
- [ ] Update `public/cv/Kaleem_Ullah_CV.pdf` so it matches the site
- [ ] Check/replace the portrait and `public/images/og.jpg`
- [ ] (Optional) set `contact.formEndpoint` so the form sends real messages
- [ ] Buy/point your domain, then set `NEXT_PUBLIC_SITE_URL=https://your-domain` in your host's environment settings (used for canonical URL, sitemap and share cards)
- [ ] Deploy (Vercel: import the repo, no config needed. Or `npm run build` and host on any Node host)
- [ ] Test the live site on your phone; paste the URL into a social-card debugger to check the share image

## Notes

- Content in `src/data/site.ts` marked as placeholder is clearly labelled on the page. No demo or repository links have been invented.
- Animations respect `prefers-reduced-motion`, and the page works with JavaScript disabled.
