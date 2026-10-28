import type { Metadata } from "next"
import { localizedPath } from "@/lib/i18n"
import type { Language } from "@/lib/messages"
import { siteUrl } from "@/lib/site"

export const siteName = "Maël Boutsoque"

export const siteTitles: Record<Language, string> = {
  en: "Maël Boutsoque | Digital Systems Engineer",
  fr: "Maël Boutsoque | Ingénieur Systèmes Numériques",
}

export const siteDescriptions: Record<Language, string> = {
  en: "Embedded systems and hardware design portfolio by Maël Boutsoque, a Digital Systems Engineering student at ENSEM specializing in low-level programming and PCB design.",
  fr: "Portfolio de conception matérielle et systèmes embarqués par Maël Boutsoque, étudiant en Ingénierie des Systèmes Numériques à l'ENSEM, spécialisé en programmation bas niveau et conception de PCB.",
}

export const defaultDescription = siteDescriptions.en

type PageMetadataOptions = {
  title?: string
  absoluteTitle?: boolean
  description: string
  path: string
  lang?: Language
  type?: "website" | "article" | "profile"
  image?: string
  imageAlt?: string
  noIndex?: boolean
}

/**
 * Builds consistent metadata for a page: localized canonical URL, hreflang
 * alternates, Open Graph and Twitter cards. The Open Graph image defaults to
 * the generated /og route using the page title and description.
 */
export function pageMetadata({
  title,
  absoluteTitle = false,
  description,
  path,
  lang = "en",
  type = "website",
  image,
  imageAlt,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const otherLang: Language = lang === "en" ? "fr" : "en"
  const canonicalPath = localizedPath(lang, path)
  const url = `${siteUrl}${canonicalPath}`
  const socialTitle = title ?? siteTitles[lang]
  const imageUrl = image ?? ogImageUrl(socialTitle, description)
  const socialImageAlt =
    imageAlt ?? (socialTitle.includes(siteName) ? socialTitle : `${socialTitle} — ${siteName}`)
  const socialImage = {
    url: imageUrl,
    width: 1200,
    height: 630,
    alt: socialImageAlt,
  }
  const metadataTitle = title
    ? absoluteTitle
      ? { absolute: title }
      : title
    : undefined

  return {
    ...(metadataTitle ? { title: metadataTitle } : {}),
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: `${siteUrl}${localizedPath("en", path)}`,
        fr: `${siteUrl}${localizedPath("fr", path)}`,
        "x-default": `${siteUrl}${localizedPath("en", path)}`,
      },
    },
    openGraph: {
      type,
      url,
      title: socialTitle,
      description,
      siteName,
      locale: lang === "fr" ? "fr_FR" : "en_US",
      alternateLocale: otherLang === "fr" ? "fr_FR" : "en_US",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  }
}

/** Builds a URL for the dynamic Open Graph image endpoint. */
export function ogImageUrl(title?: string, subtitle?: string) {
  const params = new URLSearchParams()
  if (title) params.set("title", title)
  if (subtitle) params.set("subtitle", subtitle)
  const query = params.toString()
  return query ? `/og/?${query}` : "/og/"
}
