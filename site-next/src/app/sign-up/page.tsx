import type { Metadata } from 'next';
import { A } from '@/components/A';
import { cx } from '@/lib/cx';
import { MailtoForm, FormNote } from '@/components/MailtoForm';
import ParticleWave from '@/components/ParticleWave';
import { routes, contactEmail } from '@/data/nav.js';
import styles from './page.module.css';

const cn = cx(styles);

export const metadata: Metadata = {
  title: "Newsletter, BoltOS",
  description: "Sign up to receive BoltOS newsletters and announcements.",
};

export default function Page() {
  return (
    <>
    <div className={cn('su')}>
      <div className={cn('su-glow')} aria-hidden="true"></div>
      <div className={cn('su-wave')} aria-hidden="true"><ParticleWave /></div>
      <div className={cn('su-inner')}>
        <div className={cn('su-head')}>
          <div className={cn('su-eyebrow')}><span className={cn('su-eyebrow-rule')}></span><span className={cn('lilac')}>Newsletter</span></div>
          <h1>Newsletter</h1>
          <p>Signup to receive our newsletters and announcements.</p>
        </div>

        <MailtoForm className={cn('su-form')} to={contactEmail} subject="Newsletter signup" missingNote="Please try again later.">
          <div className={cn('su-field')}>
            <label htmlFor="su-name">Name</label>
            <input id="su-name" name="Name" type="text" autoComplete="name" />
          </div>
          <div className={cn('su-field')}>
            <label htmlFor="su-email">Email <span className={cn('su-req')}>*</span></label>
            <input id="su-email" name="Email" type="email" required autoComplete="email" />
          </div>

          <div className={cn('su-perms')}>
            <h2>Marketing Permissions</h2>
            <p className={cn('su-perms-intro')}>The information you provide on this form will only be used to provide you with updates and personalized marketing. Your privacy is important to us! Please let us know how you would like to keep in touch:</p>

            <label className={cn('su-check')}>
              <input type="checkbox" name="Email updates" value="Yes" />
              <span className={cn('su-check-body')}>
                <span className={cn('su-check-title')}>Email</span>
                <span className={cn('su-check-copy')}>We will send you occasional emails about promotions, new products and important updates to keep you in the loop.</span>
              </span>
            </label>

            <label className={cn('su-check')}>
              <input type="checkbox" name="Customized online advertising" value="Yes" />
              <span className={cn('su-check-body')}>
                <span className={cn('su-check-title')}>Customized online advertising</span>
                <span className={cn('su-check-copy')}>We will use your information to show you ads that are more relevant to you to improve your online experience.</span>
              </span>
            </label>
          </div>

          <p className={cn('su-ack')}>By clicking below to submit this form, you acknowledge that the information you provide will be processed in accordance with our <A href={routes.privacy}>Privacy Policy</A>.</p>

          <div className={cn('su-actions')}>
            <button type="submit" className={cn('su-submit')}>Opt in to receive news and updates.</button>
            <FormNote className={cn('su-note')} />
          </div>
        </MailtoForm>
      </div>
    </div>
    </>
  );
}

