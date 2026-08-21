"use client"

import { useEffect, useRef } from "react"
import { Mail } from "lucide-react"
import { CTASection } from "@/components/hero-dithering-card"
import { Skills } from "@/components/skills"
import { GlassBlogCard } from "@/components/ui/glass-blog-card-shadcnui"
import { SectionTitle } from "@/components/ui/section-title"
import { Footer } from "@/components/ui/footer"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedCard } from "@/components/ui/animated-card"
import { ExperienceAccordion, type CardItem } from "@/components/experience-accordion"
import { useLanguage } from "@/components/language-provider"

export default function HomeContent() {
  const { t } = useLanguage()

  const schools: CardItem[] = [
    {
      id: "ensem",
      name: t("education.schools.ensem.name"),
      logo: "/schools/ensem.webp",
      school: t("education.schools.ensem.school"),
      url: "https://ensem.univ-lorraine.fr",
      location: t("education.schools.ensem.location"),
      date: t("education.schools.ensem.date"),
      courses: [
        t("education.schools.ensem.courses.0"),
        t("education.schools.ensem.courses.1"),
        t("education.schools.ensem.courses.2"),
        t("education.schools.ensem.courses.3"),
        t("education.schools.ensem.courses.4"),
        t("education.schools.ensem.courses.5"),
        t("education.schools.ensem.courses.6"),
      ],
    },
    {
      id: "upc",
      name: t("education.schools.upc.name"),
      logo: "/schools/etseib.webp",
      school: t("education.schools.upc.school"),
      url: "https://etseib.upc.edu",
      location: t("education.schools.upc.location"),
      date: t("education.schools.upc.date"),
      courses: [
        t("education.schools.upc.courses.0"),
        t("education.schools.upc.courses.1"),
        t("education.schools.upc.courses.2"),
        t("education.schools.upc.courses.3"),
      ],
    },
    {
      id: "cpge",
      name: t("education.schools.cpge.name"),
      logo: "/schools/prepa-troyes.webp",
      school: t("education.schools.cpge.school"),
      url: "https://www.lyceechrestiendetroyes.fr",
      location: t("education.schools.cpge.location"),
      date: t("education.schools.cpge.date"),
      courses: [
        t("education.schools.cpge.courses.0"),
        t("education.schools.cpge.courses.1"),
        t("education.schools.cpge.courses.2"),
        t("education.schools.cpge.courses.3"),
        t("education.schools.cpge.courses.4"),
      ],
    },
  ]

  const experiences: CardItem[] = [
    {
      id: "quandela",
      name: t("experience.items.quandela.name"),
      logo: "/experiences/quandela.webp",
      school: t("experience.items.quandela.school"),
      url: "https://www.quandela.com",
      location: t("experience.items.quandela.location"),
      date: t("experience.items.quandela.date"),
      courses: [
        t("experience.items.quandela.courses.0"),
        t("experience.items.quandela.courses.1"),
        t("experience.items.quandela.courses.2"),
        t("experience.items.quandela.courses.3"),
      ],
    },
  ]

  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) window.location.reload()
    }
    const nav = performance.getEntriesByType?.("navigation")?.[0] as PerformanceNavigationTiming | undefined
    if (nav?.type === "back_forward") {
      window.location.reload()
    }
    window.addEventListener("pageshow", onPageShow)
    return () => window.removeEventListener("pageshow", onPageShow)
  }, [])

  return (
    <>
      <CTASection />
      <section id="education" className="w-full px-4 md:px-6 py-24 md:py-32">
        <AnimatedSection className="max-w-6xl mx-auto">
          <SectionTitle id="01" title={t("nav.education")} />
          <ExperienceAccordion items={schools} />
        </AnimatedSection>
      </section>
      <section id="experience" className="w-full px-4 md:px-6 py-24 md:py-32">
        <AnimatedSection className="max-w-6xl mx-auto">
          <SectionTitle id="02" title={t("home.experience")} />
          <ExperienceAccordion items={experiences} hoverTitle={t("home.hoverTitle")} />
        </AnimatedSection>
      </section>
      <section id="projects" className="w-full px-4 md:px-6 py-24 md:py-32">
        <AnimatedSection className="max-w-6xl mx-auto">
          <SectionTitle id="03" title={t("nav.projects")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard index={0}>
              <GlassBlogCard
                title={t("projects.items.protocol.title")}
                excerpt={t("projects.items.protocol.excerpt")}
                image="/projects/communication-protocol-migration/main.png"
                url="/projects/communication-protocol-migration"
                tags={t("projects.items.protocol.tags") as unknown as string[]}
              />
            </AnimatedCard>
            <AnimatedCard index={1}>
              <GlassBlogCard
                title={t("projects.items.hub.title")}
                excerpt={t("projects.items.hub.excerpt")}
                image="/projects/board-design/main.png"
                url="/projects/multifunction-hub-pcb-design"
                tags={t("projects.items.hub.tags") as unknown as string[]}
              />
            </AnimatedCard>
            <AnimatedCard index={2}>
              <GlassBlogCard
                title={t("projects.items.eco.title")}
                excerpt={t("projects.items.eco.excerpt")}
                image="/projects/eco-marathon/main.webp"
                url="/projects/ensem-eco-marathon"
                tags={t("projects.items.eco.tags") as unknown as string[]}
              />
            </AnimatedCard>
            <AnimatedCard index={3}>
              <GlassBlogCard
                title={t("projects.items.robot.title")}
                excerpt={t("projects.items.robot.excerpt")}
                image="/projects/autonomous-car/main.png"
                url="/projects/autonomous-robot"
                tags={t("projects.items.robot.tags") as unknown as string[]}
              />
            </AnimatedCard>
          </div>
        </AnimatedSection>
      </section>
      <Skills />
      <Footer
        logo={
          <svg viewBox="0 0 900 900" className="h-6 w-6" fill="currentColor">
            <g transform="translate(0,900) scale(0.1,-0.1)">
              <path d="M3020 6065 c-191 -36 -334 -97 -482 -207 -234 -174 -393 -430 -443 -715 -23 -132 -23 -1475 0 -1530 52 -123 182 -182 316 -141 53 16 113 69 141 126 l23 47 5 720 c5 717 5 720 28 788 31 92 113 210 194 277 121 102 252 150 408 150 227 0 413 -104 541 -303 53 -82 79 -171 89 -297 8 -117 25 -163 82 -217 45 -44 96 -63 168 -63 131 0 219 77 249 218 6 29 11 71 11 94 0 106 66 257 155 356 229 253 604 284 870 72 109 -86 180 -198 216 -338 18 -71 19 -116 19 -762 0 -575 2 -694 15 -736 39 -132 179 -203 319 -162 55 16 138 99 154 154 9 31 12 222 12 746 0 763 -2 796 -55 955 -62 183 -141 310 -279 449 -134 134 -251 209 -414 268 -417 149 -881 43 -1193 -275 l-75 -77 -66 68 c-139 145 -317 253 -503 306 -151 44 -365 56 -505 29z" />
              <path d="M4862 5194 c-160 -80 -187 -285 -54 -406 120 -109 313 -72 386 74 49 99 31 204 -49 283 -80 80 -184 98 -283 49z" />
              <path d="M3099 5170 c-20 -11 -51 -33 -68 -51 -53 -53 -66 -86 -66 -174 0 -89 12 -121 67 -175 63 -63 163 -86 259 -60 47 13 114 72 141 124 30 57 30 165 0 222 -24 47 -81 100 -128 120 -49 21 -161 17 -205 -6z" />
              <path d="M2200 3208 c-37 -22 -64 -49 -85 -82 -27 -44 -30 -58 -30 -131 0 -73 3 -87 30 -131 101 -163 352 -150 436 23 27 56 30 149 7 204 -41 95 -126 149 -236 149 -59 0 -75 -4 -122 -32z" />
              <path d="M5764 3226 c-46 -20 -102 -74 -126 -120 -30 -57 -30 -165 0 -222 27 -52 94 -111 141 -124 96 -26 196 -3 259 60 55 54 67 86 67 175 0 88 -13 121 -66 174 -51 52 -99 71 -176 71 -37 -1 -82 -7 -99 -14z" />
            </g>
          </svg>
        }
        brandName="Mael"
        socialLinks={[
          { icon: <Mail className="h-4 w-4" />, href: "mailto:mael.boutsoque@gmail.com", label: t("nav.email") },
          { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>, href: "https://github.com/mael-boutsoque", label: t("nav.github") },
          { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, href: "https://linkedin.com/in/mael-boutsoque", label: t("nav.linkedin") },
        ]}
        mainLinks={[
          { href: "#hero", label: t("nav.home") },
          { href: "#education", label: t("nav.education") },
          { href: "#experience", label: t("home.experience") },
          { href: "#projects", label: t("nav.projects") },
          { href: "#skills", label: t("nav.skills") },
        ]}
        legalLinks={[
          { href: "/legal-notice", label: t("home.legalNotice") },
        ]}
        copyright={{ text: `© ${new Date().getFullYear()} Maël Boutsoque. ${t("home.rights")}` }}
      />
    </>
  )
}