# FUTURE_FS_01 — Personal Professional Portfolio

**Future Interns — Full Stack Web Development — Task 1**

A personal portfolio site for Spoorthi K P — AI, computer vision and full-stack
work, built as a product showcase rather than a resume page.

## Overview

Single-page site introducing MediMind AI (the primary, ongoing project) alongside
two other real projects — SafetyNet AI (a hackathon build, labeled as such) and
an MRI enhancement/segmentation project — plus experience, education, and a
working contact form that emails submissions directly.

## Features

- Editorial hero with a custom animated SVG diagram (no stock imagery)
- Selected Work section with expandable in-page case studies per project
- Honest project labeling — MediMind AI as the flagship product, SafetyNet AI
  explicitly marked as a team hackathon build, MRI project as a technical piece
- Dark / light theme, persisted, no flash of the wrong theme on load
- Functional contact form with server-side email delivery (Resend), input
  validation, and honeypot spam protection
- SEO: per-page meta tags, Open Graph/Twitter tags, canonical URL,
  `robots.txt`, `sitemap.xml`, semantic heading hierarchy
- Accessibility: keyboard-navigable, visible focus states, WCAG AA color
  contrast (verified — see below), `prefers-reduced-motion` support throughout
- Responsive from 320px up, tested at 320 / 375 / 768 / 1024 / 1440px

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion (scroll reveals, hero animation, expand/collapse — all
  reduced-motion aware)
- Resend (contact form email delivery) via a Vercel serverless function
- Deployment target: Vercel

## Design Philosophy

Near-black / off-white base with a single amber accent, restrained to one
display face (Space Grotesk) for headlines, one body face (Inter), and one
mono face (IBM Plex Mono) for small tag/label text. No skill-percentage bars,
no stock photography, no fabricated stats, testimonials or clients — every
claim in the project case studies is sourced from what was actually built
(SafetyNet AI's case study was written directly from its GitHub repository).

**A note on the accent color:** the amber (`#ffb020`) fails WCAG contrast as
small text on the light background (1.74:1, needs 4.5:1). It's kept for
borders, dots, and dark-mode text, where contrast is excellent (10.76:1). A
second token, `--color-accent-ink` (`#8a5c0f`, 5.51:1 on the light
background), is used anywhere amber appears as text or a focus outline. Both
are defined in `src/index.css`.

## Project Structure

```text
FUTURE_FS_01/
├── api/
│   └── contact.ts          # Vercel serverless function — sends email via Resend
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # One file per section/UI piece
│   ├── data/                # site.ts, projects.ts, profile.ts — all real content lives here
│   ├── hooks/                # useTheme
│   ├── lib/                  # small utilities
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             # design tokens (colors, fonts) + base styles
├── .env.example
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json / tsconfig.api.json
├── vite.config.ts
└── package.json
```

Content is data-driven: adding a new project means adding an entry to
`src/data/projects.ts`, not touching any component.

## Contact Form & Email Notifications

`src/components/Contact.tsx` posts to `/api/contact`, a Vercel serverless
function (`api/contact.ts`) that validates the input server-side and sends
the message via [Resend](https://resend.com) to
`spoorthikengol27@gmail.com`. The Resend API key is read from an environment
variable and is never exposed to the browser.

**Before this goes live**, two things need to happen in Resend's dashboard:

1. Verify a real sending domain (the default `onboarding@resend.dev` address
   only delivers to the Resend account owner's own inbox — fine for local
   testing, not for production).
2. Update the `from` address in `api/contact.ts` to use that verified domain.

## Screenshots

_Add screenshots of the deployed site here before submitting — a full-page
hero shot and one showing an expanded case study are enough._

## Live Demo

_Add the deployed Vercel URL here once deployed._

## Installation

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/FUTURE_FS_01.git
cd FUTURE_FS_01
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and fill in a real Resend API key:

```bash
cp .env.example .env
```

```
RESEND_API_KEY=your_resend_api_key_here
```

The contact form's send button won't work locally without this — everything
else on the site runs fine without it.

## Running Locally

```bash
npm run dev
```

Opens at `http://localhost:5173`. Note: the `/api/contact` endpoint is a
Vercel serverless function and won't respond when run via plain `vite dev` —
use `vercel dev` instead (see below) if you need to test the contact form
end-to-end locally.

```bash
npm install -g vercel
vercel dev
```

## Deployment

1. Push this repository to GitHub as `FUTURE_FS_01`.
2. Import the repo into [Vercel](https://vercel.com/new).
3. In the Vercel project's Environment Variables settings, add
   `RESEND_API_KEY` with your real key.
4. Deploy. Vercel builds the Vite frontend and the `api/contact.ts`
   serverless function together automatically — no extra configuration
   needed.
5. Update `src/data/site.ts` (`siteUrl`), `index.html`, and
   `public/sitemap.xml`/`public/robots.txt` with the real deployed domain.

## Future Improvements

- Replace project UI mockups with real product screenshots once available
- Add a resume PDF and wire up the nav's "Resume" link
- Verify a sending domain in Resend for production email delivery
- Consider per-project routes (`/work/medimind-ai`) if individual project
  pages need their own search indexing later

## Author

**Spoorthi K P**
Student, JNN College of Engineering (JNNCE)
[spoorthikengol27@gmail.com](mailto:spoorthikengol27@gmail.com) ·
[LinkedIn](https://linkedin.com/in/spoorthi-k-p-1017aa3a2)

Built as Task 1 of the Future Interns Full Stack Web Development internship.
