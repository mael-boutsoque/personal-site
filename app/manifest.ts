import type { MetadataRoute } from "next"
import { defaultDescription, siteName } from "@/lib/seo"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} — Digital Systems Engineer`,
    short_name: siteName,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/logo_no_bg.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
