import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { asset } from '@/lib/base';
import '@/styles/global.css';
import styles from './layout.module.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://boltos.ai'),
  title: 'BoltOS, Media Technology Group',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400;500;600;700;800&family=Geist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Browser extensions can add attributes to <body> before React loads. */}
      <body style={{ background: '#0E0E12' }} suppressHydrationWarning>
        {/* Defines <bolt-particle-wave>. Loaded after hydration on purpose: the
            element adds its own <canvas>, which must not happen before React
            has matched the server HTML. Existing elements upgrade on load. */}
        <Script src={asset('/particle-wave.js')} strategy="afterInteractive" />
        <div className={styles['page-root']}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
