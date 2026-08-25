// Resolve a client/partner name (any wording variant) to its logo file.
// Returns null when we don't have the file yet → LogoSlot shows a placeholder.
const P = '/assets/logos/partners/';

export function logoFor(name) {
  const n = String(name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  if (n.includes('hisense')) return P + 'hisense.png';
  if (n.includes('bloomberg')) return P + 'bloomberg.svg';
  if (n.includes('onefootball')) return P + 'onefootball.svg';
  if (n.includes('binance')) return P + 'binance.svg';
  if (n.includes('olympusat')) return P + 'olympusat.png';
  if (n.includes('vidaa')) return P + 'vidaa.png';
  if (n.includes('24h') || n.includes('dubai')) return P + '24h-series.png';
  if (n.includes('trovio')) return P + 'trovio.png';
  if (n.includes('primal')) return P + 'primal-capital.png';
  if (n.includes('thesoul') || n.includes('soulpublishing')) return P + 'thesoul.png';
  // Bridget's: colour badge icon (magenta ground, white wordmark) used on the
  // Bridget's case-study card only.
  if (n.includes('bridget')) return '/assets/logos/bridget.png';
  if (n.includes('bolt')) return '/assets/logo/BoltPlus_Primary_RGB.svg';
  // Dooya Media Group has no supplied logo yet; falls through to a placeholder.
  return null;
}

// Some logos are full-colour badges with knockout text inside a coloured box
// (e.g. the 24H Series "powered by Hankook" mark). The monochrome tint used on
// wordmark logos would flatten these into a solid blob, so they must render in
// their own colours on every ground.
export function logoKeepColor(name) {
  const n = String(name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  return n.includes('24h') || n.includes('dubai') || n.includes('hankook') || n.includes('bridget');
}
