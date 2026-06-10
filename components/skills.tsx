"use client"

import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { Component as MorphingCardStack } from "@/components/morphing-card-stack"
import Image from "next/image"

const cards = [
  {
    id: "pcb-design",
    title: "PCB Design",
    description: "Altium",
    icon: <Image src="/logos/altium.svg" alt="Altium" width={64} height={64} className="h-16 w-16" />,
  },
  {
    id: "cicd",
    title: "CI/CD & Project",
    description: "Git",
    icon: <Image src="/logos/git.svg" alt="Git" width={64} height={64} className="h-16 w-16" />,
  },
  {
    id: "3d-design",
    title: "3D Design",
    description: "Fusion 360",
    icon: <Image src="/logos/autodesk.svg" alt="Autodesk" width={64} height={64} className="h-16 w-16" />,
  },
  {
    id: "work-env",
    title: "Work Environment",
    description: "Linux",
    icon: <Image src="/logos/linux.svg" alt="Linux" width={64} height={64} className="h-16 w-16" />,
  },
  {
    id: "docs",
    title: "Reports & Documentation",
    description: "Pack Office / LaTeX + Markdown",
    icon: <Image src="/logos/latex.svg" alt="LaTeX" width={64} height={64} className="h-16 w-16" />,
  },
  {
    id: "data",
    title: "Data",
    description: "SQL / AI Model Tuning",
    icon: <Image src="/logos/postgresql.svg" alt="PostgreSQL" width={64} height={64} className="h-16 w-16" />,
  },
  {
    id: "c",
    title: "C",
    description: "Systems Programming",
    icon: (
      <svg viewBox="0 0 128 128" className="h-16 w-16 fill-current">
        <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6l-48.3-27.8c-.8-.5-1.9-.5-2.7 0L14.6 30.9c-.9.5-1.8 1.6-2.4 2.6l.3.2c.5-.8 1.6-1.5 2.4-1.9l48.3-27.8c.8-.5 1.9-.5 2.7 0l48.3 27.8c.8.5 1.9 1.1 2.4 1.9zm.5 2.1v48.4c0 .9-.5 1.9-1.1 2.4L68.7 110.2c-.6.5-1.5.5-2.1 0l-48.3-27.9c-.6-.5-1.1-1.6-1.1-2.4l-.2-48.4c0-.3.5-1 1.1-1.3l48.2-27.9c.3-.2.7-.3 1.05-.3.35 0 .75.1 1.05.3l48.3 27.8c.6.3 1.1 1 1.1 1.4zm-1.6 48.4l-.1-47.9c0-.6-.3-1.2-.8-1.5L68.6 7.7c-.5-.3-1.3-.3-1.8 0l-47.9 27.6c-.5.3-.8.9-.8 1.5l.1 47.9c0 .6.3 1.2.8 1.5L66 110.1c.5.3 1.3.3 1.8 0l47.9-27.6c.5-.3.8-.9.8-1.5z"/>
      </svg>
    ),
  },
  {
    id: "cpp",
    title: "C++",
    description: "Performance-critical Code",
    icon: (
      <svg viewBox="0 0 128 128" className="h-16 w-16 fill-current">
        <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6l-48.3-27.8c-.8-.5-1.9-.5-2.7 0L14.6 30.9c-.9.5-1.8 1.6-2.4 2.6l.3.2c.5-.8 1.6-1.5 2.4-1.9l48.3-27.8c.8-.5 1.9-.5 2.7 0l48.3 27.8c.8.5 1.9 1.1 2.4 1.9zm.5 2.1v48.4c0 .9-.5 1.9-1.1 2.4L68.7 110.2c-.6.5-1.5.5-2.1 0l-48.3-27.9c-.6-.5-1.1-1.6-1.1-2.4l-.2-48.4c0-.3.5-1 1.1-1.3l48.2-27.9c.3-.2.7-.3 1.05-.3.35 0 .75.1 1.05.3l48.3 27.8c.6.3 1.1 1 1.1 1.4zm-1.6 48.4l-.1-47.9c0-.6-.3-1.2-.8-1.5L68.6 7.7c-.5-.3-1.3-.3-1.8 0l-47.9 27.6c-.5.3-.8.9-.8 1.5l.1 47.9c0 .6.3 1.2.8 1.5L66 110.1c.5.3 1.3.3 1.8 0l47.9-27.6c.5-.3.8-.9.8-1.5zm-71.3-22.1l12.8-7.4 12.8 7.4v14.8l-12.8 7.4-12.8-7.4v-14.8zm16 4.3l8 4.6v9.2l-8 4.6-8-4.6v-9.2l8-4.6z"/>
      </svg>
    ),
  },
  {
    id: "python",
    title: "Python",
    description: "Data & Automation",
    icon: (
      <svg viewBox="0 0 128 128" className="h-16 w-16 fill-current">
        <path d="M49.33 62h29.159C80.553 62 81 61.513 81 59.865V50.7c0-1.637-.346-2.35-1.sourced-2.35h-10.322c-.922 0-1.381-.578-1.381-1.579V41.198c0-1.011.336-1.579 1.381-1.579h17.322c1.505 0 2.831.779 2.831 2.462V87.562c0 1.697-.326 2.18-1.578 2.18H51.694c-1.578 0-2.831-.779-2.831-2.18V64.341c0-1.578.253-2.341 1.467-2.341zm-8.997-6.465c-1.579 0-2.631-1.047-2.631-2.626s1.052-2.625 2.631-2.625 2.625 1.047 2.625 2.625-1.046 2.626-2.625 2.626zm16.974-6.465c-1.579 0-2.631-1.047-2.631-2.626s1.052-2.625 2.631-2.625 2.625 1.047 2.625 2.625-1.046 2.626-2.625 2.626zM89.36 87.562c-1.289 0-1.929-.779-1.929-2.18V64.341c0-1.578.336-2.341 1.929-2.341h16.974c1.578 0 2.625.763 2.625 2.341v21.041c0 1.401-.64 2.18-1.929 2.18H89.36z"/>
      </svg>
    ),
  },
  {
    id: "java",
    title: "Java",
    description: "Enterprise Applications",
    icon: (
      <svg viewBox="0 0 128 128" className="h-16 w-16 fill-current">
        <path d="M47.617 98.12c-3.338 5.849-9.633 6.762-15.468 3.133-5.835-3.629-7.bavaria-10.287-3.632-16.137 3.633-5.85 10.287-6.762 15.468-3.133 5.85 3.628 7.633 10.287 3.632 16.137zm42.703-44.939c-3.632-5.85-10.287-6.762-15.468-3.133-5.85 3.628-7.633 10.287-3.632 16.137 3.338 5.849 9.633 6.762 15.468 3.133 5.85-3.628 7.633-10.287 3.632-16.137zm-18.024-41.248c-3.632 5.85-.974 13.483 5.85 16.137 6.824 2.654 14.458-.974 18.024-6.824s.974-13.483-5.85-16.137c-6.824-2.654-14.458.974-18.024 6.824zm29.844 31.493c-1.974-.789-4.036.131-4.962 1.974-.926 1.843-.131 4.036 1.843 4.962 1.974.789 4.036-.131 4.962-1.974.926-1.843.131-4.036-1.843-4.962z"/>
      </svg>
    ),
  },
  {
    id: "matlab",
    title: "MATLAB",
    description: "Numerical Computing",
    icon: (
      <svg viewBox="0 0 128 128" className="h-16 w-16 fill-current">
        <path d="M64 0C28.654 0 0 28.654 0 64s28.654 64 64 64 64-28.654 64-64S99.346 0 64 0zm20.5 99.5H43.5v-71h41v71z"/>
      </svg>
    ),
  },
]

export function Skills() {
  return (
    <section id="skills" className="w-full px-4 md:px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionTitle id="03" title="Skills" />

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
