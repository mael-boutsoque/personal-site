"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  CursorProvider,
  CursorFollow,
} from "@/components/animate-ui/components/animate/cursor";

interface GlassBlogCardProps {
  title?: string;
  excerpt?: string;
  image?: string;
  url?: string;
  author?: { name: string; avatar: string };
  date?: string;
  readTime?: string;
  tags?: string[];
  className?: string;
}

export function GlassBlogCard({
  title = "The Future of UI Design",
  excerpt = "Exploring the latest trends in glassmorphism, 3D elements, and micro-interactions.",
  image = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  url,
  tags = ["Design", "UI/UX"],
  className,
}: GlassBlogCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className={cn("w-full", className)}
    >
      <CursorProvider>
        <motion.div
          layout
          className={cn(
            "group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10",
            url && "cursor-pointer"
          )}
        >
          <Link href={url || "#"} className="block h-full" onClick={(e) => { if (!url?.startsWith("/")) e.preventDefault() }}>
            <CursorFollow side="bottom" sideOffset={20} align="center">
              See project
            </CursorFollow>

            {/* Image Section */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <motion.img
                src={image}
                alt={title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full w-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
              />

              <div className="absolute bottom-3 left-3 flex gap-2">
                {tags?.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors duration-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-4 p-5">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                  {title}
                </h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {excerpt}
                </p>
              </div>
            </div>
          </Link>
          {url && !url.startsWith("/") && (
            <div className="absolute inset-0" onClick={() => window.open(url, "_blank", "noopener,noreferrer")} />
          )}
        </motion.div>
      </CursorProvider>
    </motion.div>
  );
}
