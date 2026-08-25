// Single source for navigation, mega-menu panels and the social list
// (shared between the nav Company dropdown and the footer).

export const routes = {
  home: '/',
  about: '/about-us/',
  solutions: '/solutions/',
  immersive: '/solutions/immersive-platform/',
  customBolt: '/solutions/custom-bolt/',
  cases: '/case-studies/',
  hisense: '/case-studies/hisense/',
  bloomberg: '/case-studies/bloomberg/',
  dubai: '/case-studies/dubai-hankook-24hr-race/',
  oneFootball: '/case-studies/one-football/',
  newsroom: '/newsroom/',
  bookDemo: '/book-a-demo/',
  signup: '/sign-up/',
  contact: '/contact/',
  privacy: '/privacy-policy/',
  cookies: '/cookie-policy/',
};

// Destination for the Contact + Book a Demo fallback forms (mailto).
// From the BoltOS privacy policy (sections 9 & 12).
export const contactEmail = 'contact@bolt.global';

export const external = {
  boltplus: 'https://boltplus.tv/home',
  // Brand guidelines PDF, hosted on the site and downloaded directly (was a Drive folder).
  brandAssets: '/assets/brand/BoltOS-Brand-Guidelines-2026.pdf',
  x: 'https://x.com/boltplus',
  linkedin: 'https://www.linkedin.com/company/boltos',
  discord: 'https://discord.gg/boltos-577830719645024278',
  instagram: 'https://www.instagram.com/boltplustv/',
  privacy: 'https://boltos.ai/legal/privacy-policy/',
  cookies: 'https://boltos.ai/legal/cookie-policy/',
};

// Top-level nav triggers. `menu` keys map to panels rendered in Nav.astro.
export const navItems = [
  { id: 'Product', label: 'Product', menu: true },
  { id: 'Company', label: 'Company', menu: true },
  { id: 'Solutions', label: 'Solutions', href: routes.solutions, menu: true },
  { id: 'Cases', label: 'Case Studies', href: routes.cases, menu: true },
  { id: 'Newsroom', label: 'Newsroom', href: routes.newsroom, menu: false },
];

// Panel content
export const solutionsPanel = [
  { label: 'Immersive Platform', href: routes.immersive, sub: 'A revenue layer for your existing ecosystem' },
  { label: 'Custom Bolt+', href: routes.customBolt, sub: 'Own the distribution. Own the monetisation. Own the data.' },
];

export const casesPanel = [
  { label: 'Bloomberg', href: routes.bloomberg, sub: "BoltOS takes Bloomberg's award-winning content to the next level" },
  { label: 'Hisense', href: routes.hisense, sub: 'Bolt+ takes the immersive streaming experience to millions of Hisense TVs globally' },
  { label: 'Dubai 24HR Motor Racing', href: routes.dubai, sub: 'Racing through a high-octane live event with Dubai 24H Series.' },
  { label: 'One Football', href: routes.oneFootball, sub: 'Powering a global community with the biggest football clubs in the world.' },
];

// SVG path `d` for each social glyph (viewBox 0 0 24 24). Boltplus uses an image.
export const socials = [
  { label: 'X', href: external.x, aria: 'BoltOS on X', pad: '0',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'LinkedIn', href: external.linkedin, aria: 'BoltOS on LinkedIn', pad: '0',
    path: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.76-1.95 4.02 0 4.76 2.5 4.76 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.9-3.07-1.9 0-2.19 1.46-2.19 2.97V21h-4z' },
  { label: 'Discord', href: external.discord, aria: 'BoltOS on Discord', pad: '0',
    path: 'M20.32 4.94A19.6 19.6 0 0015.44 3.4a13.8 13.8 0 00-.63 1.29 18.2 18.2 0 00-5.44 0 13.6 13.6 0 00-.64-1.29 19.6 19.6 0 00-4.88 1.54C.73 9.6-.45 14.13.14 18.6a19.8 19.8 0 006 3.05c.48-.66.91-1.36 1.28-2.1a12.9 12.9 0 01-2.02-.97c.17-.13.34-.26.5-.4a14.1 14.1 0 0012.2 0c.16.14.33.27.5.4-.64.38-1.32.7-2.02.97.37.74.8 1.44 1.28 2.1a19.7 19.7 0 006-3.05c.7-5.19-1.18-9.68-3.54-13.66zM8.02 15.88c-1.18 0-2.15-1.08-2.15-2.4s.95-2.41 2.15-2.41 2.17 1.09 2.15 2.41c0 1.32-.95 2.4-2.15 2.4zm7.96 0c-1.18 0-2.15-1.08-2.15-2.4s.95-2.41 2.15-2.41 2.17 1.09 2.15 2.41c0 1.32-.95 2.4-2.15 2.4z' },
  { label: 'Instagram', href: external.instagram, aria: 'Bolt+ on Instagram', pad: '0',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 01-1.38-.9 3.8 3.8 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.18a6.66 6.66 0 100 13.32 6.66 6.66 0 000-13.32zm0 10.98a4.32 4.32 0 110-8.64 4.32 4.32 0 010 8.64zm8.48-11.24a1.56 1.56 0 11-3.11 0 1.56 1.56 0 013.11 0z' },
  { label: 'Boltplus.tv', href: external.boltplus, aria: 'Bolt+ web app', img: '/assets/logo/BoltPlus.png', pad: '18px' },
];
