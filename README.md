# BoltOS Website (boltos.ai)

Production marketing site for BoltOS, built with [Next.js](https://nextjs.org)
(App Router) as a static export. It is a faithful reimplementation of the
delivered design prototypes. (It was first built in Astro; see `site/README.md`.)

## Getting started

```bash
cd site
npm install
npm run dev      # local dev server at http://localhost:4322
npm run build    # static output to site/out/
BASE_PATH=/boltos-web npm run build   # build for the GitHub Pages sub-path
```

The build is fully static — `site/out/` can be deployed to any static host.

## Structure

```
site/
  src/
    app/          one folder per route (page.tsx + page.module.css)
    components/   Nav, Footer, ParticleWave, Roadmap, Faq, ClosingCTA, LazyVideo…
    data/         nav, caseStudies, articles, steps  (shared content/config)
    lib/          base path + class-name helpers
    styles/       global.css  (brand design tokens)
  postcss/        local plugin keeping the original selector specificity
  public/         assets/ + particle-wave.js  (served at site root)
design-system/    BoltOS brand reference (tokens, type, spacing, logo rules)
*.dc.html         original design prototypes (design source of truth, see note below)
```

## Routes

`/` · `/about-us/` · `/solutions/` · `/solutions/connect/` · `/solutions/intelligence/` ·
`/products/bolt-one/` · `/case-studies/` · `/case-studies/<slug>/` (hisense, bloomberg,
dubai-hankook-24hr-race, one-football, bridgets-healthy-kitchen) · `/newsroom/` ·
`/newsroom/<slug>/` · `/book-a-demo/` · `/contact/` · `/sign-up/` · `/privacy-policy/` ·
`/cookie-policy/`. Legacy `/solutions/custom-bolt/` and `/solutions/immersive-platform/`
redirect to Bolt One and Connect.

## Design system

All work follows `design-system/BoltOS Design System.md`: brand tokens
(Night #101014 / Snow #F7F7F5 / Ultra Violet #7B2FE2 / Hot Rose #D62086 /
Sky Aqua #35C7DF), Host Grotesk + Geist + Geist Mono type, 8px spacing base.
Tokens are defined as CSS custom properties in `site/src/styles/global.css`.

## Notes

- The root `*.dc.html` files are the original design prototypes (the design source
  of truth that this site reimplements). They ran inside a proprietary design-canvas
  runtime and are kept here as reference; they are not part of the build and do not
  render standalone.
- Historical explorations, the design-canvas runtime, and bulk source assets have
  been moved to a local `archive/` folder (git-ignored, not pushed).

## Known gaps (from the prototypes, flagged not invented)

- One Football case study: hero video `boltvideo-one-football.mp4` is missing, so the
  hero shows the poster only.
- `/contact` has no page yet (footer links to it); `/book-a-demo/` and `/sign-up/`
  are external flows on the live domain.
- Olympusat and TheSoul Publishing have no logo files (rendered as text wordmarks).
