# BoltOS website (Next.js)

The boltos.ai marketing site, rebuilt in Next.js (App Router) from the Astro
site in `../site/`. Every page renders the same as the Astro version (checked
page by page with full-page screenshots at desktop and phone widths).

```bash
cd site-next
npm install
npm run dev      # http://localhost:4322
npm run build    # static export to site-next/out/
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
- `public/` is a symlink to `../site/public` while both versions live side by
  side; move the folder here when the Astro site is retired.
- Old URLs `/solutions/custom-bolt/` and `/solutions/immersive-platform/`
  redirect with static meta-refresh pages (a static export has no server).
