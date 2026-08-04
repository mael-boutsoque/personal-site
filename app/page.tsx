import HomeContent from "@/components/home-content"

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maël Boutsoque",
  alternateName: "Mael Boutsoque",
  url: "https://boutsoque.vercel.app/",
  email: "mailto:mael.boutsoque@gmail.com",
  jobTitle: "Digital Systems Engineer",
  description:
    "Digital Systems Engineering student at ENSEM, specializing in embedded systems, low-level programming and PCB design.",
  sameAs: [
    "https://github.com/mael-boutsoque",
    "https://linkedin.com/in/mael-boutsoque",
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <HomeContent />
    </>
  )
}
