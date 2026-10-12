import type { CSSProperties } from 'react';

// Signature dotted sine field: the <bolt-particle-wave> custom element from
// public/particle-wave.js (loaded once in the root layout).
// Used static, low-opacity and radially masked in section corners.
export default function ParticleWave({ running = false, className, style }: { running?: boolean; className?: string; style?: CSSProperties }) {
  return <bolt-particle-wave running={String(running)} class={className} style={style ?? { position: 'absolute', inset: 0 }} />;
}
