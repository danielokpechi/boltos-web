import type { Metadata } from 'next';
import { A } from '@/components/A';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import ParticleWave from '@/components/ParticleWave';
import Roadmap from '@/components/Roadmap';
import ClosingCTA from '@/components/ClosingCTA';
import Faq from '@/components/Faq';
import LogoSlot from '@/components/LogoSlot';
import { routes, external } from '@/data/nav.js';
import styles from './page.module.css';

const cn = cx(styles);

// src is the official horizontal logo (own aspect ratio); null → placeholder
// until the partner's file is supplied. Bolt+ uses our own delivered SVG.
const partners = [
  { name: 'Hisense', src: null },
  { name: 'Bloomberg', src: null },
  { name: 'OneFootball', src: null },
  { name: 'Dubai 24H Series', src: null },
  { name: 'Bolt+', src: null },
  { name: 'VIDAA', src: null },
  { name: 'Olympusat', src: null },
  { name: 'TheSoul Publishing', src: null },
];

const products = [
  {
    name: 'Bolt+', logo: '/assets/logo/BoltPlus_Primary_RGB.svg', tag: 'BoltOS-operated', kind: 'Interactive Distribution Platform', variant: 'plus',
    copy: 'BoltOS-operated platform for globally accessible content distribution, interactive audience experiences and monetisation.',
    points: ['Streaming & content delivery', 'Content availability across screens', 'Interactive audience experience', 'Advertising monetisation', 'Audience intelligence'],
    cta: { href: external.boltplus, label: 'Visit boltplus.tv ↗', external: true },
  },
  {
    name: 'Bolt One', logo: '/assets/logo/BoltOne_Primary.png', tag: 'Customer-operated', kind: 'Enterprise Audience Platform', variant: 'one',
    copy: "Technology platform deployed in customers' own digital environments to build, engage, understand and monetise audiences.",
    points: ['Core: digital experience infrastructure', 'Connect: audience engagement & monetisation', 'Intelligence: audience intelligence & AI'],
    cta: { href: routes.boltOne, label: 'Explore Bolt One →' },
  },
];

