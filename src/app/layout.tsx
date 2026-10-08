import type { Metadata } from 'next';
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './tokens.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const interTight = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

const DESCRIPTION =
  'Django AI é o app da Django Technologies para acompanhar ações brasileiras com rankings quantitativos, notícias com contexto e análises por ativo.';

export const metadata: Metadata = {
  title: { default: 'Django Technologies | Django AI', template: '%s — Django Technologies' },
  description: DESCRIPTION,
  metadataBase: new URL('https://www.djangotechnologies.com'),
  openGraph: {
    title: 'Django AI — by Django Technologies',
    description: DESCRIPTION,
    url: 'https://www.djangotechnologies.com',
    siteName: 'Django Technologies',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Django AI — by Django Technologies',
    description: DESCRIPTION,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/x-icon' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
