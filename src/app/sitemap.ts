import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.djangotechnologies.com';
  return [
    { url: `${base}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about` },
    { url: `${base}/strategies` },
    { url: `${base}/insights` },
    { url: `${base}/reports` },
    { url: `${base}/contact` }
  ];
}
