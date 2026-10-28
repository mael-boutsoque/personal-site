"use client"

import * as React from "react"
import { DirectionProvider } from "@/components/ui/direction"
import { messages, type Language, type NestedKeyOf } from "@/lib/messages"

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: NestedKeyOf<typeof messages.en>) => string
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

const directionMap: Record<Language, "ltr" | "rtl"> = {
  en: "ltr",
  fr: "ltr",
}

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: React.ReactNode
  initialLang?: Language
}) {
  const [lang, setLangState] = React.useState<Language>(initialLang)

  React.useEffect(() => {
    setLangState(initialLang)
  }, [initialLang])

  const setLang = React.useCallback((l: Language) => {
    setLangState(l)
  }, [])

  const t = React.useCallback(
    (key: NestedKeyOf<typeof messages.en>) =>
      key.split(".").reduce<unknown>(
        (acc, part) => (acc as Record<string, unknown>)[part],
        messages[lang]
      ) as string,
    [lang]
  )

  React.useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = React.useMemo(
    () => ({ lang, setLang, t }),
    [lang, setLang, t]
  )

  return (
    <LanguageContext.Provider value={value}>
      <DirectionProvider direction={directionMap[lang]}>
        {children}
      </DirectionProvider>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}