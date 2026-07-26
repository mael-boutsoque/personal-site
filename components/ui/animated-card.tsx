'use client'

import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  index?: number
}

export function AnimatedCard({ children, className = '' }: AnimatedCardProps) {
  return <div className={className}>{children}</div>
}
