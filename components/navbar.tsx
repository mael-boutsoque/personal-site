"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedThemeToggler } from "@/components/animated-theme-toggler"

const sections = [
  { id: "hero", label: "Home" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observers = sections.map((s) => {
      const el = document.getElementById(s.id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(s.id)
        },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const target = el.getBoundingClientRect().top + window.scrollY
    const start = window.scrollY
    const diff = target - start
    const duration = 600
    let startTime: number | null = null
    function step(time: number) {
      if (startTime === null) startTime = time
      const t = Math.min((time - startTime) / duration, 1)
      const ease = 1 - (1 - t) ** 3
      window.scrollTo(0, start + diff * ease)
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4">
      <div className="mx-auto mt-3 flex max-w-3xl items-center justify-between rounded-full border border-border/80 bg-background/40 px-4 py-1.5 shadow-lg shadow-primary/5 backdrop-blur-2xl">
        <motion.button
          onClick={() => scrollTo("hero")}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Mael</span>
        </motion.button>

        <div className="flex items-center gap-1">
          {sections.map((s) => {
            const active = s.id === activeSection
            return (
              <motion.button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "relative rounded-full px-3 py-1 text-sm transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {s.label}
              </motion.button>
            )
          })}
        </div>

        <AnimatedThemeToggler />
      </div>
    </nav>
  )
}
