import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { A } from '@/components/A';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import LazyVideo from '@/components/LazyVideo';
import ParticleWave from '@/components/ParticleWave';
import ClosingCTA from '@/components/ClosingCTA';
import LogoSlot from '@/components/LogoSlot';
import { routes } from '@/data/nav.js';
import styles from './page.module.css';

const cn = cx(styles);

const cards = [
  { num: '01', href: routes.hisense, logo: '/assets/logos/hisense.png', name: 'Hisense', bar: '#7B2FE2', hover: '#7B2FE2',
    copy: 'Bolt+ takes the immersive streaming experience to millions of Hisense TVs globally' },
  { num: '02', href: routes.bloomberg, logo: '/assets/logos/bloomberg.png', name: 'Bloomberg', bar: '#D62086', hover: '#D62086',
    copy: 'Turning business-news reach into participation: 30,545 chat messages and a measurable path to subscription.' },
  { num: '03', href: routes.dubai, logo: '/assets/logos/dubai-24h.png', name: 'Dubai 24HR Motor Racing', bar: '#35C7DF', hover: '#35C7DF',
    copy: 'A 24-hour race turned into a two-way fan experience, with a 54% click-through rate to team merchandise.' },
  { num: '04', href: routes.oneFootball, logo: '/assets/logos/one-football.webp', name: 'One Football', bar: '#7B2FE2', hover: '#7B2FE2',
    copy: 'Powering a global community with the biggest football clubs in the world.' },
  { num: '05', href: routes.bridget, logo: '/assets/logos/bridget.png', name: "Bridget's Healthy Kitchen", bar: '#C6ABF5', hover: '#C6ABF5',
    copy: 'A 3-day creator-led live bootcamp that held a global audience for 1h 50m on average and turned participation into next-event bookings.' },
];

export const metadata: Metadata = {
  title: "Case Studies, BoltOS",
};

export default function Page() {
  return (
    <>
    <div className={cn('csi')}>
      <header className={cn('csi-hero')}>
        <LazyVideo
          src={asset('/assets/video/case-studies.mp4')}
          poster={asset('/assets/photos/broadcast-still.web.jpg')}
          videoClassName={cn('csi-hero-video')}
          controlsClassName={cn('csi-hero-controls')}
          buttonClassName={cn('csi-ctrl')}
        />
        <div className={cn('csi-hero-scrim')} aria-hidden="true"></div>
      </header>

      <div className={cn('csi-body')}>
        <div className={cn('csi-wave csi-wave-tr')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('csi-wave csi-wave-bl')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('csi-head')}>
          <span className={cn('csi-eyebrow')}>Partners</span>
          <h1>Case Studies</h1>
        </div>
        <div className={cn('csi-grid')}>
          {cards.map((c) => {
            const inner = (
              <>
                <span className={cn('csi-card-ghost')}>{c.num}</span>
                <LogoSlot name={c.name} h={34} />
                <span className={cn('csi-card-bar')} style={{ background: c.bar }}></span>
                <h2>{c.name}</h2>
                <p>{c.copy}</p>
                {c.href && <span className={cn('csi-card-cta')}>Read the story →</span>}
              </>
            );
            return c.href
              ? <A key={c.name} href={c.href} className={cn('csi-card')} style={{ '--hover': c.hover } as CSSProperties}>{inner}</A>
              : <div key={c.name} className={cn('csi-card')}>{inner}</div>;
          })}
        </div>
      </div>
      <ClosingCTA />
    </div>
    </>
  );
}

