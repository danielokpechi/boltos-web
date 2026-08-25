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
  if (n.includes('bolt')) return '/assets/logo/BoltPlus_Primary_RGB.svg';
  // Still needed: Bridget's Healthy Kitchen, Dooya Media Group,
  // TheSoul Publishing, Primal Capital, Trovio Group.
  return null;
}
