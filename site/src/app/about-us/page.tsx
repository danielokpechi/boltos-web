import type { Metadata } from 'next';
import { A } from '@/components/A';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import FoldCard from './FoldCard';
import Globe from './Globe';
import Voices from './Voices';
import ParticleWave from '@/components/ParticleWave';
import ClosingCTA from '@/components/ClosingCTA';
import LogoSlot from '@/components/LogoSlot';
import styles from './page.module.css';

const cn = cx(styles);

const challenge = [
  { num: '01', numColor: '#7B2FE2', title: 'Hypercompetitive Landscape.', copy: "Media brands are in a tough spot, user churn is up, the old revenue models are broken, and technology is often more barrier than booster. BoltOS has been experimenting and building since 2017 with the objective of solving these challenges. Here's what we did:" },
  { num: '02', numColor: '#D62086', title: 'The World of Content Is Changing', copy: "And BoltOS is ready for it. We bring together years of pioneering innovation combined with a culture of technical excellence and experimentation. Our passion is taking an over-the-horizon view at what's next in media, content, and entertainment, then finding ways to shape that future." },
  { num: '03', numColor: '#101014', title: 'Experiential Media For TV', copy: "In today's crowded content landscape, it's harder than ever to keep viewers watching, engaging, and coming back. Production quality, quantity, and investment are no longer enough to retain and monetize audiences sustainably. When you can't compete on volume or spend, you have to compete on the experience you deliver. That's where the BoltOS Connect comes in." },
];

const slugOf = (n: string) => n.toLowerCase().replace(/[^a-z]+/g, '-');
const teamRaw: [name: string, role: string, bio: string, linkedin: string | null][] = [
  ['Jamal Hassim', 'CEO & Co Founder', 'Jamal is the Co-Founder and CEO of BoltOS, where he leads our corporate functions including regulation, compliance, and finance. A multi-faceted, lifelong entrepreneur, Jamal has invested, restructured, launched, and operated various television and radio networks across the world, including the TV5 Group in the Philippines, Singapore Press Holdings Group in Singapore, JakTV in Indonesia, and the Media Prima Group across Malaysia and Africa. Jamal is based in London.', null],
  ['John Peterson Clark', 'Chief Technology Officer', 'John is the CTO at BoltOS. Previously, he worked with Boeing Australia and Ford Motor Company on industrial automation projects. John is also an early community member of Switcheo, a blockchain think tank.', null],
  ['Anwar Arieff', 'Director, Corporate Development', 'Anwar is the Director, Corporate Development at BoltOS. Anwar graduated with a Master of Science in Medical Biotechnology and Business Management from the University of Warwick.', null],
  ['Sylvia Cebanu', 'Director, Finance', 'Sylvia leads Revenue and Growth at Bolt, turning product innovation into scalable revenue across global markets. As Director Finance, she aligns product, sales, and monetization to drive adoption and unlock new growth engines. She brings a data-driven approach to building sustainable, product-led revenue systems.', 'https://www.linkedin.com/in/sylvia-cebanu-09171b145'],
  ['Michelle Peterson Clark', 'Director, People, Culture & Special Projects', 'As Dir People, Culture & Special Projects, Michelle drives high-impact initiatives that connect product, partnerships, and marketing, moving from concept to execution. Additionally, she is steer heading our People & Culture initiatives. With 30+ years across media, marketing, and communications, including fractional CMO roles, she brings strategic clarity, sharp messaging, and strong stakeholder management to deliver outcomes that strengthen growth, alignment, and customer experience.', 'https://www.linkedin.com/in/michellepetersonclark/'],
  ['Jason Nellis', 'Director, Commercial & Innovation', "Jason is a product and go-to-market strategist with deep experience building and scaling media, creator, and platform businesses. He has held product and strategy leadership roles at Hulu, PBS, VIZIO, Packagd (acquired by Meta), and Meta, where he served as Founder in Residence for Meta's internal incubator. His work has spanned product development, monetisation strategy, creator partnerships, and platform innovation. At BoltOS, Jason leads Innovation across creators, platforms, and partners, translating real-world workflows, constraints, and monetisation requirements into clear product direction.", 'https://www.linkedin.com/in/jasonnellis/'],
  ['Johan Jamal', 'Director, Product & Operations', 'Johan connects the dots across the BoltOS ecosystem, ensuring a great product experience for our ecosystem of users and partners. Johan graduated with a BA in Communications from the University of Wisconsin-Madison.', null],
  ['Avinash Kannan', 'Head of UX & Design', 'Avinash is Head of UX & Design at BoltOS. Avinash was previously at Playtonia Esports and a Designer for the digital wing of Sun News.', null],
  ['Zain Bin Kafeel', 'DevOps Lead', 'As a DevOps Lead, Zain develops scalable infrastructure solutions for enterprise applications. With a strong background in full-stack development, he is dedicated to designing robust systems that enhance operational efficiency. Zain is passionate about leveraging technology to drive business success, ensuring seamless integration between development and operations teams to deliver high-performing, scalable solutions.', null],
];
const order = ['Jamal Hassim', 'John Peterson Clark', 'Jason Nellis', 'Sylvia Cebanu', 'Anwar Arieff', 'Michelle Peterson Clark', 'Johan Jamal', 'Zain Bin Kafeel', 'Avinash Kannan'];
const team = [...teamRaw].sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]))
  .map(([name, role, bio, href]) => ({ name, role, bio, href, src: `/assets/team/${slugOf(name)}.png` }));
