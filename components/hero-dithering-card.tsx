"use client"

import { useState, Suspense, lazy } from "react"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"
import { DockTabs } from "@/components/dock-tabs"
import { TextRotate } from "@/components/ui/text-rotate"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

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

          <div className="relative z-10 px-8 md:px-16 mx-auto w-full flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm md:text-lg font-medium uppercase tracking-[0.35em] text-muted-foreground"
            >
              Mael Boutsoque
            </motion.div>
            <h1 className="text-[clamp(3.5rem,12vw,12rem)] font-black tracking-tight leading-[1.05] font-anta text-primary flex items-center justify-center">
              <span className="sr-only">Hardware Software Embedded Engineer</span>
              <TextRotate
                texts={["Hardware", "Software", "Embedded"]}
                mainClassName="items-center justify-center"
                rotationInterval={2500}
                splitBy="characters"
                staggerDuration={0.02}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-3xl md:text-5xl font-semibold text-muted-foreground"
            >
              Engineer
            </motion.p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-4">
            <DockTabs />
          </div>
        </div>
      </div>
    </section>
  )
}