# BoltOS Website (boltos.ai)

Production marketing site for BoltOS, built with [Astro](https://astro.build) as a
static site. It is a faithful reimplementation of the delivered design prototypes.

## Getting started

```bash
cd site
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static output to site/dist/
npm run preview  # serve the built site
```

The build is fully static — `site/dist/` can be deployed to any static host.

## Structure

```
site/
  src/
    components/   Nav, Footer, ParticleWave, Roadmap, PlatformCTA
    layouts/      Base, CaseStudy (data-driven)
    pages/        one file per route
    data/         nav, caseStudies, steps  (shared content/config)
    styles/       global.css  (brand design tokens)
  public/         assets/ + particle-wave.js  (served at site root)
design-system/    BoltOS brand reference (tokens, type, spacing, logo rules)
CLAUDE.md         project/design-system instructions
*.dc.html         original design prototypes (design source of truth, see note below)
```

## Routes

`/` · `/about-us/` · `/solutions/` · `/solutions/immersive-platform/` ·
`/solutions/custom-bolt/` · `/case-studies/` · `/case-studies/hisense/` ·
`/case-studies/bloomberg/` · `/case-studies/dubai-hankook-24hr-race/` ·
`/case-studies/one-football/` · `/newsroom/`

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
