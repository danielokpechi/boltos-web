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

const heroPoints = ['No platform migration', 'No disruption', 'Immediate monetisation'];

const consequences = [
  "Engagement shifts to social platforms you don't control",
  'Commerce happens outside your environment',
  'Valuable data never reaches your CRM',
  'Sponsors measure impressions instead of interaction',
].map((text, i) => ({ num: '0' + (i + 1), text }));

const twoWays = [
  { num: '01', text: "Engagement shifts to social platforms you don't control" },
  { num: '02', text: 'Direct integration into your web or app via code embed' },
];

const enables = [
  { num: '01', numColor: '#7B2FE2', title: 'Real-Time Interaction', lead: 'Bring the audience into the action as it unfolds.',
    items: ['Live chat', 'Polls and predictions', 'Quizzes', 'Campaign activations', 'Community conversations'],
    close: 'Engagement happens when emotion peaks; that is the moment that matters most.' },
  { num: '02', numColor: '#D62086', title: 'Commerce Inside the Experience', lead: 'Turn attention into action without driving audiences away from your platform.',
    items: ['Shoppable moments', 'Sponsor-driven product activations', 'Direct links to checkout'],
    close: 'You convert interest while attention is highest.' },
  { num: '03', numColor: '#35C7DF', title: 'AI Stream Companion (IRIS)', lead: 'A real-time assistant to support interactive content.',
    items: ['Answers viewer questions instantly', 'Surfaces contextual stats and content', 'Enables voice or text interaction', 'Generates measurable behavioural signals'],
    close: 'It transforms passive viewing into a two-way experience where every interaction becomes a data point.',
    link: { href: `${routes.intelligence}#iris`, label: 'IRIS is part of Intelligence →' } },
  { num: '04', numColor: '#F7F7F5', title: 'Sponsor-Ready Activation', lead: 'Move beyond passive ad slots into participation.',
    items: ['Interactive sponsor campaigns', 'Engagement-led sponsorship packages', 'Measurable participation and performance metrics'],
    close: 'Shift from CPM to engagement-driven inventory.' },
];

const outcomes = [
  { title: 'Commercial Impact', lead: 'A real-time assistant to support interactive content',
    items: ['Premium interactive sponsor inventory', 'Shoppable content and campaigns', 'First-party data monetisation'] },
  { title: 'Behavioral Intelligence', lead: 'Understand how fans interact in real time and over time',
    items: ['Live participation moments', 'Personalised global fan journeys', 'Always-on engagement beyond matchday'] },
  { title: 'Controlled Ecosystem', lead: 'No disruption, fast time-to-value',
    items: ['Plug-in, no rip-and-replace', 'Enhanced community governance', 'Reduced dependency risk on external policies'] },
];

const whyItWorks = ['No app rebuild', 'No broadcast redesign', 'No broadcast redesign', 'Compatible across Web, mobile, CTV, native apps'];

const faqs = [
  ['Do I need technical expertise to use the Connect?', 'Not at all. Our solutions are designed for media and entertainment teams with busy schedules. You get access to an intuitive and user-friendly control panel, and we provide guidance every step of the way during implementation and recommendation on the best practices as you start your journey with us.'],
  ['How long does setup take?', 'Setup typically takes between two to four weeks. Let us know in advance if you have a key date to launch so we can adapt the timeline.'],
  ['What are the types of integrations you offer?', 'We regularly add new integrations. If a platform is not currently supported, contact our team, we can create custom integrations or connect through alternative methods.'],
  ['Where can audiences access the Connect?', 'The Connect can be accessed from anywhere in the world and is fully optimised for mobile, tablet, and desktop.'],
  ['Can I customise the look and feel of the Connect to match my brand?', 'Absolutely. You have full control over the colours, fonts, layouts, and branding. We offer templates for quick setup, or you can create fully bespoke designs.'],
  ['How do you handle data privacy and security?', "We're GDPR compliant and use end-to-end encryption. Your data and your audience's data are protected with enterprise-grade security."],
].map(([q, a]) => ({ q, a }));