const [lead, ...members] = team;

const faceFile: Record<string, string> = { 'Jason Nellis': 'jason-nellis', 'Anwar Arieff': 'anwar-arieff', 'Jamal Hassim': 'jamal-hassim', Zain: 'zain-bin-kafeel', 'Avinash Kannan': 'avinash-kannan' };
const voices = ([
  ["I've spent my career bridging media, technology, and creators to turn audiences into lasting value.", 'Jason Nellis', 'Director of Innovation', 'Lovers and madmen have such seething brains, such shaping fantasies, that apprehend more than cool reason ever comprehends.'],
  ['I want to operate at the cutting edge of media and technological advancement.', 'Anwar Arieff', 'VP, Operations', 'For which they gave the last full measure of devotion, Abraham Lincoln'],
  ['I want to operate at the cutting edge of media and technological advancement.', 'Jamal Hassim', 'CEO & Co Founder', 'We exist to redefine the limits of media-technology and drive transformational change across the industry'],
  ['Every interaction becomes data, and every data point becomes opportunity inside BoltOS.', 'Zain', 'Head of DevOps', 'I believe in the sector, the high calibre of the management team, and the services we offer.'],
  ['To be a significant part of a cause by designing an immersive and seamless experience for everyone worldwide.', 'Avinash Kannan', 'VP, User Experience and Design', 'The purpose of life is a life with a purpose.'],
] as [string, string, string, string][]).map(([head, name, role, quote]) => ({ head, name, role, quote: `“${quote}”`, src: `/assets/team/${faceFile[name]}.png` }));

const heritageBase = ['Hulu', 'PBS', 'VIZIO', 'Meta', 'Bloomberg', 'Media Prima', 'TV5', 'Boeing', 'Ford'];
const heritage = [...heritageBase, ...heritageBase];

const globeTeam = [
  { name: 'UAE', lat: 25.2048, lon: 55.2708, side: 'left' },
  { name: 'Pakistan', lat: 30.3753, lon: 69.3451, side: 'top' },
  { name: 'India', lat: 20.5937, lon: 78.9629, side: 'right' },
  { name: 'Malaysia', lat: 3.139, lon: 101.6869, side: 'right' },
  { name: 'Australia', lat: -25.2744, lon: 133.7751, side: 'right' },
];

const timeline = [
  ['2017', 'Foundation', 'Founded BoltOS to enable content owners to own distribution, audiences, and monetisation across digital ecosystems.'],
  ['2021', 'Bolt+ | Embedded Distribution Infrastructure', 'Established embedded distribution infrastructure through Smart TV and media ecosystem integrations including Hisense, VIDAA, Euronews, and OneFootball, creating scalable distribution across TV, web, mobile, and OTT environments.'],
  ['2023', 'Connect | Engagement & Monetisation Infrastructure', 'Launched Connect, enabling interactive engagement, sponsorship activation, commerce, and monetisation across enterprise media environments.'],
  ['2025', 'White-label Platform | Recurring Enterprise Revenue Expansion', 'Scaled recurring enterprise revenue through white-label deployments, enterprise licensing growth, and expanding operating footprint across sports and media ecosystems.'],
  ['2026+', 'IRIS | Intelligence & Optimisation Infrastructure', 'Scaling IRIS to power behavioural intelligence, personalisation, optimisation, and monetisation efficiency across global enterprise environments.'],
].map(([year, title, copy]) => ({ year, title, copy }));

