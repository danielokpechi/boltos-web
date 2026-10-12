// A client/partner logo. Resolves the real file by name (own aspect ratio,
// never a uniform box). Because the supplied logos are single-version and the
// site has both dark and light grounds, real logos are tinted monochrome to the
// ground (white on dark, ink on light) so every one stays legible. Falls back to
// a correctly-proportioned horizontal placeholder when no file exists yet.
import { logoFor, logoKeepColor } from '@/data/partnerLogos.js';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import styles from './LogoSlot.module.css';

const cn = cx(styles);

export default function LogoSlot({ name, src, h = 34, onLight = false, className }: {
  name: string; src?: string | null; h?: number; onLight?: boolean; className?: string;
}) {
  const resolved = src ?? logoFor(name);
  // Full-colour badge logos keep their own colours (no monochrome tint).
  const keepColor = logoKeepColor(name);
  if (!resolved) {
    return (
      <span className={cn('logo-slot', onLight && 'on-light', className)} data-logo-slot={name} role="img" aria-label={name} style={{ height: h }}>{name}</span>
    );
  }
  return (
    <img
      src={asset(resolved)}
      alt={name}
      className={cn('logo-real', className)}
      style={keepColor
        ? { height: h, width: 'auto', filter: 'none', opacity: 1 }
        : { height: h, width: 'auto', filter: onLight ? 'brightness(0)' : 'brightness(0) invert(1)', opacity: onLight ? 0.82 : 0.9 }}
    />
  );
}
