import type { MetadataRoute } from 'next'

const base = 'https://bagr-vykopy.cz'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: base,
      lastModified: new Date('2026-07-17'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/vykopove-prace-havirov`,
      lastModified: new Date('2026-07-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/vykopove-prace-ostrava`,
      lastModified: new Date('2026-07-17'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
