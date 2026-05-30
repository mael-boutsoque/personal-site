"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Component as MorphingCardStack } from "@/components/morphing-card-stack"
import { LogoCloud } from "@/components/logo-cloud-3"

const cards = [
  {
    id: "pcb-design",
    title: "PCB Design",
    description: "Altium",
    icon: <img src="/logos/altium.svg" alt="Altium" className="h-16 w-16" />,
  },
  {
    id: "cicd",
    title: "CI/CD & Project",
    description: "Git",
    icon: <img src="/logos/git.svg" alt="Git" className="h-16 w-16" />,
  },
  {
    id: "3d-design",
    title: "3D Design",
    description: "Fusion 360",
    icon: <img src="/logos/autodesk.svg" alt="Autodesk" className="h-16 w-16" />,
  },
  {
    id: "work-env",
    title: "Work Environment",
    description: "Linux",
    icon: <img src="/logos/linux.svg" alt="Linux" className="h-16 w-16" />,
  },
  {
    id: "docs",
    title: "Reports & Documentation",
    description: "Pack Office / LaTeX + Markdown",
    icon: <img src="/logos/latex.svg" alt="LaTeX" className="h-16 w-16" />,
  },
  {
    id: "data",
    title: "Data",
    description: "SQL / AI Model Tuning",
    icon: <img src="/logos/postgresql.svg" alt="PostgreSQL" className="h-16 w-16" />,
  },
]

export function Skills() {
  return (
    <section id="skills" className="w-full px-4 md:px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionTitle id="03" title="Skills" />

        <LogoCloud
          className="mb-8"
          logos={[
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
            //{ src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/assembly/assembly-original.svg", alt: "Assembler" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg", alt: "Matlab" },
          ]}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <MorphingCardStack cards={cards} defaultLayout="list" />
        </motion.div>
      </div>
    </section>
  )
}
