import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bagr-vykopy.cz',
      lastModified: new Date('2025-10-01'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
