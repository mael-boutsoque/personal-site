import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { BadgeCheckIcon } from "lucide-react"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { ProjectGallery } from "@/components/project-gallery"
import { ProjectFlowingMenu } from "@/components/project-flowing-menu"

const projectImages: Record<string, string> = {
  "communication-protocol-migration": "/projects/communication-protocol-migration/main.png",
  "multifunction-hub-pcb-design": "/projects/board-design/main.png",
  "ensem-eco-marathon": "/projects/eco-marathon/main.webp",
  "autonomous-robot": "/projects/autonomous-car/main.png",
  "arduino-system-design": "/projects/arduino-system-design/main.svg",
}

const projects = {
  "communication-protocol-migration": {
    title: "Communication Protocol Migration",
    excerpt: "Migrated 2 proprietary protocols: QDL (RS485, AVR to STM32) using standard C libraries, and QDL Fast (Ethernet, Linux to STM32) using HAL and FreeRTOS.",
    detail: [
      "Migrated two proprietary communication protocols onto a modern STM32 platform. The QDL protocol over RS485 was ported from an AVR microcontroller to STM32 using only standard C libraries, preserving wire compatibility.",
      "The QDL Fast variant over Ethernet was migrated from a Linux host to an embedded STM32 target using the HAL abstraction layer and FreeRTOS, enabling deterministic real-time streaming between endpoints.",
    ],
  },
  "multifunction-hub-pcb-design": {
    title: "Multifunction Hub PCB Design",
    excerpt: "Designed a PCB board in Altium integrating Ethernet Hub, RS485 Hub, I2C modules, USB flash, multi-function relays, and servo motors.",
    detail: [
      "Designed a multifunction hub printed circuit board from schematic to layout in Altium Designer. The board integrates an Ethernet hub, an RS485 hub, multiple I2C peripheral modules, USB flash memory, multi-function relays and servo motor drivers.",
      "Delivered a full manufacturing package including stack-up definition, component placement, routing, design rule checks and fabrication outputs, ready for prototype production.",
    ],
  },
  "ensem-eco-marathon": {
    title: "ENSEM Eco Marathon",
    excerpt: "Design and manufacture of a test bench to measure vehicle performance for a race organized by Shell. Secondary car driver.",
    detail: [
      "Contributed to the ENSEM Eco-marathon team, which builds an energy-efficient hydrogen prototype vehicle (PEMFC fuel cell, carbon-fibre body) to compete in the Shell Eco-marathon.",
      "Worked across hardware build and validation while also serving as the driver of the car during testing and the competition.",
    ],
    images: [
      { image: "/projects/eco-marathon/bench.png", label: "Banc d'essai (modèle CAO)" },
      { image: "/projects/eco-marathon/car.jpg", label: "La voiture - cellule hydrogène (PEMFC), corps en fibre de carbone (120 kg)" },
      { image: "/projects/eco-marathon/competition.jpg", label: "La compétition - organisée par Shell" },
    ],
    subProjects: [
      { title: "Conception de banc d'essai", status: "Fait", description: "Documentation technique, modélisation 3D, approvisionnement en composants" },
      { title: "Assemblage du banc d'essai", status: "En cours", description: "Assemblage de précision, Alignement d'arbre" },
      { title: "Pilote", status: "1 compétition", description: "Passer l'inspection technique, Suivre les instructions de la course, 4ème place" },
    ],
  },
  "autonomous-robot": {
    title: "Autonomous Robot",
    excerpt: "Controlled an autonomous geolocation robot capable of navigating optimally to a list of coordinates using Python and TCP protocols.",
    detail: [
      "Controlled an autonomous geolocation robot able to navigate optimally to a set of coordinates. The system runs in Python and communicates with the robot over TCP protocols.",
      "Implemented path planning and real-time control logic so the robot reaches each waypoint efficiently while reacting to its current position.",
    ],
  },
  "arduino-system-design": {
    title: "Arduino System Design and Development",
    excerpt: "Personal projects involving the creation of electronic systems such as a real-time radar, a remote-controlled car, and a robot arm.",
    detail: [
      "Several personal projects involving the design and development of original electronic systems, including a real-time radar, a remote-controlled car and a robot arm.",
      "Each system was built around the Arduino Framework, combining electronic circuit design, embedded programming and mechanical assembly to create fully functional prototypes.",
    ],
  },
}

const projectOrder = Object.keys(projects)

export function generateStaticParams() {
  return projectOrder.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]
  if (!project) return {}
  return {
    title: project.title,
    description: project.excerpt,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  const otherProjects = projectOrder
    .filter((key) => key !== slug)
    .map((key) => ({
      link: `/projects/${key}`,
      text: projects[key as keyof typeof projects].title,
      image: projectImages[key],
    }))

  return (
    <main className="min-h-screen px-4 md:px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link href="/#projects" className="text-sm text-primary underline-offset-4 hover:underline">
          ← Back to projects
        </Link>

        <div className="mt-8 flex items-center gap-2 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-sm text-amber-600 dark:text-amber-400">
          <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <span>This project page is under development.</span>
        </div>

        <h1 className="mt-8 text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h1>
        <div className="mt-6 space-y-4">
          {project.detail.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {"subProjects" in project && project.subProjects.length > 0 && (
          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Sub-projects
            </h2>
            <ItemGroup className="mt-4">
              {project.subProjects.map((sub, i) => (
                <Item key={i} variant="outline" className="bg-white">
                  <ItemContent>
                    <ItemTitle>{sub.title}</ItemTitle>
                    <ItemDescription>{sub.description}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    {sub.title === "Pilote" && (
                      <>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                          <BadgeCheckIcon className="size-3.5" />
                          {sub.status}
                        </span>
                      </>
                    )}
                  </ItemActions>
                </Item>
              ))}
            </ItemGroup>
          </div>
        )}

        {"images" in project && project.images.length > 0 && (
          <div className="mt-10">
            <ProjectGallery items={project.images} />
          </div>
        )}

        <div className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Other projects</h2>
          <ProjectFlowingMenu items={otherProjects} />
        </div>
      </div>
    </main>
  )
}