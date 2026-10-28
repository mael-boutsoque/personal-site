"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface Integration {
  id: string
  name: string
  description: string
  icon: React.ReactNode
}

export interface IntegrationGroup {
  key: string
  label: string
  items: Integration[]
}

function IntegrationCard({
  title,
  description,
  children,
  className,
}: {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      data-slot="integration-card"
      className={cn(
        "rounded-xl bg-foreground/5 p-6 transition-colors hover:bg-foreground/[0.07]",
        className
      )}
    >
      <div className="*:size-10">{children}</div>

      <div className="mt-6 space-y-1.5">
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <p className="line-clamp-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export default function Integrations({
  groups,
  className,
}: {
  groups: IntegrationGroup[]
  className?: string
}) {
  return (
    <div className={cn("space-y-12", className)}>
      {groups.map((group) => (
        <section key={group.key}>
          <div className="mb-6 flex items-center gap-4">
            <h3 className="shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {group.label}
            </h3>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => (
              <IntegrationCard
                key={item.id}
                title={item.name}
                description={item.description}
              >
                {item.icon}
              </IntegrationCard>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
