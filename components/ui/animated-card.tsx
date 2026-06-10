'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  index?: number
}

export function AnimatedCard({ children, className = '', index = 0 }: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  )
}
