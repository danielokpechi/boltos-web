'use client';
// Sticky pill nav. Desktop: four hover/click dropdown panels left-aligned to their
// triggers. Mobile (<900px): a hamburger opens a full-height slide-out drawer with
// the dropdowns as accordions, body-scroll lock, focus trap, and Escape/overlay close.
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { navItems, productsPanel, solutionsPanel, casesPanel, routes, external } from '@/data/nav.js';
import { asset } from '@/lib/base';
import { cx } from '@/lib/cx';
import { A } from './A';
import SocialLinks from './SocialLinks';
import styles from './Nav.module.css';

const cn = cx(styles);
const PANEL_WIDTHS: Record<string, number> = { Product: 416, Company: 776, Solutions: 696, Cases: 776 };
const extProps = (external?: boolean) => (external ? { target: '_blank', rel: 'noopener noreferrer' } : {});

export default function Nav() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const closeTimer = useRef<number | undefined>(undefined);
  const [current, setCurrent] = useState<string | null>(null);
  const [left, setLeft] = useState(0);

  // Desktop dropdowns: hover/focus/click open; ~320ms cancellable close.
  const position = useCallback((id: string) => {
    const t = triggerRefs.current[id], wrap = wrapRef.current; if (!t || !wrap) return;
    const a = t.getBoundingClientRect(), b = wrap.getBoundingClientRect();
    const pw = Math.min(PANEL_WIDTHS[id] || 480, b.width);
    setLeft(Math.max(0, Math.min(a.left - b.left - 14, b.width - pw)));
  }, []);
  const open = (id: string) => { window.clearTimeout(closeTimer.current); position(id); setCurrent(id); };
  const close = () => setCurrent(null);
  const toggle = (id: string) => (current === id ? close() : open(id));
  const hold = () => window.clearTimeout(closeTimer.current);
  const scheduleClose = () => { hold(); closeTimer.current = window.setTimeout(close, 320); };
  useEffect(() => {
    if (!current) return;
    const onResize = () => position(current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [current, position]);

  // Close everything when the route changes (client navigation).
  const pathname = usePathname();
  useEffect(() => { setCurrent(null); setDrawer(false); }, [pathname]);

  // Mobile drawer
  const [drawer, setDrawer] = useState(false);       // open state (drives the slide)
  const [drawerShown, setDrawerShown] = useState(false); // mounted/visible (lags on close for the transition)
  const [acc, setAcc] = useState<Record<string, boolean>>({});
  const burgerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const openDrawer = () => { lastFocus.current = document.activeElement as HTMLElement; setDrawerShown(true); };
  const closeDrawer = useCallback(() => { setDrawer(false); }, []);
  useEffect(() => {
    if (drawerShown && !drawer) {
      // Just shown: let it paint off-screen, then slide in.
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setDrawer(true)));
      return () => cancelAnimationFrame(raf);
    }
  }, [drawerShown]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (drawer) {
      document.body.style.overflow = 'hidden';
      const f = focusables(); if (f[0]) f[0].focus();
      return;
    }
    if (!drawerShown) return;
    document.body.style.overflow = '';
    const t = window.setTimeout(() => setDrawerShown(false), 240);
    (lastFocus.current || burgerRef.current)?.focus();
    return () => window.clearTimeout(t);
  }, [drawer]); // eslint-disable-line react-hooks/exhaustive-deps

  const focusables = () =>
    Array.from(panelRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []).filter((el) => el.offsetParent !== null);
  useEffect(() => {
    if (!drawerShown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); closeDrawer(); }
      if (e.key === 'Tab') {
        const f = focusables(); if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [drawerShown, closeDrawer]);

  const accordion = (id: string, label: string, children: ReactNode) => (
    <div className={cn('nav-acc')}>
      <button type="button" className={cn('nav-acc-trigger')} aria-expanded={!!acc[id]} onClick={() => setAcc((s) => ({ ...s, [id]: !s[id] }))}>
        {label}<span className={cn('nav-acc-chev')} aria-hidden="true">▾</span>
      </button>
      <div className={cn('nav-acc-panel')} hidden={!acc[id]}>{children}</div>
    </div>
  );

  return (
    <>
      <div className={cn('nav-shell')}>
        <div className={cn('nav-wrap')} ref={wrapRef} onMouseLeave={scheduleClose} onMouseEnter={hold}>
          <nav className={cn('nav-pill')} aria-label="Primary">
            <A href={routes.home} aria-label="BoltOS home" className={cn('nav-logo')}>
              <img src={asset('/assets/logo/BoltOS_Primary_RGB.svg')} alt="BoltOS logo" />
            </A>
            <div className={cn('nav-center')}>
              {navItems.map((n) => (
                n.menu ? (
                  <button
                    key={n.id} type="button" className={cn('nav-trigger')} data-menu={n.id} aria-haspopup="true" aria-expanded={current === n.id}
                    ref={(el) => { triggerRefs.current[n.id] = el; }}
                    onMouseEnter={() => open(n.id)} onFocus={() => open(n.id)} onClick={() => toggle(n.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(n.id); }
                      if (e.key === 'Escape') { close(); e.currentTarget.blur(); }
                    }}
                  >{n.label}<span className={cn('nav-caret')} aria-hidden="true">▾</span></button>
                ) : (
                  <A key={n.id} href={n.href!} className={cn('nav-flat')}>{n.label}</A>
                )
              ))}
            </div>
            <div className={cn('nav-cta-wrap')}>
              <A href={routes.bookDemo} className={cn('nav-cta')}>Take a Tour</A>
            </div>
            <button type="button" className={cn('nav-burger')} aria-label="Open menu" aria-controls="nav-drawer" aria-expanded={drawer} ref={burgerRef} onClick={openDrawer}>
              <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
            </button>
          </nav>

          {/* Desktop dropdown panels */}
          <div className={cn('nav-panel')} data-panel="Products" hidden={current !== 'Products'} style={{ left }} onMouseEnter={hold}>
            <div className={cn('np-grid')}>
              {productsPanel.map((p) => (
                <A key={p.label} href={p.href} className={cn('np-card')} {...extProps(p.external)}>
                  <span className={cn('np-card-tag')}>{p.tag}</span>
                  <span className={cn('np-card-title')}>
                    {p.logo ? <img src={asset(p.logo)} alt={p.label} className={cn('np-card-logo')} /> : p.label}
                    {p.external && <span className={cn('np-ext')} aria-label="(opens boltplus.tv)"> ↗</span>}
                  </span>
                  <span className={cn('np-card-sub')}>{p.sub}</span>
                </A>
              ))}
            </div>
          </div>
          <div className={cn('nav-panel')} data-panel="Company" hidden={current !== 'Company'} style={{ left }} onMouseEnter={hold}>
            <div className={cn('np-company')}>
              <div className={cn('np-company-col')}>
                <div className={cn('np-eyebrow')}>COMPANY</div>
                <A href={routes.about} className={cn('np-company-link')}>About Us</A>
                <A href={routes.newsroom} className={cn('np-company-link')}>Newsroom</A>
                <A href={external.brandAssets} download aria-label="Download the BoltOS brand guidelines (PDF)" className={cn('np-company-link')}>Brand Assets</A>
              </div>
              <SocialLinks showLabels className={cn('np-socials')} />
            </div>
          </div>
          <div className={cn('nav-panel')} data-panel="Solutions" hidden={current !== 'Solutions'} style={{ left }} onMouseEnter={hold}>
            <div className={cn('np-grid')}>
              {solutionsPanel.map((s) => (
                <A key={s.label} href={s.href} className={cn('np-card np-card-iconed')}>
                  <img src={asset(s.icon)} alt="" className={cn('np-card-icon')} />
                  <span className={cn('np-card-text')}><span className={cn('np-card-title')}>{s.label}</span><span className={cn('np-card-sub')}>{s.sub}</span></span>
                </A>
              ))}
            </div>
            <A href={routes.solutions} className={cn('np-all')}>All solutions →</A>
          </div>
          <div className={cn('nav-panel')} data-panel="Cases" hidden={current !== 'Cases'} style={{ left }} onMouseEnter={hold}>
            <div className={cn('np-grid')}>
              {casesPanel.map((s) => (
                <A key={s.label} href={s.href} className={cn('np-card')}><span className={cn('np-card-title')}>{s.label}</span><span className={cn('np-card-sub')}>{s.sub}</span></A>
              ))}
            </div>
            <A href={routes.cases} className={cn('np-all')}>See all case studies →</A>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={cn('nav-drawer', drawer && 'open')} id="nav-drawer" hidden={!drawerShown}>
        <div className={cn('nav-drawer-overlay')} tabIndex={-1} aria-hidden="true" onClick={closeDrawer}></div>
        <aside className={cn('nav-drawer-panel')} role="dialog" aria-modal="true" aria-label="Menu" ref={panelRef}>
          <div className={cn('nav-drawer-head')}>
            <A href={routes.home} className={cn('nav-logo')} aria-label="BoltOS home" onClick={closeDrawer}><img src={asset('/assets/logo/BoltOS_Primary_RGB.svg')} alt="BoltOS logo" /></A>
            <button type="button" className={cn('nav-drawer-close')} aria-label="Close menu" onClick={closeDrawer}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>
          <div className={cn('nav-drawer-body')}>
            {accordion('products', 'Products', productsPanel.map((p) => (
              <A key={p.label} href={p.href} className={cn('nav-acc-link')} onClick={closeDrawer} {...extProps(p.external)}>
                <span>{p.logo ? <img src={asset(p.logo)} alt={p.label} className={cn('nav-acc-logo')} /> : p.label}{p.external && ' ↗'}</span>
                <span className={cn('nav-acc-sub')}>{p.tag}</span>
              </A>
            )))}
            {accordion('solutions', 'Solutions', <>
              {solutionsPanel.map((s) => <A key={s.label} href={s.href} className={cn('nav-acc-link nav-acc-iconed')} onClick={closeDrawer}><img src={asset(s.icon)} alt="" className={cn('nav-acc-icon')} />{s.label}</A>)}
              <A href={routes.solutions} className={cn('nav-acc-link muted')} onClick={closeDrawer}>All solutions →</A>
            </>)}
            {accordion('cases', 'Case Studies', <>
              {casesPanel.map((s) => <A key={s.label} href={s.href} className={cn('nav-acc-link')} onClick={closeDrawer}>{s.label}</A>)}
              <A href={routes.cases} className={cn('nav-acc-link muted')} onClick={closeDrawer}>See all case studies →</A>
            </>)}
            {accordion('company', 'Company', <>
              <A href={routes.about} className={cn('nav-acc-link')} onClick={closeDrawer}>About Us</A>
              <A href={routes.newsroom} className={cn('nav-acc-link')} onClick={closeDrawer}>Newsroom</A>
              <A href={external.brandAssets} download className={cn('nav-acc-link')} onClick={closeDrawer}>Brand Assets</A>
              <div className={cn('nav-acc-social')}><SocialLinks /></div>
            </>)}
          </div>
          <div className={cn('nav-drawer-foot')}>
            <A href={routes.bookDemo} className={cn('nav-drawer-cta')} onClick={closeDrawer}>Take a Tour</A>
          </div>
        </aside>
      </div>
    </>
  );
}
