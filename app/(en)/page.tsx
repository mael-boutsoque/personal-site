import type { Metadata } from "next"
import HomeContent from "@/components/home-content"
import { defaultDescription, pageMetadata } from "@/lib/seo"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = pageMetadata({
  description: defaultDescription,
  path: "/",
})

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Maël Boutsoque",
  alternateName: "Mael Boutsoque",
  url: `${siteUrl}/`,
  image: `${siteUrl}/logo.png`,
  email: "mailto:mael.boutsoque@gmail.com",
  jobTitle: "Digital Systems Engineer",
  description:
    "Digital Systems Engineering student at ENSEM, specializing in embedded systems, low-level programming and PCB design.",
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
  knowsAbout: [
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
  url: `${siteUrl}/`,
  description: defaultDescription,
  inLanguage: "en",
  author: { "@id": `${siteUrl}/#person` },
  publisher: { "@id": `${siteUrl}/#person` },
}

export default function Home() {
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
