import { asset } from '@/lib/base';

// Static redirect page (a static export has no server redirects): an instant
// meta refresh plus a fallback link, like Astro's generated redirect pages.
// React hoists the <meta>/<link> tags into <head>.
export default function Redirect({ to }: { to: string }) {
  const url = asset(to);
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${url}`} />
      <meta name="robots" content="noindex" />
      <link rel="canonical" href={`https://boltos.ai${to}`} />
      <p style={{ padding: '120px 24px', textAlign: 'center' }}>
        This page has moved to <a href={url}>{to}</a>.
      </p>
    </>
  );
}
