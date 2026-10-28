import { FloatingHeader } from "@/components/floating-header"
import { LanguageProvider } from "@/components/language-provider"
import { LenisProvider } from "@/components/lenis-provider"
import { LoadingScreen } from "@/components/loading-screen"
import type { Language } from "@/lib/messages"

export function SiteShell({
  lang,
  children,
}: {
  lang: Language
  children: React.ReactNode
}) {
  return (
    <div lang={lang} className="contents">
      <LoadingScreen />
      <LanguageProvider initialLang={lang}>
        <LenisProvider>
          <FloatingHeader />
          {children}
        </LenisProvider>
      </LanguageProvider>
    </div>
  )
}
