import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://boutsoque.vercel.app"

  const staticRoutes = ["", "/legal-notice"]

  const projectSlugs = [
    "communication-protocol-migration",
    "multifunction-hub-pcb-design",
    "ensem-eco-marathon",
    "autonomous-robot",
    "arduino-system-design",
  ]

  const routes = [
    ...staticRoutes,
    ...projectSlugs.map((slug) => `/projects/${slug}`),
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }))
}
