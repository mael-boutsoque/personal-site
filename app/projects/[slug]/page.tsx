import { notFound } from "next/navigation"

const projects = {
  "communication-protocol-migration": {
    title: "Communication Protocol Migration",
    excerpt: "Migrated 2 proprietary protocols: QDL (RS485, AVR to STM32) using standard C libraries, and QDL Fast (Ethernet, Linux to STM32) using HAL and FreeRTOS.",
  },
  "multifunction-hub-pcb-design": {
    title: "Multifunction Hub PCB Design",
    excerpt: "Designed a PCB board in Altium integrating Ethernet Hub, RS485 Hub, I2C modules, USB flash, multi-function relays, and servo motors.",
  },
  "ensem-eco-marathon": {
    title: "ENSEM Eco Marathon",
    excerpt: "Design and manufacture of a test bench to measure vehicle performance for a race organized by Shell. Secondary car driver.",
  },
  "autonomous-robot": {
    title: "Autonomous Robot",
    excerpt: "Controlled an autonomous geolocation robot capable of navigating optimally to a list of coordinates using Python and TCP protocols.",
  },
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-muted-foreground max-w-xl text-center">
        {project.excerpt}
      </p>
    </main>
  )
}
