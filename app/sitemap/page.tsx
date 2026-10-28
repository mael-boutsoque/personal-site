import Link from "next/link"
import type { Metadata } from "next"
import { projectOrder, projects } from "@/lib/projects"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Sitemap",
  description:
    "All pages of Maël Boutsoque's portfolio: home, embedded systems and hardware projects, and legal information.",
  path: "/sitemap",
})

export default function SitemapPage() {
  return (
    <main className="min-h-screen px-4 md:px-6 py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Sitemap</h1>
          <p className="text-muted-foreground">Every page of this portfolio in one place.</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Main pages
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-primary underline-offset-4 hover:underline"
              >
                Home
              </Link>
              <span className="text-muted-foreground"> — presentation, experience, skills and projects</span>
            </li>
            <li>
              <Link
                href="/legal-notice"
                className="text-primary underline-offset-4 hover:underline"
              >
                Legal Notice
              </Link>
              <span className="text-muted-foreground"> — publisher, hosting and personal data information</span>
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Projects
          </h2>
          <ul className="space-y-4">
            {projectOrder.map((slug) => {
              const project = projects[slug]
              return (
                <li key={slug}>
                  <Link
                    href={`/projects/${slug}`}
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
          Machine-readable version:{" "}
          <a href="/sitemap.xml" className="text-primary underline-offset-4 hover:underline">
            sitemap.xml
          </a>
        </p>
      </div>
    </main>
  )
}
