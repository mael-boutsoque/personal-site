import type { Language } from "@/lib/messages"

export const languages: Language[] = ["en", "fr"]

/** Returns the path for a page in the requested language, with a trailing slash. */
export function localizedPath(lang: Language, path: string) {
  const base = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`
  const prefix = lang === "fr" ? "/fr" : ""
  const localized = `${prefix}${base}`

  return localized === "" ? "/" : `${localized}/`
}

/** Removes the /fr prefix from a pathname. */
export function stripLocale(pathname: string) {
  const withoutLocale = pathname.replace(/^\/fr(?=\/|$)/, "")
  return withoutLocale || "/"
}

/** Builds the equivalent path in another language, keeping the same page. */
export function switchLocalePath(pathname: string, target: Language) {
  return localizedPath(target, stripLocale(pathname))
}

export function isFrenchPath(pathname: string) {
  return pathname === "/fr" || pathname.startsWith("/fr/")
}
