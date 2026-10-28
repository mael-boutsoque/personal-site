import type { Metadata } from "next"
import { siteUrl } from "@/lib/site"

export const siteName = "Maël Boutsoque"

export const defaultDescription =
  "Embedded systems and hardware design portfolio by Maël Boutsoque, a Digital Systems Engineering student at ENSEM specializing in low-level programming and PCB design."

type PageMetadataOptions = {
  title?: string
  description: string
  path: string
  type?: "website" | "article" | "profile"
  image?: string
  imageAlt?: string
  noIndex?: boolean
}

/**
 * Builds consistent metadata for a page: canonical URL, Open Graph and
 * Twitter cards. The Open Graph image defaults to the generated /og route.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image,
  imageAlt,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path === "/" ? "/" : `${path.replace(/\/+$/, "")}/`
  const url = `${siteUrl}${canonicalPath}`
  const imageUrl = image ?? "/og/"
  const socialTitle = title ?? `${siteName} — Digital Systems Engineer`
  const socialImageAlt =
    imageAlt ?? (socialTitle.includes(siteName) ? socialTitle : `${socialTitle} — ${siteName}`)
  const socialImage = {
    url: imageUrl,
    width: 1200,
    height: 630,
    alt: socialImageAlt,
  }

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type,
      url,
      title: socialTitle,
      description,
      siteName,
      locale: "en_US",
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
