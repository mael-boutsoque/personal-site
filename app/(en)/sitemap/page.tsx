import type { Metadata } from "next"
import { SitemapPage, sitemapMetadata } from "@/components/pages/sitemap-page"

export const metadata: Metadata = sitemapMetadata("en")

export default function Sitemap() {
  return <SitemapPage lang="en" />
}
