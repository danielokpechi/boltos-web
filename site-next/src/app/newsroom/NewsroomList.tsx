'use client';
// Newsroom article list with client-side pagination (PAGE_SIZE per page).
import { useState } from 'react';
import { A } from '@/components/A';
import ParticleWave from '@/components/ParticleWave';
import { articles, hrefFor, isExternal } from '@/data/articles';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import styles from './page.module.css';

const cn = cx(styles);
const PAGE_SIZE = 4;
const pageCount = Math.ceil(articles.length / PAGE_SIZE);

export default function NewsroomList() {
  const [page, setPage] = useState(1);
  const go = (p: number) => {
    setPage(Math.min(pageCount, Math.max(1, p)));
    document.querySelector(`.${styles['nr-list']}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const shown = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className={cn('nr-list-wrap')}>
      <div className={cn('nr-wave nr-wave-b')} aria-hidden="true"><ParticleWave /></div>
      <div className={cn('nr-list')}>
        {shown.map((p) => (
          <A
            key={hrefFor(p)}
            href={hrefFor(p)}
            {...(isExternal(p) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={cn('nr-post')}
          >
            <div className={cn('nr-post-media')}><img src={asset(p.image)} alt={p.title} /></div>
            <div className={cn('nr-post-body')}>
              <span className={cn('nr-post-date')}>{p.date}</span>
              <h2>{p.title}</h2>
              {p.excerpt && <p>{p.excerpt}</p>}
              <span className={cn('nr-post-cta')}>Read more <span className={cn('nr-arrow')}>&rarr;</span></span>
            </div>
          </A>
        ))}
      </div>
      {pageCount > 1 && (
        <nav className={cn('nr-pager')} aria-label="Newsroom pages">
          <button type="button" className={cn('nr-pager-arrow')} aria-label="Previous page" disabled={page === 1} onClick={() => go(page - 1)}>&larr;</button>
          <div className={cn('nr-pager-nums')}>
            {Array.from({ length: pageCount }).map((_, i) => (
              <button key={i} type="button" className={cn('nr-pager-num')} aria-label={`Page ${i + 1}`} aria-current={page === i + 1 ? 'page' : undefined} onClick={() => go(i + 1)}>{i + 1}</button>
            ))}
          </div>
          <button type="button" className={cn('nr-pager-arrow')} aria-label="Next page" disabled={page === pageCount} onClick={() => go(page + 1)}>&rarr;</button>
        </nav>
      )}
    </div>
  );
}
