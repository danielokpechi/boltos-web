// PostCSS plugin: keep the Astro site's cascade in CSS Modules.
//
// The styles were ported verbatim from Astro components. Astro scopes styles by
// adding [data-astro-cid-…] to every compound selector (`.a p` became
// `.a[data-astro-cid] p[data-astro-cid]`), which adds (0,1,0) specificity per
// compound. CSS Modules scope by renaming classes instead, so without this some
// rules would win in a different order than on the Astro site (e.g. a
// `.head p` colour beating `.strong.snow`). This appends `:not(._)` (matches
// every element, weighs (0,1,0)) to each local compound, before any
// pseudo-element, so specificity, and therefore the rendered result, matches.
// Only *.module.css files are touched; :global(...) parts and keyframes are left alone.
const MARK = ':not(._)';

function splitTop(s, re) {
  const out = []; let depth = 0, cur = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    if (depth === 0 && re.test(ch)) {
      // collapse a run of combinator/whitespace characters into one separator
      let j = i; while (j < s.length && re.test(s[j])) j++;
      out.push(cur, s.slice(i, j)); cur = ''; i = j - 1;
    } else cur += ch;
  }
  out.push(cur);
  return out;
}

function tagCompound(c) {
  if (!c || c.includes(MARK) || c.startsWith(':global')) return c;
  let depth = 0;
  for (let i = 0; i < c.length; i++) {
    const ch = c[i];
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    else if (depth === 0 && c.startsWith('::', i)) return c.slice(0, i) + MARK + c.slice(i);
  }
  return c + MARK;
}

const tagSelector = (sel) =>
  splitTop(sel.trim(), /[\s>+~]/).map((p, i) => (i % 2 ? p : tagCompound(p))).join('');

const plugin = () => ({
  postcssPlugin: 'astro-specificity',
  Rule(rule) {
    const file = rule.source?.input?.file ?? '';
    if (!file.endsWith('.module.css') || rule.__astroSpec) return;
    if (rule.parent?.type === 'atrule' && /keyframes$/i.test(rule.parent.name)) return;
    rule.selectors = rule.selectors.map(tagSelector);
    rule.__astroSpec = true;
  },
});
plugin.postcss = true;
module.exports = plugin;
