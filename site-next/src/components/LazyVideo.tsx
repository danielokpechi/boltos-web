'use client';
// Muted, looping hero video that only downloads once it scrolls into view,
// plays while visible, and has play/pause + mute buttons. The video and the two
// buttons keep the classes the page styles them with.
import { useEffect, useRef, useState } from 'react';

const ICON = { fill: '#F7F7F5', stroke: '#F7F7F5' };
const PlayIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill={ICON.fill} aria-hidden="true"><path d="M8 5.5v13l11-6.5z"></path></svg>;
const PauseIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill={ICON.fill} aria-hidden="true"><path d="M7 5h3.2v14H7zM13.8 5H17v14h-3.2z"></path></svg>;
const MutedIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill={ICON.fill} aria-hidden="true">
    <path d="M4 9.5h3.2L12 5.6v12.8L7.2 14.5H4z"></path>
    <path d="M15.6 9.6l4.8 4.8M20.4 9.6l-4.8 4.8" fill="none" stroke={ICON.stroke} strokeWidth="1.8" strokeLinecap="round"></path>
  </svg>
);
const SoundIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill={ICON.fill} aria-hidden="true">
    <path d="M4 9.5h3.2L12 5.6v12.8L7.2 14.5H4z"></path>
    <path d="M15.4 8.4a5 5 0 0 1 0 7.2" fill="none" stroke={ICON.stroke} strokeWidth="1.8" strokeLinecap="round"></path>
    <path d="M17.9 6a8.3 8.3 0 0 1 0 12" fill="none" stroke={ICON.stroke} strokeWidth="1.8" strokeLinecap="round"></path>
  </svg>
);

export default function LazyVideo({ src, poster, videoClassName, controlsClassName, buttonClassName }: {
  src: string; poster: string; videoClassName?: string; controlsClassName?: string; buttonClassName?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(true);
  const userPaused = useRef(false);
  const visible = useRef(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (!('IntersectionObserver' in window)) { setLoaded(true); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        visible.current = e.isIntersecting;
        if (e.isIntersecting) { setLoaded(true); if (!userPaused.current) el.play().catch(() => {}); }
        else el.pause();
      });
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Setting src starts the download; play once it's there if still in view.
  useEffect(() => {
    if (loaded && visible.current && !userPaused.current) ref.current?.play().catch(() => {});
  }, [loaded]);

  const togglePlay = () => {
    const el = ref.current; if (!el) return;
    setLoaded(true);
    if (el.paused) { userPaused.current = false; el.play().catch(() => {}); }
    else { userPaused.current = true; el.pause(); }
  };

  return (
    <>
      <video
        ref={ref} className={videoClassName} poster={poster} preload="none" src={loaded ? src : undefined}
        muted={muted} loop playsInline
        onPlay={() => setPaused(false)} onPause={() => setPaused(true)}
      />
      <div className={controlsClassName}>
        <button type="button" aria-label="Play or pause the video" className={buttonClassName} onClick={togglePlay}>{paused ? <PlayIcon /> : <PauseIcon />}</button>
        <button type="button" aria-label="Mute or unmute the video" className={buttonClassName} onClick={() => setMuted((m) => !m)}>{muted ? <MutedIcon /> : <SoundIcon />}</button>
      </div>
    </>
  );
}