const POSTER = '/assets/photos/broadcast-still.web.jpg';

export const metadata: Metadata = {
  title: "Connect, Audience Engagement & Monetisation, BoltOS",
  description: "Connect is the BoltOS engagement layer: interactive features and monetisation tools that turn passive viewers into active, loyal and valuable audiences.",
};

export default function Page() {
  return (
    <>
    <div className={cn('ip')}>
      {/* Hero */}
      <header className={cn('ip-hero')}>
        <div className={cn('ip-hero-glow')} aria-hidden="true"></div>
        <div className={cn('ip-hero-wave')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ip-hero-inner')}>
          <div className={cn('ip-hero-copy')}>
            <img src={asset('/assets/icons/layers/engage.png')} alt="" className={cn('ip-hero-icon')} />
            <div className={cn('ip-eyebrow')}><span className={cn('ip-eyebrow-rule')}></span><span className={cn('lilac')}>Connect · Engage</span></div>
            <h1>A revenue layer for your <span className={cn('hl')}>existing ecosystem</span></h1>
            <p className={cn('ip-hero-lead')}>Turn passive viewers into measurable revenue and actionable audience data.</p>
            <A href={routes.boltOne} className={cn('ip-partof')}>Part of <strong>Bolt One</strong>, our enterprise audience platform →</A>
            <div className={cn('ip-hero-points')}>
              {heroPoints.map((h, __i) => <span key={__i} className={cn('ip-pill')}>{h}</span>)}
            </div>
            <div className={cn('ip-hero-cta')}><A href={routes.bookDemo} className={cn('btn-snow')}>Schedule a Tour</A></div>
          </div>
          <div className={cn('ip-hero-mockwrap')}>
            <div className={cn('ip-mock')}>
              <div className={cn('ip-mock-bar')}>
                <span className={cn('ip-mock-dot')}></span><span className={cn('ip-mock-dot')}></span><span className={cn('ip-mock-dot')}></span>
                <span className={cn('ip-mock-url')}>your player, your domain</span>
              </div>
              <div className={cn('ip-mock-body')}>
                <div className={cn('ip-mock-panel')}>
                  <div className={cn('ip-mock-tabs')}>
                    <span className={cn('ip-tab active')}>Chat</span><span className={cn('ip-tab')}>Shop</span><span className={cn('ip-tab')}>IRIS</span>
                  </div>
                  <div className={cn('ip-msg')}>Poll, who takes the next point?</div>
                  <div className={cn('ip-msg accent')}>68% backed the home side</div>
                  <div className={cn('ip-msg')}>Shop, matchday kit in one tap</div>
                  <div className={cn('ip-mock-watching')}>24,801 watching</div>
                </div>
                <div className={cn('ip-mock-video')}>
                  <img src={asset(POSTER)} alt="Player still" />
                  <span className={cn('ip-mock-video-scrim')}></span>
                  <span className={cn('ip-mock-live')}>● LIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* The Reality */}
      <section className={cn('ip-reality')}>
        <div className={cn('ip-wave ip-wave-a')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ip-wave ip-wave-b')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ip-reality-inner')}>
          <div className={cn('ip-reality-head')}>
            <div className={cn('ip-reality-title')}>
              <div className={cn('ip-eyebrow')}><span className={cn('ip-eyebrow-rule')}></span><span className={cn('uv')}>The Reality</span></div>
              <h2>Audiences don't want to just watch anymore.</h2>
            </div>
            <div className={cn('ip-reality-intro')}>
              <p>They expect to interact, respond, and transact instantly. If they can't do it inside your ecosystem, they do it somewhere else.</p>
              <p className={cn('ip-strong')}>The consequences are simple:</p>
            </div>
          </div>
          <div className={cn('ip-conseq')}>
            {consequences.map((c, __i) => (
              <div key={__i} className={cn('ip-conseq-card')}>
                <span className={cn('ip-conseq-num')}>{c.num}</span>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <p className={cn('ip-reality-close')}>BoltOS Connect brings interaction and the data it generates back under your control.</p>
        </div>
      </section>

      {/* What is the Connect */}
      <section className={cn('ip-what')}>
        <div className={cn('ip-wave ip-wave-c')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ip-wave ip-wave-d')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ip-what-glow')} aria-hidden="true"></div>
        <div className={cn('ip-what-inner')}>
          <div className={cn('ip-what-head')}>
            <h2>What is the Connect?</h2>
            <p>The Connect is a drop-in interactive overlay that transforms any live or on-demand stream or event into an interactive, monetisable experience.</p>
            <p className={cn('ip-strong snow')}>It works in two ways:</p>
          </div>
          <div className={cn('ip-twoways')}>
            {twoWays.map((w, __i) => (
              <div key={__i} className={cn('ip-twoway-card')}>
                <span className={cn('ip-twoway-num')}>{w.num}</span>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
          <p className={cn('ip-what-close')}>Either way, your viewing experience stays intact. The monetisation and intelligence layer activates around it.</p>
        </div>
      </section>

      {/* What it enables */}
      <section className={cn('ip-enables')}>
        <div className={cn('ip-wave ip-wave-e')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ip-wave ip-wave-f')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ip-enables-inner')}>
          <div className={cn('ip-enables-head')}>
            <h2>What it enables</h2>
            <p>With BoltOS Connect, you deploy AI-powered engagement and experiences that turn live moments into measurable revenue.</p>
          </div>
          <div className={cn('ip-enables-rows')}>
            {enables.map((e, __i) => (
              <div key={__i} className={cn('ip-enable-row')}>
                <div className={cn('ip-enable-left')}>
                  <span className={cn('ip-enable-num')} style={{ color: e.numColor }}>{e.num}</span>
                  <h3>{e.title}</h3>
                  <p>{e.lead}</p>
                </div>
                <div className={cn('ip-enable-right')}>
                  {e.items.map((i, __i) => (
                    <div key={__i} className={cn('ip-enable-item')}><span className={cn('ip-bullet')}></span><span>{i}</span></div>
                  ))}
                  <p className={cn('ip-enable-close')}>{e.close}</p>
                  {e.link && <A href={e.link.href} className={cn('ip-enable-link')}>{e.link.label}</A>}
                </div>
              </div>
            ))}
            <div className={cn('ip-enable-rule')}></div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className={cn('ip-outcomes')}>
        <div className={cn('ip-wave ip-wave-g')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ip-wave ip-wave-h')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ip-outcomes-inner')}>
          <div className={cn('ip-outcomes-title')}><span className={cn('ip-eyebrow-rule')}></span><h2>Outcomes</h2></div>
          <div className={cn('ip-outcomes-grid')}>
            {outcomes.map((o, __i) => (
              <div key={__i} className={cn('ip-outcome-card')}>
                <h3>{o.title}</h3>
                <p>{o.lead}</p>
                <div className={cn('ip-outcome-items')}>
                  {o.items.map((i, __i) => (
                    <div key={__i} className={cn('ip-outcome-item')}><span className={cn('ip-bullet')}></span><span>{i}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className={cn('ip-why')}>
        <div className={cn('ip-wave ip-wave-i')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ip-why-glow')} aria-hidden="true"></div>
        <div className={cn('ip-why-inner')}>
          <div className={cn('ip-why-copy')}>
            <h2>Why it works</h2>
            <p className={cn('ip-why-statement')}>It adds capability and doesn't require transformation.</p>
          </div>
          <div className={cn('ip-why-grid')}>
            {whyItWorks.map((w, __i) => <div key={__i} className={cn('ip-why-tag')}>{w}</div>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq items={faqs} />

      {/* Closing CTA (standardized) */}
      <ClosingCTA />
    </div>
    </>
  );
}
