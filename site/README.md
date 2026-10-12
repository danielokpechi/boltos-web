# BoltOS website (Next.js)

The boltos.ai marketing site, built with Next.js (App Router) as a static
export. It was ported from an earlier Astro build (see git history before
a92d41b); every page renders the same as that version, checked page by page
with full-page screenshots at desktop and phone widths.

```bash
cd site
npm install
npm run dev      # http://localhost:4322
npm run build    # static export to site/out/
BASE_PATH=/boltos-web npm run build   # GitHub Project Pages sub-path
```

## How it's put together

- `src/app/` — one folder per route (`page.tsx` + `page.module.css`). Pages are
  React Server Components; only interactive parts are client components
  (`Nav`, `MailtoForm`, `LazyVideo`, the newsroom pager, the About Us globe,
  carousel and team cards).
- Dynamic routes (`case-studies/[slug]`, `newsroom/[slug]`) are generated from
  `src/data/` with `generateStaticParams`.
- `src/components/` — shared components (nav, footer, FAQ, roadmap, CTA…).
- `src/lib/base.ts` — `asset()` adds the base path to files from `public/`;
  `src/components/A.tsx` uses `next/link` for page links.
- Styles are CSS Modules ported verbatim from the Astro components.
  `src/lib/cx.ts` keeps the original class names in the markup, and the local
  PostCSS plugin in `postcss/` reproduces Astro's selector specificity, so the
  cascade resolves exactly as it did on the Astro site.
- `public/` — images, video, PDFs and `particle-wave.js`, served at the site root.
- Old URLs `/solutions/custom-bolt/` and `/solutions/immersive-platform/`
  redirect with static meta-refresh pages (a static export has no server).
