import type { Metadata } from 'next';
import './globals.css';
import './tokens.css';

export const metadata: Metadata = {
  title: { default: 'Django Technologies — inteligência quantitativa', template: '%s — Django Technologies' },
  description:
    'Plataforma de inteligência quantitativa com dados, indicadores, métricas de risco e simulações históricas.',
  metadataBase: new URL('https://www.djangotechnologies.com'),
  openGraph: {
    title: 'Django Technologies',
    description: 'Dados de mercado, indicadores quantitativos e painéis analíticos para acompanhar mercados com método.',
    url: 'https://www.djangotechnologies.com',
    siteName: 'Django Technologies',
    images: ['/og.png'],
    type: 'website',
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
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
