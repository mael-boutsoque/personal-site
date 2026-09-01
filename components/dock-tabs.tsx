"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion"
import { FileDown, Copy } from 'lucide-react'
import { useLanguage } from "@/components/language-provider"

interface DockItem {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  action: () => void
}

const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>

const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>

const dockItemDefs: Omit<DockItem, "action">[] = [
  { id: "download-cv", name: "Download CV", icon: <FileDown />, color: "bg-neutral-700" },
  { id: "copy-mail", name: "Copy Mail", icon: <Copy />, color: "bg-neutral-600" },
  { id: "github", name: "GitHub", icon: <GithubIcon />, color: "bg-neutral-800" },
  { id: "linkedin", name: "LinkedIn", icon: <LinkedinIcon />, color: "bg-neutral-700" },
]

function DockIcon({ item, mouseX, copiedLabel }: { item: DockItem; mouseX: MotionValue<number>; copiedLabel?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 68, 48])
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

  const heightSync = useTransform(distance, [-150, 0, 150], [48, 68, 48])
  const height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 })

  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => { setIsClicked(true); item.action(); }}
      onMouseUp={() => setIsClicked(false)}
      className="aspect-square cursor-pointer flex items-center justify-center relative group"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`w-full h-full rounded-xl shadow-lg flex items-center justify-center text-white relative overflow-hidden ${item.color}`}
        animate={{
          y: isClicked ? 2 : isHovered ? -8 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        <motion.div
          className="text-xl"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          {item.icon}
        </motion.div>
        
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"
          animate={{
            opacity: isHovered ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? -20 : 10,
          scale: isHovered ? 1 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800/90 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap pointer-events-none backdrop-blur-sm"
      >
        {copiedLabel || item.name}
      </motion.div>

      {/* Active indicator dot */}
      <motion.div
        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white/80 rounded-full"
        animate={{
          scale: isClicked ? 1.5 : 1,
          opacity: isClicked ? 1 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
    </motion.div>
  )
}

export function DockTabs() {
  const mouseX = useMotionValue(Infinity)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const { lang } = useLanguage()

  const dockItems: DockItem[] = dockItemDefs.map((item) => ({
    ...item,
    action: () => {
      if (item.id === "copy-mail") {
        navigator.clipboard.writeText("mael.boutsoque@gmail.com")
        setCopiedId("copy-mail")
        setTimeout(() => setCopiedId(null), 2000)
      } else if (item.id === "download-cv") {
        window.open(lang === 'fr' ? "https://rxresu.me/mael-boutsoque/fr" : "/CV_EN_complet.pdf", "_blank")
      } else if (item.id === "github") {
        window.open("https://github.com/mael-boutsoque", "_blank")
      } else if (item.id === "linkedin") {
        window.open("https://linkedin.com/in/mael-boutsoque", "_blank")
      }
    },
  }))

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-20 items-end gap-3 rounded-2xl px-4 pb-3"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      }}
    >
      {dockItems.map((item) => (
        <DockIcon key={item.id} item={item} mouseX={mouseX} copiedLabel={copiedId === item.id ? "Copied!" : undefined} />
      ))}
    </motion.div>
  )
}
