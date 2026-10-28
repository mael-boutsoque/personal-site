import type { Metadata } from "next"
import { ProjectPage, generateProjectMetadata } from "@/components/pages/project-page"
import { projectOrder } from "@/lib/projects"

export function generateStaticParams() {
  return projectOrder.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return generateProjectMetadata("fr", slug)
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <ProjectPage lang="fr" slug={slug} />
}
