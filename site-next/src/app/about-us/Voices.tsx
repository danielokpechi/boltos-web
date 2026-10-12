'use client';
// "Our Work" voices carousel: prev/next swap the portrait and quote card.
import { useState } from 'react';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import styles from './page.module.css';

const cn = cx(styles);

type Voice = { head: string; name: string; role: string; quote: string; src: string };

export default function Voices({ voices }: { voices: Voice[] }) {
  const [i, setI] = useState(0);
  const n = voices.length;
  const idx = ((i % n) + n) % n;
  const v = voices[idx];
  return (
    <div className={cn('ab-voice')}>
      <div className={cn('ab-voice-photo')}>
        <img src={asset(v.src)} alt={v.name} />
        <span className={cn('ab-voice-scrim')} aria-hidden="true"></span>
      </div>
      <div className={cn('ab-voice-card')}>
        <p className={cn('ab-voice-head')}>{v.head}</p>
        <div className={cn('ab-voice-id')}>
          <span className={cn('ab-voice-name')}>{v.name}</span>
          <span className={cn('ab-voice-role')}>{v.role}</span>
        </div>
        <p className={cn('ab-voice-quote')}>{v.quote}</p>
        <div className={cn('ab-voice-nav')}>
          <button type="button" aria-label="Previous quote" className={cn('ab-voice-btn')} onClick={() => setI((x) => x - 1)}>‹</button>
          <button type="button" aria-label="Next quote" className={cn('ab-voice-btn')} onClick={() => setI((x) => x + 1)}>›</button>
          <span className={cn('ab-voice-count')}>{idx + 1} / {n}</span>
        </div>
      </div>
    </div>
  );
}
