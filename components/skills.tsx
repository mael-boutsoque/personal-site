"use client"

import { useMemo } from "react"
import { Icon } from "@iconify/react"

import { useLanguage } from "@/components/language-provider"
import { messages, type NestedKeyOf } from "@/lib/messages"
import LogoCloudSwap, { type LogoEntry } from "@/components/ui/logo-clouds"
import { SectionTitle } from "@/components/ui/section-title"

type MessageKey = NestedKeyOf<typeof messages.en>

interface SkillDefinition {
  id: string
  titleKey: MessageKey
  descriptionKey: MessageKey
  icon: string
}

interface SkillGroupDefinition {
  key: string
  labelKey: MessageKey
  skills: SkillDefinition[]
}

const SKILL_GROUPS: SkillGroupDefinition[] = [
  {
    key: "low-level",
    labelKey: "skills.categories.low-level",
    skills: [
      { id: "c", titleKey: "skills.lowLevel.c.title", descriptionKey: "skills.lowLevel.c.description", icon: "thesvg-color:c" },
      { id: "cpp", titleKey: "skills.lowLevel.cpp.title", descriptionKey: "skills.lowLevel.cpp.description", icon: "devicon:cplusplus" },
      { id: "assembly", titleKey: "skills.lowLevel.assembly.title", descriptionKey: "skills.lowLevel.assembly.description", icon: "flat-color-icons:command-line" },
      { id: "arduino", titleKey: "skills.lowLevel.arduino.title", descriptionKey: "skills.lowLevel.arduino.description", icon: "devicon:arduino" },
      { id: "hal", titleKey: "skills.lowLevel.hal.title", descriptionKey: "skills.lowLevel.hal.description", icon: "flat-color-icons:electronics" },
      { id: "bare-metal", titleKey: "skills.lowLevel.bareMetal.title", descriptionKey: "skills.lowLevel.bareMetal.description", icon: "flat-color-icons:capacitor" },
      { id: "rtos", titleKey: "skills.lowLevel.rtos.title", descriptionKey: "skills.lowLevel.rtos.description", icon: "flat-color-icons:process" },
    ],
  },
  {
    key: "high-level",
    labelKey: "skills.categories.high-level",
    skills: [
      { id: "python", titleKey: "skills.highLevel.python.title", descriptionKey: "skills.highLevel.python.description", icon: "devicon:python" },
      { id: "java", titleKey: "skills.highLevel.java.title", descriptionKey: "skills.highLevel.java.description", icon: "devicon:java" },
      { id: "matlab", titleKey: "skills.highLevel.matlab.title", descriptionKey: "skills.highLevel.matlab.description", icon: "devicon:matlab" },
      { id: "git", titleKey: "skills.highLevel.git.title", descriptionKey: "skills.highLevel.git.description", icon: "devicon:git" },
      { id: "cicd", titleKey: "skills.highLevel.cicd.title", descriptionKey: "skills.highLevel.cicd.description", icon: "flat-color-icons:refresh" },
      { id: "cmake", titleKey: "skills.highLevel.cmake.title", descriptionKey: "skills.highLevel.cmake.description", icon: "devicon:cmake" },
    ],
  },
  {
    key: "apps",
    labelKey: "skills.categories.apps",
    skills: [
      { id: "office", titleKey: "skills.apps.office.title", descriptionKey: "skills.apps.office.description", icon: "flat-color-icons:document" },
      { id: "latex", titleKey: "skills.apps.latex.title", descriptionKey: "skills.apps.latex.description", icon: "devicon:latex" },
      { id: "vscode", titleKey: "skills.apps.vscode.title", descriptionKey: "skills.apps.vscode.description", icon: "devicon:vscode" },
      { id: "eclipse", titleKey: "skills.apps.eclipse.title", descriptionKey: "skills.apps.eclipse.description", icon: "devicon:eclipse" },
      { id: "stm32-suite", titleKey: "skills.apps.stm32Suite.title", descriptionKey: "skills.apps.stm32Suite.description", icon: "thesvg-color:stmicroelectronics" },
    ],
  },
  {
    key: "pcb",
    labelKey: "skills.categories.pcb",
    skills: [
      { id: "altium", titleKey: "skills.pcb.altium.title", descriptionKey: "skills.pcb.altium.description", icon: "flat-color-icons:circuit" },
      { id: "kicad", titleKey: "skills.pcb.kicad.title", descriptionKey: "skills.pcb.kicad.description", icon: "thesvg-color:kicad" },
      { id: "fusion-360", titleKey: "skills.pcb.fusion360.title", descriptionKey: "skills.pcb.fusion360.description", icon: "thesvg-color:fusion-360" },
      { id: "eurocircuit", titleKey: "skills.pcb.eurocircuit.title", descriptionKey: "skills.pcb.eurocircuit.description", icon: "flat-color-icons:factory" },
    ],
  },
  {
    key: "data",
    labelKey: "skills.categories.data",
    skills: [
      { id: "sql", titleKey: "skills.data.sql.title", descriptionKey: "skills.data.sql.description", icon: "flat-color-icons:database" },
      { id: "json", titleKey: "skills.data.json.title", descriptionKey: "skills.data.json.description", icon: "devicon:json" },
      { id: "ai-datasets", titleKey: "skills.data.aiDatasets.title", descriptionKey: "skills.data.aiDatasets.description", icon: "flat-color-icons:data-configuration" },
      { id: "ai-training", titleKey: "skills.data.aiTraining.title", descriptionKey: "skills.data.aiTraining.description", icon: "flat-color-icons:idea" },
    ],
  },
  {
    key: "languages",
    labelKey: "skills.categories.languages",
    skills: [
      { id: "french", titleKey: "skills.languages.french.title", descriptionKey: "skills.languages.french.description", icon: "circle-flags:fr" },
      { id: "english", titleKey: "skills.languages.english.title", descriptionKey: "skills.languages.english.description", icon: "circle-flags:gb" },
      { id: "spanish", titleKey: "skills.languages.spanish.title", descriptionKey: "skills.languages.spanish.description", icon: "circle-flags:es" },
    ],
  },
]

export function Skills() {
  const { t } = useLanguage()

  const groups = useMemo(
    () =>
      SKILL_GROUPS.map((group) => ({
        key: group.key,
        label: t(group.labelKey),
        logos: group.skills.map(
          (skill): LogoEntry => ({
            id: skill.id,
            name: t(skill.titleKey),
            icon: (
              <Icon
                icon={skill.icon}
                className="size-11 sm:size-12"
                aria-hidden="true"
              />
            ),
          })
        ),
      })),
    [t]
  )

  return (
    <section id="skills" className="w-full px-4 md:px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle id="04" title={t("nav.skills")} />

        <div className="space-y-20 md:space-y-24">
          {groups.map((group, index) => (
            <LogoCloudSwap
              key={group.key}
              logos={group.logos}
              title={group.label}
              interval={3600 + index * 450}
              titleClassName="text-[11px] font-medium tracking-[0.2em] text-primary uppercase sm:text-[11px]"
              contentClassName="mt-4 sm:mt-5"
              className="bg-transparent px-0 py-0 sm:py-0"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
