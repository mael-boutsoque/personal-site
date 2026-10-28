import type { Metadata } from "next"
import { HomePage } from "@/components/pages/home-page"
import { messages } from "@/lib/messages"
import { pageMetadata, siteTitles } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: siteTitles.en,
  absoluteTitle: true,
  description: messages.en.meta.description,
  path: "/",
  lang: "en",
})

export default function Home() {
  return <HomePage lang="en" />
}
