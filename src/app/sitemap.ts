import type { MetadataRoute } from 'next';

/**
 * Produto e empresa primeiro. Rotas históricas continuam publicadas, com prioridade baixa.
 * `/reports` fica fora do sitemap porque a página é `noindex` (arquivo histórico).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.djangotechnologies.com';
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/memorando`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/insights`, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/strategies`, changeFrequency: 'yearly', priority: 0.1 },
  ];
}
