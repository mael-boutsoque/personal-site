import * as React from "react"

import { cn } from "@/lib/utils"

interface AwardCardProps extends Omit<React.ComponentProps<"div">, "title"> {
  icon: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}

function AwardCard({
  icon,
  title,
  description,
  className,
  ...props
}: AwardCardProps) {
  return (
    <div
      data-slot="award-card"
      className={cn(
        "group/award flex h-full items-start gap-4 rounded-xl bg-card p-4 text-card-foreground ring-1 ring-foreground/10 transition-colors duration-300 hover:bg-muted/30 hover:ring-foreground/20",
        className
      )}
      {...props}
    >
      <div className="flex size-11 shrink-0 items-center justify-center">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium leading-snug">{title}</p>
        <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

export { AwardCard }