const ecosystem = [
  { step: 'Distribute', copy: 'Make content globally accessible', icon: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>' },
  { step: 'Engage', copy: 'Create meaningful interactions', icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
  { step: 'Understand', copy: 'Generate first-party audience intelligence', icon: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>' },
  { step: 'Activate', copy: 'Personalise and automate', icon: '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>' },
  { step: 'Monetise', copy: 'Maximise audience economic value', icon: '<circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/>' },
];

const modules = [
  { num: '01', name: 'Chat', copy: 'Real-time conversations, quizzes and ad banners, keep viewers glued to their screens for 3x longer. When audiences interact, they stay engaged.' },
  { num: '02', name: 'Commerce', copy: 'Take advantage of personalized shopping integration. Host your merch store at the heart of where your community is engaging, bumping up your conversion numbers.' },
  { num: '03', name: 'Read', copy: 'For brands with premium reading material, why not organize your thought pieces to complement your content? Increasing click-throughs and ensuring your audience is interacting with your wider ecosystem.' },
  { num: '04', name: 'Rewards', copy: "Host giveaways, competitions or sponsored campaigns in the panel itself. Don't just make it a social experience, make it an event. Use this module for building retention and for giving back to your community." },
];

const intelligenceModules = [
  { num: 'IRIS', logo: '/assets/logo/IRIS_Secondary.svg', name: 'AI-driven interaction & intelligence', href: `${routes.intelligence}#iris`, copy: 'Turn your panel into a two-way interaction. Our AI companion is there to engage with your audience, learn from them and deliver an even more curated panel experience. All while supplying you with the data to make smarter decisions around your content and advertising.' },
  { num: 'PULSE', logo: '/assets/logo/Pulse_Secondary.png', name: 'Audience intelligence & activation', href: `${routes.intelligence}#pulse`, copy: 'Real-time analytics showing engagement metrics, sentiment analysis, demographic breakdown, and behavior patterns as they happen. Understand what resonates, optimize content on the fly, and make data-driven decisions during the broadcast, not days later.' },
];

const stats = [
  { value: '3×', label: 'Longer watch time', color: '#F7F7F5' },
  { value: '1M+', label: 'Interactions served', color: '#C6ABF5' },
  { value: '800+', label: 'Media brands', color: '#35C7DF' },
];

const pillars = [
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>', title: 'Seamless Integration', copy: 'Mounted on the player you already own, or run it your way. BoltOS-operated on Bolt+, or customer-operated on Bolt One.' },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>', title: 'Increase Audience Value', copy: 'Maximise engagement, data and monetisation potential.' },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>', title: 'Scalable & Secure', copy: 'Enterprise-grade infrastructure built for scale.' },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>', title: 'Future-Ready', copy: 'AI-powered intelligence layer driving continuous improvement.' },
];

const cases = [
  { name: 'Hisense', tag: 'Smart TV', quote: 'We view our partnership with BoltOS as strategic and valuable for building and maintaining viewer loyalty.', person: 'Jerry Liu · VP, Hisense International', stat: '14M TVs · 80 countries' },
  { name: 'VIDAA', tag: 'TV OS', quote: "A powerful example of social TV, enabling real interaction on live and VOD content. They're set for great success.", person: 'Guy Edri · CEO, VIDAA International', stat: "World's leading TV OS" },
  { name: '24H Series', tag: 'Motorsport', quote: 'Interactive features, moderated feeds and car POV feeds, the highlight of the entire Hankook Endurance Season.', person: 'Erik Naeser · Sports Advantage', stat: '150K interactions' },
];

const faqs = [
  ['Do I need technical expertise to use BoltOS products?', 'Not at all. Our products are designed for media teams, not developers. The control panel designed to manage them is also intuitive, and we provide guidance and workshops to educate your teams on best practices.'],
  ['How long does setup take?', 'Setup once the brief is finalized can take anywhere from two to four weeks, depending on our workload at the time. However, we always endeavor to deliver in the shortest time frame possible while not compromising on quality.'],
  ["What if my broadcasting platform isn't listed in your integrations?", "We add new integrations regularly based on customer demand. If your platform isn't currently supported, contact our team. We can often create custom integrations or use other means of connection."],
  ['Can viewers access interactive features on mobile devices?', 'Yes. All our interactive features are fully optimized for mobile, tablet, and desktop. Your audience can participate regardless of device.'],
  ['How many concurrent viewers can your system handle?', "Our infrastructure auto-scales to handle unlimited concurrent users. We've successfully supported broadcasts with 250,000+ simultaneous viewers without performance degradation."],
  ['Can I customize the look and feel to match my brand?', 'Absolutely. You have complete control over colors, fonts, layouts, and branding. We offer templates for quick setup, or you can create fully custom designs. Enterprise plans include white-label options with custom domains.'],
  ['How do you handle data privacy and security?', "We're GDPR compliant and use end-to-end encryption. Your data and your audience's data are protected with enterprise-grade security."],
].map(([q, a], i) => ({ q, a, num: String(i + 1).padStart(2, '0') }));

export const metadata: Metadata = {
  title: "BoltOS, Media Technology Group",
  description: "BoltOS builds the technology that enables media companies to distribute content, engage, understand and monetise digital audiences.",
};

export default function Page() {
  return (
    <>
    <div className={cn('hp')}>
      {/* 01 HERO */}
      <header className={cn('hero')}>
        <div className={cn('hero-grid')} aria-hidden="true"></div>
        <div className={cn('hero-glow')} aria-hidden="true"></div>
        <div className={cn('hero-top')}>
          <div className={cn('hero-badge')}><span className={cn('hero-badge-emoji')} aria-hidden="true">🚀</span>New: AI-Powered Analytics</div>
          <h1 className={cn('hero-h1')}>The Enterprise Operating Infrastructure for<br /> <span className={cn('hl')}>Engagement-Driven Media</span></h1>
          <p className={cn('hero-sub')}>Building the technology that enables media companies to distribute content, engage, understand and monetise digital audiences.</p>
          <div className={cn('hero-cta')}><A href={routes.bookDemo} className={cn('btn-snow')}>Take a Tour</A></div>
        </div>
        <div className={cn('hero-player-wrap')}>
          <div className={cn('hero-grid-v')} aria-hidden="true"></div>
          <div className={cn('hero-wave')} aria-hidden="true"><ParticleWave /></div>
          <div className={cn('hero-player')}>
            <div className={cn('hero-video')}>
              <A href="https://youtu.be/AByOQDvWeIE" target="_blank" rel="noopener noreferrer" className={cn('hero-video-fallback')}>
                <img src={asset('/assets/photos/broadcast-still.web.jpg')} alt="BoltOS platform video" className={cn('hero-video-poster')} />
                <span className={cn('hero-video-scrim')}></span>
                <span className={cn('hero-video-btn')}>▶ Watch the platform video</span>
              </A>
              <iframe
                src="https://www.youtube-nocookie.com/embed/AByOQDvWeIE?rel=0&amp;modestbranding=1&amp;playsinline=1&amp;autoplay=1&amp;mute=1"
                title="BoltOS platform video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className={cn('hero-video-frame')}
              ></iframe>
            </div>
            <div className={cn('hero-player-foot')}>
              <div>Panel mounted on your player</div>
              <div className={cn('mono')}>latency 84ms</div>
            </div>
          </div>
        </div>
      </header>

      {/* 02 TRUSTED BY */}
      <div className={cn('trusted')}>
        <div className={cn('trusted-track')}>
          {[...partners, ...partners].map((p, __i) => (
            <span key={__i} className={cn('trusted-item')}><LogoSlot name={p.name} src={p.src} h={30} /></span>
          ))}
        </div>
      </div>

      {/* 03 PRODUCTS */}
      <section id="products" className={cn('models')}>
        <div className={cn('models-head')}>
          <div className={cn('models-eyebrow')}>Our products</div>
          <h2>Two complementary models. <span className={cn('hl')}>One mission.</span></h2>
          <p>Build stronger audiences. Drive deeper engagement. Deliver greater returns.</p>
        </div>
        <div className={cn('models-grid')}>
          {products.map((p, __i) => (
            <article key={__i} className={cn(`model model-${p.variant}`)}>
              <div className={cn('model-tag')}>{p.tag}</div>
              <h3>{p.logo ? <img src={asset(p.logo)} alt={p.name} className={cn('model-logo')} /> : p.name}</h3>
              <div className={cn('model-kind')}>{p.kind}</div>
              <p>{p.copy}</p>
              <ul>{p.points.map((pt, __i) => <li key={__i}>{pt}</li>)}</ul>
              <A href={p.cta.href} className={cn('model-cta')} {...(p.cta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{p.cta.label}</A>
            </article>
          ))}
        </div>
      </section>

      {/* 04 ONE ECOSYSTEM */}
      <section id="ecosystem" className={cn('eco')}>
        <div className={cn('eco-head')}>
          <div className={cn('eco-eyebrow')}>One ecosystem</div>
          <h2>From first view to lasting value</h2>
        </div>
        <ol className={cn('eco-steps')}>
          {ecosystem.map((e, __i) => (
            <li key={__i} className={cn('eco-step')}>
              <span className={cn('eco-icon')}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: e.icon }} /></span>
              <h3>{e.step}</h3>
              <p>{e.copy}</p>
            </li>
          ))}
        </ol>
        <div className={cn('eco-foot')}>Shared technology · Data · AI · Monetisation capabilities</div>
      </section>

      {/* 05 CONNECT */}
      <section id="suite" className={cn('suite')}>
        <div className={cn('suite-grid')} aria-hidden="true"></div>
        <div className={cn('suite-glow')} aria-hidden="true"></div>
        <div className={cn('suite-head')}>
          <img src={asset('/assets/icons/layers/engage.png')} alt="" className={cn('suite-icon')} />
          <div className={cn('suite-eyebrow')}>Solutions · Engage</div>
          <h2 className={cn('suite-h2')}>Connect</h2>
          <p className={cn('suite-sub')}>Interactive features and monetisation tools that turn passive viewers into active, loyal and valuable audiences.</p>
          <A href={routes.connect} className={cn('suite-link')}>Explore Connect →</A>
        </div>
        <div className={cn('suite-modules')}>
          {modules.map((m, __i) => (
            <div key={__i} className={cn('module')}>
              <div className={cn('module-num')}>{m.num}</div>
              <h3>{m.name}</h3>
              <p>{m.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 06 INTELLIGENCE */}
      <section id="intelligence" className={cn('suite')}>
        <div className={cn('suite-grid')} aria-hidden="true"></div>
        <div className={cn('suite-glow')} aria-hidden="true"></div>
        <div className={cn('suite-head')}>
          <img src={asset('/assets/icons/layers/intelligence.png')} alt="" className={cn('suite-icon')} />
          <div className={cn('suite-eyebrow')}>Solutions · Audience Intelligence &amp; AI</div>
          <h2 className={cn('suite-h2')}>Intelligence</h2>
          <p className={cn('suite-sub')}>AI-powered intelligence to understand audiences, generate insights and drive monetisation.</p>
          <A href={routes.intelligence} className={cn('suite-link')}>Explore Intelligence →</A>
        </div>
        <div className={cn('suite-modules')}>
          {intelligenceModules.map((m, __i) => (
            <A key={__i} href={m.href} className={cn('module module-link')}>
              <img src={asset(m.logo)} alt={m.num} className={cn(`module-logo module-logo-${m.num.toLowerCase()}`)} />
              <h3>{m.name}</h3>
              <p>{m.copy}</p>
            </A>
          ))}
        </div>
      </section>

      {/* 04 STATS */}
      <section className={cn('stats')}>
        <div className={cn('stats-glow')} aria-hidden="true"></div>
        <div className={cn('stats-wave')} aria-hidden="true"><ParticleWave running={true} /></div>
        <div className={cn('stats-head')}>
          <h2>Real tools. Real results.</h2>
          <p>In a crowded world of tech, BoltOS has exceeded expectations time and time again</p>
        </div>
        <div className={cn('stats-row')}>
          {stats.map((s, __i) => (
            <div key={__i} className={cn('stat')}>
              <div className={cn('stat-value')} style={{ color: s.color }}>{s.value}</div>
              <div className={cn('stat-label')}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 05 WHY BOLTOS */}
      <section id="why" className={cn('why')}>
        <div className={cn('why-grid')} aria-hidden="true"></div>
        <div className={cn('why-head')}>
          <div className={cn('why-eyebrow')}><span className={cn('dot dot-uv')}></span>Why BoltOS</div>
          <h2>Why modern digital platforms need BoltOS</h2>
          <p>Most content keeps audiences passive. They watch, but they never participate, never buy, never truly engage. Every broadcast without interaction is money left on the table.</p>
        </div>
        <div className={cn('why-pillars')}>
          {pillars.map((p, __i) => (
            <div key={__i} className={cn('pillar')}>
              <span className={cn('pillar-icon')} dangerouslySetInnerHTML={{ __html: p.icon }} />
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 06 ROADMAP */}
      <Roadmap />

      {/* 07 TESTIMONIALS */}
      <section id="partners" className={cn('tst')}>
        <div className={cn('tst-glow')} aria-hidden="true"></div>
        <div className={cn('tst-head')}>
          <h2>In their own words</h2>
          <p>Broadcasters, TV platforms and rights holders running live audiences on BoltOS.</p>
        </div>
        <div className={cn('tst-marquee')}>
          <div className={cn('tst-track')}>
            {[...cases, ...cases].map((c, __i) => (
              <div key={__i} className={cn('tst-card')}>
                <div className={cn('tst-card-head')}>
                  <LogoSlot name={c.name} h={26} />
                  <span className={cn('tst-tag')}>{c.tag}</span>
                </div>
                <p className={cn('tst-quote')}>“{c.quote}”</p>
                <div className={cn('tst-card-foot')}>
                  <span>{c.person}</span><span className={cn('tst-stat')}>{c.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 FAQ */}
      <Faq items={faqs} />

      {/* 09 CLOSING CTA (standardized) */}
      <ClosingCTA />
    </div>
    </>
  );
}
