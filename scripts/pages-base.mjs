// Post-build pass for GitHub Project Pages: the site is served under a subpath
// (e.g. /boltos-web/), but the source uses root-absolute paths (/assets, /about-us).
// This rewrites root-absolute href/src and CSS url() in the built output to include
// the base, leaving external URLs (http, //, data:, mailto:, #) untouched.
// Idempotent: skips paths already under the base.
import fs from 'fs';
import path from 'path';

const BASE = (process.env.PAGES_BASE || '/boltos-web').replace(/\/$/, '');
const DIST = path.resolve(process.env.DIST_DIR || 'site/dist');
const seg = BASE.replace(/^\//, ''); // 'boltos-web'

function walk(dir) {
  let out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p));
    else if (/\.(html|css)$/.test(e.name)) out.push(p);
  }
  return out;
}

// href|src|poster|data-src="/x"  (single leading slash, not //), and CSS url(/x)
const attr = /\b(href|src|poster|data-src)="\/(?!\/)([^"]*)"/g;
const cssUrl = /url\(\s*\/(?!\/)([^)'"]*)\)/g;

if (!fs.existsSync(DIST)) { console.error('DIST not found:', DIST); process.exit(1); }

let files = 0, edits = 0;
for (const f of walk(DIST)) {
  const src = fs.readFileSync(f, 'utf8');
  let n = 0;
  let out = src.replace(attr, (m, a, rest) => {
    if (rest === seg || rest.startsWith(seg + '/')) return m; // already based
    n++; return `${a}="${BASE}/${rest}"`;
  });
  out = out.replace(cssUrl, (m, rest) => {
    if (rest === seg || rest.startsWith(seg + '/')) return m;
    n++; return `url(${BASE}/${rest})`;
  });
  if (n) { fs.writeFileSync(f, out); files++; edits += n; }
}
console.log(`pages-base: rewrote ${edits} path(s) across ${files} file(s) under base ${BASE}`);
