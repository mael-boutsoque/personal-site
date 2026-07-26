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
    <main className="min-h-screen flex flex-col items-center justify-center px-4 gap-6">
      <div className="flex items-center gap-2 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-sm text-amber-600 dark:text-amber-400">
        <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <span>This project page is under development.</span>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-4 text-muted-foreground max-w-xl">
          {project.excerpt}
        </p>
      </div>
    </main>
  )
}
