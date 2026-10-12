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

const heroPoints = ['No streaming dependency', 'No fragmented digital stack', 'You own the relationship from login to transaction'];

const disconnected = [
  { text: 'Streaming on one platform', accent: '#7B2FE2' },
  { text: 'Social engagement on another', accent: '#D62086' },
  { text: 'Commerce elsewhere', accent: '#35C7DF' },
  { text: 'Data scattered across systems', accent: '#101014' },
].map((d, i) => ({ ...d, num: '0' + (i + 1) }));

const costs = ['Revenue', 'Data ownership', 'Sponsor leverage', 'Long-term brand equity'];

const stack = [
  { text: 'Streaming and distribution', layer: 'Delivery', fill: '88%' },
  { text: 'Identity and access layer', layer: 'Accounts', fill: '72%' },
  { text: 'Built-in Connect', layer: 'Engagement', fill: '60%' },
  { text: 'Commerce enablement', layer: 'Revenue', fill: '46%' },
  { text: 'Analytics dashboard', layer: 'Intelligence', fill: '32%' },
].map((s, i) => ({ ...s, num: '0' + (i + 1) }));

const outcomes = [
  { num: '01', numColor: '#7B2FE2', title: 'Revenue Expansion',
    items: ['Interactive advertising', 'Premium sponsor packages', 'Shoppable content'] },
  { num: '02', numColor: '#D62086', title: 'Data Consolidation',
    items: ['Centralised behavioural tracking', 'Cross-session user intelligence', 'CRM-ready engagement signals'] },
  { num: '03', numColor: '#35C7DF', title: 'Brand Equity Protection',
    items: ['No algorithm dependency', 'No platform risk exposure', 'No content dilution'] },
];

const layers = [
  {
    name: 'Core', desc: 'Digital Experience Infrastructure', accent: '#35C7DF',
    copy: 'The foundation for branded digital experiences. Flexible, secure and scalable infrastructure.',
    items: ['White-label / branded platforms', 'Web & app experiences', 'Streaming infrastructure', 'Content management', 'Configuration & APIs'],
    icon: '/assets/icons/layers/core.png',
  },
  {
    name: 'Connect', eyebrow: 'Engage', desc: 'Audience Engagement & Monetisation', accent: '#D62086', href: routes.connect,
    copy: 'Interactive features and monetisation tools that turn passive viewers into active, loyal and valuable audiences.',
    items: ['Read', 'Chat', 'Rewards', 'Commerce'],
    icon: '/assets/icons/layers/engage.png',
  },
  {
    name: 'Intelligence', desc: 'Audience Intelligence & AI', accent: '#7B2FE2', href: routes.intelligence,
    copy: 'AI-powered intelligence to understand audiences, generate insights and drive monetisation.',
    items: ['IRIS: AI-driven interaction & intelligence', 'PULSE: Audience intelligence & activation'],
    icon: '/assets/icons/layers/intelligence.png',
  },
];

const audience = [
  'Do not want to rely on public streaming and social media platforms',
  'Want a controlled digital ecosystem',
  'Are launching or relaunching a D2C strategy',
].map((text, i) => ({ num: '0' + (i + 1), text }));

const faqs = [
  ['Do I need technical expertise to use Bolt One?', 'Not at all. Bolt One is designed to make your life easier. You get access to an intuitive and user-friendly control panel, and we provide guidance every step of the way during implementation and recommendation on the best practices as you start your journey with us.'],
  ["What if my broadcasting platform isn't listed in your integrations?", "We add new integrations regularly. If your platform isn't currently supported, contact our team, we can create custom integrations or use other means of connection."],
  ['Can audiences access Bolt One on mobile devices?', 'Yes! Bolt One is fully optimised for mobile, tablet, and desktop. Your audience can connect and participate regardless of device.'],
  ['How does BoltOS handle large live audiences?', 'Bolt One automatically scales to support unlimited concurrent users during live broadcasts. We have successfully supported events with more than 250,000 simultaneous viewers without any loss of performance, while continuous monitoring helps maintain stability as audience demand changes.'],
  ['Can I customise the look and feel of Bolt One to match my brand?', 'Absolutely. You have full control over the colours, fonts, layouts, and branding. We offer templates for quick setup, or you can create fully bespoke designs.'],
  ['What happens if something breaks during a live broadcast?', 'We provide 24/7 support for critical and high priority issues, including weekends and public holidays. If you experience a critical failure during a live broadcast, our team responds within 5 minutes and aims to resolve the issue within one hour. We take your reputation as seriously as you do.'],
  ['How do you handle data privacy and security?', "We're GDPR compliant and use end-to-end encryption. Your data and your audience's data are protected with enterprise-grade security."],
].map(([q, a]) => ({ q, a }));

