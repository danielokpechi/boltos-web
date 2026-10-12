// The single, standardized closing CTA used across the site.
// Copy taken from the live boltos.ai homepage.
import { routes } from '@/data/nav.js';
import { cx } from '@/lib/cx';
import { A } from './A';
import styles from './ClosingCTA.module.css';

const cn = cx(styles);

export default function ClosingCTA() {
  return (
    <section className={cn('ccta')}>
      <div className={cn('ccta-grid')} aria-hidden="true"></div>
      <div className={cn('ccta-glow')} aria-hidden="true"></div>
      <div className={cn('ccta-inner')}>
        <h2>Stop leaving money on the table. <span className="hl">Start engaging your audience today.</span></h2>
        <p>Join over 50 media brands already using our tools to transform passive viewers into active, valuable audience members.</p>
        <div className={cn('ccta-actions')}><A href={routes.bookDemo} className={cn('ccta-btn')}>Take a Tour</A></div>
      </div>
    </section>
  );
}
