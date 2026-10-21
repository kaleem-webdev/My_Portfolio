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
