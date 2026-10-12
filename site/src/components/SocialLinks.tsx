// Shared social links, used by both the nav Company dropdown and the footer,
// from the single `socials` array in nav.js (no duplication).
import { socials } from '@/data/nav.js';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import styles from './SocialLinks.module.css';

const cn = cx(styles);

export default function SocialLinks({ showLabels = false, className }: { showLabels?: boolean; className?: string }) {
  return (
    <div className={cn('social-links', showLabels && 'labeled', className)}>
      {socials.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.aria} className={cn('social-link')}>
          <span className={cn('social-badge')}>
            {s.img
              ? <img src={asset(s.img)} alt="" className={cn(s.wordmark && 'wordmark')} />
              : <svg viewBox="0 0 24 24" fill="#101014" aria-hidden="true"><path d={s.path}></path></svg>}
          </span>
          {showLabels && <span className={cn('social-label')}>{s.label}</span>}
        </a>
      ))}
    </div>
  );
}
