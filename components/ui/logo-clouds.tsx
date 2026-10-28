"use client";

import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export type LogoEntry = {
  icon: React.ReactNode;
  name?: string;
  id?: string;
};

export type LogoCloudSwapProps = {
  logos?: LogoEntry[];
  title?: string;
  subtitle?: string;
  interval?: number;
  stagger?: number;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
};

const WIPE_DURATION = 0.92;
const WIPE_TIMES = [0, 0.4, 1];
const MAX_PER_ROW = 4;

function chunk<T>(items: T[], max: number) {
  const rows = Math.ceil(items.length / max);
  if (rows <= 1) return items.length ? [items] : [];

  const base = Math.floor(items.length / rows);
  const extra = items.length % rows;
  const out: T[][] = [];
  let start = 0;

  for (let row = 0; row < rows; row++) {
    const size = base + (row < extra ? 1 : 0);
    out.push(items.slice(start, start + size));
    start += size;
  }

  return out;
}

function LogoItem({
  logo,
  index,
  isWaving,
  stagger,
  totalCount,
  onDone,
}: {
  logo: LogoEntry;
  index: number;
  isWaving: boolean;
  stagger: number;
  totalCount: number;
  onDone: () => void;
}) {
  return (
    <motion.div
      aria-label={logo.name ?? "Logo"}
      animate={
        isWaving
          ? {
              clipPath: [
                "inset(0 0% 0 0)",
                "inset(0 100% 0 0)",
                "inset(0 0% 0 0)",
              ],
              filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
              opacity: [1, 0.2, 1],
            }
          : {
              clipPath: "inset(0 0% 0 0)",
              filter: "blur(0px)",
              opacity: 1,
            }
      }
      transition={
        isWaving
          ? {
              clipPath: {
                duration: WIPE_DURATION,
                times: WIPE_TIMES,
                ease: ["easeIn", [0.16, 1, 0.3, 1]],
                delay: index * stagger,
              },
              filter: {
                duration: WIPE_DURATION * 0.9,
                times: WIPE_TIMES,
                ease: "easeInOut" as const,
                delay: index * stagger,
              },
              opacity: {
                duration: WIPE_DURATION * 0.85,
                times: WIPE_TIMES,
                ease: "easeInOut" as const,
                delay: index * stagger,
              },
            }
          : {
              duration: 0.3,
              ease: "easeOut",
            }
      }
      onAnimationComplete={() => {
        if (isWaving && index === totalCount - 1) onDone();
      }}
      whileHover={{
        scale: 1.07,
        opacity: 1,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 340, damping: 24 },
      }}
      className="flex w-18 shrink-0 cursor-default flex-col items-center gap-2 sm:w-22.5"
    >
      <span className="flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
        {logo.icon}
      </span>
      {logo.name && (
        <span className="select-none whitespace-nowrap text-[10px] font-medium tracking-wide text-muted-foreground sm:text-[11px]">
          {logo.name}
        </span>
      )}
    </motion.div>
  );
}

export default function LogoCloudSwap({
  logos = [],
  title,
  subtitle,
  interval = 3200,
  stagger = 0.11,
  className,
  titleClassName,
  contentClassName,
}: LogoCloudSwapProps) {
  const [waving, setWaving] = React.useState(false);

  React.useEffect(() => {
    if (logos.length === 0) return;

    const id = setInterval(() => setWaving(true), interval);
    return () => clearInterval(id);
  }, [interval, logos.length]);

  const rows = React.useMemo(() => chunk(logos, MAX_PER_ROW), [logos]);
  const rowStarts = rows.reduce<number[]>((acc, row, index) => {
    acc.push(index === 0 ? 0 : acc[index - 1]! + rows[index - 1]!.length);
    return acc;
  }, []);

  return (
    <section
      className={cn("w-full bg-background px-4 py-12 sm:py-16", className)}
    >
      {(title || subtitle) && (
        <div className="mx-auto max-w-2xl text-center">
          {title && (
            <h2
              className={cn(
                "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
                titleClassName
              )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      )}

      <div className={cn("mx-auto mt-10 max-w-5xl sm:mt-12", contentClassName)}>
        <div className="hidden flex-col items-center gap-6 sm:flex">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10"
            >
              {row.map((logo, i) => {
                const index = rowStarts[rowIndex]! + i;

                return (
                  <LogoItem
                    key={logo.id ?? index}
                    logo={logo}
                    index={index}
                    isWaving={waving}
                    stagger={stagger}
                    totalCount={logos.length}
                    onDone={() => setWaving(false)}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 place-items-center gap-y-6 sm:hidden">
          {logos.map((logo, i) => (
            <LogoItem
              key={logo.id ?? i}
              logo={logo}
              index={i}
              isWaving={waving}
              stagger={stagger}
              totalCount={logos.length}
              onDone={() => setWaving(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
