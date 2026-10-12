// Sub-path the site is served under ('' locally, '/boltos-web' on GitHub Pages).
// next/link adds it to page links automatically; files from public/ (images,
// video, PDFs, scripts) need it added by hand, which is what asset() does.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const asset = (p: string) => (p.startsWith('/') && !p.startsWith('//') ? BASE + p : p);
