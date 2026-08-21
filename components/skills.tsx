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
import { useLanguage } from "@/components/language-provider"

interface CardData {
  id: string
  title: string
  description?: string
  icon?: React.ReactNode
}

export function Skills() {
  const { t } = useLanguage()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  const categories = [
    { key: "low-level", label: t("skills.categories.low-level") },
    { key: "high-level", label: t("skills.categories.high-level") },
    { key: "apps", label: t("skills.categories.apps") },
    { key: "pcb", label: t("skills.categories.pcb") },
    { key: "data", label: t("skills.categories.data") },
    { key: "languages", label: t("skills.categories.languages") },
  ]

  const tabGroups: Record<string, CardData[]> = {
    "low-level": [
      { id: "c", title: t("skills.lowLevel.c.title"), description: t("skills.lowLevel.c.description"), icon: <Icon icon="simple-icons:c" className="h-8 w-8" /> },
      { id: "cpp", title: t("skills.lowLevel.cpp.title"), description: t("skills.lowLevel.cpp.description"), icon: <Icon icon="simple-icons:cplusplus" className="h-8 w-8" /> },
      { id: "assembly", title: t("skills.lowLevel.assembly.title"), description: t("skills.lowLevel.assembly.description"), icon: <Icon icon="icons8:settings" className="h-8 w-8" /> },
      { id: "arduino", title: t("skills.lowLevel.arduino.title"), description: t("skills.lowLevel.arduino.description"), icon: <Icon icon="simple-icons:arduino" className="h-8 w-8" /> },
      { id: "hal", title: t("skills.lowLevel.hal.title"), description: t("skills.lowLevel.hal.description"), icon: <Icon icon="icons8:services" className="h-8 w-8" /> },
      { id: "bare-metal", title: t("skills.lowLevel.bareMetal.title"), description: t("skills.lowLevel.bareMetal.description"), icon: <Icon icon="icons8:settings" className="h-8 w-8" /> },
      { id: "rtos", title: t("skills.lowLevel.rtos.title"), description: t("skills.lowLevel.rtos.description"), icon: <Icon icon="icons8:sort" className="h-8 w-8" /> },
    ],
    "high-level": [
      { id: "python", title: t("skills.highLevel.python.title"), description: t("skills.highLevel.python.description"), icon: <Icon icon="simple-icons:python" className="h-8 w-8" /> },
      { id: "java", title: t("skills.highLevel.java.title"), description: t("skills.highLevel.java.description"), icon: <Icon icon="devicon:java" className="h-8 w-8" /> },
      { id: "matlab", title: t("skills.highLevel.matlab.title"), description: t("skills.highLevel.matlab.description"), icon: <Icon icon="devicon:matlab" className="h-8 w-8" /> },
      { id: "git", title: t("skills.highLevel.git.title"), description: t("skills.highLevel.git.description"), icon: <Icon icon="simple-icons:git" className="h-8 w-8" /> },
      { id: "cicd", title: t("skills.highLevel.cicd.title"), description: t("skills.highLevel.cicd.description"), icon: <Icon icon="icons8:refresh" className="h-8 w-8" /> },
      { id: "cmake", title: t("skills.highLevel.cmake.title"), description: t("skills.highLevel.cmake.description"), icon: <Icon icon="simple-icons:cmake" className="h-8 w-8" /> },
    ],
    apps: [
      { id: "office", title: t("skills.apps.office.title"), description: t("skills.apps.office.description"), icon: <Icon icon="icons8:word" className="h-8 w-8" /> },
      { id: "latex", title: t("skills.apps.latex.title"), description: t("skills.apps.latex.description"), icon: <Icon icon="simple-icons:latex" className="h-8 w-8" /> },
      { id: "vscode", title: t("skills.apps.vscode.title"), description: t("skills.apps.vscode.description"), icon: <Icon icon="devicon:vscode" className="h-8 w-8" /> },
      { id: "eclipse", title: t("skills.apps.eclipse.title"), description: t("skills.apps.eclipse.description"), icon: <Icon icon="simple-icons:eclipseide" className="h-8 w-8" /> },
      { id: "stm32-suite", title: t("skills.apps.stm32Suite.title"), description: t("skills.apps.stm32Suite.description"), icon: <Icon icon="icons8:sensor" className="h-8 w-8" /> },
    ],
    pcb: [
      { id: "altium", title: t("skills.pcb.altium.title"), description: t("skills.pcb.altium.description"), icon: <Icon icon="icons8:puzzle" className="h-8 w-8" /> },
      { id: "kicad", title: t("skills.pcb.kicad.title"), description: t("skills.pcb.kicad.description"), icon: <Icon icon="simple-icons:kicad" className="h-8 w-8" /> },
      { id: "fusion-360", title: t("skills.pcb.fusion360.title"), description: t("skills.pcb.fusion360.description"), icon: <Icon icon="icons8:puzzle" className="h-8 w-8" /> },
      { id: "eurocircuit", title: t("skills.pcb.eurocircuit.title"), description: t("skills.pcb.eurocircuit.description"), icon: <Icon icon="icons8:puzzle" className="h-8 w-8" /> },
    ],
    data: [
      { id: "sql", title: t("skills.data.sql.title"), description: t("skills.data.sql.description"), icon: <Icon icon="icons8:database" className="h-8 w-8" /> },
      { id: "json", title: t("skills.data.json.title"), description: t("skills.data.json.description"), icon: <Icon icon="simple-icons:json" className="h-8 w-8" /> },
      { id: "ai-datasets", title: t("skills.data.aiDatasets.title"), description: t("skills.data.aiDatasets.description"), icon: <Icon icon="icons8:database" className="h-8 w-8" /> },
      { id: "ai-training", title: t("skills.data.aiTraining.title"), description: t("skills.data.aiTraining.description"), icon: <Icon icon="icons8:idea" className="h-8 w-8" /> },
    ],
    languages: [
      { id: "french", title: t("skills.languages.french.title"), description: t("skills.languages.french.description"), icon: <Icon icon="icons8:student" className="h-8 w-8" /> },
      { id: "english", title: t("skills.languages.english.title"), description: t("skills.languages.english.description"), icon: <Icon icon="icons8:student" className="h-8 w-8" /> },
      { id: "spanish", title: t("skills.languages.spanish.title"), description: t("skills.languages.spanish.description"), icon: <Icon icon="icons8:student" className="h-8 w-8" /> },
    ],
  }

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
        <SectionTitle id="03" title={t("nav.skills")} />

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