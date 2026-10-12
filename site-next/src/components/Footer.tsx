// Four-column footer. Social list shared with the Company dropdown from one source.
import { routes, external } from '@/data/nav.js';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import { A } from './A';
import SocialLinks from './SocialLinks';
import styles from './Footer.module.css';

const cn = cx(styles);

export default function Footer() {
  return (
    <>
      <footer className={cn('ft')}>
        <div className={cn('ft-brand')}>
          <img src={asset('/assets/logo/BoltOS_Primary_RGB.svg')} alt="BoltOS logo" className={cn('ft-logo')} />
          <div className={cn('ft-tag')}>Media Technology Group</div>
          <img src={asset('/assets/badges/cyber-essentials-plus.png')} alt="Cyber Essentials Certified Plus" className={cn('ft-badge')} />
        </div>
        <div className={cn('ft-col')}>
          <div className={cn('ft-head')}>PRODUCTS</div>
          <a href={external.boltplus} target="_blank" rel="noopener noreferrer">Bolt+ ↗</a>
          <A href={routes.boltOne}>Bolt One</A>
        </div>
        <div className={cn('ft-col')}>
          <div className={cn('ft-head')}>SOLUTIONS</div>
          <A href={routes.solutions}>All Solutions</A>
          <A href={routes.connect}>Connect</A>
          <A href={routes.intelligence}>Intelligence</A>
        </div>
        <div className={cn('ft-col')}>
          <div className={cn('ft-head')}>COMPANY</div>
          <A href={routes.about}>About BoltOS</A>
          <A href={routes.cases}>Case Studies</A>
          <A href={routes.newsroom}>Newsroom</A>
          <A href={external.brandAssets} download aria-label="Download the BoltOS brand guidelines (PDF)">Brand Assets</A>
          <A href={routes.bookDemo} className={cn('ft-btn')}>Take a Tour</A>
        </div>
        <div className={cn('ft-col')}>
          <div className={cn('ft-head')}>STAY CONNECTED</div>
          <A href={routes.contact}>Contact Us</A>
          <span className={cn('ft-plain')}>Monthly Newsletter</span>
          <A href={routes.signup} className={cn('ft-btn')}>Sign up</A>
          <div className={cn('ft-social')}><SocialLinks /></div>
        </div>
      </footer>
      <div className={cn('ft-legal')}>
        <div>© 2026 BoltOS, Inc. All rights reserved. Built in Singapore and London.</div>
        <div className={cn('ft-legal-links')}>
          <A href={routes.privacy}>Privacy</A>
          <A href={routes.cookies}>Cookies</A>
        </div>
      </div>
    </>
  );
}
