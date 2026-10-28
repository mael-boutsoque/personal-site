import Link from "next/link"
import type { Metadata } from "next"
import { localizedPath } from "@/lib/i18n"
import { legalNoticeContent } from "@/lib/legal-notice"
import type { Language } from "@/lib/messages"
import { pageMetadata } from "@/lib/seo"

export function legalNoticeMetadata(lang: Language): Metadata {
  const content = legalNoticeContent[lang]

  return pageMetadata({
    title: content.title,
    description: content.metaDescription,
    path: "/legal-notice",
    lang,
  })
}

export function LegalNoticePage({ lang }: { lang: Language }) {
  const content = legalNoticeContent[lang]

  return (
    <main className="min-h-screen px-4 md:px-6 py-24">
      <div className="mx-auto max-w-3xl space-y-10">
        <Link
          href={localizedPath(lang, "/")}
          className="text-sm text-primary underline-offset-4 hover:underline"
        >
          {content.back}
        </Link>

        <header className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{content.title}</h1>
          <p className="text-muted-foreground">{content.subtitle}</p>
        </header>

        {content.sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
            {section.contact && (
              <p className="text-sm text-foreground leading-relaxed">
                {content.contactLabel}:{" "}
                <a
                  href="mailto:mael.boutsoque@gmail.com"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  mael.boutsoque@gmail.com
                </a>
              </p>
            )}
          </section>
        ))}
      </div>
    </main>
  )
}
