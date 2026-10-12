import type { CSSProperties } from 'react';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import ParticleWave from '@/components/ParticleWave';
import ClosingCTA from '@/components/ClosingCTA';
import LogoSlot from '@/components/LogoSlot';
import LazyVideo from '@/components/LazyVideo';
import styles from './CaseStudy.module.css';

const cn = cx(styles);

export interface Study {
  title: string;
  brandmark: string;
  eyebrow: string;
  headline: string;
  headlineMax: string;
  video: string | null;
  plainHero?: boolean;
  intro: string[];
  needLead: string;
  needs: (string | { title: string; copy: string })[];
  objective?: string;
  whyBrandmark: string;
  why: string[];
  quote?: string;
  quoteBy?: string;
  facts?: { label: string; value: string }[];
  solutionTheme: 'light' | 'dark';
  solutionLead?: string;
  solution: { img?: string; alt?: string; bar: string; num: string; title: string; copy: string; imgOrder: number }[];
  beforeAfter?: { before: string[]; after: string[] };
  resultLead: string;
  metrics?: { value: string; label: string }[];
  signalTitle?: string;
  resultNote: string;
  proves?: { lead: string; points: { title: string; copy: string }[]; takeaway: string };
}
const POSTER = '/assets/photos/broadcast-still.web.jpg';

