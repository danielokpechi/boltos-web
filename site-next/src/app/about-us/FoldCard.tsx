'use client';
// Team member card that folds open (bio + LinkedIn) on click or Enter/Space.
// Hover also opens it, via CSS.
import { useState, type ReactNode } from 'react';
import { cx } from '@/lib/cx';
import styles from './page.module.css';

const cn = cx(styles);

export default function FoldCard({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn('ab-member ab-member-fold', open && 'is-open')}
      tabIndex={0} role="button" aria-expanded={open}
      onClick={(e) => { if (!(e.target as HTMLElement).closest('a')) setOpen((o) => !o); }}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget) return;
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen((o) => !o); }
      }}
    >
      {children}
    </div>
  );
}
