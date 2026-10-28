/*
 * Logo Orbit, adapted from xevrion lab.
 * https://lab.xevrion.dev/lab/logo-orbit
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "motion/react";

export type LogoOrbitItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  /* Brand color shown on hover when it has enough contrast. */
  color?: string;
};

type Orbit = {
  items: LogoOrbitItem[];
  /* Radius as a share of the stage width. */
  radius: number;
  /* Seconds per lap; negative reverses direction. */
  lap: number;
};

type LogoOrbitProps = {
  orbits: Orbit[];
  children: React.ReactNode;
  className?: string;
  iconSize?: number;
  paused?: boolean;
};

const TILT = 0.42;
const BRAKE = 4;

function readable(hex: string) {
  const value = hex.replace("#", "");
  if (value.length !== 6) return false;
  const n = parseInt(value, 16);
  if (Number.isNaN(n)) return false;
  const lum =
    0.2126 * (n >> 16) + 0.7152 * ((n >> 8) & 255) + 0.0722 * (n & 255);
  return lum > 40 && lum < 225;
}

export function LogoOrbit({
  orbits,
  children,
  className,
  iconSize = 44,
  paused = false,
}: LogoOrbitProps) {
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hovering = useRef(false);
  const [active, setActive] = useState<string | null>(null);

  const flat = orbits.flatMap((orbit, r) =>
    orbit.items.map((item, i) => ({ item, r, i, n: orbit.items.length })),
  );

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const turns = orbits.map(() => 0);
    let speed = 1;
    let frame = 0;
    let visible = true;
    let last = performance.now();

    const place = () => {
      const w = stage.offsetWidth;
      const h = stage.offsetHeight;
      flat.forEach(({ r, i, n }, k) => {
        const el = itemRefs.current[k];
        if (!el) return;
        const angle = turns[r]! + (i / n) * Math.PI * 2;
        const rx = (orbits[r]!.radius * w) / 2;
        const x = Math.cos(angle) * rx;
        const y = Math.sin(angle) * rx * TILT;
        const depth = Math.sin(angle);
        const near = (depth + 1) / 2;
        el.style.transform = `translate(${(w / 2 + x).toFixed(1)}px, ${(h / 2 + y).toFixed(1)}px) translate(-50%, -50%) scale(${(0.82 + near * 0.26).toFixed(3)})`;
        el.style.opacity = (0.55 + near * 0.45).toFixed(3);
        el.style.zIndex = depth > 0 ? "3" : "1";
      });
    };

    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      const target = hovering.current ? 0 : 1;
      speed += (target - speed) * (1 - Math.exp(-BRAKE * dt));
      orbits.forEach((orbit, r) => {
        turns[r]! += ((Math.PI * 2) / orbit.lap) * dt * speed;
      });
      place();
      frame = visible ? requestAnimationFrame(step) : 0;
    };

    place();
    if (paused || reduceMotion) return;

    const io = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      if (visible && !frame) {
        last = performance.now();
        frame = requestAnimationFrame(step);
      }
    });
    io.observe(stage);
    const ro = new ResizeObserver(place);
    ro.observe(stage);
    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      ro.disconnect();
    };
    // flat is derived from orbits
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orbits, paused, reduceMotion]);

  return (
    <div
      data-slot="logo-orbit"
      ref={stageRef}
      className={cn("relative isolate aspect-16/10 w-full", className)}
      onPointerEnter={(event) => {
        if (event.pointerType !== "touch") hovering.current = true;
      }}
      onPointerLeave={() => {
        hovering.current = false;
        setActive(null);
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-2 grid place-items-center px-[18%] text-center *:pointer-events-auto">
        {children}
      </div>

      {flat.map(({ item }, k) => {
        const on = active === item.label;
        const Icon = item.icon;
        const fill =
          on && item.color && readable(item.color) ? item.color : undefined;

        return (
          <div
            key={item.label}
            data-slot="logo-orbit-item"
            ref={(el) => {
              itemRefs.current[k] = el;
            }}
            data-on={on}
            className="absolute top-0 left-0 will-change-transform data-[on=true]:z-4! data-[on=true]:opacity-100!"
          >
            <button
              type="button"
              aria-label={item.label}
              onPointerEnter={(event) => {
                if (event.pointerType !== "touch") setActive(item.label);
              }}
              onPointerLeave={() => setActive(null)}
              onFocus={() => {
                hovering.current = true;
                setActive(item.label);
              }}
              onBlur={() => {
                hovering.current = false;
                setActive(null);
              }}
              className="relative grid touch-manipulation place-items-center rounded-full bg-card/85 shadow-sm ring-1 ring-border/60 backdrop-blur-sm outline-hidden transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring"
              style={{ width: iconSize, height: iconSize }}
            >
              <span
                className="grid size-[52%] place-items-center transition-[color,scale] duration-200 ease-out *:size-full"
                style={{ color: fill, scale: on ? "1.12" : "1" }}
              >
                <Icon aria-hidden="true" />
              </span>
              <span
                data-slot="logo-orbit-label"
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute top-full left-1/2 mt-1 -translate-x-1/2 rounded-full bg-foreground px-2 py-0.5 text-xs font-medium whitespace-nowrap text-background transition-[opacity,translate] duration-150 ease-out",
                  on ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
                )}
              >
                {item.label}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default LogoOrbit;
