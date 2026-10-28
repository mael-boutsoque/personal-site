import type { MetadataRoute } from "next"
import { projectImages, projectOrder } from "@/lib/projects"
import { siteUrl } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/sitemap/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/legal-notice/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projectOrder.map((slug) => {
    const image = projectImages[slug]

    return {
      url: `${siteUrl}/projects/${slug}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      ...(image ? { images: [`${siteUrl}${image}`] } : {}),
    }
  })

  return [...staticRoutes, ...projectRoutes]
}