const POSTER = '/assets/photos/broadcast-still.web.jpg';
const chat = [
  { name: 'James', text: 'Who’s scoring tonight?', time: '01:00', accent: false },
  { name: 'Olivia', text: 'After that weird penalty last match, anything can happen', time: '01:01', accent: true },
  { name: 'Elijah', text: 'I’ve got a feeling it’s going to be a good night', time: '01:01', accent: false },
  { name: 'Mitch', text: 'Tonight’s the night! Who’s ready?', time: '01:02', accent: false },
];

export const metadata: Metadata = {
  title: "Bolt One, Enterprise Audience Platform, BoltOS",
  description: "Bolt One is the BoltOS enterprise audience platform, deployed in your own digital environments to build, engage, understand and monetise audiences.",
};

export default function Page() {
  return (
    <>
    <div className={cn('cb')}>
      {/* Hero */}
      <header className={cn('cb-hero')}>
        <div className={cn('cb-hero-glow')} aria-hidden="true"></div>
        <div className={cn('cb-hero-wave')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('cb-hero-inner')}>
          <div className={cn('cb-hero-copy')}>
            <img src={asset('/assets/logo/BoltOne_Primary.png')} alt="Bolt One" className={cn('cb-hero-logo')} />
            <div className={cn('cb-eyebrow')}><span className={cn('cb-eyebrow-rule')}></span><span className={cn('lilac')}>Enterprise Audience Platform</span></div>
            <h1>Own the distribution. Own the monetisation. <span className={cn('hl')}>Own the data.</span></h1>
            <p className={cn('cb-hero-lead')}>Stop distributing your audience. Start owning the relationship</p>
            <p className={cn('cb-hero-sub')}>Bolt One is a technology platform deployed in your own digital environments to build, engage, understand and monetise audiences, centralising content, community and commerce inside one controlled ecosystem.</p>
            <div className={cn('cb-hero-points')}>{heroPoints.map((h, __i) => <span key={__i} className={cn('cb-pill')}>{h}</span>)}</div>
            <div className={cn('cb-hero-cta')}><A href={routes.bookDemo} className={cn('btn-snow')}>Talk to Our Team</A></div>
          </div>
          <div className={cn('cb-mockwrap')}>
            <span className={cn('cb-mock-glow')} aria-hidden="true"></span>
            <div className={cn('cb-mock')}>
              <div className={cn('cb-mock-grid')}>
                <div className={cn('cb-mock-video')}>
                  <img src={asset(POSTER)} alt="Player still" />
                  <span className={cn('cb-mock-video-scrim')}></span>
                  <span className={cn('cb-mock-live')}>● LIVE</span>
                  <span className={cn('cb-mock-play-ring')}></span>
                  <span className={cn('cb-mock-play-tri')}></span>
                  <div className={cn('cb-mock-video-foot')}>
                    <span className={cn('cb-mock-name')}>Football TV</span>
                    <span className={cn('cb-mock-age')}>14+</span>
                  </div>
                </div>
                <div className={cn('cb-mock-panel')}>
                  <div className={cn('cb-mock-tabs')}>
                    <span className={cn('cb-tab active')}>Chat</span><span className={cn('cb-tab')}>Shop</span><span className={cn('cb-tab')}>Read</span><span className={cn('cb-tab')}>Rewards</span>
                  </div>
                  <div className={cn('cb-mock-msgs')}>
                    {chat.map((m, __i) => (
                      <div key={__i} className={cn(`cb-msg ${m.accent ? 'accent' : ''}`)}>
                        <span className={cn('cb-msg-av')}></span>
                        <span className={cn('cb-msg-text')}><strong>{m.name}</strong> {m.text}</span>
                        <span className={cn('cb-msg-time')}>{m.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className={cn('cb-mock-input')}><span>Say something…</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Disconnected systems */}
      <section className={cn('cb-disc')}>
        <div className={cn('cb-wave cb-wave-a')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('cb-wave cb-wave-b')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('cb-disc-inner')}>
          <h2 className={cn('cb-disc-title')}>Today, Most IP owners operate across disconnected systems:</h2>
          <div className={cn('cb-hub')}>
            <div className={cn('cb-hub-node')}><span className={cn('cb-hub-glow')} aria-hidden="true"></span><span>Most IP owners</span></div>
            <div className={cn('cb-rail')} aria-hidden="true">
              <span className={cn('cb-rail-v-top')}></span>
              <span className={cn('cb-rail-h')}></span>
              <span className={cn('cb-rail-v')} style={{ left: "12.5%" }}></span>
              <span className={cn('cb-rail-v')} style={{ left: "37.5%" }}></span>
              <span className={cn('cb-rail-v')} style={{ left: "62.5%" }}></span>
              <span className={cn('cb-rail-v')} style={{ left: "87.5%" }}></span>
            </div>
            <div className={cn('cb-spokes')}>
              {disconnected.map((d, __i) => (
                <div key={__i} className={cn('cb-spoke')}>
                  <span className={cn('cb-spoke-bar')} style={{ background: d.accent }}></span>
                  <span className={cn('cb-spoke-num')}>{d.num}</span>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={cn('cb-costs-row')}>
            <p className={cn('cb-costs-lead')}>That fragmentation costs more than convenience. It costs:</p>
            <div className={cn('cb-costs')}>{costs.map((c, __i) => <span key={__i} className={cn('cb-cost')}>{c}</span>)}</div>
          </div>
          <p className={cn('cb-disc-close')}>Bolt One eliminates that fragmentation by bringing everything into a single owned environment.</p>
        </div>
      </section>

      {/* What It Is */}
      <section className={cn('cb-what')}>
        <div className={cn('cb-what-glow')} aria-hidden="true"></div>
        <div className={cn('cb-wave cb-wave-c')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('cb-what-inner')}>
          <div className={cn('cb-what-head')}>
            <h2>What It Is</h2>
            <p>A white-label direct-to-consumer infrastructure includes:</p>
          </div>
          <div className={cn('cb-stack')}>
            <div className={cn('cb-stack-head')}>
              <span className={cn('cb-stack-head-l')}>One owned environment</span>
              <span className={cn('cb-stack-head-r')}>yourbrand.com</span>
            </div>
            <div className={cn('cb-stack-rows')}>
              {stack.map((s, __i) => (
                <div key={__i} className={cn('cb-stack-row')}>
                  <span className={cn('cb-stack-fill')} style={{ width: s.fill }}></span>
                  <span className={cn('cb-stack-num')}>{s.num}</span>
                  <p>{s.text}</p>
                  <span className={cn('cb-stack-layer')}>{s.layer}</span>
                </div>
              ))}
            </div>
            <div className={cn('cb-stack-foot')}>
              <span className={cn('cb-stack-foot-rule')}></span>
              <span className={cn('cb-stack-foot-label')}>first-party data, end to end</span>
            </div>
          </div>
          <p className={cn('cb-what-close')}>The Engagement is Native, you own the relationship.</p>
        </div>
      </section>

      {/* Three layers */}
      <section className={cn('cb-layers')} id="layers">
        <div className={cn('cb-layers-inner')}>
          <div className={cn('cb-layers-head')}>
            <div className={cn('cb-eyebrow')}><span className={cn('cb-eyebrow-rule')}></span><span className={cn('uv')}>How Bolt One is built</span></div>
            <h2>Three layers, one platform</h2>
            <p>Every Bolt One deployment runs on Core, with Connect and Intelligence layered on top to engage, understand and monetise your audience.</p>
          </div>
          <div className={cn('cb-layers-grid')}>
            {layers.map((l, __i) => (
              <article key={__i} className={cn('cb-layer')} style={{ '--accent': l.accent } as CSSProperties}>
                <img src={asset(l.icon)} alt="" className={cn('cb-layer-icon')} />
                <div className={cn('cb-layer-titles')}>
                  <h3>{l.name}{l.eyebrow && <span className={cn('cb-layer-alias')}> ({l.eyebrow})</span>}</h3>
                  <div className={cn('cb-layer-desc')}>{l.desc}</div>
                </div>
                <p>{l.copy}</p>
                <ul>{l.items.map((i, __i) => <li key={__i}>{i}</li>)}</ul>
                {l.href && <A href={l.href} className={cn('cb-layer-link')}>Explore {l.name} →</A>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className={cn('cb-outcomes')}>
        <div className={cn('cb-wave cb-wave-d')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('cb-outcomes-inner')}>
          <div className={cn('cb-outcomes-head')}>
            <h2>Outcomes</h2>
            <p>Your audience engages inside your controlled environment.</p>
          </div>
          <div className={cn('cb-outcomes-grid')}>
            {outcomes.map((o, __i) => (
              <div key={__i} className={cn('cb-outcome-card')}>
                <span className={cn('cb-outcome-num')} style={{ color: o.numColor }}>{o.num}</span>
                <h3>{o.title}</h3>
                <div className={cn('cb-outcome-items')}>
                  {o.items.map((i, __i) => <div key={__i} className={cn('cb-outcome-item')}><span className={cn('cb-bullet')}></span><span>{i}</span></div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className={cn('cb-who')}>
        <div className={cn('cb-wave cb-wave-e')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('cb-who-inner')}>
          <div className={cn('cb-who-head')}>
            <h2>Who Is It For</h2>
            <p>Bolt One is ideal for those who:</p>
          </div>
          <div className={cn('cb-who-list')}>
            {audience.map((a, __i) => (
              <div key={__i} className={cn('cb-who-row')}><span className={cn('cb-who-num')}>{a.num}</span><p>{a.text}</p></div>
            ))}
            <div className={cn('cb-who-rule')}></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Faq items={faqs} />

      <ClosingCTA />
    </div>
    </>
  );
}
