import { MetadataRoute } from 'next'
import { i18n } from '@/i18n-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.juglans.ai' // IMPORTANT: Change this to your domain

  // List of your static pages
  const pages = [
    '', // Represents the homepage
    '/what-is-vibe-trading'
  ]

  // Generate a sitemap entry for each page in each language
  const sitemapEntries = pages.flatMap(page => 
    i18n.locales.map(locale => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
    }))
  );

  return sitemapEntries;
}