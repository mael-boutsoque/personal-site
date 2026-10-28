import type { Metadata } from "next"
import { HomePage } from "@/components/pages/home-page"
import { messages } from "@/lib/messages"
import { pageMetadata, siteTitles } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: siteTitles.fr,
  absoluteTitle: true,
  description: messages.fr.meta.description,
  path: "/",
  lang: "fr",
})

export default function Home() {
  return <HomePage lang="fr" />
}
