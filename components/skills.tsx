"use client"

import { useRef, useState, useEffect } from "react"
import { SectionTitle } from "@/components/ui/section-title"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { AnimatedCard } from "@/components/ui/animated-card"
import { Icon } from "@iconify/react"
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper"
import { CheckIcon } from "lucide-react"

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

const categories = [
  { key: "low-level", label: "Low Level" },
  { key: "high-level", label: "High Level" },
  { key: "apps", label: "Apps" },
  { key: "pcb", label: "PCB" },
  { key: "data", label: "Data" },
  { key: "languages", label: "Languages" },
]

export function Skills() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const handler = () => {
      const scrolled = -wrapper.getBoundingClientRect().top
      const vh = window.innerHeight
      const total = categories.length * vh
      const clamped = Math.min(Math.max(scrolled, 0), total - vh)
      setActiveIndex(Math.round(clamped / vh))
      setVisible(scrolled >= 0 && scrolled <= total - vh)
    }

    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <section id="skills" className="w-full px-4 md:px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionTitle id="03" title="Skills" />

        <div ref={wrapperRef} className="relative" style={{ height: `${categories.length * 100}vh` }}>
          {/* REUI Stepper progress indicator */}
          <div
            className={`fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none transition-opacity duration-500 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Stepper
              value={activeIndex + 1}
              orientation="vertical"
              indicators={{ completed: <CheckIcon className="size-3.5" /> }}
            >
              <StepperNav className="items-start">
                {categories.map((cat, ci) => (
                  <StepperItem key={cat.key} step={ci + 1} className="relative items-start not-last:flex-1">
                    <StepperTrigger className="items-start gap-2.5 pb-12 last:pb-0">
                      <StepperIndicator className="data-[state=completed]:bg-foreground data-[state=completed]:text-background data-[state=active]:bg-foreground data-[state=active]:text-background">
                        {ci + 1}
                      </StepperIndicator>
                      <div className="mt-0.5 text-left">
                        <StepperTitle>{cat.label}</StepperTitle>
                      </div>
                    </StepperTrigger>
                    {ci < categories.length - 1 && (
                      <StepperSeparator className="group-data-[state=completed]/step:bg-foreground absolute inset-y-0 top-7 left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=vertical]/stepper-nav:h-[calc(100%-2rem)]" />
                    )}
                  </StepperItem>
                ))}
              </StepperNav>
            </Stepper>
          </div>

          {/* Sticky cards */}
          <div>
            {categories.map((cat, ci) => (
              <div
                key={cat.key}
                className={`sticky top-0 h-screen flex flex-col justify-center p-6 md:p-10 bg-card ${ci === 0 ? "rounded-2xl" : "rounded-t-2xl"}`}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {tabGroups[cat.key].map((card, i) => (
                    <AnimatedCard key={card.id} index={i}>
                      <Card size="sm" className="flex items-center gap-3 p-3 h-full">
                        {card.icon && <div className="shrink-0">{card.icon}</div>}
                        <div className="min-w-0">
                          <CardTitle className="mb-0.5 text-sm">{card.title}</CardTitle>
                          {card.description && <CardDescription className="text-xs">{card.description}</CardDescription>}
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
