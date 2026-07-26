"use client"

import { MapPin, Calendar, Building2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/animate-ui/components/radix/hover-card"

export type CardItem = {
  id: string
  name: string
  logo: string
  school: string
  url: string
  location: string
  date: string
  courses: string[]
}

function LogoWithFallback({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-48 bg-white">
        <Building2 className="h-16 w-16 text-muted-foreground/40" />
      </div>
    )
  }

  return (
    <div className="relative w-full h-48 bg-white">
      <Image src={src} alt={alt} fill className="object-contain p-6" onError={() => setError(true)} />
    </div>
  )
}

export function ExperienceAccordion({ items, hoverTitle = "Relevant Coursework" }: { items: CardItem[]; hoverTitle?: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {items.map((s) => (
        <HoverCard key={s.id} openDelay={200} closeDelay={100}>
          <HoverCardTrigger asChild>
            <button className="group flex flex-col rounded-xl border bg-card text-left shadow-sm transition-all hover:shadow-md cursor-default overflow-hidden">
              <LogoWithFallback src={s.logo} alt={s.school} />
              
              <hr className="border-t border-border/50 mx-4" />
              <div className="flex flex-col gap-1 p-4 pt-3 transition-colors group-hover:bg-muted/50">
                <span className="font-semibold text-base">{s.name}</span>
                <span
                  role="link"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(s.url, "_blank", "noopener,noreferrer")
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.stopPropagation()
                      window.open(s.url, "_blank", "noopener,noreferrer")
                    }
                  }}
                  className="text-muted-foreground text-sm hover:text-primary hover:underline cursor-pointer"
                >
                  {s.school}
                </span>
                <span className="text-muted-foreground text-xs flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {s.location}
                </span>
                <span className="text-muted-foreground text-xs flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {s.date}
                </span>
              </div>
            </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-72">
              <p className="text-sm font-medium text-foreground mb-3">{hoverTitle}</p>
              <ul className="space-y-1.5">
                {s.courses.map((course) => (
                  <li key={course} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                    {course}
                  </li>
                ))}
              </ul>
            </HoverCardContent>
          </HoverCard>
        ))}
    </div>
  )
}
