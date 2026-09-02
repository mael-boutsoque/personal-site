"use client"

import AccordionGallery from "@/components/AccordionGallery"

interface GalleryItem {
  image: string
  label: string
  link?: string
}

export function ProjectGallery({ items }: { items: GalleryItem[] }) {
  return (
    <AccordionGallery
      items={items as unknown as { image: string; label: string; link: string }[]}
      defaultIndex={0}
      expandRatio={0.52}
      trigger="hover"
      grayscale={false}
      tilt={0}
      orientation="vertical"
      duration={0.8}
    />
  )
}