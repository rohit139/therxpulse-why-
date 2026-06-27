import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/motion/SmoothScrollProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

const SITE_URL = 'https://why.therxpulse.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TheRxPulse — Commercial Intelligence for Pharmaceutical Leaders',
    template: '%s · TheRxPulse',
  },
  description:
    'Transform fragmented market signals into strategic decisions. Decades of pharmaceutical expertise, enhanced by intelligent automation. Better decisions. Earlier insights. Higher confidence.',
  applicationName: 'TheRxPulse',
  keywords: [
    'pharmaceutical commercial intelligence',
    'market clarity',
    'decision intelligence',
    'competitive awareness',
    'portfolio visibility',
    'pharma strategy',
  ],
  authors: [{ name: 'TheRxPulse' }],
  creator: 'TheRxPulse',
  publisher: 'TheRxPulse',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'TheRxPulse',
    title: 'Commercial Intelligence for Pharmaceutical Leaders',
    description:
      'Transform fragmented market signals into strategic decisions through decades of pharmaceutical expertise enhanced by intelligent automation.',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'TheRxPulse — Commercial Intelligence for Pharmaceutical Leaders',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Intelligence for Pharmaceutical Leaders',
    description:
      'Transform fragmented market signals into strategic decisions. Better decisions. Earlier insights. Higher confidence.',
    images: ['/og.svg'],
  },
  robots: { index: true, follow: true },
  category: 'technology',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'TheRxPulse',
  url: SITE_URL,
  description:
    'Commercial Intelligence for Pharmaceutical Leaders. Transform fragmented market signals into strategic decisions.',
  publisher: { '@type': 'Organization', name: 'TheRxPulse' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-canvas text-ink-900 font-sans antialiased">
        <SmoothScrollProvider />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}