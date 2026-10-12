import type { DetailedHTMLProps, HTMLAttributes } from 'react';

// <bolt-particle-wave>, the custom element defined by public/particle-wave.js.
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'bolt-particle-wave': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & { running?: string; class?: string };
    }
  }
}
