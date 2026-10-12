import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { A } from '@/components/A';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import Roadmap from '@/components/Roadmap';
import ClosingCTA from '@/components/ClosingCTA';
import Faq from '@/components/Faq';
import { routes, external } from '@/data/nav.js';
import styles from './page.module.css';

const cn = cx(styles);

const solutions = [
  { num: '01', icon: '/assets/icons/layers/engage.png', name: 'Connect', tag: 'Engage · Audience Engagement & Monetisation', copy: 'Interactive features and monetisation tools that turn passive viewers into active, loyal and valuable audiences.', points: ['Read', 'Chat', 'Rewards', 'Commerce'], href: routes.connect, accent: '#D62086', offset: false },
  { num: '02', icon: '/assets/icons/layers/intelligence.png', name: 'Intelligence', tag: 'Audience Intelligence & AI', copy: 'AI-powered intelligence to understand audiences, generate insights and drive monetisation.', points: ['IRIS', 'PULSE'], href: routes.intelligence, accent: '#7B2FE2', offset: true },
];

const faqs = [
  ['Do I need technical expertise to use BoltOS solutions?', 'Not at all. Our solutions are designed for media and entertainment teams with busy schedules. You get access to an intuitive and user-friendly control panel with all our solutions, and we provide guidance every step of the way during implementation and recommendation on the best practices as you start your journey with us.'],
  ['What do you need from us to get started?', "The exact requirements depend on the project. In most cases, we start with your brief, branding assets and intended use case. From there, we'll guide you through any additional materials or access we need."],
  ['How long does setup take?', 'Once the brief is finalised, setup typically takes between two to four weeks, depending on our workload at the time. However, we always aim to deliver as quickly as possible without compromising on quality.'],
  ['What analytics and audience insights do we receive?', 'The reporting available depends on the solution, integration and project requirements. We can work with you to determine which audience insights are most relevant to your objectives to set up your dashboard accordingly.'],
  ['Where can audiences access interactive features?', 'All our interactive features can be accessed from anywhere in the world and are fully optimised for mobile, tablet, and desktop. Your audience can participate regardless of device.'],
  ['Can I customise the look and feel of your solutions to match my brand?', 'Absolutely. You have full control over the colours, fonts, layouts, and branding. We offer templates for quick setup, or you can create fully bespoke designs.'],
  ["What's your uptime guarantee?", 'We maintain 99.9% uptime, supported by redundant infrastructure and continuous monitoring. Our status page provides real-time updates on system health.'],
  ['How do you handle data privacy and security?', "We're GDPR compliant and use end-to-end encryption. Your data and your audience's data are protected with enterprise-grade security."],
].map(([q, a]) => ({ q, a }));

export const metadata: Metadata = {
  title: "Solutions, BoltOS",
  description: "BoltOS solutions: Connect for audience engagement and monetisation, and Intelligence for audience insight and AI.",
};

export default function Page() {
  return (
    <>
    <div className={cn('sol')}>
      <header className={cn('sol-hero')}>
        <div className={cn('sol-hero-head')}>
          <div className={cn('sol-eyebrow')}><span className={cn('sol-eyebrow-rule')}></span><span>Solutions</span></div>
          <h1>Taking fan monetisation to the <span className={cn('hl')}>next level</span></h1>
        </div>
        <div className={cn('sol-cards')}>
          {solutions.map((s, __i) => (
            <div key={__i} className={cn(`sol-card ${s.offset ? 'offset' : ''}`)} style={{ '--accent': s.accent } as CSSProperties}>
              <span className={cn('sol-card-ghost')}>{s.num}</span>
              <img src={asset(s.icon)} alt="" className={cn('sol-card-icon')} />
              <div className={cn('sol-card-tag')}>{s.tag}</div>
              <h2>{s.name}</h2>
              <p>{s.copy}</p>
              <div className={cn('sol-card-points')}>{s.points.map((p, __i) => <span key={__i}>{p}</span>)}</div>
              <A href={s.href} className={cn('sol-card-link')}>Learn More →</A>
            </div>
          ))}
        </div>
        <div className={cn('sol-products')}>
          <span className={cn('sol-products-label')}>Delivered through our products</span>
          <A href={external.boltplus} target="_blank" rel="noopener noreferrer"><img src={asset('/assets/logo/BoltPlus_Primary_RGB.svg')} alt="Bolt+" className={cn('sol-products-logo')} /> BoltOS-operated ↗</A>
          <A href={routes.boltOne}><img src={asset('/assets/logo/BoltOne_Primary.png')} alt="Bolt One" className={cn('sol-products-logo')} /> Customer-operated →</A>
        </div>
      </header>

      <Roadmap />

      <Faq items={faqs} />

      <ClosingCTA />
    </div>
    </>
  );
}
