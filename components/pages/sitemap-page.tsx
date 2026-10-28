import Link from "next/link"
import type { Metadata } from "next"
import { localizedPath } from "@/lib/i18n"
import { messages, type Language } from "@/lib/messages"
import { getProjects, projectOrder } from "@/lib/projects"
import { pageMetadata } from "@/lib/seo"

export function sitemapMetadata(lang: Language): Metadata {
  const content = messages[lang].sitemap

  return pageMetadata({
    title: content.title,
    description: content.metaDescription,
    path: "/sitemap",
    lang,
  })
}

export function SitemapPage({ lang }: { lang: Language }) {
  const content = messages[lang].sitemap
  const projects = getProjects(lang)

  return (
    <main className="min-h-screen px-4 md:px-6 py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{content.title}</h1>
          <p className="text-muted-foreground">
            {lang === "fr"
              ? "Toutes les pages de ce portfolio au même endroit."
              : "Every page of this portfolio in one place."}
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {content.mainPages}
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href={localizedPath(lang, "/")}
                className="text-primary underline-offset-4 hover:underline"
              >
                {content.home}
              </Link>
              <span className="text-muted-foreground">{content.homeDescription}</span>
            </li>
            <li>
              <Link
                href={localizedPath(lang, "/legal-notice")}
                className="text-primary underline-offset-4 hover:underline"
              >
                {content.legalNotice}
              </Link>
              <span className="text-muted-foreground">{content.legalNoticeDescription}</span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {content.projects}
          </h2>
          <ul className="space-y-4">
            {projectOrder.map((slug) => {
              const project = projects[slug]
              return (
                <li key={slug}>
                  <Link
                    href={localizedPath(lang, `/projects/${slug}`)}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {project.title}
                  </Link>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {project.excerpt}
                  </p>
                </li>
              )
            })}
          </ul>
        </section>

        <p className="border-t pt-6 text-sm text-muted-foreground">
          {content.machineReadable}{" "}
          <a href="/sitemap.xml" className="text-primary underline-offset-4 hover:underline">
            sitemap.xml
          </a>
        </p>
      </div>
    </main>
  )
}
