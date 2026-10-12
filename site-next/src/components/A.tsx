import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';
import { asset } from '@/lib/base';

// One link component for the whole site: page routes go through next/link
// (client navigation + basePath), files under /assets/ get the basePath, and
// external URLs, mailto: and #anchors stay plain <a>.
export function A({ href, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const isPage = href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/assets/');
  if (isPage) return <Link href={href} {...rest} />;
  return <a href={asset(href)} {...rest} />;
}
