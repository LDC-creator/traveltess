import type { MetadataRoute } from "next"
import { destinations, experiences } from "@/lib/content"

const siteUrl = "https://bijoutravel.co.uk"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/private-villas`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...destinations.map((d) => ({
      url: `${siteUrl}/destinations/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...experiences.map((e) => ({
      url: `${siteUrl}/experiences/${e.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
