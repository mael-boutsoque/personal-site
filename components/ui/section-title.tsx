"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  id: string
  title: string
  className?: string
}

export function SectionTitle({ id, title, className }: SectionTitleProps) {
  return (
    <div className={cn("relative mb-16", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="flex items-baseline gap-4 text-2xl md:text-3xl tracking-tight font-anta text-foreground"
      >
        <span className="shrink-0">{id}. {title}</span>
        <div className="flex-1 border-b border-solid border-foreground" />
      </motion.div>
    </div>
  )
}
