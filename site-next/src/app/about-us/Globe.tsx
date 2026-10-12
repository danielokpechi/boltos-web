'use client';
// Interactive cobe globe: London HQ with arcs to each team location. Auto-spins
// (unless reduced motion), drags with inertia, and pins HTML labels to markers.
import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { cx } from '@/lib/cx';
import styles from './page.module.css';

const cn = cx(styles);
const classes = (name: string) => cn(name).split(' ');

type Place = { name: string; lat: number; lon: number; side?: string };
type Loc = [number, number];

const RADIUS = 0.8;
const HQ: Loc = [51.5072, -0.1276];
const OFFSETS: Record<string, string> = {
  top: 'translate(-50%, calc(-100% - 10px))',
  left: 'translate(calc(-100% - 10px), -50%)',
  right: 'translate(10px, -50%)',
};

export default function Globe({ team }: { team: Place[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current, canvas = canvasRef.current;
    if (!root || !canvas) return;
    const places: { loc: Loc; offset: string }[] = [
      { loc: HQ, offset: OFFSETS.top },
      ...team.map((p) => ({ loc: [p.lat, p.lon] as Loc, offset: OFFSETS[p.side ?? ''] || OFFSETS.top })),
    ];
    const others = team.map((p) => [p.lat, p.lon] as Loc);

    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Start centred on ~70°E so London and the Asia-Pacific markers are both in view.
    let phi = (3 * Math.PI) / 2 - (70 * Math.PI) / 180;
    let theta = 0.28;
    let velocity = 0, dragging = false, lastX = 0, lastY = 0, size = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: 600, height: 600, phi, theta,
      dark: 1, diffuse: 1.4, mapSamples: 18000, mapBrightness: 5, mapBaseBrightness: 0.02,
      baseColor: [0.32, 0.22, 0.56], markerColor: [0.78, 0.67, 0.96], glowColor: [0.28, 0.14, 0.5],
      arcColor: [0.78, 0.67, 0.96], arcWidth: 0.6, arcHeight: 0.28,
      markers: [
        { location: HQ, size: 0.1, color: [0.95, 0.36, 0.68] },
        ...others.map((location) => ({ location, size: 0.05 })),
      ],
      arcs: others.map((to) => ({ from: HQ, to })),
    } as Parameters<typeof createGlobe>[1]);

    const resize = () => { size = canvas.offsetWidth; globe.update({ width: size, height: size }); };
    const ro = new ResizeObserver(resize); ro.observe(canvas);
    resize();

    // Mirrors cobe's internal projection so labels stay pinned to their markers.
    const project = ([lat, lon]: Loc) => {
      const r = (lat * Math.PI) / 180, a = (lon * Math.PI) / 180 - Math.PI;
      const X = -Math.cos(r) * Math.cos(a) * RADIUS, Y = Math.sin(r) * RADIUS, Z = Math.cos(r) * Math.sin(a) * RADIUS;
      const cT = Math.cos(theta), sT = Math.sin(theta), cP = Math.cos(phi), sP = Math.sin(phi);
      const x = cP * X + sP * Z;
      const y = sP * sT * X + cT * Y - cP * sT * Z;
      const depth = -sP * cT * X + sT * Y + cP * cT * Z;
      return { x: (x + 1) / 2, y: (-y + 1) / 2, depth };
    };
    const placeLabels = () => {
      places.forEach(({ loc, offset }, i) => {
        const el = labelRefs.current[i]; if (!el) return;
        const p = project(loc);
        const alpha = Math.max(0, Math.min(1, p.depth / 0.25));
        el.style.opacity = String(alpha);
        el.style.transform = `translate(${p.x * size}px, ${p.y * size}px) ${offset} scale(${0.9 + alpha * 0.1})`;
      });
    };

    // Increasing phi turns the surface west-to-east, like the real Earth.
    const SPIN = 0.08;
    let last = performance.now(), visible = true, frame = 0;
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!dragging) {
        if (Math.abs(velocity) > 0.0001) { phi += velocity; velocity *= 0.94; }
        else if (!reduceMotion) phi += SPIN * dt;
      }
      globe.update({ phi, theta });
      placeLabels();
      frame = visible ? requestAnimationFrame(tick) : 0;
    };
    frame = requestAnimationFrame(tick);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame) { last = performance.now(); frame = requestAnimationFrame(tick); }
    });
    io.observe(root);

    const down = (e: PointerEvent) => {
      dragging = true; velocity = 0; lastX = e.clientX; lastY = e.clientY;
      root.classList.add(...classes('is-dragging'));
      root.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      velocity = (dx / (size || 1)) * 3;
      phi += velocity;
      theta = Math.max(-0.6, Math.min(0.9, theta + (dy / (size || 1)) * 2));
    };
    const release = () => { dragging = false; root.classList.remove(...classes('is-dragging')); };
    root.addEventListener('pointerdown', down);
    root.addEventListener('pointermove', move);
    root.addEventListener('pointerup', release);
    root.addEventListener('pointercancel', release);
    const readyRaf = requestAnimationFrame(() => root.classList.add(...classes('is-ready')));

    return () => {
      cancelAnimationFrame(frame); cancelAnimationFrame(readyRaf);
      ro.disconnect(); io.disconnect();
      root.removeEventListener('pointerdown', down);
      root.removeEventListener('pointermove', move);
      root.removeEventListener('pointerup', release);
      root.removeEventListener('pointercancel', release);
      globe.destroy();
    };
  }, [team]);

  return (
    <div ref={rootRef} className={cn('ab-globe')} aria-label="Globe showing BoltOS headquarters in London and team locations in India, Pakistan, the UAE, Malaysia and Australia" role="img">
      <canvas ref={canvasRef} className={cn('ab-globe-canvas')}></canvas>
      <div className={cn('ab-globe-labels')} aria-hidden="true">
        <span ref={(el) => { labelRefs.current[0] = el; }} className={cn('ab-globe-label is-hq')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>London HQ
        </span>
        {team.map((p, i) => (
          <span key={p.name} ref={(el) => { labelRefs.current[i + 1] = el; }} className={cn('ab-globe-label')}>{p.name}</span>
        ))}
      </div>
    </div>
  );
}
