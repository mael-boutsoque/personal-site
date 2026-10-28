import type { MetadataRoute } from "next"
import { localizedPath } from "@/lib/i18n"
import type { Language } from "@/lib/messages"
import { projectImages, projectOrder } from "@/lib/projects"
import { siteUrl } from "@/lib/site"

export const dynamic = "force-static"

const languages: Language[] = ["en", "fr"]

function absoluteUrl(lang: Language, path: string) {
  return `${siteUrl}${localizedPath(lang, path)}`
}

function languageAlternates(path: string) {
  return {
    languages: {
      en: absoluteUrl("en", path),
      fr: absoluteUrl("fr", path),
      "x-default": absoluteUrl("en", path),
    },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const entries: MetadataRoute.Sitemap = []

  const staticPages = [
    { path: "/", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/sitemap", changeFrequency: "monthly" as const, priority: 0.4 },
    { path: "/legal-notice", changeFrequency: "yearly" as const, priority: 0.3 },
  ]

  for (const page of staticPages) {
    for (const lang of languages) {
      entries.push({
        url: absoluteUrl(lang, page.path),
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: languageAlternates(page.path),
      })
    }
  }

  for (const slug of projectOrder) {
    const image = projectImages[slug]
    const path = `/projects/${slug}`

    for (const lang of languages) {
      entries.push({
        url: absoluteUrl(lang, path),
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
        ...(image ? { images: [`${siteUrl}${image}`] } : {}),
        alternates: languageAlternates(path),
      })
    }
  }

  return entries
}
