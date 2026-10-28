import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BadgeCheckIcon } from "lucide-react"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item"
import { ProjectGallery } from "@/components/project-gallery"
import { ProjectFlowingMenu } from "@/components/project-flowing-menu"
import { localizedPath } from "@/lib/i18n"
import { messages, type Language } from "@/lib/messages"
import { getProject, getProjects, projectImages, projectOrder } from "@/lib/projects"
import { pageMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site"

export function generateProjectMetadata(lang: Language, slug: string): Metadata {
  const project = getProject(lang, slug)
  if (!project) return {}

  return pageMetadata({
    title: project.title,
    description: project.excerpt,
    path: `/projects/${slug}`,
    lang,
    type: "article",
    imageAlt: `${project.title} — ${lang === "fr" ? "projet de" : "project by"} Maël Boutsoque`,
  })
}

export function ProjectPage({ lang, slug }: { lang: Language; slug: string }) {
  const project = getProject(lang, slug)

  if (!project) {
    notFound()
  }

  const labels = messages[lang].projectPage
  const projects = getProjects(lang)
  const homeUrl = `${siteUrl}${localizedPath(lang, "/")}`
  const projectUrl = `${siteUrl}${localizedPath(lang, `/projects/${slug}`)}`
  const projectImage = projectImages[slug]

  const otherProjects = projectOrder
    .filter((key) => key !== slug)
    .map((key) => ({
      link: localizedPath(lang, `/projects/${key}`),
      text: projects[key].title,
      image: projectImages[key],
    }))

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.excerpt,
    url: projectUrl,
    mainEntityOfPage: projectUrl,
    inLanguage: lang,
    author: {
      "@type": "Person",
      name: "Maël Boutsoque",
      url: homeUrl,
    },
    ...(projectImage ? { image: `${siteUrl}${projectImage}` } : {}),
    ...(project.subProjects
      ? {
          hasPart: project.subProjects.map((sub) => ({
            "@type": "CreativeWork",
            name: sub.title,
            description: sub.description,
          })),
        }
      : {}),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "fr" ? "Accueil" : "Home",
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: lang === "fr" ? "Projets" : "Projects",
        item: `${homeUrl}#projects`,
      },
      { "@type": "ListItem", position: 3, name: project.title, item: projectUrl },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen px-4 md:px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Link
            href={`${localizedPath(lang, "/")}#projects`}
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            {labels.back}
          </Link>

          <div className="mt-8 flex items-center gap-2 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-sm text-amber-600 dark:text-amber-400">
            <svg
              className="size-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span>{labels.underDevelopment}</span>
          </div>

          <h1 className="mt-8 text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h1>
          <div className="mt-6 space-y-4">
            {project.detail.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {project.subProjects && project.subProjects.length > 0 && (
            <div className="mt-10">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {labels.subProjects}
              </h2>
              <ItemGroup className="mt-4">
                {project.subProjects.map((sub, i) => (
                  <Item key={i} variant="outline" className="bg-white">
                    <ItemContent>
                      <ItemTitle>{sub.title}</ItemTitle>
                      <ItemDescription>{sub.description}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      {(sub.title === "Pilote" || sub.title === "Driver") && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                          <BadgeCheckIcon className="size-3.5" />
                          {sub.status}
                        </span>
                      )}
                    </ItemActions>
                  </Item>
                ))}
              </ItemGroup>
            </div>
          )}

          {project.images && project.images.length > 0 && (
            <div className="mt-10">
              <ProjectGallery items={project.images} />
            </div>
          )}

          <div className="mt-16">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {labels.otherProjects}
            </h2>
            <ProjectFlowingMenu items={otherProjects} />
          </div>
        </div>
      </main>
    </>
  )
}
