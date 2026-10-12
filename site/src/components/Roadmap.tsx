// Roadmap: serpentine gradient rail with icon nodes on desktop, vertical list
// below 1120px (CSS-only switch, no hydration flash). Shared by / and /solutions/.
import { steps } from '@/data/steps.js';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import styles from './Roadmap.module.css';

const cn = cx(styles);

type Step = (typeof steps)[number];

function Card({ s }: { s: Step }) {
  return (
    <div className={cn('road-card')}>
      <div className={cn('road-card-icon')}><img src={asset(s.icon)} alt="" /></div>
      <div className={cn('road-step')}>STEP {s.num}</div>
      <h3>{s.title}</h3>
      <p>{s.copy}</p>
    </div>
  );
}

export default function Roadmap() {
  return (
    <section id="roadmap" className={cn('road')}>
      <div className={cn('road-glow')} aria-hidden="true"></div>
      <div className={cn('road-head')}>
        <span className={cn('road-eyebrow')}>The process</span>
        <h2>Your roadmap <span className={cn('uv')}>to success.</span></h2>
        <p>Five steps from first call to live broadcast, in two to four weeks.</p>
      </div>

      {/* Wide: serpentine gradient rail */}
      <div className={cn('road-wide')}>
        <div className={cn('road-grid')}>
          <svg viewBox="0 0 1000 96" preserveAspectRatio="none" className={cn('road-rail')} aria-hidden="true">
            <defs>
              <linearGradient id="railGrad" gradientUnits="userSpaceOnUse" x1="0" y1="48" x2="1000" y2="48">
                <stop offset="0%" stopColor="#7B2FE2"></stop>
                <stop offset="45%" stopColor="#D62086"></stop>
                <stop offset="100%" stopColor="#35C7DF"></stop>
              </linearGradient>
            </defs>
            <path d="M0 48 H1000" fill="none" stroke="url(#railGrad)" strokeWidth="3" strokeLinecap="round"></path>
          </svg>
          {steps.map((s, i) => (
            <div key={'n' + s.num} className={cn('road-node')} style={{ gridColumn: i + 1, gridRow: 2 }}>
              <div className={cn('road-dot')}>{s.num}</div>
            </div>
          ))}
          {steps.map((s, i) => (
            <div key={'t' + s.num} className={cn('road-cell road-cell-top')} style={{ gridColumn: i + 1 }}>
              {i % 2 === 0 && <Card s={s} />}
            </div>
          ))}
          {steps.map((s, i) => (
            <div key={'b' + s.num} className={cn('road-cell road-cell-bottom')} style={{ gridColumn: i + 1 }}>
              {i % 2 === 1 && <Card s={s} />}
            </div>
          ))}
        </div>
      </div>

      {/* Narrow: vertical list */}
      <div className={cn('road-narrow')}>
        {steps.map((s, i) => (
          <div key={s.num} className={cn('road-row')}>
            <div className={cn('road-rail-col')}>
              <div className={cn('road-dot')}>{s.num}</div>
              {i < steps.length - 1 && <div className={cn('road-rail-line')}></div>}
            </div>
            <div className={cn('road-row-body')}>
              <div className={cn('road-card-icon')}><img src={asset(s.icon)} alt="" /></div>
              <div className={cn('road-step')}>STEP {s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