const investors = ['Primal Capital', 'Trovio Group'];
const backers = [
  { quote: "At BoltOS, we don't just talk about diversity and inclusion, we live and breathe it. We believe that creating a culture where everyone feels valued, respected, and empowered is not only the right thing to do but also the key to driving innovation and success.", by: 'Uzair, Lead, Boltos' },
  { quote: "At Primal Capital, we pride ourselves on investing in companies leading in technology. We're thrilled to support BoltOS as they deliver innovative AI, blockchain, and immersive streaming solutions.", by: 'Sheikh Mansoor, CEO, Trovio Group' },
];

export const metadata: Metadata = {
  title: "About Us, BoltOS",
};

export default function Page() {
  return (
    <>
    <div className={cn('ab')}>
      {/* Hero */}
      <header className={cn('ab-hero')}>
        <div className={cn('ab-hero-glow')} aria-hidden="true"></div>
        <div className={cn('ab-hero-wave')} aria-hidden="true"><ParticleWave /></div>
        <span className={cn('ab-hero-ghost')} aria-hidden="true">2017</span>
        <div className={cn('ab-hero-inner')}>
          <div className={cn('ab-eyebrow')}><span className={cn('ab-eyebrow-rule')}></span><span className={cn('lilac')}>About Us</span></div>
          <h1>The world of content is at a critical juncture and <span className={cn('hl')}>BoltOS is helping to shape its future.</span></h1>
          <div className={cn('ab-hero-introwrap')}>
            <p className={cn('ab-hero-intro')}>For sports rights holders and media owners, BoltOS is the audience revenue engine that transforms viewer interaction into measurable sponsorship and advertising revenue. Unlike engagement tools or video platforms, BoltOS integrates seamlessly into existing ecosystems, enabling IP owners to activate, monetize, retain and own their audience without disrupting their current stack.</p>
          </div>
        </div>
      </header>

      {/* The Challenge */}
      <section className={cn('ab-chal')}>
        <div className={cn('ab-wave ab-wave-a')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ab-chal-inner')}>
          <div className={cn('ab-chal-head')}>
            <div className={cn('ab-chal-title')}>
              <div className={cn('ab-eyebrow')}><span className={cn('ab-eyebrow-rule')}></span><span className={cn('uv')}>The Challenge</span></div>
              <h2>Hypercompetitive Landscape. Content Fatigue. Declining Revenue.</h2>
              <p className={cn('ab-chal-q')}>How do you keep up?</p>
            </div>
            <div className={cn('ab-chal-intro')}>
              <p>Media brands are in a tough spot, user churn is up, the old revenue models are broken, and technology is often more barrier than booster.</p>
              <p>BoltOS has been experimenting and building since 2017 with the objective of solving these challenges.</p>
              <p className={cn('ab-strong')}>Here's what we did:</p>
            </div>
          </div>
          <div className={cn('ab-chal-rows')}>
            {challenge.map((c, __i) => (
              <div key={__i} className={cn('ab-chal-row')}>
                <div className={cn('ab-chal-row-l')}>
                  <span className={cn('ab-chal-num')} style={{ color: c.numColor }}>{c.num}</span>
                  <h3>{c.title}</h3>
                </div>
                <p>{c.copy}</p>
              </div>
            ))}
            <div className={cn('ab-chal-rule')}></div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className={cn('ab-team')}>
        <div className={cn('ab-team-grid-bg')} aria-hidden="true"></div>
        <div className={cn('ab-team-inner')}>
          <div className={cn('ab-team-head')}>
            <div className={cn('ab-mono lilac')}>Our Team</div>
            <h2>BoltOS, Powered by a Legacy of Innovation and Real-World Impact</h2>
            <p>Based in London, United Kingdom with offices in Singapore and Malaysia, BoltOS taps into a global talent pool to bring together the best in engineering, web development, media, content, and more.</p>
            <p>Together, we push the boundaries of what's possible with media, while remaining grounded in what you need to thrive in the shifting content landscape.</p>
          </div>
          <div className={cn('ab-member ab-member-lead')}>
            <div className={cn('ab-member-photo')}><img src={asset(lead.src)} alt={lead.name} /></div>
            <div className={cn('ab-member-body')}>
              <h3>{lead.name}</h3>
              <div className={cn('ab-member-role')}>{lead.role}</div>
              <p>{lead.bio}</p>
              {lead.href && <A href={lead.href} target="_blank" rel="noopener noreferrer" aria-label={`${lead.name} on LinkedIn`} className={cn('ab-member-link')}>LinkedIn →</A>}
            </div>
          </div>
          <div className={cn('ab-team-grid')}>
            {members.map((t, __i) => (
              <FoldCard key={__i}>
                <div className={cn('ab-member-photo')}><img src={asset(t.src)} alt={t.name} /></div>
                <div className={cn('ab-member-body')}>
                  <h3>{t.name}</h3>
                  <div className={cn('ab-member-role')}>{t.role}</div>
                  <div className={cn('ab-member-more')}>
                    <div className={cn('ab-member-more-inner')}>
                      <p>{t.bio}</p>
                      {t.href && <A href={t.href} target="_blank" rel="noopener noreferrer" aria-label={`${t.name} on LinkedIn`} className={cn('ab-member-link')}>LinkedIn →</A>}
                    </div>
                  </div>
                </div>
              </FoldCard>
            ))}
          </div>
        </div>
      </section>



      {/* Our Work / voices carousel */}
      <section className={cn('ab-work')}>
        <div className={cn('ab-wave ab-wave-b')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('ab-work-inner')}>
          <div className={cn('ab-work-head')}>
            <div className={cn('ab-mono lilac')}>Our Work</div>
            <h2>Media Brands and Content Partners are Already Harnessing BoltOS' Approach to Experiential Media</h2>
            <p>From publishing content directly on our showcase platform, Bolt+, to partnering with us to distribute our content to a global audience through integrations, these brands have seen up close how experiential media can impact their audiences.</p>
          </div>
          <Voices voices={voices} />
        </div>
      </section>

      {/* Heritage marquee */}
      <div className={cn('ab-heritage')}>
        <div className={cn('ab-heritage-label')}>Bringing experience from</div>
        <div className={cn('ab-heritage-track')}>
          {heritage.map((h, __i) => <span key={__i}>{h}</span>)}
        </div>
      </div>

      {/* Timeline */}
      <section className={cn('ab-timeline')}>
        <div className={cn('ab-timeline-inner')}>
          <div className={cn('ab-timeline-head')}>
            <div className={cn('ab-mono uv')}>Our Timeline</div>
            <h2>Where We've Been and Where We're Going</h2>
            <p className={cn('ab-timeline-sub')}>BoltOS has evolved from embedded distribution infrastructure into an AI-powered enterprise operating platform for engagement-driven media.</p>
          </div>
          <div className={cn('ab-timeline-rows')}>
            {timeline.map((t, __i) => (
              <div key={__i} className={cn('ab-timeline-row')}>
                <div className={cn('ab-timeline-year')}><span className={cn('ab-timeline-dot')}></span><span>{t.year}</span></div>
                <div className={cn('ab-timeline-body')}>
                  <h3>{t.title}</h3>
                  <p>{t.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diversity & Inclusion */}
      <section className={cn('ab-di')}>
        <div className={cn('ab-di-glow')} aria-hidden="true"></div>
        <div className={cn('ab-di-inner')}>
          <div className={cn('ab-di-head')}>
            <div className={cn('ab-mono lilac')}>Diversity &amp; Inclusion</div>
            <h2>A Diverse and Inclusive Community</h2>
            <p>At BoltOS, we don't just talk about diversity and inclusion, we live and breathe it.</p>
            <p>We believe that creating a culture where everyone feels valued, respected, and empowered is not only the right thing to do but also the key to driving innovation and success.</p>
          </div>
          <div className={cn('ab-di-map')}>
            <div className={cn('ab-di-map-copy')}>
              <p className={cn('ab-di-map-stat')}>A globally distributed team across 18+ nationalities, headquartered in London, UK</p>
              <ul className={cn('ab-di-legend')}>
                <li className={cn('is-hq')}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>London, UK <span>HQ</span></li>
                {globeTeam.map((p, __i) => <li key={__i}><i aria-hidden="true"></i>{p.name}</li>)}
              </ul>
              <p className={cn('ab-di-hint')}>Drag the globe to explore</p>
            </div>
            <Globe team={globeTeam} />
          </div>
        </div>
      </section>



      {/* Backed by */}
      <section className={cn('ab-backed')}>
        <div className={cn('ab-backed-inner')}>
          <div className={cn('ab-mono uv')}>Backed by</div>
          <div className={cn('ab-backers')}>
            {backers.map((b, i) => (
              <div key={i} className={cn('ab-backer')}>
                <div className={cn('ab-backer-logo')}><LogoSlot name={investors[i]} h={28} onLight /></div>
                <p>{b.quote}</p>
                <div className={cn('ab-backer-by')}>{b.by}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA (standardized) */}
      <ClosingCTA />
    </div>
    </>
  );
}

