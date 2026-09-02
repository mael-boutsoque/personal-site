"use client"

import FlowingMenu from "@/components/FlowingMenu"

interface FlowingMenuItem {
  link: string
  text: string
  image: string
}

type MenuProps = Record<string, unknown> & { items: FlowingMenuItem[] }

const Menu = FlowingMenu as unknown as (props: MenuProps) => React.ReactNode

export function ProjectFlowingMenu({ items }: { items: FlowingMenuItem[] }) {
  return (
    <div className="mt-4 h-[55vh] overflow-hidden rounded-2xl">
      <Menu
        items={items}
        bgColor="transparent"
        textColor="hsl(var(--foreground))"
        marqueeBgColor="#ffffff"
        marqueeTextColor="#0f172a"
        borderColor="hsl(var(--border))"
      />
    </div>
  )
}