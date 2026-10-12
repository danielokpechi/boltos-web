// Shared FAQ: two-column light-mode section. Heading on the left, an accordion
// of questions on the right. Uses native <details>/<summary> so it works
// without JS and stays keyboard-accessible. Used on the home page and the
// Solutions pages.
import { cx } from '@/lib/cx';
import ParticleWave from './ParticleWave';
import styles from './Faq.module.css';

const cn = cx(styles);

export default function Faq({ items, heading = 'Frequently asked questions', id = 'faq' }: {
  items: { q: string; a: string }[]; heading?: string; id?: string;
}) {
  return (
    <section id={id} className={cn('faq2')}>
      <div className={cn('faq2-wave faq2-wave-a')} aria-hidden="true"><ParticleWave running={true} /></div>
      <div className={cn('faq2-wave faq2-wave-b')} aria-hidden="true"><ParticleWave running={true} /></div>
      <div className={cn('faq2-wrap')}>
        <aside className={cn('faq2-aside')}>
          <h2>{heading}</h2>
        </aside>
        <div className={cn('faq2-list')}>
          {items.map((f, i) => (
            <details key={f.q} className={cn('faq2-item')} open={i === 0}>
              <summary className={cn('faq2-q')}>
                <span className={cn('faq2-qt')}>{f.q}</span>
                <span className={cn('faq2-ic')} aria-hidden="true"></span>
              </summary>
              <div className={cn('faq2-a')}><p>{f.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
