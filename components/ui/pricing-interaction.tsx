"use client"

import { GraduationCap, Cpu, BookOpen, MapPin, Calendar } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const schools = [
  {
    id: "ensem",
    name: "Digital/Embedded Systems Engineer",
    icon: GraduationCap,
    school: "ENSEM",
    location: "Nancy, France",
    date: "2023 - 2026",
    courses: ["System Control", "Optimization", "Computing", "Electronics", "Real-Time Systems", "Data Analysis", "System Safety"],
  },
  {
    id: "upc",
    name: "Exchange Program",
    icon: Cpu,
    school: "ETSEIB (UPC)",
    location: "Barcelona, Spain",
    date: "Sept 2025 - Jan 2026",
    courses: ["Embedded & Real-Time Systems", "Digital Control", "Microcomputers", "Artificial Intelligence Applied to Engineering"],
  },
  {
    id: "cpge",
    name: "CPGE PC",
    icon: BookOpen,
    school: "Lycée de Troyes",
    location: "Troyes, France",
    date: "2021 - 2023",
    courses: ["Mathematics", "Physics", "Chemistry", "Computer Science", "Engineering Science"],
  },
]

function CourseItem({ course, index }: { course: string; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, delay: index * 0.04, ease: "easeOut" }}
      className="text-sm text-muted-foreground flex items-start gap-2"
    >
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
      {course}
    </motion.li>
  )
}

export function PricingInteraction() {
  const [active, setActive] = useState(0)
  const school = schools[active]
  const Icon = school.icon

  return (
    <motion.div
      layout
      className="flex flex-col gap-6 md:flex-row md:items-start"
    >
      <motion.div layout className="border-2 rounded-[32px] p-3 shadow-md w-full md:w-72 flex flex-col items-center gap-3 bg-background">
        <div className="w-full flex flex-col items-center justify-center gap-3">
          {schools.map((s, i) => {
            const SvgIcon = s.icon
            const isActive = active === i
            return (
              <motion.div
                key={s.id}
                layout
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActive(i)}
                className={cn(
                  "w-full flex justify-between cursor-pointer p-4 rounded-2xl bg-background",
                  isActive ? "border-[3px] border-primary" : "border-2 border-border hover:bg-muted/30"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background">
                    <SvgIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="font-semibold text-base text-foreground">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.date}</p>
                  </div>
                </div>
                <motion.div
                  layout
                  className={cn(
                    "border-2 size-6 rounded-full mt-0.5 p-1 flex items-center justify-center",
                    isActive ? "border-primary" : "border-border"
                  )}
                >
                  <motion.div
                    className="size-3 bg-primary rounded-full"
                    layout
                    animate={isActive ? { scale: [1, 1.15, 1], opacity: 1 } : { scale: 1, opacity: 0 }}
                    transition={isActive ? { scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" as const }, opacity: { duration: 0.2 } } : { duration: 0.2 }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <motion.div layout className="flex-1 min-w-0 rounded-2xl border border-border bg-background p-6 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={school.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                <motion.div
                  initial={{ rotate: -10, scale: 0.85 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{school.name}</h3>
                  <p className="text-sm text-muted-foreground">{school.school}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.04, ease: "easeOut" }}
                className="flex items-center gap-4 text-sm text-muted-foreground"
              >
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {school.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {school.date}
                </span>
              </motion.div>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground mb-3">Relevant Coursework</p>
                <ul className="space-y-2">
                  {school.courses.map((course, i) => (
                    <CourseItem key={course} course={course} index={i} />
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
