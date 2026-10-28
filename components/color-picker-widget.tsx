"use client"

import { useEffect, useState } from "react"
import { ColorSwatchPicker } from "@heroui/react"
import {
  DEFAULT_THEME_COLOR,
  THEME_COLORS,
  THEME_COLOR_STORAGE_KEY,
  THEME_COLOR_STYLE_ID,
  themeColorCss,
} from "@/lib/theme-color"

type PickedColor = { toString: (format?: "hex") => string }

/**
 * Writes the picked color into a dedicated stylesheet instead of inline styles on
 * <html>, so nothing else can wipe it while the rest of the page updates its styles.
 */
function applyThemeColor(hex: string) {
  const css = themeColorCss(hex)

  let style = document.getElementById(THEME_COLOR_STYLE_ID) as HTMLStyleElement | null
  if (!style) {
    style = document.createElement("style")
    style.id = THEME_COLOR_STYLE_ID
  }
  if (style.textContent !== css) style.textContent = css
  if (!style.isConnected) document.head.appendChild(style)
}

export function ColorPickerWidget() {
  const [color, setColor] = useState(DEFAULT_THEME_COLOR)

  // Restore the color picked during a previous visit.
  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_COLOR_STORAGE_KEY)?.toUpperCase()
    if (stored && THEME_COLORS.includes(stored)) setColor(stored)
  }, [])

  // Paint the site's accent colors with the picked color.
  useEffect(() => {
    applyThemeColor(color)

    const timeout = window.setTimeout(() => {
      window.localStorage.setItem(THEME_COLOR_STORAGE_KEY, color)
    }, 250)
    return () => window.clearTimeout(timeout)
  }, [color])

  return (
    <div className="fixed bottom-4 left-4 z-50 print:hidden">
      <div className="rounded-full border border-border/70 bg-background/60 p-2 shadow-lg shadow-primary/5 backdrop-blur-2xl">
        <ColorSwatchPicker
          aria-label="Pick a color"
          value={color}
          onChange={(next: PickedColor) => setColor(next.toString("hex").toUpperCase())}
        >
          {THEME_COLORS.map((swatch) => (
            <ColorSwatchPicker.Item key={swatch} color={swatch}>
              <ColorSwatchPicker.Swatch />
              <ColorSwatchPicker.Indicator />
            </ColorSwatchPicker.Item>
          ))}
        </ColorSwatchPicker>
      </div>
    </div>
  )
}
