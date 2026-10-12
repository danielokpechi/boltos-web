import type { Metadata } from 'next';
import { cx } from '@/lib/cx';
import ParticleWave from '@/components/ParticleWave';
import ClosingCTA from '@/components/ClosingCTA';
import { articles } from '@/data/articles';
import NewsroomList from './NewsroomList';
import styles from './page.module.css';

const cn = cx(styles);

const categories = ['Ecosystem', 'Events', 'News', 'Press Release', 'Thought Leadership'];


export const metadata: Metadata = {
  title: "Newsroom, BoltOS",
};

export default function Page() {
  return (
    <>
    <div className={cn('nr')}>
      <header className={cn('nr-hero')}>
        <div className={cn('nr-hero-glow')} aria-hidden="true"></div>
        <div className={cn('nr-wave nr-wave-a')} aria-hidden="true"><ParticleWave /></div>
        <div className={cn('nr-hero-inner')}>
          <span className={cn('nr-eyebrow')}>Newsroom</span>
          <h1>Bolt Newsroom</h1>
          {/* Filter/search toolbar: presentational only (matches prototype; no logic wired). */}
          <div className={cn('nr-toolbar')}>
            <div className={cn('nr-cats')}>
              <span className={cn('nr-cats-label')}>Categories</span>
              <div className={cn('nr-cats-list')}>
                {categories.map((c, __i) => <span key={__i} className={cn('nr-cat')}>{c}</span>)}
              </div>
            </div>
            <div className={cn('nr-controls')}>
              <span className={cn('nr-sort')}>Newest first <span className={cn('nr-caret')}>&#9662;</span></span>
              <span className={cn('nr-search')}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7E838C" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M16.5 16.5 L21 21" strokeLinecap="round"></path></svg>
                Search
              </span>
              <span className={cn('nr-count')}>{articles.length} articles</span>
            </div>
          </div>
        </div>
      </header>

      <NewsroomList />
      <ClosingCTA />
    </div>
    </>
  );
}

