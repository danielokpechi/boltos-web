import type { Metadata } from 'next';
import { A } from '@/components/A';
import { cx } from '@/lib/cx';
import { MailtoForm, FormNote } from '@/components/MailtoForm';
import ParticleWave from '@/components/ParticleWave';
import { socials, external, routes, contactEmail } from '@/data/nav.js';
import styles from './page.module.css';

const cn = cx(styles);

const offices = ['London, United Kingdom', 'Singapore', 'Malaysia'];

export const metadata: Metadata = {
  title: "Contact, BoltOS",
  description: "Get in touch with the BoltOS team.",
};

export default function Page() {
  return (
    <>
    <div className={cn('ct')}>
      <div className={cn('ct-glow')} aria-hidden="true"></div>
      <div className={cn('ct-wave')} aria-hidden="true"><ParticleWave /></div>
      <div className={cn('ct-inner')}>
        <div className={cn('ct-head')}>
          <div className={cn('ct-eyebrow')}><span className={cn('ct-eyebrow-rule')}></span><span className={cn('lilac')}>Contact</span></div>
          <h1>Get in touch</h1>
          <p>Tell us about your audience and what you want to build, and we'll get back to you.</p>
        </div>

        <div className={cn('ct-grid')}>
          {/* Message form */}
          <MailtoForm className={cn('ct-form')} to={contactEmail} subject="Contact enquiry" missingNote="Please reach us via the channels listed.">
            <div className={cn('ct-field')}>
              <label htmlFor="ct-name">Name <span className={cn('ct-req')}>*</span></label>
              <input id="ct-name" name="Name" type="text" required autoComplete="name" />
            </div>
            <div className={cn('ct-field')}>
              <label htmlFor="ct-email">Email <span className={cn('ct-req')}>*</span></label>
              <input id="ct-email" name="Email" type="email" required autoComplete="email" />
            </div>
            <div className={cn('ct-field')}>
              <label htmlFor="ct-org">Organisation <span className={cn('ct-opt')}>(optional)</span></label>
              <input id="ct-org" name="Organisation" type="text" autoComplete="organization" />
            </div>
            <div className={cn('ct-field')}>
              <label htmlFor="ct-msg">Message <span className={cn('ct-req')}>*</span></label>
              <textarea id="ct-msg" name="Message" rows={5} required></textarea>
            </div>
            <div className={cn('ct-actions')}>
              <button type="submit" className={cn('ct-submit')}>Send message</button>
              <FormNote className={cn('ct-note')} />
            </div>
          </MailtoForm>

          {/* Reach-us panel */}
          <aside className={cn('ct-aside')}>
            <div className={cn('ct-block')}>
              <div className={cn('ct-block-label')}>Take a Tour</div>
              <p>See the Connect in action and grab a slot with our team.</p>
              <A href={routes.bookDemo} className={cn('ct-cta')}>Take a Tour</A>
            </div>
            <div className={cn('ct-block')}>
              <div className={cn('ct-block-label')}>Follow us</div>
              <div className={cn('ct-socials')}>
                {socials.map((s, __i) => (
                  <A key={__i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.aria}>{s.label}</A>
                ))}
              </div>
            </div>
            <div className={cn('ct-block')}>
              <div className={cn('ct-block-label')}>Brand assets</div>
              <A href={external.brandAssets} download aria-label="Download the BoltOS brand guidelines (PDF)" className={cn('ct-link')}>Download brand guidelines (PDF) →</A>
            </div>
            <div className={cn('ct-block')}>
              <div className={cn('ct-block-label')}>Offices</div>
              <ul className={cn('ct-offices')}>
                {offices.map((o, __i) => <li key={__i}>{o}</li>)}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
    </>
  );
}

