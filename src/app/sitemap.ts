import type { MetadataRoute } from 'next'

const base = 'https://bagr-vykopy.cz'

const cities = [
  'vykopove-prace-havirov',
  'vykopove-prace-ostrava',
  'vykopove-prace-frydek-mistek',
  'vykopove-prace-karvina',
  'vykopove-prace-trinec',
]

const services = [
  'zemni-a-vykopove-prace',
  'vodovodni-a-kanalizacni-pripojky',
  'demolice-domu-a-chaty',
  'terenni-upravy-pozemku',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-21')
  return [
    {
      url: base,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...cities.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...services.map((slug) => ({
      url: `${base}/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
