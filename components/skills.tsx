"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { SectionTitle } from "@/components/ui/section-title"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Icon } from "@iconify/react"

interface CardData {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
}

const tabGroups: Record<string, CardData[]> = {
  "low-level": [
    { id: "c", title: "C", description: "Low-level systems programming", icon: <Icon icon="simple-icons:c" className="h-8 w-8" /> },
    { id: "cpp", title: "C++", description: "Object-oriented / embedded C++", icon: <Icon icon="simple-icons:cplusplus" className="h-8 w-8" /> },
    { id: "assembly", title: "Assembly", description: "Low-level architecture programming", icon: <Icon icon="icons8:settings" className="h-8 w-8" /> },
    { id: "arduino", title: "Arduino", description: "Embedded prototyping framework", icon: <Icon icon="simple-icons:arduino" className="h-8 w-8" /> },
    { id: "hal", title: "HAL", description: "Hardware Abstraction Layer (STM32)", icon: <Icon icon="icons8:services" className="h-8 w-8" /> },
    { id: "bare-metal", title: "Bare Metal", description: "No-OS embedded programming", icon: <Icon icon="icons8:settings" className="h-8 w-8" /> },
    { id: "rtos", title: "FreeRTOS", description: "Real-time operating systems", icon: <Icon icon="icons8:sort" className="h-8 w-8" /> },
  ],
  "high-level": [
    { id: "python", title: "Python", description: "Data analysis / automation / scripting", icon: <Icon icon="simple-icons:python" className="h-8 w-8" /> },
    { id: "java", title: "Java", description: "Enterprise application development", icon: <Icon icon="devicon:java" className="h-8 w-8" /> },
    { id: "matlab", title: "MATLAB", description: "Numerical computing / simulation", icon: <Icon icon="devicon:matlab" className="h-8 w-8" /> },
    { id: "git", title: "Git", description: "Version control / collaboration", icon: <Icon icon="simple-icons:git" className="h-8 w-8" /> },
    { id: "cicd", title: "CI/CD", description: "Automated pipelines / integration", icon: <Icon icon="icons8:refresh" className="h-8 w-8" /> },
    { id: "cmake", title: "CMake", description: "Cross-platform build system", icon: <Icon icon="simple-icons:cmake" className="h-8 w-8" /> },
  ],
  apps: [
    { id: "office", title: "MS Office Suite", description: "Word / Excel / PowerPoint", icon: <Icon icon="icons8:word" className="h-8 w-8" /> },
    { id: "latex", title: "LaTeX", description: "Technical / scientific documentation", icon: <Icon icon="simple-icons:latex" className="h-8 w-8" /> },
    { id: "vscode", title: "VS Code", description: "Primary code editor", icon: <Icon icon="devicon:vscode" className="h-8 w-8" /> },
    { id: "eclipse", title: "Eclipse", description: "Java / embedded IDE", icon: <Icon icon="simple-icons:eclipseide" className="h-8 w-8" /> },
    { id: "stm32-suite", title: "STM32 Suite", description: "CubeMX / CubeIDE / Programmer", icon: <Icon icon="icons8:sensor" className="h-8 w-8" /> },
  ],
  pcb: [
    { id: "altium", title: "Altium", description: "Professional PCB design", icon: <Icon icon="icons8:puzzle" className="h-8 w-8" /> },
    { id: "kicad", title: "KiCad", description: "Open-source EDA suite", icon: <Icon icon="simple-icons:kicad" className="h-8 w-8" /> },
    { id: "fusion-360", title: "Fusion 360", description: "3D CAD / mechanical design", icon: <Icon icon="icons8:puzzle" className="h-8 w-8" /> },
    { id: "eurocircuit", title: "Eurocircuit", description: "PCB prototyping / manufacturing", icon: <Icon icon="icons8:puzzle" className="h-8 w-8" /> },
  ],
  data: [
    { id: "sql", title: "SQL", description: "Relational databases / queries", icon: <Icon icon="icons8:database" className="h-8 w-8" /> },
    { id: "json", title: "JSON", description: "Data interchange format", icon: <Icon icon="simple-icons:json" className="h-8 w-8" /> },
    { id: "ai-datasets", title: "AI Datasets", description: "Dataset preparation / curation", icon: <Icon icon="icons8:database" className="h-8 w-8" /> },
    { id: "ai-training", title: "AI Training", description: "Model training pipelines", icon: <Icon icon="icons8:idea" className="h-8 w-8" /> },
  ],
  languages: [
    { id: "french", title: "French", description: "Native", icon: <Icon icon="icons8:student" className="h-8 w-8" /> },
    { id: "english", title: "English", description: "B2+ (920 TOEIC)", icon: <Icon icon="icons8:student" className="h-8 w-8" /> },
    { id: "spanish", title: "Spanish", description: "Intermediate (B)", icon: <Icon icon="icons8:student" className="h-8 w-8" /> },
  ],
}

const tabMeta = [
  { value: "low-level", label: "Low Level" },
  { value: "high-level", label: "High Level" },
  { value: "apps", label: "Apps" },
  { value: "pcb", label: "PCB" },
  { value: "data", label: "Data" },
  { value: "languages", label: "Languages" },
]

const TAB_VALUES = tabMeta.map((t) => t.value)

export function Skills() {
  const [activeTab, setActiveTab] = useState("low-level")

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", containScroll: "trimSnaps", duration: 30 },
    [AutoScroll({ speed: 0.5, stopOnInteraction: true, stopOnMouseEnter: true })]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    const index = emblaApi.selectedScrollSnap()
    const value = TAB_VALUES[index]
    if (value) setActiveTab(value)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  const handleTabChange = useCallback(
    (value: string) => {
      if (!emblaApi) return
      const index = TAB_VALUES.indexOf(value)
      emblaApi.scrollTo(index)
      setActiveTab(value)
    },
    [emblaApi]
  )

  const wheelAccumulator = useRef(0)
  const SCROLL_THRESHOLD = 150

  useEffect(() => {
    if (!emblaApi) return
    const el = emblaApi.rootNode() as HTMLElement
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      const rect = el.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      if (!inView) return

      const atStart = !emblaApi.canScrollPrev()
      const atEnd = !emblaApi.canScrollNext()

      if (e.deltaY > 0 && atEnd) return
      if (e.deltaY < 0 && atStart) return

      e.preventDefault()

      wheelAccumulator.current += e.deltaY

      if (wheelAccumulator.current >= SCROLL_THRESHOLD) {
        wheelAccumulator.current = 0
        emblaApi.scrollNext()
      } else if (wheelAccumulator.current <= -SCROLL_THRESHOLD) {
        wheelAccumulator.current = 0
        emblaApi.scrollPrev()
      }
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [emblaApi])

  return (
    <section id="skills" className="w-full px-4 md:px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionTitle id="03" title="Skills" />

        <Tabs value={activeTab} onValueChange={handleTabChange}>
          <div className="flex justify-center">
            <TabsList className="mb-8 flex-wrap h-auto">
              {tabMeta.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {tabMeta.map((tab) => (
              <div key={tab.value} className="min-w-0 shrink-0 grow-0 basis-full">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pr-4">
                  {tabGroups[tab.value].map((card, i) => (
                    <AnimatedCard key={card.id} index={i}>
                      <Card size="sm" className="flex items-center gap-4 p-4">
                        {card.icon && <div className="shrink-0">{card.icon}</div>}
                        <div className="min-w-0">
                          <CardTitle className="mb-0.5">{card.title}</CardTitle>
                          {card.description && <CardDescription>{card.description}</CardDescription>}
                        </div>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
