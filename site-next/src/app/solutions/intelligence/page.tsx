import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { A } from '@/components/A';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import ParticleWave from '@/components/ParticleWave';
import ClosingCTA from '@/components/ClosingCTA';
import Faq from '@/components/Faq';
import { routes } from '@/data/nav.js';
import styles from './page.module.css';

const cn = cx(styles);

const engines = [
  {
    id: 'iris', name: 'IRIS', desc: 'AI-driven interaction & intelligence', accent: '#35C7DF', theme: 'dark',
    lead: 'Turn your panel into a two-way interaction.',
    copy: 'IRIS is an AI companion that engages with your audience, learns from them and delivers an ever more curated experience, while supplying you with the data to make smarter decisions around your content and advertising.',
    items: ['Answers viewer questions instantly', 'Surfaces contextual stats and content', 'Enables voice or text interaction', 'Generates measurable behavioural signals'],
    logo: '/assets/logo/IRIS_Primary.svg', chipLogo: '/assets/logo/IRIS_Primary.svg',
  },
  {
    id: 'pulse', name: 'PULSE', desc: 'Audience intelligence & activation', accent: '#D62086', theme: 'light',
    lead: 'Understand what resonates, then act on it.',
    copy: 'PULSE brings real-time analytics into a single control panel: engagement metrics, sentiment analysis, demographic breakdown and behaviour patterns as they happen. Optimise content on the fly and make data-driven decisions during the broadcast, not days later.',
    items: ['Real-time engagement metrics', 'Sentiment analysis', 'Demographic breakdown', 'Behaviour patterns', 'Personalisation and automation'],
    logo: '/assets/logo/Pulse_Secondary.png', chipLogo: '/assets/logo/Pulse_Primary.png',
  },
];

const flow = [
  { step: 'Understand', copy: 'Generate first-party audience intelligence.' },
  { step: 'Activate', copy: 'Personalise and automate the experience.' },
  { step: 'Monetise', copy: 'Maximise audience economic value.' },
];

const faqs = [
  ['Do I need technical expertise to use Intelligence?', 'Not at all. Our solutions are designed for media and entertainment teams with busy schedules. You get access to an intuitive and user-friendly control panel, and we provide guidance every step of the way during implementation.'],
  ['What analytics and audience insights do we receive?', 'The reporting available depends on the solution, integration and project requirements. We work with you to determine which audience insights are most relevant to your objectives and set up your dashboard accordingly.'],
  ['How do you handle data privacy and security?', "We're GDPR compliant and use end-to-end encryption. Your data and your audience's data are protected with enterprise-grade security."],
].map(([q, a]) => ({ q, a }));

export const metadata: Metadata = {
  title: "Intelligence, Audience Intelligence & AI, BoltOS",
  description: "BoltOS Intelligence: AI-powered audience intelligence with IRIS and PULSE to understand audiences, generate insights and drive monetisation.",
};

export default function Page() {
  return (
    <>
    <div className={cn('in')}>
      {/* Hero */}
      <header className={cn('in-hero')}>
        <div className={cn('in-hero-glow')} aria-hidden="true"></div>
        <div className={cn('in-hero-wave')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('in-hero-inner')}>
          <img src={asset('/assets/icons/layers/intelligence.png')} alt="" className={cn('in-hero-icon')} />
          <div className={cn('in-eyebrow')}><span className={cn('in-eyebrow-rule')}></span><span className={cn('lilac')}>Intelligence · Audience Intelligence &amp; AI</span></div>
          <h1>Understand every audience. <span className={cn('hl')}>Act on every signal.</span></h1>
          <p className={cn('in-hero-lead')}>AI-powered intelligence to understand audiences, generate insights and drive monetisation.</p>
          <div className={cn('in-hero-engines')}>
            {engines.map((e, __i) => (
              <A key={__i} href={`#${e.id}`} className={cn('in-engine-chip')} style={{ '--accent': e.accent } as CSSProperties}><img src={asset(e.chipLogo)} alt={e.name} className={cn(`in-chip-logo in-chip-logo-${e.id}`)} /><span>{e.desc}</span></A>
            ))}
          </div>
          <div className={cn('in-hero-cta')}>
            <A href={routes.bookDemo} className={cn('btn-snow')}>Take a Tour</A>
            <A href={routes.boltOne} className={cn('in-partof')}>Part of <strong>Bolt One</strong> →</A>
          </div>
        </div>
      </header>

      {engines.map((e, __i) => (
        <section key={__i} id={e.id} className={cn(`in-engine ${e.theme}`)} style={{ '--accent': e.accent } as CSSProperties}>
          <div className={cn('in-engine-inner')}>
            <div className={cn('in-engine-copy')}>
              <h2><img src={asset(e.logo)} alt={e.name} className={cn(`in-engine-logo in-engine-logo-${e.id}`)} /></h2>
              <div className={cn('in-engine-desc')}>{e.desc}</div>
              <p className={cn('in-engine-lead')}>{e.lead}</p>
              <p>{e.copy}</p>
            </div>
            <ul className={cn('in-engine-list')}>
              {e.items.map((i, n) => (
                <li key={n}><span className={cn('in-engine-num')}>{String(n + 1).padStart(2, '0')}</span>{i}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* From data to revenue */}
      <section className={cn('in-flow')}>
        <div className={cn('in-flow-inner')}>
          <div className={cn('in-flow-head')}>
            <h2>From data to revenue</h2>
            <p>Intelligence closes the loop in the BoltOS ecosystem, turning every interaction into insight and every insight into value.</p>
          </div>
          <ol className={cn('in-flow-steps')}>
            {flow.map((f, n) => (
              <li key={n}>
                <span className={cn('in-flow-num')}>{String(n + 1).padStart(2, '0')}</span>
                <h3>{f.step}</h3>
                <p>{f.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq items={faqs} />

      <ClosingCTA />
    </div>
    </>
  );
}
