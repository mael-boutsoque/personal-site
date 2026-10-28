export const THEME_COLOR_STORAGE_KEY = "site-secondary-color"
export const THEME_COLOR_STYLE_ID = "site-secondary-color"

/** Palette offered by the floating color picker. */
export const THEME_COLORS = [
  "#63D7BA", // vert
  "#B8B8FF", // violet
  "#d4a373", // marron
  "#a0c4ff", // bleu
]

export const DEFAULT_THEME_COLOR = "#B8B8FF"

/** Black or white, whichever reads better on top of the given color. */
export function readableForeground(hex: string) {
  const value = hex.replace("#", "")
  const full =
    value.length === 3
      ? value
          .split("")
          .map((char) => char + char)
          .join("")
      : value

  const channel = (offset: number) => {
    const srgb = parseInt(full.slice(offset, offset + 2), 16) / 255
    return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4
  }
  const luminance = 0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4)
  return luminance > 0.4 ? "#000000" : "#ffffff"
}

/** CSS that maps the picked color onto the site's accent tokens. */
export function themeColorCss(hex: string) {
  const foreground = readableForeground(hex)
  return `:root:root{--primary:${hex};--primary-foreground:${foreground};--secondary:${hex};--secondary-foreground:${foreground};--ring:${hex}}`
}

/**
 * Runs before the first paint so the stored color is applied without a flash.
 * Kept in sync with `themeColorCss` (same tokens, same contrast rule).
 */
export const themeColorPreloadScript = `(function(){try{
var p=${JSON.stringify(THEME_COLORS)};
var c=String(localStorage.getItem(${JSON.stringify(THEME_COLOR_STORAGE_KEY)})||"").toUpperCase();
if(p.indexOf(c)<0)c=${JSON.stringify(DEFAULT_THEME_COLOR)};
var h=c.slice(1);
if(h.length===3)h=h.replace(/./g,function(x){return x+x});
var ch=function(o){var s=parseInt(h.substr(o,2),16)/255;return s<=0.04045?s/12.92:Math.pow((s+0.055)/1.055,2.4)};
var l=0.2126*ch(0)+0.7152*ch(2)+0.0722*ch(4);
var f=l>0.4?'#000000':'#ffffff';
var s=document.createElement('style');
s.id=${JSON.stringify(THEME_COLOR_STYLE_ID)};
s.textContent=':root:root{--primary:'+c+';--primary-foreground:'+f+';--secondary:'+c+';--secondary-foreground:'+f+';--ring:'+c+'}';
document.head.appendChild(s);
}catch(e){}})()`
