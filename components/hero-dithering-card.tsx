"use client"

import { useState, useEffect, useRef, useCallback, Suspense, lazy } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"
import { DockTabs } from "@/components/dock-tabs"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

const words = [
  { text: "digital systems", color: "text-primary" },
  { text: "embedded systems", color: "text-muted-foreground" },
  { text: "hardware", color: "text-secondary" },
]

const chars = "0123456789"

function ScrambledChar({ char, delay }: { char: string; delay: number }) {
  const [scrambled, setScrambled] = useState<string | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const handleHover = useCallback(() => {
    if (char === " ") return
    if (intervalRef.current) clearInterval(intervalRef.current)
    let frame = 0
    const totalFrames = 10

    intervalRef.current = setInterval(() => {
      frame++
      if (frame >= totalFrames) {
        clearInterval(intervalRef.current!)
        intervalRef.current = null
        setScrambled(null)
      } else {
        setScrambled(chars[Math.floor(Math.random() * chars.length)])
      }
    }, 50)
  }, [char])

  return (
    <motion.span
      onMouseEnter={handleHover}
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      transition={{ duration: 0.4, delay }}
      className="inline-block"
    >
      {scrambled || char}
    </motion.span>
  )
}

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="py-6 md:py-10 w-full flex justify-center items-center px-4 md:px-6">
      <div
        className="w-full max-w-[96rem] relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] bg-card shadow-[0_2px_12px_rgba(0,0,0,0.04)] min-h-[90vh] flex flex-col items-center justify-center">
          <Suspense fallback={<Skeleton className="absolute inset-0 rounded-[48px]" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply">
              <Dithering
                colorBack="#00000000"
                colorFront="#000000"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-8 md:px-16 mx-auto max-w-4xl flex flex-col items-start text-left">
            <motion.h1
              initial="hidden"
              animate="visible"
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground leading-[1.05] font-anta whitespace-nowrap"
            >
              {"Hi I'm Maël".split("").map((char, i) =>
                char === " " ? (
                  <span key={i} className="inline-block w-[0.3em]">&nbsp;</span>
                ) : (
                  <ScrambledChar key={i} char={char} delay={i * 0.02} />
                )
              )}
            </motion.h1>

            <div className="mt-6 flex items-center gap-3 text-3xl md:text-5xl font-semibold text-muted-foreground flex-wrap">
              <span>engineer in</span>
              <span className="relative w-[240px] md:w-[500px] inline-block h-10 md:h-14 whitespace-nowrap">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={words[wordIndex].text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.25 }}
                    className={`absolute inset-0 ${words[wordIndex].color} flex items-center whitespace-nowrap`}
                  >
                    {words[wordIndex].text}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-4">
            <DockTabs />
          </div>
        </div>
      </div>
    </section>
  )
}