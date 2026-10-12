import type { Metadata } from 'next';
import { A } from '@/components/A';
import { asset } from '@/lib/base';
import { notFound } from 'next/navigation';
import { cx } from '@/lib/cx';
import ClosingCTA from '@/components/ClosingCTA';
import { articles, hrefFor, isExternal, keyFor, type Article } from '@/data/articles';
import { external, socials } from '@/data/nav.js';
import styles from './page.module.css';

const cn = cx(styles);

type Params = { params: Promise<{ slug: string }> };
const findArticle = (slug: string) => articles.find((a) => a.internal && a.slug === slug);

// Internal articles render a full page here; external ones link out.
export function generateStaticParams() {
  return articles.filter((a) => a.internal).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = findArticle((await params).slug);
  if (!article) return {};
  return { title: `${article.title}, BoltOS`, description: article.excerpt || `${article.title} — BoltOS Newsroom.` };
}

const iconOf = (label: string) => socials.find((s) => s.label === label)?.path;
const socialCards: { label: string; tag: string; href: string; path?: string; color?: string; img?: string }[] = [
  { label: '@boltplus on X', tag: 'Announcements', href: external.x, path: iconOf('X'), color: '#101014' },
  { label: 'Discord', tag: 'Creator Community', href: external.discord, path: iconOf('Discord'), color: '#5865F2' },
  { label: 'LinkedIn', tag: 'Ecosystem Updates', href: external.linkedin, path: iconOf('LinkedIn'), color: '#0A66C2' },
  { label: 'Bolt+', tag: 'AMAs', href: external.boltplus, img: '/assets/logo/BoltPlus_Secondary_RGB.svg' },
];

export default async function Page({ params }: Params) {
  const found = findArticle((await params).slug);
  if (!found) notFound();
  const article: Article = found;
  const related = articles.filter((a) => keyFor(a) !== keyFor(article)).slice(0, 3);
  return (
    <>
    <article className={cn('ar')}>
      <header className={cn('ar-head')}>
        <time className={cn('ar-date')}>{article.date}</time>
        <h1>{article.title}</h1>
        <div className={cn('ar-tags')}>
          {article.categories.map((c, __i) => <span key={__i} className={cn('ar-tag')}>{c}</span>)}
        </div>
      </header>

      {article.image && (
        <figure className={cn('ar-hero')}>
          <div className={cn('ar-hero-frame')}><img src={asset(article.image)} alt={article.heroCaption || article.title} /></div>
          {article.heroCaption && <figcaption>{article.heroCaption}</figcaption>}
        </figure>
      )}

      <div className={cn('ar-byline')}>
        <span className={cn('ar-avatar')} aria-hidden="true">B</span>
        <span className={cn('ar-byline-text')}><strong>{article.author}</strong></span>
      </div>

      <div className={cn('ar-body')}>
        {/* Body blocks are authored, trusted HTML from data/articles.js. */}
        {(article.body ?? []).map((b, i) => (
          b.type === 'ul'
            ? <ul key={i}>{b.items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>
            : b.type === 'quote'
              ? <blockquote key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
              : b.type === 'img'
                ? <figure key={i} className={cn('ar-fig')}><img src={asset(b.src)} alt={b.alt} loading="lazy" /></figure>
                : b.type === 'h'
                  ? <h2 key={i} dangerouslySetInnerHTML={{ __html: b.text }} />
                  : <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
        ))}
      </div>

      {/* Social */}
      <section className={cn('ar-social')}>
        <h2 className={cn('ar-social-head')}>Innovate. Inspire. Include.</h2>
        <div className={cn('ar-social-grid')}>
          {socialCards.map((s, __i) => (
            <A key={__i} href={s.href} target="_blank" rel="noopener noreferrer" className={cn('ar-social-card')}>
              <span className={cn('ar-social-icon')}>
                {s.img
                  ? <img src={asset(s.img)} alt="" />
                  : <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d={s.path} fill={s.color} /></svg>}
              </span>
              <span className={cn('ar-social-label')}>{s.label}</span>
              <span className={cn('ar-social-tag')}>{s.tag}</span>
            </A>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className={cn('ar-related')}>
          <h2>More from the Newsroom</h2>
          <div className={cn('ar-related-grid')}>
            {related.map((r, __i) => (
              <A key={__i}
                href={hrefFor(r)}
                {...(isExternal(r) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={cn('ar-card')}
              >
                <div className={cn('ar-card-media')}><img src={asset(r.image)} alt={r.title} /></div>
                <div className={cn('ar-card-body')}>
                  <span className={cn('ar-card-date')}>{r.date}</span>
                  <h3>{r.title}</h3>
                </div>
              </A>
            ))}
          </div>
        </section>
      )}
    </article>

    <ClosingCTA />
    </>
  );
}
