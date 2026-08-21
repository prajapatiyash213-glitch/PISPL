# PISPL India Pvt Ltd — Website

Production-ready marketing site for **PISPL India Pvt Ltd** (IT Infrastructure ·
Networking · Cybersecurity), built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, Framer Motion, GSAP ScrollTrigger and Lenis smooth scrolling.

## Stack

- **Next.js 14** (App Router, `next/font`, `next/image`)
- **Tailwind CSS** — design tokens derived from the brand's existing blue
  (`#2D80FE`) and navy (`#0B2858`), see `tailwind.config.ts`
- **Framer Motion** — entrance animations, counters, mobile menu
- **GSAP + ScrollTrigger** — parallax on the hero's network-topology graphic
- **Lenis** — smooth, inertia-based scrolling, synced to ScrollTrigger
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm run start   # production build
```

## Project structure

```
app/                  Routes, layout, global styles, SEO (sitemap/robots)
components/layout/     Navbar, Footer, SmoothScrollProvider
components/sections/   One file per homepage section (Hero, Services, ...)
components/ui/         Reusable primitives (RevealOnScroll, StatCounter, ...)
lib/data.ts             All copy/content in one typed module
public/images/           Brand assets (see below)
```

## Content & assets

- All copy lives in `lib/data.ts` — update it there rather than in components.
- Images were carried over from the client's existing asset library
  (customer logos, technology partner logos, deployment photos, hero
  illustration). Swap any file in `public/images/` with a same-named
  replacement to update visuals without touching code.
- **No PISPL wordmark logo file existed in the source assets** — the navbar
  and footer currently render a text/monogram mark ("P" + "PISPL India") in
  brand colors. Replace `components/layout/Navbar.tsx` and
  `components/layout/Footer.tsx` with an `<Image>` once a real logo file is
  available.
- `components/sections/Testimonials.tsx` uses representative placeholder
  quotes (no real client is named) — swap in verified, attributed quotes
  once collected.
- The contact form in `components/sections/Contact.tsx` is UI-complete but
  not wired to a backend. Point `handleSubmit` at an API route, or a service
  like Formspree / HubSpot forms.

## Notes on brand fixes applied

Per the site review, this build:

- Uses **PISPL India Pvt Ltd** everywhere (no "Prishtvik" / "software
  company" references)
- Positions the company as IT Infrastructure / Networking / Cybersecurity —
  no "digital transformation" / "creativity" / "products" language
- Drops irrelevant legacy services (home theatre, video conferencing)
- Renames the old "Product Portfolio" section to **Deployments**
- Uses "Get Free Consultation" as the primary contact CTA
- Keeps client logos, stats and partner brand logos (existing trust signals)

## Accessibility & performance

- Semantic landmarks (`header`, `main`, `footer`), labelled form fields,
  visible focus rings (`:focus-visible`)
- `prefers-reduced-motion` disables Lenis and shortens all transitions
- Images use `next/image` for automatic AVIF/WebP + responsive sizing
- Fonts loaded via `next/font` (self-hosted, no layout shift)
