"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Cpu, BookOpen, MapPin, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

const schools = [
  {
    id: "ensem",
    icon: GraduationCap,
    degree: "Engineering Degree in Digital & Embedded Systems",
    school: "ENSEM / Mines Nancy (Télécom Nancy)",
    location: "Nancy, France",
    date: "2023 – 2026",
    courses: ["Real-Time Operating Systems", "Software Engineering", "Microprocessor Architecture", "C/Assembly Programming", "Digital and Analog Electronics", "Dependability", "Signal Processing"],
  },
  {
    id: "upc",
    icon: Cpu,
    degree: "Exchange Program in Embedded Systems Engineering",
    school: "ETSEIB (UPC)",
    location: "Barcelona, Spain",
    date: "Sept 2025 – Jan 2026",
    courses: ["Embedded & Real-Time Systems", "Digital Control", "Microcomputers", "Artificial Intelligence Applied to Engineering"],
  },
  {
    id: "cpge",
    icon: BookOpen,
    degree: "CPGE PC — Intensive Prep in Physics & Chemistry",
    school: "Lycée de Troyes",
    location: "Troyes, France",
    date: "2021 – 2023",
    courses: ["Mathematics", "Physics", "Chemistry", "Computer Science", "Engineering Science"],
  },
]

function ConnectorArrow() {
  return (
    <svg
      className="h-6 w-6 shrink-0 self-center md:h-8 md:w-12 rotate-90 md:rotate-0"
      viewBox="0 0 48 24"
      fill="none"
      aria-hidden
    >
      <style>{`@keyframes arrow-dash { to { stroke-dashoffset: -20; } }`}</style>
      <line
        x1="0" y1="12" x2="44" y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="8,6"
        strokeLinecap="round"
        className="text-muted-foreground/40"
        style={{ animation: "arrow-dash 0.6s linear infinite" }}
      />
      <polygon
        points="38,7 48,12 38,17"
        fill="currentColor"
        className="text-muted-foreground/40"
      />
    </svg>
  )
}

export function EducationCards() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="education" className="w-full px-4 md:px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-stretch md:gap-0">
          {schools.map((school, i) => {
            const isActive = activeId === school.id
            const Icon = school.icon

            return (
              <div key={school.id} className="flex w-full flex-col items-center md:flex-row md:flex-1">
                <div
                  className="relative w-full"
                  onMouseEnter={() => setActiveId(school.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  <motion.div
                    className={cn(
                      "relative z-10 flex flex-col items-center gap-4 rounded-xl border p-6 text-center transition-colors bg-background",
                      isActive ? "border-primary" : "border-border"
                    )}
                    animate={{ scale: isActive ? 1.02 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                      {school.degree}
                    </h3>
                  </motion.div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-full min-w-[280px] rounded-xl border border-border bg-background p-5 shadow-lg z-20"
                      >
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-foreground">{school.school}</p>
                            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {school.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {school.date}
                              </span>
                            </div>
                          </div>
                          <div className="border-t border-border pt-3">
                            <p className="text-xs font-medium text-foreground mb-2">Relevant Coursework</p>
                            <ul className="space-y-1">
                              {school.courses.map((course) => (
                                <li key={course} className="text-xs text-muted-foreground flex items-start gap-1.5">
                                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                                  {course}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {i < schools.length - 1 && <ConnectorArrow />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
