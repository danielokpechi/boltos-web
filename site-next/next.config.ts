import type { NextConfig } from 'next';

// BoltOS production marketing site: fully static output (out/), clean routes
// with trailing slashes (same URLs as the Astro build). BASE_PATH serves it
// under a sub-path, e.g. BASE_PATH=/boltos-web for GitHub Project Pages.
const basePath = (process.env.BASE_PATH ?? '').replace(/\/$/, '');

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
