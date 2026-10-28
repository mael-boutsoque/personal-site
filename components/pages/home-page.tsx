import HomeContent from "@/components/home-content"
import { localizedPath } from "@/lib/i18n"
import { messages, type Language } from "@/lib/messages"
import { siteUrl } from "@/lib/site"

const knowsAbout: Record<Language, string[]> = {
  en: [
    "Embedded systems",
    "PCB design",
    "Low-level programming",
    "Real-time systems",
    "STM32",
    "FreeRTOS",
    "Altium Designer",
    "C",
    "C++",
    "Python",
  ],
  fr: [
    "Systèmes embarqués",
    "Conception de PCB",
    "Programmation bas niveau",
    "Systèmes temps réel",
    "STM32",
    "FreeRTOS",
    "Altium Designer",
    "C",
    "C++",
    "Python",
  ],
}

export function HomePage({ lang }: { lang: Language }) {
  const homeUrl = `${siteUrl}${localizedPath(lang, "/")}`
  const meta = messages[lang].meta

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Maël Boutsoque",
    alternateName: "Mael Boutsoque",
    url: homeUrl,
    image: `${siteUrl}/logo.png`,
    email: "mailto:mael.boutsoque@gmail.com",
    jobTitle: lang === "fr" ? "Ingénieur Systèmes Numériques" : "Digital Systems Engineer",
    description: meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Massy",
      addressCountry: "FR",
    },
    worksFor: {
      "@type": "Organization",
      name: "Quandela",
      url: "https://www.quandela.com",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "ENSEM",
        url: "https://ensem.univ-lorraine.fr",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "UPC — ETSEIB",
        url: "https://etseib.upc.edu",
      },
    ],
    knowsAbout: knowsAbout[lang],
    knowsLanguage: ["fr", "en", "es"],
    sameAs: [
      "https://github.com/mael-boutsoque",
      "https://linkedin.com/in/mael-boutsoque",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Maël Boutsoque",
    url: homeUrl,
    description: meta.description,
    inLanguage: lang,
    author: { "@id": `${siteUrl}/#person` },
    publisher: { "@id": `${siteUrl}/#person` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeContent />
    </>
  )
}