// Data-driven case study page (one per entry in data/caseStudies.js).
export default function CaseStudy({ study }: { study: Study }) {
  const solutionHasImages = study.solution.every((r) => r.img);
  return (
    <>
    <div className={cn('cs')}>
      {study.plainHero ? (
        <header className={cn('cs-hero cs-hero-plain')} aria-hidden="true">
          <div className={cn('cs-hero-plain-glow')}></div>
          <div className={cn('cs-hero-plain-wave')}><ParticleWave /></div>
        </header>
      ) : (
      <header className={cn('cs-hero')}>
        {study.video ? (
          <LazyVideo
            src={asset(study.video)}
            poster={asset(POSTER)}
            videoClassName={cn('cs-hero-video')}
            controlsClassName={cn('cs-hero-controls')}
            buttonClassName={cn('cs-ctrl')}
          />
        ) : (
          <video playsInline preload="none" poster={asset(POSTER)} className={cn('cs-hero-video')}></video>
        )}
        <div className={cn('cs-hero-scrim')} aria-hidden="true"></div>
      </header>
      )}

      {/* Logo / eyebrow / headline */}
      <div className={cn('cs-lede')}>
        <div className={cn('cs-wave cs-wave-tr')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('cs-lede-inner')}>
          <LogoSlot name={study.eyebrow} h={44} />
          <span className={cn('cs-eyebrow')}>{study.eyebrow}</span>
          <h1 className={cn('cs-h1')} style={{ maxWidth: study.headlineMax }}>{study.headline}</h1>
        </div>
      </div>

      {/* Intro */}
      <div className={cn('cs-intro')}>
        <div className={cn('cs-intro-inner')}>
          {study.intro.map((p, __i) => <p key={__i}>{p}</p>)}
        </div>
      </div>

      {/* What they needed */}
      <div className={cn('cs-needed')}>
        <div className={cn('cs-wave cs-wave-bl')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('cs-needed-inner')}>
          <h2 className={cn('cs-h2')}>What they needed</h2>
          <p className={cn('cs-needed-lead')}>{study.needLead}</p>
          <div className={cn('cs-needed-grid')}>
            {study.needs.map((n, i) => (
              <div key={i} className={cn('cs-need-card')}>
                <span className={cn('cs-need-num')}>{String(i + 1).padStart(2, '0')}</span>
                {typeof n === 'string'
                  ? <p>{n}</p>
                  : <><p>{n.title}</p><span className={cn('cs-need-copy')}>{n.copy}</span></>}
              </div>
            ))}
          </div>
          {study.objective && (
            <p className={cn('cs-objective')}><span>The objective</span>{study.objective}</p>
          )}
        </div>
      </div>

      {/* Why BoltOS */}
      <div className={cn('cs-why')}>
        <div className={cn('cs-wave cs-wave-tr2')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('cs-why-inner')}>
          <div className={cn('cs-why-copy')}>
            <div className={cn('cs-why-logos')}>
              <img src={asset('/assets/logo/BoltOS_Secondary_RGB.svg')} alt="BoltOS" className={cn('cs-why-bolt')} />
              <span className={cn('cs-why-pair')}>
                <span className={cn('cs-why-x')}>&times;</span>
                <LogoSlot name={study.eyebrow} h={30} onLight />
              </span>
            </div>
            <h2 className={cn('cs-h2 ink')}>Why BoltOS?</h2>
            {study.why.map((p, __i) => <p key={__i}>{p}</p>)}
          </div>
          {study.quote ? (
            <figure className={cn('cs-quote')}>
              <span className={cn('cs-quote-rule')}></span>
              <blockquote>{study.quote}</blockquote>
              <figcaption>{study.quoteBy}</figcaption>
            </figure>
          ) : study.facts && (
            <dl className={cn('cs-facts')}>
              {study.facts.map((f, __i) => <div key={__i}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}
            </dl>
          )}
        </div>
      </div>

      {/* The BoltOS Solution */}
      <div className={cn('cs-solution')}>
        <div className={cn('cs-solution-inner')}>
          <div className={cn('cs-solution-head')}>
            <h2 className={cn('cs-h2 ink')}>The BoltOS Solution</h2>
            {study.solutionLead && <p className={cn('cs-solution-lead')}>{study.solutionLead}</p>}
          </div>
          {!solutionHasImages ? (
            <div className={cn('cs-sol-cards')}>
              {study.solution.map((row, __i) => (
                <div key={__i} className={cn(`cs-sol-text ${study.solutionTheme}`)} style={{ '--hover': row.bar } as CSSProperties}>
                  <span className={cn('cs-sol-bar')} style={{ background: row.bar }}></span>
                  <span className={cn('cs-sol-num')} style={{ color: row.bar }}>{row.num}</span>
                  <h3>{row.title}</h3>
                  <p>{row.copy}</p>
                </div>
              ))}
            </div>
          ) : (
          <div className={cn('cs-solution-rows')}>
            {study.solution.map((row, __i) => (
              <div key={__i} className={cn('cs-sol-row')}>
                <div className={cn('cs-sol-media')} style={{ order: row.imgOrder }}>
                  <img src={asset(row.img ?? '')} alt={row.alt} />
                </div>
                <div className={cn(`cs-sol-text ${study.solutionTheme}`)} style={{ order: row.imgOrder === 1 ? 2 : 1, '--hover': row.bar } as CSSProperties}>
                  <span className={cn('cs-sol-bar')} style={{ background: row.bar }}></span>
                  <span className={cn('cs-sol-num')} style={{ color: row.bar }}>{row.num}</span>
                  <h3>{row.title}</h3>
                  <p>{row.copy}</p>
                </div>
              </div>
            ))}
          </div>
          )}
          {study.beforeAfter && (
            <div className={cn('cs-ba')}>
              <div className={cn('cs-ba-col before')}>
                <span className={cn('cs-ba-label')}>Before</span>
                <ol>{study.beforeAfter.before.map((s, __i) => <li key={__i}>{s}</li>)}</ol>
              </div>
              <span className={cn('cs-ba-arrow')} aria-hidden="true">→</span>
              <div className={cn('cs-ba-col after')}>
                <span className={cn('cs-ba-label')}>After</span>
                <ol>{study.beforeAfter.after.map((s, __i) => <li key={__i}>{s}</li>)}</ol>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Result */}
      <div className={cn('cs-result')}>
        <div className={cn('cs-result-glow')} aria-hidden="true"></div>
        <div className={cn('cs-wave cs-wave-bl2')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('cs-result-inner')}>
          <div className={cn('cs-result-head')}>
            <span className={cn('cs-result-rule')}></span>
            <h2 className={cn('cs-result-title')}>Result</h2>
          </div>
          <div className={cn('cs-result-body')}>
            <p className={cn('cs-result-lead')}>{study.resultLead}</p>
            {study.metrics && (
              <dl className={cn('cs-metrics')}>
                {study.metrics.map((m, __i) => (
                  <div key={__i} className={cn('cs-metric')}><dt>{m.label}</dt><dd>{m.value}</dd></div>
                ))}
              </dl>
            )}
            <div className={cn('cs-result-note')}>
              <span className={cn('cs-result-note-rule')}></span>
              <div>
                {study.signalTitle && <p className={cn('cs-signal-title')}><span>The standout signal</span>{study.signalTitle}</p>}
                <p>{study.resultNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {study.proves && (
        <div className={cn('cs-proves')}>
          <div className={cn('cs-proves-inner')}>
            <div className={cn('cs-proves-head')}>
              <h2 className={cn('cs-h2 ink')}>What this proves</h2>
              <p>{study.proves.lead}</p>
            </div>
            <div className={cn('cs-proves-grid')}>
              {study.proves.points.map((p, i) => (
                <div key={i} className={cn('cs-prove')}>
                  <span className={cn('cs-prove-num')}>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.title}</h3>
                  <p>{p.copy}</p>
                </div>
              ))}
            </div>
            <div className={cn('cs-takeaway')}>
              <span className={cn('cs-takeaway-label')}>Strategic takeaway</span>
              <p>{study.proves.takeaway}</p>
            </div>
          </div>
        </div>
      )}

      {/* Closing CTA (standardized) */}
      <ClosingCTA />
    </div>
    </>
  );
}

