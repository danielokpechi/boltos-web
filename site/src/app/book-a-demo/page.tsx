import type { Metadata } from 'next';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import ParticleWave from '@/components/ParticleWave';
import styles from './page.module.css';

const cn = cx(styles);

// Google Calendar appointment scheduling embed (provided by client).
const CALENDAR = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2kzx7II1jUDcxpjYKzTDqUVw1FqGxNIdWfR8CudnCVnHlaOdr_cD1n0dtzPD5Se5NH0v6kb9ay?gv=true';

export const metadata: Metadata = {
  title: "Take a Tour, BoltOS",
  description: "See the BoltOS Connect in action on Bolt+, then book a demo slot.",
};

export default function Page() {
  return (
    <>
    <div className={cn('bd')}>
      {/* Hero */}
      <header className={cn('bd-hero')}>
        <div className={cn('bd-hero-glow')} aria-hidden="true"></div>
        <div className={cn('bd-wave bd-wave-a')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('bd-hero-inner')}>
          <div className={cn('bd-eyebrow')}><span className={cn('bd-eyebrow-rule')}></span><span className={cn('lilac')}>Take a Tour</span></div>
          <h1>See for Yourself</h1>
          <div className={cn('bd-body')}>
            <p>We built the BoltOS Connect to elevate your content into an experience that keeps viewers engaged, fans loyal, and revenue flowing. But we want you to see it before you believe it. That's where Bolt+ comes in.</p>
            <p>On Bolt+, our own proprietary viewing platform, you can watch the Connect in action as fans engage with their favourite content channels.</p>
            <p>We use Bolt+ as a sandbox to test new features before deploying them for you, and we'd like to invite you behind the scenes to see for yourself how it works.</p>
          </div>
        </div>
      </header>

      {/* Connect live demo (ported from demo/product-embed) */}
      <section id="connect-demo" className={cn('demo')}>
        <div className={cn('demo-glow')} aria-hidden="true"></div>
        <div className={cn('demo-inner')}>
          <div className={cn('demo-eyebrow')}><span className={cn('demo-dot')}></span>Live demo</div>
          <h2 className={cn('demo-h2')}>Meet Connect. Live matchday, in the browser.</h2>
          <p className={cn('demo-sub')}>Two sides of the same moment &mdash; the club runs the panel on the operator console, fans live inside it on Bolt+. Both driving themselves. Tap in and take over.</p>
          <div className={cn('demo-frame')}>
            <div className={cn('demo-bar')} aria-hidden="true"><span className={cn('demo-tl')}></span><span className={cn('demo-tl')}></span><span className={cn('demo-tl')}></span><span className={cn('demo-url')}>connect.boltos.ai</span></div>
            <iframe className={cn('demo-iframe')} title="Connect &mdash; live operator and fan demo" loading="lazy" allow="autoplay"
              src="https://danielokpechi.github.io/immersive-panel-v2/arsenal/connect-demo/"></iframe>
          </div>
          <p className={cn('demo-caption')}>This is a live embed. Tap to take over.</p>
        </div>
      </section>

      {/* Calendar booking */}
      <section className={cn('bd-cal')}>
        <div className={cn('bd-cal-inner')}>
          <p className={cn('bd-cal-caption')}>Just book a demo slot in the calendar below.</p>
          <div className={cn('bd-cal-frame')}>
            <iframe
              src={asset(CALENDAR)}
              title="Book a BoltOS demo"
              loading="lazy"
              style={{ border: "0" }}
            ></iframe>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}
